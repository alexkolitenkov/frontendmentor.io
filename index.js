let projects = [
    {
        title: "Product preview card component",
        src: "product-preview-card-component",
        url: "https://fem-perfume-product-card.netlify.app"
    },
    {
        title: "NFT preview card component",
        src: "nft-preview-card-component-main",
        url: "https://fem-nft-card-component.netlify.app"
    },
    {
        title: "Profile card component",
        src: "profile-card-component-main",
        url: "https://fem-profilecard-component.netlify.app"
    },
    {
        title: "Order summary component",
        src: "order-summary-component-main",
        url: "https://order-summary-component-f-e-m.netlify.app"
    },
    {
        title: "QR code component",
        src: "qr-code-component-main",
        url: "https://fem-qr-component.netlify.app"
    },
    {
        title: "Base Apparel coming soon page",
        src: "base-apparel-coming-soon-master",
        url: "https://base-apparel-main.netlify.app"
    },
    {
        title: "Interactive rating component",
        src: "interactive-rating-component-main",
        url: "https://primary-rating-component.netlify.app"
    },
    {
        title: "Results summary component",
        src: "results-summary-component-main",
        url: "https://fem-results-summary.netlify.app"
    },
    {
        title: "Stats preview card component",
        src: "stats-preview-card-component-main",
        url: "https://main-stats-preview-component.netlify.app/"
    },
    {
        title: "3-column preview card component",
        src: "3-column-preview-card-component-main",
        url: "https://multicolumn-preview-card.netlify.app/"
    },
    {
        title: "FAQ accordion card",
        src: "faq-accordion-card-main",
        url: "https://ak-faq-accordion-card.netlify.app/"
    },
    {
        title: "Social proof section",
        src: "social-proof-section-master",
        url: "https://ak-social-proof-section.netlify.app/"
    },
    {
        title: "Article preview component",
        src: "article-preview-component-master",
        url: "https://ak-article-preview-component.netlify.app/"
    }
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

    let view = createTag('a', 'anchor');
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
