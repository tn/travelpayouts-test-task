import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Nav from './Nav'

configure({ adapter: new Adapter() })

describe('Nav', () => {
  it('should be rendered', () => {
    const wrapper = renderer.create(<Nav />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('should have active link', () => {
    const wrapper = shallow(<Nav />)

    expect(wrapper.find('.nav__link--active').exists()).toBeTruthy()
  })
})
