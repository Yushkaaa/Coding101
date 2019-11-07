// Libs
import { action } from '../utils/mobx'
import regeneratorRuntime from '../utils/reg'
import { stringify } from '../utils/simple-query-string.min'

// Helpers
import { API } from '../API/handleApi'

/**
 * Service for Test
 */
class TestS {
  fetchTest = action(async ({ param1, param2 }) => {
    const parsedParams = stringify({ param1, param2 })
    try {
      // const { docs = {} } = await new API('GET')
      //   .URL('oas/search')
      //   .execute(parsedParams)

      return docs
    } catch (err) { console.warn('Fetching test failed:', err) }
  })
}

export default new TestS()
