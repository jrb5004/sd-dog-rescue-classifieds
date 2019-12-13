import React, {Component} from 'react'
import { withRouter } from "react-router-dom"
import './EditAdPage.css'
import ApiContext from '../ApiContext'
import config from '../config';
const API_BASE_URL = 'https://nameless-sierra-59942.herokuapp.com'


class EditAdPage extends Component {

      static defaultProps ={
            updateDog: () => {},
      }

      static contextType = ApiContext;

      constructor() {
            super();
            this.state = {
                  name: '',
                  breed: '',
                  size: '',
                  gender: '',
                  age: '',
                  regionid: null,
                  story: '',
                  email: '',
            }
            this.handleUpdateDog = this.handleUpdateDog.bind(this)
      } 

      componentDidMount() {
            const dogId = this.props.match.params.adId
            fetch(`${API_BASE_URL}/api/dogs/${dogId}`, 
            {headers: {
              'content-type': 'application/json',
              'Authorization': `Bearer ${config.API_KEY}`
            }})
            .then((dogRes) => {
                if (!dogRes.ok)
                    return dogRes.json().then(e => Promise.reject(e));
        
                return dogRes.json();
            })
            .then((dog) => { 
              this.setState({...dog})
            })
            .catch(error => {
                console.error({error});
            });
          }

      convertRegionName(name) {
            if (name === 'City of San Diego'.toLowerCase()) return 1;
            else if (name === 'North County Coastal'.toLowerCase()) return 2;
            else if (name === 'North County Inland'.toLowerCase()) return 3;
            else if (name === 'East County'.toLowerCase()) return 4;
            else if (name === 'South County'.toLowerCase()) return 5;
          } 

      goBack(e) {
            e.preventDefault()
            this.props.history.goBack()
      } 

      setRegion(event) {
            let name = event.target.value
            let convertedName = this.convertRegionName(name)
            this.setState({
                regionid: convertedName
            })
      }
      
      setName(event) {
            this.setState({
                  name:event.target.value
            })
      }

      setBreed(event) {
            this.setState({
                  breed:event.target.value
            })
      }

      setSize(event) {
            this.setState({
                  size:event.target.value
            })
      }

      setGender(event) {
            this.setState({
                  gender:event.target.value
            })
      }

      setAge(event) {
            this.setState({
                  age:event.target.value
            })
      }

      setStory(event) {
            this.setState({
                  story:event.target.value
            })
      }

      setEmail(event) {
            this.setState({
                  email:event.target.value
            })
      }

      handleUpdateDog = e => {
            e.preventDefault()
        
            if (!this.state.name || this.state.name.trim() == '') { 
              alert('name is required') 
              return 
            }

            if (!this.state.name || this.state.name.trim() == '') { 
                  alert('name is required') 
                  return 
            }
    
            if (!this.state.breed || this.state.breed.trim() == '') { 
                  alert('breed is required') 
                  return 
                  }
      
            if (!this.state.size || this.state.size.trim() == '') { 
            alert('size is required') 
            return 
            }

            if (!this.state.gender || this.state.gender.trim() == '') { 
                  alert('gender is required') 
                  return 
            }

            if (!this.state.age || this.state.age.trim() == '') { 
                  alert('age is required') 
                  return 
            }
            
            if (!this.state.regionid) { 
                  alert('region is required') 
                  return 
            }

            if (!this.state.story || this.state.story.trim() == '') { 
                  alert('story is required') 
                  return 
            }

            if (!this.state.email || this.state.email.trim() == '') { 
                  alert('email is required') 
                  return 
            }

            let body = {
                  name: this.state.name,
                  breed: this.state.breed,
                  size: this.state.size,
                  gender: this.state.gender,
                  age: this.state.age,
                  regionid: this.state.regionid,
                  story: this.state.story,
                  email: this.state.email,
            }

            const dogId  = this.props.match.params.adId
        
            fetch(`${API_BASE_URL}/api/dogs/${dogId}`, {
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
              },
              method: 'PATCH',
              body: JSON.stringify(body)
            })
        
              .then(res => {
                if (!res.ok)
                  return (Promise.reject('Reject error'))
                return (res.json())
              })
              .then((resDog) => {
                this.context.updateDog(resDog)
              })
              .then(() => {
                {this.props.history.goBack()}
              })
              .catch(error => {
                console.error({ error })
              })
          }
    
      render() {
 
            return (
            <div className='EditAdForm'>
                  <form onSubmit={this.handleUpdateDog}>
                        <h2>Edit Listing</h2>
                              <div>
                                    <p className='SelectRegion'>Select Region:</p>
                                    <select name='category' id="region_select" value='city of san diego' onChange={(e) => this.setRegion(e)}>
                                          <option> Select a Region </option>
                                          <option value='city of san diego'>City of San Diego</option>
                                          <option value='north county coastal'>North County Coastal</option>
                                          <option value='north county inland'>North County Inland</option>
                                          <option value='east county'>East County</option>
                                          <option value='south county'>South County</option>
                                    </select><br></br>
                              </div>
                              <div>
                                    <h4>Dog Name:</h4>
                                          <input className='NameInput' value={this.state.name} type='text' name='name' id='name' onChange={(e) => this.setName(e)} required/>
                              </div>
                              <div>
                                    <h4>Breed:</h4>
                                          <input className='BreedInput' value={this.state.breed} type='text' name='breed' id='breed' onChange={(e) => this.setBreed(e)} required/>
                              </div>
                              <div>
                                    <h4>Size/Weight:</h4>
                                          <input className='WeightInput' value={this.state.size} type='text' name='weight' id='weight' onChange={(e) => this.setSize(e)} required/>
                              </div>
                              <div>
                                    <h4>Gender:</h4>
                                          <input className='GenderInput' value={this.state.gender} type='text' name='gender' id='gender' onChange={(e) => this.setGender(e)} required/>
                              </div>
                              <div>
                                    <h4>Age:</h4>
                                          <input className='AgeInput' value={this.state.age} type='text' name='age' id='age' onChange={(e) => this.setAge(e)} required/>
                              </div>
                              <div>
                                    <h4>Description:</h4>
                                          <textarea className='DescriptionInput' value={this.state.story} type='text' name='description' id='description' onChange={(e) => this.setStory(e)} required/>
                              </div>
                              <div>
                                    <h4>You Email Address:</h4>
                                          <input className='EmailInput' value={this.state.email} type='text' name='email' id='email' onChange={(e) => this.setEmail(e)} required/>
                              </div>
                        <button type="submit" className='AddEditSubmitButton'>Submit</button>
                        <button onClick={(e) => this.goBack(e)}>Cancel</button>
                  </form>
            </div>
            )
      }
}

export default withRouter(EditAdPage);