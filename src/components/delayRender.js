import React, { Component, PropTypes } from 'react'

class delayRender extends Component {
    state = {
        props: this.props.props
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({ props: nextProps.props })
        }, this.props.delay)
    }

    render() {
        return <div>
            {React.cloneElement(this.props.component, {...this.state.props})}
        </div>
    }
}

delayRender.propTypes = {
    delay: PropTypes.number.isRequired,
    props: PropTypes.object.isRequired,
    component: PropTypes.element.isRequired,
};

export default delayRender
