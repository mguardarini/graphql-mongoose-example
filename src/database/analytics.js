import mongoose from "mongoose";

const Schema = mongoose.Schema;
// create a schema
const analitycsSchema = new Schema({
    uid: {type:String},
    hardwareId: {type:String},
    employer: {type:String},
    people:{type:Number}
}, {collection:"software"});
// we need to create a model using it
export const analitycs = mongoose.model('analitycs', analitycsSchema);
