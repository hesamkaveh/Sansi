import { injectGlobal } from 'styled-components';
import BoldEot from './fonts/eot/IRANSansWeb_Bold.eot';
import MediumEot from './fonts/eot/IRANSansWeb_Medium.eot';
import LightEot from './fonts/eot/IRANSansWeb_Light.eot';
import UltraEot from './fonts/eot/IRANSansWeb_UltraLight.eot';
import NormalEot from './fonts/eot/IRANSansWeb.eot';
import BoldWoff2 from './fonts/woff2/IRANSansWeb_Bold.woff2';
import MediumWoff2 from './fonts/woff2/IRANSansWeb_Medium.woff2';
import LightWoff2 from './fonts/woff2/IRANSansWeb_Light.woff2';
import UltraWoff2 from './fonts/woff2/IRANSansWeb_UltraLight.woff2';
import NormalWoff2 from './fonts/woff2/IRANSansWeb.woff2';
import BoldWoff from './fonts/woff/IRANSansWeb_Bold.woff';
import MediumWoff from './fonts/woff/IRANSansWeb_Medium.woff';
import LightWoff from './fonts/woff/IRANSansWeb_Light.woff';
import UltraWoff from './fonts/woff/IRANSansWeb_UltraLight.woff';
import NormalWoff from './fonts/woff/IRANSansWeb.woff';
import BoldTtf from './fonts/ttf/IRANSansWeb_Bold.ttf';
import MediumTtf from './fonts/ttf/IRANSansWeb_Medium.ttf';
import LightTtf from './fonts/ttf/IRANSansWeb_Light.ttf';
import UltraTtf from './fonts/ttf/IRANSansWeb_UltraLight.ttf';
import NormalTtf from './fonts/ttf/IRANSansWeb.ttf';

injectGlobal`
hr {
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    margin-bottom: 1rem;
    margin-top: 1rem;
}

html {
    -ms-overflow-style: scrollbar;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
}
*, ::after, ::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-('${BoldEot}');
    src: url('${BoldEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${BoldWoff2}') format('woff2'), /* FF39+,Chrome36+, Opera24+*/ url('${BoldWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${BoldTtf}') format('truetype');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 500;
    src: url('${MediumEot}');
    src: url('${MediumEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${MediumWoff2}') format('woff2'), /* FF39+,Chrome36+, Opera24+*/ url('${MediumWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${MediumTtf}') format('truetype');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 300;
    src: url('${LightEot}');
    src: url('${LightEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${LightWoff2}') format('woff2'), /* FF39+,Chrome36+, Opera24+*/ url('${LightWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${LightTtf}') format('truetype');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: 200;
    src: url('${UltraEot}');
    src: url('${UltraEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${UltraWoff2}') format('woff2'), /* FF39+,Chrome36+, Opera24+*/ url('${UltraWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${UltraTtf}') format('truetype');
}

@font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url('${NormalEot}');
    src: url('${NormalEot}?#iefix') format('embedded-opentype'), /* IE6-8 */ url('${NormalWoff2}') format('woff2'), /* FF39+,Chrome36+, Opera24+*/ url('${NormalWoff}') format('woff'), /* FF3.6+, IE9, Chrome6+, Saf5.1+*/ url('${NormalTtf}') format('truetype');
}
body {
    color: #444;
    background: #fff;
    line-height: 1.9;
    margin: 0;
    font-family:IRANSans;
    font-size:16px;

}

a {
    color: unset;
        -webkit-text-decoration-skip: objects;
    text-decoration: none;
}

a:hover {
    color: unset;
    text-decoration: none;
}
#content a{
    color: #0288d1 !important;
}
#content a:hover{
    color: #005b9f !important;
}

code {
    float: left;
    width: 100%;
    text-align: left;
    margin: 20px 0;
    padding: .2rem .4rem;
    font-size: 90%;
    color: #bd4147;
    background-color: #f8f9fa;
    border-radius: .25rem;
}
code, kbd, pre, samp {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
#content{
    color: #444;
}
#content h1,#content h2, #content h3 , #content h4 , #content h5, #content h6{
     margin-top: 40px;
     margin-bottom: 10px;
     
     }

#content img {
display: block;
height: auto;
max-width: 100%;
}


.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
}
dl, ol, ul {
    margin-top: 0;
}

p {
    margin-bottom: 1rem;
    margin-top: 1rem;
}
 svg * {
    fill: #333 ;
}
.FeaturedPostImg{
    width: 100%;
    margin: 15px 0;
}
.postContainer{
    margin: 70px 0px 40px 0px;
}
strong {
    font-weight: 500;
    color: #111;
}
#content li {
    margin: 10px 0;
}
blockquote{
    border-right: 2px solid #777;
    margin: auto 0px;
    font-weight: 400;
    padding: 5px 20px 5px 0;
}
figcaption {
    text-align: center;
    opacity: 0.8;
}
`;