webpackJsonp(["component---src-pages-otkit-typography-js"],{"../OTKit/otkit-typography-desktop/token.common.js":function(e,t,a){"use strict";e.exports={headingXlargeFontSize:"48px",subtextXsmallFontSize:"14px",headingXlargeLineHeight:"48px",lineHeightMedium:"24px",headingLargeFontSize:"24px",subtextXsmallLineHeight:"20px",fontFamily:"'BrandonText', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",fontSizeMedium:"18px",headingLargeLineHeight:"32px",subheadingSmallFontWeight:"500",subtextXsmallFontWeightAlternate:"normal",headingLargeFontWeightAlternate:"normal",headingMediumFontWeight:"500",fontWeightMedium:"500",fontSizeLarge:"24px",lineHeightLarge:"32px",subheadingSmallFontSize:"16px",subheadingSmallLineHeight:"24px",lineHeightXlarge:"48px",fontSizeXlarge:"48px",bodytextSmallFontWeight:"normal",headingMediumFontSize:"18px",headingMediumLineHeight:"24px",headingXlargeFontWeight:"bold",subtextXsmallFontWeight:"500",fontSizeSmall:"16px",headingLargeFontWeight:"bold",lineHeightSmall:"24px",bodytextSmallFontSize:"16px",fontWeightBold:"bold",fontFamilyBrand:"BrandonText",lineHeightXsmall:"20px",bodytextSmallLineHeight:"24px",fontSizeXsmall:"14px",fontWeightNormal:"normal"}},"./node_modules/babel-loader/lib/index.js??ref--0-0!./src/pages/otkit-typography.js":function(e,t,a){"use strict";t.__esModule=!0;var n=d(a("./node_modules/react/index.js")),l=d(a("./node_modules/lodash/lodash.js")),i=d(a("./src/components/section-header/index.js")),o=d(a("../OTKit/otkit-typography-desktop/token.common.js")),s=d(a("./src/styles/otkit-typography-desktop.module.css"));function d(e){return e&&e.__esModule?e:{default:e}}var m=[{name:"heading-xlarge",isAlternate:!1},{name:"heading-large",isAlternate:!1},{name:"heading-large",isAlternate:!0},{name:"heading-medium",isAlternate:!1},{name:"subheading-small",isAlternate:!1},{name:"bodytext-small",isAlternate:!1},{name:"subtext-xsmall",isAlternate:!1},{name:"subtext-xsmall",isAlternate:!0}];t.default=function(){var e=m.map(function(e,t){var a=o.default[l.default.camelCase(e.name+"-font-size")],i=o.default[l.default.camelCase(e.name+"-font-weight"+(e.isAlternate?"-alternate":""))],d=o.default[l.default.camelCase(e.name+"-line-height")],m=e.name+(e.isAlternate?"-alternate":""),g={fontSize:a,fontWeight:i,lineHeight:d};return n.default.createElement("div",{className:s.default["font-item"],style:g,key:t},m," | font-size: ",a," | font-weight: ",i," | line-height: ",d)});return n.default.createElement("section",null,n.default.createElement(i.default,{text:"Typography – Desktop"}),n.default.createElement("div",{className:s.default["font-column"]},e))}},"./src/styles/otkit-typography-desktop.module.css":function(e,t){}});
//# sourceMappingURL=component---src-pages-otkit-typography-js-f338299668a0ced6e6b0.js.map