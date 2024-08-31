<script setup lang="ts">
import { defineComponent } from 'vue'
import {IntervalRepository} from '../../repositories/IntervalRepository'
//import {Interval} from '../../shared/types';

export default {
  data() {
    return {
      intervals: []
    }
  },
  setup(props,ctx){
    console.log('Setup props',props)
  },
  computed: {
    // getIntervals() {
    //   return IntervalRepository.getIntervals()
    // }
  },
  // emits: {
  //   updateInterval(payload(interval)){
  //     IntervalRepository.updateInterval(payload)
  //   },
  //   deleteIntevals(payload(interval)){
  //     IntervalRepository.deleteInterval(payload)
  //   }
  // }
  methods: {
    getIntervals() {
      console.log('getIntervals')
      this.intervals = IntervalRepository.getIntervals()
    }
  }
}
</script>

<template>
  <!-- type checking and auto-completion enabled -->
<h2>Intervals List Component{{ intervals.length }}</h2>
</template>
