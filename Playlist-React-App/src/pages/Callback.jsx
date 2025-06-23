import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = ({ onSuccess }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const exchangeToken = async () => {
      // Get code from URL
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (!code) return;

      // Retrieve saved code_verifier
      const verifier = sessionStorage.getItem('spotify_code_verifier');
      sessionStorage.removeItem('spotify_code_verifier');

      try {
        // Request access token
        const payload = new URLSearchParams({
          client_id: '010b77aebe3248299410af370514b77e',
          grant_type: 'authorization_code',
          code,
          redirect_uri: 'http://localhost:5173/callback',
          code_verifier: verifier,
        });

        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: payload,
        });

        const data = await response.json();
        console.log('Access Token:', data.access_token);
        // Store token securely (e.g., React context or memory)
        navigate('/'); // Redirect to home
      } catch (error) {
        console.error('Token exchange failed:', error);
      }

      if (data.access_token) {
        onSuccess(); // Trigger auth state change
        navigate('./homePage'); // Redirect to main app
      }
    };

    exchangeToken();
  }, [navigate, onSuccess]);

  return <div>Processing login...</div>;
};

export default Callback;