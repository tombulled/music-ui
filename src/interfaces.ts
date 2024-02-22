export interface Image {
    url: string
    height: number | null
    width: number | null
}


export interface Artist {
    id: string
    name: string
    avatar: Image | null
    description: string | null
}
