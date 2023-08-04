import Link from 'next/link';
import Image from 'next/image';

import { getAllCourses } from '@/data/course';
import Search from './components/Search';

export default async function Home() {
  const courses: any = await getAllCourses();
  
  return (
    <main>
      <div className='container mx-auto px-4'>
        <Search />
        <div className='flex items-center'>
        {
          courses?.data?.map((course: any, index: number) =>(
            <Link
              href={`/${course?.node?.slug}`}>
                <div className=' flex flex-col w-80 h-64 m-2 border-solid border-2 border-gray-300 rounded'>
                  <Image
                    src={course?.node?.cover?.src}
                    alt="Picture of the author"
                    width={320} 
                    height={300} 
                  />
                  <h2 className='text-center font-semibold'>{ course?.node?.name }</h2>
                  <p className="text-center"> 
                    Get it for {course?.node?.price === 0 ? 'Free' : `$${course?.node?.price}`}
                  </p>
                </div>
            </Link>
          ))

        }
        </div>
      </div>
    </main>
  )
}
