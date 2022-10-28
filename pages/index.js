import Head from 'next/head'
import Search from '../components/Search'

export default function Home() {
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
      <main className="mt-12 w-4/5 mx-auto">
        <div>
          <Search />
        </div>
      </main>
    </div>
  )
}
