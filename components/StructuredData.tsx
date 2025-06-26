"use client";

import Script from 'next/script';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Linglow Academy",
    "alternateName": "Linglow",
    "url": "https://linglow.pl",
    "logo": "https://linglow.pl/logolinglow.svg",
    "description": "Linglow Academy oferuje indywidualne lekcje angielskiego online dostosowane do potrzeb każdego ucznia. Nauka bez stresu, z pasją i widocznymi efektami.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PL",
      "addressLocality": "Polska"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "lidia@lidiasobisz.pl",
      "availableLanguage": ["Polish", "English"]
    },
    "sameAs": [
      "https://instagram.com/linglowacademy",
      "https://linkedin.com/in/lidiasobisz"
    ],
    "founder": {
      "@type": "Person",
      "name": "Lidia Sobisz",
      "jobTitle": "English Teacher & Founder",
      "email": "lidia@lidiasobisz.pl"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Indywidualne Lekcje Angielskiego Online",
    "description": "Personalizowane lekcje angielskiego online prowadzone przez doświadczonego nauczyciela. Dostosowane do Twoich potrzeb i tempa nauki.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Linglow Academy"
    },
    "areaServed": "PL",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://linglow.pl"
    },
    "category": "Language Education",
    "serviceType": "Online English Tutoring",
    "audience": {
      "@type": "Audience",
      "audienceType": "Students learning English"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Lidia Sobisz",
    "jobTitle": "English Teacher",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Linglow Academy"
    },
    "email": "lidia@lidiasobisz.pl",
    "url": "https://linglow.pl",
    "sameAs": [
      "https://linkedin.com/in/lidiasobisz",
      "https://instagram.com/linglowacademy"
    ],
    "knowsAbout": [
      "English Language Teaching",
      "Online Education",
      "Language Learning",
      "TESOL",
      "Cambridge English"
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
