// api key bofWb7Vzep6vZGfgkLXBvYEgNtUJZBWm

var topics = ["Broad City", "Friends", "How I Met Your Mother", "Seinfeld", "Law and Order: SVU", "Parks and Recreation", "Portlandia"];

$("#submit-button").on("click", function (event) {

    event.preventDefault();
    var newTopic = $("#show").val().trim();
    topics.push(newTopic);

    $("#buttons-div").empty();
    $("#show").empty();

    for (i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var button = $("<button class='tv-show'>");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttons-div").append(button);
    }

});


for (i = 0; i < topics.length; i++) {
    console.log(topics[i])
    var button = $("<button class='tv-show'>");
    button.attr("data-name", topics[i]);
    button.text(topics[i]);
    $("#buttons-div").append(button);

}

$(document).on("click", ".tv-show", function () {

    $("#images").empty();

    var tvShow = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (i = 0; i < 11; i++) {
            console.log(response.data[0]);
            var url1 = response.data[i].images.downsized_still.url;
            var url2 = response.data[i].images.downsized.url;
            console.log("url 2" + url2);

            var image = $("<img>").attr("src", url2)
            $("#images").append(image);
        }
        });


    


    });



