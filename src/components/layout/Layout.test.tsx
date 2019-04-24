import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Layout from './Layout'

configure({ adapter: new Adapter() })

describe('Layout', () => {
  it('should be rendered', () => {
    const wrapper = renderer.create(<Layout>Layout</Layout>).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
