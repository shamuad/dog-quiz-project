import React, { Component } from 'react'
import * as request from 'superagent'
import DogBreedImages from './DogBreedImage'

export default class DogsImagesContainer extends Component {

    state = {
        dogBreeds: null,
        images:null
    }

    componentDidMount() {

        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
                // console.log(this.state.dogBreeds)
                this.state.dogBreeds.map(breed => {
                    request.get(`https://dog.ceo/api/breed/${breed}/images`)
                    .then(response => {
                        const images = this.updateImages(response.body.message)
                        return images
        
                    })
                })
                // const dogBreed = this.randomBreedImages(this.state.dogBreeds)
                // console.log(dogBreed)
                
            })
            .catch(console.error)
    }

    updateBreeds = (breeds) => {
        this.setState({
            dogBreeds: breeds
        })
    }

    randomBreedImages = (breed) => {
        return breed[Math.floor(Math.random() * breed.length)]
    }

    updateImages = (images) => {
        this.setState({
            images: images
        })
        console.log(images)
    }

    render() {
        return (
            <div>
                {/* {this.state.dogBreeds} */}
            </div>
        )
    }
}