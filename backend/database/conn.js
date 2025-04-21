import mongoose from "mongoose";

export default async function connect (){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Banco de dados conectado com sucesso!")
}