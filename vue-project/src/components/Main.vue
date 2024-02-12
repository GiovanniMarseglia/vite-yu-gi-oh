<script>
import { store } from "../store"
import axios from "axios"
import SingleCard from "./SingleCard.vue"
import loader from "./loader.vue"
import selezione from "./selezione.vue"
export default{
    name:"Main",
    components:{
        SingleCard,
        loader,
        selezione,
    },
    data() {
        return {
            store
        }
    },
    methods:{
        addCard(){
            if(store.selectValue){
            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0&archetype=" + store.selectValue).then(res =>{
                store.card=res.data.data
            })
            }else{
                store.load=false
                axios.get(store.url).then(res =>{
                    store.card=res.data.data
                    store.load=true
                })
            }
        }
    },
    mounted() {
        this.addCard()
    },
    
    
}

</script>



<template>
    <div class="container">
        <div class="containerInside">
        
            <selezione  @functioncard="addCard"/>

            <div class="containerCard">
                <div>
                    <div class="foundCard">
                        <span>Found {{ store.card.length }} cards</span>
                    </div>
                    <loader v-if="store.load=false"/>
                    <div v-else class="cards">
                        <SingleCard v-for="element in store.card" :propsElement="element"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
    .container{
        width: 100%;
        background-color: $yellowYu;
        padding: 20px 0px;
        .containerInside{
            padding: 10px;
            width: 95%;
            background-color: $yellowYu;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 0 auto;
            
            #type{
                width: 120px;
                height: 30px;
                border-radius: 5px;
                border-style: hidden;
                margin-left: 15px;
            }
            .containerCard{
                background-color: white;
                height: 100%;
                padding: 30px 0px;
                div{
                   
                    .foundCard{
                        width: 95%;
                        padding: 20px;
                        margin: 0 auto;
                        background-color: #262A2D;
                        span{
                            color: white;
                        
                        }
                    }
                    .cards{
                        width: 95%;
                        margin: 0 auto;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        gap: 20px;
                        
                    }

                }
            }
        }
    }
</style>