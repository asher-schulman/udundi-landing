// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~TEXT INTERPOLATION~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Vue 2.0 syntax from https://vuejs.org/v2/guide/#Getting-Started
// const app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     }
// })

// Vue 3.0 syntax from https://v3.vuejs.org/guide/introduction.html#getting-started
// const counter = Vue.createApp({
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     mounted() {
//         setInterval(() => {
//             this.counter++
//         }, 1000)
//     }
// }).mount('#counter')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~BIND ELEMENT ATTRIBUTE~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const textContainer = {
    data() {
        return {
            // boolean to trigger initial animation on pg load
            initialAnimation: false,
            // boolean to toggle text-slide and card-expand animation
            showT: true,
        }
    },
    // on page load, trigger title animation after 1s
    mounted() {
        setTimeout(() => {
            this.initialAnimation = true;
        }, 1000)
    }
}

Vue.createApp(textContainer).mount('#text-container')