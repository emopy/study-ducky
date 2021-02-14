import React from 'react';

import './styles/file-details.css'

class FileDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Title {this.props.title}</p>
                <p>School {this.props.school}</p>
                <p>Description {this.props.description}</p>
                <p>Keywords {this.props.keywords}</p>
                <p>URL {this.props.url}</p>
            </div>
        );
    }
}

export default FileDetails;
