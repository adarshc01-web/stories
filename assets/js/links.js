
const links = [
    {
        url: '/',
        text: 'Home'
    },
    {
        url: '/search',
        text: 'Search'
    },
    {
        url: '/categories',
        text: 'Categories'
    },
    {
        url: '/about',
        text: 'About'
    }
]


document.getElementById('navLinks').innerHTML = `
    ${links.map((item) => `<a href='${item.url}' class='nav__link' onclick='route()'>${item.text}</a>`).join('')}
`;
