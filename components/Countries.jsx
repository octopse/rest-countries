
import CountryCard from './CountryCard'

function Countries({countries}) {
  return (
    <div className="flex flex-wrap space-x-16">
        {countries.map((country) => (
            <CountryCard key={country.cca2} country={country}/>
        ))}
    </div>
  )
}

export default Countries