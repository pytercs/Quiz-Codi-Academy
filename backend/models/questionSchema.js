import mongoose from "mongoose";
const { Schema } = mongoose;

/*Modelo da pergunta*/

const questionModel = new Schema({
    questions : { type : Array, default: []},
    answers : { type : Array, default: []},
    createdAt : { type : Date, default: Date.now}
});

export default mongoose.model('question', questionModel)