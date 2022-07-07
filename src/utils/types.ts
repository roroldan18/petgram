
interface users {
    id: string;
    password: string;
    favs:string [];
    avatar: string;
    email: string;
}

interface categories {
    id: number;
    name: string;
    emoji:string;
    cover: string;
    path: string;
}

interface photo {
    id: number;
    categoryId: number;
    src: string;
    userId: number;
    likes: number;
    liked: boolean;
}

type RegisterForm = {
    email: string,
    password: string,
}


type checkType = any;

type PropsChildren = {
    children: React.ReactNode;
};