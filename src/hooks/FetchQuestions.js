import React,{ useEffect, useState } from "react"
import data from '../components/database/data'
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({
      isLoading: false,
      apiData: [],
      serverError: null,
    });
  
    useEffect(() => {
      setGetData(prev => ({ ...prev, isLoading: true }));
      
  
      (async () => {
        try {
          let questions = await data;
          console.log(questions)
          
          if (questions.length > 0) {
            setGetData(prev => ({ ...prev, isLoading: false }));
            setGetData(prev => ({ ...prev, apiData: questions }));
            dispatch(Action.startExamAction( questions ));
          }  
          else {
            throw new Error("No Questions Available");
          }
        } catch (error) {
          setGetData(prev => ({ ...prev,serverError: error }));
        }
      })();
    }, [dispatch]);
  
    return [getData, setGetData];
  };

 /** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
  try {
      dispatch(Action.moveNextAction()); /** increase trace by 1 */
  } catch (error) {
      console.log(error)
  }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
  try {
      dispatch(Action.movePrevAction()); /** decrease trace by 1 */
  } catch (error) {
      console.log(error)
  }
}
  