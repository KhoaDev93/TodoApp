import cookies from 'js-cookie'

export const getCookie = (name: string) => {
  return cookies.get(name)
}
export const setCookie = (name: string, value: string, expires = 1) => {
  return cookies.set(name, value, { expires })
}
export const removeCookie = (name: string) => {
  return cookies.remove(name)
}
