import Link from 'next/link';
import Image from 'next/image';

import { getAllCourses } from '@/data/course';
import Search from './components/Search';
import FeaturePrice from './components/FeaturePrice';

export default async function Home() {
  const courses: any = await getAllCourses();
  
  return (
    <main>
      <div className='container mx-auto px-4'>
        <Search />
        <div className='flex flex-wrap items-center'>
        {
          courses?.data?.map((course: any, index: number) =>(
            <Link
              href={`/${course?.node?.slug}`}
              className='md:flex md:flex-col md:mr-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] even:mr-0 lg:even:mr-8 mb-8 h-auto border-solid border-2 border-gray-300 rounded'>
                <div>
                  <FeaturePrice price={course?.node?.price}/>
                  <Image
                    src={course?.node?.cover?.src}
                    alt="Picture of the author"
                    width={320} 
                    height={300}
                    className='w-full h-auto' 
                  />
                  <h2 className='text-center font-semibold'>{ course?.node?.name }</h2>
                  
                </div>
            </Link>
          ))

        }
        </div>
      </div>
    </main>
  )
}
