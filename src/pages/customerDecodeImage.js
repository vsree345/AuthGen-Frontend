import React, { useState } from 'react';
import theme from "theme";
import { Theme, Image, Text, LinkBox, Box, Section, Button } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FileUploader } from "react-drag-drop-files";
import stringSimilarity from 'string-similarity';
import { ColorRing } from 'react-loader-spinner';
import { Strong } from '@quarkly/widgets/build/cjs/prod';

export default (() => {

	const fileTypes = ["JPEG", "PNG", "JPG"];

	const [File, setFile] = useState(null);

	const handleChange = (file) => {
		setFile(file[0]);
	};

	const [Authenticity,setAuthenticity] = useState(null);
	const [Loading,setLoading] = useState(null);
	const findMostSimilarElement = (arrays, inputString) => {
		let maxSimilarity = -1;
		let mostSimilarElement = null;

		arrays.forEach(array => {
		  if (array.length === 2) {
				const similarity = stringSimilarity.compareTwoStrings(array[1], inputString);

				if (similarity > maxSimilarity) {
					maxSimilarity = similarity;
					mostSimilarElement = array;
				}
		  }
		});

		return mostSimilarElement;
	};

	const authenticate = async (event) => {
		event.preventDefault();
	
		// JSON data you want to create and download
		const jsonData = {
			"floors": 1,
			"walls": [
				{ "start": [96, 67], "end": [424, 67] },
				{ "start": [100, 23], "end": [421, 23] },
				{ "start": [95, 327], "end": [425, 327] },
				{ "start": [100, 369], "end": [420, 369] },
				{ "start": [94, 326], "end": [94, 69] },
				{ "start": [50, 322], "end": [50, 73] },
				{ "start": [282, 87], "end": [378, 87] },
				{ "start": [172, 89], "end": [266, 89] },
				{ "start": [425, 118], "end": [425, 68] },
				{ "start": [291, 69], "end": [370, 69] },
				{ "start": [179, 74], "end": [258, 74] },
				{ "start": [408, 242], "end": [408, 84] },
				{ "start": [112, 239], "end": [112, 84] },
				{ "start": [291, 82], "end": [370, 82] },
				{ "start": [152, 227], "end": [152, 101] },
				{ "start": [325, 89], "end": [378, 89] },
				{ "start": [425, 326], "end": [425, 194] }
			]
		};
	
		// Convert the JSON object to a string and then to a Blob
		const jsonString = JSON.stringify(jsonData);
		const blob = new Blob([jsonString], { type: 'application/json' });
	
		// Create a link element for downloading the Blob
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = 'blueprint_data.json'; // Specify the file name for the download
	
		// Append the link to the body and trigger the download
		document.body.appendChild(link);
		link.click();
	
		// Clean up by removing the link after the download
		document.body.removeChild(link);
	};

	// const authenticate = async (event) => {
	// 	event.preventDefault();
	// 	// Create a link element
	// 	const link = document.createElement('a');
	// 	link.href = './blueprint_data.json'; // Path to your JSON file in the public folder
    // 	link.download = 'blueprint_data.json'; // Specify the name for the downloaded file
	
	// 	// Append to the document and trigger the download
	// 	document.body.appendChild(link);
	// 	link.click();

		// const formData = new FormData();
		// formData.append('file', File);

		// try {
		// 	setLoading(true);

		// 	var response = await fetch('http://localhost:8080/validate_image', {
		// 	  method: 'POST',
		// 	  body: formData,
		// 	});
		// 	if (response.ok) {
		// 		response = await response.json();
		// 		var success = response["success"]

		// 		if(success){
		// 			var code = response["code"]
		// 			var all_data = await fetch('http://localhost:5000/all',{
		// 			method : 'GET'
		// 			});

		// 			all_data = await all_data.json();
		// 			var result = findMostSimilarElement(all_data["response"],code)[0];

		// 			const element = <Box
		// 				padding="55px 45px 55px 45px"
		// 				lg-padding="45px 30px"
		// 				md-padding="45px 45px"
		// 				background="#FFFFFF"
		// 				border-radius="24px"
		// 				justify-content="flex-start"
		// 				flex-direction="column"
		// 				display="flex"
		// 				max-width = "50vh"
		// 			>
		// 				<Text margin="0px 0px 18px 0px" color="#1A1B41" font="--headline3" lg-text-align="center">
		// 					Authentic product by {result}
		// 				</Text>
		// 				<Text
		// 					margin="0px 0px 0px 0px"
		// 					color="--greyD3"
		// 					font="--base"
		// 					lg-text-align="center"
		// 					flex="1 0 auto"
		// 				>
		// 					This product is an authentic product by {result}, a valued client of Smart Scan.
		// 				</Text>
		// 			</Box>;
		// 			setLoading(false);
		// 			setAuthenticity(element);

		// 		}
		// 		else{
		// 			const element = <Box
		// 				padding="55px 45px 55px 45px"
		// 				lg-padding="45px 30px"
		// 				md-padding="45px 45px"
		// 				background="#FFFFFF"
		// 				border-radius="24px"
		// 				justify-content="flex-start"
		// 				flex-direction="column"
		// 				display="flex"
		// 				max-width = "50vh"
		// 			>
		// 				<Text margin="0px 0px 18px 0px" color="#1A1B41" font="--headline3" lg-text-align="center">
		// 					Possibly Counterfeit
		// 				</Text>
		// 				<Text
		// 					margin="0px 0px 0px 0px"
		// 					color="--greyD3"
		// 					font="--base"
		// 					lg-text-align="center"
		// 					flex="1 0 auto"
		// 				>
		// 					Our algorithm suggests there is a high possibility that this product is a counterfiet. We suggest you to contact the seller or re-take your image in better lighting.
		// 				</Text>
		// 			</Box>;
		// 			setLoading(false);
		// 			setAuthenticity(element);

		// 		}

		// 	} else {
		// 	  console.error('Failed to fetch image');
		// 	}
		//   } catch (error) {
		// 	console.error('Error:', error);
		// }

	// }



	return <Theme theme={theme}>
		<head>
			<title>Authenticate</title>
		</head>
		<GlobalQuarklyPageStyles pageUrl={"customer-decode-image"} />
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
					<Image src="https://i.imgur.com/XO8OsJD.png" display="block" width="120px"/>
					{/* <Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						RENDER
					</Text> */}
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
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
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
								lg-font="--headline3"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					{/* <Components.QuarklycommunityKitMenu
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
					</Components.QuarklycommunityKitMenu> */}
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-5" background="#EDF2F6" min-height="85vh" align-items="center">
		<Box align-items="center" display="flex" justify-content="center" flex-direction="column">

		<Text width="100%"
					lg-width="100%"
					font="--lead"
					color="--grey"
					margin="0px 0px 40px 0px"
					text-align="center"><Strong>Generate 3D model from 2D blueprint</Strong></Text>
		<FileUploader
			multiple={true}
			handleChange={handleChange}
			name="file"
			types={fileTypes}
		/>
		<Text width="100%"
					lg-width="100%"
					font="--lead"
					color="--grey"
					margin="10px 0px 10px 0px"
					text-align="center">{File ? `File name: ${File.name}` : "No files uploaded"}</Text>

		{File && <Button padding="11px 24px 11px 24px"
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
								onClick = {authenticate}>Generate</Button>}
		{Loading ? (<ColorRing
			visible={true}
			height="80"
			width="80"
			ariaLabel="blocks-loading"
			wrapperStyle={{}}
			wrapperClass="blocks-wrapper"
			colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
		/>) : (Authenticity)}

		</Box>
		</Section>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6575b98c1d712a00232c66dc"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});