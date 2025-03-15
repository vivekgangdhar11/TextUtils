
import './App.css';
import Alert from './components/Alert';
/* import About from './components/About'; */
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react' 

function App() {
  const [mode,setMode]=useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils -Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils -Light Mode"
    }
  }
  const [alert,setAlert]=useState(null)
  const showAlert=(message , type )=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
      
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
            <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      </div>
      {/* <About/> */}
      
    </>
  );
}

export default App;