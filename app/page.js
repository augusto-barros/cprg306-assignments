import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="animated-background flex flex-col justify-center items-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-y-4 text-lg">
        <li>
          <Link href="week-2" className="text-pink-300 hover:text-pink-500">Week 2</Link>
        </li>
        <li>
          <Link href="week-3" className="text-pink-300 hover:text-pink-500">Week 3</Link>
        </li>
        <li>
          <Link href="week-4" className="text-pink-300 hover:text-pink-500">Week 4</Link>
        </li>
        <li>
          <Link href="week-5" className="text-pink-300 hover:text-pink-500">Week 5</Link>
        </li>
        <li>
          <Link href="week-6" className="text-pink-300 hover:text-pink-500">Week 6</Link>
        </li>
      </ul>
    </main>
  );
}
