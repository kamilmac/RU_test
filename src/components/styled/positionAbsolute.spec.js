import React from 'react'
import { shallow } from 'enzyme'
import PositionAbsolute from './positionAbsolute'

it('should not throw an error when called', () => {
    <PositionAbsolute />
})

it('renders positionAbsolute', () => {
    const wrapper = shallow(<PositionAbsolute/>)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(PositionAbsolute.displayName).toBe('styled.div')
})