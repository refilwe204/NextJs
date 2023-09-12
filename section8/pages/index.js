import { useRef } from 'react'

function HomePage() {
  const emailInputRef = useRef();
  const FeedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = FeedbackInputRef.current.value;

    fetch(); // { email: 'test@test.com', text: 'Some Feedback text' }
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
    </div>
  );
}

export default HomePage;
