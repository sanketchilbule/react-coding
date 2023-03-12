import React, { useState } from "react";

//
const countries = [
  { name: "india", value: "IN", cities: [" delhi", "mumbai"] },
  { name: "usa", value: "D", cities: ["ny", "wdc"] },
  { name: "aus", value: "AD", cities: [" canabara", "perth"] },
];

const Dropdown = () => {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });
  return (
    <div>
     {/* 1st dropdown */}
      <label htmlFor="country">countries</label>
      <select value={country} 
        onChange={(e) =>{  setCountry(e.target.value)}} >

        { countries.map((elem, id) => {
          return <option value={id}> {elem.name}</option>;
        })}
      </select>
      {/* 2nd dropdown */}
      <select value={country}>
        {countries[country].cities.map((elem, id) => {
          return <option value={id}> {elem}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;

//   <option value="india">india</option>
//       <option value="usa">usa</option>
//       <option value="aus">aus</option>
//

//
// import React  from 'react'
// const countries = [
//     {
//       name: 'Asia',
//       subCountries: [
//         { name: 'India' },
//         { name: 'China' },
//         { name: 'Japan' },
//         { name: 'South Korea' }
//       ]
//     },
//     {
//       name: 'Europe',
//       subCountries: [
//         { name: 'France' },
//         { name: 'Germany' },
//         { name: 'Italy' },
//         { name: 'Spain' }
//       ]
//     },
//     {
//       name: 'North America',
//       subCountries: [
//         { name: 'Canada' },
//         { name: 'USA' },
//         { name: 'Mexico' }
//       ]
//     },
//     {
//       name: 'South America',
//       subCountries: [
//         { name: 'Brazil' },
//         { name: 'Argentina' },
//         { name: 'Colombia' }
//       ]
//     }
//   ];

//   const MainDropdown = ({ countries }) => {
//     const [isOpen, setIsOpen] = React.useState(false);
//     const [selectedCountry, setSelectedCountry] = React.useState(null);
//     const [selectedSubCountry, setSelectedSubCountry] = React.useState('');

//     const handleToggle = () => {
//       setIsOpen(!isOpen);
//     };

//     return (
//       <div className="dropdown">
//         <button onClick={handleToggle}>
//           {selectedCountry ? selectedCountry.name : selectedSubCountry || 'Select a country'}
//         </button>
//         {isOpen && (
//           <ul className="dropdown-menu">
//             {countries.map(country => (
//               <li key={country.name}>
//                 <button onClick={() => setSelectedCountry(country)}>
//                   {country.name}
//                 </button>
//                 {country.subCountries && selectedCountry === country && (
//                   <SubDropdown
//                     subCountries={country.subCountries}
//                     onSelect={setSelectedSubCountry}
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };
//   const SubDropdown = ({ subCountries, onSelect }) => {
//     return (
//       <ul className="sub-dropdown-menu">
//         {subCountries.map(subCountry => (
//           <li key={subCountry.name}>
//             <button onClick={() => onSelect(subCountry.name)}>
//               {subCountry.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const Dropdown = () => {
//     return (
//       <div className="App">
//         <MainDropdown countries={countries} />
//       </div>
//     );
//   };
//   export default Dropdown
