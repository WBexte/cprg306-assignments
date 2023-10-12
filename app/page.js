import Image from 'next/image';
import StudentInfo from './StudentInfo';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-2xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <br/>
      <Link href="/week2">Week 2</Link>
      <Link href="/week3">Week 3</Link>
      <Link href="/week4">Week 4</Link>
      <Link href="/week5">Week 5</Link>
      <Link href="/week6">Week 6</Link>
    </main>
  );
}
