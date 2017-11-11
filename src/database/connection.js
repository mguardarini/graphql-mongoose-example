import mongoose from "mongoose";

export function ConnectDatabase(){

    const promise = mongoose.connect('mongodb://localhost/local', {
      useMongoClient: true
    });

    const db = mongoose.connection;

    db.on('error', ()=> {
        console.log('Failed to connect to mongoose')
    });

    db.once('open', () => {
        console.log('Connected to mongoose')
    });
}
