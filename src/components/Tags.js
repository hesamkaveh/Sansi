import React from "react"
import tag from "../images/tag-black.svg";
import InlineSVG from 'react-inlinesvg';


class Tags extends React.Component {
    render() {
        const {tags}=this.props

        return (
            <div className="tags">
                <InlineSVG src={tag} className=''/>
                {tags.map((s, index) => (<a className='followMeContainer'  href={`/tag/`+s.slug}>{s.name}</a>))}
            </div>
        )
    }
}

export default Tags