const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }
    // Add token verification logic here
    // For example: req.user = decodedTokenData
    req.user = { id: '123', email: 'test@example.com' }; // Mocked user for testing
    next();
};

module.exports = authenticateUser;
