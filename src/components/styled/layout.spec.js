import React from 'react'
import { shallow } from 'enzyme'
import Layout from './layout'

it('should not throw an error when called', () => {
    <Layout />
})

it('renders layout', () => {
    const wrapper = shallow(<Layout/>)
    expect(wrapper).toMatchSnapshot()
})

it('Should have the correct styled(component) displayName', () => {
    expect(Layout.displayName).toBe('styled.div')
})