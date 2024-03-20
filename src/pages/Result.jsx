import React from "react";

export default function Result() {
    return (
        <>
            <div className="container py-5 big-padding">
                <div className="row section-title">
                    <h2 className="fs-5 text-center">Election Outcome Announcement</h2>
                    <p>The results of the recent election have been tallied, representing the collective voice of our community. Dive into the details and implications of this momentous occasion.</p>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/m-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">James Anderson</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-label="Example with label" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/m-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">Arun Kumar</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/m-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">Pream Nath</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-label="Example with label" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/f-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">Reena Anath</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/m-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">Allen Shory</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="row shado-md p-2 m-0 rounded shadow-md bg-white">
                            <div className="col-md-3">
                                <img className="rounded-pill max-130 p-2" src="assets/images/testimonial/f-avatar.jpg" alt="" />
                            </div>
                            <div className="col-md-9 align-self-center">
                                <h4 className="mt-3 fs-5 mb-1 fw-bold">Aney Kumm</h4>
                                <p className="fs-8 mb-2 fw-bold">Votes : 34,567</p>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" aria-label="Example with label" style={{ width: "85%" }} aria-valuenow="59" aria-valuemin="0" aria-valuemax="100">59%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}