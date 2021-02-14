import React from 'react';
import { Link } from 'react-router-dom';

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
              <div style={{height:'120px', overflow:'hidden'}}>
                <Link style={{margin: "auto"}}
                      to={{
                        pathname: "/details",
                        state: {
                                  data: this.props,
                               }
                      }}
                      className="pdf-anchor d-flex justify-content-center pdf-preview"
                >
                  <PDFViewer
                    pdfURL={this.props.pdfurl}
                  />
                </Link>
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

