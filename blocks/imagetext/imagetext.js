// Function to apply Smart Crop to the image
function applySmartCrop(imageUrl) {
  return `${imageUrl}?crop=smart&width=400&height=300`; // Example parameters for Smart Crop
}

export default function decorate(block) {
  const imageElement = block.querySelector('.imagetext-image');
  const { alignment } = block.dataset;
  // Apply Smart Crop to the image
  const smartCropUrl = applySmartCrop(imageElement.dataset.src);
  imageElement.src = smartCropUrl;
  // Set alignment class
  if (alignment === 'left') {
    alert('left');
    block.classList.add('imagetext-left');
  } else if (alignment === 'right') {
    alert('right');
    block.classList.add('imagetext-right');
  }
}
