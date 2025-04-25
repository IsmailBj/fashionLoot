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

  const viewHome = () => {
    setViewPage('home')
    setTargetBox({})
  }

  const openDeposit = () => {
    if (userProfile.isUserLogin)
      setViewPage('deposit')
    else
      setShowLogin(true)
  }

  const openProfile = () => {
    setViewPage('profile')
  }

  const checkAuthentication = async () => {
    const token = getToken()
    if (token) {
      if (isTokenExpired()) {
        viewHome()
        logout();
      } else {
        const resData = await getUserData();
        setUserProfile({ ...resData })
      }
    } else {
      setUserProfile({ isUserLogin: false });
    }
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  const renderPageContent = () => {
    switch (viewPage) {
      case 'home':
        return (
          <div className="home">
            <BannerSponsor openDeposit={openDeposit} />
            <CardsContainer openCardView={openCardView} />
            <Footer />
          </div>
        );
      case 'boxRoom':
        return (
          <div className="box-room-view" id="boxRoom">
            <CaseSection
              goBack={viewHome}
              targetBox={targetBox}
              setShowLogin={setShowLogin}
              userProfile={userProfile}
            />
          </div>
        );
      case 'deposit':
        return <Deposit goBack={viewHome} />;
      case 'profile':
        return <Profile userProfile={userProfile} openDeposit={openDeposit} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {langSetting.show && <LangDrowDown setLangSetting={setLangSetting} />}
      {showLogin && <LoginModule show={setShowLogin} />}
      {showRegister && <RegisterModule show={setShowRegister} />}
      <Header
        viewHome={viewHome}
        openProfile={openProfile}
        setShowLogin={setShowLogin}
        isUserLogin={userProfile.isUserLogin}
        username={userProfile.username}
        currency={userProfile.wallet}
        setShowRegister={setShowRegister}
        setLangSetting={setLangSetting}
        langSetting={langSetting}
        openDeposit={openDeposit}
      />
      {renderPageContent()}
    </div>
  );
}

export default App;
