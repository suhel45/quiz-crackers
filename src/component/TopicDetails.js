import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const TopicDetails = () => {
    const loadTopic = useLoaderData();
    // console.log(loadTopic.data.questions)
    const questions = loadTopic.data.questions;
    return (
        <div>
            {
                questions.map(question => <Question
                key={question.id}
                question={question}
                ></Question>)
            }
        </div>
    );
};

export default TopicDetails;