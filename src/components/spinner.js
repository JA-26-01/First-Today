import React, { Component } from 'react'
import loading from './loading.gif'

// export class spinner extends Component {
//   render() {

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading"/>
      </div>
    )
  }


export default Spinner
