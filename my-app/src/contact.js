import React from 'react'
import axios from 'axios'


class ContactForm extends React.Component {
    state={
        name: '',
        color: '',
        country: 'Singapore',
        fruits: [],
        countries: []
    }

    
countries=[
    {
        'display':'Singapore',
        'value':'singapore'
    },
    {
        'display':'Malaysia',
        'value':'malaysia'
    },
    {
        'display':'Indonesia',
        'value':'indonesia'
    }
]

fruits=[
    {
        'display':'Apple',
        'value':'apple'},
        {
            'display':'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]

    colours=[
        {
            'display':'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]


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

    componentDidMount() {
        axios.get('./countries.json').then(r=>this.countries=r.data);
        axios.get('./fruits.json').then(r=>{
            this.fruits=r.data
        });
    }

    renderFruits() {
        let options = [];
        console.log(this.fruits);
        for (let fruit of this.fruits) {
        let e =   (<React.Fragment  key={fruit.value}>
                         <input name="fruits" type="radio" value={fruit.value} 
                         checked={this.state.fruits===fruit.value} 
                         onChange={this.updateFormField}
                        />
                    <span>{fruit.display}</span>
                  </React.Fragment>)

            options.push(e)
        }
        return options;
    }


    
    renderColours(){
            let options = [];
            for (let colours of this.colours){
                let e = (
                    <React.Fragment key={colours.value}>
                        <input name='colours' type='radio' value={colours.value}
                        checked={this.state.colours===colours.value} 
                        onChange={this.updateFormField}
                       />
                   <span>{colours.display}</span>
                    </React.Fragment>
                )
                options.push(e)
            }
            return options;
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

                <div>
                    <label>Favourite Colour:</label>
                    {this.renderColours()}
                </div>
                <div>
	            <label>Country:</label>
	                <select name="country" value={this.state.country} onChange={this.updateFormField}>
                    {this.countries.map( (c)=><option key={c.value}  value={c.value}>{c.display}</option>)}
                </select>
                </div>

                {this.fruits.map((f)=>(
	            <React.Fragment>
		            <input type="checkbox" 
			        key={f.value}
			        name="fruits" 
			        value={f.value}
			        checked={this.state.fruits.includes(f.value)}
			        onChange={this.updateCheckBox}/><span>{f.display}</span>
	            </React.Fragment>
                ))}

<div>
				<label>Fruits:</label>
				{this.renderFruits()}
			</div>
            </React.Fragment>
        )
    }
}

export default ContactForm
