import React from 'react';
import { Link  } from 'react-router-dom';
import { 
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  NavLink,
  UncontrolledTooltip } from 'reactstrap';

const Register = (props) => {
  return (
    <div className='col-md-3'>
      <h3>Cadastro</h3>
      <hr />
      <Form>
        <FormGroup>
          <Label for="name">Nome</Label>
          <Input type="text" name="name" id="name" placeholder="Nome completo"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Usuário</Label>
              <Input type="text" name="user" id="user" placeholder="Usuáro de acesso ao sistema" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Senha</Label>
              <Input type="password" name="password" id="password" placeholder="Senha de acesso ao sistema" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="E-mail para contatos" />
        </FormGroup>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="cep">CEP</Label>
              <Input type="text" name="cep" id="cep"/>
            </FormGroup>
          </Col>
          <Col md={9}>
            <FormGroup>
              <Label for="Logradouro">Logradouro</Label>
              <Input type="text" name="Logradouro" id="Logradouro" />
            </FormGroup>
          </Col>
        </Row>
        
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="pais">País</Label>
              <Input type="text" name="pais" id="pais"/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="estado">Estado</Label>
              <Input type="text" name="estado" id="estado"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="uf">UF</Label>
              <Input type="text" name="uf" id="uf" style={{textAlign: 'center'}}/>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>  
          <Button color='info'>Cadastrar</Button>        
        </FormGroup>
        <div>
          <p><span style={{textDecoration: "underline", color:"blue"}} id="toolTopCadastro"><Link to='/'>Retornar ao Login</Link></span>.</p>
          <UncontrolledTooltip placement="right" target="toolTopCadastro">
            Retorna a tela de cesso ao Sitema.
          </UncontrolledTooltip>                    
        </div>        
      </Form>
      </div>
  );
}

export default Register;
