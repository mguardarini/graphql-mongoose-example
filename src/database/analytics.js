import mongoose from "mongoose";

const Schema = mongoose.Schema;
// create a schema
const analitycsSchema = new Schema({
    uid: {type:Number},
    hardwareId: {type:String},
    employer: {type:String},
    people_count:{type:Number},
    completed: {type:Boolean}
}, {collection:"software"});
// we need to create a model using it
export const analitycs = mongoose.model('analitycs', analitycsSchema);
