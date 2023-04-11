#!/usr/bin/env node 

import minimist from 'minimist';
import express from "express"

import { rps,rpsls } from "./lib/rpsls.js";


const args = minimist(process.argv.slice(2));

app.use(express.json());
const app = express();

const PORT = process.env.PORT || 5000;

// Default API endpoint
app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});

// Check endpoint at /app/
app.get('/app/', (req, res) => {
  res.status(200).send('200 OK');
});

app.get('/app/rps/', (req, res) => {
  res.status(200).send(JSON.stringify(rps()))
});

app.get('/app/rpsls/', (req, res) => {
  res.status(200).send(JSON.stringify(rps()))
});

app.get('/app/rps/play/', (req, res) => {
  const { shot } = req.query;
res.status(200).send(JSON.stringify(rps(shot)))
});

app.get('/app/rpsls/play/', (req, res) => {
  const { shot } = req.query;
res.status(200).send(JSON.stringify(rpsls(shot)))
});

app.get('/app/rpsls/play/:shot', (req, res) => {
   const { shot } = req.params;
res.status(200).send(JSON.stringify(rps(shot)))
});

app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
