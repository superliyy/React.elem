var React = require('react');


module.exports = class HomeHeader extends React.Component{
	
	render(){
		
		return (
			<header class="home-header">
				<div class="info">
					<span class="address" onClick={this.addressAction.bind(this)}>
						宝安区宝安中心区宝安大道深圳西部硅谷
					</span>
					<span class="weather">
						晴天
					</span>
				</div>
				<div class="search">
					<input type="text" placeholder="搜索商家、商品" />
				</div>
				<div class="hot-words">
					
					
				</div>
				
			</header>
		)
		
		
	}
	
	//点击地址栏，让父组件进入子页面
	addressAction(){
		
		this.props.goAddress()
		
	}
	
}