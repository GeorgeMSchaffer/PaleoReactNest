import OccuranceRepository from './OccuranceRepository';
import IntervalRepository from './IntervalRepository';

const repositories = {
  'intervals':IntervalRepository,
  'occurances':OccuranceRepository,
}
export default {
  get: name => repositories[name]
};