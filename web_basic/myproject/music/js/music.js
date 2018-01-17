$(document).ready(function(){ 
	 //音乐播放器需要，播放器对象player，音乐对象，用play去播放music对象 
	 // 创建music对象,用于保存音乐的属性 
	 function Music(){ 
	   
	 } 
	 Music.prototype.src= "";//音乐路径 
	 Music.prototype.img =""; //图片路径
	 Music.prototype.num=""; //编号
	 Music.prototype.musicName=""; //歌名
	 Music.prototype.name=""; //歌手名
	 //创建player对象 
	 function Player(){ 
	   
	 } 
	 Player.prototype.audio = document.getElementById("audio"); 
	// 目前播放第几首歌 
	 Player.prototype.playIndex=0; 
	 Player.prototype.isplay = false; 
	// 定义播放器的方法 
	 Player.prototype.rangUpdate = function(){ 
		  //this.audio.ontimeupdate =function() 音乐播放器播放音乐时监听 
		  //把进度条和音乐的时间长度结合起来 
		  //音乐每播放一秒进读条就会前进一个单位 this.duration音乐的总长度 
		  this.audio.ontimeupdate =function(){ 
			   //把进度条的总长度设为音乐的总长度 
			  $(".range").attr("max",this.duration); 
				
			  //设置进度条的值为播放的时间 
			  $(".range").val(this.currentTime); 
			  //当一首歌播放完再去播放下一首 
			  if (this .currentTime == this.duration ) { 
				player.nextMusic(); 
			  }     
		  } 
	 }; 
	 Player.prototype.playMusic =function(){ 
		  //向播放器添加音乐路径 
		  $(this.audio).attr("src",musicModels[this.playIndex].src); 
		  this .audio.play(); 
		  //换音乐图片 
		  $(".pic").attr("src",musicModels[this.playIndex].img); 
		  //波让其的状态 
		  this.isplay= true; 
	 }; 
	 Player.prototype.nextMusic = function(){  
		  //越界问题
		  if (this.playIndex >= musicModels.length - 1) { 
			this.playIndex = 0;  
		  }else{ 
			this.playIndex = this .playIndex + 1; 
		  } 
		  //改变音乐类表的对应项的样式 
		  this.playMusic(); 
		  $(".music").eq(this.playIndex).addClass("musicPlay") 
		  .siblings() 
		  .removeClass("musicPlay"); 
	 }; 
	 Player.prototype.preMusic =function(){ 
		  if (this.playIndex <= 0) { 
			this.playIndex = musicModels.length-1; 
		  }else{ 
			this.playIndex = this.playIndex - 1; 
		  } 
		  //改变音乐类表的对应项的样式 
		  this.playMusic(); 
		  $(".music").eq(this.playIndex).addClass("musicPlay") 
		  .siblings() 
		  .removeClass("musicPlay"); 
	 }; 
	 Player.prototype.playOrPause = function(){ 
		  if(this.isplay){ 
				this.audio.pause(); 
				$(".play").attr("src","res/img/stop.png"); 
		  }else{ 
				this.audio.play(); 
				$(".play").attr("src","res/img/play.png"); 
		  } 
		  this.isplay = !this.isplay; 
	 }; 
	// js文件从此向下 
	// 创建音乐数组 
	 var musicModels = []; 
	 //创建音乐播放器对象 
	 var player= new Player(); 
	 $.getJSON("data/pbl.json",function(data){ 
		//  console.log(data); 
		  for (var i=0;i<data.length;i++) { 
			  var music = new Music(); 
			  music.src= "res/" + data[i].src; 
			  music.img= "res/" + data[i].img; 
			  music.musicName = data[i].musicName; 
			  music.name = data[i].name; 
			  music.num = data[i].num; 
			  musicModels.push(music); 
			
		  } 
		  //播放音乐 
		  isertData(); 
		  player.playMusic(); 
		  player.rangUpdate(); 
		  $(".music").eq(player.playIndex).addClass("musicPlay") 
		  .siblings() 
		  .removeClass("musicPlay"); 
	 }); 
	 function isertData(){ 
		//先要遍历数据源数组 
		for (var i=0;i<musicModels.length;i++) { 
			//创建一个DIV元素表示,音乐中的一行,给这个div添加music样式 
			//和绑定自定义属性index来记录这个div是列表中的第几行 
			var $musicDiv = $("<div class = 'music' data-index = "+ i +"></div>"); 
			//将这个div添加到musicBox 中 
			$(".musicBox").append($musicDiv); 
			//设计musicdiv中的子元素,子元素有两个,一个是歌曲的图片,歌曲的信息 
			//创建一个img 显示歌曲图片 
			var $img = ("<img src =" + musicModels[i].img+" />"); 
			$musicDiv.append($img); 
			//创建一个音乐信息的p标签 
			var $musicMsg = $("<p>"+musicModels[i].musicName+" 演唱者："+musicModels[i].name +"</p>"); 
			$musicDiv.append($musicMsg); 
		} 
		$(".music").click(function(e){ 
		   //从被选中的div中读取自定义 index属性 
		   player.playIndex = $(this ).data("index"); 
		   player.playMusic(); 
		   //被选中的div设置musicplay样式，该div的兄弟元素要去掉musicplay样式 
		   //保证只有一个div有musicplay 
		   $(this).addClass("musicPlay").siblings().removeClass("musicPlay");   
		}); 
	 } 
	  
	 $(".play").click(function(){ 
		player.playOrPause(); 
	 }); 
	   
	 $(".next").click(function(){ 
		player.nextMusic(); 
	 }); 
	 $(".pre").click(function(){ 
		player.preMusic(); 
	 }); 
})