import Typography from 'typography'
import merge from 'lodash.merge'
import cssWhat from 'css-what'

const isMedia = str => /^@/.test(str)

const parseSelectors = styles => {
  const parsed = {}
  for (const key in styles) {
    if (isMedia(key)) continue
    const selectors = key.split(',')
    selectors.forEach(selector => {
      const [parent, ...children] = cssWhat(selector)[0]
      if (parent.type === 'universal') return
      if (parent.type !== 'tag') {
        return
      }

      if (children.length) {
        const sub = selector.replace(parent.name, '&')
        parsed[parent.name] = merge({}, parsed[parent.name], {
          [sub]: styles[key],
        })
      } else {
        parsed[parent.name] = merge({}, parsed[parent.name], styles[key])
      }
    })
  }
  for (const key in parsed) {
    if (key === 'html' || key === 'body') {
      parsed.root = merge({}, parsed.root, parsed[key])
    }
  }
  return parsed
}

export const toStyles = theme => {
  const typography = new Typography({
    ...theme,
    rhythmUnit: 'px',
    includeNormalize: false,
  })
  const json = typography.toJSON()
  const styles = parseSelectors(json)

  typography.styles = styles
  return typography
}

export default toStyles
