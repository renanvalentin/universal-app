import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/lib/paper';
import HomeFeature from './home-feature';

const PaperExampleSimple = () => (
    <div>
        <HomeFeature
            heading="Get Started"
            route="/get-started"
            img="http://52.19.95.42:3000/images/css-framework.svg"
            firstChild={true}
            buttonLabel="Customize"
        />
    </div>
);


ReactDOM.render(
    <PaperExampleSimple />,
    document.getElementById('app')
);