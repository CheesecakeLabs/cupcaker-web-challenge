import React from 'react'

import { shallow } from 'enzyme'
import each from 'jest-each'

import { render, screen } from 'app/core/tests/utils'

import { Heading, TypographyHeadingLevel } from './index'

test('Display Heading text', () => {
  render(<Heading text="Hello World" level={TypographyHeadingLevel.h1} />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})

each([
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['h5', 'h5'],
]).test('Should render %s when pass %s', (expected, param) => {
  const wrapper = shallow(<Heading text="Hello World" level={param} />)
  const element = wrapper.find(expected)
  expect(element.length).toBe(1)
})
