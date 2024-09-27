// Function to apply smart cropping to the image
function applySmartCrop(image) {
  alert(image);
  // Add your smart crop logic here
  // For example, you might modify the image's src or dimensions
}

export default async function decorate(block) {
  console.log('Block dataset image :',block.querySelector('[data-aue-prop="image"]'));
  console.log('Block dataset smartCrop :', block.querySelector('[data-aue-prop="smartCrop"]'));
  console.log('Block dataset text :', block.querySelector('[data-aue-prop="text"]'));
  console.log('Block dataset alignment :', block.querySelector('[data-aue-prop="alignment"]'));
  // Get the image, text, and alignment properties from the block
  const image = block.querySelector('.imagetext-image');
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
  block.classList.add(`imagetext-${block.dataset}`);
}
