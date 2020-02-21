import React from 'react'

const MyLeads = () => {
    return (
        <div className='sidebar'>
             <div className='card'>   
               <input
          type='text'
          name='text'

          placeholder='Search...' 
        />
        <input
          type='submit'
          value='My Leads'
          className='btn-success btn-sm btn'

        />
        </div>
        </div>
    )
}

export default MyLeads
