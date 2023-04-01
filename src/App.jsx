import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import Header from './components/Header'
import FormContainer from './components/FormContainer'


function App() {
    return (
        <div  className="App ">
            <Header/>
            <Container  >
                <Row>
                    <Col ></Col>
                    <Col xs={10}><FormContainer/></Col>
                    <Col ></Col>
                </Row>
            </Container>
        </div>


    );
}

export default App;
