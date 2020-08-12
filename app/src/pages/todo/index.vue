<template>
  <div class="fit row wrap justify-center content-start">
    <CardComponent :tasks="tasks" :modalState="modal" name="Tasks" :action="setShow" :deleteTask="deleteTask"/>
    <Modal
      name="addTask"
      :show="modal.addTask"
      :action="setShow"
      :addTask="addTask"
      :newTask="newTask"
    >
      <q-card-section>
        <div class="text-h6">New Task:</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="newTask.name" dense autofocus />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Description:</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input v-model="newTask.desc" dense />
      </q-card-section>
    </Modal>
  </div>
</template>

<script>
import CardComponent from "./Card";
import Modal from "./Modal";
import { addTask, deleteTaskFn } from "./../../store";
export default {
  name: "Todo",
  data() {
    return {
      modal: {
        addTask: this.$store.modal.newTask,
        doneTask: this.$store.modal.doneTask,
      },
      newTask: {
        name: "",
        desc: "",
        status: false,
      },
    };
  },
  props: {
    tasks: Array,
    setLoading: Function,
  },
  components: { CardComponent, Modal },
  methods: {
    setShow(state) {
      this.modal[`${state}`] = !this.modal[`${state}`];
    },
    addTask(task) {
      addTask(task);
      this.setLoading();
      this.newTask.name = "";
      this.newTask.desc = "";
    },
    deleteTask(task){
        deleteTaskFn(task);
        this.setLoading();
    }
  },
};
</script>

<style scoped>
.todo {
  /* width: 100%; */
  width: 50%;
  min-height: 50vh;
}
</style>