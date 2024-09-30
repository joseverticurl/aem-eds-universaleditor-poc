// Function to apply smart cropping to the image
function applySmartCrop(image) {

  // Add your smart crop logic here..

  //Base url for scene : https://s7ap1.scene7.com/is/image/wpppartnersandbox
  //Desktop smart crop name : fb600x400
  //Mobile smart crop name  : Test250X250

  // step 1 : Get the source from img tag [src="/content/dam/aem-eds-universaleditor-training/peak-performance.png]"
  // step 2 : Get the path after /content/dam/aem-eds-universaleditor-training/
  // step 3 : Append the path with base url and append the smart crop name as shown below
    // Desktop scene7 url  : https://s7ap1.scene7.com/is/image/wpppartnersandbox/peak-performance:fb600x400?fmt=png-alpha
    // Mobile scene7 url   : https://s7ap1.scene7.com/is/image/wpppartnersandbox/peak-performance:Test250X250?fmt=png-alpha
  
}

export default async function decorate(block) {
  console.log('Block dataset image :', block.querySelector('[data-aue-prop="image"]'));
  console.log('Block dataset smartCrop :', block.querySelector('[data-aue-prop="smartCrop"]'));
  console.log('Block dataset text :', block.querySelector('[data-aue-prop="text"]'));
  console.log('Block dataset alignment :', block.querySelector('[data-aue-prop="alignment"]'));
  // Get the image, text, and alignment properties from the block
  const image = block.querySelector('.imagetext-image');
  const alignment = block.dataset.alignment || 'left'; // Default to 'left'

  // Apply smart crop if the image element exists
  if (image) {
    const smartCropEnabled = true;
    if (smartCropEnabled) {
      applySmartCrop(image);
    }
  } 
}
