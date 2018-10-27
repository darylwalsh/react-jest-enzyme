import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions'

describe('guessWord action dispatcher', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'

  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactor(initialState)
    })
    test('updates state correctly for incorrect guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for correct guess', () => {})

    store.dispatch(guessWord())
    const newState = store.getState()
    const expectedState = {
      ...initialState,
      success: false,
      guessedWords: [
        {
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }
      ]
    }
    expect(newState).toEqual(expectedState)
  })
  describe('some guessed words', () => {
    const guesseWords = [{ guessedWord: 'agile', letterMatchCount: 1 }]
    const initialState = { guessedWords, secretWord }
    let store
    beforeEach(() => {
      store = storeFactor(initialState)
    })
    test('updates state correctly for incorrect guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for correct guess', () => {
      store.dispatch(guessWord(secretWord))
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 }
        ]
      }
      expect(newState).toEqual(expectedState)
    })
  })
})
