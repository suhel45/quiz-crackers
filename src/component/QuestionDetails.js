import { Button } from '@mui/material';
import { style } from '@mui/system';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionDetails = (props) => {
    const correctAnswer = props.question.correctAnswer;
    const add = (option)=>{
        if(option===correctAnswer){
            toast.success("Corrent Answer",{
                position:"top-center"
            });

        }
        else{
            toast.error("Wrong Answer!",{
                position:"top-center"
            });
        }
        
    }
    
    return (
            <div className='border-2 border-sky-500 mt-3'>
                <input  onClick={()=>add(props.option)} className='mx-4 text-center' type="radio" name="option" />
                {props.option}
             <ToastContainer></ToastContainer>
            </div>
    );
};

export default QuestionDetails;