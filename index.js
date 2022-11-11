const app = new Vue ({
    el:'#app',
    data:{
        titulo:'Frutas',frutas:[{nombre:'Uva',cantidad:20},
        {nombre:'Manzana',cantidad:20},
        {nombre:'Fresa',cantidad:20},
        {nombre:'Naranja',cantidad:0}],
        nuevaFruta:'', total:0
    },methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,cantidad:0

            });
            this.nuevaFruta='';
            
        }

    },
    computed:{
            sumarFrutas() { 
                this.total=0;
                for(fruta of this.frutas){
                    this.total=this.total+fruta.cantidad;
                }
              return this.total;        
                }
    }
})