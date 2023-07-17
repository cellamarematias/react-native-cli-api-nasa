export type PostImage = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
}

// cada ruta y sus parámetros
export type RouteStackParam = {
    Home: undefined;
    Detail: PostImage;
    Image: PostImage;
}