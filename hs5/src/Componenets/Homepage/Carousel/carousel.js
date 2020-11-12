import React, { useState } from 'react';
import img from '../../../assests/images/photo1.jpg';
import img1 from '../../../assests/images/photo2.jpg';
import img2 from '../../../assests/images/bedroom.jpg';
import img3 from '../../../assests/images/photo4.jpg';
import styles from './carousel.module.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: img,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: img1,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: img2,
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: img3,
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem className={styles.car}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img  className={styles.img}src={item.src} alt={item.altText} />
       
      </CarouselItem>
    );
  });

  return (
    <Carousel className={styles.mar}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Example;