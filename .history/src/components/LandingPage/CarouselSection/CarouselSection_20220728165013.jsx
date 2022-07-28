import { useState } from 'react';
import styles from '../CarouselSection/CarouselSection.module.scss';

const CarouselSection = () => {

    const [ currentSlide, setCurrentSlide ] = useState(initialState);

    return (
        <div className={styles['slider']}>a</div>
    );
}

export default Carousel Section