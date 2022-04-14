import React, { useState, useEffect } from 'react';

const GridModal = ({ images, currentImageIndex, nextPhoto, closeGridModal }) => {

    useEffect(() => {
        const unsubscribe = document.addEventListener('keydown', function(e) {
            if(e.key === 'Escape') {
                closeGridModal();
            }
        })

        return unsubscribe;
    }, [])

    // Add first and last clones
    const lastImage = images[images.length - 1]
    const firstImage = images[0];
    images = [lastImage, ...images, firstImage];

    // Count for current slide
    const [currentSlide, setCurrentSlide] = useState(currentImageIndex + 1);
    const [transition, setTransition] = useState('');

    // Handle first and last slide
    const loopCarousel = () => {
        if (currentSlide === 0) {
            setTransition('none');
            setCurrentSlide(images.length - 2);
        }

        if (currentSlide === images.length - 1) {
            setTransition('none');
            setCurrentSlide(1);
        }
    }

    // Previous Button
    const previous = () => {
        if (currentSlide <= 0) return;
        setTransition('transform .3s ease-in-out');
        currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(currentSlide - 1);
    }

    // Next Button
    const next = () => {
        if (currentSlide >= images.length - 1) return;
        setTransition('transform .3s ease-in-out');
        currentSlide === images.length - 1 ? setCurrentSlide(1) : setCurrentSlide(currentSlide + 1);
    }

    return (
        <div className='grid__modal'>
            <div className="carousel">

                {/* Slides */}
                {images.map((image, i) => (
                    <div
                        key={i}
                        className={"carousel-slide"}
                        style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: transition }}
                        onTransitionEnd={loopCarousel}
                        id={i}
                    >
                        {/* Slide Image */}
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>

            {/* Previous button */}
            <button className="carousel-btn left" onClick={previous}>
                <i className="fas fa-chevron-left"></i>
            </button>

            {/* Next button */}
            <button className="carousel-btn right" onClick={next}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    )
}

export default GridModal;
