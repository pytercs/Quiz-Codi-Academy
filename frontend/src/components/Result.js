import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnPoints_Number, calPercentage } from '../helper/helper'

/*Importando as ações*/
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'
import { usePublishResult } from '../hooks/setResult';


export default function Result() {

  const dispatch =  useDispatch()
  const { questions : { answers}, result : { result, userId}} = useSelector(state => state)

  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 1);
  const percentage = calPercentage (earnPoints);

  /* Armazenar resultado do usuário*/
  usePublishResult({ 
    result, 
    username : userId, 
    attempts, 
    points: earnPoints, 
    achived : percentage });

  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }
  
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz de Programação</h1>

      <div className='result flex-center'>
          <div className='flex'>
              <span>Nome</span>
              <span className='bold'>{userId  || ""}</span>
          </div>

          <div className='flex'>
              <span>Total de Perguntas Respondidas </span>
              <span className='bold'>{attempts || 0}</span>
          </div>

          <div className='flex'>
              <span>Total de Acertos </span>
              <span className='bold'>{earnPoints || 0}</span>
          </div>

          <div className='flex'>
              <span>Percentual de Acertos </span>
              <span  className='bold'>{percentage || 0}%</span>
          </div>
      </div>

      <div className='start'>
          <Link className='btn' to={'/'} onClick={onRestart}>Recomeçar</Link>
      </div>

    </div>
  )
}
