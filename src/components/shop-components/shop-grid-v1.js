import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ShopGridV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
		

    return <div>
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
										<Link  to='/allprojects' style={{color:'#082A9D'}} className="active show">All Projects</Link>
								<Link  to='/Architecture'>Architecture Design</Link>
								<Link  to='/Interior'> Interior Design</Link>
										{/* <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a> */}
									</div>
									</div>
									</div>
								</li>
								
								
								</ul>
							</div>
							<div className="tab-content " >
								{/* all projects */}
								{/* <div className="tab-pane fade active show" id="liton_product_grid" >
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
										
									
									</div>
									<div className="col-lg-4 col-sm-6 col-12">
									<div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details10"><img src={publicUrl+"assets/img/Allimgs/41.jpg"} alt="#"  /></Link>
		          </div>
		          
				  <h3 className="ltn__blog-title mt-10" id='productText'><Link to="/product-details10">Hospitality - Suite</Link></h3>
		        </div>
									</div>

									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Terra">Terra</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/TWL"> TWL</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Sky"><img src={publicUrl+"assets/img/Allimgs/Picture57.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Sky"> Sky</Link></h3>
		          
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
		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Gaming Room"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Gaming Room">Gaming Room</Link></h3>
		          
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
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture47.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/InGreen">In to the Green
					</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGACY"> Legacy
					</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Raw"> Raw</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Dreamy"> Dreamy</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details13"><img src={publicUrl+"assets/img/Allimgs/Rohan Hills.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details13">Layout Design</Link></h3>
		            
		        </div>
		      </div>
			 

			


			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details12"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		            
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details12">University</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details5"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details5">Opulent 
Liv-In</Link></h3>
		            
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details6"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details6"> The Estate</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details7"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details7">  The Dual</Link></h3>
		           
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details8"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details8">Nova</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details9"> Mannarkkad Residence,Kerala</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4 ">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details" ><img src={publicUrl+"assets/img/Allimgs/7.png"} alt="#" /></Link>
		          </div>
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details">By The Valley</Link></h3>
		           
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details4"><img src={publicUrl+"assets/img/Allimgs/17.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details4">L shaped </Link></h3>
		            
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details11"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details11"> Mall</Link></h3>
		            
		        </div>
		      </div>

			


									
									
									
								
									
									</div>
								</div>
								</div> */}

								
{/* Architecture */}
{/* <div className="tab-pane fade active show" id="Architecture">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
									
									</div>
									<div className="col-lg-4 col-sm-6 col-12">
									<div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details10"><img src={publicUrl+"assets/img/Allimgs/41.jpg"} alt="#"  /></Link>
		          </div>
		          
				  <h3 className="ltn__blog-title mt-10" id='productText'><Link to="/product-details10">Hospitality - Suite</Link></h3>
		        </div>
									</div>

								

									
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details13"><img src={publicUrl+"assets/img/Allimgs/Rohan Hills.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details13">Layout Design </Link></h3>
		            
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details11"><img src={publicUrl+"assets/img/Allimgs/52 - Copy.jpg"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details11">Mall</Link></h3>
		            
		        </div>
		      </div>


			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details12"><img src={publicUrl+"assets/img/Allimgs/45.jpg"} alt="#" /></Link>
		          </div>
		            
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details12">University</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details5"><img src={publicUrl+"assets/img/Allimgs/20.png"} alt="#" /></Link>
		          </div>
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details5">Opulent 
Liv-In</Link></h3>
		            
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details6"><img src={publicUrl+"assets/img/Allimgs/23.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details6"> The Estate</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details7"><img src={publicUrl+"assets/img/Allimgs/26.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details7">  The Dual</Link></h3>
		           
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details8"><img src={publicUrl+"assets/img/Allimgs/30.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details8">Nova</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details9"><img src={publicUrl+"assets/img/Allimgs/61.jpg"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details9"> Mannarkkad Residence,Kerala</Link></h3>
		          
		        </div>
		      </div>

			  <div className="col-lg-4 ">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details" ><img src={publicUrl+"assets/img/Allimgs/7.png"} alt="#" /></Link>
		          </div>
		          
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details">By The Valley</Link></h3>
		           
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/product-details4"><img src={publicUrl+"assets/img/Allimgs/17.png"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/product-details4">L Shaped </Link></h3>
		            
		        </div>
		      </div>


			 


									
									
									
								
									
									</div>
								</div>
								</div> */}

{/* Architecture */}

{/* Commercial */}
{/* <div className="tab-pane fade active show" id="Commercial">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view" id='responsive-text-project-heading'>
									<div className="row">
									<div className="col-lg-12">
									
									</div>
									<div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/TWL"><img src={publicUrl+"assets/img/Allimgs/Picture95.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/TWL"> TWL</Link></h3>
		          
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
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Sky"> Sky</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/LEGACY"><img src={publicUrl+"assets/img/Allimgs/Picture117.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/LEGACY">Legacy
					</Link></h3>
		          
		        </div>
		      </div>
			  
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Terra"><img src={publicUrl+"assets/img/Allimgs/Picture65.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Terra">Terra</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Gaming Room"><img src={publicUrl+"assets/img/Allimgs/Picture34.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Gaming Room">Gaming Room</Link></h3>
		          
		        </div>
		      </div>
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/InGreen"><img src={publicUrl+"assets/img/Allimgs/Picture47.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/InGreen">In to the Green
					</Link></h3>
		          
		        </div>
		      </div>
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/SpecksDesk"><img src={publicUrl+"assets/img/Allimgs/Picture91.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/SpecksDesk"> SpecksDesk</Link></h3>
		          
		        </div>
		      </div>
			
			
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Dreamy"><img src={publicUrl+"assets/img/Allimgs/Picture87.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title  mt-10"  id='productText'><Link to="/Dreamy"> Dreamy</Link></h3>
		          
		        </div>
		      </div>
			 
			 
			
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/Raw"><img src={publicUrl+"assets/img/Allimgs/Picture83.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/Raw"> Raw</Link></h3>
		          
		        </div>
		      </div>
			 
			 
			  <div className="col-lg-4">
		        <div className="ltn__blog-item ltn__blog-item-3">
		          <div className="ltn__blog-img">
		            <Link to="/PERLIYAS"><img src={publicUrl+"assets/img/Allimgs/Picture111.webp"} alt="#" /></Link>
		          </div>
		           
		            <h3 className="ltn__blog-title mt-10"  id='productText'><Link to="/PERLIYAS"> Hospital - Dialysis Center</Link></h3>
		          
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
								</div> */}

{/* Commercial */}
							
							</div>
						
							</div>
						</div>
				</div>
			</div>
						
			

			

		


			</div>

        }
}

export default ShopGridV1