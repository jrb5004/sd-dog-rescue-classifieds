import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import AdListPage from './AdListPage/AdListPage';
import CreateAdPage from './CreateAdPage/CreateAdPage';
import EditAdPage from './EditAdPage/EditAdPage';
import AdDetailPage from './AdDetailPage/AdDetailPage';
import './App.css';


class App extends Component {
  state = {

  }

  componentDidMount() {
    //console.log(this.props)
  }


  render() {

    return (
        <div className='App'>
            <Header />
            <main>
              <Route exact path='/' render={() => <HomePage dogs = {this.props.dogs} regions = {this.props.regions} />} />
              <Route path='/region/:regionId' render={(props) => <AdListPage {...props} dogs = {this.props.dogs} regions = {this.props.regions}  />} />
              <Route path='/createad' component = {CreateAdPage} />
              <Route path='/ad/:adId' render={(props) => <AdDetailPage {...props} dogs = {this.props.dogs} regions = {this.props.regions}  />} />
              <Route path='/editad/:adId' render={(props) => <EditAdPage {...props} dogs = {this.props.dogs} regions = {this.props.regions}  />} />
            </main>
        </div>
    );
  } 


}

export default App;