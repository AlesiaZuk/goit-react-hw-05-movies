import s from './Form.module.css';

function Form({ searchQuery, handelChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          type="text"
          value={searchQuery}
          onChange={handelChange}
          className={s.search_form}
          placeholder="Search movies..."
          required
        />
      </label>
      <button type="submit" className={s.search_button}>
        Search
      </button>
    </form>
  );
}

export default Form;
