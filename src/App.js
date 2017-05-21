var React = require('react');


var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var Home = require('./components/home/Home.js');
var Discover = require('./components/discover/Discover.js');
var Order = require('./components/order/Order.js');
var Me = require('./components/me/Me.js');

require('./css/app.css');

module.exports = class App extends React.Component{
	constructor(){
		super();
		this.state = {
			navData: [
				{
					title: '外卖',
					onIcon: 'iconfont icon-eleme2',
					offIcon: 'iconfont icon-eleme1',
					path: '/home',
					selected: true
				},
				{
					title: '发现',
					onIcon: 'iconfont icon-discover2',
					offIcon: 'iconfont icon-discover1',
					path: '/discover',
					selected: false
				},
				{
					title: '订单',
					onIcon: 'iconfont icon-order2',
					offIcon: 'iconfont icon-order1',
					path: '/order',
					selected: false
				},
				{
					title: '我的',
					onIcon: 'iconfont icon-me2',
					offIcon: 'iconfont icon-me1',
					path: '/me',
					selected: false
				}
			]
		}
	}
	
	render(){
		
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Home}/>
					<Route path="/home" component={Home}/>
					<Route path="/discover" component={Discover}/>
					<Route path="/order" component={Order}/>
					<Route path="/me" component={Me}/>
				
					<nav class="tabs">
						{
							this.state.navData.map(function(item, index){
								var classVal = item.selected ? item.onIcon : item.offIcon;
								var liClass = 'tab '+(item.selected ? 'active' : '');
								return (
									<li class={liClass} key={index} onClick={this.navAction.bind(this, index)}>
										<Link to={item.path}>
											<em class={classVal}></em>
											<span>{item.title}</span>
										</Link>
									</li>
								)
							}.bind(this))
						}
					</nav>
				</div>
			</BrowserRouter>
		)
	}
	//tabs中页面切换的点击事件
	navAction(index){
		//将nav的数据取出
		var navData = this.state.navData;
		//将每条数据的selected都设置为false
		navData.map(function(item){
			item.selected = false;
		})
		//将index对应的这条数据的selected设置为true
		navData[index].selected = true;
		//将结果给state
		this.setState({navData: navData});
	}
}



