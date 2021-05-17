import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div id="woods">
                                <img id="slideshow"  className="img-fluid" alt="slideshow" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div id="scroll">
                                <div className="container vertical-scrollable">
                                    <p><b>NEWS FEED</b></p>
                                    <hr className="white" />
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis velit
                                    architecto,
                                    nemo illum molestiae dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Amet, rem? Sed ducimus tempore n am ea! Eius quisquam fugit nemo
                                    illum esse nam explicabo distinctio temporibus enim fuga et, sed a magnam laborum
                                    maxime quia,
                            iusto mollitia voluptatibus, sapiente tenetur aliquid? Tenetur dolores ea alias.</p>

                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-9">
                                    <h3>Welcome to our website!</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Amet, rem? Sed ducimus tempore n am ea! Eius quisquam fugit nemo Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Amet, rem? Sed ducimus tempore n am ea! Eius quisquam fugit nemo
                                    illum esse nam explicabo distinctio temporibus enim fuga et, sed a
                                illum esse nam explicabo distinctio temporibus enim fuga et, sed assumenda!</p>
                                </div>
                                <div className="col-md-3">
                                    <div><b>Bigshot, Zoo,  Adds</b></div>
                                    <div> West South Street, Suite 4200 </div>
                                    <div>Houston, Texas 901283</div>
                                    <div>555-555-5555 (phone)</div>
                                    <div>555-555-5555 (fax)</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
