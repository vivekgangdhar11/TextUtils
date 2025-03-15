import React,{useState}from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Upper case was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase !","success")
  }

  const handleLoClick=()=>{
    console.log("Lower case was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase !","success")
  }

  const handleClearClick=()=>{
    console.log("Clear text was clicked");
    let newText="";
    setText(newText);
    props.showAlert("Text cleared !","success")
  }

  const handleTrimClick=()=>{
    console.log("Trim text was clicked");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text Trimed !","success")
  }

  const handleCopyClick=()=>{
    console.log("Copy Text was clicked");
    let newText=document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied !","success")
  }

  const handleOnChange=(event)=>{
    console.log("On change clicked");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleTrimClick}>Trim extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        </div>
        
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summery</h1>
          <p>
            {text.split(" ").length} words and {text.length} character
          </p>
          <p>{0.008*text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
        </div>
    </>
  )
}
