
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className="h-screen w-full pt-20 flex flex-col gap-5 justify-center items-center space-y-3">
 
    <div className="flex items-center space-x-4 w-full px-20 ">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 w-full">
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>

  <Skeleton className="h-screen w-[90%] m-auto rounded-xl " />

  </div>


  )
}
