import React, { Component, PropTypes } from 'react'

class lateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: this.props.props
        }
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => {
            this.setState({ props: nextProps.props })
        }, this.props.delay)
    }

    render() {
        return <div>{React.cloneElement(this.props.component, {...this.state.props})}</div>
    }
}

lateComponent.propTypes = {
    delay: PropTypes.number.isRequired,
    props: PropTypes.object.isRequired,
};

export default lateComponent
