import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:2000/api',
})

export const insertSpeaker = payload => api.post(`/speaker`, payload)
export const getAllSpeakers = () => api.get(`/speakers`)
export const updateSpeakerById = (id, payload) => api.put(`/speaker/${id}`, payload)
export const deleteSpeakerById = id => api.delete(`/speaker/${id}`)
export const getSpeakerById = id => api.get(`/speaker/${id}`)

export const insertEvent = payload => api.post(`/event`, payload)
export const getAllEvents = () => api.get(`/events`)
export const updateEventById = (id, payload) => api.put(`/event/${id}`, payload)
export const deleteEventById = id => api.delete(`/event/${id}`)
export const getEventById = id => api.get(`/event/${id}`)


const apis = {
    insertSpeaker,
    getAllSpeakers,
    updateSpeakerById,
    deleteSpeakerById,
    getSpeakerById,

    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,
}

export default apis