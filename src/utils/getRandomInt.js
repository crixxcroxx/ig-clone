export default function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.max(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
