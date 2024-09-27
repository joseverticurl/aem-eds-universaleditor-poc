// imagetext.js

(function () {
    const imagetextBlocks = document.querySelectorAll('.imagetext-container');
    
    imagetextBlocks.forEach(block => {
        const imageElement = block.querySelector('.imagetext-image');
        const alignment = block.dataset.alignment;

        // Apply Smart Crop settings (this depends on your Dynamic Media setup)
        const smartCropUrl = applySmartCrop(imageElement.dataset.src); // Assuming the function is provided by Dynamic Media

        imageElement.src = smartCropUrl;

        // Set alignment
        if (alignment === 'left') {
            block.classList.add('imagetext-left');
        } else {
            block.classList.add('imagetext-right');
        }
    });

    function applySmartCrop(imageUrl) {
        // Adjust the image URL for Smart Crop. This depends on how Smart Crop is implemented in your Dynamic Media setup.
        return `${imageUrl}?crop=smart&width=400&height=300`; // Example crop parameters
    }
})();