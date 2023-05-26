import PropTypes from 'prop-types';
import { ButtonContainer, ButtonFeedBack } from './FeedbackOptions.styled';

function FeedbackOptions({ handle }) {
  return (
    <ButtonContainer>
      <ButtonFeedBack name="good" onClick={handle}>
        Good
      </ButtonFeedBack>
      <ButtonFeedBack name="neutral" onClick={handle}>
        Neutral
      </ButtonFeedBack>
      <ButtonFeedBack name="bad" onClick={handle}>
        Bad
      </ButtonFeedBack>
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  handle: PropTypes.func.isRequired,
};

export { FeedbackOptions };
