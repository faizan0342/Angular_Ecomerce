const express = require("express");
const mongoose = require("mongoose")

const app = express();

async function connectDb(){
  await mongoose.connect("mongodb://localhost:27017" ,
    {
    dbName:"e-comm-store-db",
  }
  )
}

connectDb()
.then(() =>console.log("database succefully connect"))
.catch((err) => console.log("database" , err))

app.get("/" , (req , res) => {
res.send("server runing");
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
