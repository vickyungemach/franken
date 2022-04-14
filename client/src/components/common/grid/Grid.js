import React from 'react';
import GridItem from './GridItem';
import GridEmpty from './GridEmpty';

const Grid = ({ images }) => {

    // const images = [
    //     "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //     "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    //     "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //     "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    //     "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //     "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    //     "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //     "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    //     "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    //     "https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
    //     "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1581262177533-1b1760b87952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    //     "https://images.unsplash.com/photo-1560425946-7d5830202765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //     "https://images.unsplash.com/photo-1595591329639-ed0d8bc49446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // ]


    const imageGrid = (
        <div className='grid__body'>
            {
                images.map((image, i) => (
                    <GridItem image={`https://minite-bucket.s3.us-west-1.amazonaws.com/${image.url}`} i={i} />
                ))
            }
        </div>
    )

    return (
        images.length === 0 ? <GridEmpty /> : imageGrid
    )
}

export default Grid;