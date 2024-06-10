import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    event.preventDefault();
    const name = event.target.name;
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return (good / this.countTotalFeedback) * 100;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentPositive = this.countPositiveFeedbackPercentage();
    const leaveFeedback = this.onLeaveFeedback;
    return (
      <div>
        <Section title="Please leave feedback!">
          <FeedbackOptions
            onLeaveFeedback={leaveFeedback}
            options={["good", "neutral", "bad"]}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={totalFeedback}
              percentPositive={percentPositive}
            />
          ) : (
            <Notification message="There is no feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
