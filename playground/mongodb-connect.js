const { MongoClient } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to mongodb server");
    }
    console.log("Database connected");
    const db = client.db("TodoApp");
    db.collection("Todos").insertOne({
      text: "Something to do",
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
  }
);
