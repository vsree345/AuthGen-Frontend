import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";

export default (() => {
	return <Theme theme={theme}>
		<head>
			<title>Privacy Policy</title>
		</head>
		<GlobalQuarklyPageStyles pageUrl={"privacy-policy"} />
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-6">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Image margin="0px 0px 7px 0px" src="https://i.imgur.com/9iBn6C4.png" sizes="(max-width: 576px) 100vw, (max-width: 768px) 100vw, (max-width: 992px) 100vw, 100vw" style={{ maxWidth: '128px', maxHeight: '128px' }} />
				<Text
					color="--dark"
					margin="0px 0px 24px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					border-color="#1A1B41"
				>
					Privacy Policy
				</Text>
				
				<Text
					width="80%"
					lg-width="80%"
					font="--lead"
					color="--black"
					margin="0px 0px 40px 0px"
					text-align="justify"
				>
					<Text color="--black"><b>Last Updated: 14th December, 2023</b></Text>

					<Text color="--grey">
						Welcome to AuthGen, a platform committed to safeguarding your privacy and ensuring the security of your data. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information. By using AuthGen, you agree to the terms and conditions of this policy.
					</Text>

					<Text color="--black"><b>1. Information Collection and Usage</b></Text>

					<Text color="--grey">
						<b>a. User Data:</b> AuthGen operates on a "Zero Data Storage" principle. We do not store any user data, including personally identifiable information or uploaded images, on our servers.
					</Text>

					<Text color="--grey">
						<b>b. Anonymous Usage Data:</b> To enhance our services, AuthGen may collect anonymous usage data, such as website traffic statistics and user interactions. This data is used solely for improving user experience and does not include any personally identifiable information.
					</Text>

					<Text color="--black"><b>2. Data Security</b></Text>

					<Text color="--grey">
						<b>a. Secure Transmission:</b> All data exchanged between your device and AuthGen is transmitted over secure channels using industry-standard encryption protocols.
					</Text>

					<Text color="--grey">
						<b>b. No Server Storage:</b> As part of our commitment to user privacy, AuthGen does not retain any user data, including uploaded images, on our servers. Once data is processed, it is immediately discarded.
					</Text>

					<Text color="--grey">
						<b>c. Protection Measures:</b> We employ state-of-the-art security measures to safeguard against unauthorized access, disclosure, alteration, or destruction of your information. Our security protocols are regularly updated to meet or exceed industry standards.
					</Text>

					<Text color="--black"><b>3. Information Sharing and Third Parties</b></Text>

					<Text color="--grey">
						<b>a. Non-Disclosure:</b> AuthGen does not share, sell, or disclose any user information to third parties unless required by law or in compliance with a legal process.
					</Text>

					<Text color="--grey">
						<b>b. Third-Party Services:</b> We may use third-party services for analytics, but these services are selected carefully, and they adhere to stringent privacy and security standards.
					</Text>

					<Text color="--black"><b>4. Cookies and Tracking Technologies</b></Text>

					<Text color="--grey">
						<b>a. Cookie Usage:</b> AuthGen may use cookies to enhance user experience. These cookies are used for session management and do not store personally identifiable information.
					</Text>

					<Text color="--grey">
						<b>b. Opt-out Options:</b> Users have the option to disable cookies through their browser settings. However, this may affect certain functionalities of AuthGen.
					</Text>

					<Text color="--black"><b>5. Policy Updates</b></Text>

					<Text color="--grey">
						<b>a. Notification of Changes:</b> In the event of any updates to this Privacy Policy, AuthGen will notify users through the platform or other designated communication channels.
					</Text>

					<Text color="--grey">
						<b>b. Review Periodically:</b> Users are encouraged to review this Privacy Policy periodically to stay informed about how AuthGen is protecting their data.
					</Text>

					<Text color="--black"><b>6. Contact Information</b></Text>

					<Text color="--grey">
						If you have any questions, concerns, or requests regarding your privacy or this Privacy Policy, please contact us at: <i><b>customer@authgen.com</b></i>
					</Text>

					<Text color="--black"><b>Conclusion</b></Text>

					<Text color="--grey">
						Your privacy is of utmost importance to us at AuthGen. By using our platform, you entrust us with your information, and we take that responsibility seriously. This Privacy Policy is designed to be transparent about our practices, ensuring that you can use AuthGen with confidence, knowing that your data is secure and your privacy is respected. Thank you for choosing AuthGen.
					</Text>
				</Text>


				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					background="#1A1B41"
					border-radius="8px"
					href="/client-login"
					text-decoration-line="initial"
					color="--light"
				>
					Go Back
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