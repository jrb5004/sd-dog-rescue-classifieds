import React, {Component} from 'react'
import { withRouter } from "react-router-dom"
import './CreateAdPage.css'
import ApiContext from '../ApiContext'
import config from '../config';
const API_BASE_URL = 'https://nameless-sierra-59942.herokuapp.com'
//const API_BASE_URL = "http://localhost:8000"


class CreateAd extends Component {
      static defaultProps ={
            addDog: () => {},
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
                  imageurl: '',
            }
            this.handleAddDog = this.handleAddDog.bind(this)
      } 

      convertRegionName(name) {
            if (name === 'City of San Diego'.toLowerCase()) return 1;
            else if (name === 'North County Coastal'.toLowerCase()) return 2;
            else if (name === 'North County Inland'.toLowerCase()) return 3;
            else if (name === 'East County'.toLowerCase()) return 4;
            else if (name === 'South County'.toLowerCase()) return 5;
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

      setImageUrl(event) {
            this.setState({
                  imageurl:event.target.value
            })
      }


      handleAddDog = e => {
            e.preventDefault()

            /*
            const values = Object.values(this.state)
            
            for(value of values) {
                  if (!this.state.value || this.state.value.trim() == '') { 
                        alert(`${value} is required`) 
                        return 
                      }
            } */
      
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
            
            fetch(`${API_BASE_URL}/api/dogs`, {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
              },
              body: JSON.stringify(body)
             
            })
            
              .then(res => {
                if (!res.ok)
                  return res.json().then(e => Promise.reject(e))
                return res.json()
              })
              .then((dog) => {
                this.context.addDog(dog)
                this.props.history.push("/")
              })
              .catch(error => {
                console.error({ error })
              })
          }
    
      render() {
      
            return (
            <div className='CreateAdForm'>
                  <form onSubmit={this.handleAddDog}>
                        <h2>Post New Listing</h2>
                        <div>
                              <p className="SelectRegion">Location:</p>
                              <select name='category' onChange={(e) => this.setRegion(e)}>
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
                                    <input className='NameInput' placeholder='enter dog name' type='text' name='name' id='name' onChange={(e) => this.setName(e)} required/>
                        </div>
                        <div>
                              <h4>Breed:</h4>
                                    <input className='BreedInput' placeholder='enter breed' type='text' name='breed' onChange={(e) => this.setBreed(e)} id='breed' required/>
                        </div>
                        <div>
                              <h4>Size/Weight:</h4>
                                    <input className='WeightInput' placeholder='enter weight' type='text' name='weight' id='weight' onChange={(e) => this.setSize(e)} required/>
                        </div>
                        <div>
                              <h4>Gender:</h4>
                                    <input className='GenderInput' placeholder='enter gender' type='text' name='gender' id='gender' onChange={(e) => this.setGender(e)} required/>
                        </div>
                        <div>
                              <h4>Age:</h4>
                                    <input className='AgeInput' placeholder='enter age' type='text' name='age' id='age' onChange={(e) => this.setAge(e)} required/>
                        </div>
                        <div>
                              <h4>Description:</h4>
                                    <textarea className='DescriptionInput' placeholder='enter description' type='text' name='description' id='description' onChange={(e) => this.setStory(e)} required/>
                        </div>
                        <div>
                              <h4>Your Email Address:</h4>
                                    <input className='EmailInput' placeholder='enter email address' type='text' name='email' id='email' onChange={(e) => this.setEmail(e)} required/>
                        </div>
                        <button type="submit" className='AddEditSubmitButton'>Submit Listing!</button>
                  </form>
            </div>
            )}
      }

export default withRouter(CreateAd);