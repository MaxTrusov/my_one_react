import React from 'react';
import s from './Main_page.module.css';
import Side_bars from './Side_bar/Side_bars';
import Person from './Person/Person';
import Dialogs from './Dialogs_page/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './News_page/News';
import Music from './Music_page/Music';
import Sport from './Sport_page/Sport';



const Main_page  = (props) => {
    return (
        <main className={s.grid_container}>        
          <Side_bars />
          <Route path='/dialogs' render={ () => <Dialogs
              dialog={props.state.dialogs_Page.dialogsData}
              message={props.state.dialogs_Page.messagesData} />} />

          <Route path='/person' render={ () => <Person 
            post={props.state.person_Page.postsData}
            addPost={props.addPost} /> } />
            
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/sport' render={ () => <Sport />} />
        </main>
    );
  }

export default Main_page;