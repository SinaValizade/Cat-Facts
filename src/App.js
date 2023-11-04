// $in@
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from "react";
import CatFact from "./component/CatFact";

function App() {
    const [fact ,setFact] = useState('')
    const [content ,setContent] = useState('')
    useEffect(()=>{
        getFact();
    },[])

    function getFact() {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setFact(res.data.fact);
        })
        setContent(fact);
    }
    return (
    <div className="App">
        <CatFact getFact={getFact} content={content}/>
    </div>
  );
}

export default App;
