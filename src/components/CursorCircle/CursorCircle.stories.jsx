/**
 * CursorCircle.jsx
 */
import React from 'react'
// import generateProps from 'react-generate-props'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// Mocks/Utils
// import { StorybookRouter } from '@/mocks/next/router'

// Component(s)
import CursorCircle from './CursorCircle'

// Generate some stub properties
// generateProps.init()
// const props = generateProps(CursorCircle);

// Decorators
const CenterDecorator = (storyFn) => (
  <div className="flex h-screen justify-center items-center">{storyFn()}</div>
)

// const RouterDecorator = (storyFn) => (
//   <StorybookRouter>{storyFn()}</StorybookRouter>
// )

storiesOf('CursorCircle', module)
  // .addDecorator(RouterDecorator)
  .addDecorator(CenterDecorator)
  .add('with required props', () => <CursorCircle />)
