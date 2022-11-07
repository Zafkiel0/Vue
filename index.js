const app = new Vue ({
    el:'#app',
    data:{
        titulo:'Frutas',frutas:[{nombre:'Uva',cantidad:20},
        {nombre:'Manzana',cantidad:20},
        {nombre:'Fresa',cantidad:20},
        {nombre:'Naranja',cantidad:0}],nuevaFruta:''
    },methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,cantidad:0
            })
        }

    }
})