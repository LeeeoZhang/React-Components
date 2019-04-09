import * as React from 'react'
import If from '../If'
import renderer from 'react-test-renderer'

test('测试一下', () => {
  const component = renderer.create(
    <If isShow={false}>
      xxx
    </If>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
