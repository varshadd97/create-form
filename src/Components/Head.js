import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, Avatar} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import Description from '@material-ui/icons/Description';
import SearchField from "react-search-field";
import {Form} from "react-bootstrap";
import "./Head.css";

export default class Head extends Component {

    render() {
        return (
            <div className="head">
                <AppBar >
                    <Toolbar>
                        <IconButton  color="inherit">
                            <Menu  />
                        </IconButton>
                        <Avatar src="logo.jpg" className="logo"/>
                        <Typography className="logoname">Advancing For Humanity</Typography>
                        <Form inline>
                            <SearchField
                            placeholder="Search..."
                            classNames="search"
                        />
                        </Form>
                        <div className="notification">
                            <IconButton aria-label="show 17 new notifications" color="inherit" >
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                                <Description />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

