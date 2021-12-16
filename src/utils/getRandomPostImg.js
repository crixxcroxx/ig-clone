import getRandomInt from "./getRandomInt";

export default function getRandomPostImg(width, height) {
  let rand = getRandomInt(width, height);
  let src = `https://unsplash.it/${rand}00/${rand}00`;

  return src
}