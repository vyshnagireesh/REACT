// import './App.css'
// import Basic from './Class-components/Basic'
// // import Rendaringlist from './embedding-expression/rendaringlist'
// // import Condition from './embedding-expression/condition'
// // import Calling_function from './embedding-expression/calling_function'
// // import Welcome from './embedding-expression/Welcome'

// function App() {

//   return (
//     <>
//       {/*----------------- embedding-expreesion--------------- */}
//       {/* <Welcome/> */}
//       {/* <Calling_function/> */}
//       {/* <Condition/> */}
//       {/* <Rendaringlist /> */}


//       -------------------class-components---------------------
//       <Basic/>
//     </>

//   )
// }

// export default App
import React, { Component } from 'react'
import Counter from './Class-components/Counter'
// import Basic from './Class-components/Basic'
// import UsingProps from './Class-components/UsingProps'


export default class App extends Component {
  render() {
    return (
      <div>
              {/* -------------------class-components--------------------- */}
      {/* <Basic/> */}
      {/* <UsingProps name="vyshna"/> */}
      <Counter/>

        
      </div>
    )
  }
}
