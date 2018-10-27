import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
}
/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord
    const getLetterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    })
    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS })
    }
  }
}
