import axiosInstance from "../routes/axios";

export const createAgendamento = (data) => {
  axiosInstance.post('nova-consulta', data).then((res) => {
    console.log(res)
  }).catch((err) => { console.log(err) })
}

export const listarAgenda = (callback) => {
  axiosInstance.get('agendas').then((res) => {
    if (callback != null) {
      callback(res.data)
    }
  }).catch((err) => { console.log(err) })
}