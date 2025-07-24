import { useEffect, useState } from 'react';
import { getProductImage, triggerUnsplashDownload } from '../lib/unsplash';

interface UseUnsplashImageReturn {
    imageUrl: string | null;
    isLoading: boolean;
    error: string | null;
    attribution: string | null;
    attributionLink: string | null;
}

export function useUnsplashImage(productName: string, category: string): UseUnsplashImageReturn {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [attribution, setAttribution] = useState<string | null>(null);
    const [attributionLink, setAttributionLink] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadImage = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Get image URL from Unsplash
                const url = await getProductImage(productName, category);

                if (isMounted) {
                    if (url) {
                        setImageUrl(url);

                        // Extract image ID from URL for attribution
                        const imageIdMatch = url.match(/photos\/([^/]+)/);
                        if (imageIdMatch) {
                            const imageId = imageIdMatch[1];

                            // Trigger download for Unsplash tracking
                            await triggerUnsplashDownload(imageId);

                            // Set attribution (we'll get this from the search response)
                            setAttribution('Photo on Unsplash');
                            setAttributionLink('https://unsplash.com');
                        }
                    } else {
                        setError('No image found');
                    }
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : 'Failed to load image');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadImage();

        return () => {
            isMounted = false;
        };
    }, [productName, category]);

    return {
        imageUrl,
        isLoading,
        error,
        attribution,
        attributionLink,
    };
} 