/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * 
 * https://stackoverflow.com/a/12646864/1777654
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export default shuffle