import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  Alert } from 'reactstrap';

import Header from '../../components/Header';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      message: '',
    }
  }

  signIn = () => {
    
    const data = { descricao: this.usuario, senha: this.password };

    const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    };

    fetch('http://localhost:3000/usuarios/login', requestInfo)
    .then(response => {
        if(response.ok){
          return response.json();
        }
        throw new Error('Login inválido...');
    })
    .then(token => console.log(token))
    .catch(e => {
      this.setState({ message: e.message });
    });
  }

  render(){
    return(
      <div className='col-md-6'>
        <Header title='ReactJS Login' />
        <hr className='my-3' />
        {
          this.state.message !==''? (
            <Alert color='danger' className='text-center'> {this.state.message} </Alert>
          ) : ''
        }
        <Form>
          <FormGroup>
            <Label>Usuário</Label>
            <Input type='text' id='usuario' onChange={e => this.usuario = e.target.value} placeholder='Informe o usuário' />

          </FormGroup>
          <FormGroup>
            <Label for='password'>Senha</Label>
            <Input type='password' id='password' onChange={e => this.password = e.target.value} placeholder='Informe a senha' />          
          </FormGroup>
          <Button color='primary' block onClick={this.signIn}>Entrar</Button>
        </Form>
      </div>
    );
  }
}