const commentsKey = "vAUByXh5uun5dFWwLARx";
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentsKey}/comments`;

const name = document.getElementById("name");
const insight = document.getElementById("insight");
const commentBtn = document.getElementById("commentBtn");

commentBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  if (name.checkValidity() && insight.checkValidity()) {
    let newComment = {
      item_id: event.target.parentElement.parentElement.id,
      username: name.value,
      myComment: insight.value,
    };
    let response = await createComment(newComment);
    if (response.status == 201) {
      getComments(event.target.parentElement.parentElement.id);
      name.value = "";
      insight.value = "";
    }
  } else {
    name.setCustomValidity("Enter your name and insight");
  }
});

async function createComment({ item_id, username, myComment }) {
  const comment = {
    item_id: item_id,
    username: username,
    comment: myComment,
  };
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

function populateComments(comments) {
  const allComments = document.getElementById("comments");
  allComments.innerHTML = "";
  const commentsCount = document.createElement("h4");
  commentsCount.classList.add("text-center", "mt-5", 'fw-bold', 'color');
  commentsCount.innerHTML = `Comments(${comments.length})`;
  allComments.append(commentsCount);

  comments.forEach((comment) => {
    const commentBox = document.createElement("div");
    commentBox.classList.add("p-3", "my-1");

    const commentTitle = document.createElement("div");
    commentTitle.classList.add("row");

    const commentOwner = document.createElement("span");
    commentOwner.classList.add("align-middle", "fs-5");
    commentOwner.innerHTML = comment.username;

    const commentDate = document.createElement("span");
    commentDate.classList.add("col-md-2");
    commentDate.innerHTML = comment.creation_date;

    const hr = document.createElement("hr");
    hr.classList.add("col-md-6", "m-1");

    const commentText = document.createElement("p");
    commentText.classList.add("px-3");
    commentText.innerHTML = comment.comment;

    commentTitle.append(commentOwner, commentDate);
    commentBox.append(commentTitle, hr, commentText);

    allComments.append(commentBox);
  });
}

async function getComments(id) {
  console.log("get comments called");
  const comUrl = url + "?item_id=" + id;
  const response = await fetch(comUrl).then(async (res) => {
    const temp = await res.json();
    if (temp.length > 0) {
      populateComments(temp);
    } else {
      const allComments = document.getElementById("comments");
      allComments.innerHTML = "";
      const commentsCount = document.createElement("h4");
      commentsCount.classList.add("text-center", "mt-5", 'fw-bold', 'color');
      commentsCount.innerHTML = `Comments(0)`;
      allComments.append(commentsCount);
    }
  });
}

export { createComment, getComments };
