import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavGuest from "./NavGuest";
import '../tailwind.css';

const location = 'New York';
const listings = [
  {
    name: "The Pigeon Penthouse",
    location: 'Central Park, NYC',
    description: 'Embrace the urban wildlife in this luxurious penthouse with stunning views of Central Park. Get ready to befriend some feathery neighbors and experience the true essence of city living, complete with daily pigeon serenades.',
    imageSrc: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },{
    name: "The Broadway Backstage",
    location: 'Times Square, NYC',
    description: 'Step into the spotlight with this apartment located right in the heart of Times Square. Immerse yourself in the dazzling world of Broadway shows, neon lights, and street performers. Get ready to be the star of your own New York City adventure!',
    imageSrc: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },{
    name: "The Bagel Bonanza",
    location: 'Lower East Side, NYC',
    description: "Indulge in the ultimate carb-lover's dream at this apartment, surrounded by the best bagel shops in town. Start your mornings with fresh, chewy goodness and experience the true essence of a New York breakfast. Warning: Side effects may include an insatiable bagel addiction.",
    imageSrc: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1680&q=80',
  },
  {
    name: "The Subway Surfer's Hideout",
    location: 'Williamsburg, NYC',
    description: "Dive into the hipster haven of Williamsburg and make this funky apartment your home base. With easy access to the subway, you'll be zipping through the city like a pro. Don't forget your oversized glasses and ironic mustache!",
    imageSrc: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 5,
    name: "The Central Perk Studio",
    location: 'Greenwich Village, NYC',
    description: 'Calling all Friends fans! Live out your sitcom dreams in this cozy studio apartment, inspired by the iconic Central Perk café. Sip coffee, engage in witty banter, and make lasting memories in this nostalgic corner of the city',
    imageSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  }
]

export default function LocalHosts() {
  return (
    <div className="bg-white">
      <NavGuest />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">List of available hosts at the given location</h2>
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Who's hosting in {location}?</h2>
          <p className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Alright, brave budget travelers, behold the heroes of hospitality at your chosen location! 
          </p>
          {/* <p className="mt-6 text-lg leading-8 trailing-8 text-gray-600">
            Take your pick, reach out to the host who speaks to your soul, and get ready for a stay that'll make five-star hotels cry in shame!
          // </p> */}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {listings.map((listing) => (
            <a key={listing.id} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={listing.imageSrc}
                  alt="image of listing"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{listing.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{listing.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
  