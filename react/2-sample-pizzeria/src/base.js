import React from "react"
import { Link, Switch, Route } from 'react-router-dom'

import Sabores from "./sabores"
import Home from "./home"

import PromoDomingo from "./promocoes/domingo"
import PromoSegunda from "./promocoes/segunda"
import PromoTerca from "./promocoes/terca"
import PromoQuarta from "./promocoes/quarta"
import PromoQuinta from "./promocoes/quinta"
import PromoSexta from "./promocoes/sexta"
import PromoSabado from "./promocoes/sabado"


export default class Base extends React.Component {
	render() {
		var footerStyle = {
		  margin: '50px',
		  borderTop: "1px solid #CC0000",
		  textAlign: "center"
		};
		return(
			<div className="container">

				<div className="row">
					<nav className="navbar navbar-default">
			      <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">Pizzaria do Zeh!</a>
			        </div>
			        <div id="navbar" className="navbar-collapse collapse">
			          <ul className="nav navbar-nav">
			            <li className="active"><Link to="/">Home</Link></li>
			            <li><Link to='/sabores'>Sabores</Link></li>

			            <li className="dropdown">
			              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Promoçoes <span className="caret"></span></a>
			              <ul className="dropdown-menu">
			                <li><Link to="/promocao/domingo" >Domingo</Link></li>
			                <li><Link to="/promocao/segunda" >Segunda</Link></li>
			                <li><Link to="/promocao/terca" >Terça</Link></li>
			                <li><Link to="/promocao/quarta" >Quarta</Link></li>
			                <li><Link to="/promocao/quinta" >Quinta</Link></li>
			                <li><Link to="/promocao/sexta" >Sexta</Link></li>
			                <li><Link to="/promocao/sabado" >Sabado</Link></li>
			              </ul>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </nav>
			  </div>

		    <div className="row">
		    	<Switch>
	          <Route exact path='/' component={Home} />
	          
	          <Route       path='/sabores'          component={Sabores}>       </Route>
	          <Route exact path="/promocao/domingo"  component={PromoDomingo}>  </Route>
		        <Route exact path="/promocao/segunda"  component={PromoSegunda}>  </Route>
		        <Route exact path="/promocao/terca"    component={PromoTerca}>    </Route>
		        <Route exact path="/promocao/quarta"   component={PromoQuarta}>   </Route>
		        <Route exact path="/promocao/quinta"   component={PromoQuinta}>   </Route>
		        <Route exact path="/promocao/sexta"    component={PromoSexta}>    </Route>
		        <Route exact path="/promocao/sabado"   component={PromoSabado}>   </Route>
	        </Switch>
		    </div>
		    
		    <div className="row" style={footerStyle}>
		    	<div className="col-xs-12" > 
				    <footer>
				    	Todos os direitos reservados.
				    </footer>
				  </div>
			  </div>
		   </div>
		);
	}
}
