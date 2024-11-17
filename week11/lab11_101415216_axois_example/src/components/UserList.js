import React, {Component} from 'react'
import axios from 'axios'


export default class PersonList extends Component {

    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }

    getPerson = async()=>{
        const personUrl = "https://jsonplaceholder.typicode.com/users";
        try{
            const response = await axios.get(personUrl);
            // console.log(response.data);
            this.setState({persons: response.data})
            return response.data;
        } catch (error){
            console.log(error);
        }
    }

    componentDidMount(){
        const personData = this.getPerson()
        console.log(personData);
        // this.setState({persons: personData})
    }

    submitData = async()=>{
        try{
            await axios.post("https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users",
                {
                    "username": "admin",
                    "password": 'pwd'
                }
            )
        }catch (error){
            
        }
    }

    render(){
        return(
            <div>
                <h1>Person List</h1>
                {
                    this.state.persons.map(person => (
                        <p>{person.name}</p>
                    ))
                    
                }
                <button onClick={this.submitData}>Add</button>
            </div>
        )
    }
}