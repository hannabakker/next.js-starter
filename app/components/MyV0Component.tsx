/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yHqehSiY327
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-red-500">
      <div className="relative z-10 text-center p-6 bg-white bg-opacity-80 rounded-md shadow-lg">
        <svg
          className=" mx-auto mb-4 text-red-500 h-24 w-24"
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <blockquote className="mb-4 text-2xl font-semibold">
          "Stay far from timid. Only make moves when your heart's in it, and live the phrase 'Sky's The Limit.'"
        </blockquote>
        <cite className="mb-6 block text-lg text-right">- Biggie Smalls</cite>
        <Button variant="outline">New Quote</Button>
      </div>
    </div>
  )
}

