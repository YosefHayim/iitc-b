// Part 2 Ex 8
const getAllposts = async () => {
  try {
    const response = await fetch('https://api-playground-ten.vercel.app/posts', {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      }
    });

    const data = await response.json();
    console.log(data); 
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
// getAllposts()

// Part 2 Ex 9
const createUl = document.createElement('ul')
const mainDiv = document.querySelector('main')
mainDiv.append(createUl)

const displayPosts = async () => {
  try {
    const response = await fetch('https://api-playground-ten.vercel.app/posts', {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    
    
    data.forEach((post) => {
      const createLi = document.createElement('li')
      createLi.innerHTML = `
      <h3>TITLE: ${post.title}</h3>
      <h5>ID: ${post._id}</h5>
      <p>CONTENT: ${post.content}</p>
      `
      mainDiv.append(createLi)
    });

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
// displayPosts()


// Part 2 Ex 10
const singlePostDisplay = async () => {
  try {
    const response = await fetch('https://api-playground-ten.vercel.app/posts', {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      }
    });

    const data = await response.json();
    const firstPost = data[0]
  
    const createLi = document.createElement('li')
    createLi.innerHTML = `
    <h3>${firstPost.title}</h3>
    <p>${firstPost.content}</p>
    `
    mainDiv.append(createLi)

    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
// singlePostDisplay()

//Part 2 Ex 11
const submitBtn = document.querySelector('.submit');

const createPost = async (title,content) => {
  try {
    const response = await fetch('https://api-playground-ten.vercel.app/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content
      })
    });

    const data = await response.json();
    console.log('Post created:', data);
  } catch (error) {
    console.error('Error creating post:', error.message);
  }
};

submitBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  const inputValueTitle = document.querySelector('.exercise-11-input-title').value;
  const inputValueContent = document.querySelector('.exercise-11-input-content').value;
  createPost(inputValueTitle,inputValueContent);
});

//Part 2 Ex 12
const updatePost = async (postId, title) => {
  try {
    const response = await fetch(`https://api-playground-ten.vercel.app/posts/${postId}`, {
      method: 'PATCH', // Specify the HTTP method for updating
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: 'Updated post content.'
      })
    });

    const data = await response.json();
    console.log('Post updated:', data);
  } catch (error) {
    console.error('Error updating post:', error.message);
  }
};

const updatePostBtn = document.querySelector('.submit-update-post');
updatePostBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  const updatePostTitle = document.querySelector('.exercise-12-input-title').value;
  const idToIdentifyPost = document.querySelector('.exercise-12-input-id-update').value;
  const hideAllPosts = document.querySelector('.display-posts');
  hideAllPosts.style.display = 'none';

  updatePost(idToIdentifyPost, updatePostTitle);
  alert('Post has been updated successfully');
});

//Part 2 Ex 13
const deleteBtnPost = document.querySelector('.submit-delete-post')

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`https://api-playground-ten.vercel.app/posts/${postId}`);
    console.log('Post deleted:', response.data);
  } catch (error) {
    console.error('Error deleting post:', error.response?.data || error.message);
  }
};

deleteBtnPost.addEventListener('click', (ev) => {
  ev.preventDefault();

  const inputDeleteValue = document.querySelector('.exercise-13-input-id').value
  deletePost(inputDeleteValue)

  const formData = document.querySelector('.delete-post')
  formData.reset()

  alert('Post delete successfully')
})

// Part 2 Ex 14 done already at exercise 12

// Part 2 Ex 15
const errorMessage = document.querySelector('.error-message');

const fetchPostById = async (postId) => {
  let functionActivated = false;  

  try {
    functionActivated = true; // Mark as activated
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    
    if (!response.ok) { 
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Fetched post:', data);

    errorMessage.style.display = 'none'; 
  } catch (error) {
    console.error('Fetch error:', error.message);
    errorMessage.textContent = error.message;
    errorMessage.style.display = 'block';     
  } finally {
    if (functionActivated) { 
      console.log("Function was activated and completed");
    } else {
      console.log("Function was not activated");
    }
  }
};

// fetchPostById('invalidId');

// Part 2 Ex 16
// Implemented in question 13

// Part 2 Ex 17 
// Implemented in question 13 & 12

// Part 2 Ex 18
const q18 = async () => {
  try {
    const response = await axios.get('https://api-playground-ten.vercel.app/posts');
    
    response.data.slice(0, 5).forEach(post => {
      console.log(post);
    });

  } catch (error) {
    console.error('Error fetching posts:', error.response?.data || error.message);
  }
};
// q18();

//Part 2 Ex 19
const displayAllPostis = async (filterTitle) => {
  try {
    const response = await axios.get('https://api-playground-ten.vercel.app/posts');
    
    // Filter posts based on the filterTitle
    const filteredPosts = response.data.filter(post => 
      post.title.toLowerCase().includes(filterTitle.toLowerCase())
    );

    console.log('Filtered posts:', filteredPosts);
    let count = 0
    filteredPosts.forEach(post => {
      count++
      const createLi = document.createElement('li')
      createLi.innerHTML = `
      <h1>Title post: ${post.title}</h1>
      <p>content post: ${post.content}{</p>
      <p>post id: ${post._id}</p>
      `
      mainDiv.append(createLi)
    })
    console.log(`Total posts found ${count}`);
    


  } catch (error) {
    console.error('Error fetching posts:', error.response?.data || error.message);
  }
};

// Form submission for filtering posts
const formFilter = document.querySelector('.filter-post');
formFilter.addEventListener('submit', (ev) => {
  ev.preventDefault();
  
  const inputFilter = document.querySelector('.exercise-19-filter-post-by-title-input').value;
  displayAllPostis(inputFilter); // Call the function with the filter value
});


// Part 2 Ex 20
const sortAllPostsByOrder = async () => {
  try {
    const response = await axios.get('https://api-playground-ten.vercel.app/posts');
    
    // Sort posts alphabetically by title
    const sortedPosts = response.data.sort((a, b) => 
      a.title.localeCompare(b.title)
    );

    // Clear the mainDiv before appending new content
    mainDiv.innerHTML = ''; 

    let count = 0;
    sortedPosts.forEach(post => {
      count++;
      const createLi = document.createElement('li');
      createLi.innerHTML = `
        <h1>Title post: ${post.title}</h1>
        <p>Content post: ${post.content}</p>
        <p>Post ID: ${post._id}</p>
      `;
      mainDiv.append(createLi); // Append each post to mainDiv
    });

    console.log(`Total posts found: ${count}`);
  } catch (error) {
    console.error('Error fetching posts:', error.response?.data || error.message);
  }
};

// Event listener to trigger the sorting function
const alphabeticSortBtn = document.querySelector('.sort-alphabetic');
alphabeticSortBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  sortAllPostsByOrder(); // Call the sorting function when the button is clicked
});
