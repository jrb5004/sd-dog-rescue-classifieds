import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import './AdListPage.css'
import ApiContext from '../ApiContext'


class AdListPage extends Component {

  static contextType = ApiContext

  render() {
    let selectedRegion = this.props.match.params.regionId
    const { regions, dogs } = this.context

    let finalRegion ={}
    for (let region of regions) {
      if (region.id == selectedRegion) finalRegion=region
    }
    
    let regionalList =[]
    for (let dog of dogs) {
        if (dog.regionid == selectedRegion) regionalList.push(dog)
      }

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