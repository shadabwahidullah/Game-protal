const commentsKey = 'vAUByXh5uun5dFWwLARx';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentsKey}/comments`;

async function createComment({ itemId, username, myComment }) {
  const comment = {
    itemId,
    username,
    comment: myComment,
  };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}

export { createComment as default };