import s from './SectionMovie.module.css';

function SectionMovie({ children }) {
  return <section className={s.section}>{children}</section>;
}
export default SectionMovie;
