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
} from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useStyles from "./styles";

const PhotoAlbum = () => {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera className={classes.icon} />
					<Typography variant='h6'>
						<strong>Photo Album</strong>
					</Typography>
				</Toolbar>
			</AppBar>
			<div>
				<main>
					<div className={classes.container}>
						<Container maxWidth='sm'>
							<Typography
								variant='h2'
								align='center'
								color='textPrimary'
								gutterBottom
							>
								<em>Photo Album</em>
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
							<div className={classes.button}>
								<Grid
									container
									spacing={2}
									justifyContent='center'
								>
									<Grid item>
										<Button
											variant='contained'
											color='primary'
										>
											See my photos
										</Button>{" "}
										<Button
											variant='outlined'
											color='primary'
										>
											See my videos
										</Button>
									</Grid>
								</Grid>
							</div>
						</Container>
					</div>
				</main>
			</div>
			<Container className={classes.cardGrid} maxWidth='md'>
				<Grid container spacing={0}>
					<Grid itme>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image='https://unsplash.com/random'
								title='Image Title'
							/>
							<CardContent className={classes.CardContent}>
								<Typography gutterBottom variant='h5'>
									Heading
								</Typography>
								<Typography>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Debitis, error!
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default PhotoAlbum;
