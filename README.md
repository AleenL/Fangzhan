###对 SONY 中国首页进行的 模仿 

主要运用的技术有：CSS、HTML、JQuery、JS组件化

###为什么想要实现 SONY 的首页呢？

大概是因为我比较喜欢玩游戏的原因吧，有一天在浏览索尼主页的时候就产生了要不进行一下索尼首页的模仿，在查看了索尼的网页的时候发现要实现这样的效果其实并没有太大的技术问题，牵扯到的技术问题大概只有几种。
  - 布局问题
  - 轮播问题
  - CSS问题
所以就没有什么由于开始写代码，经过了大概一周的时间就完成了首页的模仿

###有那些难点？

1.在实现当点击图片时，图片会增加一层阴影，我当时采用befor这个伪元素来进行实现，但是发现效果并不好，你无法让下面的的p元素进项隐藏和出现，而且伪元素的边框增大时，就会影响到整个ul的布局，让原本在同一行的li元素由于宽度的增加而自动下移到下一行，这样就会影响到布局的实现，所以，最行之有效的方法就是，增加一个新的div，然后使用绝对定位，这样就不会影响文档流。

所以我在一个'li'里面添加了两张图片，一张在文档流内，一张使用绝对定位，当鼠标移入的时候，绝对定位的透明度由0变为1，这样就可以在不影响文档流的基础上实现阴影的效果

2.首个轮播下，侧边小图片的实现。在第一个轮播图中，侧边有小的图片会随着轮播的变化而变化，我首先想到的是在使用一个轮播，但是在实现过程中我发现了大图片的变化和小图片的变化不同步，而且由于侧边的显示图片的高度是一个图片的4倍，这样在使用轮播下，会造成轮播已经还在进行中，图片已经显示完毕，造成图片下方有巨大的空白。

所以我就使用了，只使用一个轮播，然后获取轮播中的‘li’的下标，当这个下标等于侧边图片栏展示数量的话，就使用“marginTop”进行往下移动一个负的小图片高度，这样，侧边图片就问往下一个图片，简单的实现了该功能。

###有那些收获呢？

在实现页面的过程中，我发现很多地方的CSS都存在着复用的地方，如果单独的一个一个写的话，就会增加网页的代码量，所以使用一个全局的Class命名，这样如果在使用该效果的时候，就不用再对元素的样式进行编写了，只要单独加入一个class名就好了。
比如，很多地方需要固定宽度为960px，margin为0 auto，我们就可以使用一个命名为”M960"的class名，这样在一些元素需要实现这个样式的时候就这加入“M960"这个class名就好了。

###有哪些不足呢？

1.HTML元素的命名可读性不足，在对div进行命名的时候，有的时候会采用一些简单的英文，这样就会导致代码的可读性不足，让人不明白为什么要这样命名

2.过多的div，由于对HTML6的认识不足，会导致大量的DIV标签，太多没有意义的标签就会使得整个页面看起来有些杂乱无章

所以还需要跟着大牛们脚步慢慢改进，前端是一个需要不断学习和进步的圈子，过度的安逸就会使得自己越来越更不上脚步，这样这能离这个行业越来越远


