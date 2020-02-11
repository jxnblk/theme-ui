import React from 'react'
import renderer from 'react-test-renderer'
import {
  render,
  fireEvent,
  act,
  waitForElement,
  waitForDomChange,
  cleanup
} from '@testing-library/react'
import Combobox from '../src/Combobox'

afterEach(cleanup)

test('renders', () => {
  const json = renderer.create(
    <Combobox />
  ).toJSON()
  expect(json).toMatchSnapshot()
})

test('clicking chevron button shows menu', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const button = await tree.getByRole('button')
  fireEvent.click(button)
  const options = await waitForElement(() => tree.findAllByRole('option'))
  expect(options.length).toBe(2)
})

test('clicking item updates value', async () => {
  const onChange = jest.fn()
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
      onChange={onChange}
    />
  )
  const button = await tree.getByRole('button')
  fireEvent.click(button)
  const [ option ] = await waitForElement(() => tree.findAllByRole('option'))
  fireEvent.click(option)
  expect(onChange).toHaveBeenCalledWith('beep')
})

test('down arrow moves selection down', async () => {
  const onChange = jest.fn()
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
      onChange={onChange}
    />
  )
  const button = await tree.getByRole('button')
  fireEvent.click(button)
  const input = await tree.getByLabelText('Beep')
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  fireEvent.keyDown(input, {
    key: 'Enter',
    keyCode: 13,
  })
  expect(onChange).toHaveBeenCalledWith('boop')
})

test('up arrow moves selection up', async () => {
  const onChange = jest.fn()
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
      onChange={onChange}
    />
  )
  const button = await tree.getByRole('button')
  fireEvent.click(button)
  const input = await tree.getByLabelText('Beep')
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowUp',
    keyCode: 38,
  })
  fireEvent.keyDown(input, {
    key: 'Enter',
    keyCode: 13,
  })
  expect(onChange).toHaveBeenCalledWith('beep')
})

test('escape key closes listbox', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const button = await tree.getByRole('button')
  const input = await tree.getByLabelText('Beep')
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  fireEvent.click(button)
  fireEvent.keyDown(input, {
    key: 'Escape',
    keyCode: 27,
  })
  expect(listbox.style.visibility).toBe('hidden')
})

test('down arrow key opens listbox', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const input = await tree.getByLabelText('Beep')
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
  })
  expect(listbox.style.visibility).toBe('visible')
})

test('up arrow key opens listbox', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const input = await tree.getByLabelText('Beep')
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowUp',
    keyCode: 38,
  })
  expect(listbox.style.visibility).toBe('visible')
})

test('ignores keypresses with meta key', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const input = await tree.getByLabelText('Beep')
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  fireEvent.keyDown(input, {
    key: 'ArrowDown',
    keyCode: 40,
    metaKey: true
  })
  expect(listbox.style.visibility).toBe('hidden')
})

test('ignores return key when closed', async () => {
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const input = await tree.getByLabelText('Beep')
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  fireEvent.keyDown(input, {
    key: 'Return',
    keyCode: 13,
  })
  expect(listbox.style.visibility).toBe('hidden')
})

// todo
test.skip('blur closes listbox', async () => {
  global.requestAnimationFrame = jest.fn(fn => setTimeout(fn, 1))
  const tree = render(
    <Combobox
      label='Beep'
      name='beep'
      options={[
        'beep',
        'boop',
      ]}
    />
  )
  const button = await tree.getByRole('button')
  const input = await tree.getByLabelText('Beep')
  fireEvent.click(button)
  fireEvent.blur(input, {})
  const listbox = await tree.getByRole('listbox', {
    hidden: true,
  })
  expect(global.requestAnimationFrame).toHaveBeenCalled()
  // not sure how to use testing-library here
  await waitForDomChange({ container: tree })
  expect(listbox.style.visibility).toBe('hidden')
})
