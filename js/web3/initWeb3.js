$(document).ready(function () {

    /**
     * Button MetaMask
     */
    var buttonConnMetamask = $('#connMetamask');
    //If we click on button metamask
    buttonConnMetamask.on('click', function () {
        if (checkMetamaskInstall()) {
            getAccount();
        };
    });
    /**
     * Listener accounts 
     */
    //If change account in metamask        
    ethereum.on('accountsChanged', function (accounts) {
        // Time to reload your interface with accounts[0]!
        alert("Account MetaMask Changed!")
        getAccount();

    });

    /**
     * Listener chains 
     */
    ethereum.on('chainChanged', (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        alert("Chain MetaMask Changed!")
        window.location.reload();
        getAccount();
    });

})
//Detección de navegador Web3
function checkMetamaskInstall() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        return 1
    }
    else {
        alert('MetaMask is not installed!. Please Install it first');
        return 0
    }
}
//Initialize metamask 
async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(accounts)
    // We currently only ever provide a single account,
    // but the array gives us some room to grow.
}

// Pay Button
function transaction() { 
    //Sending Ethereum to an address
    sendEthButton.addEventListener('click', () => {
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [
                    {
                        from: accounts[0],
                        to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                        value: '0x29a2241af62c0000',
                        gasPrice: '0x09184e72a000',
                        gas: '0x2710',
                    },
                ],
            })
            .then((txHash) => console.log(txHash))
            .catch((error) => console.error);
    });

    ethereumButton.addEventListener('click', () => {
        getAccount();
    });

}
