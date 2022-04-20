import React, { useState } from "react";
import Values from 'values.js';
import SingleColor from "./SingleColor";

function App() {
  const [color,SetColor]=useState('');
  const [error,SetError]=useState(false);
  const [list,SetList]=useState(new Values('#3CF479').all(5));

  const handleSubmit =(e) =>{
      e.preventDefault();
      try {
        let colors=new Values(color).all(10);
        SetList(colors);
        
      } catch (error) {
        SetError(true); 
      }
    }

  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={color}
        onChange={(e)=>SetColor(e.target.value   )} 
        placeholder='#3cf479'
        className={`${error ? 'error' : null}`} />
        <button className="btn" type='submit'>
          submit
        </button>
      </form>

    </section>
    <section className="colors">
      {list.map((color,index)=>{
        return <SingleColor key={index} {...color} index={index} />

      })}

    </section>    
    </>
  );
}

export default App;
