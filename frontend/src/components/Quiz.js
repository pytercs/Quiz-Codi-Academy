import React, { useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion } from '../hooks/FetchQuestion';

/*Importação do armazenamento redux */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

  const [check, setChecked] = useState(undefined)

  const result = useSelector(state => state.result.result);
  const {queue, trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()

  /*Evento de próxima pergunta*/
  function onNext(){
    if(trace < queue.length) {
      /*Atualiza o valor do rastreio (trace) por 1 usando MoveNextQuestion*/
      dispatch(MoveNextQuestion());
    }
    /*Reiniciar o valor da variável escolhida*/
    setChecked(undefined)
  }


  function onChecked(check){
    setChecked(check)
  }

  /* Finalizado após a última pergunta*/
  if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={true}></Navigate>
}

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz de Programação</h1>
    
        {/*Mostrar perguntas*/}
        <Questions onChecked={onChecked}/>
          

        <div className='grid'>
          <div></div>
          <button className='btn next' onClick={onNext}>Próxima Pergunta</button>
        </div>   
    </div>
  )
}
