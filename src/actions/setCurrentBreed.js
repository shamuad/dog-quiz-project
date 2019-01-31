export const SET_CURRENTBREED = 'SET_CURRENTBREED'

export function SetCurrentBreed(breed, image) {
    
    return {
        type: SET_CURRENTBREED,
        payload: {
            breed,
            image
        }
    }
    
}
