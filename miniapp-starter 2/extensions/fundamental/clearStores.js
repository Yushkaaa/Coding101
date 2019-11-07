/* eslint-disable no-param-reassign */
import {
  eventInLocations,
  locations,
  products,
  users,
  oas,
  shares,
  amap,
  highlights,
  shelves
} from '../../modules/index'

class _Stores {
  constructor() {
    this.eventInLocations = eventInLocations
    this.locations = locations
    this.products = products
    this.users = users
    this.oas = oas
    this.shares = shares
    this.amap = amap
    this.highlights = highlights
    this.shelves = shelves
  }
}

const AllStores = new _Stores()

const allAvailbaleStores = [
  'locations',
  'users',
  'oas',
  'products',
  'shares',
  'shelves',
  'eventInLocations'
]
const doesStoreExist = store => allAvailbaleStores.includes(store)

const clearStoresFunction = stores => {
  const filteredStores = stores.filter(store => doesStoreExist(store))
  filteredStores.forEach(store => {
    wx.LOGGER(null, `Clearing store [ ${store} ]`)
    AllStores[store].clearAll()
    console.log(`Cleared STORE [ ${store} ]`)
  })
}

const ClearStores = () => {
  Page.Extend('clearStores', page => {
    page.clearStores = (stores = []) => clearStoresFunction(stores)
  })

  Component.Extend('clearStores', component => {
    component.methods = component.methods || { }
    component.methods.clearStores = (stores = []) => clearStoresFunction(stores)
  })
}

export default ClearStores
