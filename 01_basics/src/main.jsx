import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// if the it will take an app it is baisclly an function so what if we give function directly
// let we' see


// function Myapp()
// {
//   return(
//     <div>
//       <h1>Heelo Chai</h1>
//     </div>
//   )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     < Myapp/>
// )


// const AnotherElement = (
//   <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"></a>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//  AnotherElement
// )


// way of defing an React Element
const chai = 'another';

const ReactElement = React.createElement(
  'a',
  {
      href : 'https://www.google.com',
      target : '_blank'
  },
  'Click Me',
  chai
)

// In Evaluatd Experssion Only Takes Evlaueted Thing Not Stuf Like a {ifelse etc....}