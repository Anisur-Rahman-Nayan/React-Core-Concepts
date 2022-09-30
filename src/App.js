import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



const name = "Anisur Rahman Nayan"

const webDeveloper = {name:'Anisur Rahman Nayan',job: 'Web Developer'}


const webDeveloperStyle ={
  color:"orange",
  backgroundColor:"green",
  padding: "7px",
  borderRadius:'5px'
}


function App() {
  const friendsName =['XYZ',"YXZ","ZXY","ABC","BAC","CAB"]

  const productItems =[
    {name:"Laptop",brand:"DELL"},
    {name:"Mobile",brand:"Samsung"},
    {name:"Watch",brand:"Apple"},
    {name:"Camera",brand:"Canon"},
    {name:"Sunglass",brand:"Gucci"}
  ]

  return (
    <div className="App">
      {
        friendsName.map(friend => <Friend name={friend}></Friend>)
      }

      {
        productItems.map(pd => <Product name={pd.name} brand={pd.brand}></Product>)
      }

          <Person name="Lionel Messi" job="Footballer"></Person>
          <Person name="Shakib Al Hasan" job="Cricketer"></Person>
          <Person name="Chris Hemsworth" job="Actor" ></Person>
          <Friend name="XYZ"></Friend>

          <Counter></Counter>

          <ExternalUsers></ExternalUsers>
          

        {/* <div className="container">
          <h3>Hello {name} ! How are you ?</h3>
        </div>
        <div className="music">
          <p style={webDeveloperStyle}>Name: {webDeveloper.name}, {webDeveloper.job} </p>
          <p style={{color:"red", backgroundColor:"yellow"}}>Name: {webDeveloper.name}, {webDeveloper.job} </p>
        </div> */}
    </div>
  );
}

function Person(props){
  // console.log(props)
  return (
      <div className='person-style'>
        <h1>{props.name}</h1>
        <p>{props.job}</p>
       
      </div>
  )
}

function Friend(props){

  return (
    <>
      <h1>{props.name}</h1> 
    </>
  )
}

function Product(props){
  return(
        <div>
          <h3>Name: {props.name}</h3>
          <h3>Brand: {props.brand}</h3>
        </div>
        

  )
}

function Counter(){
  const [count, setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count + 1)
  }
  const decreaseCount = ()=>{
    setCount(count - 1)
  }

  // const increaseCount = ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount} >Increase</button>
      <button onClick={decreaseCount} >Decrease</button>
      <br />
      <br />
    </div>
  )
}


function ExternalUsers(){

  const [users, setUsers] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])

  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div style={{border:"2px solid red", margin:"20px"}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

export default App;
