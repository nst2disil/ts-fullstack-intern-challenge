import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CatContent from './components/CatContent';
import Footer from './components/Footer';
import { HOME_PAGE, FAVORITE_PAGE, FAV_CATS_URL, ALL_CATS_URL } from './constants';

interface Cat {
  id: string;
  url: string;
}

function App() {
  const [allCats, setAllCatImages] = useState<Cat[]>([]);
  const [favCats, setFavCatImages] = useState<Cat[]>([]);
  const [activePage, setActivePage] = useState<number>(HOME_PAGE);

  const fetchCatImages = async () => {
    try {
      const response = await fetch(ALL_CATS_URL);
      const data: Cat[] = await response.json();
      setAllCatImages(data);
    } catch (error) {
      console.error('Error fetching favorite cats:', error);
    }
  };

  const fetchFavoriteCats = async () => {
    try {
      const response = await fetch(FAV_CATS_URL);
      const data: Cat[] = await response.json();
      setFavCatImages(data);
    } catch (error) {
      console.error('Error fetching favorite cats:', error);
    }
  };

  useEffect(() => {
    fetchCatImages();
    fetchFavoriteCats();
  }, []);

  const navClick = async (page: number) => {
    setActivePage(page);
    if (page === FAVORITE_PAGE) {
      try {
        const response = await fetch(FAV_CATS_URL);
        const data: Cat[] = await response.json();
        setFavCatImages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const deleteFavCat = (id: string, isFavorited: boolean) => {
    if (!isFavorited) {
      setFavCatImages(prevFavs => prevFavs.filter(cat => cat.id !== id));
    }
  };

  return (
    <div className='App'>

      <Navbar activePage={activePage} navClick={navClick} />

      <div className='all-cats'>
        {(activePage === HOME_PAGE ? allCats : favCats).map(catImage => (
          <CatContent
            key={catImage.id}
            id={catImage.id}
            url={catImage.url}
            isFavorite={favCats.some(cat => cat.id === catImage.id)}
            deleteFavCat={deleteFavCat}
          />
        ))}
      </div>

      <Footer activePage={activePage} />

    </div>
  );
}

export default App;