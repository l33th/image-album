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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
							variant='h5'
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
						<div className={classes.buttons}>
							<Grid container spacing={2} justifyContent='center'>
								<Grid item>
									<Button variant='contained' color='primary'>
										See my photos
									</Button>{" "}
									<Button variant='outlined' color='primary'>
										See my videos
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container className={classes.cardGrid} maxWidth='md'>
					<Grid container spacing={4}>
						{cards.map(() => (
							<Grid item xs={12} sm={6} md={4}>
								<Card className={classes.card}>
									<CardMedia
										className={classes.cardMedia}
										image='https://source.unsplash.com/random'
										title='Image Title'
									/>
									<CardContent
										className={classes.CardContent}
									>
										<Typography gutterBottom variant='h5'>
											Heading
										</Typography>
										<Typography>
											Lorem ipsum dolor sit, amet
											consectetur adipisicing elit.
											Debitis, error!
										</Typography>
									</CardContent>
									<CardActions>
										<Button size='small' color='primary'>
											view
										</Button>
										<Button size='small' color='primary'>
											edit
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
			<footer className={classes.footer}>
				<Typography variant='h6' align='center' gutterBottom>
					footer
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='textSecondary'
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sed, harum.
				</Typography>
			</footer>
		</>
	);
};

export default PhotoAlbum;
