<template>
  <q-page class="flex flex-center main">
    <div v-if="loading">
      Loading ....
    </div>
    <Todo :tasks="tasks" :setLoading="setLoading"/>
  </q-page>
</template>

<script>
import Todo from './todo';
import { fetch_data } from '../store';

export default {
  name: 'PageIndex',
  components: { Todo },
  data() {
    return {
      loading: false,
      tasks: null,
      form: false
    }
   },
  computed: {
    getTask() {
      return this.tasks;
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    loading: function(){
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      this.post = null;
      this.loading = true;
      fetch_data().then(res => this.tasks = res);
      this.loading = false;
    },
    setLoading() {
      this.loading = true;
    }
  }
}

</script>

<style scoped>
  .main {
    background-image: url('../assets/jeshoots-com-pUAM5hPaCRI-unsplash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
