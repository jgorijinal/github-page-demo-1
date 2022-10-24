class Storage {
  setItem(key:string, value:any) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key:string) {
    let item = window.localStorage.getItem(key)
    if (item) {
      item = JSON.parse(item)
    }
    return item
  }

  removeItem(key:string) {
    window.localStorage.removeItem(key)
  }

  clear() {
    window.localStorage.clear()
  }
}

const storage = new Storage()
export default storage