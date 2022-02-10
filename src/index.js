
import Ellipsis from "../packages/ellipsis/index.js"
import Timer from "../packages/timer/index.js"
const components = [
    Ellipsis,
    Timer
]


const install = function(Vue) {
    components.forEach(component=> {
        Vue.component(component.name, component)
    })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
    install,
    Ellipsis,
    Timer
}