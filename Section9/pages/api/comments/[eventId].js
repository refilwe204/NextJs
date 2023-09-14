import { MongoClient } from 'mongodb';

import { connectDatabase, insertDocument, getAllDocuments } from '../../helpers/db-util';


async function handler(req, res) {
    const eventId = req.query.eventId;

    let client;

    try{
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({message: 'Connecting to the database failed!'});
      return;
    }


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
        //client.close();
        return;
     }

     console.log(email, name, text)
     const newComment ={
        email,
        name,
        text,
        eventId
     };

     let result;

     try{
       result = insertDocument(client, 'comments', newComment);
       newComment._id = result.insertedId;
       res.status(201).json({ message: 'Added comment' , comment: newComment });
    }  catch (error) {
       res.status(500).json({message: 'Inserting comments failed!'})
       return;
    }

    }


  if(req.method === 'GET') {

    try{

      const documents = await getAllDocuments(client, 'comments', {_id: -1}, { eventId: eventId });
      res.status(200).json({ comments: dummyList});
    } catch (error) {
      res.status(500).json({message: 'Getting comments failed.'});
      return;
    }
  }

    //client.close();

}

export default handler;