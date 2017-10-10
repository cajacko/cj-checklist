/* eslint no-console: 0 */

console.log('File running');

/**
 * Example export function
 *
 * @param  {String} text Text to log
 * @return {void}      No return value
 */
export default function (text) {
  if (text) {
    console.log(text);
  } else {
    console.log('No text to log');
  }
}
