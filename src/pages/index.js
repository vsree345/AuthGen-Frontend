import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Icon, Button } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGalacticRepublic, FaHornbill, FaReact } from "react-icons/fa";

export default (() => {

	return <Theme theme={theme}>
		<head>
			<title>Smart Scan</title>
		</head>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-6" padding="24px 0px 24px 0px" background="#EDF2F6">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="40%"
				sm-width="50%"
				md-width="50%"
				lg-width="40%"
				lg-justify-content="flex-start"
				md-justify-content="flex-end"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-start"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="4px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--base"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 1px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 6px 6px 6px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="24px 0px 0px 0px"
					>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
						quarkly-title="Text"
					>
						Smart Scan
					</Text>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-end"
				align-items="flex-start"
				flex-direction="row"
				width="40%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="40%"
				md-justify-content="flex-start"
				md-display="none"
			>
				<Link
					border-radius="8px"
					href="/client-login"
					text-decoration-line="initial"
					border-style="solid"
					sm-padding="5px 10px 5px 10px"
					md-padding="5px 10px 5px 10px"
					sm-margin="10px 0px 10px 0px"
					font="--base"
					color="--darkL1"
					margin="0px 0px 0px 34px"
					md-margin="10px 0px 0px 0px"
					border-width="2px"
					padding="4px 12px 5px 12px"
					border-color="#1A1B41"
				>
					Sign Up
				</Link>
				<Link
					font="--base"
					text-decoration-line="initial"
					margin="0px 0px 0px 16px"
					background="#1A1B41"
					border-radius="8px"
					md-margin="0px 0px 0px 14px"
					href="/client-login"
					color="#ffffff"
					padding="6px 12px 7px 12px"
					md-order="1"
				>
					Login
				</Link>
			</Box>
		</Section>
		
		<Section padding="80px 0 80px 0" quarkly-title="Content-10" background="#EDF2F6">
			<Override
				slot="SectionContent"
				padding="0px 0 0px 0px"
				lg-padding="0px 0 0px 0px"
				display="flex"
				grid-template-columns="repeat(2, 1fr)"
				lg-grid-template-columns="1fr"
				align-items="start"
			/>
			<Box min-width="100px" min-height="100px" margin="0px 0px 16px 0px">
				<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="#5d20a9">
					Introducing
				</Text>
				<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans" border-color="#1A1B41" color="#1A1B41">
					Smart Scan's Invisible QR code - the Technology behind it
				</Text>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="16px 54px"
					margin="0px 0px 25px 0px"
					md-grid-template-columns="1fr"
				>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-sans" color="#505257">
							Steganography, the art of hiding information within seemingly innocuous data, has evolved significantly with technological advancements. We developed a unique approach here at Smart Scan that generates invisible QR codes. This innovative process combines BCH codes for error correction, Generative Adversarial Networks (GANs), and Discrete Cosine Transform (DCT) steganography to create visually imperceptible yet robust hidden messages.
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
							Steganography involves concealing information within non-secret data to ensure that the existence of the message remains undetected. In the digital realm, this often involves embedding information within images, audio files, or other media types. In our scenario, the goal is to create invisible QR codes, embedding secret messages within images.
						</Text>
						<Text margin="0px 0px 0 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
							GANs are a class of machine learning models consisting of a generator and a discriminator. The generator attempts to create realistic data, while the discriminator aims to distinguish between real and generated data. Through adversarial training, GANs learn to produce content that is increasingly indistinguishable from real data. In our application, the GAN is employed to generate a minimal residue image.
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
							BCH codes, an error-correcting code, play a crucial role in ensuring the integrity of the hidden message. By encoding the secret message using BCH codes, the system becomes more resilient to data corruption or loss during the steganographic process. This adds a layer of robustness to the overall system, enabling accurate extraction of the hidden message even in the presence of errors.
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
							The GAN, having been trained on the foreground image and BCH-encoded message, generates a minimal residue image. This residue image captures the difference between the foreground image and the encoded message, aiming to minimize visual artifacts. This step is crucial in achieving a seamless integration of the hidden message into the foreground image without raising suspicions.
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
							DCT steganography involves manipulating the frequency domain of an image using the DCT. By carefully combining the minimal residue image with the foreground image in this domain, the system achieves a balance where the hidden message is imperceptible to the human eye. DCT steganography ensures that the alterations made during the embedding process are visually minimal, preserving the integrity of the foreground image.
						</Text>
					</Box>
				</Box>
			</Box>
				<Button
						href="https://papers.nips.cc/paper_files/paper/2017/file/838e8afb1ca34354ac209f53d90c3a43-Paper.pdf"
						text-decoration-line="initial"
						color="--light"
						font="--lead"
						hover-opacity="0.9"
						background="#1A1B41"
						border-radius="8px"
						padding="11px 24px 12px 24px"
					>
					Read Research Paper for reference
				</Button>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="30px 0 0px 0px"
				lg-margin="10px 10px 0px 10px"
				lg-padding="10px 0px 0px 0"
			>
				<Image
					src="https://i.imgur.com/HzUdpiv.png"
					display="block"
					border-radius="25px"
					width="100%"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="30px 0 0px 0px"
				lg-margin="10px 10px 0px 10px"
				lg-padding="10px 0px 0px 0"
			>
				<Image
					src="https://i.imgur.com/3cZRFHz.png"
					display="block"
					border-radius="25px"
					width="100%"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		{/* <Section padding="80px 0 80px 0" background="#EDF2F6">
			<Box
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				margin="0px 0px 32px 0px"
				width="100%"
			>
				<Text margin="0px 0px 0px 0px" font="--headline1" color="#1A1B41" text-align="center">
					Code Freaks
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 12px 0px 12px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://i.imgur.com/JgHJEs6.jpg"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
							overflow-wrap="normal"
							width="200px"
						>
							Sohan Gundoju
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							1602-21-748-051
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 12px 0px 12px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://i.imgur.com/GETpakP.jpeg"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
							width="200px"
						>
							Sainith Yamsani
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							1602-21-748-047
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 12px 0px 12px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://i.imgur.com/3Tw41LO.png"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
							width="200px"
						>
							Sree Vaibhav
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							1602-22-748-044
						</Text>
					</Box>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					padding="24px 12px 0px 12px"
				>
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
					>
						<Image
							border-radius="50%"
							src="https://i.imgur.com/rIvU3XY.jpeg"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							display="block"
							width="100%"
							max-height="100%"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 0px 0px">
						<Text
							margin="21px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
							width="200px"
						>
							Mani Kumar
						</Text>
						<Text
							margin="16px 0px 26px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--greyD2"
						>
							1602-22-748-019
						</Text>
					</Box>
				</Box>
			</Box>
		</Section> */}
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6575b98c1d712a00232c66dc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
