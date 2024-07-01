import { MongoClient } from 'mongodb';

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';
        const url = `mongodb://${host}:${port}`;
        this.client = new MongoClient(url, { useUnifiedTopology: true });

        this.client.connect()
            .then(() => {
                this.db = this.client.db(database);
                console.log('MongoDB client connected to the server');
            })
            .catch((error) => console.error('Error connecting to MongoDB:', error));
    }

    async isAlive() {
        try {
            await this.client.db("admin").command({ ping: 1 });
            return true;
        } catch (e) {
            return false;
        }
    }

    async nbUsers() {
        return this.db.collection('users').countDocuments();
    }

    async nbFiles() {
        return this.db.collection('files').countDocuments();
    }
}

const dbClient = new DBClient();
export default dbClient;

