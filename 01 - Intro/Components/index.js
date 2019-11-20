// Define a component di Vue.js yang bernama todo-item

Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

let app7 = new Vue({
    el: '#app-7',
    data: {
        listConsole: [
            {id: 0, text: 'Haha'},
            {id: 1, text: 'Hehe'},
            {id: 2, text: 'Huhu'}
        ]
    }
})
