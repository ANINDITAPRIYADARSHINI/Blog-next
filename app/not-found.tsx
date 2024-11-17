import Link from 'next/link';

export default function NotFound() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Return Home</Link>
      </main>
    );
  }

