# Drag And Drop Project

This project demonstrates a simple drag-and-drop feature using HTML, CSS, and JavaScript. Users can drag an image and drop it into one of the designated drop zones.


## Usage

The project consists of the following files:

- `index.html`: The main HTML file containing the structure of the web page and the drag-and-drop elements.
- `style.css`: The CSS file that styles the HTML elements and provides a visual representation of the drag-and-drop zones.
- `script.js`: The JavaScript file that handles the drag-and-drop functionality.

### HTML Structure

The HTML structure is as follows:

- The main container (`<div id="container">`) holds three drop zones (`<div class="drop">`) and an image (`<img>`).
- The image has the `draggable` attribute set to "true" to enable dragging.

### CSS Styling

The CSS (`style.css`) provides styling for the project:

- The project uses the "Poppins" font from Google Fonts.
- It defines the appearance of the drop zones and the draggable image.
- Hover effects are applied to enhance the user experience.

### JavaScript Functionality

The JavaScript (`script.js`) provides the drag-and-drop functionality:

- The `dragStart()` function adds a class to the dragged element and hides it during dragging.
- The `dragEnd()` function resets the class of the dragged element after dragging ends.
- Event listeners are set up for the drag-and-drop actions (`dragover`, `dragenter`, `dragleave`, and `drop`).
- The `dragOver()`, `dragEnter()`, and `dragLeave()` functions handle visual feedback during the drag-and-drop process.
- The `dragDrop()` function handles dropping the image into a drop zone.

