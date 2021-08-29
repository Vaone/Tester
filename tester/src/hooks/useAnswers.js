import React, {useMemo} from "react";

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(()=> {
    if(query) {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }
    return sortedPosts;
  }, [sortedPosts, query]);
  return sortedAndSearchedPosts;
}