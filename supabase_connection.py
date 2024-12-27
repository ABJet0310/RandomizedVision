from supabase import create_client, Client

# Replace these with your Supabase URL and API Key
url: str = "https://mmnvgddwieosfqjhvvko.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tbnZnZGR3aWVvc2Zxamh2dmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTA3NTUsImV4cCI6MjA1MDg4Njc1NX0.t-oBkQP908JCoVyniyTzA6oxk9bvXCBFFxvq3H7LWUw"

# Create a Supabase client
supabase: Client = create_client(url, key)

try:
    # Example: Fetching data from a table
    response = supabase.table('users').select('*').execute()
    if response.error:
        print("Error fetching data:", response.error)
    else:
        print(response.data)
except Exception as e:
    print("An error occurred:", e)
