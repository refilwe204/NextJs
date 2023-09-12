import{buildFeedbackPath, extractFeedback} from './feedback';

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath(); // Correctly invoking the function
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
   (feedback) => feedback.Id === feedbackId
   );
   res.status(200).json({ feedback: selectedFeedback });
}

export default handler;