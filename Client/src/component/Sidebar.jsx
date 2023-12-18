import React from "react";

function Sidebar() {
	return (
		<div class="d-flex" id="wrapper">
			<div class="bg-light border-right" id="sidebar-wrapper">
				<div class="list-group list-group-flush">
					<a href="#" class="list-group-item list-group-item-action bg-light">
						Dashboard
					</a>
					<br />
					<a href="#" class="list-group-item list-group-item-action bg-light">
						Profile
					</a>
					<br />
					<a href="#" class="list-group-item list-group-item-action bg-light">
						Settings
					</a>
					<br />
					<a href="#" class="list-group-item list-group-item-action bg-light">
						Help
					</a>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
