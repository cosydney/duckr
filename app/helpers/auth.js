export default function auth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Sydney Coco',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/8/005/03e/007/1142276.jpg',
        uid: 'sydneycoco',
      })
    }, 2000)
  })
}
