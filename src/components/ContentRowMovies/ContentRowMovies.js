import React from 'react';
import icon from '../../assets/images/jordan-walke.png';
function ContentRowMovies(props){
    return(
        <div class="col-lg-6 mb-4">
			<div class="card bg-dark text-white shadow">
				<div class="card-body">
					{props.title}
				</div>
			</div>
		</div>
    )
}

export default ContentRowMovies