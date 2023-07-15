import React from 'react'
import { Link } from 'react-router-dom'
import ResultsTable from './ResultsTable'
import '../styles/Result.css'

function Results() {
    const onReStart = ()=>{
        console.log('onRestart')
    }
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz application</h1>
        <div className='result flex-center'>
            <div className='flex'>
                <span>Username</span>
                <span className='bold'>Maha</span>
            </div>
            <div className='flex'>
                <span>Total Points :</span>
                <span className='bold'>50</span>
            </div>
            <div className='flex'>
                <span>Total Question :</span>
                <span className='bold'>05</span>
            </div>
            <div className='flex'>
                <span>Total Attempts :</span>
                <span className='bold'>02</span>
            </div>
            <div className='flex'>
                <span>Total Earn points :</span>
                <span className='bold'>30</span>
            </div>
            <div className='flex'>
                <span>Quiz Result</span>
                <span className='bold'>Pass</span>
            </div>
        </div>
        <div className='start'>
            <Link to={'/'} onClick={onReStart} className='btn'>Restart</Link>
        </div>
        <div className='container'>
        <ResultsTable />
        </div>
    </div>
  )
}

export default Results