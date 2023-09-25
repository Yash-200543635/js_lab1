// VARIABLE DECLARATIONS
// Declare and initialize variables with unique names
var customNameInput = document.getElementById("customname"); // Input for custom name
var randomizeButton = document.querySelector(".randomize"); // Button to generate the story
var storyElement = document.querySelector(".story"); // Element to display the story

// Create the variable that contains the story string that will be modified
var originalStoryText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Create three arrays with unique names: insertXArray, insertYArray, and insertZArray
var insertXArray = ["Donald Trump", "Jackie Chan", "Santa Claus"]; // Array for insertX values
var insertYArray = ["Area 51", "Death Valley", "Aruba"]; // Array for insertY values
var insertZArray = [
  "spontaneously combusted",
  "rapidly sublimated",
  "evaporated instantly",
]; // Array for insertZ values

// FUNCTIONS

// Create a function to get a random value from an array with a unique name
function getRandomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Create a function to generate and display the story with a unique name
function generateStory() {
  // Create a new variable called newStory
  var newStory = originalStoryText;

  // Use getRandomValueFromArray to generate values for xItem, yItem, and zItem
  var xItem = getRandomValueFromArray(insertXArray); // Get a random insertX value
  var yItem = getRandomValueFromArray(insertYArray); // Get a random insertY value
  var zItem = getRandomValueFromArray(insertZArray); // Get a random insertZ value

  // Replace placeholders in newStory with xItem, yItem, and zItem
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // Check if custom name input is provided and replace 'Bob' in the story with the custom name
  if (customNameInput.value !== "") {
    newStory = newStory.replace(/Bob/g, customNameInput.value);
  }

  // Check if metric radio button is checked and do temperature and weight conversions
  if (document.getElementById("metric").checked) {
    // Convert weight from pounds to kilograms
    var weightInKilograms = Math.round(300 * 0.453592);
    // Replace '300 pounds' with the updated weight in kg
    newStory = newStory.replace("300 pounds", weightInKilograms + " kilograms");

    // Convert temperature from Fahrenheit to Celsius
    var tempInCelsius = Math.round(((94 - 32) * 5) / 9);
    // Replace '94 fahrenheit' with the updated temperature in °C
    newStory = newStory.replace("94 fahrenheit", tempInCelsius + " Celsius");
  }

  // Set the textContent property of the story element to newStory
  storyElement.textContent = newStory;

  // Make the paragraph visible
  storyElement.style.visibility = "visible";
}

// EVENT LISTENERS
// Add a click event listener to the randomize button
randomizeButton.addEventListener("click", generateStory);