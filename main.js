let app = new Vue({

	el: "#root",
	data: {
        input: "",
        todoList: [],
        placeholder: ""
	},

	methods: {
        add : function() {
            let ToDo = document.getElementById("todoAdd");
            if(this.input == 0){
                    ToDo.classList.add("alert")
                    this.placeholder = "Please write something"
                return
            }
            this.todoList.push({ text: this.input, done: false});
            this.input = "";
            ToDo.classList.remove("alert")
            this.placeholder = ""
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
