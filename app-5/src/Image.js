import React, {Componet} from 'react';

export default function Image(props) {
    
    render() {
        return (
          <div>
              <img src={this.props.link} />
          </div>
        );
    }
}