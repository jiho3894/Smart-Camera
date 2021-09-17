import React, { useEffect, useState} from 'react';

const App = () => {
  const [initalData, setIntialData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      res => res.json()
    ).then(data => 
      setIntialData(data)
      )
  },[]);

  return(
    <div>
      <h1>{initalData.title}</h1>
    </div>
  );
}

export default App;