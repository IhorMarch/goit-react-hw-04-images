
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { serviceSearch} from './API';
import { useEffect, useState } from 'react';

import Notiflix from 'notiflix';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './App.styled';



export const App = () => { 

const [query, SetQuery] = useState('');
  const [images, SetImages] = useState([]);
  const [page, SetPage] = useState(1);
  const [loading, SetLoading] = useState(false);
  const [error, SetError] = useState(null);
  const [perPage, SetPerpage] = useState(12);
const [total, SetTotal] = useState('');
const [largeImg, SetLargeImg] = useState('');
const [allpages, SetAllpages] = useState('');
const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
      if (!query) {
      return;
    }

    async function addImg() {
      try {
        SetLoading(true);
        SetError('');
        const data = await serviceSearch(query, page)
        const imgArr = data.hits;

        if (imgArr.length === 0) {
            return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
          }
        SetImages(prevImg => [...prevImg, ...imgArr]);
        
        SetTotal(data.totalHits)
        SetLargeImg(data.hits.largeImageURL)
        SetAllpages(Math.ceil(data.totalHits / perPage ))



      } catch (error) {
        SetError(error.message);
         return Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
      } finally {
        SetLoading(false);
      }
    }

     
    addImg();
  }, [query,page,perPage]);


    const handleSubmit = query => {
      SetQuery (query);
      SetImages([]);
      SetPage(1);
      
  };
  
      const handleLoadMore = () => {
  SetPage(prevPage=> 
    prevPage+1
    );
  };

  const handleSelectImage = largeImageUrl => {
    SetLargeImg(largeImageUrl)
    setShowModal(true);
  };

    const closeModal = () => {
      SetLargeImg(null)
      setShowModal(false);
  };



    
      return (
        <Section>

          <Searchbar onSubmit={handleSubmit} />
          {images.length > 0 && <ImageGallery images={images} onOpen={handleSelectImage} />}
          {loading && <Loader />}
          {images.length > 0 && total>perPage&&page<=allpages  && <Button onClick={handleLoadMore} />}


        {showModal&&<Modal largeImage={largeImg} onClose={closeModal} />}
    
          <GlobalStyle />
          
        </Section>

      );
    }




