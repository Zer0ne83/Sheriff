export const pSels=['#edit-display-name','#edit-first-name','#edit-last-name','#edit-email','#edit-phone','#edit-birthday','#edit-pin','div.profile-gender>div>select','div.profile-pronouns>div>select','#edit-custom-pronouns1','#edit-main-address-street1','#edit-main-address-city','#edit-main-address-country','#edit-main-address-state','#edit-main-address-postcode','#edit-emergency-address-contact-name','#edit-emergency-address-phone'];
export const iabKeys:any[]=['dname','fname','lname','email','phone','dob','pin','gender','pronoun','custompn','street','city','country','state','pcode','ename','ephone'];
export const pKeys:any[]=['photo','dname','fname','lname','email','phone','dob','pin','gender','pronoun','custompn','street','city','country','state','pcode','ename','ephone'];
export const dbTypes:any={
  dp_uuk:'string',
  photo:'string',
  dname:'string',
  fname:'string',
  lname:'string',
  email:'string',
  phone:'number',
  dob:'string',
  pin:'number',
  gender:'number',
  pronoun:'number',
  custompn:'string',
  street:'string',
  city:'string',
  country:'number',
  state:'number',
  pcode:'number',
  ename:'string',
  ephone:'number',
  last_sync:'number',
  last_modified:'number'
}
export const pTypes:any[]=['string','string','string','string','number','string','number','number','number','string','string','string','number','number','number','string','number'];
export const savePTypes:any[]=['string','string','string','string','number','string','number','number','number','string','string','string','number','number','number','string','number'];
export const profileScrapeCode:string=`(()=>{
  const pLoop=setInterval(()=>{
    const dnameEle=$("#edit-display-name");
    const fnameEle=$("#edit-first-name");
    const lnameEle=$("#edit-last-name");
    const emailEle=$("#edit-email");
    const phoneEle=$("#edit-phone");
    const bdayEle=$("#edit-birthday");
    const kpinEle=$("#edit-pin");
    const genderEle=$("div.profile-gender>div>select");
    const pronounEle=$("div.profile-pronouns>div>select");
    const custompnEle=$("#edit-custom-pronouns1");
    const streetEle=$("#edit-main-address-street1");
    const cityEle=$("#edit-main-address-city");
    const countryEle=$("#edit-main-address-country");
    const stateEle=$("#edit-main-address-state");
    const pcodeEle=$("#edit-main-address-postcode");
    const enameEle=$("#edit-emergency-address-contact-name");
    const ephoneEle=$("#edit-emergency-address-phone");
    if($(dnameEle).length&&$(fnameEle).length&&$(lnameEle).length&&$(emailEle).length&&$(phoneEle).length&&$(bdayEle).length&&$(kpinEle).length&&$(genderEle).length&&$(pronounEle).length&&$(custompnEle).length&&$(streetEle).length&&$(cityEle).length&&$(countryEle).length&&$(stateEle).length&&$(pcodeEle).length&&$(enameEle).length&&$(ephoneEle).length){
      clearInterval(pLoop);
      setTimeout(()=>{
        var dname=$(dnameEle).attr("value");if(dname===null||dname===undefined||dname===""){dname="null"};
        var fname=$(fnameEle).attr("value");if(fname===null||fname===undefined||fname===""){fname="null"};
        var lname=$(lnameEle).attr("value");if(lname===null||lname===undefined||lname===""){lname="null"};
        var email=$(emailEle).attr("value");if(email===null||email===undefined||email===""){email="null"};
        var phone=$(phoneEle).attr("value");if(phone===null||phone===undefined||phone===""){phone="null"};
        var bday=$(bdayEle).attr("value");if(bday===null||bday===undefined||bday===""){bday="null"};
        var kpin=$(kpinEle).attr("value");if(kpin===null||kpin===undefined||kpin===""){kpin="null"};
        var gender=$(genderEle).attr("value");if(gender===null||gender===undefined||gender===""){gender="null"};
        var pronoun=$(pronounEle).attr("value");if(pronoun===null||pronoun===undefined||pronoun===""){pronoun="null"};
        var custompn=$(custompnEle).attr("value");if(custompn===null||custompn===undefined||custompn===""){custompn="null"};
        var street=$(streetEle).attr("value");if(street===null||street===undefined||street===""){street="null"};
        var city=$(cityEle).attr("value");if(city===null||city===undefined||city===""){city="null"};
        var country=$(countryEle).attr("value");if(country===null||country===undefined||country===""){country="null"};
        var state=$(stateEle).attr("value");if(state===null||state===undefined||state===""){state="null"};
        var pcode=$(pcodeEle).attr("value");if(pcode===null||pcode===undefined||pcode===""){pcode="null"};
        var ename=$(enameEle).attr("value");if(ename===null||ename===undefined||ename===""){ename="null"};
        var ephone=$(ephoneEle).attr("value");if(ephone===null||ephone===undefined||ephone===""){ephone="null"};
        window.location.href="sheriff="+dname+"|"+fname+"|"+lname+"|"+email+"|"+phone+"|"+bday+"|"+kpin+"|"+gender+"|"+pronoun+"|"+custompn+"|"+street+"|"+city+"|"+country+"|"+state+"|"+pcode+"|"+ename+"|"+ephone
      },500)
    }
  },250)
})();`;
export const c2DCObj:any={
  "Aruba": "+297",
  "Afghanistan": "+93",
  "Angola": "+244",
  "Anguilla": "+1264",
  "Åland Islands": "+35818",
  "Albania": "+355",
  "Andorra": "+376",
  "United Arab Emirates": "+971",
  "Argentina": "+54",
  "Armenia": "+374",
  "American Samoa": "+1684",
  "Antarctica": "",
  "French Southern and Antarctic Lands": "+262",
  "Antigua and Barbuda": "+1268",
  "Australia": "+61",
  "Austria": "+43",
  "Azerbaijan": "+994",
  "Burundi": "+257",
  "Belgium": "+32",
  "Benin": "+229",
  "Burkina Faso": "+226",
  "Bangladesh": "+880",
  "Bulgaria": "+359",
  "Bahrain": "+973",
  "Bahamas": "+1242",
  "Bosnia and Herzegovina": "+387",
  "Saint Barthélemy": "+590",
  "Saint Helena, Ascension and Tristan da Cunha": "+290,47",
  "Belarus": "+375",
  "Belize": "+501",
  "Bermuda": "+1441",
  "Bolivia": "+591",
  "Caribbean Netherlands": "+599",
  "Brazil": "+55",
  "Barbados": "+1246",
  "Brunei": "+673",
  "Bhutan": "+975",
  "Bouvet Island": "+47",
  "Botswana": "+267",
  "Central African Republic": "+236",
  "Canada": "+1",
  "Cocos (Keeling) Islands": "+61",
  "Switzerland": "+41",
  "Chile": "+56",
  "China": "+86",
  "Ivory Coast": "+225",
  "Cameroon": "+237",
  "DR Congo": "+243",
  "Republic of the Congo": "+242",
  "Cook Islands": "+682",
  "Colombia": "+57",
  "Comoros": "+269",
  "Cape Verde": "+238",
  "Costa Rica": "+506",
  "Cuba": "+53",
  "Curaçao": "+599",
  "Christmas Island": "+61",
  "Cayman Islands": "+1345",
  "Cyprus": "+357",
  "Czechia": "+420",
  "Germany": "+49",
  "Djibouti": "+253",
  "Dominica": "+1767",
  "Denmark": "+45",
  "Dominican Republic": "+1809,829,849",
  "Algeria": "+213",
  "Ecuador": "+593",
  "Egypt": "+20",
  "Eritrea": "+291",
  "Western Sahara": "+2125288,125289",
  "Spain": "+34",
  "Estonia": "+372",
  "Ethiopia": "+251",
  "Finland": "+358",
  "Fiji": "+679",
  "Falkland Islands": "+500",
  "France": "+33",
  "Faroe Islands": "+298",
  "Micronesia": "+691",
  "Gabon": "+241",
  "United Kingdom": "+44",
  "Georgia": "+995",
  "Guernsey": "+44",
  "Ghana": "+233",
  "Gibraltar": "+350",
  "Guinea": "+224",
  "Guadeloupe": "+590",
  "Gambia": "+220",
  "Guinea-Bissau": "+245",
  "Equatorial Guinea": "+240",
  "Greece": "+30",
  "Grenada": "+1473",
  "Greenland": "+299",
  "Guatemala": "+502",
  "French Guiana": "+594",
  "Guam": "+1671",
  "Guyana": "+592",
  "Hong Kong": "+852",
  "Heard Island and McDonald Islands": "",
  "Honduras": "+504",
  "Croatia": "+385",
  "Haiti": "+509",
  "Hungary": "+36",
  "Indonesia": "+62",
  "Isle of Man": "+44",
  "India": "+91",
  "British Indian Ocean Territory": "+246",
  "Ireland": "+353",
  "Iran": "+98",
  "Iraq": "+964",
  "Iceland": "+354",
  "Israel": "+972",
  "Italy": "+39",
  "Jamaica": "+1876",
  "Jersey": "+44",
  "Jordan": "+962",
  "Japan": "+81",
  "Kazakhstan": "+76,7",
  "Kenya": "+254",
  "Kyrgyzstan": "+996",
  "Cambodia": "+855",
  "Kiribati": "+686",
  "Saint Kitts and Nevis": "+1869",
  "South Korea": "+82",
  "Kosovo": "+383",
  "Kuwait": "+965",
  "Laos": "+856",
  "Lebanon": "+961",
  "Liberia": "+231",
  "Libya": "+218",
  "Saint Lucia": "+1758",
  "Liechtenstein": "+423",
  "Sri Lanka": "+94",
  "Lesotho": "+266",
  "Lithuania": "+370",
  "Luxembourg": "+352",
  "Latvia": "+371",
  "Macau": "+853",
  "Saint Martin": "+590",
  "Morocco": "+212",
  "Monaco": "+377",
  "Moldova": "+373",
  "Madagascar": "+261",
  "Maldives": "+960",
  "Mexico": "+52",
  "Marshall Islands": "+692",
  "North Macedonia": "+389",
  "Mali": "+223",
  "Malta": "+356",
  "Myanmar": "+95",
  "Montenegro": "+382",
  "Mongolia": "+976",
  "Northern Mariana Islands": "+1670",
  "Mozambique": "+258",
  "Mauritania": "+222",
  "Montserrat": "+1664",
  "Martinique": "+596",
  "Mauritius": "+230",
  "Malawi": "+265",
  "Malaysia": "+60",
  "Mayotte": "+262",
  "Namibia": "+264",
  "New Caledonia": "+687",
  "Niger": "+227",
  "Norfolk Island": "+672",
  "Nigeria": "+234",
  "Nicaragua": "+505",
  "Niue": "+683",
  "Netherlands": "+31",
  "Norway": "+47",
  "Nepal": "+977",
  "Nauru": "+674",
  "New Zealand": "+64",
  "Oman": "+968",
  "Pakistan": "+92",
  "Panama": "+507",
  "Pitcairn Islands": "+64",
  "Peru": "+51",
  "Philippines": "+63",
  "Palau": "+680",
  "Papua New Guinea": "+675",
  "Poland": "+48",
  "Puerto Rico": "+1787,939",
  "North Korea": "+850",
  "Portugal": "+351",
  "Paraguay": "+595",
  "Palestine": "+970",
  "French Polynesia": "+689",
  "Qatar": "+974",
  "Réunion": "+262",
  "Romania": "+40",
  "Russia": "+73,4,5,8,9",
  "Rwanda": "+250",
  "Saudi Arabia": "+966",
  "Sudan": "+249",
  "Senegal": "+221",
  "Singapore": "+65",
  "South Georgia": "+500",
  "Svalbard and Jan Mayen": "+4779",
  "Solomon Islands": "+677",
  "Sierra Leone": "+232",
  "El Salvador": "+503",
  "San Marino": "+378",
  "Somalia": "+252",
  "Saint Pierre and Miquelon": "+508",
  "Serbia": "+381",
  "South Sudan": "+211",
  "São Tomé and Príncipe": "+239",
  "Suriname": "+597",
  "Slovakia": "+421",
  "Slovenia": "+386",
  "Sweden": "+46",
  "Eswatini": "+268",
  "Sint Maarten": "+1721",
  "Seychelles": "+248",
  "Syria": "+963",
  "Turks and Caicos Islands": "+1649",
  "Chad": "+235",
  "Togo": "+228",
  "Thailand": "+66",
  "Tajikistan": "+992",
  "Tokelau": "+690",
  "Turkmenistan": "+993",
  "Timor-Leste": "+670",
  "Tonga": "+676",
  "Trinidad and Tobago": "+1868",
  "Tunisia": "+216",
  "Turkey": "+90",
  "Tuvalu": "+688",
  "Taiwan": "+886",
  "Tanzania": "+255",
  "Uganda": "+256",
  "Ukraine": "+380",
  "United States Minor Outlying Islands": "+268",
  "Uruguay": "+598",
  "United States": "+1201,202,203,205,206,207,208,209,210,212,213,214,215,216,217,218,219,220,224,225,227,228,229,231,234,239,240,248,251,252,253,254,256,260,262,267,269,270,272,274,276,281,283,301,302,303,304,305,307,308,309,310,312,313,314,315,316,317,318,319,320,321,323,325,327,330,331,334,336,337,339,346,347,351,352,360,361,364,380,385,386,401,402,404,405,406,407,408,409,410,412,413,414,415,417,419,423,424,425,430,432,434,435,440,442,443,447,458,463,464,469,470,475,478,479,480,484,501,502,503,504,505,507,508,509,510,512,513,515,516,517,518,520,530,531,534,539,540,541,551,559,561,562,563,564,567,570,571,573,574,575,580,585,586,601,602,603,605,606,607,608,609,610,612,614,615,616,617,618,619,620,623,626,628,629,630,631,636,641,646,650,651,657,660,661,662,667,669,678,681,682,701,702,703,704,706,707,708,712,713,714,715,716,717,718,719,720,724,725,727,730,731,732,734,737,740,743,747,754,757,760,762,763,765,769,770,772,773,774,775,779,781,785,786,801,802,803,804,805,806,808,810,812,813,814,815,816,817,818,828,830,831,832,843,845,847,848,850,854,856,857,858,859,860,862,863,864,865,870,872,878,901,903,904,906,907,908,909,910,912,913,914,915,916,917,918,919,920,925,928,929,930,931,934,936,937,938,940,941,947,949,951,952,954,956,959,970,971,972,973,975,978,979,980,984,985,989",
  "Uzbekistan": "+998",
  "Vatican City": "+3906698,79",
  "Saint Vincent and the Grenadines": "+1784",
  "Venezuela": "+58",
  "British Virgin Islands": "+1284",
  "United States Virgin Islands": "+1340",
  "Vietnam": "+84",
  "Vanuatu": "+678",
  "Wallis and Futuna": "+681",
  "Samoa": "+685",
  "Yemen": "+967",
  "South Africa": "+27",
  "Zambia": "+260",
  "Zimbabwe": "+263"
}
/* uglified */
/* window.env = {
  FUNCTION_LOG_DISABLED: true
};
(function($) {
  "use strict";
  var loadImage = function loadImage(file, callback, options) {
      var img = document.createElement("img"), url, oUrl;
      img.onerror = callback;
      img.onload = function() {
          if (oUrl && !(options && options.noRevoke)) {
              loadImage.revokeObjectURL(oUrl)
          }
          if (callback) {
              callback(loadImage.scale(img, options))
          }
      }
      ;
      if (loadImage.isInstanceOf("Blob", file) || loadImage.isInstanceOf("File", file)) {
          url = oUrl = loadImage.createObjectURL(file);
          img._type = file.type
      } else if (typeof file === "string") {
          url = file;
          if (options && options.crossOrigin) {
              img.crossOrigin = options.crossOrigin
          }
      } else {
          return false
      }
      if (url) {
          img.src = url;
          return img
      }
      return loadImage.readFile(file, function(e) {
          var target = e.target;
          if (target && target.result) {
              img.src = target.result
          } else {
              if (callback) {
                  callback(e)
              }
          }
      })
  }
    , urlAPI = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
  loadImage.isInstanceOf = function(type, obj) {
      return Object.prototype.toString.call(obj) === "[object " + type + "]"
  }
  ;
  loadImage.transformCoordinates = function() {
      return
  }
  ;
  loadImage.getTransformedOptions = function(img, options) {
      var aspectRatio = options.aspectRatio, newOptions, i, width, height;
      if (!aspectRatio) {
          return options
      }
      newOptions = {};
      for (i in options) {
          if (options.hasOwnProperty(i)) {
              newOptions[i] = options[i]
          }
      }
      newOptions.crop = true;
      width = img.naturalWidth || img.width;
      height = img.naturalHeight || img.height;
      if (width / height > aspectRatio) {
          newOptions.maxWidth = height * aspectRatio;
          newOptions.maxHeight = height
      } else {
          newOptions.maxWidth = width;
          newOptions.maxHeight = width / aspectRatio
      }
      return newOptions
  }
  ;
  loadImage.renderImageToCanvas = function(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight) {
      canvas.getContext("2d").drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
      return canvas
  }
  ;
  loadImage.hasCanvasOption = function(options) {
      return options.canvas || options.crop || options.aspectRatio
  }
  ;
  loadImage.scale = function(img, options) {
      options = options || {};
      var canvas = document.createElement("canvas"), useCanvas = img.getContext || loadImage.hasCanvasOption(options) && canvas.getContext, width = img.naturalWidth || img.width, height = img.naturalHeight || img.height, destWidth = width, destHeight = height, maxWidth, maxHeight, minWidth, minHeight, sourceWidth, sourceHeight, sourceX, sourceY, tmp, scaleUp = function scaleUp() {
          var scale = Math.max((minWidth || destWidth) / destWidth, (minHeight || destHeight) / destHeight);
          if (scale > 1) {
              destWidth = destWidth * scale;
              destHeight = destHeight * scale
          }
      }, scaleDown = function scaleDown() {
          var scale = Math.min((maxWidth || destWidth) / destWidth, (maxHeight || destHeight) / destHeight);
          if (scale < 1) {
              destWidth = destWidth * scale;
              destHeight = destHeight * scale
          }
      };
      if (useCanvas) {
          options = loadImage.getTransformedOptions(img, options);
          sourceX = options.left || 0;
          sourceY = options.top || 0;
          if (options.sourceWidth) {
              sourceWidth = options.sourceWidth;
              if (options.right !== undefined && options.left === undefined) {
                  sourceX = width - sourceWidth - options.right
              }
          } else {
              sourceWidth = width - sourceX - (options.right || 0)
          }
          if (options.sourceHeight) {
              sourceHeight = options.sourceHeight;
              if (options.bottom !== undefined && options.top === undefined) {
                  sourceY = height - sourceHeight - options.bottom
              }
          } else {
              sourceHeight = height - sourceY - (options.bottom || 0)
          }
          destWidth = sourceWidth;
          destHeight = sourceHeight
      }
      maxWidth = options.maxWidth;
      maxHeight = options.maxHeight;
      minWidth = options.minWidth;
      minHeight = options.minHeight;
      if (useCanvas && maxWidth && maxHeight && options.crop) {
          destWidth = maxWidth;
          destHeight = maxHeight;
          tmp = sourceWidth / sourceHeight - maxWidth / maxHeight;
          if (tmp < 0) {
              sourceHeight = maxHeight * sourceWidth / maxWidth;
              if (options.top === undefined && options.bottom === undefined) {
                  sourceY = (height - sourceHeight) / 2
              }
          } else if (tmp > 0) {
              sourceWidth = maxWidth * sourceHeight / maxHeight;
              if (options.left === undefined && options.right === undefined) {
                  sourceX = (width - sourceWidth) / 2
              }
          }
      } else {
          if (options.contain || options.cover) {
              minWidth = maxWidth = maxWidth || minWidth;
              minHeight = maxHeight = maxHeight || minHeight
          }
          if (options.cover) {
              scaleDown();
              scaleUp()
          } else {
              scaleUp();
              scaleDown()
          }
      }
      if (useCanvas) {
          canvas.width = destWidth;
          canvas.height = destHeight;
          loadImage.transformCoordinates(canvas, options);
          return loadImage.renderImageToCanvas(canvas, img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight)
      }
      img.width = destWidth;
      img.height = destHeight;
      return img
  }
  ;
  loadImage.createObjectURL = function(file) {
      return urlAPI ? urlAPI.createObjectURL(file) : false
  }
  ;
  loadImage.revokeObjectURL = function(url) {
      return urlAPI ? urlAPI.revokeObjectURL(url) : false
  }
  ;
  loadImage.readFile = function(file, callback, method) {
      if (window.FileReader) {
          var fileReader = new FileReader;
          fileReader.onload = fileReader.onerror = callback;
          method = method || "readAsDataURL";
          if (fileReader[method]) {
              fileReader[method](file);
              return fileReader
          }
      }
      return false
  }
  ;
  if (typeof define === "function" && define.amd) {
      define(function() {
          return loadImage
      })
  } else {
      $.loadImage = loadImage
  }
}
)(this);
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
      define(["load-image"], factory)
  } else {
      factory(window.loadImage)
  }
}
)(function(loadImage) {
  "use strict";
  var hasblobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
  loadImage.blobSlice = hasblobSlice && function() {
      var slice = this.slice || this.webkitSlice || this.mozSlice;
      return slice.apply(this, arguments)
  }
  ;
  loadImage.metaDataParsers = {
      jpeg: {
          65505: []
      }
  };
  loadImage.parseMetaData = function(file, callback, options) {
      options = options || {};
      var that = this
        , maxMetaDataSize = options.maxMetaDataSize || 262144
        , data = {}
        , noMetaData = !(window.DataView && file && file.size >= 12 && file.type === "image/jpeg" && loadImage.blobSlice);
      if (noMetaData || !loadImage.readFile(loadImage.blobSlice.call(file, 0, maxMetaDataSize), function(e) {
          if (e.target.error) {
              console.log(e.target.error);
              callback(data);
              return
          }
          var buffer = e.target.result, dataView = new DataView(buffer), offset = 2, maxOffset = dataView.byteLength - 4, headLength = offset, markerBytes, markerLength, parsers, i;
          if (dataView.getUint16(0) === 65496) {
              while (offset < maxOffset) {
                  markerBytes = dataView.getUint16(offset);
                  if (markerBytes >= 65504 && markerBytes <= 65519 || markerBytes === 65534) {
                      markerLength = dataView.getUint16(offset + 2) + 2;
                      if (offset + markerLength > dataView.byteLength) {
                          console.log("Invalid meta data: Invalid segment size.");
                          break
                      }
                      parsers = loadImage.metaDataParsers.jpeg[markerBytes];
                      if (parsers) {
                          for (i = 0; i < parsers.length; i += 1) {
                              parsers[i].call(that, dataView, offset, markerLength, data, options)
                          }
                      }
                      offset += markerLength;
                      headLength = offset
                  } else {
                      break
                  }
              }
              if (!options.disableImageHead && headLength > 6) {
                  if (buffer.slice) {
                      data.imageHead = buffer.slice(0, headLength)
                  } else {
                      data.imageHead = new Uint8Array(buffer).subarray(0, headLength)
                  }
              }
          } else {
              console.log("Invalid JPEG file: Missing JPEG marker.")
          }
          callback(data)
      }, "readAsArrayBuffer")) {
          callback(data)
      }
  }
});
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
      define(["jquery", "jquery.ui.widget"], factory)
  } else {
      factory(window.jQuery)
  }
}
)(function($) {
  "use strict";
  $.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))" + "|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)" + "|(w(eb)?OSBrowser)|(webOS)" + "|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || $('<input type="file">').prop("disabled"));
  $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
  $.support.xhrFormDataFileUpload = !!window.FormData;
  $.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
  $.widget("blueimp.fileupload", {
      options: {
          dropZone: $(document),
          pasteZone: $(document),
          fileInput: undefined,
          replaceFileInput: true,
          paramName: undefined,
          singleFileUploads: true,
          limitMultiFileUploads: undefined,
          limitMultiFileUploadSize: undefined,
          limitMultiFileUploadSizeOverhead: 512,
          sequentialUploads: false,
          limitConcurrentUploads: undefined,
          forceIframeTransport: false,
          redirect: undefined,
          redirectParamName: undefined,
          postMessage: undefined,
          multipart: true,
          maxChunkSize: undefined,
          uploadedBytes: undefined,
          recalculateProgress: true,
          progressInterval: 100,
          bitrateInterval: 500,
          autoUpload: true,
          messages: {
              uploadedBytes: "Uploaded bytes exceed file size"
          },
          i18n: function i18n(message, context) {
              message = this.messages[message] || message.toString();
              if (context) {
                  $.each(context, function(key, value) {
                      message = message.replace("{" + key + "}", value)
                  })
              }
              return message
          },
          formData: function formData(form) {
              return form.serializeArray()
          },
          add: function add(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              if (data.autoUpload || data.autoUpload !== false && $(this).fileupload("option", "autoUpload")) {
                  data.process().done(function() {
                      data.submit()
                  })
              }
          },
          processData: false,
          contentType: false,
          cache: false
      },
      _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
      _blobSlice: $.support.blobSlice && function() {
          var slice = this.slice || this.webkitSlice || this.mozSlice;
          return slice.apply(this, arguments)
      }
      ,
      _BitrateTimer: function _BitrateTimer() {
          this.timestamp = Date.now ? Date.now() : (new Date).getTime();
          this.loaded = 0;
          this.bitrate = 0;
          this.getBitrate = function(now, loaded, interval) {
              var timeDiff = now - this.timestamp;
              if (!this.bitrate || !interval || timeDiff > interval) {
                  this.bitrate = (loaded - this.loaded) * (1e3 / timeDiff) * 8;
                  this.loaded = loaded;
                  this.timestamp = now
              }
              return this.bitrate
          }
      },
      _isXHRUpload: function _isXHRUpload(options) {
          return !options.forceIframeTransport && (!options.multipart && $.support.xhrFileUpload || $.support.xhrFormDataFileUpload)
      },
      _getFormData: function _getFormData(options) {
          var formData;
          if ($.type(options.formData) === "function") {
              return options.formData(options.form)
          }
          if ($.isArray(options.formData)) {
              return options.formData
          }
          if ($.type(options.formData) === "object") {
              formData = [];
              $.each(options.formData, function(name, value) {
                  formData.push({
                      name: name,
                      value: value
                  })
              });
              return formData
          }
          return []
      },
      _getTotal: function _getTotal(files) {
          var total = 0;
          $.each(files, function(index, file) {
              total += file.size || 1
          });
          return total
      },
      _initProgressObject: function _initProgressObject(obj) {
          var progress = {
              loaded: 0,
              total: 0,
              bitrate: 0
          };
          if (obj._progress) {
              $.extend(obj._progress, progress)
          } else {
              obj._progress = progress
          }
      },
      _initResponseObject: function _initResponseObject(obj) {
          var prop;
          if (obj._response) {
              for (prop in obj._response) {
                  if (obj._response.hasOwnProperty(prop)) {
                      delete obj._response[prop]
                  }
              }
          } else {
              obj._response = {}
          }
      },
      _onProgress: function _onProgress(e, data) {
          if (e.lengthComputable) {
              var now = Date.now ? Date.now() : (new Date).getTime(), loaded;
              if (data._time && data.progressInterval && now - data._time < data.progressInterval && e.loaded !== e.total) {
                  return
              }
              data._time = now;
              loaded = Math.floor(e.loaded / e.total * (data.chunkSize || data._progress.total)) + (data.uploadedBytes || 0);
              this._progress.loaded += loaded - data._progress.loaded;
              this._progress.bitrate = this._bitrateTimer.getBitrate(now, this._progress.loaded, data.bitrateInterval);
              data._progress.loaded = data.loaded = loaded;
              data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(now, loaded, data.bitrateInterval);
              this._trigger("progress", $.Event("progress", {
                  delegatedEvent: e
              }), data);
              this._trigger("progressall", $.Event("progressall", {
                  delegatedEvent: e
              }), this._progress)
          }
      },
      _initProgressListener: function _initProgressListener(options) {
          var that = this
            , xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
          if (xhr.upload) {
              $(xhr.upload).bind("progress", function(e) {
                  var oe = e.originalEvent;
                  e.lengthComputable = oe.lengthComputable;
                  e.loaded = oe.loaded;
                  e.total = oe.total;
                  that._onProgress(e, options)
              });
              options.xhr = function() {
                  return xhr
              }
          }
      },
      _isInstanceOf: function _isInstanceOf(type, obj) {
          return Object.prototype.toString.call(obj) === "[object " + type + "]"
      },
      _initXHRData: function _initXHRData(options) {
          var that = this, formData, file = options.files[0], multipart = options.multipart || !$.support.xhrFileUpload, paramName = $.type(options.paramName) === "array" ? options.paramName[0] : options.paramName;
          options.headers = $.extend({}, options.headers);
          if (options.contentRange) {
              options.headers["Content-Range"] = options.contentRange
          }
          if (!multipart || options.blob || !this._isInstanceOf("File", file)) {
              options.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(file.name) + '"'
          }
          if (!multipart) {
              options.contentType = file.type || "application/octet-stream";
              options.data = options.blob || file
          } else if ($.support.xhrFormDataFileUpload) {
              if (options.postMessage) {
                  formData = this._getFormData(options);
                  if (options.blob) {
                      formData.push({
                          name: paramName,
                          value: options.blob
                      })
                  } else {
                      $.each(options.files, function(index, file) {
                          formData.push({
                              name: $.type(options.paramName) === "array" && options.paramName[index] || paramName,
                              value: file
                          })
                      })
                  }
              } else {
                  if (that._isInstanceOf("FormData", options.formData)) {
                      formData = options.formData
                  } else {
                      formData = new FormData;
                      $.each(this._getFormData(options), function(index, field) {
                          formData.append(field.name, field.value)
                      })
                  }
                  if (options.blob) {
                      formData.append(paramName, options.blob, file.name)
                  } else {
                      $.each(options.files, function(index, file) {
                          if (that._isInstanceOf("File", file) || that._isInstanceOf("Blob", file)) {
                              formData.append($.type(options.paramName) === "array" && options.paramName[index] || paramName, file, file.uploadName || file.name)
                          }
                      })
                  }
              }
              options.data = formData
          }
          options.blob = null
      },
      _initIframeSettings: function _initIframeSettings(options) {
          var targetHost = $("<a></a>").prop("href", options.url).prop("host");
          options.dataType = "iframe " + (options.dataType || "");
          options.formData = this._getFormData(options);
          if (options.redirect && targetHost && targetHost !== location.host) {
              options.formData.push({
                  name: options.redirectParamName || "redirect",
                  value: options.redirect
              })
          }
      },
      _initDataSettings: function _initDataSettings(options) {
          if (this._isXHRUpload(options)) {
              if (!this._chunkedUpload(options, true)) {
                  if (!options.data) {
                      this._initXHRData(options)
                  }
                  this._initProgressListener(options)
              }
              if (options.postMessage) {
                  options.dataType = "postmessage " + (options.dataType || "")
              }
          } else {
              this._initIframeSettings(options)
          }
      },
      _getParamName: function _getParamName(options) {
          var fileInput = $(options.fileInput)
            , paramName = options.paramName;
          if (!paramName) {
              paramName = [];
              fileInput.each(function() {
                  var input = $(this)
                    , name = input.prop("name") || "files[]"
                    , i = (input.prop("files") || [1]).length;
                  while (i) {
                      paramName.push(name);
                      i -= 1
                  }
              });
              if (!paramName.length) {
                  paramName = [fileInput.prop("name") || "files[]"]
              }
          } else if (!$.isArray(paramName)) {
              paramName = [paramName]
          }
          return paramName
      },
      _initFormSettings: function _initFormSettings(options) {
          if (!options.form || !options.form.length) {
              options.form = $(options.fileInput.prop("form"));
              if (!options.form.length) {
                  options.form = $(this.options.fileInput.prop("form"))
              }
          }
          options.paramName = this._getParamName(options);
          if (!options.url) {
              options.url = options.form.prop("action") || location.href
          }
          options.type = (options.type || $.type(options.form.prop("method")) === "string" && options.form.prop("method") || "").toUpperCase();
          if (options.type !== "POST" && options.type !== "PUT" && options.type !== "PATCH") {
              options.type = "POST"
          }
          if (!options.formAcceptCharset) {
              options.formAcceptCharset = options.form.attr("accept-charset")
          }
      },
      _getAJAXSettings: function _getAJAXSettings(data) {
          var options = $.extend({}, this.options, data);
          this._initFormSettings(options);
          this._initDataSettings(options);
          return options
      },
      _getDeferredState: function _getDeferredState(deferred) {
          if (deferred.state) {
              return deferred.state()
          }
          if (deferred.isResolved()) {
              return "resolved"
          }
          if (deferred.isRejected()) {
              return "rejected"
          }
          return "pending"
      },
      _enhancePromise: function _enhancePromise(promise) {
          promise.success = promise.done;
          promise.error = promise.fail;
          promise.complete = promise.always;
          return promise
      },
      _getXHRPromise: function _getXHRPromise(resolveOrReject, context, args) {
          var dfd = $.Deferred()
            , promise = dfd.promise();
          context = context || this.options.context || promise;
          if (resolveOrReject === true) {
              dfd.resolveWith(context, args)
          } else if (resolveOrReject === false) {
              dfd.rejectWith(context, args)
          }
          promise.abort = dfd.promise;
          return this._enhancePromise(promise)
      },
      _addConvenienceMethods: function _addConvenienceMethods(e, data) {
          var that = this
            , getPromise = function getPromise(args) {
              return $.Deferred().resolveWith(that, args).promise()
          };
          data.process = function(resolveFunc, rejectFunc) {
              if (resolveFunc || rejectFunc) {
                  data._processQueue = this._processQueue = (this._processQueue || getPromise([this])).pipe(function() {
                      if (data.errorThrown) {
                          return $.Deferred().rejectWith(that, [data]).promise()
                      }
                      return getPromise(arguments)
                  }).pipe(resolveFunc, rejectFunc)
              }
              return this._processQueue || getPromise([this])
          }
          ;
          data.submit = function() {
              if (this.state() !== "pending") {
                  data.jqXHR = this.jqXHR = that._trigger("submit", $.Event("submit", {
                      delegatedEvent: e
                  }), this) !== false && that._onSend(e, this)
              }
              return this.jqXHR || that._getXHRPromise()
          }
          ;
          data.abort = function() {
              if (this.jqXHR) {
                  return this.jqXHR.abort()
              }
              this.errorThrown = "abort";
              that._trigger("fail", null, this);
              return that._getXHRPromise(false)
          }
          ;
          data.state = function() {
              if (this.jqXHR) {
                  return that._getDeferredState(this.jqXHR)
              }
              if (this._processQueue) {
                  return that._getDeferredState(this._processQueue)
              }
          }
          ;
          data.processing = function() {
              return !this.jqXHR && this._processQueue && that._getDeferredState(this._processQueue) === "pending"
          }
          ;
          data.progress = function() {
              return this._progress
          }
          ;
          data.response = function() {
              return this._response
          }
      },
      _getUploadedBytes: function _getUploadedBytes(jqXHR) {
          var range = jqXHR.getResponseHeader("Range")
            , parts = range && range.split("-")
            , upperBytesPos = parts && parts.length > 1 && parseInt(parts[1], 10);
          return upperBytesPos && upperBytesPos + 1
      },
      _chunkedUpload: function _chunkedUpload(options, testOnly) {
          options.uploadedBytes = options.uploadedBytes || 0;
          var that = this, file = options.files[0], fs = file.size, ub = options.uploadedBytes, mcs = options.maxChunkSize || fs, slice = this._blobSlice, dfd = $.Deferred(), promise = dfd.promise(), jqXHR, _upload;
          if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) || options.data) {
              return false
          }
          if (testOnly) {
              return true
          }
          if (ub >= fs) {
              file.error = options.i18n("uploadedBytes");
              return this._getXHRPromise(false, options.context, [null, "error", file.error])
          }
          _upload = function upload() {
              var o = $.extend({}, options)
                , currentLoaded = o._progress.loaded;
              o.blob = slice.call(file, ub, ub + mcs, file.type);
              o.chunkSize = o.blob.size;
              o.contentRange = "bytes " + ub + "-" + (ub + o.chunkSize - 1) + "/" + fs;
              that._initXHRData(o);
              that._initProgressListener(o);
              jqXHR = (that._trigger("chunksend", null, o) !== false && $.ajax(o) || that._getXHRPromise(false, o.context)).done(function(result, textStatus, jqXHR) {
                  ub = that._getUploadedBytes(jqXHR) || ub + o.chunkSize;
                  if (currentLoaded + o.chunkSize - o._progress.loaded) {
                      that._onProgress($.Event("progress", {
                          lengthComputable: true,
                          loaded: ub - o.uploadedBytes,
                          total: ub - o.uploadedBytes
                      }), o)
                  }
                  options.uploadedBytes = o.uploadedBytes = ub;
                  o.result = result;
                  o.textStatus = textStatus;
                  o.jqXHR = jqXHR;
                  that._trigger("chunkdone", null, o);
                  that._trigger("chunkalways", null, o);
                  if (ub < fs) {
                      _upload()
                  } else {
                      dfd.resolveWith(o.context, [result, textStatus, jqXHR])
                  }
              }).fail(function(jqXHR, textStatus, errorThrown) {
                  o.jqXHR = jqXHR;
                  o.textStatus = textStatus;
                  o.errorThrown = errorThrown;
                  that._trigger("chunkfail", null, o);
                  that._trigger("chunkalways", null, o);
                  dfd.rejectWith(o.context, [jqXHR, textStatus, errorThrown])
              })
          }
          ;
          this._enhancePromise(promise);
          promise.abort = function() {
              return jqXHR.abort()
          }
          ;
          _upload();
          return promise
      },
      _beforeSend: function _beforeSend(e, data) {
          if (this._active === 0) {
              this._trigger("start");
              this._bitrateTimer = new this._BitrateTimer;
              this._progress.loaded = this._progress.total = 0;
              this._progress.bitrate = 0
          }
          this._initResponseObject(data);
          this._initProgressObject(data);
          data._progress.loaded = data.loaded = data.uploadedBytes || 0;
          data._progress.total = data.total = this._getTotal(data.files) || 1;
          data._progress.bitrate = data.bitrate = 0;
          this._active += 1;
          this._progress.loaded += data.loaded;
          this._progress.total += data.total
      },
      _onDone: function _onDone(result, textStatus, jqXHR, options) {
          var total = options._progress.total
            , response = options._response;
          if (options._progress.loaded < total) {
              this._onProgress($.Event("progress", {
                  lengthComputable: true,
                  loaded: total,
                  total: total
              }), options)
          }
          response.result = options.result = result;
          response.textStatus = options.textStatus = textStatus;
          response.jqXHR = options.jqXHR = jqXHR;
          this._trigger("done", null, options)
      },
      _onFail: function _onFail(jqXHR, textStatus, errorThrown, options) {
          var response = options._response;
          if (options.recalculateProgress) {
              this._progress.loaded -= options._progress.loaded;
              this._progress.total -= options._progress.total
          }
          response.jqXHR = options.jqXHR = jqXHR;
          response.textStatus = options.textStatus = textStatus;
          response.errorThrown = options.errorThrown = errorThrown;
          this._trigger("fail", null, options)
      },
      _onAlways: function _onAlways(jqXHRorResult, textStatus, jqXHRorError, options) {
          this._trigger("always", null, options)
      },
      _onSend: function _onSend(e, data) {
          if (!data.submit) {
              this._addConvenienceMethods(e, data)
          }
          var that = this, jqXHR, aborted, slot, pipe, options = that._getAJAXSettings(data), send = function send() {
              that._sending += 1;
              options._bitrateTimer = new that._BitrateTimer;
              jqXHR = jqXHR || ((aborted || that._trigger("send", $.Event("send", {
                  delegatedEvent: e
              }), options) === false) && that._getXHRPromise(false, options.context, aborted) || that._chunkedUpload(options) || $.ajax(options)).done(function(result, textStatus, jqXHR) {
                  that._onDone(result, textStatus, jqXHR, options)
              }).fail(function(jqXHR, textStatus, errorThrown) {
                  that._onFail(jqXHR, textStatus, errorThrown, options)
              }).always(function(jqXHRorResult, textStatus, jqXHRorError) {
                  that._onAlways(jqXHRorResult, textStatus, jqXHRorError, options);
                  that._sending -= 1;
                  that._active -= 1;
                  if (options.limitConcurrentUploads && options.limitConcurrentUploads > that._sending) {
                      var nextSlot = that._slots.shift();
                      while (nextSlot) {
                          if (that._getDeferredState(nextSlot) === "pending") {
                              nextSlot.resolve();
                              break
                          }
                          nextSlot = that._slots.shift()
                      }
                  }
                  if (that._active === 0) {
                      that._trigger("stop")
                  }
              });
              return jqXHR
          };
          this._beforeSend(e, options);
          if (this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending) {
              if (this.options.limitConcurrentUploads > 1) {
                  slot = $.Deferred();
                  this._slots.push(slot);
                  pipe = slot.pipe(send)
              } else {
                  this._sequence = this._sequence.pipe(send, send);
                  pipe = this._sequence
              }
              pipe.abort = function() {
                  aborted = [undefined, "abort", "abort"];
                  if (!jqXHR) {
                      if (slot) {
                          slot.rejectWith(options.context, aborted)
                      }
                      return send()
                  }
                  return jqXHR.abort()
              }
              ;
              return this._enhancePromise(pipe)
          }
          return send()
      },
      _onAdd: function _onAdd(e, data) {
          var that = this, result = true, options = $.extend({}, this.options, data), files = data.files, filesLength = files.length, limit = options.limitMultiFileUploads, limitSize = options.limitMultiFileUploadSize, overhead = options.limitMultiFileUploadSizeOverhead, batchSize = 0, paramName = this._getParamName(options), paramNameSet, paramNameSlice, fileSet, i, j = 0;
          if (limitSize && (!filesLength || files[0].size === undefined)) {
              limitSize = undefined
          }
          if (!(options.singleFileUploads || limit || limitSize) || !this._isXHRUpload(options)) {
              fileSet = [files];
              paramNameSet = [paramName]
          } else if (!(options.singleFileUploads || limitSize) && limit) {
              fileSet = [];
              paramNameSet = [];
              for (i = 0; i < filesLength; i += limit) {
                  fileSet.push(files.slice(i, i + limit));
                  paramNameSlice = paramName.slice(i, i + limit);
                  if (!paramNameSlice.length) {
                      paramNameSlice = paramName
                  }
                  paramNameSet.push(paramNameSlice)
              }
          } else if (!options.singleFileUploads && limitSize) {
              fileSet = [];
              paramNameSet = [];
              for (i = 0; i < filesLength; i = i + 1) {
                  batchSize += files[i].size + overhead;
                  if (i + 1 === filesLength || batchSize + files[i + 1].size + overhead > limitSize || limit && i + 1 - j >= limit) {
                      fileSet.push(files.slice(j, i + 1));
                      paramNameSlice = paramName.slice(j, i + 1);
                      if (!paramNameSlice.length) {
                          paramNameSlice = paramName
                      }
                      paramNameSet.push(paramNameSlice);
                      j = i + 1;
                      batchSize = 0
                  }
              }
          } else {
              paramNameSet = paramName
          }
          data.originalFiles = files;
          $.each(fileSet || files, function(index, element) {
              var newData = $.extend({}, data);
              newData.files = fileSet ? element : [element];
              newData.paramName = paramNameSet[index];
              that._initResponseObject(newData);
              that._initProgressObject(newData);
              that._addConvenienceMethods(e, newData);
              result = that._trigger("add", $.Event("add", {
                  delegatedEvent: e
              }), newData);
              return result
          });
          return result
      },
      _replaceFileInput: function _replaceFileInput(input) {
          var inputClone = input.clone(true);
          $("<form></form>").append(inputClone)[0].reset();
          input.after(inputClone).detach();
          $.cleanData(input.unbind("remove"));
          this.options.fileInput = this.options.fileInput.map(function(i, el) {
              if (el === input[0]) {
                  return inputClone[0]
              }
              return el
          });
          if (input[0] === this.element[0]) {
              this.element = inputClone
          }
      },
      _handleFileTreeEntry: function _handleFileTreeEntry(entry, path) {
          var that = this, dfd = $.Deferred(), errorHandler = function errorHandler(e) {
              if (e && !e.entry) {
                  e.entry = entry
              }
              dfd.resolve([e])
          }, dirReader;
          path = path || "";
          if (entry.isFile) {
              if (entry._file) {
                  entry._file.relativePath = path;
                  dfd.resolve(entry._file)
              } else {
                  entry.file(function(file) {
                      file.relativePath = path;
                      dfd.resolve(file)
                  }, errorHandler)
              }
          } else if (entry.isDirectory) {
              dirReader = entry.createReader();
              dirReader.readEntries(function(entries) {
                  that._handleFileTreeEntries(entries, path + entry.name + "/").done(function(files) {
                      dfd.resolve(files)
                  }).fail(errorHandler)
              }, errorHandler)
          } else {
              dfd.resolve([])
          }
          return dfd.promise()
      },
      _handleFileTreeEntries: function _handleFileTreeEntries(entries, path) {
          var that = this;
          return $.when.apply($, $.map(entries, function(entry) {
              return that._handleFileTreeEntry(entry, path)
          })).pipe(function() {
              return Array.prototype.concat.apply([], arguments)
          })
      },
      _getDroppedFiles: function _getDroppedFiles(dataTransfer) {
          dataTransfer = dataTransfer || {};
          var items = dataTransfer.items;
          if (items && items.length && (items[0].webkitGetAsEntry || items[0].getAsEntry)) {
              return this._handleFileTreeEntries($.map(items, function(item) {
                  var entry;
                  if (item.webkitGetAsEntry) {
                      entry = item.webkitGetAsEntry();
                      if (entry) {
                          entry._file = item.getAsFile()
                      }
                      return entry
                  }
                  return item.getAsEntry()
              }))
          }
          return $.Deferred().resolve($.makeArray(dataTransfer.files)).promise()
      },
      _getSingleFileInputFiles: function _getSingleFileInputFiles(fileInput) {
          fileInput = $(fileInput);
          var entries = fileInput.prop("webkitEntries") || fileInput.prop("entries"), files, value;
          if (entries && entries.length) {
              return this._handleFileTreeEntries(entries)
          }
          files = $.makeArray(fileInput.prop("files"));
          if (!files.length) {
              value = fileInput.prop("value");
              if (!value) {
                  return $.Deferred().resolve([]).promise()
              }
              files = [{
                  name: value.replace(/^.*\\/, "")
              }]
          } else if (files[0].name === undefined && files[0].fileName) {
              $.each(files, function(index, file) {
                  file.name = file.fileName;
                  file.size = file.fileSize
              })
          }
          return $.Deferred().resolve(files).promise()
      },
      _getFileInputFiles: function _getFileInputFiles(fileInput) {
          if (!(fileInput instanceof $) || fileInput.length === 1) {
              return this._getSingleFileInputFiles(fileInput)
          }
          return $.when.apply($, $.map(fileInput, this._getSingleFileInputFiles)).pipe(function() {
              return Array.prototype.concat.apply([], arguments)
          })
      },
      _onChange: function _onChange(e) {
          var that = this
            , data = {
              fileInput: $(e.target),
              form: $(e.target.form)
          };
          this._getFileInputFiles(data.fileInput).always(function(files) {
              data.files = files;
              if (that.options.replaceFileInput) {
                  that._replaceFileInput(data.fileInput)
              }
              if (that._trigger("change", $.Event("change", {
                  delegatedEvent: e
              }), data) !== false) {
                  that._onAdd(e, data)
              }
          })
      },
      _onPaste: function _onPaste(e) {
          var items = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items
            , data = {
              files: []
          };
          if (items && items.length) {
              $.each(items, function(index, item) {
                  var file = item.getAsFile && item.getAsFile();
                  if (file) {
                      data.files.push(file)
                  }
              });
              if (this._trigger("paste", $.Event("paste", {
                  delegatedEvent: e
              }), data) !== false) {
                  this._onAdd(e, data)
              }
          }
      },
      _onDrop: function _onDrop(e) {
          e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
          var that = this
            , dataTransfer = e.dataTransfer
            , data = {};
          if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
              e.preventDefault();
              this._getDroppedFiles(dataTransfer).always(function(files) {
                  data.files = files;
                  if (that._trigger("drop", $.Event("drop", {
                      delegatedEvent: e
                  }), data) !== false) {
                      that._onAdd(e, data)
                  }
              })
          }
      },
      _onDragOver: function _onDragOver(e) {
          e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
          var dataTransfer = e.dataTransfer;
          if (dataTransfer && $.inArray("Files", dataTransfer.types) !== -1 && this._trigger("dragover", $.Event("dragover", {
              delegatedEvent: e
          })) !== false) {
              e.preventDefault();
              dataTransfer.dropEffect = "copy"
          }
      },
      _initEventHandlers: function _initEventHandlers() {
          if (this._isXHRUpload(this.options)) {
              this._on(this.options.dropZone, {
                  dragover: this._onDragOver,
                  drop: this._onDrop
              });
              this._on(this.options.pasteZone, {
                  paste: this._onPaste
              })
          }
          if ($.support.fileInput) {
              this._on(this.options.fileInput, {
                  change: this._onChange
              })
          }
      },
      _destroyEventHandlers: function _destroyEventHandlers() {
          this._off(this.options.dropZone, "dragover drop");
          this._off(this.options.pasteZone, "paste");
          this._off(this.options.fileInput, "change")
      },
      _setOption: function _setOption(key, value) {
          var reinit = $.inArray(key, this._specialOptions) !== -1;
          if (reinit) {
              this._destroyEventHandlers()
          }
          this._super(key, value);
          if (reinit) {
              this._initSpecialOptions();
              this._initEventHandlers()
          }
      },
      _initSpecialOptions: function _initSpecialOptions() {
          var options = this.options;
          if (options.fileInput === undefined) {
              options.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
          } else if (!(options.fileInput instanceof $)) {
              options.fileInput = $(options.fileInput)
          }
          if (!(options.dropZone instanceof $)) {
              options.dropZone = $(options.dropZone)
          }
          if (!(options.pasteZone instanceof $)) {
              options.pasteZone = $(options.pasteZone)
          }
      },
      _getRegExp: function _getRegExp(str) {
          var parts = str.split("/")
            , modifiers = parts.pop();
          parts.shift();
          return new RegExp(parts.join("/"),modifiers)
      },
      _isRegExpOption: function _isRegExpOption(key, value) {
          return key !== "url" && $.type(value) === "string" && /^\/.*\/[igm]{0,3}$/.test(value)
      },
      _initDataAttributes: function _initDataAttributes() {
          var that = this
            , options = this.options;
          $.each($(this.element[0].cloneNode(false)).data(), function(key, value) {
              if (that._isRegExpOption(key, value)) {
                  value = that._getRegExp(value)
              }
              options[key] = value
          })
      },
      _create: function _create() {
          this._initDataAttributes();
          this._initSpecialOptions();
          this._slots = [];
          this._sequence = this._getXHRPromise(true);
          this._sending = this._active = 0;
          this._initProgressObject(this);
          this._initEventHandlers()
      },
      active: function active() {
          return this._active
      },
      progress: function progress() {
          return this._progress
      },
      add: function add(data) {
          var that = this;
          if (!data || this.options.disabled) {
              return
          }
          if (data.fileInput && !data.files) {
              this._getFileInputFiles(data.fileInput).always(function(files) {
                  data.files = files;
                  that._onAdd(null, data)
              })
          } else {
              data.files = $.makeArray(data.files);
              this._onAdd(null, data)
          }
      },
      send: function send(data) {
          if (data && !this.options.disabled) {
              if (data.fileInput && !data.files) {
                  var that = this, dfd = $.Deferred(), promise = dfd.promise(), jqXHR, aborted;
                  promise.abort = function() {
                      aborted = true;
                      if (jqXHR) {
                          return jqXHR.abort()
                      }
                      dfd.reject(null, "abort", "abort");
                      return promise
                  }
                  ;
                  this._getFileInputFiles(data.fileInput).always(function(files) {
                      if (aborted) {
                          return
                      }
                      if (!files.length) {
                          dfd.reject();
                          return
                      }
                      data.files = files;
                      jqXHR = that._onSend(null, data).then(function(result, textStatus, jqXHR) {
                          dfd.resolve(result, textStatus, jqXHR)
                      }, function(jqXHR, textStatus, errorThrown) {
                          dfd.reject(jqXHR, textStatus, errorThrown)
                      })
                  });
                  return this._enhancePromise(promise)
              }
              data.files = $.makeArray(data.files);
              if (data.files.length) {
                  return this._onSend(null, data)
              }
          }
          return this._getXHRPromise(false, data && data.context)
      }
  })
});
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
      define(["jquery", "./jquery.fileupload"], factory)
  } else {
      factory(window.jQuery)
  }
}
)(function($) {
  "use strict";
  var originalAdd = $.blueimp.fileupload.prototype.options.add;
  $.widget("blueimp.fileupload", $.blueimp.fileupload, {
      options: {
          processQueue: [],
          add: function add(e, data) {
              var $this = $(this);
              data.process(function() {
                  return $this.fileupload("process", data)
              });
              originalAdd.call(this, e, data)
          }
      },
      processActions: {},
      _processFile: function _processFile(data, originalData) {
          var that = this
            , dfd = $.Deferred().resolveWith(that, [data])
            , chain = dfd.promise();
          this._trigger("process", null, data);
          $.each(data.processQueue, function(i, settings) {
              var func = function func(data) {
                  if (originalData.errorThrown) {
                      return $.Deferred().rejectWith(that, [originalData]).promise()
                  }
                  return that.processActions[settings.action].call(that, data, settings)
              };
              chain = chain.pipe(func, settings.always && func)
          });
          chain.done(function() {
              that._trigger("processdone", null, data);
              that._trigger("processalways", null, data)
          }).fail(function() {
              that._trigger("processfail", null, data);
              that._trigger("processalways", null, data)
          });
          return chain
      },
      _transformProcessQueue: function _transformProcessQueue(options) {
          var processQueue = [];
          $.each(options.processQueue, function() {
              var settings = {}
                , action = this.action
                , prefix = this.prefix === true ? action : this.prefix;
              $.each(this, function(key, value) {
                  if ($.type(value) === "string" && value.charAt(0) === "@") {
                      settings[key] = options[value.slice(1) || (prefix ? prefix + key.charAt(0).toUpperCase() + key.slice(1) : key)]
                  } else {
                      settings[key] = value
                  }
              });
              processQueue.push(settings)
          });
          options.processQueue = processQueue
      },
      processing: function processing() {
          return this._processing
      },
      process: function process(data) {
          var that = this
            , options = $.extend({}, this.options, data);
          if (options.processQueue && options.processQueue.length) {
              this._transformProcessQueue(options);
              if (this._processing === 0) {
                  this._trigger("processstart")
              }
              $.each(data.files, function(index) {
                  var opts = index ? $.extend({}, options) : options
                    , func = function func() {
                      if (data.errorThrown) {
                          return $.Deferred().rejectWith(that, [data]).promise()
                      }
                      return that._processFile(opts, data)
                  };
                  opts.index = index;
                  that._processing += 1;
                  that._processingQueue = that._processingQueue.pipe(func, func).always(function() {
                      that._processing -= 1;
                      if (that._processing === 0) {
                          that._trigger("processstop")
                      }
                  })
              })
          }
          return this._processingQueue
      },
      _create: function _create() {
          this._super();
          this._processing = 0;
          this._processingQueue = $.Deferred().resolveWith(this).promise()
      }
  })
});
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
      define(["jquery", "tmpl", "./jquery.fileupload-image", "./jquery.fileupload-audio", "./jquery.fileupload-video", "./jquery.fileupload-validate"], factory)
  } else {
      factory(window.jQuery, window.tmpl)
  }
}
)(function($, tmpl) {
  "use strict";
  $.blueimp.fileupload.prototype._specialOptions.push("filesContainer", "uploadTemplateId", "downloadTemplateId");
  $.widget("blueimp.fileupload", $.blueimp.fileupload, {
      options: {
          autoUpload: false,
          uploadTemplateId: "template-upload",
          downloadTemplateId: "template-download",
          filesContainer: undefined,
          prependFiles: false,
          dataType: "json",
          getNumberOfFiles: function getNumberOfFiles() {
              return this.filesContainer.children().not(".processing").length
          },
          getFilesFromResponse: function getFilesFromResponse(data) {
              if (data.result && $.isArray(data.result.files)) {
                  return data.result.files
              }
              return []
          },
          add: function add(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var $this = $(this)
                , that = $this.data("blueimp-fileupload") || $this.data("fileupload")
                , options = that.options;
              data.context = that._renderUpload(data.files).data("data", data).addClass("processing");
              options.filesContainer[options.prependFiles ? "prepend" : "append"](data.context);
              that._forceReflow(data.context);
              $.when(that._transition(data.context), data.process(function() {
                  return $this.fileupload("process", data)
              })).always(function() {
                  data.context.each(function(index) {
                      $(this).find(".size").text(that._formatFileSize(data.files[index].size))
                  }).removeClass("processing");
                  that._renderPreviews(data)
              }).done(function() {
                  data.context.find(".start").prop("disabled", false);
                  if (that._trigger("added", e, data) !== false && (options.autoUpload || data.autoUpload) && data.autoUpload !== false) {
                      data.submit()
                  }
              }).fail(function() {
                  if (data.files.error) {
                      data.context.each(function(index) {
                          var error = data.files[index].error;
                          if (error) {
                              $(this).find(".error").text(error)
                          }
                      })
                  }
              })
          },
          send: function send(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload");
              if (data.context && data.dataType && data.dataType.substr(0, 6) === "iframe") {
                  data.context.find(".progress").addClass(!$.support.transition && "progress-animated").attr("aria-valuenow", 100).children().first().css("width", "100%")
              }
              return that._trigger("sent", e, data)
          },
          done: function done(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload"), getFilesFromResponse = data.getFilesFromResponse || that.options.getFilesFromResponse, files = getFilesFromResponse(data), template, deferred;
              if (data.context) {
                  data.context.each(function(index) {
                      var file = files[index] || {
                          error: "Empty file upload result"
                      };
                      deferred = that._addFinishedDeferreds();
                      that._transition($(this)).done(function() {
                          var node = $(this);
                          template = that._renderDownload([file]).replaceAll(node);
                          that._forceReflow(template);
                          that._transition(template).done(function() {
                              data.context = $(this);
                              that._trigger("completed", e, data);
                              that._trigger("finished", e, data);
                              deferred.resolve()
                          })
                      })
                  })
              } else {
                  template = that._renderDownload(files)[that.options.prependFiles ? "prependTo" : "appendTo"](that.options.filesContainer);
                  that._forceReflow(template);
                  deferred = that._addFinishedDeferreds();
                  that._transition(template).done(function() {
                      data.context = $(this);
                      that._trigger("completed", e, data);
                      that._trigger("finished", e, data);
                      deferred.resolve()
                  })
              }
          },
          fail: function fail(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload"), template, deferred;
              if (data.context) {
                  data.context.each(function(index) {
                      if (data.errorThrown !== "abort") {
                          var file = data.files[index];
                          file.error = file.error || data.errorThrown || true;
                          deferred = that._addFinishedDeferreds();
                          that._transition($(this)).done(function() {
                              var node = $(this);
                              template = that._renderDownload([file]).replaceAll(node);
                              that._forceReflow(template);
                              that._transition(template).done(function() {
                                  data.context = $(this);
                                  that._trigger("failed", e, data);
                                  that._trigger("finished", e, data);
                                  deferred.resolve()
                              })
                          })
                      } else {
                          deferred = that._addFinishedDeferreds();
                          that._transition($(this)).done(function() {
                              $(this).remove();
                              that._trigger("failed", e, data);
                              that._trigger("finished", e, data);
                              deferred.resolve()
                          })
                      }
                  })
              } else if (data.errorThrown !== "abort") {
                  data.context = that._renderUpload(data.files)[that.options.prependFiles ? "prependTo" : "appendTo"](that.options.filesContainer).data("data", data);
                  that._forceReflow(data.context);
                  deferred = that._addFinishedDeferreds();
                  that._transition(data.context).done(function() {
                      data.context = $(this);
                      that._trigger("failed", e, data);
                      that._trigger("finished", e, data);
                      deferred.resolve()
                  })
              } else {
                  that._trigger("failed", e, data);
                  that._trigger("finished", e, data);
                  that._addFinishedDeferreds().resolve()
              }
          },
          progress: function progress(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var progress = Math.floor(data.loaded / data.total * 100);
              if (data.context) {
                  data.context.each(function() {
                      $(this).find(".progress").attr("aria-valuenow", progress).children().first().css("width", progress + "%")
                  })
              }
          },
          progressall: function progressall(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var $this = $(this)
                , progress = Math.floor(data.loaded / data.total * 100)
                , globalProgressNode = $this.find(".fileupload-progress")
                , extendedProgressNode = globalProgressNode.find(".progress-extended");
              if (extendedProgressNode.length) {
                  extendedProgressNode.html(($this.data("blueimp-fileupload") || $this.data("fileupload"))._renderExtendedProgress(data))
              }
              globalProgressNode.find(".progress").attr("aria-valuenow", progress).children().first().css("width", progress + "%")
          },
          start: function start(e) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload");
              that._resetFinishedDeferreds();
              that._transition($(this).find(".fileupload-progress")).done(function() {
                  that._trigger("started", e)
              })
          },
          stop: function stop(e) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload")
                , deferred = that._addFinishedDeferreds();
              $.when.apply($, that._getFinishedDeferreds()).done(function() {
                  that._trigger("stopped", e)
              });
              that._transition($(this).find(".fileupload-progress")).done(function() {
                  $(this).find(".progress").attr("aria-valuenow", "0").children().first().css("width", "0%");
                  $(this).find(".progress-extended").html("&nbsp;");
                  deferred.resolve()
              })
          },
          processstart: function processstart(e) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              $(this).addClass("fileupload-processing")
          },
          processstop: function processstop(e) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              $(this).removeClass("fileupload-processing")
          },
          destroy: function destroy(e, data) {
              if (e.isDefaultPrevented()) {
                  return false
              }
              var that = $(this).data("blueimp-fileupload") || $(this).data("fileupload")
                , removeNode = function removeNode() {
                  that._transition(data.context).done(function() {
                      $(this).remove();
                      that._trigger("destroyed", e, data)
                  })
              };
              if (data.url) {
                  data.dataType = data.dataType || that.options.dataType;
                  $.ajax(data).done(removeNode)
              } else {
                  removeNode()
              }
          }
      },
      _resetFinishedDeferreds: function _resetFinishedDeferreds() {
          this._finishedUploads = []
      },
      _addFinishedDeferreds: function _addFinishedDeferreds(deferred) {
          if (!deferred) {
              deferred = $.Deferred()
          }
          this._finishedUploads.push(deferred);
          return deferred
      },
      _getFinishedDeferreds: function _getFinishedDeferreds() {
          return this._finishedUploads
      },
      _enableDragToDesktop: function _enableDragToDesktop() {
          var link = $(this)
            , url = link.prop("href")
            , name = link.prop("download")
            , type = "application/octet-stream";
          link.bind("dragstart", function(e) {
              try {
                  e.originalEvent.dataTransfer.setData("DownloadURL", [type, name, url].join(":"))
              } catch (ignore) {}
          })
      },
      _formatFileSize: function _formatFileSize(bytes) {
          if (typeof bytes !== "number") {
              return ""
          }
          if (bytes >= 1e9) {
              return (bytes / 1e9).toFixed(2) + " GB"
          }
          if (bytes >= 1e6) {
              return (bytes / 1e6).toFixed(2) + " MB"
          }
          return (bytes / 1e3).toFixed(2) + " KB"
      },
      _formatBitrate: function _formatBitrate(bits) {
          if (typeof bits !== "number") {
              return ""
          }
          if (bits >= 1e9) {
              return (bits / 1e9).toFixed(2) + " Gbit/s"
          }
          if (bits >= 1e6) {
              return (bits / 1e6).toFixed(2) + " Mbit/s"
          }
          if (bits >= 1e3) {
              return (bits / 1e3).toFixed(2) + " kbit/s"
          }
          return bits.toFixed(2) + " bit/s"
      },
      _formatTime: function _formatTime(seconds) {
          var date = new Date(seconds * 1e3)
            , days = Math.floor(seconds / 86400);
          days = days ? days + "d " : "";
          return days + ("0" + date.getUTCHours()).slice(-2) + ":" + ("0" + date.getUTCMinutes()).slice(-2) + ":" + ("0" + date.getUTCSeconds()).slice(-2)
      },
      _formatPercentage: function _formatPercentage(floatValue) {
          return (floatValue * 100).toFixed(2) + " %"
      },
      _renderExtendedProgress: function _renderExtendedProgress(data) {
          return this._formatBitrate(data.bitrate) + " | " + this._formatTime((data.total - data.loaded) * 8 / data.bitrate) + " | " + this._formatPercentage(data.loaded / data.total) + " | " + this._formatFileSize(data.loaded) + " / " + this._formatFileSize(data.total)
      },
      _renderTemplate: function _renderTemplate(func, files) {
          if (!func) {
              return $()
          }
          var result = func({
              files: files,
              formatFileSize: this._formatFileSize,
              options: this.options
          });
          if (result instanceof $) {
              return result
          }
          return $(this.options.templatesContainer).html(result).children()
      },
      _renderPreviews: function _renderPreviews(data) {
          data.context.find(".preview").each(function(index, elm) {
              $(elm).append(data.files[index].preview)
          })
      },
      _renderUpload: function _renderUpload(files) {
          return this._renderTemplate(this.options.uploadTemplate, files)
      },
      _renderDownload: function _renderDownload(files) {
          return this._renderTemplate(this.options.downloadTemplate, files).find("a[download]").each(this._enableDragToDesktop).end()
      },
      _startHandler: function _startHandler(e) {
          e.preventDefault();
          var button = $(e.currentTarget)
            , template = button.closest(".template-upload")
            , data = template.data("data");
          button.prop("disabled", true);
          if (data && data.submit) {
              data.submit()
          }
      },
      _cancelHandler: function _cancelHandler(e) {
          e.preventDefault();
          var template = $(e.currentTarget).closest(".template-upload,.template-download")
            , data = template.data("data") || {};
          data.context = data.context || template;
          if (data.abort) {
              data.abort()
          } else {
              data.errorThrown = "abort";
              this._trigger("fail", e, data)
          }
      },
      _deleteHandler: function _deleteHandler(e) {
          e.preventDefault();
          var button = $(e.currentTarget);
          this._trigger("destroy", e, $.extend({
              context: button.closest(".template-download"),
              type: "DELETE"
          }, button.data()))
      },
      _forceReflow: function _forceReflow(node) {
          return $.support.transition && node.length && node[0].offsetWidth
      },
      _transition: function _transition(node) {
          var dfd = $.Deferred();
          if ($.support.transition && node.hasClass("fade") && node.is(":visible")) {
              node.bind($.support.transition.end, function(e) {
                  if (e.target === node[0]) {
                      node.unbind($.support.transition.end);
                      dfd.resolveWith(node)
                  }
              }).toggleClass("in")
          } else {
              node.toggleClass("in");
              dfd.resolveWith(node)
          }
          return dfd
      },
      _initButtonBarEventHandlers: function _initButtonBarEventHandlers() {
          var fileUploadButtonBar = this.element.find(".fileupload-buttonbar")
            , filesList = this.options.filesContainer;
          this._on(fileUploadButtonBar.find(".start"), {
              click: function click(e) {
                  e.preventDefault();
                  filesList.find(".start").click()
              }
          });
          this._on(fileUploadButtonBar.find(".cancel"), {
              click: function click(e) {
                  e.preventDefault();
                  filesList.find(".cancel").click()
              }
          });
          this._on(fileUploadButtonBar.find(".delete"), {
              click: function click(e) {
                  e.preventDefault();
                  filesList.find(".toggle:checked").closest(".template-download").find(".delete").click();
                  fileUploadButtonBar.find(".toggle").prop("checked", false)
              }
          });
          this._on(fileUploadButtonBar.find(".toggle"), {
              change: function change(e) {
                  filesList.find(".toggle").prop("checked", $(e.currentTarget).is(":checked"))
              }
          })
      },
      _destroyButtonBarEventHandlers: function _destroyButtonBarEventHandlers() {
          this._off(this.element.find(".fileupload-buttonbar").find(".start, .cancel, .delete"), "click");
          this._off(this.element.find(".fileupload-buttonbar .toggle"), "change.")
      },
      _initEventHandlers: function _initEventHandlers() {
          this._super();
          this._on(this.options.filesContainer, {
              "click .start": this._startHandler,
              "click .cancel": this._cancelHandler,
              "click .delete": this._deleteHandler
          });
          this._initButtonBarEventHandlers()
      },
      _destroyEventHandlers: function _destroyEventHandlers() {
          this._destroyButtonBarEventHandlers();
          this._off(this.options.filesContainer, "click");
          this._super()
      },
      _enableFileInputButton: function _enableFileInputButton() {
          this.element.find(".fileinput-button input").prop("disabled", false).parent().removeClass("disabled")
      },
      _disableFileInputButton: function _disableFileInputButton() {
          this.element.find(".fileinput-button input").prop("disabled", true).parent().addClass("disabled")
      },
      _initTemplates: function _initTemplates() {
          var options = this.options;
          options.templatesContainer = this.document[0].createElement(options.filesContainer.prop("nodeName"));
          if (tmpl) {
              if (options.uploadTemplateId) {
                  options.uploadTemplate = tmpl(options.uploadTemplateId)
              }
              if (options.downloadTemplateId) {
                  options.downloadTemplate = tmpl(options.downloadTemplateId)
              }
          }
      },
      _initFilesContainer: function _initFilesContainer() {
          var options = this.options;
          if (options.filesContainer === undefined) {
              options.filesContainer = this.element.find(".files")
          } else if (!(options.filesContainer instanceof $)) {
              options.filesContainer = $(options.filesContainer)
          }
      },
      _initSpecialOptions: function _initSpecialOptions() {
          this._super();
          this._initFilesContainer();
          this._initTemplates()
      },
      _create: function _create() {
          this._super();
          this._resetFinishedDeferreds();
          if (!$.support.fileInput) {
              this._disableFileInputButton()
          }
      },
      enable: function enable() {
          var wasDisabled = false;
          if (this.options.disabled) {
              wasDisabled = true
          }
          this._super();
          if (wasDisabled) {
              this.element.find("input, button").prop("disabled", false);
              this._enableFileInputButton()
          }
      },
      disable: function disable() {
          if (!this.options.disabled) {
              this.element.find("input, button").prop("disabled", true);
              this._disableFileInputButton()
          }
          this._super()
      }
  })
});
DP.imageUploader = Backbone.View.extend({
  uploadUI: null,
  regFile: /(\.|\/)(jpe?g|png)$/i,
  messages: {
      errors: {
          maxFileSize: "File is too big",
          minFileSize: "File is too small",
          acceptFileTypes: "You can't upload files of this type",
          maxNumberOfFiles: "Max number of files exceeded",
          uploadedBytes: "Uploaded bytes exceed file size",
          emptyResult: "Empty file upload result"
      },
      error: "Error",
      start: "Start",
      cancel: "Cancel",
      destroy: "Delete"
  },
  initialize: function initialize(options) {
      var _this = this;
      var blnIsIE = $.browser.msie;
      var version = parseInt($.browser.version, 10);
      var blnIsLegacy = blnIsIE && version < 10;
      if (_.has(options, "regFile"))
          _this.regFile = options.regFile;
      if (blnIsLegacy)
          this.uploadUI = $(this.el).fileupload({
              contentType: "text/html"
          });
      this.uploadUI = $(this.el).fileupload({
          url: options.url,
          acceptFileTypes: _this.regFile,
          maxFileSize: options.maxFileSize,
          minFileSize: options.minFileSize,
          dataType: "iframejson",
          converters: {
              "html iframejson": function htmlIframejson(htmlEncodedJson) {
                  return $.parseJSON($("<div/>").html(htmlEncodedJson).text())
              },
              "iframe iframejson": function iframeIframejson(iframe) {
                  return $.parseJSON(iframe.find("body").text())
              }
          },
          add: function add(e, data) {
              var file = data.files[0];
              options.fnBeforeLoad && options.fnBeforeLoad();
              _this.removePhoto();
              var strName = file.name;
              if (!_this.regFile.test(strName)) {
                  options.fnLoadFail && options.fnLoadFail(_this.messages["errors"]["acceptFileTypes"]);
                  return false
              }
              if (file.error) {
                  var errorKey = file.error;
                  _log(_this.messages.errors);
                  options.fnLoadFail && options.fnLoadFail(_this.messages["errors"][errorKey]);
                  return false
              }
              if (blnIsLegacy) {
                  _this.$(options.previewImgEl || ".file_upload_preview").html(strName);
                  options.fnLoadSuccess && options.fnLoadSuccess(file)
              } else {
                  loadImage(file, function(img) {
                      options.defaultImgEl && _this.$(options.defaultImgEl).hide();
                      _this.$(options.previewImgEl || ".file_upload_preview").html(img);
                      options.fnLoadSuccess && options.fnLoadSuccess(file)
                  }, {
                      maxWidth: options.maxWidth || 140,
                      maxHeight: options.maxHeight || 140,
                      canvas: true
                  })
              }
              _this.uploadUI.data("data", data)
          }
      })
  },
  uploadPhoto: function uploadPhoto(params, fnSuccess, fnError, fnComplete) {
      if (this.uploadUI.data("data")) {
          _log(this.uploadUI.data("data"));
          this.uploadUI.data("data").submit().success(fnSuccess).error(fnError).complete(fnComplete)
      }
  },
  removePhoto: function removePhoto() {
      this.uploadUI.data("data", null)
  },
  hasPhoto: function hasPhoto() {
      return this.uploadUI.data("data") != null
  }
});
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
      define(["jquery"], factory)
  } else {
      factory(window.jQuery)
  }
}
)(function($) {
  "use strict";
  var counter = 0;
  $.ajaxTransport("iframe", function(options) {
      if (options.async) {
          var initialIframeSrc = options.initialIframeSrc || "javascript:false;", form, iframe, addParamChar;
          return {
              send: function send(_, completeCallback) {
                  form = $('<form style="display:none;"></form>');
                  form.attr("accept-charset", options.formAcceptCharset);
                  addParamChar = /\?/.test(options.url) ? "&" : "?";
                  if (options.type === "DELETE") {
                      options.url = options.url + addParamChar + "_method=DELETE";
                      options.type = "POST"
                  } else if (options.type === "PUT") {
                      options.url = options.url + addParamChar + "_method=PUT";
                      options.type = "POST"
                  } else if (options.type === "PATCH") {
                      options.url = options.url + addParamChar + "_method=PATCH";
                      options.type = "POST"
                  }
                  counter += 1;
                  iframe = $('<iframe src="' + initialIframeSrc + '" name="iframe-transport-' + counter + '"></iframe>').bind("load", function() {
                      var fileInputClones, paramNames = $.isArray(options.paramName) ? options.paramName : [options.paramName];
                      iframe.unbind("load").bind("load", function() {
                          var response;
                          try {
                              response = iframe.contents();
                              if (!response.length || !response[0].firstChild) {
                                  throw new Error
                              }
                          } catch (e) {
                              response = undefined
                          }
                          completeCallback(200, "success", {
                              iframe: response
                          });
                          $('<iframe src="' + initialIframeSrc + '"></iframe>').appendTo(form);
                          window.setTimeout(function() {
                              form.remove()
                          }, 0)
                      });
                      form.prop("target", iframe.prop("name")).prop("action", options.url).prop("method", options.type);
                      if (options.formData) {
                          $.each(options.formData, function(index, field) {
                              $('<input type="hidden"/>').prop("name", field.name).val(field.value).appendTo(form)
                          })
                      }
                      if (options.fileInput && options.fileInput.length && options.type === "POST") {
                          fileInputClones = options.fileInput.clone();
                          options.fileInput.after(function(index) {
                              return fileInputClones[index]
                          });
                          if (options.paramName) {
                              options.fileInput.each(function(index) {
                                  $(this).prop("name", paramNames[index] || options.paramName)
                              })
                          }
                          form.append(options.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data");
                          options.fileInput.removeAttr("form")
                      }
                      form.submit();
                      if (fileInputClones && fileInputClones.length) {
                          options.fileInput.each(function(index, input) {
                              var clone = $(fileInputClones[index]);
                              $(input).prop("name", clone.prop("name")).attr("form", clone.attr("form"));
                              clone.replaceWith(input)
                          })
                      }
                  });
                  form.append(iframe).appendTo(document.body)
              },
              abort: function abort() {
                  if (iframe) {
                      iframe.unbind("load").prop("src", initialIframeSrc)
                  }
                  if (form) {
                      form.remove()
                  }
              }
          }
      }
  });
  $.ajaxSetup({
      converters: {
          "iframe text": function iframeText(iframe) {
              return iframe && $(iframe[0].body).text()
          },
          "iframe json": function iframeJson(iframe) {
              return iframe && $.parseJSON($(iframe[0].body).text())
          },
          "iframe html": function iframeHtml(iframe) {
              return iframe && $(iframe[0].body).html()
          },
          "iframe xml": function iframeXml(iframe) {
              var xmlDoc = iframe && iframe[0];
              return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc : $.parseXML(xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml || $(xmlDoc.body).html())
          },
          "iframe script": function iframeScript(iframe) {
              return iframe && $.globalEval($(iframe[0].body).text())
          }
      }
  })
});
 */