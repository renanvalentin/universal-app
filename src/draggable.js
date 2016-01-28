import React, {Component} from 'react';

function draggable(component) {
    class Compose extends Component {
        constructor(props) {
            super(props);

            this._onMouseDown = this._onMouseDown.bind(this);
            this._onMouseUp = this._onMouseUp.bind(this);
            this._onMouseMove = this._onMouseMove.bind(this);
        }

        componentDidMount() {
            this.refs.component.addEventListener('onmousedown', this._onMouseDown, false);
            this.refs.component.addEventListener('onmouseup', this._onMouseUp, false);
            this.refs.component.addEventListener('onmousemove', this._onMouseMove, false);
        }

        componentWillUnmount() {

        }

        _onMouseDown() {
            console.log('mouse down');
        }

        _onMouseUp() {
            console.log('mouse up');
        }

        _onMouseMove() {
            console.log('mouse move');
        }

        render() {
            return <component />;
        }
    }

    return (<Compose />);
}

export default draggable;