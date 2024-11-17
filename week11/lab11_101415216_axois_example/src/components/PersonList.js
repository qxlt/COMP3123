import React, {Component} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import '../PersonList.css';



export default class PersonList extends Component{
    constructor(props){
        super(props)
        this.state = {
            persons: [],
            visibleDetails: {}
        }
    }

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(res => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ persons });
        })
    }

    toggleDetails = (uuid) => {
        this.setState((prevState) => ({
          visibleDetails: {
            ...prevState.visibleDetails,
            [uuid]: !prevState.visibleDetails[uuid]
          }
        }));
      };


    render(){
        return(
            <div>
            {
                this.state.persons.map(person =>(
                    <div>
                        <div class="head">
                            <p>{person.name.title} {person.name.first} {person.name.last} {person.login.uuid}</p>
                        </div>
                        <div class="flex-container">
                            <div class="picture-prof">
                                <img class="pic" src={person.picture.large}></img>
                                <button class="btn btn-info" onClick={() => this.toggleDetails(person.login.uuid)}>Details</button>
                            </div>
                            {this.state.visibleDetails[person.login.uuid] && (
                            <div class="details">
                                <p>User Name: {person.login.username}</p>
                                <p>Gender: {person.gender}</p>
                                <p>Time Zone Description: {person.location.timezone.description}</p>
                                <p>Email: {person.email}</p>
                                <p>Birth Date and Age: {person.dob.date}{person.dob.age}</p>
                                <p>Register Date: {person.registered.date}</p>
                                <p>Phone#: {person.phone}</p>
                                <p>Cell#: {person.cell}</p>
                            </div>
                            )}
                        </div>

                    </div> 
            ))
            }
            </div>
        )
    }
}

