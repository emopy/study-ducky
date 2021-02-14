import React from 'react';

import './styles/file-card.css'
import PDFViewer from "./pdfviewer";

class FileCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className='fc-container'>
              <div className="card-header">
                  <span>{this.props.school}</span>
              </div>
              <div>
                <a style={{margin: "auto"}} href={this.props.pdfurl} target="_blank" className="pdf-anchor d-flex justify-content-center pdf-preview">
                  <PDFViewer
                    pdfURL={this.props.pdfurl}
                  />
                </a>
              </div>
              <h3 className="card-title">
                  <span>{this.props.title}</span>
              </h3>
              <p style={{fontSize: "1.1rem"}}>{this.props.description}</p>
          </div>

        );
    }
}

export default FileCard;

