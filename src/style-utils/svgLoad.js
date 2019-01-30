import xmlserializer from 'xmlserializer';

export default function svgLoad(svg) {
    console.log(svg);
    const container = document.createElement('div');
    container.innerHTML = svg;
    const s = xmlserializer.serializeToString(container.querySelector('svg'));
    return `data:image/svg+xml;base64,${window.btoa(s)}`;
}
