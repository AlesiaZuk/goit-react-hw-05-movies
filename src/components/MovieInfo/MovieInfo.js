import no_poster from '../../image/no_poster.jpg';

import s from './MovieInfo.module.css';

function MovieInfo({ movieById }) {
  return (
    <div className={s.wrap}>
      <div className={s.thumb}>
        {movieById.poster_path ? (
          <img
            src={`https://www.themoviedb.org/t/p/w500/${movieById.poster_path}`}
            alt={movieById.title}
            className={s.img}
          />
        ) : (
          <img src={no_poster} alt={movieById.title} className={s.img} />
        )}
      </div>

      <div className={s.inner}>
        <h2 className={s.title}>{movieById.title}</h2>

        <table className={s.table}>
          <tbody>
            <tr className={s.item}>
              <td className={s.subtitle}>Vote / Votes</td>
              <td className={s.text}>
                <span className={s.innerRating}>{movieById.vote_average}</span>
                <span className={s.innerVotes}>{movieById.vote_count}</span>
              </td>
            </tr>
            <tr className={s.item}>
              <td className={s.subtitle}>Popularity</td>
              <td className={s.text}>{movieById.popularity}</td>
            </tr>
            <tr className={s.item}>
              <td className={s.subtitle}>Original Title</td>
              <td className={s.text}>{movieById.title}</td>
            </tr>
          </tbody>
        </table>

        <p className={s.caption}>About</p>
        <p className={s.desc}>{movieById.overview}</p>
      </div>
    </div>
  );
}

export default MovieInfo;
