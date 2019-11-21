Vue.component('plan-list', {
    template: '#plan',
    props: {
        name: {
            type: String,
            required: true
        }
    }
});

new Vue({
    el: '#app',
    data: {
        plans: ['The Jagg', 'The Jugg', 'The Jegg']
    }
});
