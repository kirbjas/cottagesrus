import React from 'react';
import ReactDOM from 'react-dom';
import cottage1 from './cottage1.jpg';

<script src="../node_modules/axe-core/axe.min.js"></script>

const mainelement = <div><h1>Beautiful cottage on Rideau Lake available for weekly rentals!</h1><img src={cottage1} width="500" height="400"/></div>

ReactDOM.render(mainelement, document.getElementById('root'));

/*axe
  .run()
  .then(results => {
    if (results.violations.length) {
      throw new Error('Accessibility issues found');
    }
  })
  .catch(err => {
    console.error('Something bad happened:', err.message);
  });*/
