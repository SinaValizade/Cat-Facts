import React from "react";
const CatFact = (props) => {

    return (
        <div>
            <h1 className="title">Cat facts</h1>
            <button onClick={props.getFact}>Tell me some fact !</button>
            <p className="help">Click on this button to see some fact about cats</p>
            <p className="fact" style={{border: props.content !== "" && '2px solid #bdbdbd'}}>{props.content}</p>
        </div>
    )
}
export default CatFact;