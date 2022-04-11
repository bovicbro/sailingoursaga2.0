import type { Blogpost } from './blogpost'

function filterByQuery(list: Blogpost[], query: string): Blogpost[] {
    return list.filter(
        (blogpost): boolean => blogpost.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
}


function filterByTags(list: Blogpost[], selectedTags: string[]): Blogpost[] {
    if (selectedTags.length == 0) {
        return list;
    }

    return list.filter(
        (blogpost): boolean =>
            blogpost.tags.map((tag) => selectedTags.indexOf(tag) !== -1).indexOf(true) !== -1
    );
}

export function filterBlogposts(blogposts: Blogpost[], query: string, tags: string[]): Blogpost[] {
    return filterByQuery(filterByTags(blogposts, tags), query);
}
