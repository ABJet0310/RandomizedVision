const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const authenticateUser = require('../middleware/authenticateUser');

const router = express.Router();

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_API_KEY');

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ message: 'Signup successful', user });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) return res.status(400).json({ error: error.message });
    res.status(200).json({ message: 'Login successful', user });
});

// Example of a protected route
router.get('/profile', authenticateUser, (req, res) => {
    res.json({ message: 'Access granted!', user: req.user });
});

module.exports = router;
