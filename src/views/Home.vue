<template>
    <div class="home">
        <div style="margin: auto;width: 500px;">
        <Tab :content="list" tab-width="500" tab-height="300" :theme-color="themeColor">
            <TabItem v-for="(item ,index) in list" :key="index">
                <div class="itemText">
                {{item}}
                </div>
            </TabItem>
        </Tab>
        </div>
    </div>
</template>

<script>
    /*import Tab from '../components/tab/tab'
    import TabItem from '../components/tab/tabItem'*/
    import {randomColor} from '../utils/utils'
    import {Tab,TabItem} from 'nigo-vue-tab'


    export default {
        name: 'Home',
        data() {
            return {
                themeColor: randomColor(),
                list: Array.from({length: 10}, (_, index) => `${index}`)
            }
        },
        components: {
           Tab,
            TabItem
        }
    }
</script>
<style>
    .home{
        text-align: center;
    }
    .itemText{
        background: burlywood;
    }
    .div {
        background: red;
    }
</style>
