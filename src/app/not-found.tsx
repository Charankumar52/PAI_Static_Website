import Link from "next/link";

export const metadata = {
  title: "Page Not Found – PAI",
};

export default function NotFound() {
  return (
    <main className="flex-1 pt-16 md:pt-20 flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-pai-navy/10 font-roboto-slab mb-4 select-none">
          404
        </div>
        <h1 className="font-roboto-slab text-2xl sm:text-3xl font-bold text-pai-navy mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Head back to the homepage to find what you need.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-pai-navy text-white font-semibold rounded-lg hover:bg-pai-navy-dark transition-colors text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pai-navy focus-visible:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
