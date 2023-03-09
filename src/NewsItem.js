import React, { Component } from 'react'

// export class NewsItem extends Component {
 
  // render() 
  // {
const NewsItem= (props) => {
    let {title,description,iurl,nurl,author,published} = props;
    return (
      <div>
        <div className="card my-3" style={{width:"18 rem"}}>
  <img src={iurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}....</p>
    <p className="card-text"><small className="text-muted">{author}</small></p>
    <p className="card-text"><small className="text-muted">{new Date(published).toGMTString()}</small></p>
    <a href={nurl} target="_blank" className="btn btn-sm btn-danger">Read more >></a>
  </div>
</div>
      </div>
    )
  }
// }

export default NewsItem
