import React from "react"

export default class Home extends React.Component {

	render() {
		return (
			<div className="col-xs-12">
				<div className="row">
					<div className="col-xs-4" >  
						<p> Pizzaria do Zeh! Uma Pizzaria para trazer toda a familia.</p>

						<p> Venha conhecer nossas soboras pizzas!! </p>

						<p> Estamos com a Quinta em dobro. Comprando uma pizza ganha outra!!</p>
					</div>
					
					<div className="col-xs-8"  > 
						<img src="assets/Pizzaria.jpg"  className="img-responsive rounded mx-auto" style={{ maxWidth: 800 }} />
					</div>
				</div>
			</div>
		);
	}
}