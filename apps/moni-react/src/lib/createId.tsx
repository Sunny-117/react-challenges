let id = parseInt(window.localStorage.getItem('idMax') || '0') || 0
const createId = () => {
    id += 1
    window.localStorage.setItem('idMax', id.toString())
    return id
}

export default createId