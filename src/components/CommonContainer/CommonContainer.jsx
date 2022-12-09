import css from './CommonContainer.module.css';

const CommonContainer = ({ children }) => {
  return (
    <div className={css.container}>{children}</div>
  )
};

export default CommonContainer;