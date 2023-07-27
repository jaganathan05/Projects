const Posts = [];

async function updateLastUserActivityTime() {
  try {
    const lastActivityTime = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const lastActivityTime = new Date().getTime();
        resolve(lastActivityTime);
      }, 1000);
    });
    return lastActivityTime;
  } catch (error) {
    console.log(error);
  }
}

async function createPost(data) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        Posts.push(data);
        resolve();
      }, 1000);
    });
  } catch (error) {
    console.log(error);
  }
}

async function deletePost() {
  try {
    const poppedElement = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Posts.length > 0) {
          const poppedElement = Posts.pop();
          resolve(poppedElement);
        } else {
          reject("ERROR: ARRAY IS EMPTY");
        }
      }, 1000);
    });
    return poppedElement;
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  try {
    await createPost(5);
    const lastActivityTime = await updateLastUserActivityTime();
    console.log("Posts created:", Posts);
    console.log("Last Activity Time:", lastActivityTime);

    const deletedPost = await deletePost();
    console.log("Deleted Post:", deletedPost);
    console.log("Posts after deletion:", Posts);

    const deletedPost2 = await deletePost();
    console.log("Deleted Post 2:", deletedPost2);
    console.log("Posts after second deletion:", Posts);
  } catch (error) {
    console.log("Error:", error);
  }
}

main();
