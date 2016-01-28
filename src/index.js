import React from 'react';
import ReactDOM from 'react-dom';

import Catalog from './catalog';

require('./main.css');


ReactDOM.render(
    <Catalog />,
    document.getElementById('app')
);