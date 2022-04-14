import React, { useState } from 'react';
import GridItem from './GridItem';
import GridEmpty from './GridEmpty';
import GridModal from './GridModal';

const Grid = ({ }) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const images = [
        { url: "https://images.unsplash.com/photo-1499946731602-f81b5f4eebc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2844&q=80", orientation: 'landscape'},
        { url: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80", orientation: 'portrait'},
        { url: "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80", orientation: 'portrait'},
        { url: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", orientation: 'portrait'}
        // "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        // "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        // "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        // "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        // "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        // "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        // "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        // "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        // "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        // "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        // "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        // "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
        // "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        // "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ]

    const openGridModal = (image, index) => {
        document.querySelector('body').classList.add('no-scroll');
        setCurrentIndex(index)
    }

    const closeGridModal = () => {
        document.querySelector('body').classList.remove('no-scroll');
        setCurrentIndex(null);
    }


    const imageGrid = (
        <>
            <div className='grid__body'>
               
                {   // Image grid
                    images.map((image, i) => (
                        <GridItem 
                            openGridModal={openGridModal} 
                            image={image} 
                            i={i} 
                        />
                    ))
                }
            </div>

            {   // Full screen image
                currentIndex !== null && (
                    <GridModal 
                        images={images} 
                        closeGridModal={closeGridModal} 
                        currentImageIndex={currentIndex} 
                    />
                )
                
            }
            
        </>
    )

    return (
        images.length === 0 ? <GridEmpty /> : imageGrid
    )
}

export default Grid;