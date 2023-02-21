import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount]=useState(0);
  const [text,setText]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let a = parseInt(count);
    if(a<0){
      setText(data.slice(0,1));
      return;
    }
    setText(data.slice(0,a));
  }
  return (
  <section className="section-center">
    <h3>Tired of boring lorem ipsum ?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="ammount">Paragraphs:</label>
      <input type="number" id='ammount' name='ammount' value={count} onChange={(e)=> setCount(e.target.value)} />
      <button type='submit' className='btn'>Generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((item)=>{
        return (<p>
          {item}
        </p>
        );
      })}
    </article>
  </section>
    )
}

export default App;
