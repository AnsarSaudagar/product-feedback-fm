export interface Comments {
    id: number;
    content?: string;
    user?: User;
}

interface User {
    image?: string
    name?: string;
    username?: string;
}
