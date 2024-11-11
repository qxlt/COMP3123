import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props){
        super(props)
        // this.fname = 'no name'
        this.state = {
            fname:'',
            lname: '',
            city: '',
        }
        this.countries = ["China", "Morroco", "Norway"]
    }

    handleClick(e){
        alert(`Hello World: ${e.target.name} - ${e.target.value}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        console.log(JSON.stringify(this.state));
    }

    handleInput = (e)=>{
        const { name, value } = e.target
        // this.fname = value;
        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(`${this.state.firstname}`)
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    Firstname: <input type='text' name='fname' 
                    placeholder='Enter first name' 
                    onChange={this.handleInput}></input>
                    <br></br>
                    Lastname: <input type='text' name='lname' placeholder='Enter last name'
                    onChange={this.handleInput}></input>
                    <br></br>
                    Country: <select name="country" on onChange={this.handleInput}>
                        {
                            this.countries.map((cnm) => (
                                (<option>{cnm}</option>)
                            ))
                        }</select>
                    City: <select name="city">
                        <option value="TOR">Toronto</option>
                        <option value="Van">Vancouver</option>
                        <option value="MKR">Markham</option>
                    </select>
                    <input value='Login' type="submit"></input>
                    
                </form>
                <br></br>
                     <button value='Test' name='btnSubmit' onClick={this.handleClick}>Submit</button>
             
                <p>{ this.state.fname }</p>
                <p>{ JSON.stringify(this.state) }</p>
            </div>
        )
    }
}