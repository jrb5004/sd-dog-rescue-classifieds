import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './AdListPage.css'


class AdListPage extends Component {
  static defaultProps = {
    match: {
        params: {}
      }
  }
 
   
  render() {
    console.log(this.props)
    let selectedRegion = this.props.match.params.regionId
    let dogs = this.props.dogs
    let regions = this.props.regions

    let finalRegion ={}
    for (let region of regions) {
      if (region.id == selectedRegion) finalRegion=region
    }
    
    let regionalList =[]
    for (let dog of dogs) {
        if (dog.regionid == selectedRegion) regionalList.push(dog)
      }
    console.log(regionalList)

    return (
        <div className='AdList'>
          <h2 className='RegionName'>{finalRegion.name}</h2>
          <p className='RegionDescription'>{finalRegion.description}</p>
          <ul className='AdListMain'>
              {regionalList.map(dog =>
              <li key={dog.id}>
                <Link to={`/ad/${dog.id}`}>{dog.name} ({dog.breed})</Link> 
              </li>
              )}
            </ul>
        </div>
      )
 }

}
export default AdListPage;