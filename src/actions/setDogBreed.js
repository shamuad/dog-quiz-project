export const SET_DOGBREED = 'SET_DOGBREED'

export function SetDogBreed(breed, image) {
    return {
        type: SET_DOGBREED,
        payload: {
            breed,
            image
        }
    }
    
}
