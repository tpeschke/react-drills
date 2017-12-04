import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return (
            <div>
                <input placeholder="Enter New Task" onChange={e => this.props.hold(e.target.value)}/>
                <button onClick={e => this.props.add()}>Add</button>
            </div>

        )
    }
}