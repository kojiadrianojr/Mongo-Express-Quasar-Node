<template>
    <q-dialog v-model="show" persistent>
        <q-card class="card">
        <slot></slot>
        <q-card-actions align="right">
            <q-btn flat label="Cancel" @click="setShow(name)"/>
            <q-btn v-if="name === 'addTask'" flat label="Save" @click="addTaskMethod(newTask)" />
        </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: {
        show: Boolean,
        action: { type: Function },
        addTask: {type: Function},
        name,
        newTask: Object
    },
    methods: {
        setShow(state){
            return this.action(state)
        },
        addTaskMethod(data){
            this.addTask(data);
            this.setShow('addTask');
        }
    }
}
</script>

<style scoped>
   .card {
       width: 50%;
   }
</style>