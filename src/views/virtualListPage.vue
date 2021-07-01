<template>
    <virtualList :list="listData" >
        <template #li="{virtualList}">
            <li class="item" :style="{backgroundColor : randomBack[index] }" v-for="(i ,index) in virtualList" :key="index">
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
                <div  >{{i}}</div>
            </li>
        </template>
    </virtualList>
</template>

<script>
    import virtualList from "../components/virtualList"
    import {randomColor} from "../utils/utils"

    export default {
        name: "virtualListPage",
        data() {
            return {
                listData: Array.from({length: 100000}, (_, index) => {
                    return index
                })
            }
        },

        computed: {
            randomBack(){
                return Array.from({length : this.listData.length},()=>randomColor())
            }
        },
        components: {
            virtualList
        }

    }
</script>

<style scoped>
    .item {

        color: #fff;
        display: flex;
        flex-wrap: wrap;

    }

    .item div{
        width: 50px;
        height:50px ;
    }
</style>
