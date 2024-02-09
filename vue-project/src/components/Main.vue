<script>
import SingleCard from "./SingleCard.vue"

export default{
    name:"Main",
    components:{
        SingleCard,
    }
    
}

</script>



<template>
    <div class="container">
        <div class="containerInside">
            <select name="type" id="type">
            <option value="Alien">Alien</option>
            </select>
            <div class="containerCard">
                <div>
                    <div class="foundCard">
                        <span>Found 39 card</span>
                    </div>
                    <div class="cards">
                        <SingleCard/>
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
            height: 500px;
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
                    }

                }
            }
        }
    }
</style>