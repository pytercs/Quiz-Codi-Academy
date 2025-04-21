import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/*Pegar todas as PERGUNTAS*/
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({error})
    }
}

/*Colocar todas as PERGUNTAS*/
export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers }). then( function(err, data){
            res.json({ msg: "Dados salvos com sucesso!"})
        })
    } catch (error) {
        res.json({ error })
    }
}

/*Apagar todas as PERGUNTAS*/
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Perguntas apagadas com sucesso!"});
   } catch (error) {
        res.json({ error })
   }
}

/*Pegar todas as RESPOSTAS*/
export async function getResults(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/*Colocar todas as RESPOSTAS*/
export async function insertResults(req, res){
    try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Sem dados');

        Results.create({ username, result, attempts, points, achived }). then ( function (err, data){
            res.json({ msg : "Resultados salvos com sucesso!" })
        })

    } catch (error) {
        res.json({ error })
    }
}

/*Apagar todas as RESPOSTAS*/
export async function dropResults(req, res){
    try {
        await Results.deleteMany();
        res.json ({ msg: "Resultados apagados com sucesso!"})
    } catch (error) {
        res.json({ error })
    }
}