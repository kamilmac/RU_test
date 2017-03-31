import React from 'react'
import { shallow } from 'enzyme'
import Rotate from './rotate'

it('should not throw an error when called', () => {
    <Rotate />
})

it('renders Rotate', () => {
    const wrapper = shallow(<Rotate/>)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Rotate.displayName).toBe('styled.div')
})