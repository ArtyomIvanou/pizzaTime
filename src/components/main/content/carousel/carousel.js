import React from 'react'
import ImageGallery from 'react-image-gallery';
import './carousel.css';
import styles from './carousel.module.css'
const images = [
  {
    original: 'https://images.dominos.by/media/dominos/sliders/ru/big/2021/01/20/%D0%A2%D0%B8%D0%B7%D0%B5%D1%80_%D0%BA%D0%B5%D1%88%D0%B1%D1%8D%D0%BA_70_%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF_7.jpg',
    //thumbnail: 'https://images.dominos.by/media/dominos/sliders/ru/big/2021/01/20/%D0%A2%D0%B8%D0%B7%D0%B5%D1%80_%D0%BA%D0%B5%D1%88%D0%B1%D1%8D%D0%BA_70_%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF_7.jpg',
  },
  {
    original: 'https://images.dominos.by/media/dominos/sliders/ru/big/2020/10/28/%D0%BE%D1%81%D0%BD_%D1%81%D0%B0%D0%B9%D1%82_%D1%82%D0%B8%D0%B7%D0%B5%D1%80%D1%8B_%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BE%D0%BA_1320%D1%85400.png',
    //thumbnail: '"https://images.dominos.by/media/dominos/sliders/ru/big/2020/10/28/%D0%BE%D1%81%D0%BD_%D1%81%D0%B0%D0%B9%D1%82_%D1%82%D0%B8%D0%B7%D0%B5%D1%80%D1%8B_%D0%BF%D0%B5%D1%80%D0%B5%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BE%D0%BA_1320%D1%85400.png',
  },
  {
    original: 'https://images.dominos.by/media/dominos/sliders/ru/big/2021/08/05/%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%A1%D0%91_1320%D1%85400.png',
    //thumbnail: 'https://images.dominos.by/media/dominos/sliders/ru/big/2021/01/20/%D0%A2%D0%B8%D0%B7%D0%B5%D1%80_%D0%BA%D0%B5%D1%88%D0%B1%D1%8D%D0%BA_70_%D0%B4%D0%B5%D1%81%D0%BA%D1%82%D0%BE%D0%BF_7.jpg',
  },
];
const Carousel=()=>{return <div className={styles.carousel_wrapper}> <ImageGallery items={images} className={'carousel'}/></div>;}

export default Carousel