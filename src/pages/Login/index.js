import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button,
  Alert,
  UncontrolledTooltip,
  Badge } from 'reactstrap';

export default class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.location.state?this.props.location.state.message: '',
    }   
  }

  componentDidMount(){
      
    document.getElementById('user').focus();
  }
  
  clearInputs(){
    document.getElementById('user').value = '';
    this.user = undefined;
    document.getElementById('password').value = '';
    this.password = undefined;
  }

  userTestText(){

    const user = document.getElementById('user');
    
    if(this.user === undefined){
      
      user.focus();
      user.classList.add('is-invalid');
      this.setState({message: 'Favor informar o usuário.'});
      return false;
    }
    user.classList.remove('is-invalid');
    this.setState({message: ''});
    return true;
  }

  passwordTestText(){
    if(this.password === undefined){
      document.getElementById('password').focus();
      this.setState({message: 'Favor informar a senha.'});
      return false;
    }
    this.setState({message: ''});
    return true;
  }

  testInpuText(){
    if((this.userTestText()) && (this.passwordTestText())){
      return true;
    }
    return false;
  }

  signIn = () => {
    
    const data = { descricao: this.user, senha: this.password };

    if(this.testInpuText()){
      const requestInfo = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
      };
  
      fetch('http://localhost:3000/usuarios/login', requestInfo)
      .then(response => {
          if(response.ok){
            this.clearInputs();
            return response.json();
          }
          throw new Error('Usuário ou senha inválidos.');
      })
      .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push("/admin");
        return;
      })
      .catch(e => {
        this.setState({ message: e.message });
      });
    }
  }



  render(){
    return(
      <div className='col-md-3'>
        <h3>Login</h3>
        <hr className='my-3' />
        {
          this.state.message !==''? (
            <Alert color='danger' className='text-center'> {this.state.message} </Alert>
          ) : ''
        }
        <Form>
          <FormGroup>
            <Label>Usuário</Label>
            <Input type='text' id='user' onChange={e => this.user = e.target.value} placeholder='Informe o usuário' />
          </FormGroup>
          <FormGroup>
            <Label for='password'>Senha</Label>
            <Input type='password' id='password' onChange={e => this.password = e.target.value} placeholder='Informe a senha' />          
          </FormGroup>
          <Button color='primary' block onClick={this.signIn}>Entrar</Button>
          <div>
            <p>
              <span id="toolTopCadastro"> 
                <Badge className='cadastrese' href="/cadastro" color="light"  >Cadastre-se aqui.</Badge >
              </span>
            </p>
            <UncontrolledTooltip placement="right" target="toolTopCadastro">
              Cadastra o Usuário para acesso ao Sitema.
            </UncontrolledTooltip>                    
          </div>
        </Form>        
      </div>
    );
  }
}