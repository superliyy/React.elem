var React = require('react');


//定义每一个item的组件
class SellItem extends React.Component{
	render(){
		var end = this.props.itemData.image_path.endsWith('jpeg')?'.jpeg':'.png';
		var imgPath = 'https://fuss10.elemecdn.com/'+this.props.itemData.image_path+end;
		
		return (
			<li class="sell-item">
				<div class="item-img">
					<img src={imgPath}/>
				</div>
				{this.props.itemData.name}
			</li>
		)
	}
	
}


//这个组件是可以复用的
//数据不要在自身内部请求，复用时，数据都是一样的了
//1.父组件传入数据，2.根据父组件传入属性，进行不同请求
module.exports = class HomeList extends React.Component{
	componentWillMount(){
		
	}
	componentDidMount(){
		
	}
	
	render(){
		
		return (
			<ul class="sell-list">
				{
					this.props.data.map(function(item, index){
						return <SellItem itemData={item} key={index}/>
					})
				}
			</ul>
		)
		
		
	}
	
}