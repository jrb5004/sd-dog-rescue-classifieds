import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './AdDetailPage.css'
import ApiContext from '../ApiContext'
import Obfuscate from 'react-obfuscate'


class AdDetailPage extends Component {

  static contextType = ApiContext

   goBack(e) {
       e.preventDefault()
       this.props.history.goBack()
   }

   render() {
    let selectedAd = this.props.match.params.adId
    let dogs = this.context.dogs

    let finalDog ={}
    for (let dog of dogs) {
      if (dog.id == selectedAd) finalDog=dog
    }
    console.log(finalDog.email)

   return (
     <div className='AdDetail'>
       <section className='ActualAd'>
         <h2>{finalDog.name}</h2>
         <p>Breed: {finalDog.breed}</p>
         <p>Gender: {finalDog.gender}</p>
         <p>Age: {finalDog.age}</p>
         <p>Size: {finalDog.size}</p>
         <p>{finalDog.name}'s Story:<br></br>{finalDog.story}</p>
         <p>Clik to arrange a visit with {finalDog.name}:<br></br>  
          <Obfuscate
            email= {finalDog.email}
            headers={{
              subject: `Inquiring about dog`,
            }}
            >
          </Obfuscate>
        </p>
         <button onClick={(e) => this.goBack(e)}>Back to Listings</button>
         <p>Is this your ad?  If so, you can edit it <Link to={`/editad/${finalDog.id}`}>here.</Link></p>
      </section>
     </div>
   )
 }
}
export default AdDetailPage;