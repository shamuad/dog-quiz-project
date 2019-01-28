import React, { Component } from 'react'
import * as request from 'superagent'
import DogBreedImages from './DogBreedImages'

export default class DogsImagesContainer extends Component {

    state = { images: null }

    componentDidMount() {
        // const breed = this.props.match.params.breed
        request
            .get('https://dog.ceo/api/breed/hound/images')
            .then(response => this.updateImages(response.body.message))
            .catch(console.error)
    }

    updateImages = (images) => {
        this.setState({
            images: images
        })
        console.log(images)
    }


    render() {
        return <DogBreedImages images={this.state.images} />
    }
}