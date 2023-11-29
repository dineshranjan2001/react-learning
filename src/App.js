import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import React,{useState} from 'react';

function App() {
  
  const [currentForm,setCurrentForm]= useState('login');
  const toggleForm=(formName)=>{
      setCurrentForm(formName);
  };

  return (
    currentForm==='login'?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>
    // <Login></Login>
  );
}

export default App;
