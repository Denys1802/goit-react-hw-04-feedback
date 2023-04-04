import propTypes from 'prop-types';
import { Button } from './Feedback.styled';
export const Feedback = ({ handelFeedback, options }) => {
  return (
    <>
      {options.map((option, index) => (
        <Button key={index} onClick={() => handelFeedback(option)}>
          {option}
        </Button>
      ))}
    </>
  );
};

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  handelFeedback: propTypes.func.isRequired,
};
