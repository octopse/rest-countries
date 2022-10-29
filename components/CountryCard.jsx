
function CountryCard({country}){
  return(
    <div className="mt-8 bg-lmrs-element text-lmrs-text shadow rounded-md overflow-hidden
      xsm:w-2/5 xsm:min-w-[47%]
      sm:w-[30%] sm:min-w-[30%]
      lg:w-1/5 lg:min-w-[23%]">
      <img src={country.flags.png} alt={country.name + "flag"} className="w-full object-cover cursor-pointer"></img>
      <div className="text-sm p-5 space-y-1 font-semibold">
        <h3 className="text-lg font-extrabold mb-2">{country.name.common}</h3>
        <p>Population: <span className="font-light">{numberWithCommas(country.population)}</span></p>
        <p>Region: <span className="font-light">{country.region}</span></p>
        <p>Capital: <span className="font-light">{country.capital}</span></p>
      </div>
    </div>
  )
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default CountryCard