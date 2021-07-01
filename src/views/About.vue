<template>
    <div class="about">
        <button @click="swithMode">切换模式</button>
        <button @click="addAry">追加拖拽</button>
        <button @click="addHeightNum">追加高度</button>
        <button @click="dragMode">{{dragModeNum ?'交换模式':'列表模式'}}</button>
        <drag
                :mode="mode"
                box-width="500"
                :drag-mode="dragModeNum"
                :drag-ary="ary"
                :drag-height="heightNum"
                @dragMouseup="dragMouseup"
        >

        </drag>

    </div>
</template>
<script>
    import Drag from '../components/drag'
    import {randomAbc, randomColor} from "../utils/utils"

    export default {
        data() {
            return {
                ary: Array.from({length: 9}, (_, index) => {
                    return {
                        ids: index + randomColor(),
                        text: `${index + 1}`,
                        color: randomColor(),
                        html: `<h1>${index}</h1>`
                    }
                }),
                mode: 'flex',
                num: '100%',
                heightNum: 100,
                dragModeNum: 0,
            }
        },

        methods: {

            swithMode() {
                this.mode = this.mode === 'list' ? 'flex' : 'list'
            },
            dragMouseup(res) {

                console.log(res)
            },
            addNum() {
                this.num += 10
            },
            addHeightNum() {
                this.heightNum += 10
            },
            addAry() {
                this.ary.unshift({
                    text: randomAbc(50)[Math.floor(Math.random() * 50)],
                    color: randomColor(),

                })

            },
            dragMode() {
                this.dragModeNum = this.dragModeNum === 1 ? 0 : 1
            },
        },

        components: {Drag}
    }
</script>
