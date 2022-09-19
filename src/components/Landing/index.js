import React, { useState, useEffect, useRef, useCallback } from 'react';
import $ from 'jquery';
import { FaBolt, FaHubspot, FaKey, FaLock, FaMagic, FaMinusCircle, FaMobile } from 'react-icons/fa';
import './index.css';
import AvalancheIcon from '../../img/avalanche.svg';
import PolygonIcon from '../../img/polygon.png';
import EDXIcon from '../../img/EDX.svg';
import XDIIcon from '../../img/XDI.svg';
import TwitterIcon from '../../img/twitter.svg';
import DiscordIcon from '../../img/discord.svg';
import YouTubeIcon from '../../img/youtube.svg';
import RedditIcon from '../../img/reddit.svg';
import Linkedin from '../../img/linkedin.svg';

const Landing = (props) => {

    return (
        <div>
            <div class="main container">
                <div className='first-section d-flex justify-content-center'>
                    <div className='first-content'>
                        <h1>Decentralize EDX Exchange</h1>   
                        <p>Trade MATIC, AVAX, ETH and other top cryptocurrencies with up to 30x leverage directly from your wallet.
                        <br/>Deposit just $10 to get started.</p>  
                        <button type="button" className='trade-btn mt-5' style={{fontFamily:'Open Sans', fontWeight:'bold'}}>Trading now</button>
                    </div>
                </div>
                <div className='second-section'>
                    <div className='mb-5'>
                        <p>BATTLE TESTED</p>
                        <h3>Trusted by over 25000 traders</h3>
                        <p><span>We believe everyone should have access to open & powerful financial tools.</span></p>
                    </div>
                    <div className='volume'>
                        <div className='d-flex'>
                            <div className='volume-card'>
                                <div>
                                    <p class="Volume-title">Trading Volume</p>
                                    <h3 class="Volume-value">
                                        $348,472,542
                                        <p class="Volume-time">Last 24h</p>
                                    </h3>   
                                </div>                         
                            </div>
                            <div className='volume-card'>
                                <div>
                                    <p class="Volume-title">Traders</p>
                                    <h3 class="Volume-value">
                                        38,529
                                        <p class="Volume-time">Last 24h</p>
                                    </h3>
                                </div>
                            </div>
                            <div className='volume-card br-0'>
                                <div>
                                    <p class="Volume-title">Open Interest</p>
                                    <h3 class="Volume-value">
                                        $220,683,594
                                        <p class="Volume-time">Last 24h</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='third-section'>
                    <div>
                        <div>
                            <p>CALLING ALL TRADERS</p>
                            <h3>The wait is over, Layer 2 is here</h3>
                            <p><span>We built the fastest and most powerful decentralized exchange ever.</span></p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='d-flex container w-75 my-3'>
                            <div className='d-flex mr-5 w-50'>
                                <div className='icon'><FaMinusCircle className='m-auto text-white mt-3 w-50p' size={21} /></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Low fees, no gas costs</h5>
                                    <p className='text-maincolor text-left'>Once you deposit to Layer 2, you will no longer pay fees to miners for each transaction</p>
                                </div>
                            </div>
                            <div className='d-flex ml-5 w-50'>
                                <div className='icon'><FaBolt className='m-auto text-white mt-3 w-50p' size={21}/></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Lightning quick</h5>
                                    <p className='text-maincolor text-left'>Trades are executed instantly and confirmed on the blockchain within hours.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex container w-75 my-3'>
                            <div className='d-flex mr-5 w-50'>
                                <div className='icon'><FaMagic className='m-auto text-white mt-3 w-50p' size={21} /></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Fast withdrawals</h5>
                                    <p className='text-maincolor text-left'>Unlike other platforms, there is no wait required to withdraw your funds from Layer 2.</p>
                                </div>
                            </div>
                            <div className='d-flex ml-5 w-50'>
                                <div className='icon'><FaMobile className='m-auto text-white mt-3 w-50p' size={21}/></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Mobile Friendly</h5>
                                    <p className='text-maincolor text-left'>We've redesigned our exchange from the ground up, so you can use it from any device.</p>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex container w-75 my-3'>
                            <div className='d-flex mr-5 w-50'>
                                <div className='icon'><FaLock className='m-auto text-white mt-3 w-50p' size={21} /></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Secure & private</h5>
                                    <p className='text-maincolor text-left'>StarkWare's Layer 2 solution provides increased security & private via zero-knowledge rollups.</p>
                                </div>
                            </div>
                            <div className='d-flex ml-5 w-50'>
                                <div className='icon'><FaHubspot className='m-auto text-white mt-3 w-50p' size={21}/></div>
                                <div className='text-left pl-5'>
                                    <h5 className='text-white fw-600'>Cross-margining</h5>
                                    <p className='text-maincolor text-left'>Access leverage across positions in multiple markets from a single account.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <div className='network-select'>
                <div className='container d-flex justify-content-between'>
                    <div>
                        <h1 className='fw-600'>Available on your<br />  preferred network</h1>
                        <p className='text-maincolor'>EDX is currently live on Arbitrum and Avalanche.</p>
                    </div>
                    <div>
                        <div className='item d-flex justify-content-between mh-120'>
                            <div className='mr-5'>
                                <img src={PolygonIcon} className='network-icon' />
                            </div>
                            <div className='text-right'>
                                <h4 className='fw-600 text-white'>Polygon</h4>
                                <button type="button" class="mx-0 trade-btn mt-2">Trading now</button>
                            </div>
                        </div>
                        <div className='item d-flex justify-content-between mh-120 mt-3'>
                            <div className='mr-5'>
                                <img src={AvalancheIcon} className='network-icon' />
                            </div>
                            <div className='text-right'>
                                <h4 className='fw-600 text-white'>Avalanche</h4>
                                <button type="button" class="mx-0 trade-btn mt-2">Trading now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='create-token container'>
                <div>
                    <h1 className='fw-600 pb-4'>Two create tokens create our ecosystem.</h1>
                </div>
                <div className='d-flex'>
                    <div className='item'>
                        <div className='d-flex'><img src={EDXIcon} className='pr-4' /><h4 className='fw-600 text-white align-self-end mb-0'>EDX</h4></div>
                        <div>
                            <h5 className='text-white text-left mt-4'>EDX is the utility and governance token. Accrues 30% of the platform's generated fees.</h5>
                            <p className='text-maincolor text-left'>Arbitrum APR: 16.08%, Avalanche APR: 16.66%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <button type="button" class="mx-0 buy-btn mt-2">Buy on Polygon</button>
                                <button type="button" class="mx-0 buy-btn mt-2 mx-3">Buy on Avalanche</button>
                            </div>
                            <div><button type="button" class="mx-0 buy-btn mt-2">Read more</button></div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='d-flex'><img src={XDIIcon} className='pr-4' /><h4 className='fw-600 text-white align-self-end mb-0'>XDI</h4></div>
                        <div>
                            <h5 className='text-white text-left mt-4'>XDI is the liquidity provider token. Accrues 70% of the platform's generated fees.</h5>
                            <p className='text-maincolor text-left'>Arbitrum APR: 16.08%, Avalanche APR: 16.66%</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <button type="button" class="mx-0 buy-btn mt-2">Buy on Polygon</button>
                                <button type="button" class="mx-0 buy-btn mt-2 mx-3">Buy on Avalanche</button>
                            </div>
                            <div><button type="button" class="mx-0 buy-btn mt-2">Read more</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-section'>
                <div className='container d-flex pt-5'>
                    <div>
                        <div>
                            <h6 className='text-left mb-0'>Blog</h6>
                            <p className='text-maincolor text-left my-1'>Lastest news from team</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>FAQs</h6>
                            <p className='text-maincolor text-left my-1'>Frequently asked question</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Tutorials</h6>
                            <p className='text-maincolor text-left my-1'>Watch others EDX</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Help Center</h6>
                            <p className='text-maincolor text-left my-1'>Tips & tricks for using dYdX</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Term of Use</h6>
                            <p className='text-maincolor text-left my-1'>Rules for using the platform</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Privacy Policy</h6>
                            <p className='text-maincolor text-left my-1'>Our policies around data</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Legal</h6>
                            <p className='text-maincolor text-left my-1'>Our legal docs and terms</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='text-left mb-0'>Mission</h6>
                            <p className='text-maincolor text-left my-1'>What are we building & why?</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Careers</h6>
                            <p className='text-maincolor text-left my-1'>We are actively hiring!</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Brand</h6>
                            <p className='text-maincolor text-left my-1'>Download logo & assets</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='text-left mb-0'>Web</h6>
                            <p className='text-maincolor text-left my-1'>Enjoy instant Layer 2 trading on our robust web app</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Mobile</h6>
                            <p className='text-maincolor text-left my-1'>Full-featured Layer 2 perpetuals, on the go</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Testnet</h6>
                            <p className='text-maincolor text-left my-1'>Risk-free test environment on Ropsten</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Hedgies</h6>
                            <p className='text-maincolor text-left my-1'>Our collection of 4,200 unique avatars represented as NFTs</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Margin</h6>
                            <p className='text-maincolor text-left my-1'>Spot & Margin on Layer 1 of Ethereum</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='text-left mb-0'>Dashboard</h6>
                            <p className='text-maincolor text-left my-1'>Stake, vote, claim</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>Forums</h6>
                            <p className='text-maincolor text-left my-1'>Discuss & propose topics</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='text-left mb-0'>Documentation</h6>
                            <p className='text-maincolor text-left my-1'>Trade with our API</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>GitHub</h6>
                            <p className='text-maincolor text-left my-1'>View our smart contracts, developer tools and more</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0'>GitHub</h6>
                            <p className='text-maincolor text-left my-1'>View our smart contracts, developer tools and more</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h6 className='text-left mb-0 d-flex'><img src={TwitterIcon} width={14} className='mr-2' />Twitter</h6>
                            <p className='text-maincolor text-left my-1'>Stay in the pluse</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0 d-flex'><img src={DiscordIcon} width={14} className='mr-2' />Discord</h6>
                            <p className='text-maincolor text-left my-1'>Chat with other traders</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0 d-flex'><img src={YouTubeIcon} width={14} className='mr-2' />YouTube</h6>
                            <p className='text-maincolor text-left my-1'>Subscribe for Tutorials</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0 d-flex'><img src={RedditIcon} width={14} className='mr-2' />Reddit</h6>
                            <p className='text-maincolor text-left my-1'>Post on our forums</p>
                        </div>
                        <div>
                            <h6 className='text-left mb-0 d-flex'><img src={Linkedin} width={14} className='mr-2' />LinkedIn</h6>
                            <p className='text-maincolor text-left my-1'>View our open roles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
