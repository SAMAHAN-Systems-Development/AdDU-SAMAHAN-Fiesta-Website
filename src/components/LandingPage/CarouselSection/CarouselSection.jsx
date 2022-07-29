import { useState } from 'react';
import { slides } from './CarouselData';
import styles from '../CarouselSection/CarouselSection.module.scss';

const CarouselSection = () => {

    const [ currentSlide, setCurrentSlide ] = useState(0);

    return (
        <div className={styles['slider']}>
            {slides.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current":"slide"} key={index}>
                        {index == currentSlide && (
                            <img src={slide.image} alt=""></img>
                        )}
                    </div>
                )
            })}
        </div>
    );
} 

export default CarouselSection