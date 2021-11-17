import React, { Component,useState } from 'react';
import { NavDropdown } from "react-bootstrap";

const ElectionSelector = (props) => {
    
    //will eventrually fetch election objects, not just array
    const [elections, setElections] = useState(['primary', 'secondary', 'tertiary']);
    return ( 
        <NavDropdown
				id="dropdown-basic-button"
                disabled={props.disabled}
				title={
					<>
						Elections
					</>
				}
			>
				{elections.map((e, i) => {
					return (
						<NavDropdown.Item
							key={i}
							active={localStorage.getItem("activeElection") === e}
							onClick={() => {
								localStorage.setItem("activeElection", e);
								document.location.href = document.URL;
							}}
						>
							{e}
						</NavDropdown.Item>
					);
				})}
			</NavDropdown>
     );
}
 
export default ElectionSelector;