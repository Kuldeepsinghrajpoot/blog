import React from 'react'
import BlogPostCards from './blog/page';
import Image from 'next/image';

function page() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto  z-50 lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-card-foreground  md:text-4xl">
            A <span className="font-semibold">free repository</span> for community.
          </h1>
         <p className="mt-4 text-lg">
    Open source free repository <br className="hidden lg:block" /> enhance your coding learning experience!
</p>
          {/* <div className="mt-6 bg-transparent border rounded-lg  lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="Search Components" required={true} className="flex-1 h-10 px-4 m-1  placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12  focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <Button type="submit" className="flex items-center justify-center w-full p-2 m-1 transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </form>
          </div> */}
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image src="/website-designer-bro-purple.svg" alt="blogs" className="w-full h-full max-w-md mx-auto" width={100} height={100} />
        </div>
      </section>
      {/* price section */}
      <section className='border-t'>

        <BlogPostCards />
      </section>


      <footer className=" bg-muted/40 py-5 text-center border-t">
    <div className="mb-5">
      <p className="m-0">&copy; {new Date().getFullYear()} Student Power Club. All rights reserved.</p>
      {/* <ul className="list-none p-0 flex justify-center gap-4 mt-2">
        <li><a href="https://www.facebook.com/studentpowerclub" target="_blank" className="text-white no-underline hover:underline">Facebook</a></li>
        <li><a href="https://www.twitter.com/studentpowerclub" target="_blank" className="text-white no-underline hover:underline">Twitter</a></li>
        <li><a href="https://www.instagram.com/studentpowerclub" target="_blank" className="text-white no-underline hover:underline">Instagram</a></li>
      </ul> */}
    </div>
    <div>
      {/* <p className="m-0">Contact us: <a href="mailto:info@studentpowerclub.com" className="text-white no-underline hover:underline">info@studentpowerclub.com</a></p> */}
    </div>
  </footer>


    </main>
  )
}

export default page


