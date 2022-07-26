import React, { useState } from 'react';
import './App.css';
import List from './component/List';

interface IState{
  people:{
    name: string,
    age:number,
    url:string,
    note ?: string
  }[]
}

function App() {

  const [people,setPeople] = useState<IState["people"]>([])

  return (
    <div className="App">
      <h1>People Invited to my party</h1>

      <List people={people} />

    </div>
  );
}

export default App;
