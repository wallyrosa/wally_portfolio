export const styleCard = (icon: string) => {
    let color;
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
            color = "#A259FF";
            break;
        default:
            color = "#fff";
    }
    return color;
}