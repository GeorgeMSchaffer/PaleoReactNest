import {createStore} from 'vuex'
import {Interval,Occurance} from "@/models/types";
import axios from '@/environments/clients/AxiosClient';
export const repository = createStore({
    state: {
        intervals: [],
        occurances: [],
    },
    mutations: {
        ADD_NEW_INTERVAL(state, interval: Interval) {
            // mutate state
            state.intervals.push(interval)
        },
        DELETE_INTERVAL(state, intervalId: number) {
            // mutate state
            state.intervals = state.intervals.filter(p => p.id !== intervalId)
        },
        ADD_NEW_OCCURANCE(state, occurance) {
            // mutate state
            state.occurances.push(occurance)
        },
        DELETE_OCCURANCE(state, occuranceId) {
            // mutate state
            state.occurances = state.occurances.filter(o => o.id !== occuranceId)
        },
    },
    actions: {
        async fetchIntervals({ commit }) {
            const intervals = await axios.get('/intervals')
            commit('ADD_NEW_INTERVAL', intervals)
        },
        async fetchIterval({ commit }, intervalId) {
            const interval = await axios.get(`/intervals/${intervalId}`)
            commit('ADD_NEW_INTERVAL', interval);
        },
        async deleteInterval({ commit }, intervalId) {
            await axios.delete(`/intervals/${intervalId}`)
            commit('DELETE_INTERVAL', intervalId)
        },
        async createInterval({ commit }, interval) {
            const newInterval = await axios.post('/intervals', interval)
            commit('ADD_NEW_INTERVAL', newInterval)
        },
        async updateInterval({ commit }, interval) {
            const updatedInterval = await axios.put(`/intervals/${interval.id}`, interval)
            commit('ADD_NEW_INTERVAL', updatedInterval)
        },
        async fetchOccurances({ commit }) {
            const occurances = await axios.get('/occurances')
            commit('ADD_NEW_OCCURANCE', occurances)
        }
        async getOccurance({ commit }, occuranceId) {
            const occurance = await axios.get(`/occurances/${occuranceId}`)
            commit('ADD_NEW_OCCURANCE', occurance)
        },
        async deleteOccurance({ commit }, occuranceId) {
            await axios.delete(`/occurances/${occuranceId}`)
            commit('DELETE_OCCURANCE', occuranceId)
        },
        async createOccurance({ commit }, occurance) {
            const newOccurance = await axios.post('/occurances', occurance)
            commit('ADD_NEW_OCCURANCE', newOccurance)
        },
        async updateOccurance({ commit }, occurance) {
            const updatedOccurance = await axios.put(`/occurances/${occurance.id}`, occurance)
            commit('ADD_NEW_OCCURANCE', updatedOccurance)
        }
    }
})