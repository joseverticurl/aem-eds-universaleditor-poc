import './imagetext.css';

// Function to apply smart cropping to the image
function applySmartCrop(image) {
  // Add your smart crop logic here
  // For example, you might modify the image's src or dimensions
}

export default async function decorate(block) {
  // Get the image, text, and alignment properties from the block
  const image = block.querySelector('.imagetext-image');
  const textContent = block.querySelector('.imagetext-text');
  const alignment = block.dataset.alignment || 'left'; // Default to 'left'

  // Apply smart crop if the image element exists
  if (image) {
    const smartCropEnabled = block.dataset.smartCrop === 'true';
    if (smartCropEnabled) {
      applySmartCrop(image);
    }
  }

  // Apply alignment styles
  block.classList.add(`imagetext-${alignment}`);

  // Additional processing for the text content
  if (textContent) {
    textContent.innerHTML = textContent.innerHTML.trim(); // Clean up any extra whitespace
  }
}
