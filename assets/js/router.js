const posts = [
    {
        id:1,
        title: 'sanju',
        desc: 'ej2we h33ebdeb dehbrdb',
        img: 'https://indiancdnovel.files.wordpress.com/2021/01/sj1421.jpg?w=293',
        createdAt:'20 jun 2021'
    },
    {
        id:2,
        title: 'love hatae',
        desc: 'ej2we h33ebdeb dehbrdb',
        img: 'https://indiancdnovel.files.wordpress.com/2021/01/sj1421.jpg?w=293',
        createdAt:'24 jun 2021'
    }
]

const route = (e) => {
    e = e || window.event;

        e.preventDefault();
        window.history.pushState({}, "", e.target.href);
        handleLocation();
        

}


const routePost = (e) => {
    e = e || window.event;

        e.preventDefault();
        window.history.pushState({}, "", e.target.parentElement.href);
        handleLocation();

        const param = new URLSearchParams(window.location.search);
        const postId = param.get('id');
        const post = posts.filter((post) => post.id === Number(postId))[0];

        document.getElementById('main').innerHTML = `
            <h1>${post.title}</h1>
            <img src="${post.img}" width="70%"/>
            <p>${post.desc}</p>
            <p>Posted On 👉 ${post.createdAt}</p>
        `;
}



const routes = {
    404: "../../pages/404.html",
    "/":"../../pages/index.html",
    "/search":"../../pages/search.html",
    "/about":"../../pages/about.html",
    "/categories": "../../pages/cats.html",
     "/story":"I am content bro"
}

const content = {
    404: "Not page",
    "/":"hpme page bro",
    "/search":"search here bro",
    "/about":"about sus",
    "/categories": "ctaygdh",
    "/story":"I am content bro"
}

const handleLocation = () => {
    const path = window.location.pathname;
    // const route = routes[path] || routes[404];

    // const html = await fetch(route).then(data => data.text());

    if(path === "/"){
        
        document.getElementById('main').innerHTML = `
            <h1>HEllo</h1>
            ${posts.map(item => `
                    <a href='/story?id=${item.id}' onclick={routePost()}>
                    <h4>${item.title}</h4>
                    <img src="${item.img}" width="200px"/>
                    </a>
                `)}
        `;

    }else{
        const route = content[path] || routes[404];
        document.getElementById('main').innerHTML = route;
    }
}


handleLocation();
window.onpopstate = handleLocation;
window.route = route;