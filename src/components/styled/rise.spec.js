import React from 'react'
import { shallow } from 'enzyme'
import Rise from './rise'

it('should not throw an error when called', () => {
    <Rise />
})

it('renders rise', () => {
    const wrapper = shallow(<Rise/>)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Rise.displayName).toBe('styled.div')
})