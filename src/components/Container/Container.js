import s from './Container.modele.css';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
