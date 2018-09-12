import React from 'react';
import Router from 'next/router';
import Calculator from '../components/Calculator'

const indexPage = (props) => (
  <div>
    <h1>Main Page</h1>
    <button onClick={() => Router.push('/results')}>Results</button>
    <Calculator></Calculator>
  </div>
);

export default indexPage;