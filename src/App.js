import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import BannerSponsor from './components/BannerSponsors/BannerSponsor';
import CardsContainer from './components/CardsSection/CardsContainer/CardsContainer';
import CaseSection from './components/CaseOpeningView/CaseSection/CaseSection';
import LoginModule from './module/loginModule';
import RegisterModule from './module/register';
import Footer from './components/Footer/FooterContainer';
import LangDrowDown from './components/Header/Lang/LangDropDown'
import { isTokenExpired, logout, getToken } from './utils/auth';
import Profile from './components/UserProfile/Profile';
import { getUserData } from './data/getApiData';
import Deposit from './components/Deposit/Deposit'

function App() {

  const [targetBox, setTargetBox] = useState({})
  const [viewPage, setViewPage] = useState('home')
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showDeposit, setShowDeposit] = useState(false)
  const [langSetting, setLangSetting] = useState({
    show: false,
    langSelected: 'English',
    short: 'en'
  })
  const [userProfile, setUserProfile] = useState({ isUserLogin: false })

  const openCardView = (boxData) => {
    setViewPage('boxRoom')
    setTargetBox(boxData)
  }

  const resetPage = () => {
    setViewPage('home')
    setTargetBox({})
  }

  const openProfile = () => {
    setViewPage('profile')
  }

  const checkAuthentication = async () => {
    const token = getToken()
    if (token) {
      if (isTokenExpired()) {
        resetPage()
        logout();
      } else {
        // let resData = await getUserData() 
        console.log(resData)
        setUserProfile({ ...resData })
      }
    } else {
      setUserProfile({ isUserLogin: false });
    }
    console.log(userProfile)
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <div className="App">
      {langSetting.show && <LangDrowDown setLangSetting={setLangSetting} />}
      {showLogin && <LoginModule show={setShowLogin} setUserProfile={setUserProfile} userProfile={userProfile} />}
      {showRegister && <RegisterModule show={setShowRegister} />}
      {showDeposit && <Deposit />}
      <Header
        resetPage={resetPage}
        openProfile={openProfile}
        setShowLogin={setShowLogin}
        isUserLogin={userProfile.isUserLogin}
        setShowRegister={setShowRegister}
        setLangSetting={setLangSetting}
        langSetting={langSetting}
      />
      {viewPage === 'home' && (
        <div className='home'>
          <BannerSponsor setShowDeposit={setShowDeposit} />
          <CardsContainer openCardView={openCardView} />
          <Footer />
        </div>
      )}
      {viewPage === 'boxRoom' && (
        <div className='box-room-view' id='boxRoom'>
          <CaseSection goBack={resetPage} targetBox={targetBox} />
        </div>
      )}
      {viewPage === 'profile' && <Profile />}
    </div>
  );
}

export default App;
