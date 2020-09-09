import {
    gender,
    bloodType,
    name,
    surname,
    birthdate,
    size,
} from "./mod.ts"
import { Material, tuple } from "https://raw.githubusercontent.com/randkid/Randkid/master/mod.ts"

const randkid = new Material({
    inputMaterials: tuple([
        gender,
        bloodType,
        name,
        surname,
        birthdate,
        size,
    ]),
    rand(seed, gender, bloodType, name, surname, birthdate, size,){
        const height = ~~size[4] / 10
        const weight = ~~(size[size.length - 12] * 10) / 10
return `
${surname.match(/.* (.*)\(.*\)/)?.[1]}${name} (${gender == "f" ? "여" : "남"}, ${2021 - new Date(birthdate).getFullYear()})
${bloodType}형
${height}cm
${weight}kg
BMI: ${~~(weight / (height / 100) ** 2 * 10) / 10}
`
    }
})

console.log(randkid.rand(0))