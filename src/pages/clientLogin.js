import React from "react";
import { useState } from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Input, Button } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

export default (() => {

	const [ open, setOpen ] = useState(false);
	const [ errormsg, setErrormsg ] = useState('');

	const handleClose = ()=>{
		setOpen(false);
		setErrormsg('');
	}

	const login = async (event) => {
		window.location.href = '/client-encode-image';
		// event.preventDefault();

		// 	var email = document.getElementById("login-email").value;
		// 	var password = document.getElementById("login-password").value;
		// 	var email_box = document.getElementById("login-email");
		// 	var password_box = document.getElementById("login-password");

		// 	var response = await fetch('http://localhost:5000/login', {
		// 			method: 'POST',
		// 			headers: {
		// 					'Content-Type': 'application/json',
		// 			},
		// 			body: JSON.stringify({
		// 					email: email,
		// 					password: password,
		// 			}),
		// 	})

		// response = await response.json();
		// console.log(response);
		// if (!response.error){
		// 	sessionStorage.setItem('name', response["response"][0][3])
		// 	sessionStorage.setItem('secret', response["response"][0][4]);
		// 	sessionStorage.setItem('isLoggedIn', true);
		// 	window.location.href = '/client-encode-image';
		// }
		// else{
		// 	if(response.message === "Invalid username"){
		// 		email_box.style["border-color"] = "red";
		// 		password_box.style["border-color"] = "#E4E8EC";
		// 		setErrormsg("Invalid username");
		// 		setOpen(true);
		// 	}
		// 		if(response.message === "Invalid password"){
		// 		email_box.style["border-color"] = "#E4E8EC";
		// 		password_box.style["border-color"] = "red";
		// 		setErrormsg("Invalid password");
		// 		setOpen(true);
		// 	}
		// }

	}

	const signup = async (event) => {
		event.preventDefault();

			var email = document.getElementById("signup-email").value;
			var password = document.getElementById("signup-password").value;
			var retype_password = document.getElementById("signup-retype-password").value;
			var company_name = document.getElementById("signup-comapny-name").value;
			var email_box = document.getElementById("signup-email");
			var password_box = document.getElementById("signup-password");
			var retype_password_box = document.getElementById("signup-retype-password");

			var response = await fetch('http://localhost:5000/signup', {
					method: 'POST',
					headers: {
							'Content-Type': 'application/json',
					},
					body: JSON.stringify({
							email: email,
							password: password,
							retype_password : retype_password,
							company_name : company_name
					}),
			})

		response = await response.json();
		console.log(response);
		if (!response.error){
			sessionStorage.setItem('name', response["name"])
			sessionStorage.setItem('secret', response["secret"]);
			sessionStorage.setItem('isLoggedIn', true);
			window.location.href = '/client-encode-image';
		}
		else{
			if(response.message === "Email exists"){
				email_box.style["border-color"] = "red";
				password_box.style["border-color"] = "#E4E8EC";
				retype_password_box.style["border-color"] = "#E4E8EC";
				setErrormsg("Email exists");
				setOpen(true);
			}
			if(response.message === "Passwords do not match"){
				email_box.style["border-color"] = "#E4E8EC";
				password_box.style["border-color"] = "red";
				retype_password_box.style["border-color"] = "red";
				setErrormsg("Passwords do not match");
				setOpen(true);
			}
		}

	}

	return <Theme theme={theme}>
		<head>
			<title>Login</title>
		</head>
		<GlobalQuarklyPageStyles pageUrl={"client-login"} />
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-4" background="#EDF2F6">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Smart Scan
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
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
					justify-content="flex-end"
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
						grid-gap="8px"
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
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 8px 6px 8px" lg-padding="6px 12px 6px 12px" />
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
						lg-margin="0px 0px 0px 0px"
					>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="80px 0 80px 0" position="relative" quarkly-title="Form-3" background="#EDF2F6">
			<Override slot="SectionContent" max-width="1220px" />
			<Box
				z-index="1"
				left="0px"
				top="0px"
				right="auto"
				bottom="auto"
				position="static"
				grid-template-columns="repeat(2, 1fr)"
			>
				<Box min-width="100px" min-height="100px">
					<Text
						lg-padding="0px 0px 0px 0px"
						sm-font="normal 700 36px/1.2 --fontFamily-sans"
						margin="0px 0px 18px 0px"
						font="normal 600 42px/1.2 --fontFamily-sans"
						color="--darkL1"
						text-align="left"
						padding="0px 0 0px 0px"
						lg-width="100%"
						lg-margin="0px 0px 25px 0px"
					>
						Ready to redefine authenticity?
					</Text>
					<Text margin="0px 50% 50px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" lg-margin="0px 0 50px 0px" />
				</Box>
				<Box
					position="relative"
					z-index="1"
					display="flex"
					lg-flex-direction="column"
					flex-direction="row"
				>
					<Components.QuarklycommunityKitNetlifyForm lg-margin="0px 0px 35px 0px" sm-margin="0px 0px 25px 0px">
						<Box display="flex" margin="0px 0px 15px 0px" flex-direction="column" className="signup">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								className="signup"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 15px 0px 0px"
									sm-margin="0px 0 15px 0px"
									lg-width="50%"
									sm-width="100%"
									className="signup"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Name
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="signup"
										id="signup-name"
									/>
								</Box>
								<Box
									min-width="10px"
									min-height="10px"
									lg-width="50%"
									sm-width="100%"
									className="signup"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Email
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="signup"
										id="signup-email"
									/>
								</Box>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								className="signup"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 15px 0px 0px"
									sm-margin="0px 0 15px 0px"
									lg-width="50%"
									sm-width="100%"
									className="signup"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Password
									</Text>
									<Input
										margin="0px 10px 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="password"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="signup"
										id="signup-password"
									/>
								</Box>
								<Box
									min-width="10px"
									min-height="10px"
									lg-width="50%"
									sm-width="100%"
									className="signup"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Re-type password
									</Text>
									<Input
										margin="0px 0 0px 0px"
										padding="12px 16px 12px 16px"
										width="100%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="password"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="signup"
										id="signup-retype-password"
									/>
								</Box>
							</Box>
							<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
								Company Name
							</Text>
							<Input
								margin="0px 0 12px 0px"
								padding="12px 16px 12px 16px"
								width="100%"
								font="--lead"
								md-max-width="none"
								border-radius="8px"
								type="text"
								required
								md-margin="0px 0 16px 0px"
								background="rgba(255, 255, 255, 0.1)"
								border-color="--color-lightD2"
								className="signup"
								id="signup-comapny-name"
							/>
							<Button
								padding="11px 24px 11px 24px"
								font="normal 400 20px/1.5 --fontFamily-sans"
								sm-margin="10px 0px 0px 0px"
								sm-width="100%"
								focus-box-shadow="none"
								color="--light"
								background="#1A1B41"
								border-radius="8px"
								hover-background="--color-darkL1"
								hover-color="--light"
								hover-transition="background-color 0.5s ease 0s"
								transition="background-color 0.1s ease 0s"
								margin="10px 0px 15px 0px"
								hover-border-width="0px"
								hover-border-style="none"
								className="signup"
								id="signup-action"
								onClick = {signup}
							>
								Signup
							</Button>
							<Box min-width="10px" min-height="10px" display="flex" sm-flex-direction="column">
								<Text margin="0px 5px 0px 0px" font="normal 400 18px/1.5 --fontFamily-sansHelvetica">
									We care about your data. Read our
								</Text>
								<Link href="/privacy-policy" color="#561dc6" font="normal 400 18px/1.5 --fontFamily-sansHelvetica" target="_blank">
									privacy policy
								</Link>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
					<Components.QuarklycommunityKitNetlifyForm
						lg-margin="0px 0px 35px 0px"
						sm-margin="0px 0px 25px 0px"
						position="relative"
						left="px"
						width="100% border-box"
						order="0"
						flex="0 1 auto"
						display="block"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px px"
						align-self="flex-start"
						right={0}
					>
						<Override slot="Form" width="600px" />
						<Box display="flex" margin="0px 0px 15px 20px" flex-direction="column" className="login">
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								width="100%"
								padding="0px 0px 0px 75px"
								className="login"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 0px 0px 0px"
									sm-margin="0px 0 15px 0px"
									lg-width="50%"
									sm-width="100%"
									width="600px"
									border-width={0}
									padding="0px 0px 0px 0px"
									className="login"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Email
									</Text>
									<Input
										margin="0px 0 12px 0px"
										padding="12px 16px 12px 16px"
										width="75%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="text"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="login"
										id="login-email"
									/>
								</Box>
							</Box>
							<Box
								min-width="10px"
								min-height="10px"
								display="flex"
								margin="0px 0px 20px 0px"
								sm-flex-direction="column"
								width="100%"
								padding="0px 0px 0px 75px"
								className="login"
							>
								<Box
									min-width="10px"
									min-height="10px"
									margin="0px 0px 0px 0px"
									sm-margin="0px 0 15px 0px"
									lg-width="50%"
									sm-width="100%"
									border-width={0}
									padding="0px 0px 0px 0px"
									width="600px"
									className="login"
								>
									<Text margin="0px 0px 8px 0px" font="normal 400 16px/1.5 --fontFamily-sans">
										Password
									</Text>
									<Input
										margin="0px 0 12px 0px"
										padding="12px 16px 12px 16px"
										width="75%"
										font="--lead"
										md-max-width="none"
										border-radius="8px"
										type="password"
										required
										md-margin="0px 0 16px 0px"
										background="rgba(255, 255, 255, 0.1)"
										border-color="--color-lightD2"
										className="login"
										id="login-password"
									/>
								</Box>
							</Box>
							<Button
								padding="11px 24px 11px 24px"
								font="normal 400 20px/1.5 --fontFamily-sans"
								sm-margin="10px 0px 0px 0px"
								sm-width="100%"
								focus-box-shadow="none"
								color="--light"
								background="#1A1B41"
								border-radius="8px"
								hover-background="--color-darkL1"
								hover-color="--light"
								hover-transition="background-color 0.5s ease 0s"
								transition="background-color 0.1s ease 0s"
								margin="0px 0px 15px 75px"
								hover-border-width="0px"
								hover-border-style="none"
								width="75%"
								className="login"
								id="login-action"
								onClick = {login}
							>
								Login
							</Button>
							<Box id="snackbar">
								<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
									<Alert
										onClose={handleClose}
										severity="error"
										variant="filled"
										sx={{ width: '100%' }}
									>
										{errormsg}
									</Alert>
								</Snackbar>
							</Box>

						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6575b98c1d712a00232c66dc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});