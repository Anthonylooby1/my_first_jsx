import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './components/firstcomponent'

function App() {
  return (
  <>  
    <PersonCard firstName = "John" age = {24} hairColor = "green"/>
    <PersonCard firstName = "Bill" age = {21} hairColor = "orange"/>
    <PersonCard firstName = "Jane" age = {23} hairColor = "brown"/>
    <PersonCard firstName = "Amber" age = {27} hairColor = 'blonde'/>
  </>  
  )
}

export default App;
