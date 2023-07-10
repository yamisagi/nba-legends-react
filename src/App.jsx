import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './App.css'
import { Container } from 'react-bootstrap';
import ContainerCard from './components/ContainerCard';

function App() {

  return (
    <Container>
      <Header />
      <ContainerCard />
    </Container>
  )
}

export default App
