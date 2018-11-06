import React from 'react';
import Button from '@material-ui/core/Button';
import Text from './../atom/Text';
import Image from './../atom/Image';
import Joined from './Joined';
import {connect} from 'react-redux';
import {changeCopyrightYear, changePageTitle} from '../actions/app';

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            joined: false
        }
    }

    handleClick = () => {
        this.setState(state => ({
            joined: !state.joined
        }))
    };

    render() {
        const {imgsrc, imgstyle, location, member, organizer} = this.props;

        return (
            <div className="myRow">
                <div className="myContainer" style={{backgroundColor: "lightgrey"}}>
                    <div style={{padding: "1%"}}>
                        <div style={{display: "inline-block", width: "100%"}}>
                            <Image src={imgsrc} style={imgstyle}/>

                            <div className="myRow">
                                <h3 style={{margin: "0px"}}><Text styled={{variant:"h5"}}><strong>Hacktiv8 Meetup</strong></Text></h3>

                                <div style={{paddingTop : "1%"}}>
                                    <div style={{display: "inline-block", width: "100px"}}>
                                        <Text>Location</Text>
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <Text>{location}</Text>
                                    </div>
                                </div>

                                <div style={{paddingTop : "1%"}}>
                                    <div style={{display: "inline-block", width: "100px"}}>
                                        <Text>Members</Text>
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <Text>{member}</Text>
                                    </div>
                                </div>

                                <div style={{paddingTop : "1%"}}>
                                    <div style={{display: "inline-block", width: "100px"}}>
                                        <Text>Organizers</Text>
                                    </div>
                                    <div style={{display: "inline-block"}}>
                                        <Text>{organizer}</Text>
                                    </div>
                                </div>

                                <div style={{paddingTop : "2%"}}>
                                    <Button variant="raised" color="secondary" style={{marginLeft: "10px"}} onClick={this.handleClick}>{this.state.joined ? "Joined" : "Join Us"}</Button>
                                    <Button variant="outlined" onClick={() => this.props.magicButton("Hello")}>Magic Button</Button>
                                    <Button variant="outlined" onClick={() => this.props.changeYear(2019)}>Change Year</Button>

                                    {this.state.joined && <Joined/>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        magicButton : (newTitle) => {
            dispatch(changePageTitle(newTitle))
        },
        changeYear : (newYear) => {
            dispatch(changeCopyrightYear(newYear))
        },
    }
};

Profile = connect(null, mapDispatchToProps)(Profile);

export default Profile;