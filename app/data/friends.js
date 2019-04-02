
const friends =[
{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
      
      ]
  },
  {
    "name":"Manny",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        2,
        4,
        4,
        5
      ]

  },
  {
    "name":"Alex",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        2,
        4,
        2,
        5,

      ]

  }
]
var answers = 0;
for ( var i = 0; i < friends.length; i++){

  var answers = friends[i].scores
  

console.log(answers)

  // console.log(friends[i].scores)

}
  // var ans = [

  //   ans1 = friends[0].scores,
  //   ans2 = friends[1].scores,
   
  // ]
  // console.log(ans)
  module.exports = friends;
  



//   $("#submit-form").on("click", function () {

//     event.preventDefault();
//     let newUser =
//     {
//         "name": $("#userName").val(),
//         "photo": $("#photo").val(),
//         "scores": [

//             q1 = $("#q1").val(),
//             q2 = $("#q2").val(),
//             q3 = $("#q3").val(),
//             q4 = $("#q4").val(),
//             q5 = $("#q5").val(),


//         ]
//     }
//     $.ajax(
//         {
//             url: "api/friends",
//             method: "POST",
//             data: newUser
//         }
//     ).then(function (response) {
//         console.log(response);
//         // fs.writeFile(response , function(err, data) {
//         //     if (err) console.log(err);
//         //     console.log("Successfully Written to File.")
//         // })
//         module.exports = newUser
//     })

//     console.log(newUser);
// });