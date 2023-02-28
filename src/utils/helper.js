export const saveDataOnSession = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getDataOnSession = (key) => {
  return sessionStorage.getItem(key)
}

export const removeDataOnSession = (key) => {
  return sessionStorage.removeItem(key)
}

export const saveDataOnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getDataOnLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const removeDataOnLocalStorage = (key) => {
  return localStorage.removeItem(key)
}
