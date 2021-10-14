import express from 'express';
import server from './app';

const main = async () => {
  server(express());
};

main().catch(err => {
  console.log(err);
});

//import Server from './server';
//new Server().start();
