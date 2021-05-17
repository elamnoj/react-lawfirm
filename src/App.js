import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import {Header} from './components/Header'
import Home from './views/Home'
import { Switch, Route } from 'react-router';
import Contact from './views/Contact'
import { Whatwedo } from './views/Whatwedo'
import { Whereweare } from './views/Whereweare'
import firebase from './firebase';
import { useAuth } from './contexts/AuthContext'

export const App  = () => {

    const { signIn } = useAuth();

    const signOut = () => {
          alert('User signed out.');
    };

    return (
      <body>
        <div className="col-md-8 offset-md-2">
          
          <header>
            <Header signIn={signIn} signOut={signOut}/>
          </header>
          <main>

            <Switch>
              <Route exact path='/' render={ () => <Home/> }/>
              <Route path='/who-we-are' render={() => <Whereweare />} />
              <Route path='/what-we-do' render={() => <Whatwedo />} />
              <Route path='/news' render={() => <Home />} />
              <Route path='/where' render={() => <Whereweare />} />
              <Route path='/contact' render={() => <Contact />} />
            </Switch>


          </main>
          <footer>
            <Footer/>
          </footer>

        </div>
      </body>
    )
  }