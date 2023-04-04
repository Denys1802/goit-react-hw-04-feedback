import { useState } from 'react';
import { Feedback } from './feedback/Feedback';
import { Statistic } from './statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelFeedback = e => {
    if (e === 'good') {
      setGood(good + 1);
    } else if (e === 'neutral') {
      setNeutral(neutral + 1);
    } else if (e === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          handelFeedback={handelFeedback}
          options={['good', 'neutral', 'bad']}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handelFeedback = e => {
//     if (e === 'Good') {
//       this.setState({ good: this.state.good + 1 });
//     } else if (e === 'Neutral') {
//       this.setState({ neutral: this.state.neutral + 1 });
//     } else if (e === 'Bad') {
//       this.setState({ bad: this.state.bad + 1 });
//     }
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     if (this.countTotalFeedback() === 0) {
//       return 0;
//     }
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//  return (
//    <>
//      <Section title="Please leave feedback">
//        <Feedback
//          handelFeedback={this.handelFeedback}
//          options={['Good', 'Neutral', 'Bad']}
//        />
//      </Section>

//      <Section title="Statistics">
//        {this.countTotalFeedback() !== 0 ? (
//          <Statistic
//            good={good}
//            neutral={neutral}
//            bad={bad}
//            positivePercentage={this.countPositiveFeedbackPercentage()}
//            total={this.countTotalFeedback()}
//          />
//        ) : (
//          <Notification message="There is no feedback" />
//        )}
//      </Section>
//    </>
//  );
//   }
// }
