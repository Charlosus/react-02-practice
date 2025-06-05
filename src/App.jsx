// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css';

// easiests way to add event is to add onClick to tag
// function App() {
//   const foo = () => {
//     console.log("clicked");

//   }
//  return <button onClick={foo}>count</button>
// }

// function App() {
//   const sayHi = (name, e) => {
//     console.log("Hi my name is ", name, e);

//   }
//  return <button onClick={(event) => sayHi("Bob", event)}>count</button>
// }

// one of special thing in react is useState

// useState is an array of variable and function  // 0,function ()

// when event is activated function will operate on value

// we can destructuriaze array of useState and use its parameters to for example count clicks

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   // thant to use state our elements will rerender and display new value
//   // if we would do something like this
//   // let c = 0
//   // const increment = () => c = c + 1
//   // and added c as child to button this will count clicks but
//   // state of button will remain as 0
//   // resault will be seen only in console not on app

//   // const increment = () => setCounter((prevState) =>{ return (prevState + 1)})

//   const increment = () => setCounter((counter) => counter + 1)
//   return <button onClick={increment}>count {counter}</button>
// }

// const App = () => {
//   const [name, setName] = useState("Bob")
//   const changeName = () => {
//     setName("Ala")
//   }
//   return (<div>
//     <p>{name}</p>
//     <button onClick={changeName}>Change name</button>
//   </div>)
// }

// parent will hold the state

// function ToDo({name, remove}) {
//   return (
//     <div>
//       {name}
//       <button onClick={() => remove(name)}>Remove</button>
//     </div>
//   );
// };

// function App () {
//   const [todos, setToDos] = useState([ "task1", "task2" ])

//   const removeTodo = (todoRemove) => {
//     setToDos((prevState) => prevState.filter((todo) => todo !== todoRemove))
//   }
//   return (
//     <div>
//       {/* <ToDo name={todos[0]} remove={removeTodo}/>
//       <ToDo name={todos[1]} remove={removeTodo}/> */}
//       {todos.map((todo) => (
//         <ToDo key={todo} name={todo} remove={removeTodo}/>
//       ))}

//     </div>
//   )

// }
// all operations on to do states can be done only by setTodo because we cant modify
// todos diractly
// to ad extra todo we need to use spread that will create new array and add extra todo
// const TodoApp = () => {
//   const [todos, setTodos] = useState(["task1", "Task2"]);

//   const addTodo = () => {
//     setTodos((todos) => [...todos, "task extra"]);
//   };

//   return (
//     <div>
//       <button onClick={addTodo}> add to do</button>
//       {todos.map((todo) => (
//         <p key={todo}>{todo}</p>
//       ))}
//     </div>
//   )
//  }

// what will happen if in our state wil be object
// rule with set also aply we cant change object it self
// we need to use function and spread
// we can also add value to already existing in object number

const ToDoApp = () => {
  const [user, setUser] = useState({
    name: 'bob',
    surname: 'bobber',
    age: 15,
  });
  const changeUserName = () => {
    setUser((prev) => {
      return {
        ...prev,
        name: 'ala',
      };
    });
  };
  const changeUserAge = () => {
    setUser((prev) => {
      return {
        ...prev,
        age: prev.age + 1,
      };
    });
  };
  return (
    <div>
      <button onClick={changeUserName}>Change user name</button>
      <button onClick={changeUserAge}>Change user Age</button>
      <br />
      {user.name} <br />
      {user.surname} <br />
      {user.age}
    </div>
  );
};
export default ToDoApp;
