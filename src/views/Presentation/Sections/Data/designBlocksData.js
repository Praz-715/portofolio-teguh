/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";


import imgJSC from "@/assets/img/myproject/jsc.png";
import imgJNE from "@/assets/img/myproject/jne.png";
import imgASKRINDO from "@/assets/img/myproject/askrindo.png";
import imgBSS from "@/assets/img/myproject/bss.png";
import imgBPKD from "@/assets/img/myproject/bpkd.png";
import imgBRI from "@/assets/img/myproject/bri.png";

export default [
  {
    heading: "My Oracle Project",
    description:
      "All my projects related to Oracle software",
    items: [
      {
        image: imgJSC,
        title: "Jakarta Smart City",
        subtitle: "Maintenance Oracle Database 2022 - 2024",
        projectId: "JSC",
        route: "myproject",
        pro: false
      },
      {
        image: imgJNE,
        title: "JNE",
        subtitle: "Data Center Relocation",
        projectId: "JNE",
        route: "myproject",
        pro: false
      },
      {
        image: imgASKRINDO,
        title: "Asuransi Kredit Indonesia",
        subtitle: "Corrective and Preventive Maintanance Nov 2023 -  Nov 2024",
        projectId: "ASKRINDO",
        route: "myproject",
        pro: false
      },
      {
        image: imgBSS,
        title: "Bank Sahabat Sampoerna",
        subtitle: "Upgrade Database version 11g to 19c",
        projectId: "BSS",
        route: "myproject",
        pro: false
      },
      {
        image: imgBPKD,
        title: "BPKD DKI Jakarta",
        subtitle: "Corrective and Preventive Maintanance Nov 2023 -  Nov 2024",
        projectId: "BPKD",
        route: "myproject",
        pro: true
      },
      // {
      //   image: imgTestimonials,
      //   title: "Testimonials",
      //   subtitle: "11 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: imgTeam,
      //   title: "Teams",
      //   subtitle: "6 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: imgStat,
      //   title: "Stats",
      //   subtitle: "3 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: `${imagesPrefix}/call-to-action.jpg`,
      //   title: "Call to Actions",
      //   subtitle: "8 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: `${imagesPrefix}/projects.jpg`,
      //   title: "Applications",
      //   subtitle: "6 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: `${imagesPrefix}/logo-area.jpg`,
      //   title: "Logo Areas",
      //   subtitle: "4 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: `${imagesPrefix}/footers.jpg`,
      //   title: "Footers",
      //   subtitle: "10 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: `${imagesPrefix}/general-cards.jpg`,
      //   title: "General Cards",
      //   subtitle: "9 Examples",
      //   route: "presentation",
      //   pro: true
      // },
      // {
      //   image: imgContent,
      //   title: "Content Sections",
      //   subtitle: "8 Examples",
      //   route: "presentation",
      //   pro: true
      // }
    ]
  },
  {
    heading: "My Data Project",
    description: "All projects related to data, including: data engineering, data visualization, data analysis",
    items: [
      {
        image: imgBRI,
        title: "BRI",
        subtitle: "Anti Money Laundry",
        route: "navigation-navbars",
        pro: false
      },
      // {
      //   image: `${imagesPrefix}/nav-tabs.jpg`,
      //   title: "Nav Tabs",
      //   subtitle: "2 Nav Tabs",
      //   route: "navigation-navtabs",
      //   pro: false
      // },
      // {
      //   image: imgPagination,
      //   title: "Pagination",
      //   subtitle: "3 Examples",
      //   route: "navigation-pagination",
      //   pro: false
      // }
    ]
  },
  // {
  //   heading: "Developing",
  //   description:
  //     "All my projects related to development",
  //   items: [
  //     {
  //       image: `${imagesPrefix}/newsletters.jpg`,
  //       title: "Newsletters",
  //       subtitle: "6 Examples",
  //       route: "presentation",
  //       pro: true
  //     },
  //     {
  //       image: `${imagesPrefix}/contact-sections.jpg`,
  //       title: "Contact Sections",
  //       subtitle: "8 Examples",
  //       route: "presentation",
  //       pro: true
  //     },
  //     {
  //       image: `${imagesPrefix}/forms.jpg`,
  //       title: "Forms",
  //       subtitle: "3 Examples",
  //       route: "inputareas-forms",
  //       pro: false
  //     },
  //     {
  //       image: `${imagesPrefix}/inputs.jpg`,
  //       title: "Inputs",
  //       subtitle: "6 Examples",
  //       route: "inputareas-inputs",
  //       pro: false
  //     }
  //   ]
  // }
];
