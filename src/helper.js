const setItem = (key, item) => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.setItem(key, item)
}

const getItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(item)
}

const removeItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.removeItem(item)
}

export const myLocalStorage = {
  getItem,
  setItem,
  removeItem
}