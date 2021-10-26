async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    // shows only the selected post
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    // if there's comments, show the comment text with the post
    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            post_id,
            comment_text
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        // if a comment is added, reload the page to show the added comment
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
    }
}
  
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);