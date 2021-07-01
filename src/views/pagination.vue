<template>
    <div class="pagination">
        <Pagination :page-total="10000"
                    :page-num="7"
                    :page-size="8"
                    @currentCallBack="currentCallBack"
                    :color="color"></Pagination>
    </div>

</template>

<script>
    import Pagination from "../components/pagination"
    import {randomColor} from "../utils/utils"

    export default {
        name: 'pagination',
        components:{
            Pagination
        },
        data(){
          return{
              color : randomColor()
          }
        },
        methods:{
            currentCallBack(index){
                console.log(index);
            }
        }
    }
</script>

<style scoped>

</style>
