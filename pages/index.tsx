import axios from 'axios';
import { getSession, signIn } from 'next-auth/react';
import { useState } from 'react';

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });
  return { props: { session } };
}

export default function Home({ session }: any) {
  const [file, setFile] = useState<any>();

  const login = async () => {
    const data = await signIn('credentials', {
      redirect: false,
      email: 'test@gmail.com',
      password: '71747478',
    });
  };

  const create = async () => {
    // const form = new FormData();
    // form.append('images', file);
    // form.append('name', 'product 1');
    // form.append('authorName', 'product 1 author');
    // form.append('description', 'product 1 description');
    // form.append('price', '15');
    // form.append('categories', '642548312af87b14ec573bd0');
    // const { data } = await axios.post('/api/product', form);
    // console.log(data);
  };

  return (
    <div>
      {session ? (
        <p>{JSON.stringify(session)}</p>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <hr />
      <button onClick={create}>Create</button>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          e.preventDefault();
          if (e.target && e.target.files) setFile(e.target.files[0]);
        }}
      />
    </div>
  );
}

// DONE: Image Uploads
// DONE: Payment & Order
// DONE: Searching & Filtering & Sorting & Field Limiting & Pagination
// DONE: Error Handling
// DONE: Login & Auths & Protection
// DONE: Remove association between order & product
// TODO: Refactoring
// TODO: Generate Image & Image Remove
// TODO: Images Update & Password Reset
// TODO: Structure lib/utils
// TODO: Static-type the Back-end
