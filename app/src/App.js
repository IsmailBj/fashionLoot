import './App.css';
import Header from './components/Header/Header';
import BannerSponsor from './components/BannerSponsors/BannerSponsor';
import CardsList from './components/CardsContainer/CardsList/CardsList';
function App() {
  return (
    <div className="App">
      <Header />
      <BannerSponsor />
      <CardsList />
    </div>
  );
}

export default App;
