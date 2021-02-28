export const setUsers = (state, users) => {
    state.users = [...users]
}

export const pushUser = (state, user) => {
    state.users.push({ ...user })
}

export const updateUser = (state, user) => {
    let index = state.users.findIndex(oldUser => oldUser.id == user.id)
    state.users.splice(index, 1, user)
}