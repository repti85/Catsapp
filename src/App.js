import './App.css';
import { useState } from 'react';
import CatFactDetail from './Components/catFactDetail';

function App() {
 
  const [facts, setfacts] = useState([])
  const random = Math.floor(Math.random() * 34)

  async function fetchData1() {       
    let promise = await getFacts(random)
    const facts1 = await promise.data
    const randomFact = Math.floor(Math.random() * facts1.length)
    setfacts(facts1[randomFact])
  }
  
  return (
    <div className='container'>
      <div className='title'>
        Amazing Facts About Cats
      </div>
      <div className='divButton'>
        <button className="button" onClick={() => { fetchData1() }}>{'New fact'}</button>
      </div>
      <div className='divFactsParent'>
        <div className='divFacts'>
          <CatFactDetail fact={facts}></CatFactDetail>
        </div>
      </div>
    </div>
  );
}
async function getFacts(props) {  

  const response = await fetch(`https://catfact.ninja/facts?page=${props}`);
  return await response.json();
}

export default App;
