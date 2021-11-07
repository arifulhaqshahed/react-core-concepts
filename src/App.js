import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decreaseCount} style={{ marginRight: '10px' }}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  )
}




function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      {
        users.map(user => <SingleUser name={user.name} email={user.email}></SingleUser>)
      }
    </div>
  )
}

function SingleUser(props) {
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}



/* const players = [
  { name: 'Shakib Al Hasan', role: 'All-rounder' },
  { name: 'Tamim Iqbal Khan', role: 'Batsman' },
  { name: 'Mushfiqur Rahim', role: 'Wicket keeper Batsman' },
  { name: 'Mustafizur Rahman', role: 'Baller' },
  { name: 'Mahmudullah Riyad', role: 'Batsman' }
]; */


/* function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <h2>number of Users: {users.length}</h2>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
} */


/* function Users(props) {
  return (
    <div className='person'>
      <h2>name: {props.name}</h2>
      <p>email: {props.email}</p>
    </div>
  )
} */



/* function Person(props) {
  return (
    <div className='person'>
      <h1>name: {props.name} </h1>
      <h4>age: {props.role} </h4>
    </div>
  );
} */

// counter
/* function Counter() {
  const [count, setCount] = useState(1);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
} */

export default App;
