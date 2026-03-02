// unit tests for now
import { calculateAccuracy, calculateWPM, getNextIndex, getNextSentence } from "@/lib/gameUtils"

test('sanity check - testing for Jest working properly', () => {
  expect(2 + 2).toBe(4)
})

// WPM
test('WPM calculations - normal values', () => {
  expect(calculateWPM(120, 60)).toBe(24)
  expect(calculateWPM(200, 30)).toBe(80)
})


// accuracy
test('accuracy calculations - values between 0 and 100', () => {
  // floats are rounded down to nearest integer, so result will always be a whole number
  expect(calculateAccuracy(80, 100)).toBe(80)
  expect(calculateAccuracy(50, 100)).toBe(50)
  expect(calculateAccuracy(43, 122)).toBe(35)
})

test('accuracy calculations - edge cases', () => {
  expect(calculateAccuracy(2000, 2000)).toBe(100) // all correct
  expect(calculateAccuracy(0, 100)).toBe(0) // all wrong
  expect(calculateAccuracy(0, 0)).toBe(0) // no inputs at all
})


// next sentence

const sentences = [
  "Ala ma kota",
  "Kot ma Alę",
  "Lubię placki",
  "Hotdogi są spoko"
]

test('next sentence array exists and is not empty', () => {
  expect(sentences).toBeInstanceOf(Array)
  expect(sentences).not.toHaveLength(0)
})

test('next sentence - crawls over the array correctly', () => {
  expect(getNextSentence(0, sentences)).toBe(sentences[1])
  expect(getNextSentence(1, sentences)).toBe(sentences[2])
  expect(getNextSentence(sentences.length + 1, sentences)).toBe(sentences[0]) // check for being at the end of the array
})

// next index
test('next index - crawls over the array correctly', () => {
  expect(getNextIndex(2, sentences)).toBe(3)
  expect(getNextIndex(3, sentences)).toBe(0) // correctly wraps back to the start when currentIndex exceeds array max length 
})
