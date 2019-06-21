export { css } from '@styled-system/css'
export { jsx } from './jsx'
export { ThemeProvider } from './core'
export { Context, useThemeUI } from './context'
export { ColorMode, useColorMode } from './color-modes'
export { Styled } from './components'
export { Box, Flex, Layout, Header, Main, Container, Footer } from './layout'

// DEPRECATED
export {
  ThemeProvider as ColorModeProvider,
  ThemeProvider as ComponentProvider,
} from './core'
