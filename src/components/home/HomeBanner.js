var React = require('react');

import 'whatwg-fetch';
//能够得到fetch

class BannerPage extends React.Component{
	
	render(){
		return (
			<div class="swiper-slide">
				{
					this.props.list.map(function(item, index){
						return (
							<div class="banner-item" key={index}>
								<img src={'https://fuss10.elemecdn.com'+item.image_url}/>
								<span>{item.title}</span>
							</div>
						)
					})
				}
			</div>
		)
	}
	
	componentDidMount(){
		//让父组件刷新swiper
		this.props.update();
	}
	
}

module.exports = class HomeBanner extends React.Component{
	constructor(){
		super();
		this.state = {
			bannerData: [],
			bannerSwiper: null
		}
	}
	
	componentWillMount(){
		//请求banner数据
		var that = this;
		var fetchBanner = fetch('/static/jsonData/homeBannerData.json');
		//fetchBanner对象，就是promise对象
		
		fetchBanner.then(
			//请求成功
			function(response){
				//在这个成功的function中，仅仅只是接收到了后台的响应
				//console.log('接收到了后台的响应');
				response.json().then(
					function(data){
						//console.log('接收数据完成');
						that.setState({bannerData: data});
					}
				)
			},
			
			//请求失败
			function(data){
				console.log('请求失败')
			}
			
		);
	}
	
	componentDidMount(){
		//得到swiper的dom结构
		var swiperDom = this.refs.banner;
		//创建swiper对象
		var mySwiper = new Swiper (swiperDom, {
		    pagination: '.swiper-pagination'
		  })
		//将swiper对象挂靠在state上
		this.setState({bannerSwiper: mySwiper});
	}
	
	render(){
		var bannerData = this.state.bannerData;
		var listArr = [];
		while(bannerData.length>0){
			listArr.push(bannerData.splice(0, 8));
		}
		
		return (
			<div ref="banner" class="swiper-container home-banner">
			    <div class="swiper-wrapper">
			        {
			        	listArr.map(function(list, index){
			        		return <BannerPage list={list} update={this.updateSwiper.bind(this)} key={index}/>
			        	}.bind(this))
			        }
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
		)
		
		
	}
	
	updateSwiper(){
		
		this.state.bannerSwiper.update();
	}
}