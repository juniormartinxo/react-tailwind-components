import Head from 'next/head';
import { ProgressBar } from 'components/ProgressBar/ProgressBar';
import { useState } from 'react';

export default function Home() {
  const [completed, setCompleted] = useState('progress');
  const [visibleProgress, setVisibleProgress] = useState('status');

  function upar() {
    let progress = 0;
    const intervalSpeed = 240;
    const incrementSpeed = 1;

    setVisibleProgress('show');
    setCompleted(progress);

    const intervalId = setInterval(function () {
      if (progress <= 100) {
        setCompleted(progress);

        if (progress === 100) {
          setVisibleProgress('');
          setCompleted(0);
          clearInterval(intervalId);
        }
      }

      progress += incrementSpeed;
    }, intervalSpeed);
  }

  return (
    <div className="container w-1/2 mx-auto">
      <Head>
        <title>Progress Bar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProgressBar progress={completed} status={visibleProgress} />
      <div>
        <button
          type="button"
          className="my-5 mx-auto w-1/2 flex justify-center bg-blue-500 text-gray-100 p-2 rounded-full tracking-wide font-semibold focus:outline-none hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          onClick={upar}
        >
          Click me
        </button>
      </div>
    </div>
  );
}
