import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Amount from './Amount'

configure({ adapter: new Adapter() })

describe('Amount', () => {
  const props = {
    currency: 'rub',
    amount: 100000
  }

  it('should be rendered', () => {
    const wrapper = renderer.create(<Amount {...props} />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })

  it('should format amount', () => {
    const wrapper = shallow(<Amount {...props} />)

    expect(wrapper.text()).toEqual('RUB 100,000.00')
  })
})
