import React from 'react';
import Text from './../atom/Text';

class Next extends React.Component {
    render() {
        const {meetupTitle, meetupDate, meetupContent} = this.props;

        return (
            <div className="myContainer" style={{backgroundColor: "lightgray"}}>
                <div style={{padding: "1%"}}>
                    <Text styled={{variant:"h5"}}><strong>{meetupTitle}</strong></Text>
                    <p style={{color:"gray"}}><Text>{meetupDate}</Text></p>

                    <Text>{meetupContent}</Text>
                </div>
            </div>
        )
    }
}

export default Next;