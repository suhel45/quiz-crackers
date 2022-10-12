import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import QuestionDetails from './QuestionDetails';
import 'react-toastify/dist/ReactToastify.css';
const Question = (props) => {
    const options = props.question.options;
    const correctAnswer = props.question.correctAnswer;
    const icon = ()=>{
        
        toast(correctAnswer,{
            position:"top-center"
        });
    }
    return ( 
    <div className="bg-gray-100 text-center flex items-center max-w-md mx-auto mt-12">
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
      </div>
      <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-1">
        <div className="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
          <div className="p-5">
            <Button onClick={()=>icon()} ><i class="fas fa-eye-slash"></i></Button>
            <ToastContainer></ToastContainer>
            <p>{props.question.question.slice(3,-4)} </p>
            {
                options.map(option =><QuestionDetails option={option} question={props.question}></QuestionDetails>)
            }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Question;