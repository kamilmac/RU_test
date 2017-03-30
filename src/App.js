import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StyledLayout from './components/styles/layout'
import NoteEdit from './components/noteEdit'
import NoteList from './components/noteList'
import Fab from './components/fab'
import * as actions from './actions/all'
import LateComponent from './components/lateComponent'

const App = ({actions, ui, notes}) => (
    <StyledLayout>
        <LateComponent delay={2000} props={{notes}} component={<NoteList/>} />
        <NoteEdit
            active={ui.noteEditActive}
            notes={notes}
            onNewNote={newNote => actions.addNote(newNote)}
        />
        <Fab
            active={ui.noteEditActive}
            onActivate={() => {actions.showNoteEdit()}}
            onDeactivate={actions.hideNoteEdit}
        />
    </StyledLayout>
)

App.propTypes = {
    actions: PropTypes.object.isRequired,
    ui: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    ui: state.ui,
    notes: state.notes,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
