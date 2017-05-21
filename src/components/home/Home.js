var React = require('react');
var Route = require('react-router-dom').Route;

//当前页面的组件
var HomeHeader = require('./HomeHeader.js');
var HomeBanner = require('./HomeBanner.js');
var HomeList = require('./HomeList.js');

//子页面
var Address = require('./Address.js');

import 'whatwg-fetch'

require('../../css/home.css');




module.exports = class Home extends React.Component{
	constructor({history}){
		super();
		this.state = {
			topSellList: [],
			history
		}
	}
	
	componentWillMount(){
		var that = this;
		//请求推荐商家列表数据
		fetch('/static/jsonData/homeListData.json')
		.then(
			function(response){
//				console.log('请求成功')
				
				response.json().then(
					function (data){
//						console.log('数据接收完成')
//						console.log(data)
						that.setState({topSellList: data})
					}
				)
			},
			function(){
//				console.log('请求失败')
			}
		)
	}
	
	render(){
		return (
			<div class="page" id="home">
				<div class="wrapper">
					{/*头部*/}
					<HomeHeader goAddress={this.goAddress.bind(this)}/>
					{/*轮播图*/}
					<HomeBanner/>
					{/*列表页*/}
					<h3 class="list-title">推荐商家</h3>
					<HomeList data={this.state.topSellList}/>
				</div>
				
				<Route path="/home/address" component={Address}/>
				
			</div>
		)
		
		
	}
	
	//提供切换页面的方法
	goAddress(){
		console.log('去地址页的事件触发了');
		this.state.history.push('/home/address');
	}
	
}