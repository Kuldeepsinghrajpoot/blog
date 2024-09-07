import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
  const clients = [
    { name: "Client A", description: "Vexillologist pitchfork", imgSrc: "https://dummyimage.com/200x200" },
    { name: "Client B", description: "Tumeric plaid portland", imgSrc: "https://dummyimage.com/201x201" },
    { name: "Client C", description: "Hexagon neutra unicorn", imgSrc: "https://dummyimage.com/202x202" },
    { name: "Client D", description: "Mixtape chillwave tumeric", imgSrc: "https://dummyimage.com/203x203" }
  ];

  return (
    <main>
      <section className="container px-4 py-10 mx-auto  z-50 lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-card-foreground  md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg  ">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg  lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="Search Components" required={true} className="flex-1 h-10 px-4 m-1  placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12  focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <Button type="submit" className="flex items-center justify-center w-full p-2 m-1 transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          {/* <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" /> */}
        </div>
      </section>
      {/* price section */}
      <section className=" text-card-foreground bg-muted/40 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">Pricing</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 focus:outline-none">Monthly</button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border  flex flex-col  overflow-hidden bg-background transition-transform duration-500 hover:scale-105">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                <h1 className="text-5xl  pb-4 mb-4 border-b  leading-none">Free</h1>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <Button className="flex items-center mt-auto  border py-2 px-4 w-full focus:outline-none ">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="text-xs  mt-3">Literally you probably haven &apos; t heard of them jean shorts.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border border-indigo-500 flex flex-col  overflow-hidden bg-background transition-transform duration-500 hover:scale-105">

                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b ">
                  <span>$38</span>
                  <span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p className="flex items-center mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <Button className="flex items-center mt-auto bg-indigo-500 border py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="text-xs  mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border  flex flex-col  overflow-hidden bg-background transition-transform duration-500 hover:scale-105">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b ">
                  <span>$56</span>
                  <span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p className="flex items-center mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <Button className="flex items-center mt-auto  border py-2 px-4 w-full focus:outline-none ">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="text-xs  mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border  flex flex-col  overflow-hidden bg-background transition-transform duration-500 hover:scale-105">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">SPECIAL</h2>
                <h1 className="text-5xl  leading-none flex items-center pb-4 mb-4 border-b ">
                  <span>$72</span>
                  <span className="text-lg ml-1 font-normal ">/mo</span>
                </h1>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p className="flex items-center mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center   rounded-full flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <Button className="flex items-center mt-auto   border py-2 px-4 w-full focus:outline-none ">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="text-xs  mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section className="text-card-foreground bg-muted/20 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">Our Clients</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {clients.map((client, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border flex flex-col overflow-hidden bg-background transition-transform duration-500 hover:scale-105">
                {/* <img alt="client" className="block mx-auto mb-4 rounded-full w-32 h-32 object-cover object-center" src={client.imgSrc} /> */}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{client.name}</h2>
                <p className="flex items-center mb-6">{client.description}</p>
                <button className="flex items-center mt-auto border py-2 px-4 w-full focus:outline-none">
                  Contact
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     
    </main>
  )
}

export default page


