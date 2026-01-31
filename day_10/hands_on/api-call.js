// const getPhotosDataPromise = () => {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((photos) => resolve(photos))
//       .catch((error) => reject(error));
//   });
// };

// Usage
// getPhotosDataPromise()
//   .then((photosData) => {
//     console.log(photosData.slice(0, 5));
//   })
//   .catch((error) => {
//     console.error("Error fetching photos:", error);
//   });

const loopTitle = async (photos) => {
  for (const photo of photos) {
    console.log(photo.title);
  }
};

getPhotosDataPromise()
  .then((photosData) => {
    loopTitle(photosData.slice(0, 5));
  })
  .catch((error) => {
    console.error("Error fetching photos for titles:", error);
});

console.log(getPhotosDataPromise());
