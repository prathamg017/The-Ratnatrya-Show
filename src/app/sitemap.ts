import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://theratnatrayashow.com'

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/sky-king-akash-jain`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
        { url: `${baseUrl}/invite`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/philosophy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ]
}
