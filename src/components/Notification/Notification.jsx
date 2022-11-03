import PropTypes from 'prop-types';

export const Notification = ({ title }) => {
  return <p>There is no feedback</p>;
};

Notification.propTypes = {
  title: PropTypes.string,
};
