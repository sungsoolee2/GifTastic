 // Initial array of animals
 var topics = ["tiger", "fox", "chicken", "turtle", "pengiun", "kanagaroo", "rabbit", "zebra", "pig", "horse"];

 // displayAnimalInfo function re-renders the HTML to display the appropriate content
 function displayAnimalInfo() {
 // clear animals view div //
     $("#animals-view").empty();
    
     var animal = $(this).attr("data-name");
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
         animal + "&api_key=Gk6ayLoOXHYVYrvTFZLkUUIAZzMGPpGw&limit=10";

     // Creating an AJAX call for the specific animal button being clicked
     $.ajax({
         url: queryURL,
         method: "GET"
     }).then(function (response) {
         //set variable results to pulls data from api hit    
         var results = response.data;
         console.log(results);
         //create loop to display animals from api hit
         for (var i = 0; i < results.length; i++) {

             // Creating a div to hold the animal gify       
             var animalDiv = $("<div>");

             // Storing the rating data
             var rating = results[i].rating;

             // Creating an element to have the rating displayed
             var p = $("<p>").text("Rating: " + rating);

             // Creating an element to hold the image

             // var animalImage = $("<img>");

             // // Retrieving the URL and  for the image and assigning the image to src
             // animalImage.attr("src", results[i].images.fixed_height.url);
             
             
             
             // var imganimateURL = results[i].images.fixed_height.url
             // var datastate = $("data-state");
             // datastate.append("animate");
             // Retrieving the URL for the image
             var imgstillURL = results[i].images.fixed_height_still.url
             // datastate.append("still")

             // Adding class .gif to toggle between still and animate
             animalDiv.addClass(".gif");
             // Adding a data-attribute
             animalDiv.attr("data-state", "still");

             // Creating an element to hold the image
             var animalImage = $("<img .gif data-still>").attr("src", imgstillURL);
             
             // var animalImage2 = $("<img .gif data-still>").attr("src", imgstillURL);
             
             // Displaying the rating
             animalDiv.append(p);

             // Appending the image          
             animalDiv.append(animalImage);
             // animalDiv.append(animalImage2);

             
            

             // Putting the animals above the animal movies
             $("#animals-view").append(animalDiv);

         }
         
         });








 }

 // Function for displaying movie data
 function renderButtons() {

     // Deleting the animals prior to adding new animals
     // (this is necessary otherwise you will have repeat buttons)
     $("#buttons-view").empty();

     // Looping through the array of topics
     for (var i = 0; i < topics.length; i++) {

         // Then dynamicaly generating buttons for each animal in the array topics
         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
         var a = $("<button>");
         // Adding a class of animal-btn to our button
         a.addClass("animal-btn");
         // Adding a data-attribute
         a.attr("data-name", topics[i]);
         // Providing the initial button text
         a.text(topics[i]);
         // Adding the button to the buttons-view div
         $("#buttons-view").append(a);
     }
 }

 // This function handles events where a animal button is clicked
 $("#add-animal").on("click", function (event) {
     event.preventDefault();
     // This line grabs the input from the textbox
     var newAnimal = $("#animal-input").val().trim();

     // Adding topics from the textbox to our array
     topics.push(newAnimal);

     // Calling renderButtons which handles the processing of our topics array
     renderButtons();
 });

 // Adding a click event listener to all elements with a class of "animal-btn"
 $(document).on("click", ".animal-btn", displayAnimalInfo);

 // Calling the renderButtons function to display the intial buttons
 renderButtons();

 $(".gif").on("click",  function() {


// STEP TWO: make a variable named state and then store the image's data-state into it.
// Use the .attr() method for this.
var state = $(this).attr("data-state");
console.log(state);
// STEP THREE: Check if the variable state is equal to 'still',
// then update the src attribute of this image to it's data-animate value,
// and update the data-state attribute to 'animate'.

// If state is equal to 'animate', then update the src attribute of this
// image to it's data-still value and update the data-state attribute to 'still'

if (state ==="still")
{
var animate=$(this).attr("data-animate");
$(this).attr("src",animate)
$(this).attr("data-state","animate")

}

else 
{var still=$(this).attr("data-still");
$(this).attr("src",still);
$(this).attr("data-state","still");

}
});

