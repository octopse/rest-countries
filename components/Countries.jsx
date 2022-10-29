
import CountryCard from './CountryCard'

function Countries({countries}) {
  return (
    <div className="flex flex-col mt-8 mx-auto space-y-10
      xsm:flex-row xsm:flex-wrap">
      {countries.map((country) => (
        <CountryCard key={country.cca2} country={country}/>
      ))}
    </div>
  )
}

export default Countries