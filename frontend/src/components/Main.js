import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main.css'
import logoQuiz from '../images/CodiLogo.svg';
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <img src={logoQuiz} alt="Codi do Milhão"/>
        <h1 className='title text-light'>Quiz de Programação</h1> 

        <ol className='instructions'>
            <li>Serão feitas 5 perguntas relacionadas a programação (HTML, CSS, linguagens e etc).</li>
            <li>Cada pergunta terá 4 alternativas mas você poderá escolher apenas uma.</li>
            <li>Você poderá voltar para as perguntas depois de respondidas e mudar as respostas antes do quiz acabar.</li>
            <li>O resultado será anunciado no fim do quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className='userid' type="text" placeholder='Seu nome*'/>
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Começar</Link>
        </div>

    </div>
  )
}

