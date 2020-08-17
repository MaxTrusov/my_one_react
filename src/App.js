import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main_page from './components/Main_page/Main_page';
import Footer from './components/Footer/Footer';


const App = (props) => {
  return (
    <div className="App"> 
        <Header />
        <Main_page 
          state={props.state}
          addPost={props.addPost} />
        <Footer />
    </div>
  );
}


export default App; 
