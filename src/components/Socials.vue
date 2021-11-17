<template>
    <div class="position-absolute bottom-0 end-0 d-inline-flex flex-column my-2 p-2" id="socials-container">
        <button type="button" class="btn my-1" id="facebook-logo">
            <img class="socials-btn" src="@/assets/Facebook.svg" alt="facebook">
        </button>
        <button type="button" class="btn my-1" id="insta-logo">
            <img class="socials-btn" src="@/assets/Instagram.svg" alt="instagram">
        </button>
    </div>
</template>

<script>
export default {
    data () {
        return {}
    }
}
</script>

<style lang="css" scoped>
    /* #socials-container {
        border: white solid 2px;
    } */
    /* had to put this transition on entire img element so animation would finish even after cursor leaves position */
    img {
        transition: transform .5s ease-in-out;
    }
    img:hover {
        box-shadow: 10px 10px 20px rgb(0, 0, 0);
        border-radius: 50%;
        transform: translate(0, -5px);
    }
    .socials-btn {
        height: 90px;
        width: 90px;
    }
</style>