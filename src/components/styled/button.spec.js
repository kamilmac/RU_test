import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

it('should not throw an error when called', () => {
    <Button />
})

it('renders button', () => {
    const wrapper = shallow(<Button
        fontSize={20}
        color="black"
        bgColor="white"
        height={20}
        width={20}
    />)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Button.displayName).toBe('styled.button')
})
