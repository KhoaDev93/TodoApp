import axiosClient from './axiosClient'

class TodoApi {
  getTodoList = () => {
    const url = `/getGuildList/`
    return axiosClient.get(url)
  }

  // postNewTodo = (body) => {
  //   const url = `/updateGuild`
  //   return axiosClient.post(url, body)
  // }

  removeTodo = () => {
    const url = `/removeTodo`
    return axiosClient.post(url)
  }

  UpdateTodo = () => {
    const url = `/updateTodo`
    return axiosClient.post(url)
  }
}

const todoApi = new TodoApi()
export default todoApi
