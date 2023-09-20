function Handler(req, res) {
  if ( req.method === 'POST') {
  const {email, name, message } = req.body;

  if(
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim === '' ||
    !message ||
    message.trim() === ''
  ) {
    res.status(422).json({ message: 'Invalid input'});
    return;
  }
} 
}

export default Handler;