import {createStore} from 'vuex'
import {Interval} from "../shared/types.ts";
import axios from '../environments/clients/axiosClient.ts';

export const intervalRepository = createStore({
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
        ADD_NEW_OCCURANCE(state: { occurances: any[]; }, occurance: any) {
            state.occurances.push(occurance)
        },
        DELETE_OCCURANCE(state: { occurances: any[]; }, occuranceId: number) {
            state.occurances = state.occurances.filter(o => o.id !== occuranceId)
        },
    },
    actions: {
        async fetchIntervals({ commit }: { commit: any }) {
            const intervals = await axios.get('/intervals')
            commit('ADD_NEW_INTERVAL', intervals)
        },
        async fetchIterval({ commit }: { commit: any }, intervalId: number) {
            const interval = await axios.get(`/intervals/${intervalId}`)
            commit('ADD_NEW_INTERVAL', interval);
        },
        async deleteInterval({ commit }: { commit: any }, intervalId: number) {
            await axios.delete(`/intervals/${intervalId}`)
            commit('DELETE_INTERVAL', intervalId)
        },
        async createInterval({ commit }: { commit: any }, interval: Interval) {
            const newInterval = await axios.post('/intervals', interval)
            commit('ADD_NEW_INTERVAL', newInterval)
        },
        async updateInterval({ commit }: { commit: any }, interval: Interval) {
            const updatedInterval = await axios.put(`/intervals/${interval.id}`, interval)
            commit('ADD_NEW_INTERVAL', updatedInterval)
        },
    }
})