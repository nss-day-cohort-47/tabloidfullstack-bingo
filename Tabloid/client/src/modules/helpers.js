export const dateFixer = (post) => {
  const date = new Date(post.publishDateTime);
  const humanDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()

  return humanDate
}