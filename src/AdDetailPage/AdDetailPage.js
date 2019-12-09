import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './AdDetailPage.css'
//import ApiContext from '../ApiContext'



class AdDetailPage extends Component {
   static defaultProps = {
     match: {
       params: {}
     }
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
     <div className='AdDetail'>
       <section className='ActualAd'>
         <h2>{finalDog.name}</h2>
         <p>Breed: {finalDog.breed}</p>
         <p>Gender: {finalDog.gender}</p>
         <p>Age: {finalDog.age}</p>
         <p>Size: {finalDog.size}</p>
         <p>{finalDog.name}'s Story:<br></br>{finalDog.story}</p>
         <Link to={`mailto: ${finalDog.email}`}><button>Contact Caretaker</button></Link><br></br>
         <button onClick={(e) => this.goBack(e)}>Back to Listings</button>
         <p>Is this your ad?  If so, you can edit it <Link to={`/editad/${finalDog.id}`}>here.</Link></p>
      </section>
     </div>
   )
 }
}
export default AdDetailPage;