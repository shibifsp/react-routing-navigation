import React from 'react'
import DisplayMessage from './DisplayMessage';
import { useLocation } from 'react-router-dom';

export default function Results() {
  const location = useLocation();
  const query = location.state?.query;
  return (
    <div className="container">
      <div className='result'>
        <div className="message">
          <DisplayMessage />
        </div> 
        {query ? (
          <ul>
          <li>{query}</li>
        </ul>
        ) : <p>No query provided!..</p>}
      
      </div>
    </div>
   
  )
}
