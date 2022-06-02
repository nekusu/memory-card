async function cacheImages(images) {
  const promises = images.map(image => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = image;
      img.onload = () => resolve(image);
      img.onerror = reject;
    });
  });
  return Promise.all(promises);
}

export default cacheImages;
