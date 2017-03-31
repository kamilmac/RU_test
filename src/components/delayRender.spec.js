import React from 'react'
import { shallow } from 'enzyme'
import DelayRender from './DelayRender'

it('renders DelayRender', () => {
    const props = {
        notes: [
            {
                text: 'test',
            },
        ]
    }
    const wrapper = shallow(<DelayRender props={props} delay={1000} component={<section/>} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('section').length).toEqual(1)
    expect(wrapper.find('section').props().notes).toEqual(props.notes)
})