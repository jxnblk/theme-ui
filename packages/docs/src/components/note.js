/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <div
    {...props}
    css={{
      fontWeight: 'bold',
      fontSize: 1,
      p: 3,
      bg: 'highlight',
    }}
  />
)
