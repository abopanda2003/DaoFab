import { Signer } from '@ethersproject/abstract-signer';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { deployMockContract, MockContract } from 'ethereum-waffle';
import { BigNumber, constants, Contract, ContractFactory, utils } from 'ethers';
import { ethers, artifacts } from 'hardhat';
import { Artifact } from 'hardhat/types';

const { AddressZero, MaxUint256 } = constants;
const { getContractFactory, getSigners, Wallet } = ethers;
const { parseEther: toWei } = utils;

describe('My Hardhat Test', function () {
    describe('constructor', () => {
        console.log("welcome!!!");
    });
});
