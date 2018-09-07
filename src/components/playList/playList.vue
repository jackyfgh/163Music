<template>
    <div class="playList">
        <div class="content">
            <div class="plhead">
                <div class="head_bg" :style="{background: 'url('+ img+')'}"></div>
            </div>
            <div class="headWrap">
                   <div class="headImg">
                        <img :src="img" alt="歌单图片" width="145px" height="145px">
                        <span>歌单</span>
                        <div>{{playCount|formatNumber}}</div>   
                    </div>
                    <div class="fr">
                        <h2 class="tittle">{{tittle}}</h2>
                        <div class="touxiang">
                            <img :src="touxiang"><span class="nickname">{{nickname}}</span>
                        </div>
                    </div> 
            </div>
            <div class="middle">
              <span>标签：</span><van-tag plain  mark>标签1</van-tag><van-tag plain  mark>标签1</van-tag><van-tag plain  mark>标签1</van-tag>
            </div>
        </div>
    </div> 
</template>
<script>
import Vue from 'vue';
import { Tag } from 'vant';

Vue.use(Tag);
export default {
    data(){
        return{ 
           img:'',
           playCount:0,
           tittle:'',
           touxiang:'',
           description:'',
           nickname:''
        }
    },
    methods:{
        
    },
   async created(){
         let data=await this.$.get('playlist/detail',{id:this.$route.params.id})
         this.img=data.playlist.coverImgUrl;
         this.playCount=data.playlist.playCount;
         this.tittle=data.playlist.name;
         this.touxiang=data.playlist.creator.avatarUrl;
         this.nickname=data.playlist.creator.nickname;    
    }    
}
</script>
<style lang="less" scoped>
.playList{
    position: absolute;
    top:0px;
    bottom: 0px;
    width: 100%;
}
.content{
    width: 100%;
    position: relative;
    background-color: #f8f8f8;
}
.content .plhead .head_bg {
    width: 100%;
    height: 200px;
    background-repeat: no-repeat!important;
    background-size: cover!important;
    background-position: 50%!important;
    filter: blur(20px);
}
.headWrap{
    position: absolute;
    top: 25px;
    left: 15px;
    z-index: 3;
    display: flex;
}
.headWrap .headImg{
    position: relative;
    &>span{
            position: absolute;
            z-index: 3;
            top: 10px;
            left: 0;
            padding: 0 8px;
            height: 17px;
            color: #fff;
            font-size: 9px;
            text-align: center;
            line-height: 17px;
            background-color: rgba(217,48,48,.8);
            border-top-right-radius: 17px;
            border-bottom-right-radius: 17px;
    }
    &>div{
        position: absolute;
        right: 2px;
        top: 2px;
        z-index: 3;
        padding-left: 15px;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        background-position: 0;
        background-repeat: no-repeat;
        background-size: 11px 10px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
        text-shadow: 1px 0 0 rgba(0,0,0,.15);
    }
}
.fr{
    margin-left: 15px;
}
.touxiang{
    height: 30px;
    line-height: 30px;
    font-size: 15px;
    color: #fff;
    margin-top: 20px;
    &>.nickname{
        margin-left: 2px;
        padding-top: 2px;
        color: hsla(0,0%,100%,.7);
    }    
}
.touxiang img{
    width: 30px;
    border-radius: 50%;
    border: 0px;
    vertical-align: middle;
}
.fr .tittle{
    padding-top: 1px;
    padding-right: 10px;
    font-size: 17px;
    line-height: 1.3;
    color: #fefefe;
    height: 44px;
}

//desc中间的描述部分
.middle{
    margin-top: 20px;
    background: #ffffff;
}

</style>
