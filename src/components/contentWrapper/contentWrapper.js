import React from 'react';
import Footer from '../footer/footer';
import ContentRowTop from '../contentRowTop/contentRowTop';
import TopBar from '../topBar/topBar';
import ContentRowMovies from '../ContentRowMovies/ContentRowMovies';
import LastMovieInDb from '../lastMovieInDb/lastMovieInDb';
import imagenPelicula from '../../assets/images/mandalorian.jpg';
function ContentWrapper(){
    return(
        <div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
				<TopBar/>
				<div class="container-fluid">
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div class="row">
						<ContentRowTop title="Movies in data base" cantidad="21" icon="fa-film fas fa-2x text-gray-300" borderColor="card border-left-primary shadow h-100 py-2" colorTitle="text-xs font-weight-bold text-primary text-uppercase mb-1"/>
                        <ContentRowTop title="Total Awards" cantidad="79" icon="fa-award fas fa-2x text-gray-300" borderColor="card border-left-success shadow h-100 py-2" colorTitle="text-xs font-weight-bold text-success text-uppercase mb-1" />
                        <ContentRowTop title="Actors Quantity" cantidad="49" icon="fa-user fas fa-2x text-gray-300" borderColor="card border-left-warning shadow h-100 py-2" colorTitle="text-xs font-weight-bold text-warning text-uppercase mb-1"/>
					</div>
					<div class="row">
						<LastMovieInDb description="Descripción de la película seleccionada personalizada con props" imagenPelicula={imagenPelicula}/>

						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h5 class="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div class="card-body">
									<div class="row">
										<ContentRowMovies title="Accion"/>
										<ContentRowMovies title="Animación"/>
										<ContentRowMovies title="Aventura"/>
										<ContentRowMovies title="Ciencia Ficción"/>
                                        <ContentRowMovies title="Comedia"/>
										<ContentRowMovies title="Documental"/>
										<ContentRowMovies title="Drama"/>
										<ContentRowMovies title="Fantasía"/>
                                        <ContentRowMovies title="Infantiles"/>
                                        <ContentRowMovies title="Musical"/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Footer/>
		</div>
        
    )
}

export default ContentWrapper