<script setup>
import Repository from '@/repository/Repository.ts';
import Interval from '@/models/Interval.ts';
import {onUnmounted, onUpdated} from "vue";

let intervals:Interval[] = [];
export default {
  name: "IntervalList"
}
intervals:Interval[] = [];
beforeCreate(() => {
  console.log(`the component is about to be created.`)
})
onCreated(() => {
  console.log(`the component has been created.`)
  intervals = Repository.getIntervalList();
  console.log('intervals', intervals);
})
onMounted(() => {
  console.log(`the component is now mounted.`)
  Repository.getIntervalList().then((response) => {
    console.log('response', response);
    intervals = response.data;
  });
})
onUnmounted(() => {
  console.log(`the component is about to be unmounted.`)
})
onUpdated(() => {
  console.log(`the component is updated.`)
})
</script>

<template>

</template>

<style scoped>

</style>