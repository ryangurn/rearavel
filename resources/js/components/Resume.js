import React, { Component } from "react";

class Resume extends Component {
    componentDidMount() {
        // set the title
        axios.get('/api/page/slug/resume').then(response => {
            document.title = response.data[0].title;
        });
    }

    render() {
        return (
            <div>
                <h1>Resume</h1>
            </div>
        );
    }
}

export default Resume;
