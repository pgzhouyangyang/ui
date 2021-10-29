<template>
    <el-tooltip v-bind=" typeof tooltip === 'boolean' ? defaultTooltip : tooltip" :disabled="!tooltip">
        <div slot="content" v-if="$slots.tooltip">
             <slot name="tooltip"></slot>
        </div>
        <div slot="content" v-else><slot></slot></div>
         <div 
            class="tz-ellipsis" 
            :class="[
                lineClamp ? 'tz-ellipsis--line-clamp' : ''
            ]" 
            :style="{
                '-webkit-line-clamp': expanded ? '' : lineClamp 

            }"
            @click="expandTrigger == 'click' ? expanded = !expanded : ''"
        >
            <slot></slot>
        </div>
    </el-tooltip>
   

</template>

<script>
export default {
    name: "TzEllipsis",
    props: {
        lineClamp: [String, Number],
        expandTrigger: {
            type: String,
            default: ""
        },
        tooltip: {
            type: [Boolean, Object],
            default: true
        }
    },
    data() {
        return {
            expanded: false,
            defaultTooltip: {
                placement: "top"
            }
        }
    }
}
</script>
