// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Filter countries from Asia
        const asiaCountries = data.filter(country => country.region === "Asia");

        // Display filtered countries in the console
        console.log("Countries from Asia:", asiaCountries);
    })
    .catch(error => console.log("Error fetching data:", error));


// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Filter countries with population less than 200,000
        const countriesWithLowPopulation = data.filter(country => country.population < 200000);

        // Display filtered countries in the console
        console.log("Countries with population less than 2 lakhs:", countriesWithLowPopulation);
    })
    .catch(error => console.log("Error fetching data:", error));


// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Iterate over each country and print details
        data.forEach(country => {
            console.log("Name:", country.name.common);
            console.log("Capital:", country.capital);
            console.log("Flag:", country.flags.svg);
            console.log("------------------------");
        });
    })
    .catch(error => console.log("Error fetching data:", error));


// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Calculate total population using reduce function
        const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);

        // Display total population in the console
        console.log("Total Population of Countries:", totalPopulation);
    })
    .catch(error => console.log("Error fetching data:", error));



// Fetch data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        // Filter countries using US dollars as currency
        const usDollarCountries = data.filter(country => {
            const currencies = country.currencies;
            return currencies && currencies.hasOwnProperty("USD");
        });

        // Display countries using US dollars in the console
        console.log("Countries Using US Dollars:", usDollarCountries);
    })
    .catch(error => console.log("Error fetching data:", error));

