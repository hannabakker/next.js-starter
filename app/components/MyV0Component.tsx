/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iLoXMB9u0v1
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-red-500">
      <div className="absolute inset-0 bg-red-600 opacity-50" />
      <div className="relative z-10 text-center p-6 bg-white bg-opacity-80 rounded-md shadow-lg">
        <img
          alt="Love Heart"
          className="mx-auto mb-4 filter hue-rotate-120"
          height="100"
          src="/placeholder.svg"
          style={{
            aspectRatio: "100/100",
            objectFit: "cover",
          }}
          width="100"
        />
        <blockquote className="mb-4 text-2xl font-semibold">
          "Stay far from timid. Only make moves when your heart's in it, and live the phrase 'Sky's The Limit.'"
        </blockquote>
        <cite className="mb-6 block text-lg text-right">- Biggie Smalls</cite>
        <Button variant="outline">New Quote</Button>
      </div>
    </div>
  )
}

