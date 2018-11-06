import React from 'react';
import './../App.css';
import pic from './../gray.jpg';
import Profile from './../profile/Profile';
import Next from './../meetup/Next';
import About from './../meetup/About';
import Past from './../meetup/Past';
import Member from './../member/Index';
import Section from './../Section';
import Header, {HeaderTitle} from './../Header';
import {fetchMembers} from "../actions/member";
import {fetchEvents} from "../actions/event";
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            userpic: pic,
            username: "Adhy Wiranata",
            location: "Jakarta, Indonesia",
            member: "1,078",
            members: [],
            pastContent: []
        }
    }

    componentDidMount() {
        /*axios.get('https://swapi.co/api/people/')
            .then(response => response.data.results)
            .then(members => this.setState({members: members}));*/

        /*axios.get('https://swapi.co/api/films/')
            .then(response => response.data.results)
                .then(data => this.setState({pastContent: data.slice(0, 3)}));*/

        this.props.fetchMembers();
        this.props.fetchEvents();
    }

    render() {
        const {userpic, username, location, member} = this.state;
        const {member_redux, event_redux} = this.props;

        return (
            <div className="myApp">
                <Header>
                    <HeaderTitle>Welcome to Qtemu</HeaderTitle>
                </Header>

                <Profile imgsrc={userpic} imgstyle={{height: "25vmin", float: "left", marginRight: "2%", width:"25vmin"}} location={location} member={member} organizer={username}/>

                <Section title="Next Meetup">
                    <Next meetupTitle="Awesome meetup and event" meetupDate="25 January 2019" meetupContent={
                        <span>Hello, JavaScript & Node.js Ninjas! <br/>
                        Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                        The meetup format will contain some short stories and technical talks. <br/>
                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. <br/>
                        <br/>
                        Remember to bring a photo ID to get through building security. <br/><br/>
                        -----
                        <br/><br/>
                        See you there!
                        <br/>
                        Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
                    </span>
                    }/>
                </Section>


                <Section title="About Meetup">
                    <About label={<span>Come and meet other developers interested in the JavaScript and it's library in the Greated Jakarta Area.<br/>
                            Twitter: @JakartaJS and we use the hashtag #jakartajs</span>}/>
                </Section>

                <Section title="Members" see={true}>
                    {
                        member_redux < 1 ? "Loading..." :
                            member_redux.map((m, index) => (
                                <Member id={index} imgstyle={{height: "10vmin", float: "left", width:"10vmin", marginRight:"2%"}} imgsrc={pic} {...m}/>
                            ))}
                </Section>

                <Section style={{textAlign:"center"}} title="Past Meetups" see={true}>
                    {event_redux.map((pastData) => (
                        <Past {...pastData}/>
                    ))}
                </Section>

            </div>
        );
    }
}

const mapStatetoProps = state => ({
    member_redux: state.member.userData,
    event_redux: state.event.events
});

const mapDispatchToProps = dispatch => ({
    fetchMembers: () => dispatch(fetchMembers()),
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Home);