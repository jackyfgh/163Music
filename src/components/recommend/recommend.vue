<template>
    <div class="recommend" ref="recommend">
        <div class="recommendWrap" >
            <div v-show="!loding" class="content">
                <h2 class="topTitle">推荐歌单</h2>
                <div class="recommendSongs">
                    <a v-for="(item,index) in list" :key="index" :href="'#/playlist/'+item.id" >
                        <img @load="loadImg" :src="item.picUrl" :alt="item.name">
                        <span>{{item.playCount|formatNumber}}</span>
                        <p>{{item.name}}</p>
                    </a>
                </div>
                <h2 class="topTitle">最新音乐</h2>
                <div class="newSongs">
                    <a v-for="(item,index) in newSongs" :key="index" :href="'#/songDetails/'+item.id">
                        <div class="bdBottom">
                            <div class="lf">
                              <div class="title">{{item.name}}</div>
                              <div class="desc"><i class="u-hmsprt sghost"></i>{{item.song|formatSong}}</div>
                            </div>
                            <div class="lr">
                                <span class="u-hmsprt sgchply"></span>
                            </div>
                        </div>
                    </a>
                </div>
                <footer class="m-homeft">
                     <div class="ftwrap">
                        <div class="logo"><svg class="logosvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 88" data-reactid="89"><path fill-rule="evenodd" fill="#e60012" d="M0,17.171C0,7.688,7.819,0,17.466,0h54.583 c9.646,0,17.466,7.688,17.466,17.171v53.658c0,4.742-1.705,8.789-5.116,12.142c-3.411,3.354-7.527,5.03-12.351,5.03H17.466 C7.819,88.001,0,80.313,0,70.829V17.171z" data-reactid="90"></path><path fill="#fff" d="m63.6 29c-2.874-1.817-6.396-2.814-10.02-2.993l-.808-2.892.024.027c-.031-.086-.059-.17-.086-.252l-.239-.855c-.552-2.473.454-3.653.969-4.078.088-.064.179-.129.277-.192 2.364-1.535 5.731.924 5.92 1.068 1.494 1.403 4.229 1.75 5.704.314 1.491-1.451 1.136-4.165-.354-5.617-2.32-2.258-9.443-5.885-15.504-1.951-5.45 3.537-5.558 8.515-4.662 11.392l1.086 3.893c-1.819.51-3.564 1.241-5.159 2.191-5.967 3.559-8.96 9.565-8.212 16.479.767 7.097 6.216 12.247 12.957 12.247 7.157 0 12.978-5.668 12.978-12.636-.097-1.664-.077-1.644-.307-3.131-.224-1.451-2.422-8.271-2.422-8.271 1.35.304 2.613.801 3.702 1.489 12.307 7.788 7.186 20.18 6.955 20.726-3.389 7.919-10.78 12.646-20.277 12.973-6.188.214-12.12-2.041-16.697-6.346-4.829-4.537-7.598-10.895-7.598-17.44 0-9.859 6.369-18.812 15.847-22.274 1.973-.722 3.567-2.776 2.476-5.162-.859-1.875-3.185-2.52-5.158-1.798-12.44 4.546-20.798 16.294-20.798 29.23 0 8.552 3.619 16.857 9.929 22.788 5.819 5.469 13.307 8.445 21.19 8.444.358 0 .719-.006 1.078-.018 12.422-.427 22.536-6.984 27.04-17.509 2.812-6.392 4.38-20.857-9.827-29.85m-12.768 16.15c0 2.868-2.397 5.202-5.344 5.202-3.271 0-5.073-2.898-5.365-5.592-.555-5.135 2.2-7.926 4.609-9.363.977-.582 2.051-1.038 3.172-1.369 0 0 2.598 8.05 2.801 9.297.223 1.379.127 1.825.127 1.825" data-reactid="91"></path><g fill="#101010" data-reactid="92"><path d="m142.75 65.867c0 0-.516-4.094 0-4.726 11.981-14.67 11.718-34.407 11.718-34.407h7.344c-.126.678-3.794 25.512-19.06 39.13" data-reactid="93"></path><path d="m162.48 65.867c0 0 .516-4.094 0-4.726-11.981-14.67-12.603-34.407-12.603-34.407h-7.345c.126.678 4.681 25.512 19.948 39.13" data-reactid="94"></path><path d="m120.71 65.867c0 0-.515-4.094 0-4.726 11.981-14.67 12.644-34.407 12.644-34.407h7.345c-.126.678-4.721 25.512-19.989 39.13" data-reactid="95"></path><path d="m140.44 65.867c0 0 .516-4.094 0-4.726-11.98-14.67-11.677-34.407-11.677-34.407h-7.345c.126.678 3.755 25.512 19.02 39.13" data-reactid="96"></path><path d="m163.65 15.904h-45.905c-5.649-.067-7.345-.93-7.345-2.708 0 1.133 0 55.958 0 61.37h8.263v-54.15h41.31c2.741 0 4.591.871 4.591 3.61v43.32c0 2.523-1.514 3.124-8.996 3.947-.636.07-1.104 3.272-1.104 3.272h9.181c5.537 0 9.182-2.029 9.182-8.122v-42.42c0-6.093-3.645-8.123-9.182-8.123" data-reactid="97"></path><path d="m259.13 21.319h58.759c-.166-2.751-.963-4.513-3.673-4.513h-58.759c.167 2.752.963 4.513 3.673 4.513" data-reactid="98"></path><path d="m316.06 35.761h-62.43c.166 2.751.964 4.513 3.672 4.513h62.43c-.167-2.752-.963-4.513-3.672-4.513" data-reactid="99"></path><path fill-rule="evenodd" d="m378.49 61.03h-37.642v-4.512h37.642v4.512" data-reactid="100"></path><path d="m363.8 20.426v-6.318h-8.255v6.318h8.255" data-reactid="101"></path><path d="m387.67 18.612h-59.678c.167 2.751.964 4.513 3.673 4.513h59.677c-.166-2.752-.963-4.513-3.672-4.513" data-reactid="102"></path><path d="m389.51 35.761h-63.35c.166 2.751.963 4.513 3.673 4.513h63.35c-.166-2.752-.963-4.513-3.673-4.513" data-reactid="103"></path><path d="m317.72 64.11c-1.168-4.204-3.503-12.11-3.503-12.11h-8.263c0 0 2.677 9.02 3.742 12.521.523 1.718.286 2.467.16 3.387-.326 2.373-1.394 2.144-3.902 2.144h-35.806c-4.287 0-4.971-3.768-4.361-5.528 2.349-6.791 8.263-24.368 8.263-24.368h-8.263c0 0-5.711 17.13-8.01 23.951-.566 1.68-.422 3.659-.25 4.479.924 4.414 4.279 5.979 8.951 5.979h43.15c4.672 0 7.272-1.567 8.196-5.981.173-.821.523-2.234-.101-4.479" data-reactid="104"></path><path d="m376.65 42.98h-38.561c-3.396.032-5.509-.172-5.509-.902 0 0 0 21.352 0 26.18 0 6.094 2.727 6.317 8.264 6.317h45.904v-24.368c.0001-6.095-4.561-7.222-10.1-7.222m1.836 8.124v18.954h-33.97c-2.74 0-3.672-.643-3.672-2.707v-19.857h33.05c2.739 0 4.59-.237 4.59 1.805v1.805" data-reactid="105"></path><path d="m344.52 31.25v-.902-2.708h-8.263v2.708c0 2.157.702 4.296 1.537 5.744h11.08c-2.74 0-4.357-2.104-4.357-4.842" data-reactid="106"></path><path d="m383.08 30.346v-2.708h-8.263v2.708.902c0 2.738-1.617 4.842-4.362 4.842h11.1c.836-1.448 1.526-3.587 1.526-5.744" data-reactid="107"></path><path d="m425.31 25.832v41.519c0 2.523-.153 3.124-7.634 3.947-.637.07-2.061 3.386-2.061 3.386h9.396c5.102 0 8.572-1.367 8.561-6.431-.026-11.852 0-42.42 0-42.42h-8.262" data-reactid="108"></path><path d="m459.74 71.3c.586.993 0 1.354 0 1.354-5.779-1.489-13.224-9.586-15.15-22.45h8.263c-.0001-.0001 1.37 11.738 6.885 21.1" data-reactid="109"></path><path fill-rule="evenodd" d="m234.35 29.432h-35.818v-4.492h35.818v4.492" data-reactid="110"></path><path d="m233.43 15.904h-34.888c-6.191 0-8.263-.859-8.263-2.708 0 1.133 0 11.732 0 17.15 0 6.093 1.809 9.02 7.345 9.02h35.807 9.181v-15.343c-.002-6.093-3.646-8.123-9.182-8.123m.918 18.953h-32.13c-2.741 0-3.672-.871-3.672-3.609v-10.831h32.13c2.74 0 3.672-.032 3.672 2.708v11.732" data-reactid="111"></path><path d="m205.2 46.25c-3.938 5.417-12.175 14.665-23.18 20.2-.637.319-2.384 1.805-1.836 1.805 1.147 0 .479 0 3.672 0 7.262 0 27.05-13.988 29.609-22h-8.263" data-reactid="112"></path><path d="m223.1 46.25c-4.625 10.639-14.276 21.563-26.854 27.08-.654.286-1.926 1.24-1.377 1.24 1.376 0 2.066 0 2.754 0 8.409 0 29.902-12.262 33.741-28.317h-8.264" data-reactid="113"></path><path d="m247.2 53.02c0-6.095-3.645-10.944-9.181-10.944h-43.15c-1.977-.045-3.645-.172-4.132-1.241-.352-.771-1.376-.676-1.376-.676-1.069 6.146-2.452 10.509-8.263 13.538-.25.105-1.524 1.292-.688 1.354 1.619.119 4.143-.324 5.508-.677 3.185-.823 6.293-4.333 8.952-7.785h39.479c2.757.011 4.59.984 4.59 3.724v9.477c0 4.106-.745 11.507-14.502 11.507-.64 0-1.104 3.272-1.104 3.272h7.345c9.767 0 16.525-3.325 16.525-15.456v-6.093z" data-reactid="114"></path><path d="m455.61 39.37h-43.15c-2.741 0-4.344.015-4.132-2.595.224-2.775 1.377-17.262 1.377-17.262 3.71-.003 31.04-.176 46.13-1.016.884-.05.896-4.114 0-4.062-15.1.884-46.13.563-46.13.563h-8.264c0 0-.927 15.14-1.376 21.1-.453 6.01 3.186 7.785 8.722 7.785h50.5c-.165-2.75-.962-4.511-3.672-4.511" data-reactid="115"></path><path d="m398.69 71.3c-.585.993 0 1.354 0 1.354 5.778-1.489 13.682-9.586 15.608-22.45h-8.264c0-.0001-1.829 11.738-7.344 21.1" data-reactid="116"></path></g></svg></div>
                    </div>
                </footer>
            </div>
             <div v-if="loding" class="loding">
                <img  src="../../assets/img/loding.gif" width="40px"> 
             </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            list:[],
            newSongs:[],
            loding:true,
            imgNum:0,
        }
    },
    methods:{
        _initScroll(){
            if(!this.recommendWrap){
                this.$nextTick(()=>{this.recommendWrap = new BScroll(this.$refs.recommend,{
                click: true})
                });
            }
            else{
                this.recommendWrap.refresh();
            }
            
        },
        loadImg(){
            this.imgNum++;
        }
        
    },
    watch:{
        imgNum(value){
            if(value>=6)
            {
                this._initScroll();
                this.loding=false;
            }
        }
    },
    async created(){
        let list=await this.$.get('personalized');
        let newSongs=await this.$.get('personalized/newsong');
        this.list=list.result.slice(0,6);
        this.newSongs=newSongs.result;
        let arrlist=[];
        this.newSongs.forEach((item)=>{
           arrlist.push(item.song);
        })
        this.$store.commit('set_playList',arrlist);
        this._initScroll();
    }
}
</script>
<style lang="less" scoped>
.recommend{
    position: absolute;
    top:104px;
    bottom: 0px;
    width: 100%;
    overflow-y:hidden;
}
.recommendWrap{
    width: 100%;
}
.recommendWrap .content{
    padding-top: 20px;
    width: 100%;
}
.recommendWrap .topTitle{
    position: relative;
    padding-left: 9px;
    margin-bottom: 14px;
    font-size: 17px;
    height: 20px;
    line-height: 20px;
    &:after{
        content: " ";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -9px;
        width: 2px;
        height: 16px;
        background-color: #d33a31;
    }
    
}
.recommendSongs{
        width: 100%;
        padding-bottom: 24px;
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:flex-start;
        &>a{
            display: block;
            position: relative;
            width: 32%;
            padding-bottom: 16px;
            &>img{
                width: 100%;
            }
            &>span{
                    position: absolute;
                    right: 5px;
                    top: 2px;
                    z-index: 3;
                    padding-left: 13px;
                    color: #fff;
                    font-size: 12px;
                    background-position: 0;
                    background-repeat: no-repeat;
                    background-size: 11px 10px;
                    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMCI+PGcgb3BhY2l0eT0iLjE1Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNDAwMDAiIGQ9Im0yMiAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNmZmYiIGQ9Im0yMCAxNi43NzdjMCAxLjIzMy0xLjEyMSAyLjIzMy0yLjUwNiAyLjIzMy0xLjM4NCAwLTIuNTA2LTEtMi41MDYtMi4yMzN2LTIuNTUzYzAtMS4yMzQgMS4xMjItMi4yMzMgMi41MDYtMi4yMzMuMTc0IDAgLjM0My4wMTcuNTA2LjA0NnYtMS4zN2gtLjAzM2MuMDE3LS4yMi4wMzMtLjQ0MS4wMzMtLjY2NiAwLTQuNDE4LTMuNTgyLTgtOC04LTQuNDE4IDAtOCAzLjU4Mi04IDggMCAuMjI1LjAxNi40NDYuMDM0LjY2NmgtLjAzNHYxLjM3Yy4xNjMtLjAyOS4zMzMtLjA0Ni41MDUtLjA0NiAxLjM4NCAwIDIuNTA2Ljk5OSAyLjUwNiAyLjIzM3YyLjU1M2MwIDEuMjMzLTEuMTIyIDIuMjMzLTIuNTA2IDIuMjMzcy0yLjUwNS0uOTk5LTIuNTA1LTIuMjMzdi0yLjU1M2MwLS4yNTguMDU5LS41MDEuMTQ4LS43My0uMDg1LS4xNDgtLjE0OC0uMzEtLjE0OC0uNDkzdi0yLjY2N2MwLS4wMjMuMDEyLS4wNDMuMDEzLS4wNjctLjAwNC0uMDg4LS4wMTMtLjE3Ni0uMDEzLS4yNjYgMC01LjUyMyA0LjQ3Ny0xMCAxMC0xMCA1LjUyMyAwIDEwIDQuNDc3IDEwIDEwIDAgLjA5LS4wMDkuMTc4LS4wMTQuMjY2LjAwMi4wMjQuMDE0LjA0NC4wMTQuMDY3djJjMCAuMzA2LS4xNDUuNTY5LS4zNi43NTMuMjI0LjMzNC4zNi43Mi4zNiAxLjEzOHYyLjU1MiIvPjwvc3ZnPg==);
                    text-shadow: 1px 0 0 rgba(0,0,0,.15);
            }
            &>p{
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    padding: 6px 2px 0 6px;
                    line-height: 1.2;
                    font-size: 13px;
                    color: #333;
            }    
        }
    }
.newSongs a{
    display: block;
    padding: 6px 10px;
   
}
.newSongs .bdBottom{
    display: flex;
    color: #333;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.newSongs .lf{
    flex: 1;
}
.newSongs .lr{
    flex: 0 0 22px;
    display: flex;
    align-items: center;
    padding: 0 10px;
}
.newSongs .lf .title{
    height: 25px;
    line-height: 25px;
    font-size: 17px;
}
.newSongs .lf .desc{
    height: 18px;
    line-height: 18px;   
    font-size: 12px;
    color: #888;
}

.sghost{
    display: inline-block;
    width: 12px;
    height: 8px;
    margin-right: 4px;
}
.sgchply {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-position: -24px 0;
}
.m-homeft {
    position: relative;
    padding-top: 53.3%;
    margin-top: 4px;
    background: url(../../assets/img/recommand_bg.png) no-repeat;
    background-size: contain;
}
.m-homeft .ftwrap{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    text-align: center;
}
.m-homeft .logo{
    padding-top: 16.9%;
}
.m-homeft .logosvg{
    display: block;
    margin: 0 auto;
    width: 230px;
    height: 44px;
}
.loding{
    width: 40px;
    height: 40px;
    margin: 40% auto 0;
}

.u-hmsprt {
    background: url(../../assets/img/icon2x.png) no-repeat;
    background-size: 166px 97px;
}
@media screen and (-webkit-min-device-pixel-ratio: 3){
    .u-hmsprt {
        background-image: url(../../assets/img/icon3x.png) no-repeat;
    }
}
</style>
