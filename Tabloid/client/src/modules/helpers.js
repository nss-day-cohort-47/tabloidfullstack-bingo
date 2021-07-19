export const dateFixer = (post) => {
  let humanDate = 'Not Approved'
  if (post.publishDateTime !== null) {
    const date = new Date(post.publishDateTime);
    humanDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
  }

  return humanDate
}