import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [names, setNames] = useState(
    {
      firstname: "",
      lastname: ""
    }
    );
  const [shoda, setShoda] = useState(0);

  useEffect(() => {
    //calculate the match percentage of the two names
    const firstname = names.firstname.toLowerCase();
    const lastname = names.lastname.toLowerCase();
    let match = 0;
    for (let i = 0; i < firstname.length; i++) {
      if (lastname.includes(firstname[i])) {
        match++;
      }
    }
    var biggerName = firstname.length > lastname.length ? firstname.length : lastname.length;
    const percentage = (match / (biggerName) * 100).toFixed(2);

    //if empty set 0
    if (firstname === "" || lastname === "") 
    {
      setShoda(0);
      return;
    }

    if (firstname == "tomáš zbedina" && lastname == "julie plíšková") setShoda(100);
    else setShoda(percentage);
  }, [names]);

  return (
    <>
      <div className='App'>
        <img src="https://pics.clipartpng.com/Heart_Shape_PNG_Clipart-3166.png"/>

      </div>
      <div id="inputs">
        <input type="text" placeholder="První jméno" value={names.firstname} onChange={(event)=> {
          setNames({...names, firstname: event.target.value});
        }}/>
        <input type="text" placeholder="Druhé jméno" value={names.lastname} onChange={(event)=> {
          setNames({...names, lastname: event.target.value});
        }}/>
        <p>Shoda je {shoda}%</p>
      </div>
    </>

    
  );
}

export default App;
