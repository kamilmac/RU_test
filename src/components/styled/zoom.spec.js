import React from 'react'
import { shallow } from 'enzyme'
import Zoom from './Zoom'

it('should not throw an error when called', () => {
    <Zoom />
})

it('renders Zoom', () => {
    const wrapper = shallow(<Zoom/>)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Zoom.displayName).toBe('styled.div')
})