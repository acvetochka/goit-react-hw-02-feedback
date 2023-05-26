import PropTypes from 'prop-types';
import { ListFeedback, ItemFeedback, Number } from './Statistic.styled';

function Statistics({ good, neutral, bad, totalFeedback, positiveFeedback }) {
  return (
    <ListFeedback>
      <ItemFeedback>
        Good: <Number>{good}</Number>
      </ItemFeedback>
      <ItemFeedback>
        Neutral: <Number>{neutral}</Number>
      </ItemFeedback>
      <ItemFeedback>
        Bad: <Number>{bad}</Number>
      </ItemFeedback>
      <ItemFeedback>
        Total: <Number>{totalFeedback}</Number>
      </ItemFeedback>
      <ItemFeedback>
        Positive feedback: <Number>{positiveFeedback}%</Number>
      </ItemFeedback>
    </ListFeedback>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export { Statistics };
