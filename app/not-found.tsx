import Link from 'next/link';

export const runtime = 'edge';

export default function NotFound() {
  const containerClasses = 'text-center, pt-20';
  const headingClasses = 'text-3xl, mb-8';
  const linkClasses = 'text-blue-500, underline';

  return (
    <div className={containerClasses}>
      <h1 className={headingClasses}>Not found – 404!</h1>
      <div className="text-lg">
        <Link href="/" className={linkClasses}>Go back to Home</Link>
      </div>
    </div>
  );
}