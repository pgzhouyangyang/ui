<template>
    <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
        <div class="page-container page-component">
            <Guide></Guide>
        </div>
    </el-scrollbar>

</template>

<script>
import Guide from "../docs/guide.md"
export default {
    components: {
        Guide
    }
}
</script>

<style>
</style>