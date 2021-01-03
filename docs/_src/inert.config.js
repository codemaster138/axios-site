const config = {
    build: {
        input: "./posts",
        output: "..",
        sassEntry: './scss/index.scss',
        sassFolder: './scss',
        sassOutput: 'index.css',
        templates: {
            home: './templates/home.ejs',
            post: './templates/post.ejs'
        }
    },
    blogName: `Axios Docs`,
    ownerName: `The Axios Project`,
    description: `Promise based HTTP client for the browser and node.js`,
    navLinks: [{
            href: '/',
            text: 'Home'
        },
        {
            href: '/docs',
            text: 'Docs'
        },
        {
            href: 'https://github.com/axios/axios',
            text: 'Source'
        }
    ],
    plugins: ['plugin.js'],
    assets: './assets',
    sidebar: [{
        type: 'heading',
        text: 'Getting Started'
    }, {
        type: 'link',
        href: '/docs/intro',
        text: 'Introduction'
    }, {
        type: 'link',
        href: '/docs/example',
        text: 'Example'
    }, {
        type: 'link',
        href: '/docs/post_example',
        text: 'POST Requests'
    }, {
        type: 'heading',
        text: 'Axios API'
    }, {
        type: 'link',
        href: '/docs/api_intro',
        text: 'Axios API'
    }, {
        type: 'link',
        href: '/docs/instance',
        text: 'The Axios Instance'
    }, {
        type: 'link',
        href: '/docs/req_config',
        text: 'Request Config'
    }, {
        type: 'link',
        href: '/docs/res_schema',
        text: 'Response Schema'
    }, {
        type: 'link',
        href: '/docs/config_defaults',
        text: 'Config Defaults'
    }, {
        type: 'link',
        href: '/docs/interceptors',
        text: 'Interceptors'
    }, {
        type: 'link',
        href: '/docs/handling_errors',
        text: 'Handling Errors'
    }, {
        type: 'link',
        href: '/docs/cancellation',
        text: 'Cancellation'
    }, {
        type: 'link',
        href: '/docs/urlencoded',
        text: 'URL-Encoding Bodies'
    }, {
        type: 'heading',
        text: 'Other'
    }, {
        type: 'link',
        href: '/docs/notes',
        text: 'Notes'
    }]
}

module.exports = config;