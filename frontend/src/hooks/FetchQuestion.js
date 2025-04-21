import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

/*Ações do redux*/ 
import * as Action from '../redux/question_reducer'
import { getServerData } from "../helper/helper"

/* Buscar a pergunta e colocar o valor no armazenamento*/
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState ({ isLoading : false, apiData : [], serverError: null})

    useEffect (() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /*Função async para pegar os dados do backend */
        (async ()=>{
            try{
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /* Disparar a ação */
                    dispatch(Action.startExamAction({ question : questions, answers }))
                } else {
                    throw new Error ("Nenhuma pergunta disponível");
                }

            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);
    
    return [getData, setGetData];
}

/* Função de disparo da próxima pergunta */
export const MoveNextQuestion = () => async (dispatch) => {
    try{ 
        dispatch(Action.moveNextAction());/*Aumenta o rastreio por 1 */
    } catch (error){
        console.log(error)
    }
}

