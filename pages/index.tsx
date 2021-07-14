import Head from 'next/head';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    let progress = 0;
    let invervalSpeed = 240;
    let incrementSpeed = 1;
    setInterval(
      () =>
        setCompleted(() => {
          if (progress >= 100) {
            progress;
          } else {
            progress += incrementSpeed;
          }
          return progress;
        }),
      invervalSpeed
    );
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Progress Bar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar
        progress={completed}
        bgColorStart="indigo-600"
        txtColorStart="indigo-300"
        bgColorEnd="yellow-500"
        txtColorEnd="yellow-100"
      />
    </div>
  );
}
