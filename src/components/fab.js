import React, { PropTypes } from 'react'
import StyledFab from './styles/floatingActionButton'
import StyledIcon from './styles/icon'

const fab = ({active, onActivate, onDeactivate}) => {
    return (
        <StyledFab onClick={() => active ? onDeactivate() : onActivate()}>
            {
                active ?
                    <StyledIcon>-</StyledIcon>
                    :
                    <StyledIcon>+</StyledIcon>
            }
        </StyledFab>
    )
}

fab.propTypes = {
    active: PropTypes.bool.isRequired,
    onActivate: PropTypes.func.isRequired,
    onDeactivate: PropTypes.func.isRequired,
}

export default fab
