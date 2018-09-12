import {graphql} from "gatsby"
import React from "react"
import dateSvg from "../images/calendar.svg";
import {toJalaali} from 'jalaali-js'


class PostIcons extends React.Component {
    monthToString(monthInt) {
        switch (monthInt) {
            case 1:
                return ("فروردین")
            case 2:
                return ("اردیبهشت")
            case 3:
                return ("خرداد")
            case 4:
                return ("تیر")
            case 5:
                return ("مرداد")
            case 6:
                return ("شهریور")
            case 7:
                return ("مهر")
            case 8:
                return ("آبان")
            case 9:
                return ("آذر")
            case 10:
                return ("دی")
            case 11:
                return ("بهمن")
            case 12:
                return ("اسفند")
            default:
                return("")
        }
    }

    render() {

        return (
            <div className="postDescriptin">
                                <span>
                                    <img src={dateSvg} alt="logo"/>
                                    {' '}
                                    {toJalaali(2016, 4, 11).jd} {' '}
                                    {this.monthToString(toJalaali(2016, 4, 11).jm)} {' '}
                                    {toJalaali(2016, 4, 11).jy} {' '}



                                </span>
                {'\u00A0'}{'\u00A0'}
                {/*<span>*/}
                {/*<img src={commentSvg} alt="logo"/> {'\u00A0'}*/}
                {/*{node.comments} کامنت*/}
                {/*</span>*/}


            </div>
        )
    }
}

export default PostIcons

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    tags {
      name
    }
    categories {
      name
    }
  }
`
