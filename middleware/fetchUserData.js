const { createClient } = require('@supabase/supabase-js');

// Supabase setup
const supabaseUrl = "https://mmnvgddwieosfqjhvvko.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tbnZnZGR3aWVvc2Zxamh2dmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTA3NTUsImV4cCI6MjA1MDg4Njc1NX0.t-oBkQP908JCoVyniyTzA6oxk9bvXCBFFxvq3H7LWUw"; // Replace with your actual key
const supabase = createClient(supabaseUrl, supabaseKey);

const fetchUserData = async (req, res, next) => {
    const userId = req.session.userId;
    if (!userId) {
        return next();
    }

    try {
        const { data, error } = await supabase
            .from('users')
            .select('username, pfp')
            .eq('id', userId)
            .single();

        if (error) {
            console.error("Error fetching user data:", error);
            return next();
        }

        req.userData = data;
        console.log('Middleware fetched user data:', data); // Debugging line
        next();
    } catch (err) {
        console.error("Error fetching user data:", err);
        next();
    }
};

module.exports = fetchUserData;
