import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

function Main() {
    const inputRef = useRef(null)
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <ol>
            <li>you will be asked 10 questions one after another</li>
            <li>10 points is awarded for the correct answer</li>
            <li>Each question has three options.you can choose only one option</li>
            <li>you can review and change answer before Quiz finish</li>
            <li>The result will be declared at the end of the quiz</li>
        </ol>
        <form id='form'>
            <input ref={inputRef} type='text' placeholder='Username*'></input>
        </form>
        <div className='start'>
            <Link to={'quiz'} className='btn'>Start the Quiz</Link>
        </div>
    </div>
  )
}

export default Main