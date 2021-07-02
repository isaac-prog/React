import './App.css';
import React from 'react'
import ImageFrame from './Image'
import EvenOdd from './Lab02'
import ContactForm from './contact'
import TaskList from './tasklist'
import TestList from './test'

function App(){
  return(
    <React.Fragment>
      {/* <ImageFrame/>
      <EvenOdd/>
      <ContactForm/> */}
      <TaskList/>
      <TestList/>
    </React.Fragment>
  )
}

export default App;
