import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header 
 * - logo
 * - Navigaion buttons
 * Body
 * - Search
 * - Card Container (for restaurants)
 *   - Restaurant cards
 *     - Image
 *     - Name
 *     - Rating
 *     - Cuisine
 *     - Delivery time
 * Footer
 * - Copyrights
 * - Links
 * - Address 
 * - contact info
 */

const Header = () => {
  return (
      <div className="header">
        <div className="logo">
        <img className="logo" src="https://img.freepik.com/free-vector/food-delivery-man-riding-motorcycles-cartoon-art-illustration_56104-610.jpg?w=1800&t=st=1714230361~exp=1714230961~hmac=e0fce15b499fa8134dfd386a4020664a75019b7940343d88da421b0e7ef9f38f"/>
        </div>
        <div className="navbtn">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  )
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,} = resData?.info;
  const {deliveryTime} = resData?.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#BACD92" }}>
      <div>
        <img className="resImg" src={cloudinaryImageId} alt="Restaurant Image" />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} Min</h5>
    </div>
  );
};


const resList = [
  {
    "info": {
      "id": "71579",
      "name": "Hotel Inayat Cafe",
      "cloudinaryImageId": "jvuhbo6nvyt8tsiwkll6",
      "locality": "Suchita Nagar \n",
      "areaName": "Indira Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "71579",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "99377",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:50:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hotel-inayat-cafe-suchita-nagar-indira-nagar-nashik-71579",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "328616",
      "name": "Veg Aroma",
      "cloudinaryImageId": "mghlzwgwfafedadkvuhm",
      "locality": "Shanti Nagar",
      "areaName": "Bhujbal Farm",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Biryani",
        "Maharashtrian"
      ],
      "avgRating": 4.1,
      "veg": true,
      "feeDetails": {
        "restaurantId": "328616",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "11595",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/veg-aroma-shanti-nagar-bhujbal-farm-nashik-328616",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "145611",
      "name": "Kokni Darbar",
      "cloudinaryImageId": "rfcfoudtda1n7qqgbi4c",
      "locality": "Damodar Road",
      "areaName": "Doodhbazaar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani",
        "Seafood"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "145611",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "119732",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kokni-darbar-damodar-road-doodhbazaar-nashik-145611",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "185815",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "evsze5ak02ppslbapusr",
      "locality": "Sharanpur Road",
      "areaName": "Sharanpur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "185815",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "4925",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "19 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-08 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-road-sharanpur-nashik-185815",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "185801",
      "name": "Faasos - Wraps & Rolls",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Sharanpur Road",
      "areaName": "Sharanpur",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "North Indian",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "185801",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "21809",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-08 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-road-sharanpur-nashik-185801",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "181040",
      "name": "Sadhana Chulivarchi Misal",
      "cloudinaryImageId": "dmqnvtoyx7j66dhzdhh7",
      "locality": "Sadhu Waswani Road",
      "areaName": "Rajiv Gandhi Bhawan",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Maharashtrian",
        "Fast Food"
      ],
      "avgRating": 4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "181040",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "174256",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 15:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sadhana-chulivarchi-misal-sadhu-waswani-road-rajiv-gandhi-bhawan-nashik-181040",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "190535",
      "name": "Bagga Sweets",
      "cloudinaryImageId": "xwtt102lwlpl8nvtjjxq",
      "locality": "Mohan Nagar",
      "areaName": "Singada Talao",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Sweets",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "190535",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "39616",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 21:10:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bagga-sweets-mohan-nagar-singada-talao-nashik-190535",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "104757",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "Shivaji Nagar",
      "areaName": "Upnagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "104757",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "630",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 22:45:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-shivaji-nagar-upnagar-nashik-104757",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "235624",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "Collage Road \n",
      "areaName": "College Road",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "235624",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "547",
      "avgRatingString": "3.9",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "21 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-08 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-collage-road-college-road-nashik-235624",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "103667",
      "name": "Gupta G",
      "cloudinaryImageId": "qm0chpkn17wifqzibayk",
      "locality": "Pinnacle Mall\n",
      "areaName": "Gadkari Chowk",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Biryani",
        "Maharashtrian",
        "Beverages",
        "Pizzas",
        "Fast Food"
      ],
      "avgRating": 3.8,
      "veg": true,
      "feeDetails": {
        "restaurantId": "103667",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "91704",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 16:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gupta-g-pinnacle-mall-gadkari-chowk-nashik-103667",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "174465",
      "name": "Mayur Lunch Home",
      "cloudinaryImageId": "eel5uvix0usjkhh4ybbq",
      "locality": "Raviwar Peth",
      "areaName": "Ashok Stambh",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Desserts"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "174465",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "133981",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mayur-lunch-home-raviwar-peth-ashok-stambh-nashik-174465",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "69679",
      "name": "Udupi Tadka'S Gokul",
      "cloudinaryImageId": "vnzk4u45y387bpzjdm7n",
      "locality": "Shri Hari Kute Marg",
      "areaName": "Bombay Naka",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Biryani",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "69679",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "219064",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 22:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/udupi-tadkas-gokul-shri-hari-kute-marg-bombay-naka-nashik-69679",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "71010",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Shivaji Nagar",
      "areaName": "Pathardi Phata",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "71010",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "721",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-08 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-shivaji-nagar-pathardi-phata-nashik-71010",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "444011",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "hccqln3kaptyyazgjbrx",
      "locality": "BYK College",
      "areaName": "Krishi Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.8,
      "feeDetails": {
        "restaurantId": "444011",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "4961",
      "avgRatingString": "3.8",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-byk-college-krishi-nagar-nashik-444011",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "248756",
      "name": "Luscious Layers",
      "cloudinaryImageId": "yeyodjnwamhveva9anyz",
      "locality": "Dsouza Colony",
      "areaName": "College Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pastas",
        "Chinese",
        "Pizzas",
        "Mexican",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "248756",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "126890",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/luscious-layers-dsouza-colony-college-road-nashik-248756",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "347938",
      "name": "Greenfields Krishna",
      "cloudinaryImageId": "f8kbwe575njqgm3opesf",
      "areaName": "Deepali Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Pizzas",
        "Snacks",
        "Biryani",
        "Juices",
        "Pastas"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "347938",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "90470",
      "avgRatingString": "3.9",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/greenfields-krishna-deepali-nagar-nashik-347938",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "249711",
      "name": "Vijus Dabeli",
      "cloudinaryImageId": "q8v652ig71jslbmfs90c",
      "locality": "Thatte Wadi Road",
      "areaName": "College Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 3.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "249711",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "223371",
      "avgRatingString": "3.7",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/vijus-dabeli-thatte-wadi-road-college-road-nashik-249711",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "68938",
      "name": "Campus Choice",
      "cloudinaryImageId": "rrasdidblyglozoumzwy",
      "locality": "Unity Arcade",
      "areaName": "College Road",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Fast Food",
        "Pizzas",
        "Beverages",
        "Desserts",
        "Burgers"
      ],
      "avgRating": 3.8,
      "veg": true,
      "feeDetails": {
        "restaurantId": "68938",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "5387",
      "avgRatingString": "3.8",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 22:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/campus-choice-unity-arcade-college-road-nashik-68938",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "185813",
      "name": "The Good Bowl",
      "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
      "locality": "Sharanpur Road",
      "areaName": "Sharanpur",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "185813",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 1900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 1900
      },
      "parentId": "7918",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-08 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-good-bowl-road-sharanpur-nashik-185813",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "88667",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "nsradzgefubdccpfwop6",
      "locality": "Gangapur Road",
      "areaName": "College Road",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "88667",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 2400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 2400
      },
      "parentId": "2093",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-07 23:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountCalloutInfo": {
          "message": "Free Delivery",
          "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/natural-ice-cream-gangapur-road-college-road-nashik-88667",
      "type": "WEBLINK"
    }
  }
] 

const Body = () =>{
  return(
    <div className="body">
      <div className="searchbar">Search</div>
      <div className="rest-container">
        {
          resList.map((restaurant)=> (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
        }
      </div>
    </div>
  )
}
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
