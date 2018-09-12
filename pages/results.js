import React from 'react';
import Router from 'next/router';

const resultPage = (props) => (
  <div>
    <h1>Result Page</h1>
    <button onClick={() => Router.push('/index')}>Main</button>
  </div>
);

export default resultPage;