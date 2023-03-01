let projects = [
    {
        title: "Product preview card component",
        src: "product-preview-card-component-main",
        url: "https://fem-perfume-product-card.netlify.app/"
    },
    {
        title: "NFT preview card component",
        src: "nft-preview-card-component-main",
        url: "https://frenmentor.netlify.app/nft-preview-card-component-main/index.html"
    },
    {
        title: "Profile card component",
        src: "profile-card-component-main",
        url: "https://frenmentor.netlify.app/profile-card-component-main/index.html"
    },
    {
        title: "Order summary component",
        src: "order-summary-component-main",
        url: "https://frenmentor.netlify.app/order-summary-component-main/index.html"
    },
    {
        title: "QR code component",
        src: "qr-code-component-main",
        url: "https://frenmentor.netlify.app/qr-code-component-main/index.html"
    },
    {
        title: "Base Apparel coming soon page",
        src: "base-apparel-coming-soon-master",
        url: "https://frenmentor.netlify.app/base-apparel-coming-soon-master/index.html"
    },
    {
        title: "Interactive rating component",
        src: "interactive-rating-component-main",
        url: "https://frenmentor.netlify.app/interactive-rating-component-main/index.html"
    },
    {
        title: "Results summary component",
        src: "results-summary-component-main",
        url: "https://frenmentor.netlify.app/results-summary-component-main/index.html"
    },
]

let row = document.querySelector('.row');

projects.forEach(project => {
    let card = createTag('div', 'card');

    let a = createTag('a');
    a.href = project.url;

    let img = createTag('img');
    img.src = project.external ? project.src : `./${project.src}/design/desktop-preview.jpg`;

    a.append(img)

    let cardBody = createTag('div', 'card-body');

    let h5 = createTag('h5', 'mb-3 card-title');
    h5.textContent = project.title;

    let view = createTag('a');
    view.href = project.url;
    view.innerHTML = '<button class="btn btn-info">View</button>'
    cardBody.append(h5, view)

    card.append(a, cardBody);

    row.append(card);
});


function createTag(tag, classList = '') {
    let el = document.createElement(tag)
    el.classList = classList;
    return el;
}
