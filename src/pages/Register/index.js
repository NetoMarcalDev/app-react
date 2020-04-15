import React, { Component } from 'react';

import { 
  Col, 
  Row, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  UncontrolledTooltip, Badge} from 'reactstrap';

export default class Register extends Component {

constructor(){
  super();
  this.state = {
    message: '',
  }
}

cadastrar = () =>{
  const data = {      
    descricao: this.user,
    senha: this.password,
    nomecompleto: this.nome,
    email: this.email,
    cep: this.cep,
    logradouro: this.logradouro,
    numero: this.numero,
    pais: this.pais,
    estado: this.estado,
    uf: this.uf
  };

  const requestInfo = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
  };

  fetch('http://localhost:3000/usuarios/cadastro', requestInfo)
      .then(response => {
          if(response.ok){
            return response.json();
          }
          console.log(response);
      })
      .catch(e => {
        this.setState({ message: e.message });
      });
}


  render(){
    return (
      <div className='col-md-4'>
        <h3>Cadastro</h3>
        <hr />
        <Form>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" id="nome" onChange={e => this.nome = e.target.value} placeholder="Nome completo"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="user">Usuário</Label>
                <Input type="text" name="user" id="user" onChange={e => this.user = e.target.value} placeholder="Usuáro de acesso ao sistema" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Senha</Label>
                <Input type="password" name="password" id="password" onChange={e => this.password = e.target.value} placeholder="Senha de acesso ao sistema" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email"  onChange={e => this.email = e.target.value} placeholder="E-mail para contatos" />
          </FormGroup>
          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="cep">CEP</Label>
                <Input type="text" name="cep" id="cep" onChange={e => this.cep = e.target.value} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="logradouro">Logradouro</Label>
                <Input type="text" name="logradouro" id="logradouro" onChange={e => this.logradouro = e.target.value} />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="numero">Número</Label>
                <Input type="text" name="numero" id="numero" onChange={e => this.numero = e.target.value} />
              </FormGroup>
            </Col>
          </Row>        
          <Row form>
            <Col md={4}>
              <FormGroup>
                <Label for="pais">País</Label>
                <Input type="text" name="pais" id="pais" onChange={e => this.pais = e.target.value} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="estado">Estado</Label>
                <Input type="text" name="estado" id="estado" onChange={e => this.estado = e.target.value} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="uf">UF</Label>
                <Input type="text" name="uf" id="uf" style={{textAlign: 'center'}} onChange={e => this.uf = e.target.value} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>  
            <Button onClick={this.cadastrar} color='info'>Cadastrar</Button>        
          </FormGroup>
          <div style={{alignItems: 'center'}}>
            <p>
              <span style={{textDecoration: "underline", color:"blue"}} id="toolTopCadastro">
                <Badge  className='cadastrese' href="/" color="light">Retornar ao Login</Badge >
              </span>
            </p>
            <UncontrolledTooltip placement="right" target="toolTopCadastro">
              Retorna a tela de cesso ao Sitema.
            </UncontrolledTooltip>                    
          </div>        
        </Form>
        </div>
    );
  }
}


