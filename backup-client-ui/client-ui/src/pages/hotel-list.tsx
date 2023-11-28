import Seo from "@/components/common/Seo";
import Header7 from "@/components/ui/header/header-7";
import MainFilterSearchBox from "@/components/ui/hero/hero-4/MainFilterSearchBox";
import React from "react";
import Sidebar from "@/components/hotel-list/Sidebar";
import TopHeaderFilter from "@/components/hotel-list/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/HotelProperties";
import Pagination from "@/components/common/Pagination";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/ui/footer/default";
import SearchBar from "@/components/ui/hero/hero-1/LocationSearch";

const HotelList = () => {
  return (
    <>
      <Seo pageTitle="Hotel List" />
      <div className="header-margin"></div>
      <Header7 />

      <section className="pt-40 pb-40 bg-light-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="text-30 fw-600">Find Your Dream Luxury Hotel</h1>
              </div>
              {/* End text-center */}
              <MainFilterSearchBox />
            </div>
            {/* End col-12 */}
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                // tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <HotelProperties />
              </div>
              {/* End .row */}
              <Pagination />
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default HotelList;
