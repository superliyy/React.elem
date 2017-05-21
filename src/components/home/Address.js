var React = require('react');

var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

module.exports = class Address extends React.Component{
	constructor({history}){
		super();
		this.state = {
			history,
			addressClass: 'page'
		}
	}
	
	render(){
		return (
			<CSSTransitionGroup
		      transitionName="slide"
		      transitionAppear={true}
		      transitionAppearTimeout={500}
		      transitionEnter={false}
		      transitionLeave={false}>
				<div id="address" class={this.state.addressClass}>
					<header class="address-header">
						<span onClick={this.backAction.bind(this)}>返回</span>
						<h1>地址</h1>
					</header>
					
				</div>
			</CSSTransitionGroup>
		)
	}
	
	backAction(){
		this.setState({addressClass: 'page slide-leave-active'});
		
//		setTimeout(function(){
			this.state.history.goBack();
//		}.bind(this), 300);
	}
	
	
	
}