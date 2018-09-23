import React, { Component } from 'react';

import SearchBar from '../components/SearchBar';
import BlogListing from '../components/BlogListing';

const link = "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class App extends Component {
	constructor(){
		super()

		this.state = {
			loading: true,
			search: "",
			blogs:[],
			blogsFiltered:[]
		}
	}

	handleTypeSearch = event => {
		const blogFiltered = this.state.blogs.filter(
			blog =>  blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
		);
		this.setState({ blogsFiltered : blogFiltered })
		//console.log(this.state.search);
	}

	handleGetBlogs = () => {
		fetch(link)
			.then(res => res.json())
			.then(res => this.setState({blogs:res, blogsFiltered: res, loading:false}))
	}

	componentDidMount(){
		// setTimeout(() => {
		// 	this.setState({ loading: false })	
		// }, 1000)
		this.handleGetBlogs();
	}	

	render(){
		if(this.state.loading){
			return(
				<h1 style={{textAlign:'center'}}>LOADING....</h1>
			)
		}
		//console.log(this.state.blogs)
		return(
			<div>
				<div style={{backgroundImage:'url("./devc.png")', backgroundRepeat:'repeat-y', width:'20%'}}></div>
				{/*<h1>loading : {JSON.stringify(this.state.loading)}</h1>*/}
				<div style={{textAlign:'justify',width:'60%',margin:'auto', padding:'2%'}}>
					<SearchBar 
						onChangeSearch={this.handleTypeSearch}
					/>
					{this.state.blogsFiltered.map((blog, index) => (
						<BlogListing 
							title={blog.title} 
							content={blog.content}
							key={blog.id}
							author={blog.author}
							date={blog.created_at}
						/>
					))}
				</div>

				<div style={{backgroundImage:'url("./devc.png")'	, backgroundRepeat:'repeat-y', width:'20%'}}></div>
			</div>
		)
	}
}

export default App