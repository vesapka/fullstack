import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

const Header = (props) => {  
  return (
        <div>
          <p>{props.course}</p>
        </div>
  )
}
const Part = (props) => {
  
  const returnvalue = props.taulukko1.taulukko.map(value => {
    return <div><p>{value.name} {value.exercises}</p></div>;
});

  return (returnvalue)
}
const Content = (props) => { 

/*
1.2
  <div> 
      <Part part1={part.part1} exercises1={part.exercises1}/>
      <Part part2={props.part2} exercises2={props.exercises2}/>
      <Part part3={props.part3} exercises3={props.exercises3}/>
    </div>*/
  return (<Part taulukko1={props}/>)
}
const Total = (props) => {  
  let total = 0
  props.taulukko.forEach(value => {
    total = total + value.exercises
  });
  return (
        <div>
          <p>{total}</p>
        </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
      <div>
        <Header course={course.name} />
        <Content taulukko={course.parts}/>
        <Total taulukko={course.parts}/>
      </div>
  )
}
  /* 1.4
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  */
  /* 1.3
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
*/
/* 1.1
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 
    return (
      <div>
        
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
    */
export default App
