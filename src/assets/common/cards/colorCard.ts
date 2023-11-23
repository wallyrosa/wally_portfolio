export const colorCard = (icon?: string) => {
    let color;
    let gradient;
    switch (icon) {
        case 'html':
            color = "#F16E38";
            break;
        case 'react':
            color = "#56D4F5";
            break;
        case 'javascript':
            color = "#F0DB4F";
            break;
        case 'typescript':
            color = "#3077C9";
            break;
        case 'css':
            color = "#5599D3";
            break;
        case 'vue':
            color = "#41B883";
            break;
        case 'material_ui':
            color = "#3A7EF9";
            break;
        case 'figma':
            gradient = "linear-gradient(to bottom, rgba(242, 78, 30, 1), rgba(162, 89, 255, 1), rgba(10, 207, 131, 1), rgba(26, 188, 254, 1)) 1";
            color = "#A259FF";
            break;
        case 'screenShare':
            color = "#55be5a";
            break;
        case 'github':
            color = "var(--red-color)";
            break;
        case 'linkedin':
            color = "var(--yellow-color)";
            break;
        case 'whatsapp':
            color = "var(--green-color)";
            break;
        default:
            color = "#fff";
            gradient = "none";
    }
    return {color, gradient};
}