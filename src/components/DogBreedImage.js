import React, { Component } from 'react'

export default class DogBreedImages extends Component {
    render() {
        const { dogBreeds } = this.props
        return (
            <div className="dogs-list">
                <h1>Dogs List</h1>

                {!dogBreeds && 'Loading...'}

                {
                    dogBreeds &&
                    <ul>{dogBreeds.map(this.renderDogBreed)}</ul>
                }
            </div>
        )
    }
}