import React from 'react';
import { NavLink } from "react-router-dom";

function Terms () {
    // Scrolls to the top of the page
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    return(
        <div className='terms-page'>
            <h1>Secret Family Recipes Cookbook Terms of Service</h1><br />
            <p>Please read these terms carefully before using Secret Family Recipes Cookbook.</p><br />
            <h3>Conditions of Use</h3><br />
            <p>We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.</p><br />
            <h3>Privacy Policy</h3><br />
            <p>Before you continue using our website we advise you to read our <NavLink to="/policy" onClick={scrollToTop}>privacy policy</NavLink> regarding our user data collection. It will help you better understand our practices.</p><br />
            <h3>Copyright</h3><br />
            <p>Content published on this website (digital downloads, images, texts, graphics, logos) is the property of Secret Family Recipes Cookbook and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of Secret Family Recipes Cookbook, with copyright authorship for this compilation by Secret Family Recipes Cookbook.</p><br />
            <h3>Communications</h3><br />
            <p>The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.</p><br />
            <h3>Applicable Law</h3><br />
            <p>By visiting this website, you agree that the laws of [your location], without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Secret Family Recipes Cookbook and you, or its business partners and associates.</p><br />
            <h3>Disputes</h3><br />
            <p>Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court and you consent to exclusive jurisdiction and venue of such courts.</p><br />
            <h3>Comments, Reviews, and Emails</h3><br />
            <p>Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaign, and commercial solicitation.</p><br />
            <p>We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Secret Family Recipes Cookbook non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.</p><br />
            <h3>License and Site Access</h3><br />
            <p>We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.</p><br />
            <h3>User Account</h3><br />
            <p>If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.</p><br />
            <p>We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.</p><br />
        </div>
    )
};

export default Terms;