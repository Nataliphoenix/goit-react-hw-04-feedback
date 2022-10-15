import React from 'react';

import {Container} from './App.styled';
import {Section} from 'components/Section/Section'
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';


export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback= evt => {
    this.setState(prevState => ({
      [evt]: prevState[evt] + 1,
    }));
}
  
  countTotalFeedback = e => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total; 
  }

  countPositiveFeedbackPercentage = e =>{
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;

  }

  
  render(){
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

  return (

    <Container>

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
      </Section>
      
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good = { good }
            neutral = { neutral }
            bad = { bad }
            total = { total }
            positivePercentage = { positivePercentage }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    
    </Container>
  )
}
}