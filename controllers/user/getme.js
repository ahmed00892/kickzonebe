const User = require('../../models/user');

module.exports = async function getMe (req, res) {
  try {
    // 1. Get the user ID from the token (middleware)
    const userId = req.userData.userId;

    // 2. Find the user in the database
    const user = await User.findById(userId);

    // 3. Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 4. Send the user data
    // (Your model's toJSON transform automatically hides the password)
    res.status(200).json({
      user: user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};