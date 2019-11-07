/**
 * @module Extensions
 */
import ExtendInit from './fundamental/extend'
import ClearStores from './fundamental/clearStores'
import TouchResponseHandlerInit from './touchResponse'
/**
 * @typedef {void} module:Extensions#PageComponentExtensionsInit
 */
const PageComponentExtensions = () => {
  ExtendInit() //                 for: Page, Component
  ClearStores() //                for: Page, Component
  TouchResponseHandlerInit() //   for: Page, Component

  return Promise.resolve()
}
export { PageComponentExtensions }
