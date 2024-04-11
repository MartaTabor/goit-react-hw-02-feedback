import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [feedback, setFeedback] = useState({ ...INITIAL_STATE });
  const options = Object.keys(INITIAL_STATE);

  const handleFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + bad + neutral;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div>
      <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};
