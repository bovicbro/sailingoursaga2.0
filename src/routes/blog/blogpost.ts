type Slug = string;

export type Blogpost = {
    title: string;
    synopsis: string;
    image: string;
    slug: Slug;
    tags?: string[];
    publicationDate: Date;
};
