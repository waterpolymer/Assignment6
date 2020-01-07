import React from 'react';
import logo from './logo.svg';
import Decrement from './jsx/Decrement'
import ContactCard from './jsx/ContactCard'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactCard name="First name" work_number="111-111-1111" email="test@gmail.com"></ContactCard>
        <ContactCard name="Second name" work_number="212-212-2222" email="test2@gmail.com" mobile_number="333-333-3333"></ContactCard>
        <ContactCard name="Third name" work_number="333-333-3333" email="test@gmail.com"></ContactCard>
        <Decrement number="10"></Decrement>
      </header>
    </div>
  );
}

export default App;
