import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import DisplayData from './components/Display'

function App() {

    return (
        <div className="App">
            <Header />
            <Router>
                <Container className="container" >
                    <Row>
                        <Col></Col>
                        <Col xs={10}>
                            <Routes>
                                <Route path="/" element={<FormContainer />}  />
                                <Route path="/display" element={<DisplayData />}  />
                            </Routes>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
