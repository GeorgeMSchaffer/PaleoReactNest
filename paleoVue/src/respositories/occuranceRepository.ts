import {createStore} from 'vuex'
import {Interval, Occurance} from "@/models/types";
import axios from '@/environments/clients/AxiosClient';

export const occuranceRepository = createStore({
    state: {
        intervals: [],
        occurances: [],
    },
    mutations: {
        ADD_NEW_INTERVAL(state: { intervals: Interval[]; }, interval: Interval) {
            state.intervals.push(interval)
        },
        DELETE_INTERVAL(state: { intervals: Interval[]; }, intervalId: number) {
            state.intervals = state.intervals.filter(p => p.id !== intervalId)
        },
        ADD_NEW_OCCURANCE(state: { occurances: Occurance[]; }, occurance: Occurance) {
            state.occurances.push(occurance)
        },
        DELETE_OCCURANCE(state: { occurances: Occurance[]; }, occuranceId: number) {
            state.occurances = state.occurances.filter(o => o.id !== occuranceId)
        },
    },
    actions: {
        async fetchOccurances(action: { commit: any }) {
            console.log('fetching occurances - action', action)
            const occurances = await axios.get('/occurances')
            action.commit('ADD_NEW_OCCURANCE', occurances)
        },
        async getOccurance({ commit }: { commit: any }, occuranceId: number) {
            const occurance = await axios.get(`/occurances/${occuranceId}`)
            commit('ADD_NEW_OCCURANCE', occurance)
        },
        async deleteOccurance({ commit }: { commit: any }, occuranceId: number) {
            await axios.delete(`/occurances/${occuranceId}`)
            commit('DELETE_OCCURANCE', occuranceId)
        },
        async createOccurance({ commit }: { commit: any }, occurance: Occurance) {
            const newOccurance = await axios.post('/occurances', occurance)
            commit('ADD_NEW_OCCURANCE', newOccurance)
        },
        async updateOccurance(action: { commit: any }, occurance: Occurance) {
            const updatedOccurance = await axios.put(`/occurances/${occurance.id}`, occurance)
            action.commit('ADD_NEW_OCCURANCE', updatedOccurance)
        }
    }
})