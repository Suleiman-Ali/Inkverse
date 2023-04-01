import { getSession, signIn } from 'next-auth/react';

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });
  return { props: { session } };
}

export default function Home({ session }: any) {
  const login = async () => {
    const data = await signIn('credentials', {
      redirect: false,
      email: 'user@gmail.com',
      password: '71747478',
    });
  };

  return (
    <div>
      {session ? (
        JSON.stringify(session)
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

// DONE: Image Uploads
// DONE: Payment & Order
// DONE: Searching & Filtering & Sorting & Field Limiting & Pagination
// DONE: Error Handling
// DONE: Login & Auths & Protection
// TODO: Refactor
// TODO: Structure / Choose Architecture for components
// TODO: (Later) Generate Image & Image Remove & Images Update & Password Reset
