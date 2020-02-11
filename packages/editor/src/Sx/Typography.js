/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Field } from '@theme-ui/components'
import Combobox from '../Combobox'

export const SxTypography = ({
  tag,
  value: {
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
  } = {},
  theme: {
    fonts = {},
    fontSizes = [],
    fontWeights = {},
    lineHeights = {},
  } = {},
  onChange,
}) => {
  const prefixName = name => tag ? `styles.${tag}.${name}` : name

  return (
    <Fragment>
      <Combobox
        name={prefixName('fontFamily')}
        label="Font Family"
        value={fontFamily || ''}
        onChange={fontFamily => {
          onChange({ fontFamily })
        }}
        options={['inherit', ...Object.keys(fonts)]}
      />
      <div
        sx={{
          display: 'grid',
          gridGap: 2,
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
        <Field
          name={prefixName('fontSize')}
          label="Font Size"
          value={fontSize || ''}
          type="number"
          onChange={e => {
            const fontSize = Number(e.target.value)
            onChange({ fontSize })
          }}
        />
        <Combobox
          name={prefixName('fontWeight')}
          label="Font Weight"
          value={fontWeight || ''}
          onChange={fontWeight => {
            onChange({ fontWeight })
          }}
          options={['inherit', ...Object.keys(fontWeights)]}
        />
        <Combobox
          name={prefixName('lineHeight')}
          label="Line Height"
          value={lineHeight || ''}
          onChange={lineHeight => {
            onChange({ lineHeight })
          }}
          options={['inherit', ...Object.keys(lineHeights)]}
        />
      </div>
    </Fragment>
  )
}

export default SxTypography
