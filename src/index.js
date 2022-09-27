import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently imported via this script, is 
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());