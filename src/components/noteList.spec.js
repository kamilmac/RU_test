import React from 'react'
import { shallow } from 'enzyme'
import NoteList from './NoteList'

it('renders NoteList', () => {
    const notes = [
        {
            text: 'test'
        },
        {
            text: 'test1'
        },
    ]
  
    const wrapper = shallow(<NoteList notes={notes} textColor="black" />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.contains('test')).toEqual(true)
    expect(wrapper.contains('test1')).toEqual(true)
})