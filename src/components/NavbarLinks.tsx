"use client"

import { HStack, Heading, Link } from "@chakra-ui/react"
import NextLink from "next/link"
import { usePathname } from "next/navigation"
import IconArrowUpRight from "../icons/IconArrowUpRight"
import IconGithub from "../icons/IconGithub"

export type NavbarProps = {
    onClick?: () => void
}

export default function NavbarLinks({ onClick }: NavbarProps) {
    const pathname = usePathname()

    return (
        <>
            <Link
                onClick={onClick}
                as={NextLink}
                href="/projects"
                variant="navlink"
                borderBottomColor={pathname === "/projects" ? "ceruleanBlue" : "transparent"}
            >
                <Heading fontSize="18px" fontWeight="normal">
                    Projects
                </Heading>
            </Link>
            <Link
                onClick={onClick}
                as={NextLink}
                href="/learn"
                variant="navlink"
                borderBottomColor={pathname === "/learn" ? "ceruleanBlue" : "transparent"}
            >
                <Heading fontSize="18px" fontWeight="normal">
                    Learn
                </Heading>
            </Link>
            <Link
                onClick={onClick}
                as={NextLink}
                href="/build"
                variant="navlink"
                borderBottomColor={pathname === "/build" ? "ceruleanBlue" : "transparent"}
            >
                <Heading fontSize="18px" fontWeight="normal">
                    Build
                </Heading>
            </Link>
            <Link href="https://developer.unirep.io" variant="navlink" isExternal>
                <HStack spacing="3">
                    <Heading fontSize="18px" fontWeight="normal">
                        Documentation
                    </Heading>
                    <IconArrowUpRight width="10px" mb={1} />
                </HStack>
            </Link>
            {/* <Link href="https://github.com/unirep" variant="navlink" color="lightgrey">
                <HStack spacing="3">
                <IconGithub  width="40px" mb={1} color="lightgrey" />
                </HStack>
            </Link> */}
        </>
    )
}
