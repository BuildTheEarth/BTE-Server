!function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.string=t.boolean=t.number=t.object=t.example=t.optional=t.required=t.command=void 0,t.command="\xa76",t.required="\xa7a",t.optional="\xa7b";var e="".concat("\xa77").concat("\xa7o");t.example=e,t.object="\xa7f",t.number="\xa7c",t.boolean="\xa7d",t.string="\xa7e";var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.gis_fr=void 0;"".concat(t.command,"/cs draw ").concat(t.required,"<file> ").concat(t.optional,"[block] [options] \n").concat(t.example,"/cs draw rails1 iron_block\n").concat(t.example,'/cs draw file3.kml stone {"offset":3,"onGround":false}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"gold_block"').concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"0").concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n  ").concat(t.object,"}\n");var o="".concat(t.command,"/cs gis_fr ").concat(t.optional,"[options] \n").concat(t.example,"/cs gis_fr\n").concat(t.example,'/cs gis_fr {"smooth":false,"ignoreWater":true}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"smooth": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreWater": ').concat(t.boolean,"false").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n").concat(t.object,"}\n");n.gis_fr=o;"".concat(t.command,"/cs gis_jp ").concat(t.optional,"[options] \n").concat(t.example,"/cs gis_jp\n").concat(t.example,'/cs gis_jp {"smooth":false,"ignoreWater":true}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"smooth": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreWater": ').concat(t.boolean,"false").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n").concat(t.object,"}\n"),"".concat(t.command,"/cs hedges ").concat(t.optional,"[options] \n").concat(t.example,"/cs hedges\n").concat(t.example,'/cs hedges {"block":"stone","height":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"leaves:4"').concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"2").concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs hedgesnear ").concat(t.required,"<radius> ").concat(t.optional,"[options] \n").concat(t.example,"/cs hedgesnear 7\n").concat(t.example,'/cs hedgesnear 50 {"block":"stone","height":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"leaves:4"').concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"2").concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs osm ").concat(t.required,"<query> ").concat(t.optional,"[options] \n  ").concat(t.example,'/cs osm way[highway~"^.*$"]\n  ').concat(t.example,'/cs osm way[railway~"^.*$"] {"block":"stone","offset":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"diamond_block"').concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"0").concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs osmnear ").concat(t.required,"<query> <radius> ").concat(t.optional,"[options] \n  ").concat(t.example,'/cs osmnear way[highway~"^.*$"] 7\n  ').concat(t.example,'/cs osmnear way[railway~"^.*$"] 50 {"block":"stone","offset":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"diamond_block"').concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"0").concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"regex": ').concat(t.string,'"^.*$"').concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs rails ").concat(t.optional,"[options] \n  ").concat(t.example,"/cs rails\n  ").concat(t.example,'/cs rails {"block":"stone","offset":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"iron_block"').concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"0").concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"regex": ').concat(t.string,'"^.*$"').concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs railsnear ").concat(t.required,"<radius> ").concat(t.required,"[options] \n  ").concat(t.example,"/cs railsnear 7\n  ").concat(t.example,'/cs railsnear 50 {"block":"stone","offset":5}\nDefault options: ').concat(t.object,"{\n  ").concat(t.object,'"block": ').concat(t.string,'"iron_block"').concat(t.object,",\n  ").concat(t.object,'"offset": ').concat(t.number,"0").concat(t.object,",\n  ").concat(t.object,'"height": ').concat(t.number,"1").concat(t.object,",\n  ").concat(t.object,'"regex": ').concat(t.string,'"^.*$"').concat(t.object,",\n  ").concat(t.object,'"onGround": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreBuildings": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoreVegetation": ').concat(t.boolean,"true").concat(t.object,",\n  ").concat(t.object,'"ignoredBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"],\n  ").concat(t.object,'"allowedBlocks": [').concat(t.string,'"see documentation"').concat(t.object,"]\n").concat(t.object,"}\n"),"".concat(t.command,"/cs tpll ").concat(t.required,"<latitude> <longitude> ").concat(t.required,"[altitude]\n  ").concat(t.example,"/cs tpll 47.58523 6.89725\n  ").concat(t.example,"/cs tpll 47.58523, 6.89725 370\n  ").concat(t.example,"/cs tpll 47\xb035'6.32\"N 6\xb053'50.06\"E\n  ").concat(t.example,"/cs tpll 47\xb035'6.32\"N, 6\xb053'50.06\"E 370");var c={};function a(t,e,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(o){var c=Object.getOwnPropertyDescriptor(o,e);return c.get?c.get.call(n):c.value}})(t,e,n||t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");var n,o;t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&(n=t,o=e,(Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(n,o))}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o,c,a=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return o=this,!(c=n)||"object"!==r(c)&&"function"!=typeof c?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o):c}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e,n){return e&&h(t.prototype,e),n&&h(t,n),t}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(){var t=new p,e=(new b).orientProjection(t);return new T(e,7318261.522857145,7318261.522857145)},importPackage(Packages.java.io),importPackage(Packages.java.awt);var b=function(){function t(){u(this,t),this.Orientation={none:1,upright:2,swapped:3},this.EARTH_CIRCUMFERENCE=40075017,this.EARTH_POLAR_CIRCUMFERENCE=40008e3}return f(t,[{key:"orientProjection",value:function(t){return t.upright()?t:new R(t)}},{key:"toGeo",value:function(t,e){return[t,e]}},{key:"fromGeo",value:function(t,e){return[t,e]}},{key:"upright",value:function(){return this.fromGeo(0,90)[1]<=this.fromGeo(0,-90)[1]}},{key:"vector",value:function(t,e,n,o){var c=this.toGeo(t,e),a=this.fromGeo(c[0]+360*o/(Math.cos(c[1]*Math.PI/180)*this.EARTH_CIRCUMFERENCE),c[1]+360*n/this.EARTH_POLAR_CIRCUMFERENCE);return[a[0]-t,a[1]-e]}}]),t}(),g=function(t){i(n,b);var e=s(n);function n(t){var o;return u(this,n),(o=e.call(this)).input=t,o}return f(n,[{key:"upright",value:function(){return this.input.upright()}},{key:"bounds",value:function(){return this.input.bounds()}},{key:"metersPerUnit",value:function(){return this.input.metersPerUnit()}}]),n}(),R=function(t){i(n,g);var e=s(n);function n(){return u(this,n),e.apply(this,arguments)}return f(n,[{key:"toGeo",value:function(t,e){return this.input.toGeo(t,-e)}},{key:"fromGeo",value:function(t,e){var n=this.input.fromGeo(t,e);return n[1]=-n[1],n}},{key:"upright",value:function(){return!this.input.upright()}},{key:"bounds",value:function(){var t=this.input.bounds();return new[t[0],-t[3],t[2],-t[1]]}}]),n}(),T=function(t){i(n,g);var e=s(n);function n(t,o,c){var a;return u(this,n),(a=e.call(this,t)).scaleX=o,a.scaleY=c||o,a}return f(n,[{key:"toGeo",value:function(t,e){return this.input.toGeo(t/this.scaleX,e/this.scaleY)}},{key:"fromGeo",value:function(t,e){var n=this.input.fromGeo(t,e);return n[0]*=this.scaleX,n[1]*=this.scaleY,n}},{key:"upright",value:function(){return!!(this.scaleY<0^this.input.upright())}},{key:"bounds",value:function(){var t=this.input.bounds();return t[0]*=this.scaleX,t[1]*=this.scaleY,t[2]*=this.scaleX,t[3]*=this.scaleY,t}},{key:"metersPerUnit",value:function(){return this.input.metersPerUnit()/Math.sqrt((this.scaleX*this.scaleX+this.scaleY*this.scaleY)/2)}}]),n}(),d=function(t){i(n,b);var e=s(n);function n(){var t;u(this,n),(t=e.call(this)).ARC=2*Math.asin(Math.sqrt(5-Math.sqrt(5))/Math.sqrt(10)),t.TO_RADIANS=Math.PI/180,t.ROOT3=Math.sqrt(3),t.newton=5,t.VERT=[10.536199,64.7,-5.24539,2.300882,58.157706,10.447378,122.3,39.1,-143.47849,50.103201,-67.13233,23.717925,36.52151,-50.1032,112.867673,-23.71793,174.75461,-2.300882,-121.84229,-10.44735,-57.7,-39.1,-169.4638,-64.7],t.ISO=[2,1,6,1,0,2,0,1,5,1,5,10,1,6,10,7,2,6,2,3,7,3,0,2,0,3,4,4,0,5,5,4,9,9,5,10,10,9,11,11,6,10,6,7,11,8,3,7,8,3,4,8,4,9,9,8,11,7,8,11,11,6,7,3,7,8],t.CENTER_MAP=[-3,7,-2,5,-1,7,2,5,4,5,-4,1,-3,-1,-2,1,-1,-1,0,1,1,-1,2,1,3,-1,4,1,5,-1,-3,-5,-1,-5,1,-5,2,-7,-4,-7,-5,-5,-2,-7],t.FLIP_TRIANGLE=[1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0],t.CENTROID=new Array(66),t.ROTATION_MATRIX=new Array(198),t.INVERSE_ROTATION_MATRIX=new Array(198);for(var o=0;o<22;o++)t.CENTER_MAP[2*o]*=.5*t.ARC,t.CENTER_MAP[2*o+1]*=t.ARC*t.ROOT3/12;for(var c=0;c<12;c++)t.VERT[2*c+1]=90-t.VERT[2*c+1],t.VERT[2*c]*=t.TO_RADIANS,t.VERT[2*c+1]*=t.TO_RADIANS;for(var a=0;a<22;a++){var r=t.cart(t.VERT[2*t.ISO[3*a]],t.VERT[2*t.ISO[3*a]+1]),i=t.cart(t.VERT[2*t.ISO[3*a+1]],t.VERT[2*t.ISO[3*a+1]+1]),s=t.cart(t.VERT[2*t.ISO[3*a+2]],t.VERT[2*t.ISO[3*a+2]+1]),l=r[0]+i[0]+s[0],h=r[1]+i[1]+s[1],f=r[2]+i[2]+s[2],b=Math.sqrt(l*l+h*h+f*f);t.CENTROID[3*a]=l/b,t.CENTROID[3*a+1]=h/b,t.CENTROID[3*a+2]=f/b;var g=Math.atan2(h,l),R=Math.atan2(Math.sqrt(l*l+h*h),f),T=[t.VERT[2*t.ISO[3*a]],t.VERT[2*t.ISO[3*a]+1]];T=t.yRot(T[0]-g,T[1],-R),t.produceZYZRotationMatrix(t.ROTATION_MATRIX,9*a,-g,-R,Math.PI/2-T[0]),t.produceZYZRotationMatrix(t.INVERSE_ROTATION_MATRIX,9*a,T[0]-Math.PI/2,R,g)}return t.FACE_ON_GRID=[-1,-1,0,1,2,-1,-1,3,-1,4,-1,-1,5,6,7,8,9,10,11,12,13,14,20,19,15,21,16,-1,17,18,-1,-1,-1],t.Z=Math.sqrt(5+2*Math.sqrt(5))/Math.sqrt(15),t.EL=Math.sqrt(8)/Math.sqrt(5+Math.sqrt(5)),t.EL6=t.EL/6,t.DVE=Math.sqrt(3+Math.sqrt(5))/Math.sqrt(5+Math.sqrt(5)),t.R=-3*t.EL6/t.DVE,t.OUT_OF_BOUNDS=[NaN,NaN],t}return f(n,[{key:"produceZYZRotationMatrix",value:function(t,e,n,o,c){var a=Math.sin(n),r=Math.cos(n),i=Math.sin(o),s=Math.cos(o),l=Math.sin(c),u=Math.cos(c);t[e+0]=r*s*u-l*a,t[e+1]=-a*s*u-l*r,t[e+2]=u*i,t[e+3]=l*s*r+u*a,t[e+4]=u*r-l*s*a,t[e+5]=l*i,t[e+6]=-i*r,t[e+7]=i*a,t[e+8]=s}},{key:"cart",value:function(t,e){var n=Math.sin(e);return[n*Math.cos(t),n*Math.sin(t),Math.cos(e)]}},{key:"findTriangle",value:function(t,e,n){for(var o=Number.MAX_VALUE,c=0,a=0;a<20;a++){var r=this.CENTROID[3*a]-t,i=this.CENTROID[3*a+1]-e,s=this.CENTROID[3*a+2]-n,l=r*r+i*i+s*s;if(l<o){if(l<.1)return a;c=a,o=l}}return c}},{key:"findMapTriangle",value:function(t,e){for(var n=Number.MAX_VALUE,o=0,c=0;c<20;c++){var a=this.CENTER_MAP[2*c]-t,r=this.CENTER_MAP[2*c+1]-e,i=a*a+r*r;i<n&&(o=c,n=i)}return o}},{key:"findTriangleGrid",value:function(t,e){var n,o=t/this.ARC,c=e/(this.ARC*this.ROOT3);if(c>-.25)if(c<.25)n=1;else{if(!(c<=.75))return-1;n=0,c=.5-c}else{if(!(c>=-.75))return-1;n=2,c=-c-.5}var a=o-(c+=.25),r=o+c,i=Math.floor(a),s=2*i+(Math.floor(r)!==i?1:0)+6;return s<0||s>=11?-1:this.FACE_ON_GRID[11*n+s]}},{key:"triangleTransform",value:function(t,e,n){var o=this.Z/n,c=o*t,a=o*e,r=Math.atan((2*a/this.ROOT3-this.EL6)/this.DVE),i=Math.atan((c-a/this.ROOT3-this.EL6)/this.DVE),s=Math.atan((-c-a/this.ROOT3-this.EL6)/this.DVE);return[.5*(i-s),(2*r-i-s)/(2*this.ROOT3)]}},{key:"inverseTriangleTransformNewton",value:function(t,e){for(var n=Math.tan(this.ROOT3*e+t),o=Math.tan(2*t),c=n*n+1,a=o*o+1,r=n,i=o,s=0,l=1,u=1,h=0;h<this.newton;h++)r=((s-=(r+i+s-this.R)/(c*l*l+a*u*u+1))+n)*(l=1/(1-s*n)),i=(s+o)*(u=1/(1-s*o));var f=this.ROOT3*(this.DVE*r+this.EL6)/2,b=(this.DVE*i+f/this.ROOT3+this.EL6)/this.Z,g=f/this.Z,R=1/Math.sqrt(1+b*b+g*g);return[R*b,R*g,R]}},{key:"inverseTriangleTransformCbrt",value:function(t,e){var n=Math.tan(this.ROOT3*e+t),o=Math.tan(2*t),c=o*n,a=-(this.R*o*n+2*o+2*n),r=3+this.R*o+this.R*n-2*o*n,i=-a/(3*c),s=i*i*i+(a*r-3*c*(o+n-this.R))/(6*c*c),l=r/(3*c)-i*i,u=Math.sqrt(-(s*s+l*l*l)),h=Math.sqrt(u*u+s*s),f=Math.atan2(u,s),b=2*Math.cbrt(h)*Math.cos(f/3)+i,g=(b+n)/(1-b*n),R=(b+o)/(1-b*o),T=this.ROOT3*(this.DVE*g+this.EL6)/2,d=(this.DVE*R+T/this.ROOT3+this.EL6)/this.Z,O=T/this.Z,p=1/Math.sqrt(1+d*d+O*O);return[p*d,p*O,p]}},{key:"inverseTriangleTransformCbrtNewton",value:function(t,e){for(var n=Math.tan(this.ROOT3*e+t),o=Math.tan(2*t),c=n+o,a=o*n,r=-(this.R*a+2*o+2*n),i=3+this.R*c-2*a,s=c-this.R,l=3*a,u=2*r,h=-s/i,f=0;f<this.newton;f++){var b=h*h;h-=(a*b*h+r*b+i*h+s)/(l*b+u*h+i)}var g=(h+n)/(1-h*n),R=(h+o)/(1-h*o),T=this.ROOT3*(this.DVE*g+this.EL6)/2,d=(this.DVE*R+T/this.ROOT3+this.EL6)/this.Z,O=T/this.Z,p=1/Math.sqrt(1+d*d+O*O);return[p*d,p*O,p]}},{key:"inverseTriangleTransform",value:function(t,e){return this.inverseTriangleTransformNewton(t,e)}},{key:"yRot",value:function(t,e,n){var o=this.cart(t,e),c=o[0];o[0]=o[2]*Math.sin(n)+c*Math.cos(n),o[2]=o[2]*Math.cos(n)-c*Math.sin(n);var a=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);return o[0]/=a,o[1]/=a,o[2]/=a,[Math.atan2(o[1],o[0]),Math.atan2(Math.sqrt(o[0]*o[0]+o[1]*o[1]),o[2])]}},{key:"fromGeo",value:function(t,e){e=90-e,t*=this.TO_RADIANS,e*=this.TO_RADIANS;var n=Math.sin(e),o=Math.cos(t)*n,c=Math.sin(t)*n,a=Math.cos(e),r=this.findTriangle(o,c,a),i=9*r,s=o*this.ROTATION_MATRIX[i+0]+c*this.ROTATION_MATRIX[i+1]+a*this.ROTATION_MATRIX[i+2],l=o*this.ROTATION_MATRIX[i+3]+c*this.ROTATION_MATRIX[i+4]+a*this.ROTATION_MATRIX[i+5],u=o*this.ROTATION_MATRIX[i+6]+c*this.ROTATION_MATRIX[i+7]+a*this.ROTATION_MATRIX[i+8],h=this.triangleTransform(s,l,u);return 0!==this.FLIP_TRIANGLE[r]&&(h[0]=-h[0],h[1]=-h[1]),o=h[0],(15===r&&o>h[1]*this.ROOT3||14===r)&&o>0&&(h[0]=.5*o-.5*this.ROOT3*h[1],h[1]=.5*this.ROOT3*o+.5*h[1],r+=6),h[0]+=this.CENTER_MAP[2*r],h[1]+=this.CENTER_MAP[2*r+1],h}},{key:"toGeo",value:function(t,e){var n=this.findTriangleGrid(t,e);if(-1===n)return this.OUT_OF_BOUNDS;switch(t-=this.CENTER_MAP[2*n],e-=this.CENTER_MAP[2*n+1],n){case 14:if(t>0)return this.OUT_OF_BOUNDS;break;case 20:if(-e*this.ROOT3>t)return this.OUT_OF_BOUNDS;break;case 15:if(t>0&&t>e*this.ROOT3)return this.OUT_OF_BOUNDS;break;case 21:if(t<0||-e*this.ROOT3>t)return this.OUT_OF_BOUNDS}0!==this.FLIP_TRIANGLE[n]&&(t=-t,e=-e);var o=this.inverseTriangleTransform(t,e);t=o[0],e=o[1];var c=o[2],a=9*n,r=t*this.INVERSE_ROTATION_MATRIX[a+0]+e*this.INVERSE_ROTATION_MATRIX[a+1]+c*this.INVERSE_ROTATION_MATRIX[a+2],i=t*this.INVERSE_ROTATION_MATRIX[a+3]+e*this.INVERSE_ROTATION_MATRIX[a+4]+c*this.INVERSE_ROTATION_MATRIX[a+5],s=t*this.INVERSE_ROTATION_MATRIX[a+6]+e*this.INVERSE_ROTATION_MATRIX[a+7]+c*this.INVERSE_ROTATION_MATRIX[a+8];return[Math.atan2(i,r)/this.TO_RADIANS,90-Math.acos(s)/this.TO_RADIANS]}},{key:"bounds",value:function(){return[-3*this.ARC,-.75*this.ARC*this.ROOT3,2.5*this.ARC,.75*this.ARC*this.ROOT3]}},{key:"upright",value:function(){return!1}},{key:"metersPerUnit",value:function(){return Math.sqrt(5101e11/(20*this.ROOT3*this.ARC*this.ARC/4))}}]),n}(),O=function(t){i(n,d);var e=s(n);function n(){var t;u(this,n),(t=e.call(this)).VECTOR_SCALE_FACTOR=.8715371854532509;for(var o=null,c=new Array(257),a=new Array(c.length),r=0;r<c.length;r++)c[r]=[];for(var i=0;i<a.length;i++)a[i]=[];try{if((o=context.getSafeOpenFile("craftscripts/data","conformal","txt")).exists()){for(var s=new BufferedReader(new FileReader(o)),l=0;l<c.length;l++){var h=new Array(c.length-l),f=new Array(c.length-l);c[l]=h,a[l]=f}for(var b=0;b<c.length;b++)for(var g=0;g<c.length-b;g++){var R=s.readLine(),T=(R=R.substring(1,R.length()-3)).split(", ");c[g][b]=Number.parseFloat(T[0])*t.VECTOR_SCALE_FACTOR,a[g][b]=Number.parseFloat(T[1])*t.VECTOR_SCALE_FACTOR}}else player.printError("Conformal.txt doesn't exist.");s.close()}catch(d){player.printError("Can't load conformal: "+d)}return t.inverse=new m(c,a),t}return f(n,[{key:"triangleTransform",value:function(t,e,o){var c=a(l(n.prototype),"triangleTransform",this).call(this,t,e,o);return t=c[0],e=c[1],c[0]/=this.ARC,c[1]/=this.ARC,c[0]+=.5,c[1]+=this.ROOT3/6,(c=this.inverse.applyNewtonsMethod(t,e,c[0],c[1],5))[0]-=.5,c[1]-=this.ROOT3/6,c[0]*=this.ARC,c[1]*=this.ARC,c}},{key:"inverseTriangleTransform",value:function(t,e){t/=this.ARC,e/=this.ARC,t+=.5,e+=this.ROOT3/6;var o=this.inverse.getInterpolatedVector(t,e);return a(l(n.prototype),"inverseTriangleTransform",this).call(this,o[0],o[1])}},{key:"metersPerUnit",value:function(){return 40075017/(2*Math.PI)/this.VECTOR_SCALE_FACTOR}}]),n}(),p=function(t){i(n,O);var e=s(n);function n(){var t;return u(this,n),(t=e.call(this)).THETA=-150*t.TO_RADIANS,t.SIN_THETA=Math.sin(t.THETA),t.COS_THETA=Math.cos(t.THETA),t.BERING_X=-.3420420960118339,t.BERING_Y=-.322211064085279,t.ARCTIC_Y=-.2,t.ARCTIC_M=(t.ARCTIC_Y-t.ROOT3*t.ARC/4)/(t.BERING_X- -.5*t.ARC),t.ARCTIC_B=t.ARCTIC_Y-t.ARCTIC_M*t.BERING_X,t.ALEUTIAN_Y=-.5000446805492526,t.ALEUTIAN_XL=-.5149231279757507,t.ALEUTIAN_XR=-.45,t.ALEUTIAN_M=(t.BERING_Y-t.ALEUTIAN_Y)/(t.BERING_X-t.ALEUTIAN_XR),t.ALEUTIAN_B=t.BERING_Y-t.ALEUTIAN_M*t.BERING_X,t}return f(n,[{key:"fromGeo",value:function(t,e){var o=a(l(n.prototype),"fromGeo",this).call(this,t,e),c=o[0],r=o[1],i=this.isEurasianPart(c,r);if(r-=.75*this.ARC*this.ROOT3,i){var s=c+=this.ARC;c=this.COS_THETA*c-this.SIN_THETA*r,r=this.SIN_THETA*s+this.COS_THETA*r}else c-=this.ARC;return o[0]=r,o[1]=-c,o}},{key:"toGeo",value:function(t,e){var o;o=e<0?t>0:e>this.ARC/2?t>-this.ROOT3*this.ARC/2:e*-this.ROOT3<t;var c=t;return t=-e,e=c,o?(c=t,t=this.COS_THETA*t+this.SIN_THETA*e,e=this.COS_THETA*e-this.SIN_THETA*c,t-=this.ARC):t+=this.ARC,e+=.75*this.ARC*this.ROOT3,o!==this.isEurasianPart(t,e)?this.OUT_OF_BOUNDS:a(l(n.prototype),"toGeo",this).call(this,t,e)}},{key:"isEurasianPart",value:function(t,e){return!(t>0)&&(t<-.5*this.ARC||(e>this.ROOT3*this.ARC/4?t<0:e<this.ALEUTIAN_Y?e<this.ALEUTIAN_Y+this.ALEUTIAN_XL-t:e>this.BERING_Y?e<this.ARCTIC_Y?t<this.BERING_X:e<this.ARCTIC_M*t+this.ARCTIC_B:e>this.ALEUTIAN_M*t+this.ALEUTIAN_B))}},{key:"bounds",value:function(){return[-1.5*this.ARC*this.ROOT3,-1.5*this.ARC,3*this.ARC,this.ROOT3*this.ARC]}}]),n}(),m=function(){function t(e,n){u(this,t),this.ROOT3=Math.sqrt(3),this.sideLength=e.length-1,this.VECTOR_X=e,this.VECTOR_Y=n}return f(t,[{key:"getInterpolatedVector",value:function(t,e){t*=this.sideLength;var n,o,c,a,r,i,s,l,u=2*(e*=this.sideLength)/this.ROOT3,h=t-.5*u,f=Math.trunc(h),b=Math.trunc(u);f<0?f=0:f>=this.sideLength&&(f=this.sideLength-1),b<0?b=0:b>=this.sideLength-f&&(b=this.sideLength-f-1);var g=1;e<-this.ROOT3*(t-f-b-1)||b===this.sideLength-f-1?(n=this.VECTOR_X[f][b],o=this.VECTOR_Y[f][b],c=this.VECTOR_X[f][b+1],a=this.VECTOR_Y[f][b+1],r=this.VECTOR_X[f+1][b],i=this.VECTOR_Y[f+1][b],s=.5*this.ROOT3*b,l=f+1+.5*b):(n=this.VECTOR_X[f][b+1],o=this.VECTOR_Y[f][b+1],c=this.VECTOR_X[f+1][b],a=this.VECTOR_Y[f+1][b],r=this.VECTOR_X[f+1][b+1],i=this.VECTOR_Y[f+1][b+1],g=-1,e=-e,s=-.5*this.ROOT3*(b+1),l=f+1+.5*(b+1));var R=-(e-s)/this.ROOT3-(t-l),T=2*(e-s)/this.ROOT3,d=1-R-T;return[n*R+c*T+r*d,o*R+a*T+i*d,(r-n)*this.sideLength,this.sideLength*g*(2*c-n-r)/this.ROOT3,(i-o)*this.sideLength,this.sideLength*g*(2*a-o-i)/this.ROOT3]}},{key:"applyNewtonsMethod",value:function(t,e,n,o,c){for(var a=0;a<c;a++){var r=this.getInterpolatedVector(n,o),i=r[0]-t,s=r[1]-e,l=r[2],u=r[3],h=r[4],f=r[5],b=1/(l*f-u*h);n-=b*(f*i-u*s),o-=b*(-h*i+l*s)}return[n,o]}}]),t}(),v={};function j(t){if(t.exists()){var e=new BufferedReader(new FileReader(t)),n="",o="";do{n+=o,n+="\n",o=e.readLine()}while(o);return e.close(),n}}Object.defineProperty(v,"__esModule",{value:!0}),v.getConfig=function(){var t=j(context.getSafeOpenFile("craftscripts","config","json",[]));return t?JSON.parse(t):{}};var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.elevation=function(t,e,n,o){t.ignoreWater||(t.ignoredBlocks.indexOf(w.id)<0&&t.ignoredBlocks.push(w.id),t.ignoredBlocks.indexOf(P.id)<0&&t.ignoredBlocks.push(P.id));var c=function(){player.print("\xa77Please wait...");for(var t=M.iterator(),e={};t.hasNext();){var n=t.next(),o=n.x,c=n.z;e[o]||(e[o]={}),e[o][c]=!0}var a=(0,A.default)(),r=[];for(var i in e)for(var s in e[i]){var l=Number.parseFloat(i),u=Number.parseFloat(s),h=a.toGeo(l,u);r.push({x:l,z:u,lon:h[0].toFixed(5),lat:h[1].toFixed(5)})}return r}(),a=y.elevationBlockLimit;if(a&&a>0&&c.length>a)player.printError("Please select an area of less than ".concat(a," blocks"));else{var r=function(t,e,n,o,c){var a=[],r=function(){player.print("".concat(a.length," blocks have failed to elevate. Retrying..."));var t=a;a=[],r=function(){player.printError("".concat(a.length," blocks failed to elevate.\nPlease select a slightly different region."))},h(t,c||50)},i=[],s=0,l=Number.MIN_VALUE,u=Number.MAX_VALUE,h=function(t,c){for(var h=[],f=function(r){var s,f,b,g,R=t.slice(r,r+c).filter((function(t){return t})),T=R.map(B).join("|"),d=R.map(x).join("|"),O=n(T,d);h.push((s=O,f=function(t){for(var n=o(t),c=0;c<R.length;c++)if(n[c]>-15e3&&n[c]<1e4){R[c].y=0|n[c];var r=L(new Vector(R[c].x,R[c].y,R[c].z),e);R[c].previousY=r,i.push(R[c]),l=Math.max(l,n[c],r),u=Math.min(u,n[c],r)}else a.push(R[c])},b=function(t){t.match("Request Error:\nEmpty JSON string")?player.print("\xa77Too many requests, please reduce region size next time."):player.printError(t),a=a.concat(R)},(g=new Thread((function(){var t=null;try{var e=new URL(s).openConnection();e.addRequestProperty("User-Agent","BTE-tools");var n=new StringWriter;IOUtils.copy(e.getInputStream(),n,StandardCharsets.UTF_8),t=JSON.parse(n.toString())}catch(o){return void b(("Request Error:\n"+(o.message||s)).split("http")[0])}try{f(t)}catch(o){b(("Callback Error:\n"+(o.message||s)).split("http")[0])}}))).start(),g))},b=0;b<t.length;b+=c)f(b);player.print("Requesting information (".concat(t.length," blocs divided into ").concat(h.length," requests)..."));for(var g=0;g<h.length;g++)for(h[g].join();i.length>0;){var R=i.shift();if(R){var T=new Vector(R.x,R.y,R.z);D(R.previousY,T),s++}}a.length>0&&r()};return h(t,c||150),player.print("Elevated ".concat(s,"/").concat(t.length," blocs successfully.")),{maxY:l,minY:u}}(c,t,e,n,o);t.smooth&&function(t){var e=t.maxY,n=t.minY;k.flushQueue();var o=Math.max(e-M.getMaximumPoint().y,0),c=Math.min(n-M.getMinimumPoint().y,0);M.expand(new Vector(0,o,0),new Vector(0,c,0));try{M.expand(new Vector(2,0,2),new Vector(-2,0,-2))}catch(a){}new RegionCommands(WorldEdit.getInstance()).smooth(context.getPlayer(),context.remember(),M,2,!1);try{M.contract(new Vector(2,0,2),new Vector(-2,0,-2))}catch(r){}C.learnChanges(),C.explainRegionAdjust(player,I)}(r)}};var E,A=(E=c)&&E.__esModule?E:{default:E};importClass(Packages.com.sk89q.worldedit.Vector),importClass(Packages.com.sk89q.worldedit.WorldEdit),importClass(Packages.com.sk89q.worldedit.command.RegionCommands),importClass(Packages.java.io.StringWriter),importClass(Packages.java.net.URL),importClass(Packages.java.lang.Thread),importClass(Packages.java.nio.charset.StandardCharsets),importClass(Packages.org.apache.commons.io.IOUtils);var y=(0,v.getConfig)(),I=context.getSession(),k=context.remember(),C=I.getRegionSelector(player.getWorld()),M=C.getRegion(),N=context.getBlock("air"),w=context.getBlock("water"),P=context.getBlock("lava"),V=Vector.UNIT_Y,S=Vector.UNIT_Y.multiply(-1);function B(t){return t.lon}function x(t){return t.lat}function L(t,e){for(var n=t;!e.ignoredBlocks.includes(k.getBlock(n.add(V)).id);)n=n.add(V);for(;e.ignoredBlocks.includes(k.getBlock(n).id);)n=n.add(S);return n.y}function D(t,e){var n=new Vector(e.x,t,e.z),o=k.getBlock(n);if(n.y<e.y){for(var c=k.getBlock(n.add(S)),a=n.y;a<e.y;a++)k.setBlock(n,c),n=n.add(V);k.setBlock(e,o)}else if(n.y>e.y){for(var r=k.getBlock(e)===w?w:N,i=n.y+1;i>e.y;i--)k.setBlock(n,r),n=n.add(S);k.setBlock(e,o)}return t}var U={};Object.defineProperty(U,"__esModule",{value:!0}),U.ignoredBlocks=void 0,U.ignoredBlocks=["air","tallgrass","sapling","log","log2","leaves","leaves2","deadbush","red_flower","yellow_flower","red_mushroom","brown_mushroom","vine","waterlily","cactus","reeds","pumpkin","melon_block","snow_layer","double_plant"];var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.transformIDs=function(t,e){"ignoredBlocks"!==e||t[e].includes("air")||t[e].push("air"),t[e]=t[e].map((function(t){return context.getBlock(t).id}))};context.getSession();function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function G(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}importClass(Packages.com.sk89q.worldedit.Vector),importClass(Packages.com.sk89q.worldedit.WorldEdit),importClass(Packages.com.sk89q.worldedit.command.RegionCommands),importClass(Packages.java.io.StringWriter),importClass(Packages.java.net.URL),importClass(Packages.java.lang.Thread),importClass(Packages.java.nio.charset.StandardCharsets),importClass(Packages.org.apache.commons.io.IOUtils),context.checkArgs(0,1,n.gis_fr);var Y=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){G(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({smooth:!0,ignoreWater:!1,ignoredBlocks:U.ignoredBlocks},JSON.parse(argv[1]||"{}"));(0,q.transformIDs)(Y,"ignoredBlocks"),(0,_.elevation)(Y,(function(t,e){return"http://wxs.ign.fr/".concat("3r53l5iudkvvitord0zrh8in","/alti/rest/elevation.json?lon=").concat(t,"&lat=").concat(e,"&zonly=true")}),(function(t){return t.elevations}))}();