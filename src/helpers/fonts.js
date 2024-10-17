import{ Roboto, Montserrat} from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: [ "italic"],
    variable: "--font-roboto",
	
})

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
	style: [ "italic"],
    variable: "--font-montserrat",
	
})

