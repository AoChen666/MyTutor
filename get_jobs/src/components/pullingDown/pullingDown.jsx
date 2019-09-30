import React,{Component} from 'react';

import './pullingDown.css';
import initPulling from './pulling';

export default class Pulling extends Component{

    constructor(){
        super();
    }
    // initPulling = (content,callback) => {
    //     return function
    // }
    componentDidMount(){
        initPulling()
        // console.log(a)
    }
    handleClick = (e) => {
        console.log(e.target.scrollTop,e.currentTarget.scrollTop,e.target,e.currentTarget)
        let container = document.getElementById('container');
        let content = document.getElementById('content');
        console.log('container',container.scrollTop,container.scrollHeight,container.clientHeight);
        console.log('content',content.scrollTop,content.scrollHeight,content.clientHeight);
    }
    render(){
        const {children} = this.props

        return(
            <div className="container" id='container'  onScroll={this.handleClick}>
                <p className="topTips">下拉刷新</p>
                <div className="content" id='content'>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                    <div className="list">1</div>
                </div>
            </div>
        )
    }
}