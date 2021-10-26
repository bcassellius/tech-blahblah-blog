async function deleteFormHandler(event) {
    event.preventDefault();
    
    // shows only 1 post that was selected
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    // takes user to dashboard by default when the delete is submitted
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}
  
// listen for delete button to be pushed
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);