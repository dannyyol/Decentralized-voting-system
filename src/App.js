import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Login from './pages/Login';
import VoterRegistration from './pages/VoterRegistration';
import CandidateRegistration from './pages/CandidateRegistration';
import Result from './pages/Result';
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress } from './constant/constant';
import Election from "./artifacts/contracts/Election.sol/Election.json";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [electionStarted, setElectionStarted] = useState(false);
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    }
  });

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      fetchAdminStatus()
      getCandidatesList()
    } else {
      setAccount(null);
      setIsConnected(false);
      localStorage.removeItem('isConnected');
      localStorage.removeItem('account');

    }
  }

  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const currentAddress = await signer.getAddress();
        setAccount(currentAddress);
        console.log("Metamask Connected : " + currentAddress);
        setIsConnected(true);
        localStorage.setItem('isConnected', 'true');
        localStorage.setItem('account', currentAddress);
        fetchAdminStatus()
      } catch (err) {
        console.error(err);
        setIsConnected(false);
        localStorage.removeItem('isConnected');
        localStorage.removeItem('account');
      }
    } else {
      setIsConnected(false);
      localStorage.removeItem('isConnected');
      localStorage.removeItem('account');
      console.error("Metamask is not detected in the browser")
    }
  }

  const fetchAdminStatus = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, Election.abi, signer);
    const admin = await contract.admin();
    const currentAddress = await signer.getAddress();
    setIsAdmin(admin === currentAddress);

    // Check if election has started
    const isElectionStarted = await contract.electionStarted();
    setElectionStarted(isElectionStarted);
    if (admin === currentAddress) {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
    } else {
      setIsAdmin(false);
      localStorage.setItem('isAdmin', 'false');
    }
  };

  const getCandidatesList = async () =>{
      try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send('eth_requestAccounts', []);
          setProvider(provider);
          const contract = new ethers.Contract(
              contractAddress,
              Election.abi,
              provider.getSigner()
          );
          setContract(contract);
          const candidateList = await contract.getCandidateList();
          setCandidates(candidateList);
      } catch (error) {
          // setErrorMessage(error.message);
      }
  
  }
  useEffect(() => {
    const storedIsConnected = localStorage.getItem('isConnected');
    if (storedIsConnected === 'true') {
      setIsConnected(true);
      setAccount(localStorage.getItem('account'));
    }
    fetchAdminStatus()
    getCandidatesList()
  }, []);

  const ProtectedRoute = ({ element, ...rest }) => {
    return isConnected ? (
      <React.Fragment {...rest} element={element} />
    ) : (
      <Navigate to="/login" replace />
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Layout isConnected={isConnected} isAdmin={isAdmin} electionStarted={electionStarted}>
          <div className="main-content">
            <ToastContainer position="bottom-right" draggable pauseOnHover theme='dark' />
            <Routes>
              <Route path="/" element={<Home candidates={candidates} contract={contract} account={account}/>} />
              <Route path="/login" element={<Login isConnected={isConnected} connectToMetamask={connectToMetamask} account={account} />} />
              <Route path="/result" element={<Result />} />
              <Route path="/voter-registration" 
                element={
                  <ProtectedRoute>
                    <VoterRegistration />
                  </ProtectedRoute>
                }
              />
              <Route path="/candidate-registration" 
                element={
                  <ProtectedRoute>
                    <CandidateRegistration />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
