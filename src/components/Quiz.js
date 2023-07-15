import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestions';

function Quiz() {
  const [check, setCheck] = useState();
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(queue);
  }, [queue]);

  const onNext = () => {
    console.log('next click');
   if (trace < queue.length) {
        dispatch(MoveNextQuestion());
    }
  };

  const onPrev = () => {
    console.log('prev click');
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
  };

  function onChecked(check) {
    setCheck(check);
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>
      <Question />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
