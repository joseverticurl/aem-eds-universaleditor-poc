// Function to apply smart cropping to the image
function applySmartCrop(image) {
  // Add your smart crop logic here..
  const dmBaseUrl = 'https://s7ap1.scene7.com/is/image/wpppartnersandbox';
  // Desktop smart crop name
  const desktop = 'fb600x400';
  // Mobile smart crop name
  const mobile = 'Test250X250';
  const url = image.src;
  const authorBaseUrl = 'https://author-p35060-e135954.adobeaemcloud.com/content/dam/aem-eds-universaleditor-training';
  // Remove the base URL by slicing the string
  let result = url.substring(authorBaseUrl.length);
  result = result.substring(0, result.length - 4);
  let finalUrl = `${dmBaseUrl}${result}`;
  if (window.matchMedia('(max-width: 767px)').matches) {
    finalUrl = `${finalUrl}:${mobile}`; // Mobile devices
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches) {
    finalUrl = `${finalUrl}:${mobile}`; // mobile devices
  } else {
    finalUrl = `${finalUrl}:${desktop}`; // Tablet devices
  }
  image.src = finalUrl;
}

export default async function decorate(block) {
  // console.log('Block dataset image :', block.querySelector('[data-aue-prop="image"]'));
  // console.log('Block dataset smartCrop :', block.querySelector('[data-aue-prop="smartCrop"]').textContent);
  // console.log('Block dataset text :', block.querySelector('[data-aue-prop="text"]'));
  // console.log('Block dataset alignment :', block.querySelector('[data-aue-prop="alignment"]'));
  // Get the image, text, and alignment properties from the block
  const image = block.querySelector('[data-aue-prop="image"]');
  // Apply smart crop if the image element exists
  if (image) {
    const smartCropEnabled = block.querySelector('[data-aue-prop="smartCrop"]').textContent;
    if (smartCropEnabled) {
      console.log('Smart Crop Enabled..');
      applySmartCrop(image);
    }
  }
}
