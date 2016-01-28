import React, {Component} from 'react';

import Paper from 'material-ui/lib/paper';
import ProductCard from './product-card';

import draggable from './draggable';

class Product extends Component {
    render() {
        return (<div>batman</div>);
    }
}

class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = {showingProduct: false};
    }

    toggleProductState() {
        this.setState({
            showingProduct: !this.state.showingProduct
        });
    }

    render() {
        let product;
        if(this.state.showingProduct) {
            product = draggable(<Product />);
        }

        return (
            <div className="card-style">
                <ProductCard
                    heading="Lanyard"
                    img="http://52.19.95.42:3000/images/css-framework.svg"
                    firstChild={true}
                    buttonLabel="Customize"
                    onButtonClick={() => this.toggleProductState()}
                />
                {product}
            </div>
        );
    }
}

export default Catalog;