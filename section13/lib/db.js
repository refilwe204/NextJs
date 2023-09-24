import { MongoClient} from 'mongodb'

export async function connectToDatabase () {
    const client =  await MongoClient.connect(
        'mongodb+srv://refilwe101:L4Ysqn4iNX5k1WrH@cluster0.jvoxrhm.mongodb.net/?retryWrites=true&w=majority&auth-demo=AtlasApp'
        );

    return client;
}
