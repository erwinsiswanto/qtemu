import React from 'react';
import Button from './../atom/Button';
import Text from './../atom/Text';

class Past extends React.Component {
    render() {
        const {release_date, title, characters} = this.props;

        return(
            <div className="myContainer" style={{backgroundColor: "lightgray", width: "30%", minHeight: "200px", display: "inline-block"}}>
                <div style={{display: "inline-block", width: "100%", minHeight:"200px"}}>
                    <p style={{margin: "10px"}}><strong><Text>{release_date}</Text></strong></p>
                    <hr style={{margin: "10px"}}/>
                    <p style={{margin: "10px"}}><strong>
                        <Text>{title}</Text>
                    </strong></p>
                    <p style={{marginLeft: "10px"}}><strong><Text>{characters.length}</Text></strong><Text>Characters</Text></p>
                    <Button style={{marginLeft: "10px"}} label="View"/>
                </div>
            </div>
        )
    }
}

export default Past;