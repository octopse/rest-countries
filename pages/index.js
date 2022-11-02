import Head from 'next/head'
import { useState } from 'react'

import Search from '../components/Search'
import Filter from '../components/Filter'
import Countries from '../components/Countries'

export default function Home({countries}) {

  const [dropdown, showDropdown] = useState(false);

  const handleDropdown = () => {
    showDropdown(!dropdown)
  }

  return (
    <div className="bg-lmrs-back font-nunito">
      <Head>
        <title>Rest Countries</title>
        <meta name="description" content="List of countries of the world" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap" rel="stylesheet" /> 
      </Head>
      <main className="mt-8 pb-8 w-4/5 mx-auto max-w-[1440px]">
        <section className="flex flex-col
          lg:flex-row lg:justify-between">
          <Search />
          <Filter handleDropdown={handleDropdown} dropdown={dropdown}/>
        </section>
        <section>
          <Countries countries={countries} />
        </section>

      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch(`https://restcountries.com/v3.1/all`)
  const countries = await response.json()

  return {
    props: {countries}
  }
}
