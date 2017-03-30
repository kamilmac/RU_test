import React, { Component, PropTypes } from 'react'
import StyledNoteEdit from './styles/noteEditContainer'
import NoteList from './noteList'
import LateComponent from './lateComponent'

class noteEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newNote: '',
        }
    }

    createNewNote(note) {
        this.setState({ newNote: '' })
        this.props.onNewNote(note)
    }

    render() {
        return (
            <StyledNoteEdit visible={this.props.active}>
                <LateComponent delay={1000} props={{notes: this.props.notes}} component={<NoteList/>} />
                <input
                    type="text"
                    value={this.state.newNote}
                    onChange={(e) => this.setState({newNote: e.target.value})}
                />
                <button onClick={() => this.createNewNote(this.state.newNote)}>SUBMIT</button>
            </StyledNoteEdit>
        );
    }
}

noteEdit.propTypes = {
    active: PropTypes.bool.isRequired,
    notes: PropTypes.array.isRequired,
    onNewNote: PropTypes.func.isRequired,
};

export default noteEdit
