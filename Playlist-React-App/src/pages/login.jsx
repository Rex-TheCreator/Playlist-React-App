import { generateCodeVerifier, generateCodeChallenge } from '../../utils/auth';

const Login = () => {
  const handleLogin = async () => {
    const verifier = generateCodeVerifier();
    const challenge = await generateCodeChallenge(verifier);

    // Save verifier to session storage
    sessionStorage.setItem('spotify_code_verifier', verifier);

    // Build authorization URL
    const params = new URLSearchParams({
      client_id: '010b77aebe3248299410af370514b77e',
      response_type: 'code',
      redirect_uri: 'http://192.168.0.164:5173/callback',
      scope: 'user-read-private user-read-email',
      code_challenge_method: 'S256',
      code_challenge: challenge,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return (
    <button onClick={handleLogin}>Login with Spotify</button>
  );
};

export default Login;