import React, { useEffect } from 'react';

const SEO = ({ 
  title = "Valley Green Public School | Best Primary School in Gwalior (Nursery to 5th)",
  description = "Valley Green Public School (VGPS) is the top primary school in Gwalior offering quality education from Nursery to Class 5th. Modern smart classrooms, safe campus, and holistic child development.",
  keywords = "Valley Green Public School, VGPS Gwalior, best primary school near me, best school in Gwalior, nursery to class 5 school in Gwalior, primary school admission Gwalior, top school near me",
  canonical = "https://valleygreenpublicschool.com",
  ogType = "website",
  ogImage = "https://valleygreenpublicschool.com/founders.png"
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    // Update OG Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (!ogImg) {
      ogImg = document.createElement('meta');
      ogImg.setAttribute('property', 'og:image');
      document.head.appendChild(ogImg);
    }
    ogImg.content = ogImage;

    // Update Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

  }, [title, description, keywords, canonical, ogType, ogImage]);

  return null;
};

export default SEO;
