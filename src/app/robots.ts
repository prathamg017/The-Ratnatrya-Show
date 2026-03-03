import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/gallery', '/philosophy'],
        },
        sitemap: 'https://theratnatrayashow.com/sitemap.xml',
    }
}
