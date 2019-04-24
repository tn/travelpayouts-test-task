import * as React from 'react'
import * as Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import * as renderer from 'react-test-renderer'
import Card from './Card'

configure({ adapter: new Adapter() })

describe('Card', () => {
  const props = {
    title: 'Some title',
    desc: 'Description',
    link: 'http://example.com',
    promo: 'travelpayouts'
  }

  it('should be rendered', () => {
    const wrapper = renderer.create(<Card {...props} />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
