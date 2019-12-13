import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import AdListPage from './AdListPage/AdListPage';
import CreateAdPage from './CreateAdPage/CreateAdPage';
import EditAdPage from './EditAdPage/EditAdPage';
import AdDetailPage from './AdDetailPage/AdDetailPage';
import ApiContext from './ApiContext';
import config from './config';
import './App.css';
const API_BASE_URL = 'https://nameless-sierra-59942.herokuapp.com'



class App extends Component {
  state = {
    regions: [],
    dogs: []
  }

  componentDidMount() {
    document.title = 'SD County Dog Rescue'
    Promise.all([
      fetch(`${API_BASE_URL}/api/regions`, {headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }}),
      fetch(`${API_BASE_URL}/api/dogs`, {headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }})
  ])
      .then(([regRes, dogRes]) => {
          if (!regRes.ok)
              return regRes.json().then(e => Promise.reject(e));
          if (!dogRes.ok)
              return dogRes.json().then(e => Promise.reject(e));

          return Promise.all([regRes.json(), dogRes.json()]);
      })
      .then(([regions, dogs]) => {
          this.setState({regions, dogs});
      })
      .catch(error => {
          console.error({error});
      });
  }

  addDog = newDog => {
    this.setState({
      dogs: [...this.state.dogs, newDog]
    }, 
  )}

  updateDog = updatedDog => {
    const newDogs = this.state.dogs.map(dog =>
        (dog.id === updatedDog.id)
            ? updatedDog
            : dog
    )
    this.setState({
        dogs: newDogs
    })
  }


  render() {

    return (
      <ApiContext.Provider value={{...this.state, addDog: this.addDog, updateDog: this.updateDog}}>
        <div className='App'>
            <Header />
            <main>
              <Route exact path='/' component = {HomePage}/>
              <Route path='/region/:regionId' component = {AdListPage} />
              <Route path='/createad' component = {CreateAdPage} />
              <Route path='/ad/:adId' component = {AdDetailPage} />
              <Route path='/editad/:adId' component = {EditAdPage}/>
            </main>
        </div>
      </ApiContext.Provider>
    )
  } 


}

export default App;