var app = new Vue({
    el: "#app",
    data: {
        title: "Task List",
        items: [],
    },
    methods: {
        addTask: function() {
            var input = document.getElementById('itemForm');

            if (input.value !== '') {
                this.items.push({
                    text: input.value
                })
                input.value = "";
            }
        },
        remove: function(index) {
            this.items.splice(index, 1);
        },
    }
});