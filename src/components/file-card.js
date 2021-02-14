import React from 'react';

import './styles/file-card.css'

class FileCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <a href={this.props.link}>
            <div className='fc-container'>
                <div className='fc-img-container'>
                    <img className='fc-img' src={this.props.img}/>
                </div>
                <h3>
                    <span>{this.props.title}</span>
                </h3>
                <p style={{fontSize: "1.1rem"}}>{this.props.description}</p>
            </div>
        </a>
            
        );
    }
}

export default FileCard;

