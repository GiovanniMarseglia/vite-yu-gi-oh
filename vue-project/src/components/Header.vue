<script>

export default{
    name:"Header"
}

</script>

<template>
 
<div>

    <img src="../img/YuLogo.png" alt="">
    <h1>Yu-Gi-Oh Api</h1>

</div>

</template>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
div{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 25px;
    img{
        width: 70px;
    }

}
</style>
