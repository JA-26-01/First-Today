import React,{useEffect} from 'react'
import { useState } from 'react';
import NewsItem from '../NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//arrow function for accessing this components

// export class News extends Component

const News = (props) => {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
  // constructor(props)
  // {
  //   super(props);
  //   this.state=
  //   {
  //    articles:[],
  //    loading:false,
  //    page:1,
  //    totalResults:0
  //   }
  //   document.title=`First Today - ${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`

  // }
  const update_news=async () =>
  {
    const url=` https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=${props.apiKey}&page=${page}&pageSize=${props.per_page}`;
    // this.setState({loading:true})
    setLoading(true)
    let data=await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    console.log(parseddata.totalResults)
    setArticles(parseddata.articles)
    setLoading(false)
    setTotalResults(parseddata.totalResults)
    // this.setState({
    //   articles:parseddata.articles,
    //   totalResults:parseddata.totalResults,
    //   loading:false,
    //   })
  }

  useEffect(()=>
    {
      update_news();
      document.title=`First Today - ${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`
    },[])
  // async componentDidMount()
  // {
  //   this.update_news()
  // }

  // handlenext = async() =>
  // {
  //  this.setState({page:this.state.page + 1})
  //  this.update_news()
  // }

  // handleprev = async() =>
  // {
  //   this.setState({page:this.state.page - 1})
  //   this.update_news()
  // }

const fetchMoreData = async() =>
  {
   const url=` https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.per_page}`;
   setPage(page + 1);
    // this.setState({loading:true})
    setLoading(true)
    let data=await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    console.log(parseddata.totalResults)
    setArticles(articles.concat(parseddata.articles))
    setTotalResults(parseddata.totalResults)
    setLoading(false)
    // this.setState({
    //   articles:this.state.articles.concat(parseddata.articles),
    //   totalResults:parseddata.totalResults,
    //   loading:false
    //   })
  }

  // render() {

    return (
      <div className='container my-3'>
        {loading && <Spinner/>}
        {!loading && <h2 style={{margin:'30px 0px' ,marginTop:'90px'}}>TOP HEADLINES</h2>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}//
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}>
        <div className='container'>
        <div className="row">

        {articles.map((element)=>
        {
          return <div className="col-md-4"  key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description.slice(0,80):""} iurl={element.urlToImage?element.urlToImage:""} nurl={element.url}
          author={element.author} published={element.publishedAt}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>

        {/* {!this.state.loading && <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handleprev} disabled={this.state.page===1}>Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenext} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.per_page)}>Next</button>
        </div>} */}
      </div>
    )
  }
// }

News.defaultProps=
{
   country:"in",
   per_page:9,
   category:"general"
}

News.propTypes=
{
   country: PropTypes.string,
   per_page: PropTypes.number,
   category: PropTypes.string,
}

export default News
