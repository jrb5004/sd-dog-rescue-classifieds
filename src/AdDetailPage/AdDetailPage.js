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
         <p><span className='DetailHeader'>Breed:</span> {finalDog.breed}</p>
         <p><span className='DetailHeader'>Gender:</span> {finalDog.gender}</p>
         <p><span className='DetailHeader'>Age:</span> {finalDog.age}</p>
         <p><span className='DetailHeader'>Size:</span> {finalDog.size}</p>
         <p><span className='DetailHeader'>{finalDog.name}'s Story:</span><br></br>{finalDog.story}</p>
         <div className ='EmailLink'><p>Click to request photos and/or arrange a visit with {finalDog.name}:<br></br>  
          <Obfuscate
            email= {finalDog.email}
            headers={{
              subject: `Inquiring about dog`,
            }}
            >
          </Obfuscate>
        </p></div>
         <button onClick={(e) => this.goBack(e)}>Back to Listings</button>
         <div className ='EditLink'><p>Is this your ad?  If so, you can edit it <Link to={`/editad/${finalDog.id}`}>here.</Link></p></div>
      </section>
     </div>
   )
 }
}
export default AdDetailPage;