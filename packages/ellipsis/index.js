import Ellipsis from "./src/index"


Ellipsis.install = function(Vue) {
    Vue.component(Ellipsis.name, Ellipsis)
}

export default Ellipsis