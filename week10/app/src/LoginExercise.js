import React, { Component } from 'react'

export default class LoginExercise extends Component {
  
    constructor(props){
        super(props)
       this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            postalCode: '',
            isSubmitted: false
       }
       this.province = ['Alberta', 'British Columbia', 
        'Manitoba, New Brunswick', 'Newfoundland and Labrador', 
        'Nova Scotia', 'Ontario', 'Prince Edward Island', 
        'Quebec', 'Saskatchewan']
    }

    // handleClick(e) {
    //     e.preventDefault()
    //     alert(`Hello World: ${e.target.name} - ${e.target.value}`)
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(this.state)
    // }

    // handleInput = (e) => {
    //     e.preventDefault()
    //     const { name, value } = e.target
        
    //     this.setState({
    //         ...this.state,
    //         [name]: value
    //     })
    //     console.log(`${this.state.firstname}`)
    // }

    handleSubmitHere = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmitted: true // Set to true on submit
        });
    };

    render() {
        return (
          <div class="container mt-5">
             <h2 class="text-center mb-4">Data Entry Form</h2>
             <form onSubmit={this.handleSubmit}>
                Email: <input type='text' name='email' value={this.state.email} onChange={this.handleSubmitHere} placeholder='Enter Email'/> <br/>
                Name: <input type='text' name='name' value={this.state.name} onChange={this.handleSubmitHere} placeholder='Full Name'/> <br/>
                Address: <input type='text' name='address' value={this.state.address} onChange={this.handleSubmitHere} placeholder='1234 Main St' /> <br/>
                Address2: <input type='text' name='address2' value={this.state.address2} onChange={this.handleSubmitHere} placeholder='Apartment, Studio or Floor' /> <br/>
                City: <input type='text' name='city' value={this.state.city} onChange={this.handleSubmitHere} /> <br/>
                Province: <select name='province' value={this.state.province} onChange={this.handleSubmitHere}>
                    {
                        this.province.map((cnm) => (
                            <option key={cnm} value={cnm}>{cnm}</option>
                        ))
                    }
                </select>
                <br/>
                Postal Code: <input type='text' name='postalCode' value={this.state.postalCode} onChange={this.handleSubmitHere} />
                <br/>
                <input class="btn btn-primary btn-block" type='submit' value='Login' />
             </form>
         
         {/* <button value='TEST' name='btnSubmit' onClick=''>Submit</button>   */}
         
         {this.state.isSubmitted && (
                <div>
                    <p>Email: {this.state.email}</p>
                    <p>Full Name: {this.state.name}</p>
                    <p>Address: {this.state.address}</p>
                    <p>Address2: {this.state.address2}</p>
                    <p>City: {this.state.city}</p>
                    <p>Province: {this.state.province}</p>
                    <p>Postal Code: {this.state.postalCode}</p>

                </div>
             )}
      </div>
    )
  }
}
