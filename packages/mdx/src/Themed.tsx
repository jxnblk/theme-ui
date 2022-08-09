/** @jsx jsx */
import { jsx, IntrinsicSxElements, SxProp } from '@theme-ui/core'
import { css, get, Theme } from '@theme-ui/css'
import {
  ComponentType,
  ReactNode,
  DetailedHTMLProps,
  HTMLAttributes,
  ComponentProps,
} from 'react'

type MDXProviderComponentsKnownKeys = {
  [key in keyof IntrinsicSxElements]?: ComponentType<any> | string
}
export interface MDXProviderComponents extends MDXProviderComponentsKnownKeys {
  [key: string]: ComponentType<any> | string | undefined
}
export type MdxAliases = {
  [key in keyof IntrinsicSxElements]: keyof JSX.IntrinsicElements
}

export type MdxAliasesKeys = 'inlineCode' | 'thematicBreak' | 'root'

export type ThemedProps = {
  theme: Theme
}

export interface MdxProviderProps {
  components?: MDXProviderComponents
  children: ReactNode
}

// mdx components
const tags: Array<keyof IntrinsicSxElements> = [
  'p',
  'b',
  'i',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'img',
  'pre',
  'code',
  'ol',
  'ul',
  'li',
  'blockquote',
  'hr',
  'em',
  'table',
  'tr',
  'th',
  'td',
  'em',
  'strong',
  'del',
  // mdx
  'inlineCode',
  'thematicBreak',
  // other
  'div',
  // theme-ui
  'root',
]

const aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div',
} as const

type Aliases = typeof aliases
const isAlias = (x: string): x is keyof Aliases => x in aliases

export type ThemedComponentName = keyof IntrinsicSxElements

const alias = (n: ThemedComponentName): keyof JSX.IntrinsicElements =>
  isAlias(n) ? aliases[n] : n

export const themed =
  (key: ThemedComponentName | (string & {})) => (theme: Theme) =>
    css(get(theme, `styles.${key}`))(theme)

export interface ThemedComponent<Name extends string> {
  (
    props: SxProp &
      (Name extends keyof JSX.IntrinsicElements ? ComponentProps<Name> : {})
  ): JSX.Element
  displayName: string
}

export type ThemedComponentsDict = {
  [K in keyof IntrinsicSxElements]: K extends keyof Aliases
    ? ThemedComponent<Aliases[K]>
    : K extends keyof JSX.IntrinsicElements
    ? ThemedComponent<K>
    : never
}

const createThemedComponent = <Name extends string>(
  name: Name,
  variant: ThemedComponentName
): ThemedComponent<Name> => {
  const variantStyles = themed(variant)

  const component: ThemedComponent<Name> = (props) => {
    const extraStyles: { textAlign?: 'left' | 'right' | 'center' | 'justify' } =
      {}

    if (name === 'th' || name === 'td') {
      const { align } = props as DetailedHTMLProps<
        React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
        HTMLTableHeaderCellElement
      >

      if (align !== 'char') extraStyles.textAlign = align
    }

    return jsx(name, {
      ...props,
      css: [props.css, variantStyles, extraStyles].filter(Boolean),
    })
  }

  component.displayName = `Themed(${name})`

  return component
}

interface ThemedDivProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface ThemedDiv {
  (props: ThemedDivProps): JSX.Element
}

const _Themed: ThemedDiv = createThemedComponent('div', 'div')

export const defaultMdxComponents = {} as ThemedComponentsDict

export const Themed = _Themed as ThemedDiv & ThemedComponentsDict

tags.forEach((tag) => {
  const component = createThemedComponent(alias(tag), tag)

  defaultMdxComponents[tag] = component
  Themed[tag] = component
})