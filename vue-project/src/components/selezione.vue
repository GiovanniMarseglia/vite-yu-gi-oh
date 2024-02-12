<script>
import axios from "axios"
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
            axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php").then( (res) =>{
 
                for(let i=0; i<res.data.length;i++)
                store.type.push(res.data[i].archetype_name)
                
            })
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