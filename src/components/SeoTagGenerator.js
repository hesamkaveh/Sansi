import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {seo, rssLink, title} from "../../site-config";
import favicon from "../images/favicon.png";

class seoTagGenerator extends Component {
    render() {
        let props = this.props;
        return (
            <Helmet>
                <meta name="google-site-verification" content={seo.googleVerificationCode}/>
                <html lang={seo.lang}/>
                <meta charSet={seo.charSet}/>
                <meta name="viewport" content=
                    {props.viewport ? props.viewport : "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"}/>
                < meta name="theme-color" content="#fff"/>
                <link rel="alternate" type="application/rss+xml" title={title} href={rssLink}/>
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <meta name="description" content={props.description}/>
                <meta name="twitter:app:country" content={seo.country}/>
                <meta name="robots" content={props.robots ? props.robots : "index,follow"}/>
                <meta name="twitter:site" content={seo.twitter}/>
                <meta name="twitter:creator" content={seo.twitter}/>
                <meta name="twitter:description" content={props.description}/>
                <meta name="twitter:title" content={props.title}/>
                <meta property="og:locale" content={seo.locale}/>
                <meta property="og:title" content={props.title}/>
                <meta property="og:site_name" content={seo.siteName}/>
                <meta property="og:type" content={props.type}/>
                <meta name="og:description" content={props.description}/>
                <title>{props.title}</title>
                {props.image ? <meta property="og:image" content={props.image}/> : null}
                {props.image ? <meta name="twitter:image" content={props.image}/> : null}
                {props.section ? props.section.map((category) =>
                        <meta property="article:section" content={category.name} key={category.name}/>)
                    : null}
                {props.tags ? props.tags.map((tag) =>
                    <meta key={2} property="article:tag" content={tag.name}/>) : null}
                <meta name="keywords" itemProp="keywords" key={1}
                      content={props.tags ? props.tags.map((tag) => `${tag.name}`) : null}/>
                {props.modified_time ?
                    <meta property="og:updated_time" content={props.modified_time}/>
                    : null}
                {props.published_time ?
                    <meta property="article:published_time" content={props.published_time}/>
                    : null}
                {props.modified_time ?
                    <meta property="article:modified_time" content={props.modified_time}/>
                    : null}

                {props.children}
            </Helmet>
        );
    }
}

export default seoTagGenerator;
