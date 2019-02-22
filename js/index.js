import View from 'dom-renderer';

import template from './index.html';
import data from './index.json';

const view = new View( template );

view.render( data ).then(() => console.log(view + ''));