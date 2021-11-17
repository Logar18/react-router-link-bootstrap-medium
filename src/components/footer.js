import React, { Component } from 'react';
import { Jumbotron, Container } from "react-bootstrap";

const Footer = () => {
    return ( 
        <div className="footer">
				<Jumbotron fluid>
					<Container style={{margin: 'auto' }}>
						<h1>VoteSafe</h1>
						<p>
							For those who appreciate democracy. And equality.
						</p>
					</Container>
				</Jumbotron>
			</div>
     );
}
 
export default Footer;