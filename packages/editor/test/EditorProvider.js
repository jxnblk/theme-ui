import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup, act } from '@testing-library/react'
import { jsx, ThemeProvider, useThemeUI } from 'theme-ui'
import { matchers } from 'jest-emotion'
import { EditorProvider } from '../src'

afterEach(cleanup)
expect.extend(matchers)

const renderJSON = el => renderer.create(el).toJSON()

const theme = {
  useCustomProperties: false,
  colors: {
    text: 'black',
    background: 'white',
  },
  fonts: {
    body: 'system-ui, sans-serif',
  },
}

test('renders', () => {
  const json = renderJSON(
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <h1>Beep</h1>
      </EditorProvider>
    </ThemeProvider>
  )
  expect(json).toMatchSnapshot()
})

test('adds setTheme method to context', () => {
  let context
  const GetContext = () => {
    context = useThemeUI()
    return false
  }
  const tree = render(
    <ThemeProvider theme={theme}>
      <EditorProvider>
        <GetContext />
      </EditorProvider>
    </ThemeProvider>
  )
  expect(typeof context.setTheme).toBe('function')
})

test('setTheme updates theme context', () => {
  let context
  const GetContext = () => {
    context = useThemeUI()
    return false
  }
  act(() => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <EditorProvider>
          <GetContext />
        </EditorProvider>
      </ThemeProvider>
    )
    context.setTheme({
      colors: {
        text: 'tomato',
      }
    })
  })
  expect(context.theme.colors.text).toBe('tomato')
  expect(context.theme.colors.background).toBe('white')
})

test.todo('works with custom properties')
