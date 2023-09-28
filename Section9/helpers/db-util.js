import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://<user3>:GEpL0IElDi9mQIj9@cluster0.jvoxrhm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
    );

    return client;
    GEpL0IElDi9mQIj9
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);

    return result
}

export async function getAllDocuments(client, collection ,sort) {
    const db = client.db();

    const documents = await db
      .collection(collection)
      .find()
      .sort(sort)
      .toArray();

      return documents
}
