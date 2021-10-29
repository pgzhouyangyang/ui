<template>
    <div>
        <slot name="default" v-bind="timeData"></slot>
        {{ $scopedSlots.default ? '' : formattedTime }}
    </div>
</template>

<script>
import { CreatTimer, parseTimeData, parseFormat } from "../../../src/utils/util"
import moment from "moment"
export default {
    name: "tzTimer",
    props: {
        autoStart: {
            type: Boolean,
            default: true
        },
        format: {
            type: String,
            default: "HH:mm:ss"
        },
        startTime: [String, Number, Date]

    },
    data() {
        return {
            time: "",
            timer: null
        }
    },
    created() {
        if (this.autoStart) {
            this.start()
        }
    },
    beforeDestroy() {
        this.clear()
    },
    computed: {
        timeData() {
            return parseTimeData(this.time)
        },
        formattedTime() {
            return parseFormat(this.format, this.timeData);
        }
    },
    methods: {
        start() {
            if (!this.timer) {
                this.timer = new CreatTimer(moment(this.startTime || new Date()).format("x"))
            }
            this.timer.start(time => {
                this.time = time;
            })
        },
        pause() {
            this.timer && this.timer.pause()
        },
        clear() {
            this.timer && this.timer.clear();
            this.timer = null;
            this.time = 0;
        }
    }

}
</script>

<style>
</style>