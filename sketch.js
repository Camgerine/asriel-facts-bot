var Twit = require('twit');

var fs = require('fs'),
    path = require('path'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config);

var choice;

tweeter();

setInterval(tweeter, 60*60*1000);

function tweeter() {

fact = ["Asriel's name is a combination of his parents' names (Asgore and Toriel).", //0
        "Asriel Dreemurr's name is an anagram of Serial Murderer.", //1
        "Asriel's front-facing overworld sprite is slightly asymmetrical, such as with a single pixel placement on his head. However, his back-facing sprite has a symmetrical head.", //2
        "Omega Flowey's red and green eyes are the exact same shades of red and green that are used as default color choices in MS Paint.", //3
        "Omega Flowey's metal tubes around his TV head are shaped to resemble flower petals.", //4
        "Omega Flowey's TV head actually has two antennas coming out of the top, but they go off-screen in game. Ripping the game's assets allows you to clearly see them in full.", //5
        "Flowey's petals and stem use the exact same yellow and green colors as Asriel's striped shirt.", //6
        "Asriel's winged boss form is shaped to somewhat resemble the Delta Rune.", //7
        "The blue outline on Asriel's overworld sprite prevents his black pants from blending in with the background.", //8
        "Asriel Dreemurr is the best Undertale character.", //9
        "The color code for the green on Asriel's shirt is 9BFD71.", //10
        "The color code for the yellow on Asriel's shirt is FFF200.", //11
        "The color code for Asriel's blue outline is 283197.", //12
        "Upon ripping the game's assets, it can be seen that one of Asriel's talking sprites has an error where a few pixels are a dark reddish-brown (color code: 3D120E) instead of black.", //13
        "\"Everytime someone calls final-boss Asriel hot an angel gets its wings.\" - Toby Fox, quote taken from the Undertale Art Book.", //14
        "Asriel's last name is Dreemurr. It's NOT Dreemur, Dremurr, Dremmur, Dreemuur, or anything like that. It's \"D-R-E-E-M-U-R-R\". Learn how to spell.", //15
        "Asriel's boss form is very handsome.", //16
        "Asriel and his parents do not have visible tails, despite common depictions in fan art.", //17
        "Flowey does not appear to have any leaves, despite common depictions in fan art.", //18
        "Asriel Dreemurr is very cute and deserves lots of love and respect.", //19
        "Asriel and Chara are siblings so please don't ship them together, it's gross. I don't care that Chara was adopted, it's still gross. (Frisk could also be considered Asriel's sibling since you can choose to live with his mom, Toriel, at the end of the game. So stop shipping them!)", //20
        "Asriel has a noticeably slimmer body type than both of his parents. This is true for both his child and adult forms.", //21
        "Flowey is physically unable to feel love because he lacks a SOUL.", //22
        "If the player decides to backtrack, they might catch a glimpse of Flowey stalking them before he retreats back into the ground.", //23
        "Flowey's face appears to be white, but in his overworld sprite, some of the pixels around his face are actually a very pale cream (color code: FEFFDF). This is easier to see if you view the ripped sprite assets.", //24
        "When Asriel first transforms into his boss form (while his name is appearing on the screen), part of the outline around his waist is strangely missing. This is fixed once the battle begins, along with a few other subtle changes.", //25
        "Asriel's boss form does not have a true official color scheme since it does not appear in the overworld. However, it is assumed that his robes are the same color as his mother's.", //26
        "If you draw fetish art of Asriel or Flowey, then you are a disgusting and terrible person and I will block you from following this account.", //27
        "Flowey's voice clip (\"Hmm, that's a wonderful idea!\") is edited audio from an old McDonald's commercial from the 1960s. Omega Flowey's cries are also taken from this commercial.", //28
        "Asriel Dreemurr's boss form is also known as the Absolute GOD of Hyperdeath.", //29
        "The name \"Omega Flowey\" is an unofficial name coined by fans to refer to Flowey's boss form. He is not called by an official name in-game, although the files refer to him as \"Photoshop Flowey\" and the code calls him \"Flowey X\".", //30
        "The color-changing sprite used inside the wings of Asriel's final form depicts buildings resembling those found in Fourside from Earthbound.", //31
        "During the flashback cutscene, Asriel's silhouette seems to depict him with horns, despite the fact that he does not have any horns as a child. The horns are no longer present for the rest of the scenes during this flashback sequence.", //32
        "Flowey has exactly six petals. No more, no less.", //33
        "Asriel's shirt in the flashback cutscene is different from the shirt he wears otherwise; it only has 1 stripe, while his normal shirt has multiple."]; //34

images = ["Art Book.png", //0
         "Asriel and Parents.png", //1
         "Boss Sprite.png", //2
         "Buildings.png", //3
         "Colors.png", //4
         "Delta Rune.png", //5
         "Eye Color.gif", //6
         "Flashback.png", //7
         "Flowey Overworld.png", //8
         "Outline.png", //9
         "Overworld.png", //10
         "Petals.png", //11
         "Shirt Stripes.png", //12
         "Stalking.png", //13
         "Talking.png", //14
         "Tubes.png", //15
         "TV.png"]; //16

var tweet = fact[Math.floor((Math.random() * fact.length))];

if (tweet == fact[2]) {
    choice = 10;
}
else if (tweet == fact[3]) {
    choice = 6;
}
else if (tweet == fact[4]) {
    choice = 15;
}
else if (tweet == fact[5]) {
    choice = 16;
}
else if (tweet == fact[6]) {
    choice = 4;
}
else if (tweet == fact[7]) {
    choice = 5;
}
else if (tweet == fact[8]) {
    choice = 9;
}
else if (tweet == fact[13]) {
    choice = 14;
}
else if (tweet == fact[14]) {
    choice = 0;
}
else if (tweet == fact[21]) {
    choice = 1;
}
else if (tweet == fact[23]) {
    choice = 13;
}
else if (tweet == fact[24]) {
    choice = 8;
}
else if (tweet == fact[25]) {
    choice = 2;
}
else if (tweet == fact[31]) {
    choice = 3;
}
else if (tweet == fact[32]) {
    choice = 7;
}
else if (tweet == fact[33]) {
    choice = 11;
}
else if (tweet == fact[34]) {
    choice = 12;
}
else {
    choice = null;
}

    console.log(tweet);
    console.log(choice);

if (choice == null) {
    T.post('statuses/update', { status: tweet }, tweeted);

    function tweeted(err, data, response) {
      if (err) {
        console.log(err);
      } else {
        console.log('Success: ' + data.text);
        console.log(response);
      }
    }
}
else {
    var image_path = path.join(__dirname, '/images/' + images[choice]),
        b64content = fs.readFileSync(image_path, {encoding: 'base64' });

    console.log('Uploading an image...');

    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
        if (err){
          console.log('ERROR:');
          console.log(err);
        }
        else{
          console.log('Image uploaded!');
          console.log('Now tweeting it...');

          T.post('statuses/update', {
            status: tweet,
            media_ids: new Array(data.media_id_string)
          }, tweetedImg);

          function tweetedImg(err, data, response) {
            if (err){
              console.log('ERROR:');
              console.log(err);
            }
            else{
              console.log('Posted an image!');
              console.log('Success: ' + data.text);
              console.log(response);
            }
          }
        }
    }
    );
}
}