import React from 'react';
import ReactDOM from 'react-dom';

function draggable(Component, options) {
    class Compose extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                dragging: false,
                offsetLeft: 0,
                offsetTop: 0,
                elementWidth: 0,
                elementHeight: 0
            };

            this._onMouseDown = this._onMouseDown.bind(this);
            this._onMouseUp = this._onMouseUp.bind(this);
            this._onMouseMove = this._onMouseMove.bind(this);
        }

        componentDidMount() {
            const node = ReactDOM.findDOMNode(this.refs.component);

            node.addEventListener('mousedown', this._onMouseDown, false);
            node.addEventListener('mouseup', this._onMouseUp, false);
            node.addEventListener('mousemove', this._onMouseMove, false);
        }

        componentWillUnmount() {
            const node = ReactDOM.findDOMNode(this.refs.component);

            node.removeEventListener('mousedown', this._onMouseDown, false);
            node.removeEventListener('mouseup', this._onMouseUp, false);
            node.removeEventListener('mousemove', this._onMouseMove, false);
        }

        _onMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();

            const element = e.target;

            const anchorNode = document.querySelector(options.relativeTo);
            const containerNode = document.querySelector(options.container);

            this.setState({
                dragging: true,
                offsetLeft: containerNode.offsetLeft + anchorNode.offsetLeft,
                offsetTop: containerNode.offsetTop + anchorNode.offsetTop,
                elementWidth: element.clientWidth,
                elementHeight: element.clientHeight
            });

            return false;
        }

        _onMouseUp(e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({
                dragging: false
            });
        }

        _onMouseMove(e) {
            e.preventDefault();
            e.stopPropagation();

            if (this.state.dragging) {
                this._applyDraggingPosition(e.pageX, e.pageY);
            }
        }

        _applyDraggingPosition(x, y) {
            const position = {
                x: (x - this.state.offsetLeft) - (this.state.elementWidth / 2),
                y: (y - this.state.offsetTop) - (this.state.elementHeight / 2)
            };

            this._applyStyleToComponent(position);

            this.setState({
                position
            });
        }

        _applyStyleToComponent(position) {
            const node = ReactDOM.findDOMNode(this.refs.component);
            node.style.transform = `translate3d(${position.x}px, ${position.y}px, 0px)`;
        }

        render() {
            return (<Component ref="component"/>);
        }
    }

    return (<Compose />);
}

export default draggable;