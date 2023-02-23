const { createApp } = Vue;

createApp ({
    data () {
        return {
            // miei dati
            message: 'Tutto ok',
            topics: [],
            myInput: '',
        }
    },
    methods: {
        addData: function () {

            const newTopic = {
                topic: this.myInput,
                done: false
            };

            // Chiamata axios per inviare dati al backend
            axios
            .post('./add.php', 
            {
                // data
            
                topic: newTopic

                
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                // Cosa deve rispondere: array dei topics dove viene pushato il nuovo dato topic - lato frontend
                console.log(response);

                this.topics.push(newTopic);
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