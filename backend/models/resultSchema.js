import mongoose from "mongoose";
const { Schema } = mongoose;

/*Modelo do resultado*/

const resultModel = new Schema({
    username : { type : String },
    answers : { type : Array, default : []},
    attemps : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
});

export default mongoose.model('result', resultModel);