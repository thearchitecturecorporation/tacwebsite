import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from './sidebar';

class ShopDetails32 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = this.props.customClass ? this.props.customClass :''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass :''
    return (
		<div className="ltn__product-area ltn__product-gutter mb-100">
		<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__shop-options">
						<ul>
						<li>
							<div className="ltn__grid-list-tab-menu ">
							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center---" >
							<div className="nav" id='responsive-text-project-heading'>
								{/* <a className="active show" data-bs-toggle="tab" href="#liton_product_grid" style={{fontFamily:'Poppins, sans-serif '}}>All Projects</a>
								<a  data-bs-toggle="tab" href="#Architecture" style={{fontFamily:'Poppins, sans-serif '}}>Architecture Design</a>
								<a  data-bs-toggle="tab" href="#Commercial" style={{fontFamily:'Poppins, sans-serif '}}> Interior Design</a> */}
								<Link   to='/allprojects'>All Projects</Link>
								<Link  to='/Architecture'>Architecture Design</Link>
								<Link  to='/Interior' className="active show" style={{color:'#082A9D'}}> Interior Design</Link>
								{/* <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a> */}
							</div>
							</div>
							</div>
						</li>
						
						
						</ul>
						<div className="tab-content " >


						<div className="tab-pane fade active show" id="Commercial">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
										{/* Search Widget */}
									
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/TWL"> TWL</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>

									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Earthessence"><img src={publicUrl+"assets/img/Allimgs/Picture45.webp"} alt="#" /></Link>
		          </div>
		         
				  <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Earthessence"> Earthessence</Link></h3>
		        </div>
		      </div>

			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Picture57.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Sky"> Sky</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGACY">Legacy
					</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Terra">Terra</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Gaming Room"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Gaming Room">Gaming Room</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture75.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/InGreen">In to the Green
					</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Dreamy"> Dreamy</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			 
			 
			
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Raw"> Raw</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
		          </div>
		          {/* <div className="ltn__blog-brief"> */}
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
		          {/* </div> */}
		        </div>
		      </div>
			

			




			 

			  


			 


			 

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/BACKtoBALANCE"><img src={publicUrl+"assets/img/Allimgs/Picture123.webp"} alt="#" /></Link>
		          </div>
		        
				  <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGABACKtoBALANCECY">Back TO Balance 

</Link></h3>
		        </div>
		      </div>


									
									
									
								
									
									</div>
								</div>
								</div>
						</div>
					</div>
					</div>
					</div>
					</div>
					</div>
    )
  }
}

export default ShopDetails32;
