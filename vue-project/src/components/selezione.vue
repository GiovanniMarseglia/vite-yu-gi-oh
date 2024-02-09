<script>
import { store } from "../store"

export default{
    name:"selezione",

    data() {
        return {
            store
        }
    },
        methods:{
        aggiuntatype(){
            setTimeout(() => {
                
                store.card.forEach((element,index) => {
                    if(element.archetype == null){

                    }else if(store.type.includes(element.archetype)){
    
                    }else{
                        store.type.push(element.archetype)
                    }
                });
            }, 500);
            console.log(store.type)
        }
      
    },
    mounted(){
        this.aggiuntatype()
    },
}

    
</script>


<template>
     <select name="typ" id="typ">
            <option v-for="(element,index) in store.type" :value="element">{{ element }}</option>
            </select> 
</template>

<style lang="scss" scoped>

</style>