import react from 'react'


function ImageFrame (){
    return(
        <img src={require('./logo.svg').default} />
    )
}

export default ImageFrame;