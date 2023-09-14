import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
        res.status(422).json({message: 'invalid email address'});
      return; 
    }

    const client = await MongoClient.connect(
      'mongodb+srv://nqatyelwaangelin:<angeli@101>@cluster0.gx7p3wm.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp'
      );
      const db = client.db();

      await db.collection('newsletter').insertOne({ email: userEmail});

      client.close();
      
      res.status(201).json({message: 'signed up'})
  }
}

export default handler;