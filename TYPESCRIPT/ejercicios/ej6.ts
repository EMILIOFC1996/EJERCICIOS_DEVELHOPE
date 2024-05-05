/**
 * START: Follow the instructions below.
 */

type CountryData = {
    name: string;
    languages: string[];
    population: number;
};


// Complete la sintaxis para este tipo mapeado.
// Sugerencia: los tipos asignados son genéricos.
//
// Reemplace el tipo "nunca" con el tipo correcto.
//
// Estos cambios deberían corregir todos los errores de tipo.

type Descriptions<Type> = {
    [Property in keyof Type]: string;
};

const countryDataDescriptions: Descriptions<CountryData> = {
    name: "The name of the country.",
    languages: "The languages spoken in the country.",
    population: "The population of the country.",
};

// ----

export {};
