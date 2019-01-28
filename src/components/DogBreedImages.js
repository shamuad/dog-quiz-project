import React from 'react'

export default function DogBreedImages(props) {    
    const images = props.images

    return (
        <div className="dog-breed-images">
            <h1>Dogs Breed Image</h1>
            <div>
                {images && images.map(url => <img src={url} alt="Dog" />)}
                {!images && 'Loading...'}
            </div>
            {/* This page will show images of {props.match.params.breed} breed. */}
        </div>
    )
}