import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Button from './Button'

configure({ adapter: new Adapter() })

describe('Button', () => {
  it('should be rendered', () => {
    const wrapper = renderer.create(<Button>Button</Button>).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
