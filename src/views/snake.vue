<template>
    <div class="snakebox" :style="{width:boxWidth+'px',height: boxheight + 'px'}">
        <div class="snake"
             :style="{left : item.x*snakeWidth +'px' , top:item.y*snakeHeight +'px', width:snakeWidth+ 'px' , height: snakeHeight+'px'}"
             v-for="(item,index) in snakeAry" :key="index"></div>

        <div class="shiwu"
             :style="{width:snakeWidth+'px',height:snakeHeight+'px',left: foodInfo.x* snakeWidth+ 'px',top : foodInfo.y*snakeWidth+'px'}"></div>
    </div>
</template>

<script>
    export default {
        name: 'snake',
        data() {
            return {
                boxWidth: 500, //场景宽度
                boxheight: 500,//场景高度
                snakeWidth: 20, //蛇身宽度
                snakeHeight: 20,//蛇身宽度
                direction: 'right',//蛇移动方向
                snakeAry: [
                    {x: 2, y: 1}, //蛇头
                    {x: 3, y: 1}, //蛇身
                    {x: 4, y: 1}], // 蛇尾
                foodInfo: null, // 食物坐标信息
                timer: null,
                seepd : .3
            }
        },
        created() {
            this.randomFood()
            this.timerfun()
        },
        mounted() {
            document.body.addEventListener('keydown', (ev) => {
                ev.preventDefault()
                switch (ev.key) {
                    case  'ArrowUp':
                        this.direction = 'up'
                        break
                    case  'ArrowDown':
                        this.direction = 'down'
                        break
                    case  'ArrowLeft':
                        this.direction = 'left'
                        break
                    case  'ArrowRight':
                        this.direction = 'right'
                        break
                }
            })
        },

        methods: {
            timerfun() {
                if (this.timer) clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.moveSnake()
                }, 1000/60)
            },
            randomFood() {
                this.foodInfo = {
                    x: Math.floor(Math.random() * this.boxWidth / this.snakeWidth),
                    y: Math.floor(Math.random() * this.boxheight / this.snakeHeight)
                }
            },
            moveSnake() {
                const {x: sx, y: sy} = this.foodInfo
                let body = this.snakeAry
                //蛇身 蛇尾用逆向循环改变一下位置
                for (let i = body.length - 1; i > 0; i--) {
                    body[i].x = body[i - 1].x
                    body[i].y = body[i - 1].y
                }
                //改变蛇头坐标信息
                if (this.direction === 'right') body[0].x += this.seepd
                if (this.direction === 'down') body[0].y += this.seepd
                if (this.direction === 'up') body[0].y -= this.seepd
                if (this.direction === 'left') body[0].x -= this.seepd


                // 处理碰到自己的情况
                if (body.length >= 4) {
                    for (let index = 4; index < body.length; index++) {
                        if (body[0].x === body[index].x && body[0].y === body[index].y) {
                            alert('不能碰到自己啊')
                            clearInterval(this.timer)
                        }
                    }
                }
                //判断碰到食物
                if (body[0].x === sx && body[0].y === sy) {
                    this.snakeAry.push({
                        x: sx,
                        y: sy
                    })
                    this.randomFood()
                }

                //处理边界游戏结束
                if (body[0].x < 0 || body[0].x * this.snakeWidth > this.boxWidth - this.snakeWidth
                    || body[0].y < 0 || body[0].y * this.snakeWidth > this.boxheight - this.snakeHeight) {
                    console.log('game over')
                    clearInterval(this.timer)
                }
            }

        }
    }
</script>

<style scoped>
    .snakebox {
        position: relative;
        margin: 0 auto;
        background: black;
        transition-duration: 500ms;
        transition-timing-function: ease-out;
        overflow: hidden;
    }

    .snake {
        background: red;
        position: absolute;
    }

    .shiwu {
        position: absolute;
        background: #0099FF;
    }
</style>
