// Function to apply smart cropping to the image
function applySmartCrop(image) {
  // Add your smart crop logic here..
  console.log(image);
}

export default async function decorate(block) {
  console.log('Block dataset image :', block.querySelector('[data-aue-prop="image"]'));
  console.log('Block dataset smartCrop :', block.querySelector('[data-aue-prop="smartCrop"]').textContent);
  console.log('Block dataset text :', block.querySelector('[data-aue-prop="text"]'));
  console.log('Block dataset alignment :', block.querySelector('[data-aue-prop="alignment"]'));
  // Get the image, text, and alignment properties from the block
  const image = block.querySelector('.imagetext-image');
  // Apply smart crop if the image element exists
  if (image) {
    const smartCropEnabled = block.querySelector('[data-aue-prop="smartCrop"]').textContent;
    if (smartCropEnabled) {
      applySmartCrop(image);
    }
  }
}
