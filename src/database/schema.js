import mongoose from "mongoose";

const Schema = mongoose.Schema;
// create a schema
const analitycs = new Schema({
    id: Number,
    hardwareId: String,
    employer: String,
    people_count:Number,
    completed: Boolean
}, {collection:"analitycs_software"});
// we need to create a model using it
export const analitycs = mongoose.model('analitycs', analitycs);
