import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
import { Statistic } from './statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelFeedback = e => {
    if (e === 'Good') {
      this.setState({ good: this.state.good + 1 });
    } else if (e === 'Neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    } else if (e === 'Bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            handelFeedback={this.handelFeedback}
            options={['Good', 'Neutral', 'Bad']}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              total={this.countTotalFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
