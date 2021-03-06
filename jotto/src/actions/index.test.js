import moxios from 'moxios'

import { storeFactor } from '../../test/testUtils'
import { getSecretWord } from './'

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })
  afterEach(() => {
    moxios.uninstall()
  })
  test('adds response word to state', () => {
    const secretWord = 'party'
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.request.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord
      })
    })
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState()
      expect(newState.secretWord).toBe(secretWord)
    })
  })
})
