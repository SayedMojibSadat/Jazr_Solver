import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import ResultSection from '../components/ResultSection';

function Home() {
  return (
    <div className='h-screen w-full flex flex-col gap-10'>
      <Header />
      <Hero />
      <ResultSection />
    </div>
  )
}

export default Home