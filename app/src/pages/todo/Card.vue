<template>
     <q-card class="todo">
        <div class="header" >
            <div class="text-h3">
                {{name}}
            </div>
            <div>
                <q-btn class="gt-xs" size="24px" flat dense round icon="add" @click="action('addTask')" />
                <q-btn class="gt-xs" size="24px" flat dense round icon="storage" />
            </div>
        </div>
        <q-list class="todo-list" bordered separator>
            <q-item v-for="(task, ind) in tasks" :key="ind">
                <q-item-section>
                    <div class="item">
                        <q-item-section side top>
                            <q-checkbox value="true" v-model="task.status"/>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>
                            {{ task.name }}
                            </q-item-label>
                            <q-item-label caption>
                            {{ task.desc }}    
                            </q-item-label>
            
                        </q-item-section>
                        <q-item-section top side>
                            <div>
                                <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteTaskFn(task._id)" />
                            </div>
                        </q-item-section>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
        <q-card-actions v-if="showSave">
            <q-btn>Save Changes</q-btn>
        </q-card-actions>
    </q-card>
</template>
<script>
export default {
    name: "CardComponent", 
    data(){
        return {
            showSave: false
        }
    },
    props: {
        name: String,
        tasks: Array,
        modal: Object,
        action: Function,
        deleteTask: Function,
    },
    methods: {
       deleteTaskFn(id){
         this.deleteTask(id)
       } 
    }
}
</script>
<style scoped>
    .todo {
        padding: 25px;
    }
    .todo-list {
        margin: 10px 15px;
    }
    .item {
        display: flex;
        justify-content: space-between;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
</style>