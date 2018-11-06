import React from 'react';
import Text from "../atom/Text";

class About extends React.Component {
    render() {
        const {label} = this.props;

        return (
            <div className="myContainer">
                <strong>
                    <Text>{label}</Text>
                </strong>
            </div>
        )
    }
}

export default About;