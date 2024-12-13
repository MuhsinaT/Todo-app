import React from 'react'
import Add from '../Components/Add'
import { Row,Col } from 'react-bootstrap'


function Home() {
  return (
   <>

   <div className="container-fluid">
    <Row>

        <Col >

        <Add/>

        </Col>

        <Col>
        </Col>

    </Row>
   </div>
   

   
   </>
  )
}

export default Home
