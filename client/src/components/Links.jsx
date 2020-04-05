import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

const List = styled.div.attrs({
	className: "navbar-nav mr-auto",
})``;

const Item = styled.div.attrs({
	className: "collpase navbar-collapse",
})``;

class Links extends Component {
	render() {
		return (
			<React.Fragment>
				<Link to="/" className="navbar-brand">
					 MERN Application
				</Link>
				<Collapse>
					<List>
						<Item>
							<Link to="/speakers/list" className="nav-link">
								Speakers
							</Link>
						</Item>
						<Item>
							<Link to="/speakers/create" className="nav-link">
								Create Speaker
							</Link>
						</Item>

						<Item>
							<Link to="/events/list" className="nav-link">
								Events
							</Link>
						</Item>
						<Item>
							<Link to="/events/create" className="nav-link">
								Create Event
							</Link>
						</Item>
					</List>
				</Collapse>
			</React.Fragment>
		);
	}
}

export default Links;
