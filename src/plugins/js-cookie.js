import Cookies from 'js-cookie'

const TOKEN = 'token'
const USER_TYPE = 'userType'

export function getToken() {
  return Cookies.get(TOKEN)
}

export function setToken(token) {
  return Cookies.set(TOKEN,token)
}

export function removeToken() {
  return Cookies.remove(TOKEN)
}

export function getUserType() {
  return Cookies.get(USER_TYPE)
}

export function setUserType(type) {
  return Cookies.set(USER_TYPE,type)
}

