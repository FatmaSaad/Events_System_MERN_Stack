import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:2000/api',
})

export const insertSpeaker = payload => api.post(`/speaker`, payload)
export const getAllSpeakers = () => api.get(`/speakers`)
export const updateSpeakerById = (id, payload) => api.put(`/speaker/${id}`, payload)
export const deleteSpeakerById = id => api.delete(`/speaker/${id}`)
export const getSpeakerById = id => api.get(`/speaker/${id}`)


const apis = {
    insertSpeaker,
    getAllSpeakers,
    updateSpeakerById,
    deleteSpeakerById,
    getSpeakerById,
}

export default apis