import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { serviceSearch, perPage } from './API';

import Notiflix from 'notiflix';
import { GlobalStyle } from './GlobalStyles';
import { Section } from './App.styled';

export class App extends Component {


  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    perPage: perPage,
    total: '',
    largeImg: '',
    allpages:''
  };



  componentDidUpdate(_, prevState) {


    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.addImg();
    }
  }


      addImg = async() => {
        try {

         this.setState({ loading: true });
          const data = await serviceSearch(this.state.query, this.state.page)
     
          const imgArr = data.hits;

         if (imgArr.length === 0) {
            return Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.');
          }
         else {
            this.setState(prevState => ({
              images: [...prevState.images, ...imgArr],
              error: '',
              total: data.totalHits,
              allpages:Math.ceil(data.totalHits / 12 ),
              largeImg:data.hits.largeImageURL
            }));
          }
        }

        catch (error) {
     
          Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        }
        
        finally {
          this.setState({ loading: false });
      
        }

       }
        
      
    handleSubmit = query => {
   
      this.setState({
        query: query,
        images: [],
        page: 1,
      });
    };


    handleLoadMore = () => {
      this.setState(prevState => ({
        page: prevState.page + 1,
      }));
  };
  

    handleSelectImage = (largeImageUrl) => {
    this.setState({
      largeImg: largeImageUrl
     
    });
  };


    closeModal = () => {
    this.setState({
      largeImg: null,
    });
  };


    render() {
    
      return (
        <Section>

          <Searchbar onSubmit={this.handleSubmit} />
          {this.state.images.length > 0 && <ImageGallery images={this.state.images} onOpen={this.handleSelectImage} />}
          {this.state.loading && <Loader />}
          {this.state.images.length > 0 && this.state.total>this.state.perPage&&this.state.page<=this.state.allpages  && <Button onClick={this.handleLoadMore} />}


          {this.state.largeImg&& <Modal largeImage={this.state.largeImg} onClose={this.closeModal}/>}
    
          <GlobalStyle/>
        </Section>

      );
    }
  
}