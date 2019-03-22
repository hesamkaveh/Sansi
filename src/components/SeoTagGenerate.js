import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {seo, rssLink, title as siteTitle} from "../../site-config";
import favicon from "../images/favicon.png";

class seoTagGenerate extends Component {
    render() {
        return (
            <Helmet>
                <meta name="google-site-verification" content={seo.googleVerificationCode}/>
                <html lang={seo.lang}/>
                <meta charSet={seo.charSet}/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
                <meta name="theme-color" content="#fff"/>
                <link rel="alternate" type="application/rss+xml" title={siteTitle} href={rssLink}/>
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
                <meta name="description" content={this.props.description}/>
                <meta name="twitter:app:country" content={seo.country}/>
                <meta name="robots" content="index,follow"/>
                <meta name="twitter:site" content={seo.twitter}/>
                <meta name="twitter:creator" content={seo.twitter}/>
                <meta name="twitter:description" content={this.props.description}/>
                <meta name="twitter:title" content={this.props.title}/>
                <meta property="og:locale" content={seo.locale}/>
                <meta property="og:title" content={this.props.title}/>
                <meta property="og:site_name" content={seo.siteName}/>
                <meta property="og:type" content={this.props.type}/>
                <meta name="og:description" content={this.props.description}/>
                <title>{this.props.title}</title>
                {this.props.image ? <meta property="og:image" content={this.props.image}/> : null}
                {this.props.image ? <meta name="twitter:image" content={this.props.image}/> : null}
                {this.props.section ? this.props.section.map((category) =>
                        <meta property="article:section" content={category.name} key={category.name}/>)
                    : null}
                {this.props.tags ? this.props.tags.map((tag) => <meta key={2} property="article:tag"
                                                                      content={tag.name}/>) : null}
                <meta name="keywords" itemProp="keywords" key={1}
                      content={this.props.tags ? this.props.tags.map((tag) => `${tag.name}`) : null}/>
                {this.props.modified_time ?
                    <meta property="og:updated_time" content={this.props.modified_time}/>
                    : null}
                {this.props.published_time ?
                    <meta property="article:published_time" content={this.props.published_time}/>
                    : null}
                {this.props.modified_time ?
                    <meta property="article:modified_time" content={this.props.modified_time}/>
                    : null}


                {/* TODO: Add {children} */}


            </Helmet>
        );
    }
}

export default seoTagGenerate;
