import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './HomePage.css'


class HomePage extends Component {
    static defaultProps = {

    }

    componentdDidMount() {
     
    }

    
    render() {
    console.log(this.props)
    let regions = this.props.regions

    return (
      <div className='HomePage'>
          <section>
              <p className = 'intro'>Thousands of dogs throughout San Diego are in need of foster and forever homes!</p>
              <p className = 'intro'>The San Diego County Dog Rescue Classifieds is a public, online community open for all area dog lovers to view listings of adoptable dogs, connect with owners/shelters where they are currently housed, and post new listings of your own.</p>
              <p className = 'intro'>Please take the time to peruse our listings before shopping for your new furry best friend!</p>
          </section>
          <section className = 'ViewListings'>
            <h2>Browse Listings!</h2>
            <p>Select your region to meet adoptable dogs in your area.</p>
            <ul className='RegionList'>
                {regions.map(region =>
                <li key={region.id}>
                    <Link to={`/region/${region.id}`}>{region.name}</Link>
                </li>
                )}
            </ul>
          </section>
          <section className = 'NewAd'>
              <p>Create a New Adoption Ad <Link to={`/createad`}><span className='CreateAdLink'>Here</span></Link></p>
          </section>
      </div>
    )
  }
}

export default HomePage;