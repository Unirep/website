import IconGithub from "@/icons/IconGithub";
import IconGlobal from "@/icons/IconGlobal";
import {
    Box,
    Card,
    CardBody,
    HStack,
    Heading,
    Link,
    LinkProps,
    Spacer,
    Tag,
    Text,
} from "@chakra-ui/react";

export type ProjectCardProps = {
    categories: string[];
    title: string;
    description: string;
    website?: string;
    github?: string;
};

export default function ProjectCard({
    categories,
    title,
    description,
    website,
    github,
    ...props
}: ProjectCardProps & LinkProps) {
    return (
        <Box h="full" w="full" {...props}>
            <Card
                bg="darkBlue"
                borderRadius="18px"
                color="white"
                border="1px"
                borderColor="alabaster.950"
                padding="55px 34px 55px 34px"
                w="full"
                h="full"
                _hover={{ borderColor: "ceruleanBlue" }}
            >
                <HStack gap="8px" mb="2rem" wrap="wrap">
                    {categories.map((category) => (
                        <Tag variant="outline" key={category}>
                            {category}
                        </Tag>
                    ))}
                </HStack>
                <CardBody padding={0}>
                    <Heading fontSize="24px" lineHeight="33px">
                        {title}
                    </Heading>
                    <Text
                        mt="1rem"
                        mb="1rem"
                        gap="10px"
                        fontSize="14px"
                        lineHeight="22.4px"
                        height={{ base: "auto", md: "4rem" }}
                        overflow={{ base: "visible", md: "scroll" }}
                    >
                        {description}
                    </Text>
                    <Spacer></Spacer>
                    <HStack gap="8px" textColor="text.400">
                        {github && (
                            <Link
                                href={github}
                                isExternal
                                _hover={{ textColor: "text.600" }}
                            >
                                <IconGithub
                                    width={30}
                                    height={30}
                                    fill="currentColor"
                                />
                            </Link>
                        )}
                        {website && (
                            <Link
                                href={website}
                                isExternal
                                _hover={{ textColor: "text.600" }}
                            >
                                <IconGlobal
                                    width={30}
                                    height={30}
                                    fill="currentColor"
                                />
                            </Link>
                        )}
                    </HStack>
                </CardBody>
            </Card>
        </Box>
    );
}
