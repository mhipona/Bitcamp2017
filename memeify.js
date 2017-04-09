/* Implements the button */
var images = document.getElementsByTagName('img'), length = images.length;
  
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
	'http://i3.kym-cdn.com/entries/icons/original/000/006/151/tumblr_lltzgnHi5F1qzib3wo1_400.jpg'

];


for (var i = 0; i < length; i++) {
	var memeIndex = Math.floor(getRandomImage(memes)); //Gets index of memes array
    images[i].src = memes[memeIndex];
 }


function getRandomImage(imageArray) {
  	return (Math.random() * imageArray.length);
}


// function scaleImage(imageToReplace) {
// 	img = new Image();
// 	img.src = imageToReplace.src;
// 	// img 
// 	  	var canvas = document.createElement('canvas');
// 	  	var width = imageToReplace.width;
// 	  	var height = imageToReplace.height;
// 		var ctx = canvas.getContext('2d');
	    
// 	    canvas.width = width;
// 	    canvas.height = height;
// 	    ctx.drawImage(img, 0, 0, width, height);

// 	    return canvas.toDataURL();
// 	    // img.width = width;
// 	    // img.height = height;
// 	    // imageToReplace.src = img.src;
// }
