import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const SingleType = ({imageLink, typeName}) => {
  return (
    <Row>
              <Col>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label={typeName}
              />
              </Col>
              <Col>
              <img src={imageLink} alt='bug-icon' color='black' height={30} width={30}/>
              </Col>
    </Row>
  )
}

export default SingleType