import axios from 'axios';
import React, { useState } from 'react';
import './cards.css'

const testData = [
    {
      "login": "karthikvempati",
      "avatar_url": "https://avatars1.githubusercontent.com/u/5565137?v=4",
      "name": "Karthik Vempati",
      "company": 'Ploceus Solutions' 
    },
    {
      "login": "rayala-web", 
      "avatar_url": "https://avatars2.githubusercontent.com/u/59235489?v=4", 
      "name": "prathyugeek",
      "company": 'Capital One'
      
    }
  ]
  
  
  class Form extends React.Component{
    state = {userName:''}
    handleSubmit =async (event) =>{
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp);
  
      this.setState({userName:''})
    }
  
    handleChange = (event) => this.setState({userName:event.target.value});
  
  
    render(){
       return (
         <form onSubmit={this.handleSubmit}>
           <input 
           type="text" 
           placeholder="Github Username"
           onChange={this.handleChange}
           value={this.state.userName}
           ></input>
           <button>Add Card</button>
         </form>
       )
    }
  }
  
  const CardList = (props) => {
    return (
      props.profiles.map(profile=> <Card {...profile}></Card>)
    )
  }
  
  
  class Card extends React.Component {
    profileData = this.props;
  
    render() {
      return (
        <div className="github_profile" style={{margin: '1rem'}}>
          <img src={this.profileData.avatar_url} style={{width:'75px'}}></img>
          <div className="info" style={{display:'inline-block', marginLeft:'10px', verticalAlign:'top'}}>
            <div className="name" style={{fontSize:'125%', fontWeight:'bold'}}>{this.profileData.name}</div>
            <div className="company">{this.profileData.company}</div>
          </div>
        </div>
      )
    }
  }
  
  class CardApp extends React.Component {
  
    state = {
      profiles: testData
    }
  
    addProfileDatetoProfiles = (response) =>{
      this.setState(prevState => ({
        profiles:[...prevState.profiles, response.data]
      })) 
      console.log(response.data);
    }
  
  
    render(){
      return (
        <div style={{boxSizing:'border-box'}}>
          <div class="header" style={{marginBottom:'1rem', fontSize:'1.5rem', textAlign:'center'}}>{this.props.title}</div>
          <Form onSubmit={this.addProfileDatetoProfiles}/>
          <CardList profiles={this.state.profiles}/>        
        </div>
      )
    }
  }


  export default CardApp;