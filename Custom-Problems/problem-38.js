/*
Problem 138: Unique Tag Extractor using ES6 Set & FlatMap
Difficulty: Medium
Function Name: getUniqueTags

Description:
Write a function that accepts an array of blog post objects, flattens all `tags` arrays into a single array,
and removes all duplicate tags using ES6 `flatMap()` and `Set`.

Input:
An array of post objects where each post contains a `tags` array.

Output:
An array of unique string tags.

Validation Rules:
Return "Invalid" if:
1. Input is not an array or is empty.
2. Any post is not an object or is missing the `tags` array.
3. Any item inside the `tags` array is not a string.
*/

function getUniqueTags(posts) {
    if (!Array.isArray(posts) || posts.length === 0) {
        return "Invalid";
    }

    for (const post of posts) {
        if (typeof post !== "object" || post === null || !Array.isArray(post.tags)) {
            return "Invalid";
        }

        for (const tag of post.tags) {
            if (typeof tag !== "string") {
                return "Invalid";
            }
        }
    }

    const allTags = posts.flatMap(post => post.tags);
    return [...new Set(allTags)];
}

// const posts = [
//     { title: "JS Intro", tags: ["js", "web", "coding"] },
//     { title: "React Guide", tags: ["react", "js", "frontend"] },
//     { title: "CSS Tips", tags: ["css", "web"] }
// ];

// console.log(getUniqueTags(posts));