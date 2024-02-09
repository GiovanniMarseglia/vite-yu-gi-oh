<script>

export default{
    name:"SingleCard",
    props : [
        "propsElement"
    ],
    
}

</script>

<template>

<div>
    <figure>
        <img :src="propsElement.card_images[0].image_url" alt="">
    </figure>
    <span>{{propsElement.name}}</span>
    <span>{{propsElement.archetype}}</span>
</div>

</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
div{
    display: flex;
    flex-direction: column;
    width: calc(100% / 5 - 20px);
    background-color: $yellowYu;
    gap: 10px;
    padding-bottom: 10px;
    
    figure{
        width: 100%;
        img{
            width: 100%;
        }
    }
    span{
        text-align: center;
        color: white;
        &:last-child{
           color: black;
        }
    }
}


</style>