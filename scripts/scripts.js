const { createApp } = Vue;

createApp ({
    data () {
        return {
            // miei dati
            message: 'Tutto ok',
            topics: [],
        }
    },
    methods: {

    },
    created () {
        axios
        .get('./api.php')
        .then((response) => {
            
            this.topics = response.data.data;
            console.log(this.topics);
            return this.topics;
        });
    }
}).mount('#app')