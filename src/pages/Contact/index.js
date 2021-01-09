export default function Contact() {
   return (
       <div className="container">
           <div className="row">
               <div className="col-md-8">
                   <form className="block form-horizontal">
                       <h1 className="block-header">Contact</h1>
                       <div className="form-group">
                           <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                           <div className="col-sm-10">
                               <input type="Name" className="form-control" id="exampleInputName1" placeholder="Name" />
                           </div>
                           <div className="form-group">
                               <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                               <div className="col-sm-10">
                                   <input type="Email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                               </div>
                               <div className="form-group">
                                   <label className="col-sm-2 control-label" htmlFor="msg">Message</label>
                                   <div className="col-sm-10">
                                       <textarea className="textinput" id="exampleTextArea1" rows="4" placeholder="Message"></textarea>
                                       <p>
                                           <input type="reset" />
                                           <input type="submit" value="Submit" />
                                       </p>
                                   </div>
                                   {/* <!-- <button type="submit" class="btn btn-primary">Submit</button> --> */}
                               </div>
                           </div>
                       </div>
                   </form>
               </div>
           </div>
       </div>
   )
}