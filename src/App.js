import React from 'react';
import './App.css';

// import components
import TopBar from './components/TopBar';
import Nav from './components/Nav';
import KonnectSlider from './components/KonnectSlider';

function App() {
  return (
    <div className='App'>
      <div className='loading'>
        <div className='loader'></div>
      </div>
      <a id='scroll-up'>
        <i className='fa fa-angle-up'></i>
      </a>

      <div className='theme-settings' id='switcher'>
        {' '}
        <span className='theme-click'>
          <i className='fa fa-cog fa-spin' aria-hidden='true'></i>
        </span>{' '}
        <span
          className='theme-color theme-default theme-active'
          data-color='green'
        ></span>{' '}
        <span className='theme-color theme-blue' data-color='blue'></span>{' '}
        <span className='theme-color theme-red' data-color='red'></span>{' '}
        <span className='theme-color theme-violet' data-color='violet'></span>
        <p>(Or) Your favorite color</p>
      </div>
      <TopBar />
      <Nav />
      <KonnectSlider />
    </div>
  );
}

export default App;
