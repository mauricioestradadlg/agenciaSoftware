import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonWha from './BotonWha';

const textStyle = {
  color: 'white',
  fontFamily: 'Arial, Verdana, sans-serif'
};

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:', { nombre, correo, celular, mensaje });
    navigate('/formEnviado');
    // Aquí podrías agregar más lógica si fuera necesario
  };

  return (
    <main style={{ textAlign: 'left' }}>
      <Container>
        <h1 className="mt-4" style={textStyle}>FORMULARIO DE CONTACTO</h1>
        <h4 style={textStyle}>Cualquier duda o comentario envíanos un mensaje!</h4><br />
        <img classname="imgContacto"id ="imgInicio4"alt ="imgForm" src ="./imagenes/imgForm.jpg"/><br />
        <Row className="mt-4 align-items-center">
          <Col md={6} className="mb-4">
            <img alt="" id="imagenContacto" src="" />
          </Col>
          <Col md={6} className="mb-4">
            <br />
            <br />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombre">
                <Form.Label style={textStyle}>Nombre:</Form.Label>
                <br />
                <Form.Control type="text" required placeholder="--INSERTAR NOMBRE--" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="correo">
                <Form.Label style={textStyle}>Correo:</Form.Label>
                <br />
                <Form.Control type="email" required placeholder="--INSERTAR CORREO--" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="celular">
                <Form.Label style={textStyle}>Celular:</Form.Label>
                <br />
                <Form.Control type="tel" required placeholder="--INSERTAR CELULAR--" value={celular} onChange={(e) => setCelular(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="mensaje">
                <Form.Label style={textStyle}>Comentarios:</Form.Label>
                <br />
                <Form.Control as="textarea" rows="5" required placeholder="--COMENTARIOS--" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
              </Form.Group><br />

              <Button variant="primary" type="submit">Enviar</Button>
              <br />
            </Form>
          </Col>
        </Row>
        <BotonWha/>
      </Container>
      <br />
    </main>
  );
}

export default Contacto;
