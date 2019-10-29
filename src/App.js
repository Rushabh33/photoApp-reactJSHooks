import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import AppBanner from './components/AppBanner'
import UsersList from './components/UsersList'
import UserAlbums from './components/UserAlbums'
import UserPhotos from './components/UserPhotos'
import Footer from '../src/components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <AppBanner />
      <div className='contentContainer wrapper'>
        <Switch>
          <Route exact path='/' component={UsersList} />
          <Route path='/albums' component={UserAlbums} />
          <Route path='/photos' component={UserPhotos} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
