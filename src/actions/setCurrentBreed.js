export const SET_CURRENTBREED = 'SET_CURRENTBREED'

export function SetCurrentBreed(breed, image) {
    
    return {
        type: SET_DOGBREED,
        payload: {
            breed,
            image
        }
    }
    
}
