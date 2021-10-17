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

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const PhotoAlbum = () => {
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<div>
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
									adipisicing elit. Dolor omnis deleniti
									minima saepe blanditiis tempora, dicta error
									mollitia quas quaerat voluptatum eaque
									consequatur distinctio suscipit assumenda
									velit tempore? Excepturi, cum.
								</strong>
							</Typography>
							<div>
								<Grid container spacing={2} justify='center'>
									<Grid item>
										<Button
											variant='contained'
											color='primary'
										>
											See my photos
										</Button>
										<Button
											variant='outlined'
											color='primary'
										>
											Secondary action
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
				</main>
			</div>
		</>
	);
};

export default PhotoAlbum;
