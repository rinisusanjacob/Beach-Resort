import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan ,FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"FREE COCKTAILS",
                info:''
            },
            {
                icon:<FaHiking/>,
                title:"ENDLESS HIKING",
                info:''
            },
            {
                icon:<FaShuttleVan/>,
                title:"FREE SHUTTLE",
                info:''
            },
            {
                icon:<FaBeer/>,
                title:"STRONGEST BEER",
                info:''
            }
        ]
    }
    render() {
        return (
            <section id="services" className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service ">
                            <span>{item.icon}</span>
                            <h6 >{item.title}</h6>
                            <p>{item.info}</p>
                            
                        </article>

                    })}
                </div>
            </section>
        )
    }
}
