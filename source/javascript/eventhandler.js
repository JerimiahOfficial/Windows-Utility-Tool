const { ipcRenderer } = require('electron');

// Get all input elements
const inputs = document.getElementsByTagName('input');

// Loop through all inputs
for (let i = 0; i < inputs.length; i += 1) {
  // Add event listener to each input
  inputs[i].addEventListener('click', () => {
    // check if the input has an id
    if (inputs[i].id === null) return;

    // Send event to main process
    ipcRenderer.send(inputs[i].id);
  });
}
