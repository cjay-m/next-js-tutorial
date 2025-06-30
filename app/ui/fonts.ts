// import custom fonts from the google font library, 
// then specify the subset of font you would like - in this case 'latin'
import { Inter, Lusitana } from 'next/font/google';

//export the fonts fron google fonts library then pass it onto the approrpiate 
// places (example: Inter is in body in layout.tsx)
export const inter = Inter({subsets: ['latin']}); 
export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '400'
})