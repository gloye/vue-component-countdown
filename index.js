import Countdown from "./Countdown.vue"

export default {
    install(Vue,options){
        Vue.component("countdown",Countdown)
    }
}