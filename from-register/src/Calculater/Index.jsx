import React, { useState } from "react";
import "../style/claculater.css";

function Index() {
  const [fristvalue, setfirstvalue] = useState("");
  const [secondvalue, setsecondvalue] = useState("");
  const [result, setResult] = useState("");
  const [history, sethistory] = useState([]);

  const handleAddition = () => {
    const add = parseFloat(fristvalue) + parseFloat(secondvalue);
    setResult(add);
    addhistory(`${fristvalue}+${secondvalue}=${add}`)
  };
  const handleSub = () => {
    const sub = parseFloat(fristvalue) - parseFloat(secondvalue);
    setResult(sub);
    addhistory(`${fristvalue} - ${secondvalue}=${sub}`)
  };
  const handlemul = () => {
    const mul = parseFloat(fristvalue) * parseFloat(secondvalue);
    setResult(mul);
    addhistory(`${fristvalue}*${secondvalue}=${mul}`)
  };
  const handledivison = () => {
    const div = parseFloat(fristvalue) / parseFloat(secondvalue);
    setResult(div);
    addhistory(`${fristvalue} / ${fristvalue}=${div}`)
  };

  const Cleardata = () => {
    setfirstvalue("");
    setsecondvalue("");
    setResult("");
  };

  const addhistory = (entry) => {
    sethistory([...history, entry]);
  };

  const Clearhistory = () => {sethistory([])};
  return (
    <>
      <div className="box-2">
        <div className="box-3">
          <label className="label-1">enter number </label>
          <br></br>
          <input
            className="label-2"
            type="number"
            value={fristvalue}
            onChange={(event) => setfirstvalue(event.target.value)}
          />
          <label className="label-1">enter number </label>
          <br></br>
          <input
            className="label-2"
            type="number"
            value={secondvalue}
            onChange={(event) => setsecondvalue(event.target.value)}
          />

          {/* result */}
          <div>
            <label className="label-3"> Result </label>
            <br></br>
            {/* <input
              className="label-2"
              type="text"
              value="This is read-only text"
              readonly
              Result: {result}
            /> */}
            <div className="label-6">
              <label>{result} </label>
            </div>
          </div>

          {/* buttons */}
          <div class="button-group">
            <button onClick={handleAddition}  > + </button>
            <button onClick={handleSub}>- </button>
            <button onClick={handlemul}>*</button>
            <button onClick={handledivison}>/</button>
          </div>
         
          <div className="label-7">
         
            <div className="label-8" >
            <ul>
              {history.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </div>
          </div>

          {/* //clear  */}
          <div>
            <button className="label-4" onClick={Cleardata}>
              clear
            </button>
            <button className="label-5" onClick={Clearhistory}>
              All history
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
