import React, { useState, useContext } from 'react';
import LienContext from '../../context/contact/lienContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const lienContext = useContext(LienContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      lienContext.searchLiens(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Liens...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

    </div>
  );
};

export default Search;