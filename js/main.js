const app = Vue.createApp({
    data(){
        return{
            intro:'Participants',
            participants: [],
            newParticipant:{
            name:'',
            age: null,
            country: '',
            },  
            
            

        }
    }, 
    methods: {
        addMethod(){
            const newParticipant = {
                name: this.newParticipant.name,
                age: this.newParticipant.age,
                country: this.newParticipant.country,
                
            };

            axios.post('http://localhost:5071/api/Participants', newParticipant)
            .then(Response=>{
                console.log('Participant added', Response.data);

            //Opdaterer tabellen
            this.getAll();
            //Ryd inputfelter    
            this.newParticipant = { name: '', age: '', country: '' };

                
            })
            .catch(error=>{
                console.log(error);
            })
        },
        getAll(){
            axios.get('http://localhost:5071/api/Participants')
            .then(Response=>{
                this.participants=Response.data;
            })
            .catch(
                error=>{
                    console.log(error)
                }
              )
            }
    },
    computed:{
        myComputed(){
            return''
        },
    }


})