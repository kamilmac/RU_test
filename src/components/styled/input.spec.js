import React from 'react'
import { shallow } from 'enzyme'
import Input from './input'

it('should not throw an error when called', () => {
    <Input />
})

it('renders input', () => {
    const wrapper = shallow(<Input
        height={20}
    />)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Input.displayName).toBe('styled.input')
})