export interface Professional {
    name: string;
    linkedin: string;
    email: string;
    categories: Category[];
}

export interface Category {
    sort: number;
    id: string;
    title: string;
    description: string;
    skills: Skill[];
}

export interface Skill {
    service: string;
    level: string;
}