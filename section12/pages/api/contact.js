import { MongoClient } from 'mongodb';

async function Handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.jvoxrhm.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority&appName=AtlasApp`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      console.error('Error connecting to the database:', error);
      res.status(500).json({ message: 'Could not connect to the database' });
      return;
    }

    const db = client.db('AtlasApp');

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      console.error('Error storing message:', error);
      res.status(500).json({ message: 'Storing message failed' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Successfully stored message', newMessage });
  }
}

export default Handler;
