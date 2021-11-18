import React from 'react';
function LastMovieInDb(props){
    return(
        <div class="col-lg-6 mb-4">
			<div class="card shadow mb-4">
				<div class="card-header py-3">
					<h5 class="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
				</div>
				<div class="card-body">
					<div class="text-center">
						<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "40rem"}} src={props.imagenPelicula} alt=" Star Wars - Mandalorian "/>
					</div>
					<p>{props.description}</p>
					<a class="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
				</div>
			</div>
		</div>
    )
}

export default LastMovieInDb