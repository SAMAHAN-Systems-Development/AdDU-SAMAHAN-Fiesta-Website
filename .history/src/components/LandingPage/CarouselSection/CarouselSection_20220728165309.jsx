import { useState } from 'react';
import { slides } from './CarouselData';
import styles from '../CarouselSection/CarouselSection.module.scss';

const CarouselSection = () => {

    const [ currentSlide, setCurrentSlide ] = useState(initialState);

    return (
        <div className={styles['slider']}>
            {slides.map((item) =>
                return (
                    <div className={index === currentSlide ? "slide current"}>
                        </div>
                )
            )}
        </div>
    );
} 

export default CarouselSection