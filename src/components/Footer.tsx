import { Divider, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import IconArrowUpRight from "../icons/IconArrowUpRight"
import IconDiscord from "../icons/IconDiscord"
import IconThumbsUp from "../icons/IconThumbsUp"

export default function Footer() {
    return (
        <VStack py="7" justify="space-between" pt="28" pb="10" spacing="14">
            <Image width="75" height="158" src="./unirep-icon.svg" alt="UniRep logo" />

            <Stack direction={{ base: "column", md: "row" }} align="center" fontSize="18px" spacing="10">
                <Link as={NextLink} href="/projects">
                    <Heading fontSize="18px" fontWeight="normal">
                        Projects
                    </Heading>
                </Link>
                <Link as={NextLink} href="/learn">
                    <Heading fontSize="18px" fontWeight="normal">
                        Learn
                    </Heading>
                </Link>
                <Link as={NextLink} href="/build">
                    <Heading fontSize="18px" fontWeight="normal">
                        Build
                    </Heading>
                </Link>
                <Link href="https://developer.unirep.io" isExternal>
                    <HStack spacing="3">
                        <Heading fontSize="18px" fontWeight="normal">
                            Documentation
                        </Heading>
                        
                    </HStack>
                </Link>
                <Link href="https://explorer.unirep.io/" isExternal>
                    <HStack spacing="3">
                        <Heading fontSize="18px" fontWeight="normal">
                            Explorer
                        </Heading>
                        
                    </HStack>
                </Link>
                <Link href="https://github.com/unirep" isExternal>
                    <HStack spacing="3">
                        <Heading fontSize="18px" fontWeight="normal">
                            Github
                        </Heading>
                       
                    </HStack>
                </Link><Link href="https://twitter.com/UniRep_Protocol" isExternal>
                    <HStack spacing="3">
                        <Heading fontSize="18px" fontWeight="normal">
                            X
                        </Heading>
                       
                    </HStack>
                </Link>
            </Stack>

            <Divider />

            <VStack spacing="5">
                <Link href="https://discord.gg/VzMMDJmYc5" isExternal>
                    <HStack>
                        <IconDiscord boxSize={{ base: "16px", md: "24px" }} />
                        <Heading fontSize={{ base: "14px", md: "18px" }} fontWeight="normal">
                            Discord community
                        </Heading>
                    </HStack>
                </Link>

                <Link
                    href="https://github.com/orgs/Unirep/discussions"
                    isExternal
                >
                    <HStack>
                        <IconThumbsUp boxSize={{ base: "16px", md: "24px" }} />
                        <Heading fontSize={{ base: "14px", md: "18px" }} fontWeight="normal">
                            Give feedback & discuss ideas
                        </Heading>
                    </HStack>
                </Link>

                <Text fontSize={{ base: "12px", md: "14px" }} color="text.500" pt="2">
                    Copyright © 2023 Ethereum Foundation
                </Text>
            </VStack>
        </VStack>
    )
}
