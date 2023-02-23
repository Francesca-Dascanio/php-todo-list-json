const { createApp } = Vue;

createApp ({
    data () {
        return {
            // miei dati
            message: 'Tutto ok',
            topics: [],
            newTopic: {
                topic: '',
                done: false
            },
            myInput: '',
        }
    },
    methods: {
        addData: function () {
            // Chiamata axios per inviare dati al backend
            axios
            .post('./add.php', 
            {
                // data
                topic: this.newTopic
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                // Cosa deve rispondere: array dei topics dove viene pushato il nuovo dato topic - lato frontend
                console.log(response);

                this.topics.push(this.newTopic);
            });
        }
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