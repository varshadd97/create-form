import React, {Component}from 'react';
import ImageUploader from 'react-images-upload';
import TextField from '@material-ui/core/TextField';
import Form from 'react-bootstrap/Form';
import "./Body.css";
import ReactSearchBox from 'react-search-box';
import TimezonePicker from 'react-timezone';
import { DateTime } from 'react-datetime-bootstrap';
import { Button }from "react-bootstrap";

class Copy extends Component{
  constructor(){
    super();
    this.state={
      name:"",
      nameError:"",
      title:"",
      titleError:"",
      categories:"",
      categoriesError:"",
      summery:"",
      summeryError:"",
      location:"",
      locationError:"",
      startdate:"",
      startdateError:"",
      starttime:"",
      starttimeError:"",
      enddate:"",
      enddateError:"",
      endtime:"",
      endtimeError:""
    }
  }

data = [
    { key: 'Pune',
      value: ' Pune',
    },
    { key: "Solapur",
      value: ' Solapur',
    }
    ]

onDrop = (picture)=> {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

submit(){
  if( !this.state.name.length>0 && !this.state.title.length>0 
      && !this.state.categories.length>0 && !this.state.summery.length>0 
      && !this.state.location.length>0 && !this.state.startdate.length>0
      && !this.state.enddate.length>0 && !this.state.endtime.length>0
      && !this.state.starttime.length>0 )
  {
    this.setState(
      { nameError:"please Fill the Name", 
        titleError:"please Fill the Title",
        categoriesError:"Please fill the Categories",
        summeryError:"please fill the Summery",
        locationError:"please fill the Location",
        startdateError:"Please Fill the Start Date",
        starttimeError:"Please Fill the Start Time",
        enddateError:"Please Fill the End Date",
        endtimeError:"Please Fill the End Time"
      }
    )
  }

else if (!this.state.name.length>0){
  this.setState(
    {nameError:"please Fill the Name"}
    )
}
else if (!this.state.title.length>0){
  this.setState(
    {titleError:"please Fill the Title"}
    )
}
else if (!this.state.categories.length>0){
  this.setState(
    {categoriesError:"please fill the categories"}
    )
}
else if (!this.state.summery.length>0){
  this.setState(
    {summeryError:"please fill the Summery"}
    )
}
else if (!this.state.location.length>0){
  this.setState(
    {locationError:"please fill the Location"}
    )
}
else if (!this.state.startdate.length>0){
  this.setState(
    {startdateError:"Please Fill the Start Date"}
    )
}
else if (!this.state.starttime.length>0){
  this.setState(
    {starttimeError:"please Fill the Start Time"}
    )
}
else if (!this.state.enddate.length>0){
  this.setState(
    {enddateError:"Please Fill the End Date"}
    )
}
else if (!this.state.endtime.length>0){
  this.setState(
    {endtimeError:"please Fill the End Time"}
    )
}
else {
    alert("Your Form is Sumitted")
  }
}

render(){
    return (  <>
          <p className="create-event">Create Event
            <Button variant="primary" className="create-button" onClick={()=>this.submit()} >Create</Button>
            <Button variant="light" className="cancel-button">Cancel</Button>
        </p>
        <div className="hr"><hr/></div>
           
      <div className="create">
              <p className="show">Add Event in*</p>
              <TextField 
              value={this.state.name} 
              onChange={(event)=>{this.setState({name:event.target.value})}}
              placeholder="select..." />
              <p className="submit">{this.state.nameError}</p>
              
              <p className="show">Upload Image</p>
              <ImageUploader
              withIcon={true}
              buttonText='Upload images'
              onChange={this.onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              className="image"
              />

              <p className="show">title*</p>
              <TextField 
              value={this.state.title} 
              onChange={(event)=>{this.setState({title:event.target.value})}}
              placeholder="" />
              <p className="submit">{this.state.titleError}</p>

              <p className="show">Categories*</p>
              <TextField 
              value={this.state.categories} 
              onChange={(event)=>{this.setState({categories:event.target.value})}}
              placeholder="select..." />
              <p className="submit">{this.state.categoriesError}</p>

              <p className="show">Short Summery*</p>
              <TextField 
              value={this.state.summery} 
              onChange={(event)=>{this.setState({summery:event.target.value})}}
              placeholder="" />
              <p className="submit">{this.state.summeryError}</p>

              <h6>Type: Public</h6>
              <div className="space">
                <p className="show">Registration Site</p>
               <hr/>

              <h6 >Is this a virtual event?
                <Form>
                <Form.Check 
                type="switch"
                id="custom-switch"
                label="Yes"
                />
              </Form>

              </h6>
              <p className="show">Online Link</p>
              <hr />
              </div>
              
              
              <>  
              <p className="select-timezone">Select TimeZone*</p>
              <div className="location">
              <ReactSearchBox
              value=""
              data={this.data}
              callback={record => console.log(record)}
              onChange={(event)=>{this.setState({location:event.target.value})}}
              />
              <p className="submit">{this.state.locationError}</p>
              
              <div className="timezone">
              <TimezonePicker 
              value="Asia/Yerevan"
              onChange={timezone => console.log('New Timezone Selected:', timezone)}
              inputProps={{
              placeholder: 'Select Timezone...',
              name: 'timezone',}}
              />
              </div>
              </div>
              </>
  
              <div className="date">
              <p className="show">Start Date*</p>
              <DateTime 
              pickerOptions={{format:"LL"}} 
              value="2017-04-20"
              value={this.state.startdate} 
              onChange={(event)=>{this.setState({startdate:event.target.value})}}/>
              <p className="submit">{this.state.startdateError}</p>

              <p className="show">Start Time*</p>
              <DateTime 
              pickerOptions={{format:"LTS"}} 
              placeholder="09:00"AM 
              value={this.state.starttime} 
              onChange={(event)=>{this.setState({starttime:event.target.value})}}/>
              <p className="submit">{this.state.starttimeError}</p>

              <p className="show">End Date*</p>
              <DateTime 
              pickerOptions={{format:"LL"}} 
              value="2017-04-20"
              value={this.state.enddate} 
              onChange={(event)=>{this.setState({enddate:event.target.value})}}/>
              <p className="submit">{this.state.enddateError}</p>
        
              <p className="show">End Time*</p>
              <DateTime 
              pickerOptions={{format:"LTS"}} placeholder="05:00"AM
              value={this.state.endtime} 
              onChange={(event)=>{this.setState({endtime:event.target.value})}}/>
              <p className="submit">{this.state.endtimeError}</p>
        </div>
        </div>
  
  </>
        )
    }
}
export default Copy;
