// Register a global custom directive called v-focus
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
});

var app = new Vue({
    el: '#app',
    // Here we can register any values or collections that hold data
    // for the application
    data: {
        task: { name: '' },
        tasks: [],
        displayDate: '',
        user: { username: '', firstName: 'Clay', lastName: 'Schumacher'}
    },

    // Anything within the mounted function will run when the application loads
    mounted: function () {
        this.$nextTick(function() {
            // When the application loads, we want to call the method that initializes
            // some data
            this.fetchTasks();
        });
    },

    // Methods we want to use in our application are registered here
    methods: {
        // We dedicate a method to retrieving and setting some data
        fetchTasks: function () {
            var tasks = [
                {
                    id: 1,
                    name: 'Buy Milk'
                },
                {
                    id: 2,
                    name: 'Find Keys'
                },
                {
                    id: 3,
                    name: 'Drive to Store'
                }
            ];
            // set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
            Vue.set(this, 'tasks', tasks);
        },

        // Adds a task to the existing tasks array
        addTask: function () {
            if (this.task.name) {
                this.tasks.push(this.task);
                this.task = { name: '' };
            }
        },

        deleteEvent: function (index) {
            if (confirm("Are you sure you want to mark complete?")) {
                // $remove is deprecated in Vue 2.0, splice without a replacement list can be used.
                this.tasks.splice(index, 1);
            }
        }

    }
})

function keyAddTask(event) {
    if (event.keyCode === 13) {
        app.addTask();
    }
}