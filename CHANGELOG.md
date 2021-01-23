# Changelog

## v0.6.0 UNRELEASED

- Skip `false` values before passing style objects to Emotion. Allow `false` as style property value in TS types. Issue #1297, PR #1460.

# v0.6.0-alpha.6 2021-01-22

- **BREAKING**: Default `useColorSchemeMediaQuery` to `true`. Issue #624, PR #1373

  **How to migrate?** Add `useColorSchemeMediaQuery: false` to your theme if you don't have this property.
  [Read more in the docs.](https://dev.theme-ui.com/color-modes/#responding-to-the-prefers-color-scheme-media-query)

- Option for `gatsby-plugin-theme-ui` to disable body script (`injectColorFlashScript`, defaulting to `true`). Issue #1369, PR #1370
- Bump versions `@mdx-js/mdx` and `@mdx-js/react` to `^1.6.22`, gatsby-plugin-mdx to `^1.6.0`. PR #1351
- Fix: "as" prop on Themed.X components now properly opts out of typechecking
  - TypeScript users, don't use `ComponentProps<typeof Themed['div']>`, import `ThemedComponent<'div'>` instead.
- `@theme-ui/prism`: Support multiple highlight wrappers in a single code block. PR #1393

## v0.6.0-alpha.5 2021-01-22

- Support a default key for object in scales. PR #951

  Given the theme

  ```
  const theme = {
    colors: {
      primary: {
        __default: '#00f",
        light: '#33f',
      }
    }
  }
  ```

  `color: 'primary'` resolves to `color: '#00f'`.

## v0.6.0-alpha.4

- Extract objects with nested variant props. Issue #1357
- Add ability for MDX styling, and fix mdx table align styles. Issue #654
- Remove recursive default values from CSS custom properties. PR #1327
- Render extra Embed props onto `iframe` tag instead of wrapping `div`. Issue #966, PR #1122

## v0.6.0-alpha.2

- Remove recursive default values from CSS custom properties. PR #1327

## v0.6.0-alpha.1

- Switches from lodash.kebabCase to alternative package ([param-case](/blakeembrey/change-case/tree/master/packages/param-case)) per [official Lodash documentation](https://lodash.com/per-method-packages). PR #1304
- Rebuilds Prism preset with latest upstream theme changes. PR #1304
- Fix: Preserve order of variant expansion props. PR #1326
  _(bug introduced in 0.5.0-alpha.1)_

## v0.6.0-alpha.0

- **BREAKING**: Rename `Styled` component to `Themed`. PR #1323
- **BREAKING**: Make Text component use `span` instead of `div`
- **breaking TypeScript**: Renamed and removed types. PR #1308
  - `SxProps` to `SxProp`.
  - `SxStyleProp`, an alias for `ThemeUIStyleObject` removed. Use `ThemeUIStyleObject` instead.
- Fix: Add `sx` props types to all props accepting `className`. PR #1308
- Fix WithPoorAsProp to work with ComponentProps utility type. PR #1308

## v0.5.0-alpha.2 2020-11-30

- Add Paragraph component. PR #1298

## v0.5.0-alpha.1 2020-11-26

- Bump React peerDependency to `"^16.14.0 || ^17.0.0"`.
- Support automatic JSX runtime. Issue #1160, PR #1237
- Bump React peerDependency to `"^16.14.0 || ^17.0.0"`.
- Apply variant styles _before_ responsive styles. Issues #1030, and #720, PR #1273

## v0.5.0-alpha.0 2020-11-20

- **BREAKING**: Upgrade to Emotion 11, and `csstype` 3. PR #1261
  - We are now depending on `@emotion/react@11` instead of `@emotion/core@10`
  - `sx` prop types are still global, and we opt in for Emotion `css` prop types (This will change in the future.)
  - Refer to [Emotion 11 release notes](https://emotion.sh/docs/emotion-11) for more information.

## v0.4.0-rc.14 2020-11-20

### `@theme-ui/color-modes`

- Fix color CSS Custom Properties recursive reference

## v0.4.0-rc.13 2020-11-20

### `@theme-ui/css`

- Add transitions scale. Issue #1079, PR #1272

## v0.4.0-rc.12 2020-11-18

### `theme-ui`

- Use correct version of @theme-ui/components in theme-ui package.
  (Locked dependencies on other Theme UI packages)

## v0.4.0-rc.11 2020-11-18

### docs

- Add documentation on CSS keyframes #1269

### `@theme-ui/color-modes`

- Add configuration option for printing color mode. PR #1267, issue #1144.

  ```
  {
    initialColorModeName: "dark",
    printColorModeName: "light"
  }
  ```

### `@theme-ui/components`

- Add `arrow` prop to Select to allow passing custom arrow icon. Issues #1177 #1151, PR #1232
- Fix: Field component uses `id` if passed. PR #1252
- Fix circular import in Switch.js

## v0.4.0-rc.9 2020-11-17

### `@theme-ui/components`

- Fix Button not respecting hidden prop. Issue #1254
- Add `minWidth: min-content` on Checkbox and Radio. PR #1256

## v0.4.0-rc.8 2020-11-09

### `@theme-ui/color`

- Fix support for rgb/hsl color values

### `@theme-ui/components`

- Add Switch component #1035

  ```tsx
  <Label>
    <Switch /> Enable email alerts?
  </Label>
  ```

- Pass `size` prop down to IconButton in Close component. PR #1242

  ```tsx
  <Close size={24} />
  ```

### examples

- Convert Gatsby example to TypeScript and stop using removed components. Issue #1227, PR #1229

## v0.4.0-rc.7 2020-11-08

### `@theme-ui/core`

- Make ThemeProvider `theme` prop required

### `@theme-ui/editor`

- Removes overriding property on editor combobox #687

### `@theme-ui/preset-sketchy`

- Add `@theme-ui/preset-sketchy`

### `@theme-ui/prism`

- Add support for highlighting lines #895

### `@theme-ui/sidenav`

- `@theme-ui/sidenav`: move React to peerDependencies #978

### `@theme-ui/style-guide`

- Pass `size` prop to ColorRow component #941

### `@theme-ui/color-modes`

- Accept SetStateAction and generic parameter #1174

### docs

- Fix broken base-preset link on `theming` page

## v0.3.2 2020-11-08

- Fix peer dependencies. Issue #725, PR #836

### `@theme-ui/css`

- Add theme colors support to columnRuleColor and caretColor #1085
- Support scrollPadding variations in sx props. Issue #1214

### `@theme-ui/core`

- Support Webpack 5. (Uses default export from package.json instead of named export) #1141

### `@theme-ui/components`

- Add `primary` as default variant for `Badge` component #1109
- Add `primary` as default variant for `Alert` component #1102
- Add `theme.text.default` variant for `Text` component #870

### docs

- Fix example logo on Avatar & Image component docs #1233
- Fix theme editor output in docs #1182

## v0.3.1 2020-01-32

- Adjusts media query sort logic #600
- Fixes link to Gatsby Plugin page in `getting-started` page. Issue #602, PR #603

## v0.3.0 2020-01-22

- Split theme-ui package into `@theme-ui/core`, `@theme-ui/mdx`, and `@theme-ui/color-modes`
- Removes `context.components` (still available through MDX context)
- Adds separate `ColorModeProvider` component
- Removes support for `theme.initialColorMode` - use `initialColorModeName` instead
- Removes layout components (`Layout`, `Header`, `Main`, `Footer`) - use `Box` and `Flex` instead
- Updates CSS custom properties implementation for color modes
- When using `useColorSchemeMediaQuery` flag, it will initialize the mode to `light` when `@media (prefers-color-scheme: light)` is enabled
- Global color mode styles are automatically added to the body without needing to render the `ColorMode` component
- Adds global typographic styles, set `useBodyStyles: false` to disable
- Removes `ThemeStateProvider`
- Fix issue where `<del>` tag was incorrectly specified as `delete`
- The `@theme-ui/editor` API has changed significantly. See the README.md for more information.
- `@theme-ui/components`: on Grid component, allow custom `columns` definitions via strings #541
- `@theme-ui/gatsby-theme-style-guide`: add docs on shadowing #558
- Adds `@theme-ui/preset-polaris` #567
- Adjusts default font stack in presets #568

## v0.2.53 2019-12-19

- `@theme-ui/color`: add `transparentize` function #370
- `@theme-ui/style-guide`: move context dependencies to peer dependencies #521

## v0.2.52 2019-12-16

- Fix for issues when `localStorage` is not available #514
- `@theme-ui/match-media`: add option for default index in hook #460
- `@theme-ui/editor`: Update Reakit #517

## v0.2.51 2019-12-03

- `@theme-ui/editor`: fix color picker #498

## v0.2.50 2019-12-02

- `@theme-ui/components`: fix NavLink base styles #497

## v0.2.49 2019-11-15

- `@theme-ui/components`: add more components #458
- `@theme-ui/color`: add `alpha` utility #441
- `@theme-ui/match-media`: Add default breakpoint index argument for SSR

## v0.2.48 2019-11-07

- `@theme-ui/editor` add components for editing `sx` styles

## v0.2.47 2019-10-29

- `@theme-ui/editor` add `StylesForm` component

## v0.2.46 2019-10-28

- Fix environment check #415
- Update dependencies

## v0.2.45 2019-10-18

- Add `@theme-ui/match-media` package #375
- Add `@theme-ui/components` package #411

## v0.2.44 2019-10-09

- Fix prop forwarding in styled HOC #377
- Add missing key #406
- Add support for functional themes #400

## v0.2.43 2019-09-17

- Fix Reakit for ColorPicker test #357
- Simplify color mode API and disable `prefers-color-scheme` media query behavior by default #246
- Add BaseStyles component #369

## v0.2.42 2019-09-11

- Updated UI in chrome extension
- Fix typo in tailwind preset #346
- Fix state bug in chrome extension
- Move React to peer dependencies

## v0.2.41 2019-09-05

- Updated `@theme-ui/editor` package
- New [Customize page](https://theme-ui.com/customize)

## v0.2.40 2019-09-03

- Pass outer context through RootProvider #340
- Update dependencies

## v0.2.38 2019-08-29

- Added new `ColorPicker` component to `@theme-ui/editor` #327
- Added warning for conflicting versions of Emotion #297
- Added color utility package #331

## v0.2.37 2019-08-26

- Update dependencies

## v0.2.36 2019-08-22

- Added `gatsby-theme-ui-blog` package #311
- Added `gatsby-theme-code-recipe` package #313
- Updated styles in `gatsby-theme-style-guide` #315

## v0.2.35 2019-08-15

- Adds `gatsby-theme-style-guide` package #301
- Fix for `jsx` create element function #302

## v0.2.34 2019-08-15

- `gatsby-plugin-theme-ui` remove JSX syntax from gatsby-ssr in Gatsby plugin #299
- `@theme-ui/typography` fix for CSS font-family keywords #285
- `@theme-ui/preset-tailwind` add button and input variants #291

## v0.2.33 2019-08-12

- Add support for FOUC fix in Next.js #277
- Update dependencies

## v0.2.32 2019-08-08

- Add accordion sidenav #279

## v0.2.31 2019-08-07

- Maintain raw color values in Theme UI context when `useCustomProperties` is enabled #274

## v0.2.30 2019-08-06

- Updates for tailwind preset #272

## v0.2.29 2019-08-05

- Update dependencies

## v0.2.28 2019-08-03

- Add tosh preset #264

## v0.2.27 2019-08-03

- Bad lerna publish

## v0.2.26 2019-08-02

- Fix for CSS custom properties when using nested color objects #259
- Add warning when `initialColorMode` matches a color mode name #245
- Fix for forwarding refs #261
- Fix peer dependency version #263

## v0.2.25 2019-07-31

- Add `@theme-ui/custom-properties` package #235

## v0.2.24 2019-07-29

- Adds preset packages #210

## v0.2.23 2019-07-29

- Add base colors to prism presets #249
- Add key to element in gatsby-plugin-theme-ui #248
- Add metadata to packages #244
- Update docs

## v0.2.22 2019-07-29

- Update dependencies

## v0.2.21 2019-07-26

- Add presets to `@theme-ui/prism` #231
- Fix array merging #230

## v0.2.20 2019-07-26

- Fix for color mode in context #226

## v0.2.19 2019-07-24

- Fix for unsupported Prism languages #218
- Update dependencies

## v0.2.18 2019-07-23

- Update docs
- Update dependencies

## v0.2.16 2019-07-22

- Forward all props to functional components #197

## v0.2.15 2019-07-22

- Update dependencies

## v0.2.14 2019-07-15

- Only pass `css` prop through when needed in `jsx` #182

## v0.2.13 2019-07-11

## v0.2.12 2019-07-11

- Fix bad publish

## v0.2.11 2019-07-11

- Adds Chrome extension package #136

## v0.2.10 2019-07-08

- Fix keys in tailwind preset #171

## v0.2.9 2019-07-08

- Add optional support for CSS custom properties #166

## v0.2.8 2019-07-06

- `@theme-ui/sidenav` initial publish
- `@theme-ui/prism` add `display: inline-block` to keep empty lines

## v0.2.7 2019-07-05

- `@theme-ui/prism` pass outer className to element #163

## v0.2.6 2019-07-04

- Adjust color mode initialization from media query #157

## v0.2.5 2019-07-03

- Fix publish

## v0.2.4 2019-07-03

- Adjust microbundle setup for @theme-ui/prism

## v0.2.3 2019-07-02

- Add @theme-ui/prism package

## v0.2.2 2019-07-02

- Add `key` prop to element in gatsby-plugin-theme-ui #145
- Update docs

## v0.2.1 2019-06-30

- Rename `gatsby-plugin-theme-ui` #137
- Update docs

## v0.2.0 2019-06-24

- Replaced `lodash.merge` with `deepmerge`
- Updated to use smaller Styled System v5 packages
- Removed layout and flexbox style props from `Box` and layout components
- Renamed `css` prop in experimental custom pragma to `sx` to avoid collisions with Emotion and other libraries
- Refactored `ThemeProvider`
- Removed `toStyle` API from Typography.js package
- Renamed Typography.js package to `@theme-ui/typography`
- Removed `@emotion/styled` dependency - layout components are no longer created with `styled` so passing non-HTML attributes to the component will result in React rendering those props to the DOM
- Removed legacy `ColorModeProvider` and `ComponentProvider` exports
