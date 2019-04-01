$("#submit-form").on("click", function () {
    var newUser =
    {
        "name": "Ted",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    }
    $.ajax(
        {
            url: "api/friends",
            method: "POST",
            data: newUser
        }
    ).then(function (response) {
        console.log(response);
    })

});