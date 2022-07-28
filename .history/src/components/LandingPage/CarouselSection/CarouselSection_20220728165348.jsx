import { useState } from 'react';
import { slides } from './CarouselData';
import styles from '../CarouselSection/CarouselSection.module.scss';

const CarouselSection = () => {

    const [ currentSlide, setCurrentSlide ] = useState(initialState);

    return (
        <div className={styles['slider']}>
            {slides.map((slide, index) =>
                return (
                    
                )
            )}
        </div>
    );
} 

export default CarouselSection