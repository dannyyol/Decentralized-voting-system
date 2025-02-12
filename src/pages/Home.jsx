import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'; // Import ethers.js
import { contractAddress } from '../constant/constant';
import Election from "../artifacts/contracts/Election.sol/Election.json";
import extractErrorCode from '../helpers/extractErrorCode';
import { toast } from 'react-toastify';

const Home = (props) => {
    const [provider, setProvider] = useState(null);
    // const [contract, setContract] = useState(null);
    const [candidates, setCandidates] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Connect to Ethereum network using ethers.js provider


    const convertBigNumber = (bigNumberFromSolidity) => {
        if (!bigNumberFromSolidity || !bigNumberFromSolidity._hex) {
            return 0;
        }
        const javascriptNumber = ethers.BigNumber.from(bigNumberFromSolidity._hex).toNumber();
        console.log(javascriptNumber); 
        return javascriptNumber;
    }
    

    const handleVote = async (candidateId) => {
        console.log(props.candidates)
        try {
            console.log(props.candidates)
            if (!props.contract) {
                throw new Error('Contract not initialized');
            }
            await props.contract.vote(candidateId);
            console.log(candidateId)
            setCandidates(prevCandidates => prevCandidates.filter(candidate => candidate.id !== candidateId));
            toast.success("Your vote is successful")
        } catch (error) {
            toast.error(extractErrorCode(error.message))
        }
    };

    return (
        <div>
            <div className="home">
                <div className="container-xl big-padding">
                    <div className="row section-title">
                        <h2 className="fs-4">E-VOTE - A blockchain based application</h2>
                        <p>Welcome to our secure and convenient electronic voting platform! We're delighted to have you participate
                            in the democratic process from the comfort of your own home..</p>
                    </div>
                    <div className="row">
                        {props.candidates.map(candidate => (
                            <div className="col-lg-4 col-md-6">
                                <div className="text-white text-center mb-4 votcard shadow-md bg-white p-4 pt-5">
                                    <img className="rounded-pill shadow-md p-2" src={'assets/images/testimonial/' + (candidate.gender === 'Male' ? 'm-avatar.jpg' : 'f-avatar.jpg')} alt=""/>
                                    <h4 className="mt-3 fs-5 mb-1 fw-bold">{candidate.firstName + ' ' + candidate.lastName}</h4>
                                    <h6 className="fs-7">Runnung to Be: <span className="text-primary fw-bold">{candidate.position}</span></h6>
                                    <p className="text-dark mt-3 mb-3 fs-8">{candidate.manifesto}.</p>
                                    {convertBigNumber(candidate.voteCount)}
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        className="btn btn-primary fw-bolder fs-8">View Manifesto</button>
                                    <button className="btn btn-danger fw-bolder px-4 ms-2 fs-8" onClick={() => handleVote(candidate.id)}>Vote</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;






