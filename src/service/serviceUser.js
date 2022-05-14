import axiosInstance from "../routes/axios";

export const createUser = (user, pet) => {
  axiosInstance.post('cadastro-responsavel', user).then((res) => {
    console.log(res)
    createPet(pet)
  }).catch((err) => { console.log(err) })
}

export const createPet = (pet) => {
  axiosInstance.post('cadastro-pet', pet).then((res) => {
    console.log(res)
  }).catch((err) => { console.log(err) })
}


