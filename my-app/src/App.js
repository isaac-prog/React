import './App.css';
import React from 'react'
import ImageFrame from './Image'
import EvenOdd from './Lab02'
import ContactForm from './contact'

function App(){
  return(
    <React.Fragment>
      <ImageFrame/>
      <EvenOdd/>
      <ContactForm/>
    </React.Fragment>
  )
}

export default App;
