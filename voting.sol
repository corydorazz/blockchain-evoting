// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {

    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;

    event VoteReceived(uint candidateId, uint totalVotes);

    constructor() {
        addCandidate("Tom Cruise");
        addCandidate("Angelina Jolie");
        addCandidate("Arnold Schwarzenegger");
    }

    function addCandidate(string memory _name) internal {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            0
        );
    }

    function vote(uint _candidateId) public {
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Candidate not found"
        );
        candidates[_candidateId].voteCount++;
        emit VoteReceived(_candidateId, candidates[_candidateId].voteCount);
    }

    function getCandidate(uint _id) public view returns (
        uint,
        string memory,
        uint
    ) {
        Candidate memory c = candidates[_id];
        return (c.id, c.name, c.voteCount);
    }
}
