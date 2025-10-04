/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://nikhilsaiankilla.blog', // Replace with your live site when deployed
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    // 👇 Required for App Router
    experimental: {
        appDir: true,
    },
};
