import BlogTeaser from "./BlogTeaser";


function Home() {
    
    return (
        <>
            <div id="splash" className="container-fluid text-center position-relative">
                <div id="pleaseWork"></div>
                <div id="splash_title" className="d-flex justify-content-center">Journey Through Code</div>
                <div id="splash_text" className="text-center">Blog by Katy Simpson</div> 
                <div className="position-absolute top-75 start-50 translate-middle">
                    <a id="arrow" href="#blogteaser" type="button" className="mt-5">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
            <div id="blogteaser" className="container-fluid">
                <BlogTeaser />
            </div>
        </>
    );
}

export default Home;

