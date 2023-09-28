import { MongoClient} from 'mongodb'

export async function connectToDatabase () {
    const client =  await MongoClient.connect(
        'mongodb+srv://<user1>:6MO9N6WOGgmxF57Q@cluster0.jvoxrhm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
        );

    return client;
}
