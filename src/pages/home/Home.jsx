import React from 'react';
import './home.css';
import bg from '../../images/frontpagebg.png';
import logo from '../../images/airbnb.png';
import { ConnectButton, Select, DatePicker } from 'web3uikit';

const Home = () => {
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
            onChange={null}
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
              onChange={null}
            />
          </div>
          <div className='vl' />
          <div className='inputs'>Check out</div>
          <div className='vl' />
          <div className='inputs'>Guests</div>
        </div>
      </div>
    </>
  )
}

export default Home;