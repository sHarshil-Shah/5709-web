import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faShare, faTrash } from '@fortawesome/free-solid-svg-icons'

function Content() {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
    <div className="Headers">Content</div>
    <Accordion className="mt-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div>
            <div>Lecture 1</div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-start">
          <h3>Main topic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="content-container">
          <FontAwesomeIcon icon={faEdit} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faShare} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
      <Accordion.Header>
          <div>
            <div>Lecture 2</div>
          </div>
        </Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-start">
          <h3>Main topic</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="content-container">
          <FontAwesomeIcon icon={faEdit} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faShare} style={{marginRight: "20px"}}/>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
  )
}

export default Content