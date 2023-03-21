import PropTypes from 'prop-types';
import css from './ComponentWrapper.module.css';

export const ComponentWrapper = ({ text, children }) => {
  return (
    <>
      <h2 className={css.title}>{text}</h2>;{children};
    </>
  );
};

ComponentWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
