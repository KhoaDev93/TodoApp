import axiosClient from './axiosClient'

class LoginApi {
  login = (data: any) => {
    const url = `/login`
    return axiosClient.post(url, data)
  }
}

const loginApi = new LoginApi()
export default loginApi
