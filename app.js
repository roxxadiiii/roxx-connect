const shareButtons = document.querySelectorAll('.tile-share-button');
console.log(shareButtons)

async function copyText(e) {
    // Prevent default action
    e.preventDefault();
    
    // Find the closest parent <a> tag
    const linkElement = e.target.closest('a');
    
    // Get the href attribute from the parent <a> tag
    const link = linkElement ? linkElement.getAttribute('href') : '';
    try {
        await navigator.clipboard.writeText(link);
        alert("Copied the text: " + link);
    } catch (err) {
        console.error(err);
    }
}
