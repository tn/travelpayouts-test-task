import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Logo from './Logo'

configure({ adapter: new Adapter() })

describe('Logo', () => {
  it('should be rendered', () => {
    const wrapper = renderer.create(<Logo />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
