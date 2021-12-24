import axios from "axios";
import create from "zustand";

import getRandomInt from "../../utils/getRandomInt";
import shapeData from "../../utils/shapeData";

const BASE_URL = "https://dummyapi.io/data/v1/"
const headers = {
  headers: {
    'app-id': '61beacbffc0a8238be761966'
  }
}

export const useStoreUsers = create(set => ({
  USERS: [],
  USER_ID: "",
  isLoading: true,
  fetchUsers: (limit) => {
    axios
      .get(`${BASE_URL}user?limit=${limit}`,headers)
      .then(res => {
        let shapedData = shapeData(res.data)
        let suggestion = []

        set({ USERS: shapedData.finalArray })
        set({ USER_ID: shapedData.userId })
        set({ isLoading: false })
      })
      .catch((err) => console.log(err))
  },
}))

export const useStorePosts = create((set, state) => ({
  POSTS: [],
  LOGGED_USER_POSTS: [],
  isLoadingP: true,
  isLoadingUP: true,
  fetchPosts: (args) => {
    let key = ""
    let loading = ""
    let url = ""

    if(typeof args === "string") {
      key = "LOGGED_USER_POSTS"
      loading = "isLoadingUP"
      url = `${BASE_URL}user/${args}/post?limit=10`
    } else {
      key = "POSTS"
      loading = "isLoadingP"
      url = `${BASE_URL}post/?limit=${args}`
    }

    axios
      .get(url, headers)
      .then(res => {
        let posts = res.data.data
        let comments = []

        //get comments on each post
        axios
          .all(posts.map(post =>
            axios.get(`${BASE_URL}post/${post.id}/comment?limit=10`, headers)
          ))
          .then(axios.spread(function(...resp) {
            resp.map((c, idx) => posts[idx].comments = resp[idx].data.data)

            set({ [key]: posts })
            set({ [loading]: false })
          }))
      })
      .catch((err) => console.log(err))
  },
}))
