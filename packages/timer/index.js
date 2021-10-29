import Timer from "./src/index"


Timer.install = function(Vue) {
    Vue.component(Timer.name, Timer)
}

export default Timer