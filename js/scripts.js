//Constructors
var Person = function(name, age, astrological, occupation, hobby, profileImage, score, aboutMe) {
  this.name = name;
  this.age = age;
  this.astrological = astrological;
  this.occupation = occupation;
  this.hobby = hobby;
  this.profileImage = profileImage;
  this.likeScore = score;
  this.aboutMe= aboutMe;
}

var Messages = function(name, localLikeScore) {
  this.name = name;
  this.localLikeScore = localLikeScore;
}
//Prototype Methods
Person.prototype.firstName = function() {
  var splitName = this.name.split(" ");
  return splitName[0];
}
//Profile Information
var profileNames = ["Dutchess Capreanu", "Supul Sinac", "Brenda Smith"];
var profileAges = [30, 27, 25];
var profileAboutMes = [
                        "Just moved to the area from Transylvania. Back in the market for love after a misunderstanding with the locals. No garlic please.",

                        "On the prowl for that special someone who can respect my space when I need it (regular monthly trips).",

                        "Vegan.  Not really sure what I am doing on here, my friends made me set up a profile. Must love dogs."

                      ];
var profileAstrologicals = ["Capricorn","Leo","Virgo"];
var profileOccupations = ["Night Shift", "Bartender", "Wage Slave"];
var profileHobbies = ["Candelabra", "Hunting", "Netflix"];
var profileImages = ["vampire", "wolf", "basic"];
var profileLikeScore = [10, 10, 10];

//Global variables
var Player = new Person ()

//Player Responses Messages

var playerResponses1 = ["Hello", "Sup Honey Bo Bo", "Greatings, M'lady of the night", "HI // HEY // HEEELLLOOOOO???"];
var playerResponses2 = ["I'm going to Wholefoods later, can I pick you up anything?", "Heaven must be missing an Angel", "You so spooky my skeleton is shakin'", "You look like you wanna get WILD!"];
var playerResponses3 = ["Tell me more about yourself"];
var playerResponses4 = ["Yeah, I really love it here, great place!", "Mmmm yeah idk this place is kinda weird..."];
var playerResponses5 = ["Oh you know the usual, I work as a <span id='entered-occupation'><span>, I enjoy watching Netflix, taking the occasional walk, and <span id='entered-hobby></span>'", "#chillaxin at the beach with some brewskis, workin on my tan and hangin out with the bros at the gym #gymlyfe #beachbrews", "Midnight graveyard walks, fog dancing, hula-hooping, and <span id='entered-hobby></span>", "Huntin, fishin, muddin, rock crawlin, and <span id='entered-hobby></span>"];
var arrayOfResponses = [playerResponses1, playerResponses2, playerResponses3, playerResponses4, playerResponses5];

$(document).ready(function(){
  $("#sign-up").click(function() {
    $("#sign-up").hide();
    $("#create-profile").fadeIn();
  })
  $("#form-match").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#user-name").val();
    var inputtedAge = $("#user-age").val();
    var inputtedAstrological = $("#astrological-sign").val();
    var inputtedOccupation = $("#user-occupation").val();
    var inputtedHobby = $("input:radio[name=hobby]:checked").val();
    if (inputtedHobby === "user-input-hobby") {
      inputtedHobby = $("#user-input-hobby").val();
    }
    Player = new Person (inputtedName, inputtedAge, inputtedAstrological, inputtedOccupation, inputtedHobby);
    if (Player.name === "" || Player.occupation === "" || Player.hobby === "") {
      $("#blank-form").show();
    } else {
      console.log(Player);
      //Create Panels
      for (i = 0; i < profileNames.length; i++) {
        var newPerson = new Person (profileNames[i], profileAges[i], profileAstrologicals[i], profileOccupations[i], profileHobbies[i], profileImages[i], profileLikeScore[i], profileAboutMes[i]);
        $("#profiles").append(
                              '<div class="col-md-4">' +
                                '<div class="panel panel-danger">' +
                                  '<h2 class = "panel-heading profile-h2"><span class = "profile-name" >' + newPerson.name + '</span></h2>' +
                                  '<div class="panel-body profile-panels">' +
                                    '<div class="row">' +
                                      '<div class="col-md-6">' +
                                        '<strong>Age:</strong> <span class = "profile-age" >' + newPerson.age + '</span>' +
                                      '</div>' +
                                      '<div class="col-md-6">' +
                                        '<strong>Interested In:</strong> <span class = "gender-interests">Male</span>' +
                                      '</div>' +
                                    '</div>' +
                                    '<img src="img/' + newPerson.profileImage + '.jpg" alt="">' +
                                    '<div class="">' +
                                      '<p><strong>Astrological Sign:</strong> <span class ="profile-astrological">' + newPerson.astrological + '</span></p>' +
                                      '<p><strong>Occupation:</strong> <span class = "profile-occupation">' + newPerson.occupation + '</span></p>' +
                                      '<p><strong>Hobby:</strong> <span class = "profile-hobby">' + newPerson.hobby + '</span></p>' +
                                      '<strong>About me:</strong> <span class = "profile-about-me">' + newPerson.aboutMe + '</span>' +
                                    '</div>' +
                                    '<div class="panel-body row">' +
                                      '<button type="button" class="btn btn-primary" id="message-' + newPerson.firstName() + '">Message Me!</button>' +
                                      '<div class="newMessage">' +
                                        '<p><strong>1 New Message</strong></p>' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                                '<div class="panel panel-primary initial-hidden message-box-' + newPerson.firstName() + '">' +
                                  '<div class="panel-heading">' +
                                    newPerson.firstName() + ' is Online' +
                                  '</div>' +
                                  '<div class="panel-body" id="response-' + newPerson.firstName() + '">' +
                                    '<div class="message-area">' +
                                      '<p class="initial-show"><strong>*Send ' + newPerson.firstName() + ' a message*</strong></p>' +
                                      '<div id="message-options-' + newPerson.firstName() + '">' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              '</div>'
                            );
        for (b = 0; b < arrayOfResponses.length; b++) {
          $("#message-options-" + newPerson.firstName()).append('<form id="' + newPerson.firstName() + '-form-' + b + '" class="form-inline">' +
                                         '<select class="form-group input-sm" id="' + newPerson.firstName() + '-options-' + b + '">' +
                                         '</select>' +
                                         '<div class="messageButton">' +
                                           '<button class="introT btn btn-primary btn-sm">Send Message</button>' +
                                         '</div>' +
                                       '</form>'
         );
          for (c = 0; c < arrayOfResponses[b].length; c++) {
            $("#" + newPerson.firstName() + "-options-" + b).append(
              '<option>' + arrayOfResponses[b][c] + '</option>'
            );
          }
        }

      }
      $("#create-profile").hide();
      $("#profiles").fadeIn();
    }
    $("#message-Dutchess").click(function(){
      $(".message-box-Dutchess").slideToggle();
    });
    $("#message-Supul").click(function(){
      $(".message-Supul").slideToggle();
    });
    $("#message-Brenda").click(function(){
      $(".message-box-Brenda").slideToggle();
    });

  });


});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var Person = function(name) {
  this.name = name;
  // this.age = age;
  // this.aboutMe; aboutMe;
  // this.astrolgical = astrolgical;
  // this.occupation = occupation;
  // this.dark = dark;
  // this.crazy = crazy;
  // this.normal = normal;
}

var profileNames = ["Helga", "Mindy", "Jane "];
var profileAges = [45];
var profileAboutMes = [
  "My name is " + profileNames[Math.floor((Math.random() * 3))] + " I hail from Bavaria. I like beer, bratwurst and Oompah music.  I hold the record for Das Boot in all of Germany. I like strong aggressive men.",
];

var profileAstrologicals = ["Scorpio"];
var profileOccupations = ["Beer Witch"];

$(document).ready(function(){

  var profile1 = new Person("Eddie");

  profileDark = true;
  profileCrazy = false;
  profileNormal = false;

  // response to each question. responses output 1 - 3
  firstText = 1; // 1st text -- 4 options
  pickUpText = 1; // 2nd text -- 4 options
  peronalInfoText = 1; // 3rd text -- 1 option
  responseDLKtext = 1; // 4th text -- 1 option
  responseToBioText = 1 // 5th text -- 4 options
  locationText = 1; // 6th text -- 2 options

  var response1Dutchess = ""
  var response1Supul = ""
  var response1Brenda = ""

  var response2Dutchess = ""
  var response2Supul = ""
  var response2Brenda  = ""

  var response3Dutchess = ""
  var response3Supul = ""
  var response3Brenda = ""

  var response4Dutchess = ""
  var response4Supul = ""
  var response4Brenda = ""

  var response5Dutchess = ""
  var response5Supul = ""
  var response5Brenda = ""

  var response6Dutchess = ""
  var response6Supul = ""
  var response6Brenda = ""

  Person.prototype.introText = function(){
    //Dark person Dutchess
    if (profileDark === true && firstText === 1) {
      response1Dutchess = "... "
    } else if (profileDark === true && firstText === 2) {
      response1Dutchess = "... ugh"
    } else if (profileDark === true && firstText === 3) {
      response1Dutchess = "Greatings morta" + profile1.name;
    } else if (profileDark === true && firstText === 4) {
      response1Dutchess = "Um... hello?";
      //Crazy person Supul
    } else if (profileCrazy === true && firstText === 1) {
      response1Supul = "Huh? WhaT? You talking to MEEE?"
    } else if (profileCrazy === true && firstText === 2) {
      response1Supul = "HONEY WHAT???"
    } else if (profileCrazy === true && firstText === 3) {
      response1Supul = "WHAT?? WHO TOLD YOU???"
    } else if (profileCrazy === true && firstText === 4) {
      response1Supul = "HEEEEEEEEEEEEEEEEYYYY!!!!"
      //Normal Person Brenda
    } else if (profileNormal === true && firstText === 1) {
      response1Brenda = "Sup"
    } else if (profileNormal === true && firstText=== 2) {
      response1Brenda  = "Ew"
    } else if (profileNormal === true && firstText === 3) {
      response1Brenda  = "EW"
    } else if (profileNormal === true && firstText === 4) {
      response1Brenda  = "Ugh"
  }
}
  Person.prototype.pickUpLine = function(){
    if (profileDark === true && pickUpText === 1) {
      response2Dutchess = "Oh, no... they don't have anything I could eat";
    } else if(profileDark === true && pickUpText === 2){
      response2Dutchess = "Speak not of the accursed ones!";
    } else if(profileDark === true && pickUpText  === 3){
      response2Dutchess = "Oh my, well let us hope it doesn't rattle right out of you haha ;)";
    } else if(profileDark === true && pickUpText  === 4){
      response2Dutchess = "Eh, on occasion I suppose...";

    } else if (profileCrazy  === true && pickUpText  === 1) {
      response2Supul = "Bah, where's the fun if the food's just sitting there waitin' for ya?";
    } else if(profileCrazy  === true && pickUpText === 2){
      response2Supul = "REEEEEEEE";
    } else if(profileCrazy === true && pickUpText  === 3){
      response2Supul = "Look, this hair is impossible OK?";
    } else if(profileCrazy === true && pickUpText  === 4){
      response2Supul = "AAAWWWWOOOOOOOOOOOOOOOOO!!!!";

    } else if (profileNormal === true && pickUpText  === 1) {
      response2Brenda = "OOOMG can you pick me up some chai??";
    } else if(profileNormal  === true && pickUpText  === 2){
      response2Brenda = "Ew";
    } else if(profileNormal === true && pickUpText  === 3){
      response2Brenda = "What?? How am I spooky???";
    } else if(profileNormal === true && pickUpText  === 4){
      response2Brenda = "Wow ok slow down there...";
  }
  }

  /////
  Person.prototype.personalInfo = function(){
    if (profileDark === true && peronalInfoText === 1) {
      response3Dutchess = "First you should know, as my profile mentioned, I am a widow and a recent immigrant to this fine kingdom. Second, I am, due to my work of course, a creature of the night and must spend my days sleeping. I've not yet seen everything the Dark Lord's Kingdom has to offer, but so far I feel right at home.";

    } else if (profileCrazy === true && peronalInfoText === 1) {
      response3Supul = "Where to start, where to start??? I am a fulltime bartender/athletics instructor/hunter (damn site would only let me put in one job). I loooove being out in the wild, the smell of the grass, the scent of the prey... ooooh and the Dark Lord's Kingdom as THE best places to hunt!!!";

    } else if (profileNormal === true && peronalInfoText === 1) {
      response3Brenda = "Let's see... I moved to the Dark Lord's Kingdom on a student visa 8 years ago. After school I already had lots of wage slave offers and so I decided to stay and apply for a work visa. I think maybe it was the seclution in college, but I never realized until afterwards how... strange this country is, and I'm not sure I really fit in...";
    }
  }

  Person.prototype.responseDLK = function(){
    if (profileDark === true && responseDLKtext === 1) {
      response4Dutchess = "Yeah, I really love it here, great place!";

    } else if (profileCrazy === true && responseDLKtext === 1) {
      response4Supul = "Yeah, I really love it here, great place!";

    } else if (profileNormal === true && responseDLKtext === 1) {
      response4Brenda = "Mmmm yeah idk this place is kinda weird...";
    }
  }

  Person.prototype.responseToBio = function(){
    if (profileDark === true && responseToBioText === 1) {
      response5Dutchess = "How… pedantic.";
    } else if (profileDark === true && responseToBioText === 2){
      response5Dutchess = "In… in the sun?";
    } else if (profileDark=== true && responseToBioText === 3){
      response5Dutchess = "How delightful";
    } else if (profileDark=== true && responseToBioText === 4){
      response5Dutchess = "Well, I do love to feed";

    } else if (profileCrazy === true && responseToBioText === 1) {
      response5Supul = "BO-RING";
    } else if(profileCrazy === true && responseToBioText === 2){
      response5Supul = "Mmmm fresh meat";
    } else if(profileCrazy === true && responseToBioText === 3){
      response5Supul = "Did you say… HULA-HOOPING??";
    } else if(profileCrazy === true && responseToBioText === 4){
      response5Supul = "Yeeeeah! Yes! YES! YESS!";

    } else if (profileNormal === true && responseToBioText === 1) {
      response5Brenda = "OMG I luv Netflix!!!!!!!!!!!!!!!! I’ve watched every episode of The Office 7 times!";
    } else if(profileNormal === true && responseToBioText === 2){
      response5Brenda = "Uuuuuh… cooooooool?";
    } else if(profileNormal === true && responseToBioText === 3){
      response5Brenda = "You kinda sound like a creeper.";
    } else if(profileNormal === true && responseToBioText === 3){
      response5Brenda = "I’m a Vegan.";
  }
}

  Person.prototype.dateLocation = function(){
    if (profileDark === true && locationText === 1) {
      response6Dutchess = "Absolutely, darling.";
    } else if (profileDark === true && locationText === 2){
      response3Dutchess = "I suppose I have the time…";

    } else if (profileCrazy === true && locationText  === 1) {
      response6Supul = "YAYAYAYAYAYA!";
    } else if(profileCrazy === true && locationText === 2){
      response3Supul = "What have I got to lose?";

    } else if (profileNormal === true && locationText === 1) {
      response6Brenda = "Uh sure.";
    } else if(profileNormal === true && locationText === 2){
      response6Brenda = "Sigh, I guess.";
    }
  }

  profile1.introText();
  profile1.pickUpLine();
  profile1.personalInfo();
  profile1.responseDLK();
  profile1.responseToBio();
  profile1.dateLocation();

  $("button.message").click(function() {
    $(".testBox").slideToggle();
  });

  $("button.introT").click(function() {
    $("#test").show();
    var text1 = setInterval(answer1, 4000);
    function answer1() {
      $("#answer1").show();
      $(".introT").hide();
      $(".pickUp").show();
      $(".newMessage").show();
      clearInterval(text1);
    }
  });

  $("button.pickUp").click(function() {
    $("#test1").show();
    $(".newMessage").hide();
    var text2 = setInterval(answer2, 4000);
    function answer2() {
      $(".newMessage").show();
      $("#answer2").show();
      $(".pickUp").hide();
      $(".dateLoc").show();
      clearInterval(text2);
    }

  });

  $("button.dateLoc").click(function() {
    $("#test2").show();
    $(".newMessage").hide();
    var text3 = setInterval(answer3, 4000);
    function answer3() {
      $(".newMessage").show();
      $("#answer3").show();
     $(".dateLoc").hide();
     $(".doesNothing").show();
      clearInterval(text3);
    }

  });

  document.getElementById("test").innerHTML = response1Dutchess;
  document.getElementById("test1").innerHTML = response2Dutchess;
  document.getElementById("test2").innerHTML = response3Dutchess;


//////////////////////////////////
var dateResponse = "";


var question1 = 2;
var question2 = 1;
var question3 = 1;
var question4 = 3;
var question5 = 2;
var question6 = 1;
var question7 = "";
var question8 = "";


Person.prototype.dateQuestion1 = function(){
    if (question1  === 1) {
      dateResponse = "branch 1 response";
    } else if (question1 === 2){
      dateResponse = "branch 2 response";
}
}

///question branch 1
Person.prototype.dateQuestion2_firstPath = function(){
  ////DARK PROFILE
  if (question1 === 1 && profileDark === true && question2 === 1) {
    dateResponse = "question2 DARK = DARK response";
    this.dark +=1;
  } else if (question1 === 1 && profileDark === true && question2  === 2){
    dateResponse = "question2 CRAZY = DARK response";

  } else if (question1 === 1 && profileDark === true && question2 === 3){
    dateResponse = "question2 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question1 === 1 && profileCrazy === true && question2  === 1) {
    dateResponse = "question2 DARK  = CRAZY response";
  } else if(question1 === 1 && profileCrazy === true && question2  === 2){
    dateResponse= "question2 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question1 === 1 && profileCrazy=== true && question2 === 3) {
    dateResponse = "question2 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question1 === 1 && profileNormal === true && question2  === 1){
    dateResponse= "question2 DARK  = NORMAL response";
  } else if(question1 === 1 && profileNormal === true && question2 === 2){
    dateResponse= "question2 CRAZY  = NORMALresponse";
  } else if(question1 === 1 && profileNormal === true && question2 === 3){
    dateResponse= "question2 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question branch 2
Person.prototype.dateQuestion2_secondPath = function(){
  ////DARK PROFILE
  if (question1 === 2 && profileDark === true && question2 === 1) {
  dateResponse= "question2 DARK = DARK response";
    this.dark +=1;
  } else if (question1 === 2 && profileDark === true && question2  === 2){
    dateResponse= "question2 CRAZY = DARK response";
  } else if (question1 === 2 && profileDark === true && question2 === 3){
    dateResponse = "question2 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question1 === 2 && profileCrazy === true && question2  === 1) {
    dateResponse = "question2 DARK  = CRAZY response";
  } else if(question1 === 2 && profileCrazy === true && question2  === 2){
    dateResponse = "question2 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question1 === 2 && profileCrazy=== true && question2 === 3) {
    dateResponse = "question2 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question1 === 2 && profileNormal === true && question2  === 1){
    dateResponse = "question2 DARK  = NORMAL response";
  } else if(question1 === 2 && profileNormal === true && question2 === 2){
    dateResponse = "question2 CRAZY  = NORMALresponse";
  } else if(question1 === 2 && profileNormal === true && question2 === 3){
    dateResponse = "question2 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

//question triggering differnt branch
Person.prototype.dateQuestion3 = function(){
    if (question3  === 1) {
      dateResponse = "branch 1 response";
    } else if (question3 === 2){
      dateResponse = "branch 2 response";
}
}

///question3 branch 1
Person.prototype.dateQuestion4_firstPath = function(){
  ////DARK PROFILE
  if (question3 === 1 && profileDark === true && question4 === 1) {
    dateResponse = "question4 DARK = DARK response";
    this.dark +=1;
  } else if (question3 === 1 && profileDark === true && question4  === 2){
    dateResponse = "question4 CRAZY = DARK response";

  } else if (question3 === 1 && profileDark === true && question4 === 3){
    dateResponse = "question4 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question3 === 1 && profileCrazy === true && question4  === 1) {
    dateResponse = "question4 DARK  = CRAZY response";
  } else if(question3 === 1 && profileCrazy === true && question4  === 2){
    dateResponse= "question4 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question3 === 1 && profileCrazy=== true && question4 === 3) {
    dateResponse = "question4 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question3 === 1 && profileNormal === true && question4  === 1){
    dateResponse= "question4 DARK  = NORMAL response";
  } else if(question3 === 1 && profileNormal === true && question4 === 2){
    dateResponse= "question4 CRAZY  = NORMALresponse";
  } else if(question3 === 1 && profileNormal === true && question4 === 3){
    dateResponse= "question4 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question3 branch 2
Person.prototype.dateQuestion4_secondPath = function(){
  ////DARK PROFILE
  if (question3 === 2 && profileDark === true && question4 === 1) {
  dateResponse= "question4 DARK = DARK response";
    this.dark +=1;
  } else if (question3 === 2 && profileDark === true && question4  === 2){
    dateResponse= "question4 CRAZY = DARK response";
  } else if (question3 === 2 && profileDark === true && question4 === 3){
    dateResponse = "question4 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question3 === 2 && profileCrazy === true && question4  === 1) {
    dateResponse = "question4 DARK  = CRAZY response";
  } else if(question3 === 2 && profileCrazy === true && question4  === 2){
    dateResponse = "question4 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question3 === 2 && profileCrazy=== true && question4 === 3) {
    dateResponse = "question4 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question3 === 2 && profileNormal === true && question4  === 1){
    dateResponse = "question4 DARK  = NORMAL response";
  } else if(question3 === 2 && profileNormal === true && question4 === 2){
    dateResponse = "question4 CRAZY  = NORMALresponse";
  } else if(question3 === 2 && profileNormal === true && question4 === 3){
    dateResponse = "question4 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

//question triggering differnt branch
Person.prototype.dateQuestion5 = function(){
    if (question5  === 1) {
      dateResponse = "branch 1 response";
    } else if (question5 === 2){
      dateResponse = "branch 2 response";
}
}

///question3 branch 1
Person.prototype.dateQuestion6_firstPath = function(){
  ////DARK PROFILE
  if (question5 === 1 && profileDark === true && question6 === 1) {
    dateResponse = "question6 DARK = DARK response";
    this.dark +=1;
  } else if (question5 === 1 && profileDark === true && question6  === 2){
    dateResponse = "question6 CRAZY = DARK response";

  } else if (question5 === 1 && profileDark === true && question6 === 3){
    dateResponse = "question6 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question5 === 1 && profileCrazy === true && question6  === 1) {
    dateResponse = "question6 DARK  = CRAZY response";
  } else if(question5 === 1 && profileCrazy === true && question6  === 2){
    dateResponse= "question6 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question5 === 1 && profileCrazy=== true && question6 === 3) {
    dateResponse = "question6 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question5 === 1 && profileNormal === true && question6  === 1){
    dateResponse= "question6 DARK  = NORMAL response";
  } else if(question5 === 1 && profileNormal === true && question6 === 2){
    dateResponse= "question6 CRAZY  = NORMALresponse";
  } else if(question5 === 1 && profileNormal === true && question6 === 3){
    dateResponse= "question6 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

///question5 branch 2
Person.prototype.dateQuestion6_secondPath = function(){
  ////DARK PROFILE
  if (question5 === 2 && profileDark === true && question6 === 1) {
  dateResponse= "question6 DARK = DARK response";
    this.dark +=1;
  } else if (question5 === 2 && profileDark === true && question6  === 2){
    dateResponse= "question6 CRAZY = DARK response";
  } else if (question5 === 2 && profileDark === true && question6 === 3){
    dateResponse = "question6 NORMAL = DARK response";
///CRAZY PROFILE
  } else if (question5 === 2 && profileCrazy === true && question6  === 1) {
    dateResponse = "question6 DARK  = CRAZY response";
  } else if(question5 === 2 && profileCrazy === true && question6  === 2){
    dateResponse = "question6 CRAZY = CRAZY response";
    this.crazy += 1;
  } else if(question5 === 2 && profileCrazy=== true && question6 === 3) {
    dateResponse = "question6 NORMAL =  CRAZY response";
///NORMAL PROFILE
  } else if (question5 === 2 && profileNormal === true && question6  === 1){
    dateResponse = "question6 DARK  = NORMAL response";
  } else if(question5 === 2 && profileNormal === true && question6 === 2){
    dateResponse = "question6 CRAZY  = NORMALresponse";
  } else if(question5 === 2 && profileNormal === true && question6 === 3){
    dateResponse = "question6 NORMAL = NORMAL response";
    this.normal += 1;
  }
}

//profile1.dateQuestion1();
//profile1.dateQuestion2_firstPath();
// profile1.dateQuestion2_secondPath();
// profile1.dateQuestion3();
// // profile1.dateQuestion4_secondPath();
// profile1.dateQuestion4_firstPath();
profile1.dateQuestion5();
profile1.dateQuestion6_secondPath();

  document.getElementById("story").innerHTML = dateResponse;
  document.getElementById("story1").innerHTML = "Hello";




});
