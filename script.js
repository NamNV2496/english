
// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button
    var readButton = document.getElementById('read-button');
    var changeButton = document.getElementById('change-button');
  
    // Add click event listener to the button
    readButton.addEventListener('click', function() {
      // Read the current value of the element with class 'english'
      var englishWord = document.querySelector('.english').textContent;
  
      // Create a new SpeechSynthesisUtterance object
      var speech = new SpeechSynthesisUtterance();
  
      // Set the text to be read
      speech.text = englishWord;
  
      // speech.rate = 0.75;

      // Use the default voice
      speech.lang = 'en-US';
  
      // Speak the text
      speechSynthesis.speak(speech);
    });
  
    // Add click event listener to the change button
    changeButton.addEventListener('click', function() {
      // Change the content of the element with class 'english'
      var englishWord = document.querySelector('.english');
      englishWord.textContent = "New Value";
    });
});
  