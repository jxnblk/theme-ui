import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  act,
} from '@testing-library/react'
import { ThemeProvider } from 'theme-ui'
import { Sx } from '../src'

afterEach(cleanup)

if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  })
}

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  colors: {
    primary: '#07c',
    secondary: '#0c7',
  },
}

const style = {
  fontFamily: 'body',
  fontSize: 4,
  fontWeight: 'bold',
  color: 'primary',
}

describe('Sx.Typography', () => {
  test('edits sx.fontFamily', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Typography
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Font Family'))
    fireEvent.change(input, {
      target: {
        value: 'Georgia',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ fontFamily: 'Georgia' })
  })

  test('edits sx.fontSize', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Typography
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Font Size'))
    fireEvent.change(input, {
      target: {
        value: '2',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ fontSize: 2 })
  })

  test('edits sx.fontWeight', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Typography
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Font Weight'))
    fireEvent.change(input, {
      target: {
        value: '500',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ fontWeight: '500' })
  })

  test('edits sx.lineHeight', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Typography
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Line Height'))
    fireEvent.change(input, {
      target: {
        value: '1.625',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ lineHeight: '1.625' })
  })

  test('renders without props', async () => {
    const tree = render(
      <Sx.Typography />
    )
    const input = await waitForElement(() => tree.findByLabelText('Line Height'))
    expect(input).toBeTruthy()
  })

  test('adds tag name to input name', async () => {
    const tree = render(
      <Sx.Typography
        tag='h1'
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Font Family'))
    expect(input.name).toBe('styles.h1.fontFamily')
  })
})

describe('Sx.Margin', () => {
  test('edits sx.ml', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Left'))
    fireEvent.change(input, {
      target: {
        value: '2',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ ml: 2 })
  })

  test('edits sx.mr', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Right'))
    fireEvent.change(input, {
      target: {
        value: '2',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ mr: 2 })
  })

  test('edits sx.mt', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Top'))
    fireEvent.change(input, {
      target: {
        value: '2',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ mt: 2 })
  })

  test('edits sx.mb', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Bottom'))
    fireEvent.change(input, {
      target: {
        value: '2',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ mb: 2 })
  })

  test('edits sx.mx with margin left input', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Left'))
    fireEvent.click(checkbox)
    fireEvent.change(input, {
      target: {
        value: '3',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ mx: 3 })
  })

  test('edits sx.mx with margin right input', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Right'))
    fireEvent.click(checkbox)
    fireEvent.change(input, {
      target: {
        value: '3',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ mx: 3 })
  })

  test('edits sx.my with margin top input', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock y-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Top'))
    fireEvent.click(checkbox)
    fireEvent.change(input, {
      target: {
        value: '3',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ my: 3 })
  })

  test('edits sx.my with margin bottom input', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock y-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Bottom'))
    fireEvent.click(checkbox)
    fireEvent.change(input, {
      target: {
        value: '5',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ my: 5 })
  })

  test('initializes with x-axis lock', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          mx: 2,
        }}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    expect(checkbox.checked).toBe(true)
  })

  test('initializes with y-axis lock', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          my: 3,
        }}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock y-axis'))
    expect(checkbox.checked).toBe(true)
  })

  test('changes mx with x-axis lock', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          mx: 2,
        }}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Right'))
    fireEvent.change(input, {
      target: {
        value: '4',
      }
    })
    expect(checkbox.checked).toBe(true)
    expect(onChange).toHaveBeenCalledWith({ mx: 4 })
  })

  test('changes my with y-axis lock', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          my: 3,
        }}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock y-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Margin Top'))
    fireEvent.change(input, {
      target: {
        value: '1',
      }
    })
    expect(checkbox.checked).toBe(true)
    expect(onChange).toHaveBeenCalledWith({ my: 1 })
  })

  test('changes sx.mx to sx.ml and sx.mr when unchecking axis lock', async () => {
    const onChange = jest.fn()
    let checkbox
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          mx: 3,
        }}
        onChange={onChange}
      />
    )
    checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledWith({ mx: undefined, mr: 3, ml: 3 })
  })

  test('changes sx.my to sx.mt and sx.mb when unchecking axis lock', async () => {
    const onChange = jest.fn()
    let checkbox
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          my: 4,
        }}
        onChange={onChange}
      />
    )
    checkbox = await waitForElement(() => tree.findByLabelText('Lock y-axis'))
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalledWith({ my: undefined, mt: 4, mb: 4 })
  })

  test('changes value to undefined with empty string', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Margin
        theme={theme}
        value={{
          ml: 2,
        }}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Left'))
    fireEvent.change(input, {
      target: {
        value: ''
      }
    })
    expect(onChange).toHaveBeenCalledWith({ ml: undefined })
  })

  test('prefixes input name with tag name', async () => {
    const tree = render(
      <Sx.Margin
        tag='h1'
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Margin Left'))
    expect(input.name).toBe('styles.h1.ml')
  })
})

describe('Sx.Padding', () => {
  test('edits sx.pl', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Padding
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const input = await waitForElement(() => tree.findByLabelText('Padding Left'))
    fireEvent.change(input, {
      target: {
        value: '4',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ pl: 4 })
  })

  test('edits sx.px', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Padding
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const checkbox = await waitForElement(() => tree.findByLabelText('Lock x-axis'))
    const input = await waitForElement(() => tree.findByLabelText('Padding Right'))
    fireEvent.click(checkbox)
    fireEvent.change(input, {
      target: {
        value: '3',
      }
    })
    expect(onChange).toHaveBeenCalledWith({ px: 3 })
  })
})

describe('Sx.Colors', () => {
  test('edits sx.color', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Colors
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    const [ button ] = await waitForElement(() => tree.findAllByRole('button'))
    fireEvent.click(button)
    // not ideal labeling - only works with hex?
    const [ swatch ] = await waitForElement(() => tree.findAllByTitle('#0c7'))
    fireEvent.click(swatch)
    expect(onChange).toHaveBeenCalledWith({ color: 'secondary' })
  })

  test('edits sx.bg', async () => {
    const onChange = jest.fn()
    const tree = render(
      <Sx.Colors
        theme={theme}
        value={style}
        onChange={onChange}
      />
    )
    // dialog is hidden with css
    const [, swatch ] = await waitForElement(() => tree.findAllByTitle('#0c7'))
    fireEvent.click(swatch)
    expect(onChange).toHaveBeenCalledWith({ bg: 'secondary' })
  })

  test('picks up colors from outer theme context', async () => {
    const tree = render(
      <ThemeProvider theme={theme}>
        <Sx.Colors
          value={style}
        />
      </ThemeProvider>
    )
    const [ button ] = await waitForElement(() => tree.findAllByRole('button'))
    fireEvent.click(button)
    const [ swatch ] = await waitForElement(() => tree.findAllByTitle('#0c7'))
    expect(swatch).toBeTruthy()
  })

  test('renders without value', async () => {
    const tree = render(
      <Sx.Colors />
    )
    const [ button ] = await waitForElement(() => tree.findAllByRole('button'))
    expect(button).toBeTruthy()
  })
})

