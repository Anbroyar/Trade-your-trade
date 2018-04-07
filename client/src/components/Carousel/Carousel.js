import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

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
    altText: 'We provide skilled laborers with a platform to exchange services. People can negotiate the hourly value of their specific trade, in exchange for the comparable value of someone elses.Trade your trade is the best of capitalism, and the best of communism.',
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
