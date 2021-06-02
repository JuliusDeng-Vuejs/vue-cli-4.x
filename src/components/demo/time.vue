<template>
      <div>
					<div zzz>
						20200202
					</div>
      </div>
</template>
<script>
    export default{
        data(){
            return{
                time:Date.parse(new Date()),
								year: {},
								month: {},
								date: {},
								timeXia: {}
						}
         },
				 methods: {
					 getTime() {
						  var now = new Date(); 
							  var year = now.getFullYear(); //得到年份
								this.year = year;
								console.log(year);
								 var month = now.getMonth();//得到月份
								 this.month =month;
							   var date = now.getDate();//得到日期
								 this.date = date
								 var day = now.getDay();//得到周几
								 var hour = now.getHours();//得到小时
								 var minu = now.getMinutes();//得到分钟
								 var sec = now.getSeconds();//得到秒
								 var MS = now.getMilliseconds();//获取毫秒
								 return this.timeXia = hour +' ' + minu + ' ' + sec
								
					 }
				 },
    }
</script>
<style>
	.zzz{
		font-size: 500px;
		/* font-weight: 600; */
	}
</style>
