import {render} from '@testing-library/react'
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'
import AppProviders from './providers/AppProviders'

// const AllTheProviders = ({children}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }

const customRender = (ui, options) =>
  render(ui, {wrapper: AppProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}