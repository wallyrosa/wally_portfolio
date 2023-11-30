export function goTo(elementId: any) {
  var element = document.querySelector(elementId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
    });
  }
}
