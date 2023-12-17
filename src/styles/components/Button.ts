import { StyleFunctionProps, SystemStyleObject } from "@chakra-ui/theme-tools"
import { font } from "../styles"

const Button = {
    baseStyle: {
        _hover:{
            transform: "scale(0.9)"
        },
        _focus: {
            boxShadow: "none"
        },
        borderRadius: "100px",
        fontFamily: font.style.fontFamily,
        fontWeight: "500",
        paddingLeft: "24px !important",
        paddingRight: "24px !important"
    },
    defaultProps: {
        colorScheme: "teal"
    },
    variants: {
        solid: (props: StyleFunctionProps): SystemStyleObject => {
            const { colorScheme: c } = props

            if (c === "primary") {
                // const bgGradient = "linear(to-r, primary.500, primary.800)"
                const bg = `${c}.500`
                const color = "teal"

                return {
                    bg,
                    color,
                    _hover: {
                        bg: `${c}.800`,
                        _disabled: {
                            bg
                        }
                    },
                    _active: { bg: `${c}.800` }
                }
            }

            const bg = c

            return {
                bg,
                color: `darkBlue`,
                _hover: {
                    bg: `${c}.300`,
                    _disabled: {
                        bg
                    }
                },
                _active: { bg: `${c}.400` }
            }
        }
    }
}
export default Button
