export const getNestedPhotoData = async (query, queryParent, queryParentId) => {
  const url = `https://jsonplaceholder.typicode.com/${query}?${queryParent}=${queryParentId}`
  const response = await fetch(url);
  return await response.json();
}