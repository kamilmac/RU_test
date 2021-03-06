import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import StyledLayout from './components/styled/Layout'
import NoteEdit from './components/NoteEdit'
import NoteList from './components/NoteList'
import Fab from './components/FloatingActionButton'
import * as actions from './actions/all'
import DelayRender from './components/DelayRender'

const App = ({actions, ui, notes}) =>
    <StyledLayout>
        <DelayRender delay={2000} props={{notes, bgColor: "hsl(0, 0%, 95%)"}} component={<NoteList/>} />
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
