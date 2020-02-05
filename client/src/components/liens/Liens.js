import React, { useContext, useEffect  } from 'react';
import LienItem from './LienItem';
import LienContext from '../../context/contact/lienContext';

const Liens = () => {
  
  const lienContext = useContext(LienContext);

  const { liens, searchLiens } = lienContext;

  useEffect(() => {
    
   }, [lienContext, searchLiens]);
  return (
    <div>
      {liens.map((lien => <LienItem key={lien._id} lien={lien}/>))}
    </div>
  );
  }



export default Liens;
