<script setup lang="ts">
import {Interval,Occurance} from '@/shared/types';
import {IntervalRepository} from '@/shared/repositories';
  let intervals:Interval[] = []
  console.log('Initializing Intervals List setup');
  onMounted(()=>{
    console.log('On Mounted')
    intervals = IntervalRepository.getIntervals();
    console.log(`\r\n - onMounted - intervals:`, intervals);

  })
</script>

<template>
  <div>
    <h1>Interval Card</h1>
    <!-- <ul>
      <li v-for="interval in intervals" :key="interval.id">
        <IntervalCard :interval="interval" />
      </li>
    </ul> -->
   <h2>Interval Card</h2>
  </div>
</template>

<style scoped>

</style>
