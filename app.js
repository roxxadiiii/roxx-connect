
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with the class 'tile-share-button'
    const shareButtons = document.querySelectorAll('.tile-share-button');

    // Add event listener to each button
    shareButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent the default action (if any)
            event.preventDefault();

            // Get the parent element with the class 'tile'
            const tileElement = this.parentElement;

            // Extract the href attribute value
            const hrefValue = tileElement.getAttribute('href');

            // Copy the href value to clipboard
            navigator.clipboard.writeText(hrefValue).then(function() {
                console.log('Copying to clipboard was successful!');
                // Display a success message after copying
                alert('Link copied successfully! Check your clipboard.');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                // Display an error message if copying failed
                alert('Failed to copy link. Please try again.');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with the class 'share-button'
    const shareButtons = document.querySelectorAll('.share-button');

    // Add event listener to each button
    shareButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent the default action (if any)
            event.preventDefault();

            // Define the URL you want to copy
            const urlToCopy = "https://roxx-connect.netlify.app/";

            // Copy the URL to clipboard
            navigator.clipboard.writeText(urlToCopy).then(function() {
                console.log('Copying to clipboard was successful!');
                alert('Link copied successfully! Check your clipboard.');
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                alert('Failed to copy link. Please try again.');
            });
        });
    });
});