import React, { Component, PropTypes } from 'react'
import TransitionZoom from './styled/Zoom'
import TransitionRise from './styled/Rise'
import PositionAbsolute from './styled/PositionAbsolute'
import StyledInput from './styled/Input'
import StyledButton from './styled/Button'
import NoteList from './NoteList'
import DelayRender from './DelayRender'
import SendIcon from 'react-icons/lib/fa/arrow-right'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: hsl(0, 0%, 90%);
    border-radius: 20px; 
    overflow: hidden;
    padding: 20px;
    color: white;
    width: 350px;
    height: 500px;
    box-shadow: 0 5px 40px rgba(0,0,0,.16);
`

const StyledAddNoteArea = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 350px;
    height: 50;
    background: hsl(0, 0%, 20%);
`

class NoteEdit extends Component {
    state = {
        newNote: '',
        initiated: false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active && !this.props.active) {
            this.setState({ initiated: true })
        }
    }

    createNewNote(note) {
        this.setState({ newNote: '' })
        note.length && this.props.onNewNote(note)
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.createNewNote(this.state.newNote)
        }
    }

    render() {
        if (!this.state.initiated) return null
        return (
            <PositionAbsolute right="30px" bottom="110px">
                <TransitionRise trigger={this.props.active}>
                    <TransitionZoom zoom={this.props.active ? 'in' : 'out'} origin="95% 95%">
                        <StyledContainer>
                            <DelayRender delay={1000} props={{notes: this.props.notes, height: '400px'}} component={<NoteList/>} />
                            <StyledAddNoteArea>
                                <StyledInput
                                    placeholder="Add note here"
                                    type="text"
                                    value={this.state.newNote}
                                    onKeyPress={(e) => this.handleKeyPress(e)} 
                                    onChange={(e) => this.setState({newNote: e.target.value})}
                                />
                                <PositionAbsolute right="0" bottom="0">
                                    <StyledButton
                                        active={!!this.state.newNote.length}
                                        color="hsl(163, 100%, 20%)"
                                        bgColor="hsl(0, 0%, 20%)"
                                        activeColor="hsl(163, 100%, 60%)"
                                        fontSize={40}
                                        onClick={() => this.createNewNote(this.state.newNote)}
                                    >
                                        <SendIcon />
                                    </StyledButton>
                                </PositionAbsolute>
                            </StyledAddNoteArea>
                        </StyledContainer>
                    </TransitionZoom>
                </TransitionRise>
            </PositionAbsolute>
        )
    }
}

NoteEdit.propTypes = {
    active: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
    onNewNote: PropTypes.func.isRequired,
};

export default NoteEdit
