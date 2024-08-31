import {repository} from '@/repository/Repository';

const repositories = {
    repository
}
export default {
    //left here for future use when we add more for now on repository['repository'] will work
    get: name => repositories[name]
};