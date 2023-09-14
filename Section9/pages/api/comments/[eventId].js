import { MongoClient } from 'mongodb';

async function handler(req, res) {
    const eventId = req.query.eventId;

    const client = await MongoClient.connect('mongodb+srv://nqatyelwaangelin:<angeli@101>@cluster0.gx7p3wm.mongodb.net/newsletter?retryWrites=true&w=majority&appName=AtlasApp');

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
        id: new Date().toISOString(),
        email,
        name,
        text
     };

     console.log(newComment);

     res.status(201).json({ message: 'Added comment' , comment: newComment });
    }


    if(req.method === 'GET') {
        const dummyList =[
            { id: 'c1', name: 'max', text: 'A first comment!'},
            { id: 'c2', name: 'max', text: 'A second comment!'},
        ];

        res.status(200).json({ comments: dummyList});

    }

}

export default handler;