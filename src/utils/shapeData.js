import getRandomInt from "./getRandomInt";

export default function shapeData(arr) {
  let finalArray = []
  let userId = ""

  if(arr) {
    arr.data.map((item, idx) => {
      if(idx === 0) {
        //assign first index to be the user
        userId = item.id
        item.hasStory = getRandomInt(0, 1)
      } else {
        item.following = getRandomInt(0, 1)
        item.follower = getRandomInt(0, 1)
        item.hasStory = getRandomInt(0, 1)
      }

      finalArray.push(item)
    });
    return { finalArray, userId }
  } else {
    return { finalArray, userId }
  }
}