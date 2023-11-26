import { Box, Container } from "@chakra-ui/react"
import type { Metadata } from "next"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Providers from "./providers"

export const metadata: Metadata = {
    title: "UniRep",
    description: "A zero-knowledge protocol for anonymous user data management on Ethereum.",
    icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
    metadataBase: new URL("https://unirep.io"),
    openGraph: {
        type: "website",
        url: "https://unirep.io",
        title: "UniRep",
        description: "A zero-knowledge protocol for anonymous user data management on Ethereum.",
        siteName: "UniRep",
        // TODO: update image
        images: [
            {
                url: "https://website.semaphore.pse.dev/social-media.png"
            }
        ]
    },
    // TODO: update image
    twitter: { card: "summary_large_image", images: "https://website.semaphore.pse.dev/social-media.png" }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    <Navbar />
                    <Container maxW="1440px" px={{ base: "5", md: "10" }}>
                        <Box h="96px" />
                        {children}
                        <Footer />
                    </Container>
                </Providers>
            </body>
        </html>
    )
}
