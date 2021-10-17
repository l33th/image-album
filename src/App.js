import React from "react";
import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const App = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth='sm'>
						<Typography
							variant='h2'
							align='center'
							color='textPrimary'
							gutterBottom
						>
							Photo Album
						</Typography>
						<Typography
							varian='h5'
							align='center'
							color='textSecondary'
							paragraph
						>
							<strong>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Dolor omnis deleniti minima
								saepe blanditiis tempora, dicta error mollitia
								quas quaerat voluptatum eaque consequatur
								distinctio suscipit assumenda velit tempore?
								Excepturi, cum.
							</strong>
						</Typography>
					</Container>
				</div>
			</main>
		</>
	);
};

export default App;
