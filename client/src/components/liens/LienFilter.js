import React, { useContext, useRef, useEffect } from 'react';
import LienContext from '../../context/contact/lienContext';

const LienFilter = () => {
  const lienContext = useContext(LienContext);
  const text = useRef('');

  const { filterLiens, clearFilter, filtered } = lienContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterLiens(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Liens...'
        onChange={onChange}
      />
    </form>
  );
};

export default LienFilter;