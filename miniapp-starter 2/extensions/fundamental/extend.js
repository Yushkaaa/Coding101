/* eslint-disable no-continue */
/* eslint-disable func-names */
const ExtendInit = () => {
  function pageExtensions() {
    const pageSrc = Page
    const pageMutators = []

    Page = function (obj) {
      let pageObj = obj
      for (const mutator of pageMutators) {
        const mutatedObj = mutator(pageObj || {})
        if (typeof mutatedObj === 'undefined') continue
        pageObj = mutatedObj
      }
      return pageSrc.call(this, pageObj)
    }

    Page.Extend = (name, pageObjMutator) => {
      if (Page.__extensions && Page.__extensions[name]) return
      Page.__extensions = Page.__extensions || []
      Page.__extensions[name] = true
      pageMutators.push(pageObjMutator)
    }
  }

  function componentExtensions() {
    const componentSrc = Component
    const componentMutators = []

    Component = function (obj) {
      let componentObj = obj
      for (const mutator of componentMutators) {
        const mutatedObj = mutator(componentObj || {})
        if (typeof mutatedObj === 'undefined') continue
        componentObj = mutatedObj
      }
      return componentSrc.call(this, componentObj)
    }

    Component.Extend = (name, componentObjMutator) => {
      if (Component.__extensions && Component.__extensions[name]) return
      Component.__extensions = Component.__extensions || []
      Component.__extensions[name] = true
      componentMutators.push(componentObjMutator)
    }
  }

  pageExtensions()
  componentExtensions()
}
export default ExtendInit
