import { useRef, useState } from 'react'

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);


  const emailInputRef = useRef();
  const FeedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = FeedbackInputRef.current.value;

    const reqBody ={ email: enteredEmail, text: enteredFeedback};

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler(handler) {
    fetch('/api/feedback') 
      .then((response) => response.json())
      .then((data) => 
        setFeedbackItems(data.feedback) // Update feedbackItems with the fetched data
      );
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
        <label htmlFor="email">Your Email Address</label>
        <input type="email" id='email' ref={emailInputRef} />
        </div>
        <div>
        <label htmlFor="feedback">Your feedback</label>
        <textarea id='feedback' rows='5' ref={FeedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
  ))}
</ul>
</div>
  );
}

export default HomePage;
