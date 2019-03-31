import React from "react";
import Layout from "../components/layout"
import avatar from '../images/avatar.png'
import {about_me, title} from '../../site-translate'
import SeoTagGenerate from "../components/SeoTagGenerator";

export default () => (
    <Layout>
        <SeoTagGenerate type='blog'
                        title={`درباره حسام | ${title}`}
        />
        <div className="postContainer">
            <h2 style={{textAlign: 'center'}}>{about_me.title}</h2>
            <p>
                <img src={avatar} alt="" style={{
                    margin: '0 auto',
                    display: 'block',
                    width: 150
                }}/>
            </p>
            <div dangerouslySetInnerHTML={{__html: about_me.content}}/>
        </div>
    </Layout>
);
