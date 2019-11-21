let planComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            required: true
        },
        selectedPlan: {
            type: String
        }
    },
    computed: {
        isSelected() {
            return this.name === this.selectedPlan
        }
    },
    // method to update selected data
    methods: {
        select() {
            // to pass data to another component or payload
            this.$emit('select', this.name)
            this.selected = true
        }
    }
};

let planPickerComponent = {
    template: '#plan-picker-template',
    components: {
        planList: planComponent
    },
    data() {
        return {
            plans: ['The Jagg', 'The Jugg', 'The Jegg'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(planList) {
            this.selectedPlan = planList
        }
    }
};

new Vue({
    el: '#app',
    components: {
        'plan-picker': planPickerComponent
    }
});
