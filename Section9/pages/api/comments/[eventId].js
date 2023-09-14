import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://nqatyelwaangelin:<angeli@101>@cluster0.gx7p3wm.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp');

    if(req.method === 'POST') {
     const { email, name, text } = req.body

     if(
        !email.includes('@') ||
        !name || 
        name.trim() === '' ||
        !text ||
        text.trim() === ''
     ) {
        res.status(422).json({ message: 'Invalid input'});
        return;
     }

     console.log(email, name, text)
     const newComment ={
        email,
        name,
        text,
        eventId
     };

     const db = client.db();

     const result = await db.collection('comments').insertOne(newComment);

     console.log(result);

     newComment.id = result.insertedId;

     res.status(201).json({ message: 'Added comment' , comment: newComment });
    }


    if(req.method === 'GET') {
        const dummyList =[
            { id: 'c1', name: 'max', text: 'A first comment!'},
            { id: 'c2', name: 'max', text: 'A second comment!'},
        ];

        res.status(200).json({ comments: dummyList});
    }

    client.close();

}

export default handler;