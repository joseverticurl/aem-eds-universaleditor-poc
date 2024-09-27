(function initializeImageText() {
    const imagetextBlocks = document.querySelectorAll('.imagetext-container');
  
    imagetextBlocks.forEach(block => {
      const imageElement = block.querySelector('.imagetext-image');
      const alignment = block.dataset.alignment;
  
      // Apply Smart Crop settings
      const smartCropUrl = applySmartCrop(imageElement.dataset.src); 
  
      imageElement.src = smartCropUrl;
  
      // Set alignment
      if (alignment === 'left') {
        block.classList.add('imagetext-left');
      } else {
        block.classList.add('imagetext-right');
      }
    });
  
    function applySmartCrop(imageUrl) {
      // Adjust the image URL for Smart Crop
      return `${imageUrl}?crop=smart&width=400&height=300`; // Example crop parameters
    }
  })();
  