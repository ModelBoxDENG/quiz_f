<template>
 <div>
 <float-icons padding="10 10 60 10" class="icons-warp">
  <div class="float-icon-item">
  <img src="../assets/alarm-clock.png" alt="">
  <span>{{str}}</span>
  </div>
 </float-icons>
 </div>
</template>

<script>
import FloatIcons from '@/components/s-icons'
export default {
  name:'Timer',
  data () {
    return {
      h:0,//定义时，分，秒，毫秒并初始化为0；
      m:0,
      ms:0,
      s:0,
      time:0,
      str:'',
      mytime:''
    }
  },
  components: {
    'float-icons': FloatIcons
  },

  methods:{


    timer(){   //定义计时函数
      this.ms=this.ms+50;         //毫秒
      if(this.ms>=1000){
        this.ms=0;
        this.s=this.s+1;         //秒
      }
      if(this.s>=60){
        this.s=0;
        this.m=this.m+1;        //分钟
      }
      if(this.m>=60){
        this.m=0;
        this.h=this.h+1;        //小时
      }
      this.str =this.toDub(this.h)+":"+this.toDub(this.m)+":"+this.toDub(this.s)+""/*+this.toDubms(this.ms)+"毫秒"*/;
      // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
    },

     start(){  //开始
       this.time=setInterval(this.timer,50);
    },

     stop(){  //暂停
      clearInterval(this.time);
    },

     toDub(n){  //补0操作
      if(n<10){
        return "0"+n;
      }
      else {
        return ""+n;
      }
    },

   toDubms(n){  //给毫秒补0操作
    if(n<10){
      return "00"+n;
    }
    else {
      return "0"+n;
    }

  }

  },

  created: function () {
    this.$nextTick(function () {
      this.start();
    })
  },
}
</script>

<style lang='scss' scoped>
.icons-warp {
 border-radius: 25px;
 .float-icon-item {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 position: relative;
 top:0px;
 left:0px;
 width: 50px;
 height: 50px;
 img {
  width: 25px;
  height: 25px;
  margin-bottom: 3px;
 }
 span {
  font-size: 9px;
  color: #666666;
 }
 }
}
</style>
