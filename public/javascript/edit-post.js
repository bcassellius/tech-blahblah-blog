async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_body = document.getElementById('post-body').value.trim();
    
    // selects 1 post
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, post_body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    // takes user back to dashboard once edits are submitted
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
  
// listens for edit to be submitted
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);