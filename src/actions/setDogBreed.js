import * as request from 'superagent'

export const SET_DOG_BREED = 'SET_DOG_BREED'

export function setDogBreed(breed) {
    return {
        type: SET_DOG_BREED,
        payload:
            breed
    }
}

export function getDogBreed() {
    return function (dispatch) {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                console.log(breeds)
                breeds.map(breed => dispatch(setDogBreed(breed)))

            })
    }
}
