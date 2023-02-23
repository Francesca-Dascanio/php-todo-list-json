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
        },
        updateData: function (item, index) {

            // Al click inverti il valore booleano di item.done --> solo frontend così
            if (item.done == true) {
                
                item.done = false;

                const updatedTopic = {
                    topic: item.topic,
                    done: item.done
                };

                // Chiamata axios per inviare dato modificato al backend
                axios
                .post('./update.php', 
                {
                    // done: false,
                    // topic: item.topic,
                    // index: index
                    update: updatedTopic
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {

                    console.log(response);
                    return updatedTopic;
                });
            }
            else {
                item.done = true;

                // Chiamata axios per inviare dato modificato al backend
                axios
                .post('./update.php', 
                {
                    done: true,
                    topic: item.topic,
                    index: index
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {

                    console.log(response);
                    return item;
                });
            }
            
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