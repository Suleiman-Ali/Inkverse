import api from '../configs/axios-config';
import { signIn } from 'next-auth/react';

export default function AddReviews() {
  const addReviews = async () => {
    await signIn('credentials', {
      redirect: false,
      email: 'user@gmail.com',
      password: '71747478',
    });
    const reviews = [
      {
        product: '6443b3c290e73571c022e939',
        title: 'A Classic Guide to Value Investing',
        text: "The Intelligent Investor is a classic guide to value investing, written by Benjamin Graham, one of the most respected investors of all time. Graham's book is full of wisdom and insights that can help investors of all levels make better investment decisions.",
        rate: 5,
      },
      {
        product: '6443b3c290e73571c022e939',
        title: 'A Must-Read for Any Investor',
        text: "The Intelligent Investor is a must-read for any investor, regardless of their experience level. Graham's book provides a comprehensive overview of value investing, and it is packed with practical advice that can help investors make better decisions.",
        rate: 4.5,
      },
      {
        product: '6443b3c290e73571c022e939',
        title: 'A Timeless Classic',
        text: "The Intelligent Investor is a timeless classic that has stood the test of time. Graham's book is as relevant today as it was when it was first published in 1949. It is a must-read for any investor who wants to learn the fundamentals of value investing.",
        rate: 4,
      },
      {
        product: '6443b3c290e73571c022e939',
        title: 'A Brilliant Guide to Investing',
        text: "The Intelligent Investor is a brilliant guide to investing. Graham's book is full of wisdom and insights that can help investors of all levels make better investment decisions. It is a must-read for anyone who wants to learn how to invest wisely.",
        rate: 4.5,
      },
      {
        product: '6443b3c290e73571c022e939',
        title: 'A Valuable Resource for Investors',
        text: "The Intelligent Investor is a valuable resource for investors. Graham's book provides a comprehensive overview of value investing, and it is packed with practical advice that can help investors make better decisions. It is a must-read for any investor who wants to learn the fundamentals of value investing.",
        rate: 5,
      },
    ];
    for (const review of reviews) await api.post('/review', review);
  };

  return (
    <div>
      <button onClick={addReviews}>Add Reviews</button>
    </div>
  );
}
