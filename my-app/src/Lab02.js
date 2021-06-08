import React from 'react'

class EvenOdd extends React.Component{
state = { 
    count: 2
}
// render needs component class
render(){
    return(
        <React.Fragment>
            <div onClick={this.click}>
                {this.state.count}
            </div>
            {
            this.state.count %2 === 0? 
            <p>even number</p>: <p>Odd number</p>
            }
        </React.Fragment>
    )
}
}

export default EvenOdd

