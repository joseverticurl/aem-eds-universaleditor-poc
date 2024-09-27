export default function decorate(block) {
  alert('Hi..');
  const footer = document.createElement('div');
  block.append(footer);
}
