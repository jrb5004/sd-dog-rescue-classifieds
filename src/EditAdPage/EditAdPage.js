import React, {Component} from 'react'
import { withRouter } from "react-router-dom"
import './EditAdPage.css'
//import ApiContext from '../ApiContext'
//import config from '../config'



class EditAdPage extends Component {
    static defaultProps ={

    }

    goBack(e) {
        e.preventDefault()
        this.props.history.goBack()
    } 
    

    render() {

        let selectedAd = this.props.match.params.adId
        let dogs = this.props.dogs

        let finalDog ={}
        for (let dog of dogs) {
            if (dog.id == selectedAd) finalDog=dog
        }
    
        return (
          <div className='EditAdForm'>
              <form>
              <h2>Edit Listing</h2>
              <div>
                <p>Select Region:</p>
                <select name='category'>
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
                    <input className='NameInput' value={finalDog.name} type='text' name='name' id='name' required/>
              </div>
              <div>
              <h4>Breed:</h4>
                    <input className='BreedInput' value={finalDog.breed} type='text' name='breed' id='breed' required/>
              </div>
              <div>
              <h4>Size/Weight:</h4>
                    <input className='WeightInput' value={finalDog.size} type='text' name='weight' id='weight' required/>
              </div>
              <div>
              <h4>Gender:</h4>
                    <input className='GenderInput' value={finalDog.gender} type='text' name='gender' id='gender' required/>
              </div>
              <div>
              <h4>Age:</h4>
                    <input className='AgeInput' value={finalDog.age} type='text' name='age' id='age' required/>
              </div>
              <div>
              <h4>Description:</h4>
                    <textarea className='DescriptionInput' value={finalDog.story} type='text' name='description' id='description' required/>
              </div>
              <div>
              <h4>You Email Address:</h4>
                    <input className='EmailInput' value={finalDog.email} type='text' name='email' id='email' required/>
              </div>
              <div>
              <h4>Upload Image:</h4>
                    <input className='UpdloadImage' placeholder='please upload image of dog' type='text' name='image' id='image' required/>
              </div>
              <button type="submit" className='AddEditSubmitButton'>Submit</button>
              <button onClick={(e) => this.goBack(e)}>Cancel</button>
            </form>
          </div>
        )
      }
}

export default withRouter(EditAdPage);