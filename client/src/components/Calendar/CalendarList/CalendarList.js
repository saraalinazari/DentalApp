import React, { Component } from "react";
import tuiCalendar from 'tui-calendar'; 
import '../css/Calendar.css';
import '../css/icon.css';
import CalendarListItem from './CalendarListItem';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Container, Row, Col} from 'reactstrap';
import { element } from "prop-types";


class CalendarList extends Component {
    state={
        calendarList:[],
        index:-1,
        backgroundCheckbox: ""  
  
    }
componentDidMount(){
    this.setState({calendarList:this.props.calendarList});
}
    changeColor = event => {
        console.log('test');
        console.log(event.target.nextSibling);
        const nextSibling = event.target.nextSibling;
        const borderColor = event.target.name;
        if(!event.target.checked){
            nextSibling.style.backgroundColor = "transparent";
        } else {
            nextSibling.style.backgroundColor = `${borderColor}`;
        }
    //     // let backcolor;
    //     console.log("event.target.checked",event.target.checked);
    //     console.log("event.target.value",event.target);
    //     let calListTemp = [];
    //     console.log("event.target.value",event.target);
    //     this.props.calendarList.map(element=>{
    //         calListTemp.push(element);
    //     });
    //    // let index = this.findCalendar(event.target.value);
    //     // console.log("index", index);
    //     calListTemp[event.target.index].checked = event.target.checked;
    //     console.log("calListTemp", calListTemp);
    //     this.setState({ calendarList: calListTemp });
    //     //console.log("calendarList", this.state.calendarList);
    //    // this.props.test(event);
    //     // if(event.target.checked){
    //     //     backcolor =  event.target.name;
    //     // }
    //     // else{
    //     //     backcolor='transparent';
    //     // }
    //     // this.setState({backgroundCheckbox:backcolor});
    }
    render(){
        return(
         <div id="lnb-calendars" 
         onChange={this.props.onChangeCalendars} 
         className="lnb-calendars">
                <div className="lnb-calendars-item">
                    <label>
                        <input className="tui-full-calendar-checkbox-square" 
                        type="checkbox" value="all"  defaultChecked={true}/>
                        <span></span>
                        <strong>View all</strong>
                    </label>
                </div>
            <div id="calendarList"  className="lnb-calendars-d1">
                {this.props.calendarList.map((search, i)=> {                    
 
                return (  
                        
                    <div className="lnb-calendars-item" key={search.id}>
                        <label>
                            <input type="checkbox" 
                            className="tui-full-calendar-checkbox-round" 
                            value={search.id} 
                            name={search.borderColor}
                            checked={search.checked}
                            index={i}
                            onChange={this.changeColor} 
                            />
                            {/* <input type="checkbox" 
                            className="tui-full-calendar-checkbox-round" 
                            value={search.id} checked={search.checked}/> */}
                            {/* <span  style= {{borderColor: `${search.borderColor}` 
                            , background:`${this.state.backgroundCheckbox}`} }></span> */}
                            <span  style= {{borderColor: `${search.borderColor}` 
                            , background:`${search.borderColor}`} }></span>
                            <span> {search.name} </span>
                        </label>
                       
                    </div> 
                    
                );
               
              })} </div>
            </div>
   
                
        )
    }
}

// const CalendarList = props=>(
//    
    
// )
export default CalendarList;