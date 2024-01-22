// convert this to typescript
export interface Config {
  title? : string;
  businessName: string;
  shortBusinessName?: string;
  longBusinessName?: string;
  currencyList: Currency[];
  languageList: Language[];
  social: Social;
  paymentOptions: PaymentOptions;
  footerLinks: FooterLink[];
  headerLinks: HeaderLink[];
  filters: Filter[];
}

export interface Currency {
  value: string;
  label: string;
}

export interface Language {
  value: string;
  label: string;
}

export interface Social {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

export interface PaymentOptions {
  visa: boolean;
  mastercard: boolean;
  amex: boolean;
}

export interface FooterLink {
  subTitle: string;
  links: Link[];
}

export interface Link {
  text: string;
  link: string;
}

export interface HeaderLink {
  menuLabel: string;
  menuLink: string;
  category: Category[] | null;
}

export interface Category {
  categoryLabel: string;
  submenu: Submenu[];
}

export interface Submenu {
  menuLabel: string;
  menuLink: string;
}


export interface Filter {
  category: string;
  items: Item[];
}

export interface Item {
  name: string;
  value: boolean;
}

export const businessConfig: Config = {
  businessName: "Molino Navarenas",
  shortBusinessName: "M. Navarenas",
  longBusinessName: "Molino Navarenas",
  "currencyList": [
    {
      "value": "AUS",
      "label": "Australia (AUS $)"
    },
    {
      "value": "CAD",
      "label": "Canada (CAD $)"
    },
    {
      "value": "USD",
      "label": "United States (US $)"
    },
    {
      "value": "EUR",
      "label": "Germany (EUR €)"
    },
    {
      "value": "HKD",
      "label": "Hong Kong (HKD $)"
    }
  ],
  "languageList": [
    {
      "value": "english",
      "label": "English"
    },
    {
      "value": "german",
      "label": "Deutsch"
    },
    {
      "value": "mandarin",
      "label": "普通话"
    }
  ],
  "social": {
    "facebook": "https://www.facebook.com/MatterDesign/",
    "instagram": "https://www.instagram.com/p/CVwMlChIWmW",
    "twitter": "https://twitter.com/hellomatter",
    "youtube": "https://www.youtube.com/channel/UCEOu94Haa--QmltsSawflXg"
  },
  "paymentOptions": {
    "visa": true,
    "mastercard": true,
    "amex": true
  },
  "footerLinks": [
    {
      "subTitle": "Info",
      "links": [
        {
          "text": "About Us",
          "link": "/about"
        },
        {
          "text": "Journal",
          "link": "/blog"
        },
        {
          "text": "Privacy Policy",
          "link": "/support#policy"
        }
      ]
    },
    {
      "subTitle": "Support",
      "links": [
        {
          "text": "FAQ",
          "link": "/faq"
        },
        {
          "text": "Contact Us",
          "link": "/support#contact"
        },
        {
          "text": "Shipping & Returns",
          "link": "/support#returns"
        },
        {
          "text": "How to use this theme",
          "link": "/how-to-use"
        }
      ]
    }
  ],
  "headerLinks": [
    {
      "menuLabel": "gallery",
      "menuLink": "/gallery",
      "category": null
    },
    {
      "menuLabel": "services",
      "menuLink": "/services",
      "category": null
    },
    {
      "menuLabel": "contact",
      "menuLink": "/about",
      "category": null
    }
  ],
  "filters": [
    {
      "category": "colour",
      "items": [
        {
          "name": "Black",
          "value": true
        },
        {
          "name": "Green",
          "value": false
        },
        {
          "name": "Dark Blue",
          "value": false
        },
        {
          "name": "Blue",
          "value": true
        },
        {
          "name": "Grey",
          "value": false
        },
        {
          "name": "Red",
          "value": false
        }
      ]
    },
    {
      "category": "size",
      "items": [
        {
          "name": "XXS",
          "value": false
        },
        {
          "name": "XS",
          "value": false
        },
        {
          "name": "S",
          "value": false
        },
        {
          "name": "M",
          "value": false
        },
        {
          "name": "L",
          "value": false
        },
        {
          "name": "XL",
          "value": false
        },
        {
          "name": "XXL",
          "value": false
        },
        {
          "name": "Onesize",
          "value": false
        }
      ]
    },
    {
      "category": "gender",
      "items": [
        {
          "name": "Male",
          "value": false
        },
        {
          "name": "Female",
          "value": false
        },
        {
          "name": "Unisex",
          "value": false
        }
      ]
    }
  ]
}
