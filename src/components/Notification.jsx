import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
};
