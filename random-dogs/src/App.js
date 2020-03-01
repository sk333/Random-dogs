import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: [],
            list2: [],
            baseUrl: 'https://random.dog/woof.json',
            availableTypes: ["mp4", "MP4", "JPG", "jpg", "gif", "GIF", "JPEG", "jpeg", "png", "PNG"],
            test: ""
        }
    }

    getApiData = () => {
        let api = this.state.baseUrl;
        for (var i = 0; i < 4; i++) {
            fetch(api)
                .then(response => response.json())
                .then(data => data.url)
                .then(url => {
                    let type = "";
                    let index = 0;
                    index = url.lastIndexOf(".");
                    type = url.substring(index + 1, url.length);
                    if (this.state.availableTypes.includes(type)) {
                        return [url, "true"];
                    }
                    return [url, ""];
                })
                .then(result => { // (**)
                        if (result[1]) {
                            this.setState({
                                list1: this.state.list1.concat([result[0]]),
                                // test: result[1]
                            })
                        }
                        else {
                            i--;
                        }
                    }
                )
        }
        for (var i = 0; i < 4; i++) {
            fetch(api)
                .then(response => response.json())
                .then(data => data.url)
                .then(url => {
                    let type = "";
                    let index = 0;
                    index = url.lastIndexOf(".");
                    type = url.substring(index + 1, url.length);
                    if (this.state.availableTypes.includes(type)) {
                        return [url, "true"];
                    }
                    return [url, ""];
                })
                .then(result => { // (**)
                        if (result[1]) {
                            this.setState({
                                list1: this.state.list1.concat([result[0]]),
                                // test: result[1]
                            })
                        }
                        else {
                            i--;
                        }
                    }
                )
        }
    }


    getType(s) {
        let type = "";
        let index = 0;
        let judgement = true;
        index = s.lastIndexOf(".");
        type = s.substring(index + 1, s.length);
        if (this.state.availableTypes.includes(type)) {
            return true;
        }
        return false;
    }

    componentDidMount() {
        this.getApiData();
    }

    render() {
        let _this = this;
        let list1 = this.state.list1.map((item) => (
            (item.search("mp4") == -1 ? (
                        <div class="col-md-3 column">
                            <img src={item} class="img-thumbnail"/>
                        </div>)
                    :
                    (<div class="col-md-3 column">
                        <iframe class="embed-responsive-item" src={item} width="100%"></iframe>
                    </div>)
            )
        ));
        let list2 = this.state.list2.map((item) => (
            (item.search("mp4") == -1 ? (
                        <div class="col-md-3 column">
                            <img src={item} class="img-thumbnail"/>
                        </div>)
                    :
                    (<div class="col-md-3 column">
                        <iframe class="embed-responsive-item" src={item} width="100%"></iframe>
                    </div>)
            )
        ));
        return (
            <div class="row clearfix">
                <div class="col-md-12 column">
                    <div class="row clearfix">
                        <div class="col-md-12 column">
                            <div class="row clearfix">
                                {
                                    list1
                                }
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="row clearfix">
                        <div class="col-md-12 column">
                            <div class="row clearfix">
                                {
                                    list2
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
