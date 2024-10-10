import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";

export default (() => {
	return <Theme theme={theme}>
		<head>
			<title>404 Error!</title>
		</head>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-6">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Image margin="0px 0px 7px 0px" src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/warning-error-delete%201.png?v=2021-08-31T00:16:56.957Z" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw" />
				<Text
					color="--dark"
					margin="0px 0px 24px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					border-color="#1A1B41"
				>
					404 Error!
				</Text>
				<Text
					width="40%"
					lg-width="80%"
					font="--lead"
					color="--grey"
					margin="0px 0px 40px 0px"
					text-align="center"
				>
					The page you are looking for is not available or doesn’t belong to this website!
				</Text>
				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					background="#1A1B41"
					border-radius="8px"
					href="/index"
					text-decoration-line="initial"
					color="--light"
				>
					Go Back to Home
				</Link>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6575b98c1d712a00232c66dc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});