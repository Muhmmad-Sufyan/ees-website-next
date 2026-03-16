"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function PageHeader({ className, imageClass, title }) {
  return (
    <WaterWave className={className}>
      {(methods) => (
        <div className={`page-title ${imageClass}`}>
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <h1>{title}</h1>
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><i className="fa fa-angle-right"></i></li>
                      <li className="active">{title}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </WaterWave>
  );
}
