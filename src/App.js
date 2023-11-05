import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputarr,setInputarr]=useState([])

  const [inputdata, SetInputdata] = useState({
    name:"",
    rollNo:""
  })

  function changehandle(e){
    SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }

  let {name,rollNo}=inputdata;

  function changhandle(){
    setInputarr([...inputarr,{name,rollNo}])
    
    console.log(inputdata,"input data what we Enter")
    SetInputdata({name:"",rollNo:""})
  }

  function changhandle2(){
    console.log("object store in array",inputarr)

  }

  return (
    <div className='App'>
    <div className='input'>
    <input type='text' name='name' autoComplete='off' value={inputdata.name} onChange={changehandle} placeholder='Enter Name'/><br/>
      <input type='text' name='rollNo' autoComplete='off' value={inputdata.rollNo} onChange={changehandle} placeholder='Roll No.'/><br/>
    </div>
      <button onClick={changhandle}>Add Item</button><br/>
      <button onClick={changhandle2}>Check Array in console</button><br/>

      <table border={3} cellPadding={10} className='table'>
        <tr className='first'>
            <td>Name</td> 
            <td>Roll No</td>
        </tr>
        {
          inputarr.map(
            (info,ind)=>{
              return(
                <tr key={ind}>
                  <td>{info.name}</td>
                  <td>{info.rollNo}</td>
                </tr>
              )
            }
          )
        }
      </table>
    </div>
  );
};

export default App;
