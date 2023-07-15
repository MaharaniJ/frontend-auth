import React, { useEffect, useState } from 'react'
import data from '../components/database/data'
import { useFetchQuestion } from '../hooks/FetchQuestions'

function Question() {
    const [checked,setChecked] = useState(undefined)
    const [{isLoading, apiData, serverError}] = useFetchQuestion()
    const question = data;
    useEffect(()=>{
    //    console.log(isLoading)
    //    console.log(serverError)
       console.log(apiData)
    },[])

    const onSelect=()=>{

    }

  return (
    <div className="questions">
    <h2 className="text-light">{question.question}</h2>
    <ul key={question.id}>
      {question.options.map((q, i) => (
        <li key={i}>
          <input
            type="radio"
            value={false}
            name="options"
            id={`q${i}-option`}
            onChange={onSelect} // Remove the parentheses to pass the function reference
          />
          <label htmlFor={`q${i}-option`} className="text-primary">
            {q}
          </label>
          <div className="check"></div>
        </li>
      ))}
    </ul>
  </div>
);
}
export default Question