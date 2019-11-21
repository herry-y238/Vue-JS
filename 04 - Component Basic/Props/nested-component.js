Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Jagg', 'The Jugg', 'The Jegg']
        }
    }
})

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
});
