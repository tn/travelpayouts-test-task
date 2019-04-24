import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Sidebar from './Sidebar'

configure({ adapter: new Adapter() })

describe('Sidebar', () => {
  it('should be rendered', () => {
    const wrapper = renderer.create(<Sidebar />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
