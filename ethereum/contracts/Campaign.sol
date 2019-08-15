pragma solidity ^0.4.25;

contract CampaignDeployment {
    address[] public deployedCampaigns;
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    modifier restrictedToManager() {
        require (
            msg.sender == manager,
            'Sender not authorized'
        );
        _;
    }
    constructor (uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }
    function contribute() public payable {
        require(msg.value > minimumContribution, "A problem occurred");
        approvers[msg.sender] = true;
        approversCount++;
    }
    function createRequest(string description, uint value, address recipient) public restrictedToManager {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(approvers[msg.sender], "A problem occurred");
        require(!request.approvals[msg.sender], "A problem occurred");
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    function finalizeRequest(uint index) public restrictedToManager {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount / 2), "A problem occurred");
        require(!request.complete, "A problem occurred");
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}







