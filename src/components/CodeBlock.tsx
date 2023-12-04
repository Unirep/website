import { Flex, useClipboard, Button } from "@chakra-ui/react"
import { CodeBlock, ocean } from "react-code-blocks"

export type CodekBlockProps = {
    text: string
    language: string
}

export default function CodekBlock({ text, language }: CodekBlockProps) {
    const { onCopy, hasCopied } = useClipboard(text)

    const copyBlockProps = {
        text,
        language: language,
        showLineNumbers: false,
        wrapLines: true,
        theme: ocean,
        customStyle: {
            font: "16px/1.5 'Fira Code', monospace",
            background: "transparent",
            overflow: "auto",
            padding: "24px",
            paddingRight: "120px",
            paddingTop: "60px"
        }
    }
    return (
        <Flex flex="1" overflow="auto" position="relative" borderRadius="8px" backgroundColor="darkBlue">
            <CodeBlock {...copyBlockProps} />
            <Button
                textColor="alabaster.300"
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight="400"
                borderColor="alabaster.800"
                backgroundColor="darkBlue"
                padding="5px 8px"
                border="1px"
                borderRadius="4px"
                onClick={onCopy}
                position="absolute"
                right="24px"
                top="24px"
            >
                {hasCopied ? "copied!" : "copy"}
            </Button>
        </Flex>
    )
}
