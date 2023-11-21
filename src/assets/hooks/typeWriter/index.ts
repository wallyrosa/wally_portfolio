export function typeWriter(element: Element | null) {
    if(element) {
        const textInArray = element?.innerHTML.split('');
        element.innerHTML = '';
        textInArray.forEach((letter, index) => {
            setTimeout(() => {
                element.innerHTML += letter
            }, 75 * index)
        })
    } else {
        return
    }
}