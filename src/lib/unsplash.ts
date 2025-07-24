// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = 'dEu4gPHLd0SAK2gDrQ8zk94Z6GCeaCGEiW0urqhdzFs';
const UNSPLASH_API_BASE = 'https://api.unsplash.com';

// Product image search queries mapped to categories
const PRODUCT_IMAGE_QUERIES = {
    Electronics: [
        'smartphone', 'mobile phone', 'laptop computer', 'tablet device',
        'camera', 'television', 'smartwatch', 'air fryer', 'refrigerator'
    ],
    Fashion: [
        'jeans', 'kurti', 'shirt', 'running shoes', 'track pants',
        'briefs', 'kurta', 'dress', 'backpack', 'boots', 'kids clothing', 'winter jacket'
    ],
    Jewelry: [
        'necklace', 'earrings', 'gold chain', 'bracelet', 'diamond ring',
        'pendant', 'traditional jewelry', 'nose pin', 'mangalsutra', 'hoop earrings'
    ],
    Audio: [
        'headphones', 'bluetooth speaker', 'wireless headphones', 'earphones',
        'portable speaker', 'audio equipment', 'music device'
    ],
    Computers: [
        'laptop', 'computer', 'gaming laptop', 'mouse', 'keyboard',
        'monitor', 'hard drive', 'ssd', 'ram memory'
    ],
    'Home & Garden': [
        'thermos flask', 'pillow', 'bedsheet', 'led bulb', 'plastic chairs',
        'non-stick pan', 'lunch box', 'mop', 'chopper', 'safe', 'flower vase', 'indoor plant'
    ]
};

// Cache for storing fetched images
const imageCache = new Map<string, string>();

export interface UnsplashImage {
    id: string;
    urls: {
        regular: string;
        small: string;
        thumb: string;
    };
    alt_description: string;
    user: {
        name: string;
        links: {
            html: string;
        };
    };
}

export interface UnsplashSearchResponse {
    results: UnsplashImage[];
    total: number;
    total_pages: number;
}

/**
 * Search for images on Unsplash
 */
export async function searchUnsplashImages(query: string, count: number = 1): Promise<UnsplashImage[]> {
    try {
        const response = await fetch(
            `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
            {
                headers: {
                    'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Unsplash API error: ${response.status}`);
        }

        const data: UnsplashSearchResponse = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching from Unsplash:', error);
        return [];
    }
}

/**
 * Get a product image URL for a specific product
 */
export async function getProductImage(productName: string, category: string): Promise<string> {
    const cacheKey = `${category}-${productName}`;

    // Check cache first
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey)!;
    }

    // 1. Try searching with the product name
    let images = await searchUnsplashImages(productName, 1);
    if (images.length > 0) {
        const imageUrl = images[0].urls.regular;
        imageCache.set(cacheKey, imageUrl);
        return imageUrl;
    }

    // 2. Fallback to category-based queries
    const queries = PRODUCT_IMAGE_QUERIES[category as keyof typeof PRODUCT_IMAGE_QUERIES] || ['product'];
    for (const query of queries) {
        images = await searchUnsplashImages(query, 1);
        if (images.length > 0) {
            const imageUrl = images[0].urls.regular;
            imageCache.set(cacheKey, imageUrl);
            return imageUrl;
        }
    }

    // 3. Fallback to a generic product image
    const fallbackImages = await searchUnsplashImages('product', 1);
    const fallbackUrl = fallbackImages.length > 0 ? fallbackImages[0].urls.regular : '';
    imageCache.set(cacheKey, fallbackUrl);
    return fallbackUrl;
}

/**
 * Trigger download event for Unsplash tracking
 */
export async function triggerUnsplashDownload(imageId: string): Promise<void> {
    try {
        await fetch(`${UNSPLASH_API_BASE}/photos/${imageId}/download`, {
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
        });
    } catch (error) {
        console.error('Error triggering Unsplash download:', error);
    }
}

/**
 * Get Unsplash attribution text
 */
export function getUnsplashAttribution(image: UnsplashImage): string {
    return `Photo by ${image.user.name} on Unsplash`;
}

/**
 * Get Unsplash attribution link
 */
export function getUnsplashAttributionLink(image: UnsplashImage): string {
    return image.user.links.html;
} 