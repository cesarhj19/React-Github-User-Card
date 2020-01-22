import React, { Component } from 'react';
import axios from 'axios';

class Usercard extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		axios
			.get('https://api.github.com/users/cesarhj19')
			.then(resp => {
				this.setState({
					name: resp.data.name,
					avatar: resp.data.avatar_url,
					username: resp.data.login,
					url: resp.data.html_url,
					followers: resp.data.followers,
					following: resp.data.following,
					bio: resp.data.bio
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className='card'>
				<img src={this.state.avatar} alt='user avatar' />
				<div className='card-info'>
					<div className='text-container'>
						<h3 className='name'>{this.state.name}</h3>
						<p className='username'>Username: {this.state.username}</p>
						<p>
							Profile: <a href={this.state.url}>{this.state.url}</a>
						</p>
						<p>Followers: {this.state.followers}</p>
						<p>following: {this.state.following}</p>
						<p>Bio: {this.state.bio === null ? 'User has no bio' : this.state.bio}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Usercard;
