import React from 'react';
import './Collapsible.css';

class Collapsible extends React.Component {
    state = {
        open: false,
    }

    toggleOpen = e => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return (
            <section className='collapsible-section'>
                <button onClick={this.toggleOpen} className='collapsible-header'>
                    <div className={this.state.open ? 'arrow-down' : 'arrow-right'}></div>
                    <h2>{this.props.title}</h2>
                </button>
                <div className={'collapsible-' + (this.state.open ? 'open' : 'closed')}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default Collapsible;