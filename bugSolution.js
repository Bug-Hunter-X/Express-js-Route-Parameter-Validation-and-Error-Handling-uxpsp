const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId
  if (!/^[0-9]+$/.test(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  // ... some database query to fetch user details ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));