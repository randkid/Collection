# Collection
## Use (Deno)
```ts
import {
    gender,
    bloodType,
    name,
    // ...more
} from "https://raw.githubusercontent.com/randkid/Collection/master/mod.ts"

const seed = Math.random()

console.log(gender.rand(seed))
console.log(bloodType.rand(seed))
console.log(name.rand(seed))
// ...mor
```
Same seed -> Same value.  
`name` generated from `seed` uses `gender` generated from `seed`.
