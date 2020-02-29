import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            img: null,
            baseUrl: 'https://random.dog/'    //这里创建urls保存接口的路径，后面img标签调用图片用到
        }
    }

    getApiData = () => {
        let api = this.state.baseUrl + "woof.json";
        let {list, img, bu} = this.state;
        fetch(api)
            .then(response => response.json())
            .then(data => data.url)
            // .then(img => this.setState({img:img}))
            .then(img => this.setState({
                list: [...list, img]
            }))
            .catch(e => e)
    }

    componentDidMount(){
        for (var i=0;i<2;i++){
            this.getApiData();
        }
    }
    // render() {
    //     return (
    //         <div className="home">
    //           <div className="item">
    //               {
    //                   //一级渲染
    //                   this.state.list.map((item, index) => {
    //                       return (
    //                           <div className="list" key={index}>
    //                             <h5>{item.title}</h5>
    //                             <ul>
    //                                 {
    //                                     // 二级渲染
    //                                     item.list.map((lis, index) => {
    //                                         return (
    //                                             <li key={index}>
    //                                               <Link to={`/Dateils/${lis._id}`}>
    //                                                 <p>{lis.title}</p>
    //                                                 <p style={{color:"red"}}>{lis.price}元</p>
    //                                               </Link>
    //                                             </li>
    //                                         )
    //                                     })
    //                                 }
    //
    //                             </ul>
    //
    //                           </div>
    //                       )
    //                   })
    //               }
    //           </div>
    //         </div>
    //     )
    // }

    render() {

      return (<div class="container">
            <div class="row clearfix">
              <div class="col-md-12 column">
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <div class="row clearfix">
                      <div class="col-md-3 column">
                        <img src={this.state.list[0]} class="img-thumbnail"/>
                        {/*<img src="test_images/cat.JPG" class="img-thumbnail" />*/}
                      </div>
                      <div class="col-md-3 column">
                        <img src={this.state.list[1]} class="img-thumbnail" />
                      </div>
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-md-12 column">
                    <div class="row clearfix">
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                      <div class="col-md-3 column">
                        <img src="test_images/cat.JPG" class="img-thumbnail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
    }
}

export default App;
