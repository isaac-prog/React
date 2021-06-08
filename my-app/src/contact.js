import React from 'react'

class ContactForm extends React.Component {
    state={
        name: '',
        color: '',
        country: ''
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <label>Name</label><br/>
                <input name='name' type='text' value={this.state.name} onChange={this.updateFormField}/><br/>
                <label>color</label><br/>
                <input name='color' type='radio' value='red' onChange={this.updateFormField}/>red
                <input name='color' type='radio' value='blue' onChange={this.updateFormField}/>blue
                <input name='color' type='radio' value='green' onChange={this.updateFormField}/>green<br/>
                <label>Country</label><br/>
                <input name='country' type='text' value={this.state.country}/><br/>
            </React.Fragment>
        )
    }
}

export default ContactForm
