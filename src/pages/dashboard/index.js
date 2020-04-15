import React, { Component} from 'react'
import { Link  } from 'react-router-dom';

import Header from '../../components/Header';

export default class Dashboard extends Component {
  
  componentDidMount(){

    fetch('http://localhost:3000/produtos')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Não foi possível encontar a rota solicitada.");
    })
    .then(produtos => console.log(produtos))
    .catch(e => console.log(e))
  }

  render(){
    return(
      <div>
        <Header title='Dashboard' />
        <hr className='my-3' />
        <div className='text-center'>
          <Link to='/logout' className='btn btn-outline-primary'>Log Out</Link>
        </div>
      </div>
    );
  }
}