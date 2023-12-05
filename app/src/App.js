import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import BannerSponsor from './components/BannerSponsors/BannerSponsor';
import CardsContainer from './components/CardsSection/CardsContainer/CardsContainer';
import CaseSection from './components/CaseOpeningView/CaseSection/CaseSection';
import LoginModule from './module/loginModule';
import Footer from './components/Footer/FooterContainer';

function App() {

  const [targetBox, setTargetBox] = useState({})
  const [viewPage, setViewPage] = useState('home')
  const [showLogin, setShowLogin] = useState(false)

  const openCardView = (boxData) => {
    setViewPage('boxRoom')
    setTargetBox(boxData)
  }

  const resetPage = () => {
    setViewPage('home')
    setTargetBox({})
  }

  return (
    <div className="App">
      {showLogin && <LoginModule setShowLogin={setShowLogin} />}
      <Header resetPage={resetPage} setShowLogin={setShowLogin} />
      {viewPage === 'home' && (
        <div className='home'>
          <BannerSponsor />
          <CardsContainer openCardView={openCardView} />
          <Footer />
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
