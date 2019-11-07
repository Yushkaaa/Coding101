// Helpers, libs
import { action, extendObservable } from '../../utils/mobx'
import regeneratorRuntime from '../../utils/reg'

// Services
import TestS from '../../services/test'

export default new class TestM {
  constructor() {
    extendObservable(this, {})
  }

  clearAll = action(() => {
    this.newTest = []
  })

  getTest = action(async ({ param1, param2 = false }) => {
    const newTest = await TestS.fetchTest({ param1, param2 })

    this.newTest = newTest
    return newTest
  })
}()
