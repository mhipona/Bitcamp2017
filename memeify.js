/* Implements the button */
var images = document.getElementsByTagName('img'), length = images.length;
var words = document.getElementsByTagName('*'), tlength = words.length;
  
var memes = [
	'http://www.wpromote.com/blog/wp-content/uploads/2015/06/morpheus-meme.jpg',
	'http://theawesomedaily.com/wp-content/uploads/2017/01/most-offensive-memes-6-1.jpg',
	'https://contexts.org/files/2013/11/JAR-meme-drunk-baby.jpeg',
	'https://fthmb.tqn.com/Qt1YuEXTl3Tmu8xz_ovq5BAf2xQ=/735x0/about/success-56a9fd1f3df78cf772abee09.jpg',
	'https://s-media-cache-ak0.pinimg.com/736x/68/d1/28/68d128d32e359e333bb44c6da35c072f.jpg',
	'https://thetab.com/blogs.dir/91/files/2017/01/maxresdefault-1.jpg',
	'http://i0.kym-cdn.com/entries/icons/medium/000/003/619/Untitled-1.jpg',
	'https://img.memesuper.com/c290bc11e019c403771d87c87909b7ee_popular-memes-image-memes-at-memes-most-popular_600-392.jpeg',
	'https://s-media-cache-ak0.pinimg.com/736x/b0/09/07/b00907cd233b66d07a051ed45f2e46aa.jpg',
	'http://i3.kym-cdn.com/entries/icons/original/000/006/151/tumblr_lltzgnHi5F1qzib3wo1_400.jpg',
	'https://media2.giphy.com/media/ehc19YLR4Ptbq/giphy.gif',
	'https://img.memesuper.com/1a9018436e732bf7df11b5c0a894eed2_2048-meme-gif-owned-meme-gif_400-400.gif',
	'https://media.giphy.com/media/rjibxsFWbKQ8/giphy.gif',
	'https://media.tenor.co/images/20828bc040c2d7dd237de8e0a9803a0e/tenor.gif',
	'https://media.tenor.co/images/4ec2a04fd4553fd23d4742108889037c/tenor.gif',
	'https://img.memesuper.com/d51e6823867672de9ea439503738aa8a_4chans-frog-meme-went-pepe-memes-sad_550-535.jpeg',
	'https://media.tenor.co/images/1c59360c9836f5fb771a9293fee63327/tenor.gif',
	'https://media1.giphy.com/media/SduJilGpbXqAE/giphy.gif',
	'http://picsmine.com/wp-content/uploads/2017/02/LOL-Meme-LOLOLLOLOLOL.gif',
	'https://media.giphy.com/media/26FPr0GKKPaPiUbbG/giphy.gif',
	'http://pa1.narvii.com/5858/c5bea9a6d774cc07af1873b2e3ffc472dd73c538_hq.gif',
	'https://secure.static.tumblr.com/e1c5f97b9791ce572b6065e19b5adcee/1dpn6ec/wJHobxk6f/tumblr_static_tumblr_static__640.gif',
	'http://ci.memecdn.com/7790552.gif',
	'https://img.memesuper.com/15106c886713d49d31abf1ff5e260f58_1000-images-about-gif-on-funny-memes-gif_455-364.gif',
	'https://img.memesuper.com/e69021f47f73e7d5effe56961f0ada1d_animated-funny-memes-gif-funny-memes-gif_496-312.gif',
	'https://media.giphy.com/media/CdXGXGX8WUgpi/giphy.gif',
	'http://cdn2-www.craveonline.com/assets/mandatory/legacy/2016/03/man_file_1065676_962755.gif',
	'https://m.popkey.co/e970db/LWqyp.gif',
	'https://s-media-cache-ak0.pinimg.com/originals/51/67/06/51670674e34e8d40da4d4eedc07d4bea.gif',
	'http://acidcow.com/pics/20111026/hilarious_drunk_and_wasted_people_32.gif',
	'http://img1.izismile.com/img/img5/20120406/1000/hilarious_obama_animated_gifs_07.gif',
	'http://reblog-gif.tumblr.com/post/69741631033/http-reblog-gif-tumblr-com',
	'https://media.giphy.com/media/l46Ck8SQ1H26sRMkg/giphy.gif',
	'https://media.giphy.com/media/7VvnIm3TbXcJO/giphy.gif',
	'https://33.media.tumblr.com/5c5e1cfea31f1d6e490cc00581d95179/tumblr_mvg6t3TnPO1sig9gio1_400.gif',
	'http://i.imgur.com/7wjjB5a.gif',
	'https://img.memesuper.com/2a5cac063e237c34b379c42287494b28_patrick-star-meme-gif-meme-gifs_498-298.gif',
	'https://media.tenor.co/images/f72dfd15ebe72fedd7d3aa10359f211b/tenor.gif',
	'https://m.popkey.co/49397b/J6QL6_s-200x150.gif',
	'https://media.tenor.co/images/3d4747d808946c00e660b544b18c41fe/tenor.gif',
	'http://i1.kym-cdn.com/photos/images/newsfeed/000/248/056/375.gif',
	'http://media.giphy.com/media/12WdA5ngyLO90Y/giphy.gif',
	'https://media.giphy.com/media/YBFKy5WgEK7MQ/giphy.gif',
	'https://s-media-cache-ak0.pinimg.com/originals/b2/55/27/b2552714975abbbca7af3fc81c16b4ac.gif',
	'http://vignette3.wikia.nocookie.net/meme/images/1/14/BRBR_HUEHEUHEU_GIF.gif/revision/latest?cb=20130510052058',
	'https://s-media-cache-ak0.pinimg.com/originals/68/61/77/686177c0c85e01b427293571f0df47e7.jpg',
	'https://img.memesuper.com/e34fb3272a5f5c534c32dfd48a4aafe8_funny-troll-gifs-find-meme-lol-gif_350-300.gif',
	'https://19818-presscdn-pagely.netdna-ssl.com/wp-content/uploads/067/5e/whiguyblink.gif',
	'http://a.fod4.com/misc/Squidward%20Twerk.gif',
	'https://media.giphy.com/media/26tPhnCcoLrhG1CYE/giphy.gif',
	'https://s-media-cache-ak0.pinimg.com/originals/11/ad/b9/11adb96c3572045c6b887f9004f13ae4.jpg',
	'http://img.memecdn.com/I-whip-my-bear-back-and-forth_o_129740.gif',
	'https://img.wonkette.com/wp-content/uploads/2015/10/kermit.gif',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLxby2D7riOEUvWbMCPWdOZ5A7JXYadsqftZ_ib4YKelWYOc6s',
	'https://img.memesuper.com/78c73cc758bf8d40bd99790ac6fcad36_meme-gif-lol-y-yao-ming-by-meme-lol-gif_640-360.gif',
	'http://24.media.tumblr.com/tumblr_medaqyYb8T1qj9xato1_250.gif',
	'https://img.memesuper.com/29d48f5a289fad44ce32220477e44d40_-para-gifs-memes-naruto-2-meme-gifs_1000-1018.gif',
	'https://s-media-cache-ak0.pinimg.com/originals/21/19/cb/2119cb3345aea8e4dafc6311a4a410a1.gif'

];


for (var i = 0; i < length; i++) {
	var memeIndex = Math.floor(getRandomImage(memes)); //Gets index of memes array
    images[i].src = memes[memeIndex];
    document.body.style.backgroundImage = "url('https://media1.giphy.com/media/gGs07Iz8IfiE0/giphy.gif')";
 }



function getRandomImage(imageArray) {
  	return Math.floor(Math.random() * imageArray.length);
}


var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			var replacedText = text.replace(/the/gi, 'MLG 360 No scope 420 Blaze It');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

// function replaceWords(elements) {
// 	for (var i = 0; i < elements.length; i++) {
// 		var element = elements[i];
		
// 		for (var j = 0; j < word.childNodes.length; j++) {
// 			var node = element.childNodes[j];
			
// 			if (node.nodeType === 3) {
// 				var text = node.nodeValue;
// 				var replacedText = text.replace(/\bTrump\b, 'dank');

// 				if (replacedText !== text) {
//                 	element.replaceChild(document.createTextNode(replacedText), node);
// 				}

// 			}
// 		}	
// 	}
// }
