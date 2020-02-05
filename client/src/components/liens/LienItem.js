import React, { useContext } from 'react'
import LienContext from '../../context/contact/lienContext';

const LienItem = ({ lien }) => {
    const lienContext = useContext(LienContext);
    const { _id, name, address, amount, plaintiff } = lien;
    const { deleteLien, postLien } = lienContext;
    const onDelete = () => {
        deleteLien(_id);
    };
    
    const onSubmit = e => {
        postLien(lien);
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name}
            </h3>
            <ul className="list">
             <li>Address:{address}</li>
             <li>Lien Amount: ${amount}.00</li>
             <li>Plaintiff: {plaintiff}</li>
            </ul>
            <p>
    <button className="btn btn-dark btn-sm" onClick={onSubmit}>Convert To Lead</button>
    <button className="btn btn-danger btn-sm" onClick={onDelete}>Do Not Contact</button>
            </p>
        </div>
    )

};

export default LienItem