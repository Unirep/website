import {
    Flex,
    Link,
    Text,
    VStack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
    Divider,
    Box
} from "@chakra-ui/react"
import Image from "next/image"
import InfoCard, { InfoBlock } from "../../components/InfoCard"
import SectionBlock, { SectionBlockProps } from "../../components/SectionBlock"
import IconEyelash from "@/icons/IconEyelash"
import IconEye from "@/icons/IconEye"
import IconUser from "@/icons/IconUser"
import IconTree from "@/icons/IconTree"
import IconManageUsers from "@/icons/IconManageUsers"
import IconGroup from "@/icons/IconGroup"
import IconBadge from "@/icons/IconBadge"
import IconCheck from "@/icons/IconCheck"
import IconFlag from "@/icons/IconFlag"
import Carousel from "@/components/Carousel"
import videos from "../../data/videos.json"
import VideoCard from "../../components/VideoCard"
import articles from "../../data/articles.json"
import ArticleCard from "../../components/ArticleCard"

export default function Learn() {
    const infoCardTexts: InfoBlock[][] = [
        [
            {
                title: "Accessibility",
                body: "To reach a very large group of developers, a protocol needs to be extremely user-friendly, understandable and simple."
            },
            {
                title: "Composability",
                body: "Achieve an excellent balance between simplicity and functionality through modularity, autonomy, and interoperability. "
            },
            {
                title: "Efficiency",
                body: "A protocol must not only work, it must also be extremely efficient if the goal is to support privacy by default for everyone."
            }
        ],
        [
            {
                title: "Developer experience",
                body: "Enabling developers to focus on innovation by simplifying complexities while supporting diverse use cases."
            },
            {
                title: "Education",
                body: "Empowering individuals with knowledge, resources, and support, ensuring they're equipped to innovate and solve challenges."
            },
            {
                title: "Community",
                body: "Fostering spaces where collaboration thrives, ideas flourish, and diverse voices are celebrated."
            }
        ],
        [
            {
                title: "Completeness",
                body: "If the statement is true, an honest verifier will be convinced of this fact by an honest prover every time."
            },
            {
                title: "Soundness",
                body: "If the statement is false, no cheating prover can convince an honest verifier that is true, except with some small probability."
            },
            {
                title: "Zero-knowledge",
                body: "If the statement is true, no verifier learns anything other than the fact that the statement is true."
            }
        ]
    ]

    const sectionBlockTexts: SectionBlockProps[] = [
        {
            title: "Attesters",
            description:
                "Attesters are responsible for attesting to the reputation of users. They can be Ethereum accounts, multi-sig wallets or smart contracts.",
            linkText: "Design an attester",
            linkUrl: "https://developer.unirep.io/docs/getting-started/create-unirep-app",
            codeText: `pragma solidity ^0.8.0;
import {Unirep} from '@unirep/contracts/Unirep.sol';
            
contract Attester {
    Unirep public unirep;
    constructor(
        Unirep _unirep,
        uint48 _epochLength
    ) {
        // set UniRep address
        unirep = _unirep;
        // sign up as an attester
        unirep.attesterSignUp(_epochLength);
    }
}
`,
            language: "solidity",
            // itemList: [
            //     {
            //         icon: <IconEyelash w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Private values",
            //         body: "Trapdoor and nullifier values are the private values of the Semaphore identity. To avoid fraud, the owner must keep both values secret."
            //     },
            //     {
            //         icon: <IconEye w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Public values",
            //         body: "Semaphore uses the Poseidon hash function to create the identity commitment from the identity private values. Identity commitments can be made public, similarly to Ethereum addresses."
            //     },
            //     {
            //         icon: <IconUser w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Generate identities",
            //         body: "Semaphore identities can be generated deterministically or randomly. Deterministic identities can be generated from the hash of a secret message."
            //     }
            // ]
        },
        {
            title: "Users",
            description:
                "Users in UniRep protocol can choose to signup in one or more attesters. Once users signup, they can start to be attested by attesters and generate reputation or data proofs.",
            linkText: "Generate User State",
            linkUrl: "https://developer.unirep.io/docs/core-api/classes/UserState",
            codeText: `import { UserState } from '@unirep/core'
import { defaultProver } from '@unirep/circuits/provers/defaultProver'
import { Identity } from '@semaphore-protocol/identity'
            
const id = new Identity()
const userState = new UserState({
    prover: defaultProver, // a circuit prover
    unirepAddress: '0xaabbccaabbccaabbccaabbccaabbccaabbccaaaa',
    provider, // an ethers.js provider
    id,
})

// start the synchoronizer deamon
await userState.start()
await userState.waitForSync()
`,
            language: "ts",
            // itemList: [
            //     {
            //         icon: <IconTree w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Merkle trees",
            //         body: "Each leaf contains an identity commitment for a user. The identity commitment proves that the user is a group member without revealing the private identity of the user."
            //     },
            //     {
            //         icon: <IconGroup w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Types of groups",
            //         body: "Groups can be created and managed in a decentralized fashion with Semaphore contracts or off-chain with our JavaScript libraries."
            //     },
            //     {
            //         icon: <IconManageUsers w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Group management",
            //         body: "Users can join and leave groups by themselves, or an admin can add and remove them. Admins can be centralized authorities, Ethereum accounts, multi-sig wallets or smart contracts."
            //     }
            // ]
        },
        {
            title: "Data",
            description:
                `UniRep protocol supports two types of data field: addition data field and replacement data field. The elements in addition field are combined with addition. The elements in replacement field are combined by replacement.`,
            linkText: "Learn more about data fields",
            linkUrl: "https://developer.unirep.io/docs/protocol/data",
            codeText: `// addition data field
old_data[0] = 3
new_data[0] = 5
final_data[0] = old_data[0] + new_data[0] = 8

// replacement data field
old_data[0] = 3
new_data[0] = 5
final_data[0] = new_data[0] = 5`,
            language: "ts",
            // itemList: [
            //     {
            //         icon: <IconBadge w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Membership",
            //         body: "Only users who are part of a group can generate a valid proof for that group."
            //     },
            //     {
            //         icon: <IconFlag w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Signals",
            //         body: "Group users can anonymously broadcast signals such as votes or endorsements without revealing their original identity."
            //     },
            //     {
            //         icon: <IconCheck w="24px" h="24px" color="ceruleanBlue" />,
            //         heading: "Verifiers",
            //         body: "Semaphore proofs can be verified with our contracts or off-chain with our JavaScript libraries."
            //     }
            // ]
        },
        {
            title: "Epoch Key",
            description:
                `Epoch key is used to receive data from attesters. It works like an Ethereum address to receive tokens, but each user can generate multiple epoch keys per epoch, and each epoch key cannot be linked to the same user.`,
            linkText: "Generate an epoch key to receive data",
            linkUrl: "https://developer.unirep.io/docs/protocol/epoch-key",
            codeText: `import { genEpochKey } from '@unirep/utils'
// get epoch from contract
const epoch = await unirepContract.attesterCurrentEpoch(attester.address)
// define nonce
const nonce = 0 // it could be 0 to (NUM_EPOCH_KEY_NONCE - 1) per user
// get chainId from ethers.js provider
const { chainId } = await provider.getNetwork()
// generate an epoch key
const epochKey = genEpochKey(
    identity.secret,
    BigInt(attester.address),
    epoch,
    nonce,
    chainId,
)`,
            language: "ts",
        },
        {
            title: "Attest",
            description:
                `The attesters are responsible for attesting to the epoch key of the users. The attester can define the attest rules and execute it in the smart contract.`,
            linkText: "Define Attest Rules",
            linkUrl: "https://developer.unirep.io/docs/contracts-api/unirep-sol#attest",
            codeText: `function attest(
    uint epochKey,
    uint48 epoch,
) public {
    // only attest to field index = 0
    uint fieldIndex = 0;
    // only attest with value = 5
    uint val = 5;
    unirep.attest(epochKey, epoch, fieldIndex, val);
}`,
            language: "solidity",
        },
        {
            title: "User State Transition",
            description:
                `After receiving data from attesters, users should perform a user state transition to update the user state on-chain. It should be called after an epoch finishes.`,
            linkText: "Perform Transition",
            linkUrl: "https://developer.unirep.io/docs/protocol/user-state-transition",
            codeText: `// call to make sure the state is updated
await userState.waitForSync()
// generate the user state transition proof
const { proof, publicSignals } = await userState.genUserStateTransitionProof()
// sends the tx
const tx = await unirepContract.userStateTransition(
    publicSignals,
    proof
)
await tx.wait()`,
            language: "ts",
        },
        {
            title: "Prove Reputation",
            description:
                `After user state is updated in the latest epoch, the users can generate reputation proofs to prove their reputation in the group.`,
            linkText: "Generate Reputation Proof",
            linkUrl: "https://developer.unirep.io/docs/core-api/classes/UserState#genprovereputationproof",
            codeText: `// call to make sure the state is updated
await userState.waitForSync()
// the data that the user wants to prove
// If the user has 5, they can choose to prove they have more than 3
const repProof = await userState.genProveReputationProof({
    minRep: 3
})`,
            language: "ts",
        }

    ]

    const renderTabBlockUniRep = () => (
        <VStack>
            <VStack w={{ base: "auto", md: "720px" }}>
                <Text fontSize={{ base: "40px", md: "44px" }} fontWeight={{ base: "400", md: "500" }}>
                    UniRep: Universal Reputation
                </Text>
                <Text fontSize={{ base: "16px", md: "20px" }} mt="24px" lineHeight="32px">
                    Using zero knowledge, UniRep allows users to voluntarily prove their membership of a group and reputation or data in the group without revealing their original identity. The goal is to make
                    UniRep a standard for anonymous reputation and group membership proving.
                </Text>
            </VStack>
            <VStack mt="40px">
                <Flex wrap={{ base: "wrap", lg: "nowrap" }} justify="center" alignItems="center" gap="32px">
                    <VStack>
                        <Text fontSize={{ base: "24px", md: "30px" }} fontWeight={{ base: "400", md: "500" }}>
                            Principles
                        </Text>
                        <InfoCard texts={infoCardTexts[0]} />
                    </VStack>
                    <VStack>
                        <Text fontSize={{ base: "24px", md: "30px" }} fontWeight={{ base: "400", md: "500" }}>
                            Main focus
                        </Text>
                        <InfoCard texts={infoCardTexts[1]} />
                    </VStack>
                </Flex>
            </VStack>
        </VStack>
    )

    const renderTabBlockZeroKnowledge = () => (
        <VStack>
            <VStack w={{ base: "auto", md: "720px" }}>
                <Text fontSize={{ base: "40px", md: "44px" }} fontWeight={{ base: "400", md: "500" }}>
                    Zero Knowledge: new cryptography
                </Text>
                <Text fontSize={{ base: "16px", md: "20px" }} mt="24px" lineHeight="32px">
                    Zero-knowledge is a new field in cryptography that allows developers to build apps that allow users
                    to share information with each other without revealing their identities or the contents of the
                    information being shared.
                </Text>
                <Link href="https://pse.dev/resources" isExternal>
                    <Text
                        borderBottomWidth="1px"
                        borderBottomColor="white"
                        _hover={{ borderBottomColor: "transparent" }}
                        fontSize={{ base: "16px", md: "20px" }}
                        fontWeight="normal"
                    >
                        Learn more
                    </Text>
                </Link>
            </VStack>
            <VStack mt="40px">
                <VStack>
                    <Text fontSize={{ base: "24px", md: "30px" }} fontWeight={{ base: "400", md: "500" }}>
                        Characteristics
                    </Text>
                    <InfoCard texts={infoCardTexts[0]} />
                </VStack>
            </VStack>
        </VStack>
    )

    return (
        <VStack w="full">
            <VStack position="relative">
                <Box
                    display={{ base: "none", md: "block" }}
                    zIndex="-1"
                    left="50%"
                    transform="translateX(-50%)"
                    w="100vw"
                    h="100%"
                    pos="absolute"
                >
                    <Image
                        alt="Guy shadow image"
                        src="https://semaphore.cedoor.dev/guy-shadow-horizontal.jpg"
                        quality="100"
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </Box>

                <Box
                    display={{ base: "block", lg: "none" }}
                    zIndex="-1"
                    left="50%"
                    transform="translateX(-50%)"
                    w="100vw"
                    h="100%"
                    pos="absolute"
                >
                    <Image
                        alt="Guy shadow image"
                        src="https://semaphore.cedoor.dev/guy-shadow.png"
                        quality="100"
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover"
                        }}
                    />
                </Box>

                <Tabs
                    maxWidth="100vw"
                    variant="unstyled"
                    align="center"
                    mt={{ base: "100px", md: "170px" }}
                    mb={{ base: "50px", md: "112px" }}
                >
                    <Box overflow="auto" mx="3">
                        <TabList gap="40px" w="max-content" whiteSpace="nowrap">
                            <Tab px={0} fontSize="24px">
                                About UniRep
                            </Tab>
                            <Tab px={0} fontSize="24px">
                                About Zero Knowledge
                            </Tab>
                        </TabList>
                    </Box>
                    <TabIndicator mt="-1.5px" height="2px" bg="white" borderRadius="1px" />
                    <TabPanels mt="80px">
                        <TabPanel>{renderTabBlockUniRep()}</TabPanel>
                        <TabPanel>{renderTabBlockZeroKnowledge()}</TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>

            <VStack w="full" pt="24" pb="28">
                {sectionBlockTexts.map((sectionBlockText, i) => (
                    <VStack w="full" key={sectionBlockText.title}>
                        <SectionBlock
                            title={sectionBlockText.title}
                            description={sectionBlockText.description}
                            linkText={sectionBlockText.linkText}
                            linkUrl={sectionBlockText.linkUrl}
                            codeText={sectionBlockText.codeText}
                            // itemList={sectionBlockText.itemList}
                            language={sectionBlockText.language}
                        />
                        {i !== sectionBlockTexts.length - 1 && <Divider my="68px" borderColor="alabaster.600" />}
                    </VStack>
                ))}
            </VStack>

            <VStack w="full" position="relative">
                <Box
                    backgroundColor="darkBlue"
                    zIndex="-1"
                    left="50%"
                    transform="translateX(-50%)"
                    w="100vw"
                    h="100%"
                    pos="absolute"
                />

                <VStack display={{ base: "none", xl: "block" }} p="100px 40px" w="full" spacing="20">
                    <Carousel
                        title="Videos"
                        sizes={{
                            md: 2,
                            lg: 4
                        }}
                        type="videos"
                    />

                    <Carousel
                        title="Articles"
                        sizes={{
                            md: 2,
                            lg: 4
                        }}
                        type="articles"
                    />
                </VStack>
                <Text
                    display={{ base: "flex", xl: "none" }}
                    flex="1"
                    alignSelf="start"
                    fontSize={{ base: "40px", md: "44px" }}
                    fontWeight="500"
                    mt="100px"
                >
                    Videos
                </Text>
                <Flex display={{ base: "flex", xl: "none" }} w="100%" overflowX="auto">
                    {videos.map((video) => (
                        <VStack key={video.url}>
                            <Box px="3">
                                <VideoCard title={video.title} embeddedVideoUrl={video.embeddedUrl} />
                            </Box>
                        </VStack>
                    ))}
                </Flex>
                <Text
                    display={{ base: "flex", xl: "none" }}
                    flex="1"
                    alignSelf="start"
                    fontSize="44px"
                    fontWeight="500"
                    mt="96px"
                >
                    Articles
                </Text>
                <Flex display={{ base: "flex", xl: "none" }} w="100%" overflowX="auto" mb="66px">
                    {articles.map((article) => (
                        <VStack key={article.url}>
                            <ArticleCard title={article.title} minRead={article.minRead} url={article.url} />
                        </VStack>
                    ))}
                </Flex>
            </VStack>
        </VStack>
    )
}
