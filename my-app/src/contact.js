import React from 'react'

class ContactForm extends React.Component {
    state={
        name: '',
        color: '',
        country: 'Singapore',
        fruits: []
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    updateCheckBox= (event) =>{
        let currentValues= this.state[event.target.name];
        let modifiedValues;
        if (!currentValues.includes(event.target.value))
        {
            modifiedValues = [...currentValues, event.target.value];
        }
        else{
            modifiedValues = currentValues.filter((element)=>{
                return element !== event.target.value;
            })
        
        }
        this.setState({
            fruits: modifiedValues
        })
    }
    
    SubmitForm = () =>{
        alert(this.state.name + ", " + this.state.country + ' ' + this.state.color
            )
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
                <select name='country' value={this.state.country} onChange={this.updateFormField}><br/>
                    <option value='Singapore'>Singapore</option>
                    <option value='Malaysia'>Malaysia</option>
                    <option value='Thailand'>Thailand</option>
                </select><br/>
                <label>Fruits</label><br/>
                    <input type='checkbox' name='fruits' value ='apple' checked={this.state.fruits.includes('apple')} onChange={this.updateCheckBox}/>Apple
                    <input type='checkbox' name='fruits' value ='pear' checked={this.state.fruits.includes('pear')} onChange={this.updateCheckBox}/>Pear
                    <input type='checkbox' name='fruits' value ='banana' checked={this.state.fruits.includes('banana')} onChange={this.updateCheckBox}/>Banana<br/>
                <button onClick={this.SubmitForm}>Submit</button>
            </React.Fragment>
        )
    }
}

export default ContactForm
