@extends("adminlayout.adminlayout")
@section('body')
    <div class="content-page">

        <div class="content">
            <div class="container-fluid">

                <div class="row">
                </div>


                <div id="usd" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style="display: none">
                </div>

                <div id="del_tra" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style="display: none">

                </div>
                <button style="display: none;" type="button" id="show_tra" data-toggle="modal" data-target="#usd"></button>
                <button style="display: none;" type="button" id="show_del" data-toggle="modal"
                    data-target="#del_tra"></button>

                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Create New Plan</h3>
                            </div>
                            <div class="card-body">
                                <form method="post" action="{{route('createinvestmentplan')}}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Type Of Plan</label>
                                                <select class="form-control" name="type">
                                                    <option value="">Select Type</option>
                                                    <option value="stock plans">Stock</option>
                                                    <option value="forex plans">Forex</option>
                                                    <option value="crypto plans">Crypto</option>
                                                    <option value="real estate plan">Real Estate</option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name Of Plan</label>
                                                <input type="text" class="form-control" required name="name"
                                                    placeholder="Name Of Plan">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Minimum</label>
                                                <input type="number" class="form-control" required name="minimum"
                                                    placeholder="Minimum Deposit">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Maximum</label>
                                                <input type="number" class="form-control" required name="maximum"
                                                    placeholder="Maximum Deposit">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Referral Bonus</label>
                                                <input type="number" class="form-control" required name="refpercent"
                                                    placeholder="Referral Bonus">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>No of Times</label>
                                                <input type="number" class="form-control" required name="noofrepeat"
                                                    placeholder="No of times">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Percentage Profit</label>
                                                <input type="text" class="form-control" required name="percentage"
                                                    placeholder="Percentage Profit">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Duration</label>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <select class="form-control" required name="duration">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                            <option value="21">21</option>
                                                            <option value="22">22</option>
                                                            <option value="23">23</option>
                                                            <option value="24">24</option>
                                                            <option value="25">25</option>
                                                            <option value="26">26</option>
                                                            <option value="27">27</option>
                                                            <option value="28">28</option>
                                                            <option value="29">29</option>
                                                            <option value="30">30</option>
                                                            <option value="31">31</option>
                                                            <option value="32">32</option>
                                                            <option value="33">33</option>
                                                            <option value="34">34</option>
                                                            <option value="35">35</option>
                                                            <option value="36">36</option>
                                                            <option value="37">37</option>
                                                            <option value="38">38</option>
                                                            <option value="39">39</option>
                                                            <option value="40">40</option>
                                                            <option value="41">41</option>
                                                            <option value="42">42</option>
                                                            <option value="43">43</option>
                                                            <option value="44">44</option>
                                                            <option value="45">45</option>
                                                            <option value="46">46</option>
                                                            <option value="47">47</option>
                                                            <option value="48">48</option>
                                                            <option value="49">49</option>
                                                            <option value="50">50</option>
                                                            <option value="51">51</option>
                                                            <option value="52">52</option>
                                                            <option value="53">53</option>
                                                            <option value="54">54</option>
                                                            <option value="55">55</option>
                                                            <option value="56">56</option>
                                                            <option value="57">57</option>
                                                            <option value="58">58</option>
                                                            <option value="59">59</option>
                                                            <option value="60">60</option>
                                                            <option value="61">61</option>
                                                            <option value="62">62</option>
                                                            <option value="63">63</option>
                                                            <option value="64">64</option>
                                                            <option value="65">65</option>
                                                            <option value="66">66</option>
                                                            <option value="67">67</option>
                                                            <option value="68">68</option>
                                                            <option value="69">69</option>
                                                            <option value="70">70</option>
                                                            <option value="71">71</option>
                                                            <option value="72">72</option>
                                                            <option value="73">73</option>
                                                            <option value="74">74</option>
                                                            <option value="75">75</option>
                                                            <option value="76">76</option>
                                                            <option value="77">77</option>
                                                            <option value="78">78</option>
                                                            <option value="79">79</option>
                                                            <option value="80">80</option>
                                                            <option value="81">81</option>
                                                            <option value="82">82</option>
                                                            <option value="83">83</option>
                                                            <option value="84">84</option>
                                                            <option value="85">85</option>
                                                            <option value="86">86</option>
                                                            <option value="87">87</option>
                                                            <option value="88">88</option>
                                                            <option value="89">89</option>
                                                            <option value="90">90</option>
                                                            <option value="91">91</option>
                                                            <option value="92">92</option>
                                                            <option value="93">93</option>
                                                            <option value="94">94</option>
                                                            <option value="95">95</option>
                                                            <option value="96">96</option>
                                                            <option value="97">97</option>
                                                            <option value="98">98</option>
                                                            <option value="99">99</option>
                                                            <option value="100">100</option>
                                                            <option value="101">101</option>
                                                            <option value="102">102</option>
                                                            <option value="103">103</option>
                                                            <option value="104">104</option>
                                                            <option value="105">105</option>
                                                            <option value="106">106</option>
                                                            <option value="107">107</option>
                                                            <option value="108">108</option>
                                                            <option value="109">109</option>
                                                            <option value="110">110</option>
                                                            <option value="111">111</option>
                                                            <option value="112">112</option>
                                                            <option value="113">113</option>
                                                            <option value="114">114</option>
                                                            <option value="115">115</option>
                                                            <option value="116">116</option>
                                                            <option value="117">117</option>
                                                            <option value="118">118</option>
                                                            <option value="119">119</option>
                                                            <option value="120">120</option>
                                                            <option value="121">121</option>
                                                            <option value="122">122</option>
                                                            <option value="123">123</option>
                                                            <option value="124">124</option>
                                                            <option value="125">125</option>
                                                            <option value="126">126</option>
                                                            <option value="127">127</option>
                                                            <option value="128">128</option>
                                                            <option value="129">129</option>
                                                            <option value="130">130</option>
                                                            <option value="131">131</option>
                                                            <option value="132">132</option>
                                                            <option value="133">133</option>
                                                            <option value="134">134</option>
                                                            <option value="135">135</option>
                                                            <option value="136">136</option>
                                                            <option value="137">137</option>
                                                            <option value="138">138</option>
                                                            <option value="139">139</option>
                                                            <option value="140">140</option>
                                                            <option value="141">141</option>
                                                            <option value="142">142</option>
                                                            <option value="143">143</option>
                                                            <option value="144">144</option>
                                                            <option value="145">145</option>
                                                            <option value="146">146</option>
                                                            <option value="147">147</option>
                                                            <option value="148">148</option>
                                                            <option value="149">149</option>
                                                            <option value="150">150</option>
                                                            <option value="151">151</option>
                                                            <option value="152">152</option>
                                                            <option value="153">153</option>
                                                            <option value="154">154</option>
                                                            <option value="155">155</option>
                                                            <option value="156">156</option>
                                                            <option value="157">157</option>
                                                            <option value="158">158</option>
                                                            <option value="159">159</option>
                                                            <option value="160">160</option>
                                                            <option value="161">161</option>
                                                            <option value="162">162</option>
                                                            <option value="163">163</option>
                                                            <option value="164">164</option>
                                                            <option value="165">165</option>
                                                            <option value="166">166</option>
                                                            <option value="167">167</option>
                                                            <option value="168">168</option>
                                                            <option value="169">169</option>
                                                            <option value="170">170</option>
                                                            <option value="171">171</option>
                                                            <option value="172">172</option>
                                                            <option value="173">173</option>
                                                            <option value="174">174</option>
                                                            <option value="175">175</option>
                                                            <option value="176">176</option>
                                                            <option value="177">177</option>
                                                            <option value="178">178</option>
                                                            <option value="179">179</option>
                                                            <option value="180">180</option>
                                                            <option value="181">181</option>
                                                            <option value="182">182</option>
                                                            <option value="183">183</option>
                                                            <option value="184">184</option>
                                                            <option value="185">185</option>
                                                            <option value="186">186</option>
                                                            <option value="187">187</option>
                                                            <option value="188">188</option>
                                                            <option value="189">189</option>
                                                            <option value="190">190</option>
                                                            <option value="191">191</option>
                                                            <option value="192">192</option>
                                                            <option value="193">193</option>
                                                            <option value="194">194</option>
                                                            <option value="195">195</option>
                                                            <option value="196">196</option>
                                                            <option value="197">197</option>
                                                            <option value="198">198</option>
                                                            <option value="199">199</option>
                                                            <option value="200">200</option>
                                                            <option value="201">201</option>
                                                            <option value="202">202</option>
                                                            <option value="203">203</option>
                                                            <option value="204">204</option>
                                                            <option value="205">205</option>
                                                            <option value="206">206</option>
                                                            <option value="207">207</option>
                                                            <option value="208">208</option>
                                                            <option value="209">209</option>
                                                            <option value="210">210</option>
                                                            <option value="211">211</option>
                                                            <option value="212">212</option>
                                                            <option value="213">213</option>
                                                            <option value="214">214</option>
                                                            <option value="215">215</option>
                                                            <option value="216">216</option>
                                                            <option value="217">217</option>
                                                            <option value="218">218</option>
                                                            <option value="219">219</option>
                                                            <option value="220">220</option>
                                                            <option value="221">221</option>
                                                            <option value="222">222</option>
                                                            <option value="223">223</option>
                                                            <option value="224">224</option>
                                                            <option value="225">225</option>
                                                            <option value="226">226</option>
                                                            <option value="227">227</option>
                                                            <option value="228">228</option>
                                                            <option value="229">229</option>
                                                            <option value="230">230</option>
                                                            <option value="231">231</option>
                                                            <option value="232">232</option>
                                                            <option value="233">233</option>
                                                            <option value="234">234</option>
                                                            <option value="235">235</option>
                                                            <option value="236">236</option>
                                                            <option value="237">237</option>
                                                            <option value="238">238</option>
                                                            <option value="239">239</option>
                                                            <option value="240">240</option>
                                                            <option value="241">241</option>
                                                            <option value="242">242</option>
                                                            <option value="243">243</option>
                                                            <option value="244">244</option>
                                                            <option value="245">245</option>
                                                            <option value="246">246</option>
                                                            <option value="247">247</option>
                                                            <option value="248">248</option>
                                                            <option value="249">249</option>
                                                            <option value="250">250</option>
                                                            <option value="251">251</option>
                                                            <option value="252">252</option>
                                                            <option value="253">253</option>
                                                            <option value="254">254</option>
                                                            <option value="255">255</option>
                                                            <option value="256">256</option>
                                                            <option value="257">257</option>
                                                            <option value="258">258</option>
                                                            <option value="259">259</option>
                                                            <option value="260">260</option>
                                                            <option value="261">261</option>
                                                            <option value="262">262</option>
                                                            <option value="263">263</option>
                                                            <option value="264">264</option>
                                                            <option value="265">265</option>
                                                            <option value="266">266</option>
                                                            <option value="267">267</option>
                                                            <option value="268">268</option>
                                                            <option value="269">269</option>
                                                            <option value="270">270</option>
                                                            <option value="271">271</option>
                                                            <option value="272">272</option>
                                                            <option value="273">273</option>
                                                            <option value="274">274</option>
                                                            <option value="275">275</option>
                                                            <option value="276">276</option>
                                                            <option value="277">277</option>
                                                            <option value="278">278</option>
                                                            <option value="279">279</option>
                                                            <option value="280">280</option>
                                                            <option value="281">281</option>
                                                            <option value="282">282</option>
                                                            <option value="283">283</option>
                                                            <option value="284">284</option>
                                                            <option value="285">285</option>
                                                            <option value="286">286</option>
                                                            <option value="287">287</option>
                                                            <option value="288">288</option>
                                                            <option value="289">289</option>
                                                            <option value="290">290</option>
                                                            <option value="291">291</option>
                                                            <option value="292">292</option>
                                                            <option value="293">293</option>
                                                            <option value="294">294</option>
                                                            <option value="295">295</option>
                                                            <option value="296">296</option>
                                                            <option value="297">297</option>
                                                            <option value="298">298</option>
                                                            <option value="299">299</option>
                                                            <option value="300">300</option>
                                                            <option value="301">301</option>
                                                            <option value="302">302</option>
                                                            <option value="303">303</option>
                                                            <option value="304">304</option>
                                                            <option value="305">305</option>
                                                            <option value="306">306</option>
                                                            <option value="307">307</option>
                                                            <option value="308">308</option>
                                                            <option value="309">309</option>
                                                            <option value="310">310</option>
                                                            <option value="311">311</option>
                                                            <option value="312">312</option>
                                                            <option value="313">313</option>
                                                            <option value="314">314</option>
                                                            <option value="315">315</option>
                                                            <option value="316">316</option>
                                                            <option value="317">317</option>
                                                            <option value="318">318</option>
                                                            <option value="319">319</option>
                                                            <option value="320">320</option>
                                                            <option value="321">321</option>
                                                            <option value="322">322</option>
                                                            <option value="323">323</option>
                                                            <option value="324">324</option>
                                                            <option value="325">325</option>
                                                            <option value="326">326</option>
                                                            <option value="327">327</option>
                                                            <option value="328">328</option>
                                                            <option value="329">329</option>
                                                            <option value="330">330</option>
                                                            <option value="331">331</option>
                                                            <option value="332">332</option>
                                                            <option value="333">333</option>
                                                            <option value="334">334</option>
                                                            <option value="335">335</option>
                                                            <option value="336">336</option>
                                                            <option value="337">337</option>
                                                            <option value="338">338</option>
                                                            <option value="339">339</option>
                                                            <option value="340">340</option>
                                                            <option value="341">341</option>
                                                            <option value="342">342</option>
                                                            <option value="343">343</option>
                                                            <option value="344">344</option>
                                                            <option value="345">345</option>
                                                            <option value="346">346</option>
                                                            <option value="347">347</option>
                                                            <option value="348">348</option>
                                                            <option value="349">349</option>
                                                            <option value="350">350</option>
                                                            <option value="351">351</option>
                                                            <option value="352">352</option>
                                                            <option value="353">353</option>
                                                            <option value="354">354</option>
                                                            <option value="355">355</option>
                                                            <option value="356">356</option>
                                                            <option value="357">357</option>
                                                            <option value="358">358</option>
                                                            <option value="359">359</option>
                                                            <option value="360">360</option>
                                                            <option value="361">361</option>
                                                            <option value="362">362</option>
                                                            <option value="363">363</option>
                                                            <option value="364">364</option>
                                                            <option value="365">365</option>
                                                            <option value="366">366</option>
                                                            <option value="367">367</option>
                                                            <option value="368">368</option>
                                                            <option value="369">369</option>
                                                            <option value="370">370</option>
                                                            <option value="371">371</option>
                                                            <option value="372">372</option>
                                                            <option value="373">373</option>
                                                            <option value="374">374</option>
                                                            <option value="375">375</option>
                                                            <option value="376">376</option>
                                                            <option value="377">377</option>
                                                            <option value="378">378</option>
                                                            <option value="379">379</option>
                                                            <option value="380">380</option>
                                                            <option value="381">381</option>
                                                            <option value="382">382</option>
                                                            <option value="383">383</option>
                                                            <option value="384">384</option>
                                                            <option value="385">385</option>
                                                            <option value="386">386</option>
                                                            <option value="387">387</option>
                                                            <option value="388">388</option>
                                                            <option value="389">389</option>
                                                            <option value="390">390</option>
                                                            <option value="391">391</option>
                                                            <option value="392">392</option>
                                                            <option value="393">393</option>
                                                            <option value="394">394</option>
                                                            <option value="395">395</option>
                                                            <option value="396">396</option>
                                                            <option value="397">397</option>
                                                            <option value="398">398</option>
                                                            <option value="399">399</option>
                                                            <option value="400">400</option>
                                                            <option value="401">401</option>
                                                            <option value="402">402</option>
                                                            <option value="403">403</option>
                                                            <option value="404">404</option>
                                                            <option value="405">405</option>
                                                            <option value="406">406</option>
                                                            <option value="407">407</option>
                                                            <option value="408">408</option>
                                                            <option value="409">409</option>
                                                            <option value="410">410</option>
                                                            <option value="411">411</option>
                                                            <option value="412">412</option>
                                                            <option value="413">413</option>
                                                            <option value="414">414</option>
                                                            <option value="415">415</option>
                                                            <option value="416">416</option>
                                                            <option value="417">417</option>
                                                            <option value="418">418</option>
                                                            <option value="419">419</option>
                                                            <option value="420">420</option>
                                                            <option value="421">421</option>
                                                            <option value="422">422</option>
                                                            <option value="423">423</option>
                                                            <option value="424">424</option>
                                                            <option value="425">425</option>
                                                            <option value="426">426</option>
                                                            <option value="427">427</option>
                                                            <option value="428">428</option>
                                                            <option value="429">429</option>
                                                            <option value="430">430</option>
                                                            <option value="431">431</option>
                                                            <option value="432">432</option>
                                                            <option value="433">433</option>
                                                            <option value="434">434</option>
                                                            <option value="435">435</option>
                                                            <option value="436">436</option>
                                                            <option value="437">437</option>
                                                            <option value="438">438</option>
                                                            <option value="439">439</option>
                                                            <option value="440">440</option>
                                                            <option value="441">441</option>
                                                            <option value="442">442</option>
                                                            <option value="443">443</option>
                                                            <option value="444">444</option>
                                                            <option value="445">445</option>
                                                            <option value="446">446</option>
                                                            <option value="447">447</option>
                                                            <option value="448">448</option>
                                                            <option value="449">449</option>
                                                            <option value="450">450</option>
                                                            <option value="451">451</option>
                                                            <option value="452">452</option>
                                                            <option value="453">453</option>
                                                            <option value="454">454</option>
                                                            <option value="455">455</option>
                                                            <option value="456">456</option>
                                                            <option value="457">457</option>
                                                            <option value="458">458</option>
                                                            <option value="459">459</option>
                                                            <option value="460">460</option>
                                                            <option value="461">461</option>
                                                            <option value="462">462</option>
                                                            <option value="463">463</option>
                                                            <option value="464">464</option>
                                                            <option value="465">465</option>
                                                            <option value="466">466</option>
                                                            <option value="467">467</option>
                                                            <option value="468">468</option>
                                                            <option value="469">469</option>
                                                            <option value="470">470</option>
                                                            <option value="471">471</option>
                                                            <option value="472">472</option>
                                                            <option value="473">473</option>
                                                            <option value="474">474</option>
                                                            <option value="475">475</option>
                                                            <option value="476">476</option>
                                                            <option value="477">477</option>
                                                            <option value="478">478</option>
                                                            <option value="479">479</option>
                                                            <option value="480">480</option>
                                                            <option value="481">481</option>
                                                            <option value="482">482</option>
                                                            <option value="483">483</option>
                                                            <option value="484">484</option>
                                                            <option value="485">485</option>
                                                            <option value="486">486</option>
                                                            <option value="487">487</option>
                                                            <option value="488">488</option>
                                                            <option value="489">489</option>
                                                            <option value="490">490</option>
                                                            <option value="491">491</option>
                                                            <option value="492">492</option>
                                                            <option value="493">493</option>
                                                            <option value="494">494</option>
                                                            <option value="495">495</option>
                                                            <option value="496">496</option>
                                                            <option value="497">497</option>
                                                            <option value="498">498</option>
                                                            <option value="499">499</option>
                                                            <option value="500">500</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-8">
                                                        <select class="form-control" required name="durationunit">
                                                            <option value="1">Hour(s)</option>
                                                            <option value="24">Day(s)</option>
                                                            <option value="720">Month(s)</option>
                                                            <option value="8760">Year(s)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" name="create_plan"
                                    class="btn btn-primary waves-effect waves-light">Create Plan</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Deposit Plans</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="table-responsive">
                                            <table id="datatable" class="table table-striped  table-bordered nowrap"
                                                style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th>SN</th>
                                                        <th>Name</th>
                                                        <th>Min</th>
                                                        <th>Max</th>
                                                        <th>Ref Percent</th>
                                                        <th>Plan Percent</th>
                                                        <th>Percent/Duration</th>
                                                        <th>No of Times</th>
                                                        <th>View/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @if ($allplans)
                                                        @foreach ($allplans as $plan)
                                                            <tr>
                                                                <td>{{$loop->index + 1}}</td>
                                                                <td>{{$plan->name}}</td>
                                                                <td>{{$plan->minimum}}</td>
                                                                <td>{{$plan->maximum}}</td>
                                                                <td>{{$plan->refpercent}}</td>
                                                                <td>{{$plan->percentage}}</td>
                                                                <td>{{$plan->percentage}} % / {{$plan->duration}}</td>
                                                                <td>{{$plan->noofrepeat}}</td>
                                                                <td>
                                                                    <button type="button"
                                                                    class="btn btn-sm btn-primary btn-custom "
                                                                    value="1167" data-toggle="modal"
                                                                    data-target="#myModalinvest{{ $loop->index + 1 }}">View</button>
        
        
        
                                                                        <button type="button"
                                                                        class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                        data-toggle="modal"
                                                                        data-target="#myModalinvdel{{ $loop->index + 1 }}">Delete</button>
                                                               





 <!-- The Modal -->
 <div class="modal fade"
 id="myModalinvest{{ $loop->index + 1 }}" role="dialog">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="">
             <button type="button"
                 class="close"
                 data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
             </button>
         </div>
         <div class="modal-body">
             <div class="">
                 <div class="card">
                     <div
                         class="card-header bg-success">
                         <h3
                             class="card-title text-white">
                             Investment Plan</h3>
                     </div>
                     <ul class="list-group">
                         <li class="list-group-item">
                             <span><b>Plan Name</b></span>
                             <span
                                 class="float-right tx-primary">{{ $plan->name }}</span>
                         </li>
                        
                         
                     </ul>
                     <div class="card-body">
                         <hr>
                         <div
                             class="card-header bg-dark">
                             <h3
                                 class="card-title text-white">
                                 Edit Investment Plan</h3>
                         </div>
                         <small
                             class="text-info">You
                             can Edit this particular
                             Plan as you wish
                             below</small>
                         <form method="post"
                             action="{{ route('editinvestmentplan') }}">
                             @csrf
                            
                             <input name="id"
                                 type="hidden"
                                 value="{{ $plan->id }}">
                             <div
                                 class="form-group">
                                 <label>Plan Name</label><br>
                                 <input type="text"
                                     name="name"
                                     class="form-control"
                                     value="{{ $plan->name }}">
                             </div>
                             <div
                                 class="form-group">
                                 <label>Plan Percent</label><br>
                                 <input type="text"
                                     name="duration"
                                     class="form-control"
                                     value="{{ $plan->percentage }}">
                             </div>
                             <div
                                 class="form-group">
                                 <label>Plan Duration in hours</label><br>
                                 <input type="text"
                                     name="percentage"
                                     class="form-control"
                                     value="{{ $plan->duration }}">
                             </div>
                             <div
                                 class="form-group">
                                 <label>Plan Referal Percent</label><br>
                                 <input type="text"
                                     name="refpercent"
                                     class="form-control"
                                     value="{{ $plan->refpercent }}">
                             </div>

                             <div
                                 class="form-group">
                                 <label>Plan Minimum</label><br>
                                 <input type="text"
                                     name="minimum"
                                     class="form-control"
                                     value="{{ $plan->minimum }}">
                             </div>

                             <div
                                 class="form-group">
                                 <label>Plan maximum</label><br>
                                 <input type="text"
                                     name="maximum"
                                     class="form-control"
                                     value="{{ $plan->maximum }}">
                             </div>
                             <div
                             class="form-group">
                             <label>Plan No of Repeat</label><br>
                             <input type="text"
                                 name="noofrepeat"
                                 class="form-control"
                                 value="{{ $plan->noofrepeat }}">
                         </div>

                         <div
                             class="form-group">
                             <label>Plan type</label><br>
                             <input type="text"
                                 name="type"
                                 class="form-control"
                                 value="{{ $plan->type }}">
                         </div>


                             

                             <div
                                 class="text-center">
                                 <button type="submit"
                                     name="up_am"
                                     class="btn btn-success waves-effect waves-light">Update
                                     Plan</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
         <div class="modal-footer"
             style="border:none;">
         </div>
     </div>
 </div>
</div>


<div id="myModalinvdel{{ $loop->index + 1 }}"
 class="modal fade " role="dialog">
 <div class="modal-dialog">
     <div class="modal-content">
         <div class="">
             <button type="button"
                 class="close"
                 data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">×</span>
             </button>
         </div>
         <div class="modal-body">
             <h4>Are you sure to delete
                 {{ $plan->name }} from
                 {{ $plan->type }} plan?</h4>
         </div>
         <div class="modal-footer no-border">
             <button type="button"
                 class="btn btn-secondary waves-effect"
                 data-dismiss="modal">No</button>
             <a href="{{ route('deleteinvestmentplan', $plan->id) }}"
                 class="btn btn-pink waves-effect">Delete</a>
         </div>
     </div>
 </div>
</div>









                                                        
                                                            </td>
                                                            </tr>
                                                        @endforeach
                                                    @endif


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
        <footer class="footer text-right">
            2022 ©
        </footer>
        <script>
            function hide_hint() {
                $.ajax({
                    type: "POST",
                    url: 'ajax.php',
                    data: 'hide_hint=' + 1,
                    success: function(data) {
                        $().html(data);
                    }
                });
            }
        </script>
    </div>



















    {{-- <div class="container">
<!-- DATA TABLE-->
<section class="p-t-20">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title-5 m-b-35">data table</h3>
                <div class="table-data__tool">
                    <div class="table-data__tool-left">
                        <div class="rs-select2--light rs-select2--md">
                            <select class="js-select2" name="property">
                                <option selected="selected">All Properties</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                        <div class="rs-select2--light rs-select2--sm">
                            <select class="js-select2" name="time">
                                <option selected="selected">Today</option>
                                <option value="">3 Days</option>
                                <option value="">1 Week</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                        <button class="au-btn-filter">
                            <i class="zmdi zmdi-filter-list"></i>filters</button>
                    </div>
                    <div class="table-data__tool-right">
                        <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                            <i class="zmdi zmdi-plus"></i>add item</button>
                        <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                            <select class="js-select2" name="type">
                                <option selected="selected">Export</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-responsive-data2">

                    <div class="card-header">
                        <strong>INVESTMENT PLANS</strong>

                    </div>

<div class="table table-responsive">

    <table class="table" style="background-color: rgb(226, 215, 215)">
        <thead>
            <tr>
                <th>


                        <span class="">ID</span>

                </th>
                <th>Package Name</th>
                <th>Minimum Deposit</th>
                <th>Maximum Deposit</th>
                <th>Percentage</th>
                <th>Duration</th>
                <th>repeat</th>
                <th>No of repeat</th>
                <th>Type</th>
                <th></th>
            </tr>

        </thead>
        <tbody>
            @if ($allplans)
                @foreach ($allplans as $plan)
                <form action="{{route('editinvestmentplan', $plan->id)}}" method="post">
                    @csrf
                    <tr class="tr-shadow">
                        <td>
                            <label class="">

                                <span class="">{{$loop->index}}</span>
                            </label>
                        </td>
                        <td><input type="text" name="plan"  required value="{{$plan->plan}}" id=""></td>
                        <td>
                            <span class="desc"><input type="number"  required value="{{$plan->minimum}}" name="minimum" id=""></span>
                        </td>

                        <td><input type="number" required name="maximum"  id="" value="{{$plan->maximum}}"></td>
                        <td>
                            <input type="text" required name="percentage"  value="{{$plan->percentage}}" id="">
                        </td>
                        <td><input type="text" required name="duration" placeholder="duration in days" value="{{$plan->duration}}" id=""></td>
                        <td>
                            <input type="text" required name="repeat" placeholder=""  value="{{$plan->repeat}}" id="">
                        </td>
                        <td><input type="number" required name="noofrepeat"  value="{{$plan->noofrepeat}}" id=""></td>

                        <td> <select name="type"  required id="">
                            <option value="{{$plan->type}}">{{$plan->type}}</option>

                            <option value="landbanking">Land Banking Plan</option>
                            <option value="realestateplan">Real Estate Plan</option>
                            <option value="cryptoplans">Crypto Plan</option>
                            <option value="forexplans">Forex Plan</option>
                            <option value="stockplans">Stock plan</option>

                        </select> </td>

                        <td>
                            <button type="submit" type="submit" class="btn btn-primary">Add</button>
                        </td>
                        <td>
                            <a href="{{route('deleteinvestmentplan',$plan->id)}}"><button type="button" class="btn btn-danger">delete</button></a>
                        </td>
                    </tr>
                </form>
                <tr class="spacer"></tr>
                @endforeach
            @endif

            <tr class="spacer"></tr>
            <tr><td colspan="4">Create new plan</td></tr>
            <tr>
                <form action="{{route('createinvestmentplan')}}" method="post">
                    @csrf
                    <tr class="tr-shadow">
                        <td>
                            <label class="">
                                <span class="">1</span>
                            </label>
                        </td>
                        <td><input type="text" required name="plan" placeholder="Plan Name" value="" id=""></td>
                        <td>
                            <span class="desc"><input type="number" required value="" placeholder="minimum amount" name="minimum" id=""></span>
                        </td>
                        <td><input type="number" name="maximum" placeholder="maximum amount" required id="" value=""></td>
                        <td>
                            <input type="text" name="percentage" placeholder="plan percent"  required  value="" id="">
                        </td>
                        <td><input type="text" name="duration" placeholder="duration in days" required value="" id=""></td>
                        <td>
                            <input type="text" name="repeat" required value="" id="">
                        </td>
                        <td><input type="number" name="noofrepeat" placeholder="no of times it is to repeat" required value="" id=""></td>
                        <td> <select name="type" required id="">

                            <option value="landbanking">Land Banking Plan</option>
                            <option value="realestateplan">Real Estate Plan</option>
                            <option value="cryptoplans">Crypto Plan</option>
                            <option value="forexplans">Forex Plan</option>
                            <option value="stockplans">Stock plan</option>

                        </select> </td>
                        <td>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </td>

                    </tr>
                </form>
            </tr>
        </tbody>
    </table>
</div>
                </div>
            </div>
        </div>
    </div>
</section>
</div> --}}
    <!-- END DATA TABLE-->
@endsection
