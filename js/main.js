const app = Vue.createApp({
    data(){
        return{
            intro:'Indtast kunder til kundedatabase',
            navn: null,
            efternavn: null,
            id: null,
            kundeListe: [],

        }
    }, 
    methods: {
        addMethod(){
            this.kundeListe.push({navn:this.navn, efternavn:this.efternavn, id:this.id})
            this.navn=null;
            this.efternavn=null;
            this.id=null;

        },
    },
    computed:{
        myComputed(){
            return''
        },
    }


})