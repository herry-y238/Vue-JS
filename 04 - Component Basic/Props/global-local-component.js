let planComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        }
    }
};

let planPickerComponent = {
    template: '#plan-picker-template',
    components: {
        'plan-list': planComponent
    },
    data() {
        return {
            plans: ['The Jagg', 'The Jugg', 'The Jegg']
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'plan-picker': planPickerComponent
    }
});
