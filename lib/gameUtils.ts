
/**
 * Calculates current word-per-minute during the challene
 * @param {number} currentWord - Indice of the word currently being processes
 * @param {number} timeElapsed - Time since the challenge started
 * @returns {number} words per minute
 */
const calculateWPM = (currentWord: number, timeElapsed: number): number => {
  return timeElapsed > 0 ? Math.round((currentWord) / 5 / (timeElapsed / 60)) : 0
}


/**
 * Calculates accuracy as a percentage between 0 and 100, based on how many characters have been typed, compared to how many were correct on the first unique keystroke
 * @param {number} correctChars - amound of character correctly typed (only first keystroke counts)
 * @param {number} totalChars - amount of total characters typed since the timer started
 * @returns {number} value between 0 and 100
 */
const calculateAccuracy = (correctChars: number, totalChars: number): number => {
  return totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0
}


/**
 * Returns the next sentence in the string array, based on the sentence currently processed, or the first sentence of the array if current one is at the end
 * @param {number} currentIndex
 * @param {string[]} sentences - array of sentences used in the game
 * @returns {string} - a single element of the array, a sentence to use
 */
const getNextSentence = (currentIndex: number, sentences: string[]): string => {
  if (sentences[currentIndex + 1] === undefined) {
    return sentences[0]
  }
  return sentences[currentIndex + 1]
}

/**
 * Return the next index for the sentences array
 * @param currentIndex 
 * @param sentences 
 * @returns {number} next index for the function above
 */
const getNextIndex = (currentIndex: number, sentences: string[]): number => {
  return currentIndex + 1 >= sentences.length ? 0 : currentIndex + 1
}
