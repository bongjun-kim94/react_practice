import React, { PureComponent } from 'react';

class Test extends PureCompoennt {
    state = {
        counter: 0,
        array: [],
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter){
    //         return true; // 렌더링
    //     }
    //     return false; // 렌더링 안함
    // }

    onClick = () => {
        this.setState({
            array: [...this.state.array, 5],
        });
    };

    render() {
        console.log('렌더링', this.state);
        return(
            <>
                <button onClick={this.onClick}>클릭</button>
            </>
        );
    }
}

export default Test;