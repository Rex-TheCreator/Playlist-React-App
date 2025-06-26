import { codeVerifier, codeChallenge } from '../../utils/auth';

const Login = () => {
  const handleLogin = async () => {

    sessionStorage.setItem('spotify_code_verifier', codeVerifier);
    let clientId = '010b77aebe3248299410af370514b77e';
    let scope = 'user-read-private user-read-email'
    let redirectUri = 'https://localhost:5173/callback';

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  };

  return (
    <button onClick={handleLogin}>Login with Spotify</button>
  );
};

export default Login;