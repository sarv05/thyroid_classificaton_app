import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://sarveshdoveton2004:sarveshbabu@mern.ajzmmmx.mongodb.net/mern-thyroid?retryWrites=true&w=majority").then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

  const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
  