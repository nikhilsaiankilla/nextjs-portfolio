// types/portfolio.ts
export type Skill = {
    id: string;
    name: string;
    category: string;
    image?: string;
    createdAt?: number;
    updatedAt?: number;
};

export type Project = {
    id: string;
    title: string;
    image: string;
    tagline?: string;
    problem?: string;
    description?: string;
    githubUrl?: string;
    demoUrl: string;
    createdAt?: number;
    updatedAt?: number;
    skills: string[];
};

export type Article = {
    id: string;
    title: string;
    tagline?: string;
    description?: string;
    image?: string;
    createdAt?: number;
    updatedAt?: number;
};

export type Resume = {
    id: string;
    title: string;
    fileUrl: string;
    createdAt?: number;
    updatedAt?: number;
};
