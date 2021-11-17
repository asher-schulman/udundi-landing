<template>
    <div id="text-container">
        <transition name="text-slide-right">
            <div v-if="showT" id="title-container">
                <h1 class="heading-text">Explore</h1>
            </div>
        </transition>
        <transition name="text-slide-left">
            <div class="d-flex" v-if="showT" id="details-container">
                <div class="mx-3" id="details-container-plus">
                    <button @click="showT = !showT" type="button" class="btn my-1" id="plus-btn">
                        <img class="plus-img" src="@/assets/Plus.svg" alt="more-details">
                    </button>
                </div>
                    <div v-if="showT" class="d-flex mx-3 align-items-center" id="details-container-text">
                        <p class="m-auto d-flex align-items-center heading-subtext">More Details</p>
                    </div>
            </div>
        </transition>
        <transition name="expand">
            <div v-if="!showT" class="" id="extra-details-container">
                <div class="p-5" id="extra-details">
                    <div class="d-flex justify-content-between" id="extra-details-title-container">
                        <h2 class="" id="extra-details-title">Explore</h2>
                        <button @click="showT = !showT" type="button" class="btn my-1" id="extra-details-exit">
                            <img class="exit-img" src="@/assets/Plus.svg" alt="more-details" id="extra-details-exit-img">
                        </button>
                    </div>
                    <p class="extra-details-body">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    </p>
                    <button class="" id="extra-details-btn">READ MORE</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // boolean to trigger initial animation on pg load
            // initialAnimation: false,
            // boolean to toggle text-slide and card-expand animation
            showT: true,
        }
    },
    // on page load, trigger title animation after .5s
    // mounted() {
    //     setTimeout(() => {
    //         this.initialAnimation = true;
    //     }, 500)
    // }
}
</script>

<style lang="css" scoped>
    .heading-text {
        font-weight: 800;
        font-family: 'Playfair Display', serif;
        font-size: 308px;
        letter-spacing: 18px;
    }
    .heading-subtext {
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 32px;
    }
    .plus-img {
        height: 60px;
        width: 60px;
    }
    .plus-img {
        height: 60px;
        width: 60px;
        color: #6c0011
    }
    /* easy hover anim on buttons */
    img {
        transition: transform .5s ease-in-out;
    }
    img:hover {
        box-shadow: 10px 10px 20px rgb(0, 0, 0);
        border-radius: 50%;
        transform: translate(0, -5px);
    }
    #title-container {
        /* border: yellow solid 2px; */
        position: fixed;
        bottom: 30%;
        left: 6%;
    }
    #details-container {
        position: fixed;
        /* border: purple solid 2px; */
        right: 72%;
        bottom: 25%;
    }
    #extra-details-container {
        position: fixed;
        background-color: #ffffff;
        /* border: pink solid 2px; */
        left: 5vw;
        top: 10vh;       
        width: 500px;
        height: 600px;
    }
    #extra-details-exit-img {
        background-color: #6c0011;
        border-radius: 50%;
        transform: rotate(45deg);
    }
    #extra-details {
        color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
    }
    #extra-details-title-container {
        text-align:left;
        padding-bottom: 10px;
        background:
            linear-gradient(
            to right, 
            #6c0011 0%,
            #ffffff 100%
            )
            left 
            bottom
            #ffffff    
            no-repeat; 
        background-size:100% 2px ;
    }
    #extra-details-title {
        color: #6c0011;
        font-size: 42px;
    }
    #extra-details-btn {
        color: #ffffff;
        background-image: linear-gradient(to right, 
            #6c0011 0%,
            #aa5e4d 100%);
        width: 220px;
        height: 50px;
    }
    /* TEXT SLIDE ANIMATION */
    .text-slide-right-enter-active {
        transition: all .3s ease-out;
    }

    .text-slide-right-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .text-slide-right-enter-from, .text-slide-right-leave-to {
        transform: translateX(40px);
        opacity: 0;
    }
    .text-slide-left-enter-active {
        transition: all .3s ease-out;
    }

    .text-slide-left-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .text-slide-left-enter-from, .text-slide-left-leave-to {
        transform: translateX(-40px);
        opacity: 0;
    }
    /* EXPAND ANIMATION */

    .expand-enter-active {
        transition-duration: 3s;
        transition-delay: 3s;
        transition: all .5s ease-out;
    }
    .expand-enter-from, .expand-leave-to {
        transition-duration: 3s;
        transition-delay: 3s;
        transform: translateY(-50vh);
        opacity: 0;
    }
    .expand-leave-active {
        transition-duration: 3s;
        transition-delay: 3s;
        transition: all .5s ease-out;
    }
    
</style>