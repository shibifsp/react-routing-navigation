import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [inputVal,setInputVal] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results',{ state: { query: inputVal } });
  } 
  return (
    <div>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button>Submit</button>
        </form>
      </div>  
    </div>
  )
}
