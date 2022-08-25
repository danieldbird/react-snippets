export const fetchImages = async () => {
  const response = await fetch(`https://picsum.photos/v2/list?page=1&limit=20`);
  return await response.json();
};
