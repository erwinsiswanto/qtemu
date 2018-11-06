import React from 'react';
import axios from "axios/index";
import Text from "../atom/Text";

class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            members: []
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get(`https://swapi.co/api/people/${id}/`)
            .then(response => response.data)
            .then(members => this.setState({members: members}));
    }

    render() {
        return (
            <React.Fragment>
                <Text>Name : {this.state.members.name}</Text>
                <Text>height : {this.state.members.height}</Text>
                <Text>mass : {this.state.members.mass}</Text>
                <Text>hair_color : {this.state.members.hair_color}</Text>
                <Text>skin_color : {this.state.members.skin_color}</Text>
                <Text>eye_color : {this.state.members.eye_color}</Text>
                <Text>birth_year : {this.state.members.birth_year}</Text>
                <Text>gender : {this.state.members.gender}</Text>
            </React.Fragment>
        );
    }
}

export default Profile;