import React from 'react'
import { shallow } from 'enzyme'
import Fab from './FloatingActionButton'

it('renders Fab', () => {
    const wrapper = shallow(<Fab
        active={true}
        onActivate={() => {}}
        onDeactivate={() => {}}
    />)
    expect(wrapper).toMatchSnapshot()
})