import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './Carousel.css';

import BACKGROUND from '../../images/BACKGROUND.jpg';
import coder from '../../images/coder.jpg';
import image106 from '../../images/image106.jpg';
import Deals from '../../images/Deals.jpg';
import bkp504 from '../../images/bkp504.jpg';
import workers from '../../images/workers.jpg';
import accountant from '../../images/accountant.jpg';
const items = [
  {
    src: BACKGROUND,
    altText: '',
    caption: ''
  },
  { 
    src: coder,
    altText: '',
    caption: ''
  },
  {
    src: image106,
    altText: '',
    caption: ''
  },
  {
    src: Deals,
    altText: '',
    caption: ''
  },
  {
    src: bkp504,
    altText: '',
    caption: ''
  },
  {
    src: workers,
    altText: '',
    caption: ''
  },
  {
    src: accountant,
    altText: '',
    caption: ''
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
