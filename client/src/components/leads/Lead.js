import React from 'react'
import CallContext from '../../context/call/callContext';
import LienContext from '../../context/contact/lienContext';
import LeadForm from './LeadForm';


const Lead = () => {
    return (
    <CallContext.Consumer>
        {call => (
          <LienContext.Consumer>
            {lien => (
              <LeadForm call={call} lien={lien} />
            )}
          </LienContext.Consumer>
        )}
      </CallContext.Consumer>
 
    )
}

export default Lead
