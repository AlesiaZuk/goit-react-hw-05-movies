import s from './Section.module.css';

function Section({ children }) {
  return <section className={s.section}>{children}</section>;
}

export default Section;
