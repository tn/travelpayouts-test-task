import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Search from './Search'
import Input from '../input/Input'

configure({ adapter: new Adapter() })

describe('Search', () => {
  const props = {
    onSearch: jest.fn()
  }

  it('should be rendered', () => {
    const wrapper = renderer.create(<Search {...props} />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('should trigger callback', () => {
    const wrapper = shallow(<Search {...props} />)

    wrapper.find(Input).simulate('change', { currentTarget: { value: '1' } })

    expect(props.onSearch).toHaveBeenCalledTimes(1)
  })
})
