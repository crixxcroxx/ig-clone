import getRandomInt from "./getRandomInt";

export default function shapeData(obj) {
  let finalArray = []
  let userId = ""

  if(obj) {
    obj.data.map((item, idx) => {
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
  }

  return { finalArray, userId }
}