
	var Carousel = (function(){
			function _Carousel($ct){
			this.$ct = $ct;
			this.init();
			this.bind();
		}
		_Carousel.prototype.init = function(){
			var $imgCt = this.$imgCt = this.$ct.find(".img-items")


			var $firstImg = this.$firstImg = $imgCt.find("li").first(),
				$lastImg = this.lastImg = $imgCt.find("li").last();

			this.curPageIndex = 0;
			$(window).width()
			this.imgLength = $imgCt.children().length;
			this.isAnimate = false;

			$imgCt.prepend(this.lastImg.clone());
			$imgCt.append(this.$firstImg.clone());

			$imgCt.width(this.$firstImg.width() * $imgCt.children().length);
			$imgCt.children().css({
				'width':$(window).width()
			})
			$imgCt.css({
				"left" : -$(window).width()
			})
		};
		_Carousel.prototype.bind = function(){
			var _this =this;
			setInterval(function(){
				_this.playNext()
			},3000)
		};
		_Carousel.prototype.playNext = function(){
			this.curPageIndex=this.curPageIndex||0;
			var _this = this;
			if(this.isAnimate) return;
			this.isAnimate = true;
			this.$imgCt.animate({
				left:"-="+$(window).width()
			},function(){
				_this.curPageIndex++;
				if(_this.curPageIndex === _this.imgLength){
					_this.$imgCt.css({
						"left":-$(window).width()
					})
					_this.curPageIndex = 0;
				}
			})
			_this.isAnimate = false;
		};
		return{
			init: function($ct){
				$ct.each(function(index,node){
					new _Carousel($(node));
				})
			}
		}
	})();

	Carousel.init($(".main-second-carousel"));