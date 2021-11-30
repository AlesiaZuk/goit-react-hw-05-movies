import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

function LoaderSpinner() {
  return (
    <div className={s.section}>
      <Loader
        type="Circles"
        color="#b89393"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
export default LoaderSpinner;
