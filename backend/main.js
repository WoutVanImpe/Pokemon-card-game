const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.MDBlink;
const app = express();
const myPort = process.env.MDBport;

app.use(cors());
app.use(express.json());

async function getDatabase() {
	// makes a new client and passes along the url
	const client = new MongoClient(url);
	// connects the client with the database
	await client.connect();
	// return de client to the respective collection
	return client.db("pokemonGame");
}
