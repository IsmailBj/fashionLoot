import './App.css';
import Header from './components/Header/Header';
import BannerSponsor from './components/BannerSponsors/BannerSponsor';
import CardsContainer from './components/CardsSection/CardsContainer/CardsContainer';
import CaseOpening from './assets/game/CaseOpening';
function App() {
  return (
    <div className="App">
      <Header />
      <BannerSponsor />
      <CardsContainer />
      <CaseOpening></CaseOpening>
    </div>
  );
}

export default App;
