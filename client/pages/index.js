import buildClient from "./api/build-client";

const Loading = ({ currentUser }) => {
 return currentUser ? 
 <h2>You are signed in</h2> 
 : 
 <h2>You are NOT signed in</h2>;
}

Loading.getInitialProps = async (context) => {
  console.log('Landing page');
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser').catch((err) => (err));
  console.log( data );
  return data;
};

export default Loading;