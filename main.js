let app = new Vue({

	el: "#root",
	data: {
        input: "",
        todoList: [],
	},

	methods: {
        add : function() {
            let ToDo = document.getElementById("todoAdd");
            if(this.input == 0){
                    ToDo.classList.add("alert")
                return
            }
            this.todoList.push({ text: this.input, done: false});
            this.input = "";
            ToDo.classList.remove("alert")
        },
        deleted: function(index){
            this.todoList.splice(index,1)
        },
        done: function(elemento){
                if(elemento.done == false){
                    elemento.done = true
                }else{
                    elemento.done = false
                }
        },

    }
});
Vue.config.devtools = true
