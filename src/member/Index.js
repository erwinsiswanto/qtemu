import React from 'react';
import Text from './../atom/Text';
import Image from './../atom/Image';
import {Link} from 'react-router-dom';

class Index extends React.Component {
    render() {
        const {imgsrc, imgstyle, name, gender, id} = this.props;

        return (
            <div className="myContainer" style={{backgroundColor: "lightgray"}}>
                <div style={{padding: "1%"}}>
                    <div style={{display: "inline-block", width: "100%"}}>
                        <Link to={`profile/${id+1}`}>
                            <Image src={imgsrc} style={imgstyle}/>

                            <div className="myRow" style={{paddingLeft: "7%"}}>
                                <h4 style={{margin: "0px"}}><Text>{name}</Text></h4>

                                <div style={{paddingTop : "1%"}}>
                                    <div style={{display: "inline-block", width: "150px"}}>
                                        <Text>{gender}</Text>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index