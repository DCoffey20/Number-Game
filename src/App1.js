import React, { Component } from 'react';
import "./App.css";


function transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {
        transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
    };
}
class App1 extends Component {

    state = {
        styleOne: {},
        styleTwo: {}
    }

    onMouseOver = (e) => {

        this.setState({
            styleOne: transform(-e.clientX / e.clientY),
            styleTwo: transform(e.clientX / e.clientY)
        });
    }

    render() {
        return (
            <div className="App panel" onMouseMove={this.onMouseOver}>
                <div className= "panel" style={this.state.styleOne} />
                <div className= "panel" style={this.state.styleTwo} />
                {/* <Buttons /> */}

            </div>
        );
    }
}

export default App1;