const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "<connection string uri>";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const Course_management = database.collection('Course_management');

    // Query for a course_management that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const course_management = await Course_management.findOne(query);

    console.log(course_management);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);