import axios from 'axios'

//({rootstate},params)
export const getRandomPhotoUser = () => {
    return axios.get('https://randomuser.me/api/')
}

export const getUserByID = ({ getters }, id) => {
    return getters.users.find(user => user.id == id)
}
