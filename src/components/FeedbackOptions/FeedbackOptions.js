import PropTypes from 'prop-types';
import { ButtonContainer, ButtonFeedBack } from './FeedbackOptions.styled';

function FeedbackOptions({ handle, options }) {
  return (
    <ButtonContainer>
      {options.map(option => (
        <ButtonFeedBack key={option} name={option} onClick={handle}>
          {option}
        </ButtonFeedBack>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  handle: PropTypes.func.isRequired,
};

export { FeedbackOptions };
