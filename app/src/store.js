import Vue from 'vue';
import Controller from './modules/controller';


let loading = true

export const fetch_data = async () => {
    let data = await Controller.fetch_data();
    return data;
}
export const state = Vue.observable({ loading: loading, modal: {newTask: false, doneTask: false}
});

export const addTask = async(data) => {
    let res = await Controller.post_data(data);
    return res;
}

export const deleteTaskFn = async (id) => {
    let res = await Controller.delete_data(id);
    return res;
}
