import React from 'react'
import { shallow } from 'enzyme'
import NoteEdit from './noteEdit'

it('renders NoteList', () => {
    const props = {
        notes: [
            {
                text: 'test'
            },
            {
                text: 'test1'
            },
        ],
        active: false,
        onNewNote: () => {},
    }
  
    const wrapper = shallow(<NoteEdit {...props} />)
    expect(wrapper.children().length).toEqual(0)
    wrapper.setProps({ active: true });
    expect(wrapper.children().length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
})