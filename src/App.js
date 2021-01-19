import React, {useState} from 'react';
import Article from './Article';
import './App.css';

function App() {

  const [title,setTitle] = useState([{title:'Au Bonheur des Dames'},{title:"Kafka sur le Rivage"},{title:"À la Croisée des Mondes"}]);
  const [author,setAuthor] = useState([{author:'Zola E.'},{author:"Murakami H."},{author:"Pullman P."}]);

  return (
    <div className="App">
     <Article book={[title,author]} test='coucou'/>
    </div>
  );
}

export default App;
