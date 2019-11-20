let app = new Vue({
    el: '#app',
    data: {
        title: 'Basic Vue example',
        message: 'Good Morning!'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
        title: 'Hover Title',
        message: 'You loaded this page on ' + new Date().toLocaleDateString()
    }
});

let app3 = new Vue({
    el: '#app-3',
    data: {
        title: 'Hide boolean',
        seen: true
    }
});

let app4 = new Vue({
    el: '#app-4',
    data: {
      title: 'Looping',
      todos: [
        { text: 'Learn Anything' },
        { text: 'Learn Vue, React, Anything' },
        { text: 'Build Anything' }
      ]
    }
});

let app5 = new Vue ({
    el: '#app-5',
    data: {
        title: 'Reverse Button',
        message: 'Good Day'
    },
    methods: {
        namaFunctionReversed: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

let app6 = new Vue ({
    el: '#app-6',
    data: {
        title: 'Two Way Data Binding',
        message: 'Javascript Random Gibberish Type Anything'
    }
});
