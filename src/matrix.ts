// Given an n x n binary matrix image
// Invert the image and return the resulting image.
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

export default function invertImage(image: number[][]): number[][] {
  for (let i = 0; i < image.length; ++i) {
    for (let j = 0; j < image[i].length; ++j) {
      image[i][j] = image[i][j] ^ 1;
    }
  }
  return image;
}
