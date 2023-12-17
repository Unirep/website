import { SystemStyleObject } from "@chakra-ui/react"
import { Styles } from "@chakra-ui/theme-tools"
import { Azeret_Mono } from "next/font/google"

export const font = Azeret_Mono({ subsets: ["latin"] })

const styles: Styles = {
    global: (): SystemStyleObject => ({
        body: {
            bg: "darkGrey",
            color: "lightGrey"
        },
        "body, #__next": {
            minHeight: "100vh"
        },
        "#__next": {
            display: "flex",
            flexDirection: "column"
        },
        "h1, h2, h3, h4": {
            fontWeight: "700 !important"
        }
    })
}

export default styles
