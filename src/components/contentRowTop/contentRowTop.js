import React from 'react';
function ContentRowTop(props){
    return(
        <div class="col-md-4 mb-4">
			<div className={props.borderColor}>
				<div class="card-body">
					<div class="row no-gutters align-items-center">
						<div class="col mr-2">
							<div class={props.colorTitle}>
							{props.title}
							</div>
							<div class="h5 mb-0 font-weight-bold text-gray-800">
							{props.cantidad}
							</div>
						</div>
						<div class="col-auto">
							<i className={props.icon}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default ContentRowTop