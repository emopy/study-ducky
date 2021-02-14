import React from 'react';

import './styles/file-card.css'
import PDFViewer from "./pdfviewer";

class FileCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <a href={this.props.link}>
            <div className='fc-container'>
                <div>
                  <a href={this.props.pdfurl} target="_blank" className="pdf-anchor d-flex justify-content-center pdf-preview">
                    <PDFViewer
                      pdfURL={this.props.pdfurl}
                    />
                  </a>
                </div>
                <h3>
                    <span>{this.props.title}</span>
                </h3>
                <p style={{fontSize: "1.1rem"}}>{this.props.description}</p>
                <p>
                    <span>{this.props.school}</span>
                </p>
            </div>
        </a>

        );
    }
}

export default FileCard;

