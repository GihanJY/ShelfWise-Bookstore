import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import bookRoute from './routes/booksRoute.js';

const app = express();

app.use(express.json());

app.get("/", function (request, response) {
  console.log(request);
  return response.status(234).send("Welcome to MERN stack");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database.");
    app.listen(PORT, () => {
      console.log(`App listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//middleware for handling CORS policy
//===================================

//option 1: Allow all origins with default of cors(*)
app.use(cors());
//option 2: Allow cusotm origins
/*
app.use({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-type'],
});
*/

//middleware communicate with booksRoute.js
app.use('/books', bookRoute);
