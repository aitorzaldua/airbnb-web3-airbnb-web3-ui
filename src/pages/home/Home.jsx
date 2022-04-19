import React from 'react';
import './home.css';
import bg from '../../images/frontpagebg.png';
import logo from '../../images/airbnb.png';
import { ConnectButton, Select, DatePicker, Input, Icon, Button } from 'web3uikit';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState('New York');
  const [guests, setGuests] = useState(2);



  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className='containerGradient'></div>
      </div>
      <div className='topBanner'>
        <div>
          <img className='logo' src= {logo} alt='logo' />
        </div>
        <div className='tabs'>
          <div className='selected'>Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className='lrContainers'>
          <ConnectButton />
        </div>
      </div>
      <div className='tabContent'>
        <div className='searchFields'>
          <div className='inputs'>Location
          <Select
            defaultOptionIndex={0}
            onChange={(data) => {setDestination(data.label)}}
            options={[
              {
              id: 'ny',
              label: 'New York',
              },
              {
              id: 'lon',
              label: 'London',
              },
              {
              id: 'db',
              label: 'Dubai',
              },
              {
              id: 'la',
                label: 'Los Angeles',
              }
              ]}
            />
          </div>
          <div className='vl' />
          <div className='inputs'>Check in
            <DatePicker
              id="date-picker"
              onChange={(event) => {setCheckIn(event.date)}}
            />
          </div>
          <div className='vl' />
          <div className='inputs'>Check out
            <DatePicker
              id="date-picker"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className='vl' />
          <div className='inputs'>Guests
            <Input
              value={2}
              name="AddGuests"
              onChange={(event) => setGuests(event.target.value)}
              type="number"
            />
          </div>

          {/* The search button is inlcuded into the link to
          another page */}
          <Link to={'/rentals'} state={{
            destination: destination,
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
          }}>
            <div className='searchButton'>
              <Icon
                fill="#ffffff"
                size={24}
                svg="search"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div>
        <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        />
      </div>
    </>
  )
}

export default Home;