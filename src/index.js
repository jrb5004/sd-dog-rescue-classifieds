import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';

const regions = [
    {"id": 1, 
    "name": "City of San Diego",
    "description": "View adoptable dogs avaialble throughout the City of San Diego proper:"
    },
    {"id": 2,
     "name": "North County Coastal",
     "description": "View adoptable dogs avaialble throughout the North County Coastal region, from Del Mar through Oceanside:"
    },
    {"id": 3,
    "name": "North County Inland",
    "description": "View adoptable dogs avaialble throughout the North County Inland region:"
    },
    {"id": 4, 
    "name": "East County",
    "description": "View adoptable dogs avaialble throughout the East County region:"
    },
    {"id": 5, 
    "name": "South County",
    "description": "View adoptable dogs avaialble throughout the South County region:"
    },
]

const dogs = [
    {
        "id": 1, 
        "name": "Skyler",
        "breed": "Bloodhound Mix",
        "size": "Large",
        "gender": "Female",
        "age": 3,
        "regionid": 1,
        "story": "Skyler was rescued from an abusive and neglectful home and is currently being fostered by a family in Encinitas. When she was first turned over to the shelter she was severely underweight and timid, though was extremely sweet and would warm up to almost anyone she met very quickly. She has since reached a healthy weight, is up to date on shots and exams, and is letting her guard down towards people more quickly. She is great with children and other dogs; and requires regular excericse and socialization. She is now ready to find her forever home. Please contact me to arrange a time to meet Skyler to see if she could be the perfect addtion to your family!",
        "email": "skylerdog@yahoo.com"
    },
    {
        "id": 2, 
        "name": "Jill",
        "breed": "Beagle",
        "size": "Medium",
        "gender": "Female",
        "age": 8,
        "regionid": 4,
        "story": "Jill  is the sweetest dog you will ever meet.  Her owner recently passed away and Jill has been housed at the La Mesa Animal shelter since.  She is perfectly house trained, loves to nap, and though is 8 years old still has the energy to be a playful companion.  Please consider giving this sweet creature a home to enjoy her golden years.",
        "email": "jilldog@comcast.net"
    },
    {
        "id": 3, 
        "name": "Buster",
        "breed": "German Sheppard",
        "size": "Large",
        "gender": "Male",
        "age": 5,
        "regionid": 5,
        "story": "Buster was a stray found in Imperial Beach and is currently housed at the IB shelter.  Although he can be timid, Buster warms up quickly and is eager to please.  He would do best at a home with another dog to keep him company.  He will require some training reinforcement and patience at first, but he's a smart guy and would make for a fiercely loyal companion.  Please come meet Buster!",
        "email": "busterdog@gmail.com"
    },
    {
        "id": 4, 
        "name": "Eddie",
        "breed": "Staffordshire Terrier",
        "size": "Large",
        "gender": "Male",
        "age": 1,
        "regionid": 2,
        "story": "Eddie was given up on by his family because he had too much energy and they didn't have the time to keep up with him.  But he is currently being fostered at by a family in Del Mar and is making progress in training and bevavior.  He loves to play and gets along great with children and other dogs.  He would do best in a home with a family that can give him proper attention and a fenced in backyard would be ideal.  Please click below to arrange a time to meet Eddie.",
        "email": "bigeddie@gmail.com"
    },
    {
        "id": 5, 
        "name": "Brutus",
        "breed": "Boxer Mix",
        "size": "Medium-Large",
        "gender": "Male",
        "age": 2,
        "regionid": 3,
        "story": "Brutus is playful, curious, and loyal.  He was dumped at the Scripps Ranch shelter by someone who likely never gave him the attention he deserves.  He will require some obedience training but he's eager to please and loves belly rubs!  Brutus would make a great family pet and would do best in a household with another dog.",
        "email": "brutusdog@gmail.com"
    },

]

ReactDOM.render(
    <BrowserRouter>
      <App regions = {regions} dogs = {dogs} />
    </BrowserRouter>,
    document.getElementById('root')
  )
