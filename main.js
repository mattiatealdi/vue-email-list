// https://flynn.boolean.careers/exercises/api/random/mail

const app = new Vue({
    el: '#app',
    data:{
        arrEmails: [],
        count: 0,
    },
    methods:{


        getEmail(url){
            axios.get(url)
            .then((resp) => {
                this.arrEmails.push(resp.data.response);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        
    },

    created(){
        for(i = 0; i < 10; i++){
            this.getEmail('https://flynn.boolean.careers/exercises/api/random/mail');
        }
    },

    mounted(){

    },

});
