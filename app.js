Vue.createApp({
    data() {
        return {
            // Estado de la app
            test: '<strong>Hola!</strong>',
            nuevoId: 6,
            textInput: '',
            showTextLength: ''
        }
    },
    methods: {
        calculate() {
            this.showTextLength = this.textInput;
        }
    }

}).mount('#app')