import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import BannerSponsor from './components/BannerSponsors/BannerSponsor';
import CardsContainer from './components/CardsSection/CardsContainer/CardsContainer';
import CaseSection from './components/CaseOpeningView/CaseSection/CaseSection';
function App() {

  const [targetBox, setTargetBox] = useState({})
  const [viewPage, setViewPage] = useState('home')

  const openCardView = (boxData) => {
    setViewPage('boxRoom')
    setTargetBox(boxData)
  }

  const resetPage = () => {
    setViewPage('home')
    setTargetBox({})
    console.log("reset")
  }

  return (
    <div className="App">
      <Header resetPage={resetPage} />
      {viewPage === 'home' && (
        <div className='home'>
          <BannerSponsor />
          <CardsContainer openCardView={openCardView} />
        </div>
      )}
      {viewPage === 'boxRoom' && (
        <div className='box-room-view' id='boxRoom'>
          <CaseSection goBack={resetPage} targetBox={targetBox} />
        </div>
      )}
    </div>
  );
}

export default App;
