const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGO_URL;
if (!uri) {
  throw new Error("Mongo URI is missing. Please set it in the .env file.");
}
const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let mongoClient; // Private variable to hold the singleton instance

async function getMongoClient() {
  if (!mongoClient) {
    mongoClient = new MongoClient(uri, clientOptions);
    await mongoClient.connect();
    console.log("Established new connection to MongoDB.");
  }

  return mongoClient;
}

async function runDbCOnnection() {
  try {
    const client = await getMongoClient();
    // Use the client instance for your database operations
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Consider adding logic to handle connection errors and reconnections
    // if necessary for your application's requirements.
  }
}

module.exports = {
  runDbCOnnection,
  getMongoClient, // Optionally expose for controlled access
};
