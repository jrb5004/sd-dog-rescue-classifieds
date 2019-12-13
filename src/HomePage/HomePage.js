import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './HomePage.css'
import ApiContext from '../ApiContext'
var postLogo = require('../Images/createicon.png')


class HomePage extends Component {

  static contextType = ApiContext


    render() {
    
      const { regions=[] } = this.context

      return (
        <div className='HomePage'>
            <section>
                <p className = 'intro'>Thousands of dogs throughout San Diego are in need of foster and forever homes!</p>
                <p className = 'intro'>The San Diego County Dog Rescue Classifieds is a public, online community open for all area dog lovers to view listings of adoptable dogs, connect with owners/shelters where they are currently housed, and post new listings of your own.</p>
                <p className = 'intro'>Please take the time to peruse our listings before shopping for your new furry best friend!</p>
            </section>
            <div className = "OptionsWrapper">
            <section className = 'ViewListings'>
              <h2>Browse Listings!</h2>
              <p>Select your region to meet adoptable dogs in your area:</p>
              <ul className='RegionList'>
                  {regions.map(region =>
                  <li key={region.id}>
                      <Link to={`/region/${region.id}`}>{region.name}</Link>
                  </li>
                  )}
              </ul>
            </section>
            <section className = 'NewAd'>
                <h2>Post a New Adoption Ad:</h2>
                <Link to={`/createad`}><img src={postLogo} alt = 'postLogo' /></Link>
                <p>Connect a dog in need to San Diego's largest community of dog lovers.  Thanks for making a difference!</p>
            </section>
            </div>
        </div>
      )
  }
}

export default HomePage;