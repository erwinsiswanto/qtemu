import React from 'react';

class Joined extends React.Component {
    componentDidMount() {
        console.log("componentDidMount ")
    }

    componentWillMount() {
        console.log("componentWillMount ");
    }

    componentWillUnmount () {
        console.log("componentWillUnmount ")
    }

    render() {
        return (
            <div>
                Render Called
            </div>
        );
    }

}

export default Joined