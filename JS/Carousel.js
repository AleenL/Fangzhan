var Carousel = (function(){
			function _Carousel($ct){
			this.$ct = $ct;
			this.init();
			this.bind();
		}
		_Carousel.prototype.init = function(){
			var $imgCt = this.$imgCt = this.$ct.find(".img-ct")

			var $firstImg = this.$firstImg = $imgCt.find("li").first(),
				$lastImg = this.$lastImg = $imgCt.find("li").last(),
				$preBtn = this.$preBtn = this.$ct.find(".pre_btn"),
				$nextBtn = this.$nextBtn = this.$ct.find(".next_btn"),
				$bullet = this.$bullet = this.$ct.find(".slide_carousel_content")
			this.curPageIndex = 0;
			this.imgLength = $imgCt.children().length;
			this.isAnimate = false;

			$imgCt.prepend(this.$lastImg.clone());
			$imgCt.append(this.$firstImg.clone());

			$imgCt.height(this.$firstImg.height() * $imgCt.children().length);
			$imgCt.css({
				top: -this.$firstImg.height()
			})
		};
		_Carousel.prototype.bind = function(){
			var _this =this;
			setInterval(function(){
				_this.playNext()
			},4000)
			this.$preBtn.on("click",function(e){
				e.preventDefault();
				$(_this.$bullet).find('li').eq(0).animate({marginTop:0})
			})

			this.$nextBtn.on("click",function(e){
				e.preventDefault();
				$(_this.$bullet).find('li').eq(0).animate({marginTop:'-70px'})
			})
		}
		_Carousel.prototype.playNext = function(){
			this.curPageIndex=this.curPageIndex||0;
			var _this = this;
			if(this.isAnimate) return;
			this.isAnimate = true;
			this.$imgCt.animate({
			top:'-='+ _this.$firstImg.height()
				},function(){
				_this.curPageIndex++;
				if(_this.curPageIndex === _this.imgLength){
					_this.$imgCt.css({
					"top":- _this.$firstImg.height()
					})
					_this.curPageIndex = 0;
				}
			});
			_this.isAnimate = false;
			this.setBullet(_this.curPageIndex)
		};
		_Carousel.prototype.setBullet = function(idx){
			var _this = this;
			idx = _this.curPageIndex +1
			if(idx === 5){ idx=0}
			setTimeout(function(){_this.$bullet.find("li")
				.removeClass("active")
				.eq(idx)
				.addClass("active")},300)
			if(idx ===4){
				this.$bullet.find("li").eq(0).animate({marginTop:'-70px'})
			}else{
				this.$bullet.find("li").eq(0).animate({marginTop:0})
			}
		}
		return{
			init: function($ct){
				$ct.each(function(index,node){
					new _Carousel($(node));
				})
			}
		}
	})();

	Carousel.init($(".carousel"));
	