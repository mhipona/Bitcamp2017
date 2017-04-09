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
            var replacedText = text.replace(/./gi, 'dank');

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
