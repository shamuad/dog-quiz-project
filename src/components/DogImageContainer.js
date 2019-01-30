import React, { Component } from 'react'
import * as request from 'superagent'
import { SetDogBreed } from '../actions/setDogBreed'
import { connect } from 'react-redux'

var shuffle = require('shuffle-array')

const randomImage = shuffle.pick([1,2,3,4,5])

class DogsImagesContainer extends Component {
    state = {
        dogBreeds: []
    }
    componentDidMount() {

        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                breeds.map(breed => {
                    return request.get(`https://dog.ceo/api/breed/${breed}/images`)
                        .then(response => {
                            this.props.SetDogBreed(breed, response.body.message[randomImage])
                        })

                })


            })
            .catch("error")


    }
    render() {
        return (<div > { /* {this.state.dogBreeds} */} </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, { SetDogBreed })(DogsImagesContainer)