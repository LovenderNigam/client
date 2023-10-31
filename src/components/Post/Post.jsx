import React from 'react'
import { useEffect, useState } from 'react';
import {getNewss}  from '../../api/Api';
import { Link } from 'react-router-dom';


const Post = () => {

  
  const [newss, setNewss]= useState ([]);

  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async(id)=>{
    let response =  await getNewss(id);
    setNewss(response.data)
 
   }
 
  
 
  return (
    <>
  <div className="col-md-4">
  <div className="position-sticky" style={{top: '2rem'}}>
    <div className="p-4 mb-3 bg-body-tertiary rounded">
      <h4 className="fst-italic">About</h4>
      <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
    </div>
    <div>
      <h4 className="fst-italic">Recent posts</h4>
      <ul className="list-unstyled">
        <li>
          <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
            <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="col-lg-8">
              <h6 className="mb-0">Example blog post title</h6>
              <small className="text-body-secondary">January 15, 2023</small>
            </div>
          </a>
        </li>
        <li>
          <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
            <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="col-lg-8">
              <h6 className="mb-0">This is another blog post title</h6>
              <small className="text-body-secondary">January 14, 2023</small>
            </div>
          </a>
        </li>
        <li>
          <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
            <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
            <div className="col-lg-8">
              <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
              <small className="text-body-secondary">January 13, 2023</small>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div className="p-4">
      <h4 className="fst-italic">Archives</h4>
      <ol className="list-unstyled mb-0">
        <li><a href="#">March 2021</a></li>
        <li><a href="#">February 2021</a></li>
        <li><a href="#">January 2021</a></li>
        <li><a href="#">December 2020</a></li>
        <li><a href="#">November 2020</a></li>
        <li><a href="#">October 2020</a></li>
        <li><a href="#">September 2020</a></li>
        <li><a href="#">August 2020</a></li>
        <li><a href="#">July 2020</a></li>
        <li><a href="#">June 2020</a></li>
        <li><a href="#">May 2020</a></li>
        <li><a href="#">April 2020</a></li>
      </ol>
    </div>
    <div className="p-4">
      <h4 className="fst-italic">Elsewhere</h4>
      <ol className="list-unstyled">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ol>
    </div>
  </div>
</div>

 {/* {
    newss.map((news)=>
    <ul className="list-unstyled" key={news._id}>
    
    <li>
      <Link className="d-flex border" to={`/detail-news/${news._id}`}>
        <div className="post-img col-lg-4" style={{padding:'2px',margin:'auto'}}>
        <img src={news.image} width={'80px'}  alt="blog" />
        </div>
        <div className="p-2 col-lg-8">
          <span className="mb-0" style={{wordBreak:'break-all',fontSize:'15px'}}>{news.title}<Link to='#' style={{color:'Highlight'}}>Read More</Link></span>
        
        </div>
      </Link>
    </li>
     
  
  </ul>
   )} */}
  
    </>
  )
}

export default Post