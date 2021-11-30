import s from './Button.module.css';
function Button({ handleGoBack }) {
  return (
    <button className={s.button} onClick={handleGoBack}>
      Go back
    </button>
  );
}

export default Button;
