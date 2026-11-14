// ==UserScript==
// @name         The West - zlúčené nástroje
// @namespace    urn:jurajgallus:the-west:bundled:the-west-zlucene-nastroje
// @version      1.2.1
// @description  Kalkulačky, farebný chat, práce, duely a funkcie Essentials.
// @grant        none
// @run-at       document-idle
// @include      https://*.the-west.*/game.php*
// @include      https://*.the-west.com.*/game.php*
// @include      https://*.the-west.*.com/game.php*
// @include      https://*.tw.innogames.*/game.php*
// @include      http*://*.the-west.*/game.php*
// @include      http://*.the-west.*/game.php*
// @include      http://*.tw.innogames.*/game.php*
// @include      https://*.the-west.*/index.php?page=logout
// @include      https://www.the-west.*
// @include      https://beta.the-west.net*
// @include      http*://tw-db.info/*?strana=invent&x=*
// @updateURL    https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-zlucene-nastroje.user.js
// @downloadURL  https://raw.githubusercontent.com/jurajgallusads-stack/the-west-import/main/the-west-zlucene-nastroje.user.js
// ==/UserScript==

(() => {
  const url = location.origin + location.pathname + location.search + location.hash;
  function start(name, includes, excludes, init) {
    if (!includes.some(pattern => new RegExp(pattern).test(url))) return;
    if (excludes.some(pattern => new RegExp(pattern).test(url))) return;
    try {
      init();
    } catch (error) {
      console.error('[The West] ' + name, error);
    }
  }

  // The-West Calc | 2.11.7 | timzatko, TomRobert | http://tw-calc.net
  start("The-West Calc", ["^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^https://(?:[^./:@]+\\.)+the\\-west\\.com\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+\\.com(?::\\d+)?/game\\.php.*$", "^https://(?:[^./:@]+\\.)+tw\\.innogames\\.[^/:@]+(?::\\d+)?/game\\.php.*$"], ["^https://classic\\.the\\-west\\.net[^/:@]*(?::\\d+)?/.*$"], function () {
var TWCalcJS=function(){(function(){"use strict";var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t,r){return r={path:t,exports:{},require:function(e,t){return commonjsRequire(e,null==t?r.path:t)}},e(r,r.exports),r.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var check$1=function(e){return e&&e.Math===Math&&e},globalThis_1$1=check$1("object"==typeof globalThis&&globalThis)||check$1("object"==typeof window&&window)||check$1("object"==typeof self&&self)||check$1("object"==typeof commonjsGlobal&&commonjsGlobal)||check$1("object"==typeof commonjsGlobal&&commonjsGlobal)||function(){return this}()||Function("return this")(),fails$2=function(e){try{return!!e()}catch(e){return!0}},descriptors$1=!fails$2(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),functionBindNative$1=!fails$2(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}),call$5=Function.prototype.call,functionCall$1=functionBindNative$1?call$5.bind(call$5):function(){return call$5.apply(call$5,arguments)},$propertyIsEnumerable$2={}.propertyIsEnumerable,getOwnPropertyDescriptor$5=Object.getOwnPropertyDescriptor,NASHORN_BUG$1=getOwnPropertyDescriptor$5&&!$propertyIsEnumerable$2.call({1:2},1),f$d=NASHORN_BUG$1?function(e){var t=getOwnPropertyDescriptor$5(this,e);return!!t&&t.enumerable}:$propertyIsEnumerable$2,objectPropertyIsEnumerable$1={f:f$d},createPropertyDescriptor$2=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},FunctionPrototype$5=Function.prototype,call$4=FunctionPrototype$5.call,uncurryThisWithBind$1=functionBindNative$1&&FunctionPrototype$5.bind.bind(call$4,call$4),functionUncurryThis$1=functionBindNative$1?uncurryThisWithBind$1:function(e){return function(){return call$4.apply(e,arguments)}},toString$7=functionUncurryThis$1({}.toString),stringSlice$3=functionUncurryThis$1("".slice),classofRaw$1=function(e){return stringSlice$3(toString$7(e),8,-1)},$Object$8=Object,split$1=functionUncurryThis$1("".split),indexedObject$1=fails$2(function(){return!$Object$8("z").propertyIsEnumerable(0)})?function(e){return"String"===classofRaw$1(e)?split$1(e,""):$Object$8(e)}:$Object$8,isNullOrUndefined$2=function(e){return null==e},$TypeError$s=TypeError,requireObjectCoercible$2=function(e){if(isNullOrUndefined$2(e))throw new $TypeError$s("Can't call method on "+e);return e},toIndexedObject$2=function(e){return indexedObject$1(requireObjectCoercible$2(e))},documentAll$1="object"==typeof document&&document.all,isCallable$2=void 0===documentAll$1&&void 0!==documentAll$1?function(e){return"function"==typeof e||e===documentAll$1}:function(e){return"function"==typeof e},isObject$2=function(e){return"object"==typeof e?null!==e:isCallable$2(e)},aFunction$1=function(e){return isCallable$2(e)?e:void 0},getBuiltIn$2=function(e,t){return arguments.length<2?aFunction$1(globalThis_1$1[e]):globalThis_1$1[e]&&globalThis_1$1[e][t]},objectIsPrototypeOf$1=functionUncurryThis$1({}.isPrototypeOf),navigator$1=globalThis_1$1.navigator,userAgent$2=navigator$1&&navigator$1.userAgent,environmentUserAgent$1=userAgent$2?String(userAgent$2):"",process$5=globalThis_1$1.process,Deno$2=globalThis_1$1.Deno,versions$1=process$5&&process$5.versions||Deno$2&&Deno$2.version,v8$1=versions$1&&versions$1.v8,match$1,version$1;v8$1&&(match$1=v8$1.split("."),version$1=match$1[0]>0&&match$1[0]<4?1:+(match$1[0]+match$1[1])),!version$1&&environmentUserAgent$1&&(match$1=environmentUserAgent$1.match(/Edge\/(\d+)/),(!match$1||match$1[1]>=74)&&(match$1=environmentUserAgent$1.match(/Chrome\/(\d+)/),match$1&&(version$1=+match$1[1])));var environmentV8Version$1=version$1,$String$9=globalThis_1$1.String,symbolConstructorDetection$1=!!Object.getOwnPropertySymbols&&!fails$2(function(){var e=Symbol("symbol detection");return!$String$9(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&environmentV8Version$1&&environmentV8Version$1<41}),useSymbolAsUid$1=symbolConstructorDetection$1&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,$Object$7=Object,isSymbol$2=useSymbolAsUid$1?function(e){return"symbol"==typeof e}:function(e){var t=getBuiltIn$2("Symbol");return isCallable$2(t)&&objectIsPrototypeOf$1(t.prototype,$Object$7(e))},$String$8=String,tryToString$2=function(e){try{return $String$8(e)}catch(e){return"Object"}},$TypeError$r=TypeError,aCallable$2=function(e){if(isCallable$2(e))return e;throw new $TypeError$r(tryToString$2(e)+" is not a function")},getMethod$2=function(e,t){var r=e[t];return isNullOrUndefined$2(r)?void 0:aCallable$2(r)},$TypeError$q=TypeError,ordinaryToPrimitive$2=function(e,t){var r,n;if("string"===t&&isCallable$2(r=e.toString)&&!isObject$2(n=functionCall$1(r,e)))return n;if(isCallable$2(r=e.valueOf)&&!isObject$2(n=functionCall$1(r,e)))return n;if("string"!==t&&isCallable$2(r=e.toString)&&!isObject$2(n=functionCall$1(r,e)))return n;throw new $TypeError$q("Can't convert object to primitive value")},defineProperty$6=Object.defineProperty,defineGlobalProperty$2=function(e,t){try{defineProperty$6(globalThis_1$1,e,{value:t,configurable:!0,writable:!0})}catch(r){globalThis_1$1[e]=t}return t},sharedStore$1=createCommonjsModule(function(e){var t="__core-js_shared__",r=e.exports=globalThis_1$1[t]||defineGlobalProperty$2(t,{});(r.versions||(r.versions=[])).push({version:"3.50.0",mode:"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),create$2=Object.create||Object,shared$2=function(e,t){return sharedStore$1[e]||(sharedStore$1[e]=t||create$2(null))},$Object$6=Object,toObject$2=function(e){return $Object$6(requireObjectCoercible$2(e))},hasOwnProperty$1=functionUncurryThis$1({}.hasOwnProperty),hasOwnProperty_1$1=Object.hasOwn||function(e,t){return hasOwnProperty$1(toObject$2(e),t)},id$1=0,postfix$1=Math.random(),toString$6=functionUncurryThis$1(1.1.toString),uid$2=function(e){return"Symbol("+(void 0===e?"":e)+")_"+toString$6(++id$1+postfix$1,36)},Symbol$2=globalThis_1$1.Symbol,WellKnownSymbolsStore$1=shared$2("wks"),createWellKnownSymbol$1=useSymbolAsUid$1?Symbol$2.for||Symbol$2:Symbol$2&&Symbol$2.withoutSetter||uid$2,wellKnownSymbol$2=function(e){return hasOwnProperty_1$1(WellKnownSymbolsStore$1,e)||(WellKnownSymbolsStore$1[e]=symbolConstructorDetection$1&&hasOwnProperty_1$1(Symbol$2,e)?Symbol$2[e]:createWellKnownSymbol$1("Symbol."+e)),WellKnownSymbolsStore$1[e]},$TypeError$p=TypeError,TO_PRIMITIVE$1=wellKnownSymbol$2("toPrimitive"),toPrimitive$2=function(e,t){if(!isObject$2(e)||isSymbol$2(e))return e;var r,n=getMethod$2(e,TO_PRIMITIVE$1);if(n){if(void 0===t&&(t="default"),r=functionCall$1(n,e,t),!isObject$2(r)||isSymbol$2(r))return r;throw new $TypeError$p("Can't convert object to primitive value")}return void 0===t&&(t="number"),ordinaryToPrimitive$2(e,t)},toPropertyKey$2=function(e){var t=toPrimitive$2(e,"string");return isSymbol$2(t)?t:t+""},document$4=globalThis_1$1.document,EXISTS$3=isObject$2(document$4)&&isObject$2(document$4.createElement),documentCreateElement$1=function(e){return EXISTS$3?document$4.createElement(e):{}},ie8DomDefine$1=!descriptors$1&&!fails$2(function(){return 7!==Object.defineProperty(documentCreateElement$1("div"),"a",{get:function(){return 7}}).a}),$getOwnPropertyDescriptor$3=Object.getOwnPropertyDescriptor,f$c=descriptors$1?$getOwnPropertyDescriptor$3:function(e,t){if(e=toIndexedObject$2(e),t=toPropertyKey$2(t),ie8DomDefine$1)try{return $getOwnPropertyDescriptor$3(e,t)}catch(e){}if(hasOwnProperty_1$1(e,t))return createPropertyDescriptor$2(!functionCall$1(objectPropertyIsEnumerable$1.f,e,t),e[t])},objectGetOwnPropertyDescriptor$1={f:f$c},v8PrototypeDefineBug$1=descriptors$1&&fails$2(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),$String$7=String,$TypeError$o=TypeError,anObject$2=function(e){if(isObject$2(e))return e;throw new $TypeError$o($String$7(e)+" is not an object")},$TypeError$n=TypeError,$defineProperty$1=Object.defineProperty,$getOwnPropertyDescriptor$2=Object.getOwnPropertyDescriptor,ENUMERABLE$1="enumerable",CONFIGURABLE$3="configurable",WRITABLE$1="writable",f$b=descriptors$1?v8PrototypeDefineBug$1?function(e,t,r){if(anObject$2(e),t=toPropertyKey$2(t),anObject$2(r),"function"==typeof e&&"prototype"===t&&"value"in r&&WRITABLE$1 in r&&!r[WRITABLE$1]){var n=$getOwnPropertyDescriptor$2(e,t);n&&n[WRITABLE$1]&&(e[t]=r.value,r={configurable:CONFIGURABLE$3 in r?r[CONFIGURABLE$3]:n[CONFIGURABLE$3],enumerable:ENUMERABLE$1 in r?r[ENUMERABLE$1]:n[ENUMERABLE$1],writable:!1})}return $defineProperty$1(e,t,r)}:$defineProperty$1:function(e,t,r){if(anObject$2(e),t=toPropertyKey$2(t),anObject$2(r),ie8DomDefine$1)try{return $defineProperty$1(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new $TypeError$n("Accessors not supported");return"value"in r&&(e[t]=r.value),e},objectDefineProperty$1={f:f$b},createNonEnumerableProperty$2=descriptors$1?function(e,t,r){return objectDefineProperty$1.f(e,t,createPropertyDescriptor$2(1,r))}:function(e,t,r){return e[t]=r,e},FunctionPrototype$4=Function.prototype,getDescriptor$1=descriptors$1&&Object.getOwnPropertyDescriptor,EXISTS$2=hasOwnProperty_1$1(FunctionPrototype$4,"name"),PROPER$1=EXISTS$2&&"something"===function(){}.name,CONFIGURABLE$2=EXISTS$2&&(!descriptors$1||descriptors$1&&getDescriptor$1(FunctionPrototype$4,"name").configurable),functionName$1={EXISTS:EXISTS$2,PROPER:PROPER$1,CONFIGURABLE:CONFIGURABLE$2},functionToString$1=functionUncurryThis$1(Function.toString);isCallable$2(sharedStore$1.inspectSource)||(sharedStore$1.inspectSource=function(e){return functionToString$1(e)});var inspectSource$2=sharedStore$1.inspectSource,WeakMap$4=globalThis_1$1.WeakMap,weakMapBasicDetection$1=isCallable$2(WeakMap$4)&&/native code/.test(String(WeakMap$4)),keys$5=shared$2("keys"),sharedKey$2=function(e){return keys$5[e]||(keys$5[e]=uid$2(e))},hiddenKeys$4={},OBJECT_ALREADY_INITIALIZED$1="Object already initialized",TypeError$3=globalThis_1$1.TypeError,WeakMap$3=globalThis_1$1.WeakMap,set$2,get$1,has$2,enforce$1=function(e){return has$2(e)?get$1(e):set$2(e,{})},getterFor$1=function(e){return function(t){var r;if(!isObject$2(t)||(r=get$1(t)).type!==e)throw new TypeError$3("Incompatible receiver, "+e+" required");return r}};if(weakMapBasicDetection$1||sharedStore$1.state){var store$2=sharedStore$1.state||(sharedStore$1.state=new WeakMap$3);store$2.get=store$2.get,store$2.has=store$2.has,store$2.set=store$2.set,set$2=function(e,t){if(store$2.has(e))throw new TypeError$3(OBJECT_ALREADY_INITIALIZED$1);return t.facade=e,store$2.set(e,t),t},get$1=function(e){return store$2.get(e)||{}},has$2=function(e){return store$2.has(e)}}else{var STATE$1=sharedKey$2("state");hiddenKeys$4[STATE$1]=!0,set$2=function(e,t){if(hasOwnProperty_1$1(e,STATE$1))throw new TypeError$3(OBJECT_ALREADY_INITIALIZED$1);return t.facade=e,createNonEnumerableProperty$2(e,STATE$1,t),t},get$1=function(e){return hasOwnProperty_1$1(e,STATE$1)?e[STATE$1]:{}},has$2=function(e){return hasOwnProperty_1$1(e,STATE$1)}}var internalState$1={set:set$2,get:get$1,has:has$2,enforce:enforce$1,getterFor:getterFor$1},makeBuiltIn_1=createCommonjsModule(function(e){var t=functionName$1.CONFIGURABLE,r=internalState$1.enforce,n=internalState$1.get,i=String,o=Object.defineProperty,a=functionUncurryThis$1("".slice),s=functionUncurryThis$1("".replace),l=functionUncurryThis$1([].join),c=descriptors$1&&!fails$2(function(){return 8!==o(function(){},"length",{value:8}).length}),u=String(String).split("String"),d=e.exports=function(e,n,d){"Symbol("===a(i(n),0,7)&&(n="["+s(i(n),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),d&&d.getter&&(n="get "+n),d&&d.setter&&(n="set "+n),(!hasOwnProperty_1$1(e,"name")||t&&e.name!==n)&&(descriptors$1?o(e,"name",{value:n,configurable:!0}):e.name=n),c&&d&&hasOwnProperty_1$1(d,"arity")&&e.length!==d.arity&&o(e,"length",{value:d.arity});try{d&&hasOwnProperty_1$1(d,"constructor")&&d.constructor?descriptors$1&&o(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var g=r(e);return hasOwnProperty_1$1(g,"source")||(g.source=l(u,"string"==typeof n?n:"")),e};Function.prototype.toString=d(function(){return isCallable$2(this)&&n(this).source||inspectSource$2(this)},"toString")}),defineBuiltIn$2=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(isCallable$2(r)&&makeBuiltIn_1(r,o,n),n.global)i?e[t]=r:defineGlobalProperty$2(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:objectDefineProperty$1.f(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e},ceil$2=Math.ceil,floor$4=Math.floor,mathTrunc$1=Math.trunc||function(e){var t=+e;return(t>0?floor$4:ceil$2)(t)},toIntegerOrInfinity$2=function(e){var t=+e;return t!=t||0===t?0:mathTrunc$1(t)},max$2=Math.max,min$4=Math.min,toAbsoluteIndex$2=function(e,t){var r=toIntegerOrInfinity$2(e);return r<0?max$2(r+t,0):min$4(r,t)},min$3=Math.min,toLength$2=function(e){var t=toIntegerOrInfinity$2(e);return t>0?min$3(t,9007199254740991):0},lengthOfArrayLike$2=function(e){return toLength$2(e.length)},createMethod$7=function(e){return function(t,r,n){var i=toIndexedObject$2(t),o=lengthOfArrayLike$2(i);if(0===o)return!e&&-1;var a,s=toAbsoluteIndex$2(n,o);if(e&&r!=r){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},arrayIncludes$1={includes:createMethod$7(!0),indexOf:createMethod$7(!1)},indexOf$5=arrayIncludes$1.indexOf,push$5=functionUncurryThis$1([].push),objectKeysInternal$1=function(e,t){var r,n=toIndexedObject$2(e),i=0,o=[];for(r in n)!hasOwnProperty_1$1(hiddenKeys$4,r)&&hasOwnProperty_1$1(n,r)&&push$5(o,r);for(;t.length>i;)hasOwnProperty_1$1(n,r=t[i++])&&(~indexOf$5(o,r)||push$5(o,r));return o},enumBugKeys$2=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys$3=enumBugKeys$2.concat("length","prototype"),f$a=Object.getOwnPropertyNames||function(e){return objectKeysInternal$1(e,hiddenKeys$3)},objectGetOwnPropertyNames$1={f:f$a},f$9=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols$1={f:f$9},concat$3=functionUncurryThis$1([].concat),ownKeys$2=getBuiltIn$2("Reflect","ownKeys")||function(e){var t=objectGetOwnPropertyNames$1.f(anObject$2(e)),r=objectGetOwnPropertySymbols$1.f;return r?concat$3(t,r(e)):t},copyConstructorProperties$2=function(e,t,r){for(var n=ownKeys$2(t),i=objectDefineProperty$1.f,o=objectGetOwnPropertyDescriptor$1.f,a=0;a<n.length;a++){var s=n[a];hasOwnProperty_1$1(e,s)||r&&hasOwnProperty_1$1(r,s)||i(e,s,o(t,s))}},replacement$1=/#|\.prototype\./,isForced$2=function(e,t){var r=data$1[normalize$1(e)];return r===POLYFILL$1||r!==NATIVE$1&&(isCallable$2(t)?fails$2(t):!!t)},normalize$1=isForced$2.normalize=function(e){return String(e).replace(replacement$1,".").toLowerCase()},data$1=isForced$2.data={},NATIVE$1=isForced$2.NATIVE="N",POLYFILL$1=isForced$2.POLYFILL="P",isForced_1$1=isForced$2,getOwnPropertyDescriptor$4=objectGetOwnPropertyDescriptor$1.f,_export$1=function(e,t){var r,n,i,o,a,s=e.target,l=e.global,c=e.stat;if(r=l?globalThis_1$1:c?globalThis_1$1[s]||defineGlobalProperty$2(s,{}):globalThis_1$1[s]&&globalThis_1$1[s].prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(a=getOwnPropertyDescriptor$4(r,n))&&a.value:r[n],!isForced_1$1(l?n:s+(c?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;copyConstructorProperties$2(o,i)}(e.sham||i&&i.sham)&&createNonEnumerableProperty$2(o,"sham",!0),defineBuiltIn$2(r,n,o,e)}},arraySlice$1=functionUncurryThis$1([].slice),$getOwnPropertyNames=objectGetOwnPropertyNames$1.f,windowNames="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],getWindowNames=function(e){try{return $getOwnPropertyNames(e)}catch(e){return arraySlice$1(windowNames)}},f$8=function(e){return windowNames&&"Window"===classofRaw$1(e)?getWindowNames(e):$getOwnPropertyNames(toIndexedObject$2(e))},objectGetOwnPropertyNamesExternal={f:f$8},arrayBufferNonExtensible=fails$2(function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}),$isExtensible=Object.isExtensible,FAILS_ON_PRIMITIVES$1=fails$2(function(){$isExtensible(1)}),objectIsExtensible=FAILS_ON_PRIMITIVES$1||arrayBufferNonExtensible?function(e){return!!isObject$2(e)&&((!arrayBufferNonExtensible||"ArrayBuffer"!==classofRaw$1(e))&&(!$isExtensible||$isExtensible(e)))}:$isExtensible,freezing=!fails$2(function(){return Object.isExtensible(Object.preventExtensions({}))}),internalMetadata=createCommonjsModule(function(e){var t=objectDefineProperty$1.f,r=!1,n=uid$2("meta"),i=0,o=function(e){t(e,n,{value:{objectID:"O"+i++,weakData:{}}})},a=e.exports={enable:function(){a.enable=function(){},r=!0;var e=objectGetOwnPropertyNames$1.f,t=functionUncurryThis$1([].splice),i={};i[n]=1,e(i).length&&(objectGetOwnPropertyNames$1.f=function(r){for(var i=e(r),o=0,a=i.length;o<a;o++)if(i[o]===n){t(i,o,1);break}return i},_export$1({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:objectGetOwnPropertyNamesExternal.f}))},fastKey:function(e,t){if(!isObject$2(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!hasOwnProperty_1$1(e,n)){if(!objectIsExtensible(e))return"F";if(!t)return"E";o(e)}return e[n].objectID},getWeakData:function(e,t){if(!hasOwnProperty_1$1(e,n)){if(!objectIsExtensible(e))return!0;if(!t)return!1;o(e)}return e[n].weakData},onFreeze:function(e){return freezing&&r&&objectIsExtensible(e)&&!hasOwnProperty_1$1(e,n)&&o(e),e}};hiddenKeys$4[n]=!0}),functionUncurryThisClause$1=function(e){if("Function"===classofRaw$1(e))return functionUncurryThis$1(e)},bind$8=functionUncurryThisClause$1(functionUncurryThisClause$1.bind),functionBindContext$1=function(e,t){return aCallable$2(e),void 0===t?e:functionBindNative$1?bind$8(e,t):function(){return e.apply(t,arguments)}},iterators$1=Object.create?Object.create(null):{},ITERATOR$9=wellKnownSymbol$2("iterator"),ArrayPrototype$e=Array.prototype,isArrayIteratorMethod$2=function(e){return void 0!==e&&(iterators$1.Array===e||ArrayPrototype$e[ITERATOR$9]===e)},ITERATOR$8=wellKnownSymbol$2("iterator"),ArrayPrototype$d=Array.prototype,getIteratorMethodInternal$1=function(e){if(!isNullOrUndefined$2(e))return getMethod$2(e,ITERATOR$8)||getMethod$2(e,"@@iterator")||("Arguments"===classofRaw$1(e)?ArrayPrototype$d[ITERATOR$8]:void 0)},$TypeError$m=TypeError,getIteratorInternal$1=function(e,t){var r=arguments.length<2?getIteratorMethodInternal$1(e):t;if(isCallable$2(r))return anObject$2(functionCall$1(r,e));throw new $TypeError$m(tryToString$2(e)+" is not iterable")},iteratorClose$2=function(e,t,r){var n,i;anObject$2(e);try{if(!(n=getMethod$2(e,"return"))){if("throw"===t)throw r;return r}n=functionCall$1(n,e)}catch(e){i=!0,n=e}if("throw"===t)throw r;if(i)throw n;return anObject$2(n),r},$TypeError$l=TypeError,Result$1=function(e,t){this.stopped=e,this.result=t},ResultPrototype$1=Result$1.prototype,iterate$2=function(e,t,r){var n,i,o,a,s,l,c,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),g=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),f=functionBindContext$1(t,u),y=function(e){var t=n;return n=void 0,t&&iteratorClose$2(t,"normal"),new Result$1(!0,e)},$=function(e){return d?(anObject$2(e),h?f(e[0],e[1],y):f(e[0],e[1])):h?f(e,y):f(e)};if(g)n=e.iterator;else if(p)n=e;else{if(!(i=getIteratorMethodInternal$1(e)))throw new $TypeError$l(tryToString$2(e)+" is not iterable");if(isArrayIteratorMethod$2(i)){for(o=0,a=lengthOfArrayLike$2(e);a>o;o++)if((s=$(e[o]))&&objectIsPrototypeOf$1(ResultPrototype$1,s))return s;return new Result$1(!1)}n=getIteratorInternal$1(e,i)}for(l=g?e.next:n.next;!(c=functionCall$1(l,n)).done;){var w=c.value;try{s=$(w)}catch(e){if(!n)throw e;iteratorClose$2(n,"throw",e)}if("object"==typeof s&&s&&objectIsPrototypeOf$1(ResultPrototype$1,s))return s}return new Result$1(!1)},$TypeError$k=TypeError,anInstance$2=function(e,t){if(objectIsPrototypeOf$1(t,e))return e;throw new $TypeError$k("Incorrect invocation")},ITERATOR$7=wellKnownSymbol$2("iterator"),SAFE_CLOSING$1=!1;try{var called$1=0,iteratorWithReturn$1={next:function(){return{done:!!called$1++}},return:function(){SAFE_CLOSING$1=!0}};iteratorWithReturn$1[ITERATOR$7]=function(){return this},Array.from(iteratorWithReturn$1,function(){throw 2})}catch(e){}var checkCorrectnessOfIteration$2=function(e,t){try{if(!t&&!SAFE_CLOSING$1)return!1}catch(e){return!1}var r=!1;try{var n={};n[ITERATOR$7]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r},defineProperty$5=objectDefineProperty$1.f,TO_STRING_TAG$4=wellKnownSymbol$2("toStringTag"),setToStringTag$2=function(e,t,r){e&&!r&&(e=e.prototype),e&&!hasOwnProperty_1$1(e,TO_STRING_TAG$4)&&defineProperty$5(e,TO_STRING_TAG$4,{configurable:!0,value:t})},functionUncurryThisAccessor$1=function(e,t,r){try{return functionUncurryThis$1(aCallable$2(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}},isPossiblePrototype$2=function(e){return isObject$2(e)||null===e},$String$6=String,$TypeError$j=TypeError,aPossiblePrototype$2=function(e){if(isPossiblePrototype$2(e))return e;throw new $TypeError$j("Can't set "+$String$6(e)+" as a prototype")},objectSetPrototypeOf$1=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=functionUncurryThisAccessor$1(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return requireObjectCoercible$2(r),aPossiblePrototype$2(n),isObject$2(r)?(t?e(r,n):r.__proto__=n,r):r}}():void 0),inheritIfRequired=function(e,t,r){var n,i;return objectSetPrototypeOf$1&&isCallable$2(n=t.constructor)&&n!==r&&isObject$2(i=n.prototype)&&i!==r.prototype&&objectSetPrototypeOf$1(e,i),e},collection=function(e,t,r){var n=-1!==e.indexOf("Map"),i=-1!==e.indexOf("Weak"),o=n?"set":"add",a=globalThis_1$1[e],s=a&&a.prototype,l=a,c={},u=function(e){var t=functionUncurryThis$1(s[e]);defineBuiltIn$2(s,e,"add"===e?function(e){return t(this,0===e?0:e),this}:"delete"===e?function(e){return!(i&&!isObject$2(e))&&t(this,0===e?0:e)}:"get"===e?function(e){return i&&!isObject$2(e)?void 0:t(this,0===e?0:e)}:"has"===e?function(e){return!(i&&!isObject$2(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(isForced_1$1(e,!isCallable$2(a)||!(i||s.forEach&&!fails$2(function(){(new a).entries().next()}))))l=r.getConstructor(t,e,n,o),internalMetadata.enable();else if(isForced_1$1(e,!0)){var d=new l,g=d[o](i?{}:-0,1)!==d,p=fails$2(function(){d.has(1)}),h=checkCorrectnessOfIteration$2(function(e){new a(e)}),f=!i&&fails$2(function(){for(var e=new a,t=5;t--;)e[o](t,t);return!e.has(-0)});h||((l=t(function(e,t){anInstance$2(e,s);var r=inheritIfRequired(new a,e,l);return isNullOrUndefined$2(t)||iterate$2(t,r[o],{that:r,AS_ENTRIES:n}),r})).prototype=s,s.constructor=l),(p||f)&&(u("delete"),u("has"),n&&u("get")),(f||g)&&u(o),i&&s.clear&&delete s.clear}return c[e]=l,_export$1({global:!0,constructor:!0,forced:l!==a},c),setToStringTag$2(l,e),i||r.setStrong(l,e,n),l},objectKeys$1=Object.keys||function(e){return objectKeysInternal$1(e,enumBugKeys$2)},f$7=descriptors$1&&!v8PrototypeDefineBug$1?Object.defineProperties:function(e,t){anObject$2(e);for(var r,n=toIndexedObject$2(t),i=objectKeys$1(t),o=i.length,a=0;o>a;)objectDefineProperty$1.f(e,r=i[a++],n[r]);return e},objectDefineProperties$1={f:f$7},html$2=getBuiltIn$2("document","documentElement"),GT$1=">",LT$1="<",PROTOTYPE$1="prototype",SCRIPT$1="script",IE_PROTO$3=sharedKey$2("IE_PROTO"),EmptyConstructor$1=function(){},scriptTag$1=function(e){return LT$1+SCRIPT$1+GT$1+e+LT$1+"/"+SCRIPT$1+GT$1},NullProtoObjectViaActiveX$1=function(e){e.write(scriptTag$1("")),e.close();var t=e.parentWindow.Object;return e=null,t},NullProtoObjectViaIFrame$1=function(){var e,t=documentCreateElement$1("iframe"),r="java"+SCRIPT$1+":";return t.style.display="none",html$2.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(scriptTag$1("document.F=Object")),e.close(),e.F},activeXDocument$1,NullProtoObject$1=function(){try{activeXDocument$1=new ActiveXObject("htmlfile")}catch(e){}NullProtoObject$1="undefined"!=typeof document?document.domain&&activeXDocument$1?NullProtoObjectViaActiveX$1(activeXDocument$1):NullProtoObjectViaIFrame$1():NullProtoObjectViaActiveX$1(activeXDocument$1);for(var e=enumBugKeys$2.length;e--;)delete NullProtoObject$1[PROTOTYPE$1][enumBugKeys$2[e]];return NullProtoObject$1()};hiddenKeys$4[IE_PROTO$3]=!0;var objectCreate$1=Object.create||function(e,t){var r;return null!==e?(EmptyConstructor$1[PROTOTYPE$1]=anObject$2(e),r=new EmptyConstructor$1,EmptyConstructor$1[PROTOTYPE$1]=null,r[IE_PROTO$3]=e):r=NullProtoObject$1(),void 0===t?r:objectDefineProperties$1.f(r,t)},defineBuiltInAccessor$2=function(e,t,r){return r.get&&makeBuiltIn_1(r.get,t,{getter:!0}),r.set&&makeBuiltIn_1(r.set,t,{setter:!0}),objectDefineProperty$1.f(e,t,r)},defineBuiltIns=function(e,t,r){for(var n in t)defineBuiltIn$2(e,n,t[n],r);return e},correctPrototypeGetter$1=!fails$2(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),IE_PROTO$2=sharedKey$2("IE_PROTO"),$Object$5=Object,ObjectPrototype$1=$Object$5.prototype,objectGetPrototypeOf$1=correctPrototypeGetter$1?$Object$5.getPrototypeOf:function(e){var t=toObject$2(e);if(hasOwnProperty_1$1(t,IE_PROTO$2))return t[IE_PROTO$2];var r=t.constructor;return isCallable$2(r)&&t instanceof r?r.prototype:t instanceof $Object$5?ObjectPrototype$1:null},ITERATOR$6=wellKnownSymbol$2("iterator"),BUGGY_SAFARI_ITERATORS$3=!1,IteratorPrototype$5,PrototypeOfArrayIteratorPrototype$1,arrayIterator$1;[].keys&&(arrayIterator$1=[].keys(),"next"in arrayIterator$1?(PrototypeOfArrayIteratorPrototype$1=objectGetPrototypeOf$1(objectGetPrototypeOf$1(arrayIterator$1)),PrototypeOfArrayIteratorPrototype$1!==Object.prototype&&(IteratorPrototype$5=PrototypeOfArrayIteratorPrototype$1)):BUGGY_SAFARI_ITERATORS$3=!0);var NEW_ITERATOR_PROTOTYPE$1=!isObject$2(IteratorPrototype$5)||fails$2(function(){var e={};return IteratorPrototype$5[ITERATOR$6].call(e)!==e});NEW_ITERATOR_PROTOTYPE$1&&(IteratorPrototype$5={}),isCallable$2(IteratorPrototype$5[ITERATOR$6])||defineBuiltIn$2(IteratorPrototype$5,ITERATOR$6,function(){return this});var iteratorsCore$1={IteratorPrototype:IteratorPrototype$5,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS$3},IteratorPrototype$4=iteratorsCore$1.IteratorPrototype,returnThis$3=function(){return this},iteratorCreateConstructor$1=function(e,t,r,n){var i=t+" Iterator";return e.prototype=objectCreate$1(IteratorPrototype$4,{next:createPropertyDescriptor$2(+!n,r)}),setToStringTag$2(e,i,!1),iterators$1[i]=returnThis$3,e},PROPER_FUNCTION_NAME$2=functionName$1.PROPER,CONFIGURABLE_FUNCTION_NAME$1=functionName$1.CONFIGURABLE,IteratorPrototype$3=iteratorsCore$1.IteratorPrototype,BUGGY_SAFARI_ITERATORS$2=iteratorsCore$1.BUGGY_SAFARI_ITERATORS,ITERATOR$5=wellKnownSymbol$2("iterator"),KEYS$1="keys",VALUES$1="values",ENTRIES$1="entries",returnThis$2=function(){return this},iteratorDefine$1=function(e,t,r,n,i,o,a){iteratorCreateConstructor$1(r,t,n);var s,l,c,u=function(e){if(e===i&&f)return f;if(!BUGGY_SAFARI_ITERATORS$2&&e&&e in p)return p[e];switch(e){case KEYS$1:case VALUES$1:case ENTRIES$1:return function(){return new r(this,e)}}return function(){return new r(this)}},d=t+" Iterator",g=!1,p=e.prototype,h=p[ITERATOR$5]||p["@@iterator"]||i&&p[i],f=!BUGGY_SAFARI_ITERATORS$2&&h||u(i),y="Array"===t&&p.entries||h;if(y&&(s=objectGetPrototypeOf$1(y.call(new e)))!==Object.prototype&&s.next&&(objectGetPrototypeOf$1(s)!==IteratorPrototype$3&&(objectSetPrototypeOf$1?objectSetPrototypeOf$1(s,IteratorPrototype$3):isCallable$2(s[ITERATOR$5])||defineBuiltIn$2(s,ITERATOR$5,returnThis$2)),setToStringTag$2(s,d,!0)),PROPER_FUNCTION_NAME$2&&i===VALUES$1&&h&&h.name!==VALUES$1&&(CONFIGURABLE_FUNCTION_NAME$1?createNonEnumerableProperty$2(p,"name",VALUES$1):(g=!0,f=function(){return functionCall$1(h,this)})),i)if(l={values:u(VALUES$1),keys:o?f:u(KEYS$1),entries:u(ENTRIES$1)},a)for(c in l)(BUGGY_SAFARI_ITERATORS$2||g||!(c in p))&&defineBuiltIn$2(p,c,l[c]);else _export$1({target:t,proto:!0,forced:BUGGY_SAFARI_ITERATORS$2||g},l);return p[ITERATOR$5]!==f&&defineBuiltIn$2(p,ITERATOR$5,f,{name:i}),iterators$1[t]=f,l},createIterResultObject$2=function(e,t){return{value:e,done:t}},SPECIES$5=wellKnownSymbol$2("species"),setSpecies$2=function(e){var t=getBuiltIn$2(e);descriptors$1&&t&&!t[SPECIES$5]&&defineBuiltInAccessor$2(t,SPECIES$5,{configurable:!0,get:function(){return this}})},fastKey=internalMetadata.fastKey,setInternalState$3=internalState$1.set,internalStateGetterFor=internalState$1.getterFor,collectionStrong={getConstructor:function(e,t,r,n){var i=e(function(e,i){anInstance$2(e,o),setInternalState$3(e,{type:t,index:objectCreate$1(null),first:null,last:null,size:0}),descriptors$1||(e.size=0),isNullOrUndefined$2(i)||iterate$2(i,e[n],{that:e,AS_ENTRIES:r})}),o=i.prototype,a=internalStateGetterFor(t),s=function(e,t,r){var n,i,o=a(e),s=l(e,t);return s?s.value=r:(o.last=s={index:i=fastKey(t,!0),key:t,value:r,previous:n=o.last,next:null,removed:!1},o.first||(o.first=s),n&&(n.next=s),descriptors$1?o.size++:e.size++,"F"!==i&&(o.index[i]=s)),e},l=function(e,t){var r,n=a(e),i=fastKey(t);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key===t)return r};return defineBuiltIns(o,{clear:function(){for(var e=a(this),t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=null),t=t.next;e.first=e.last=null,e.index=objectCreate$1(null),descriptors$1?e.size=0:this.size=0},delete:function(e){var t=this,r=a(t),n=l(t,e);if(n){var i=n.next,o=n.previous;delete r.index[n.index],n.removed=!0,o&&(o.next=i),i&&(i.previous=o),r.first===n&&(r.first=i),r.last===n&&(r.last=o),descriptors$1?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=a(this),n=functionBindContext$1(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!l(this,e)}}),defineBuiltIns(o,r?{get:function(e){var t=l(this,e);return t&&t.value},set:function(e,t){return s(this,0===e?0:e,t)}}:{add:function(e){return s(this,e=0===e?0:e,e)}}),descriptors$1&&defineBuiltInAccessor$2(o,"size",{configurable:!0,get:function(){return a(this).size}}),i},setStrong:function(e,t,r){var n=t+" Iterator",i=internalStateGetterFor(t),o=internalStateGetterFor(n);iteratorDefine$1(e,t,function(e,t){setInternalState$3(this,{type:n,target:e,state:i(e),kind:t,last:null})},function(){for(var e=o(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?createIterResultObject$2("keys"===t?r.key:"values"===t?r.value:[r.key,r.value],!1):(e.target=null,createIterResultObject$2(void 0,!0))},r?"entries":"values",!r,!0),setSpecies$2(t)}};collection("Set",function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},collectionStrong);var SetPrototype$1=Set.prototype,setHelpers={Set:Set,add:functionUncurryThis$1(SetPrototype$1.add),has:functionUncurryThis$1(SetPrototype$1.has),remove:functionUncurryThis$1(SetPrototype$1.delete),proto:SetPrototype$1},has$1=setHelpers.has,aSet=function(e){return has$1(e),e},iterateSimple=function(e,t,r){for(var n,i,o=r?e:e.iterator,a=e.next;!(n=functionCall$1(a,o)).done;)if(void 0!==(i=t(n.value)))return i},Set$2=setHelpers.Set,SetPrototype=setHelpers.proto,forEach$5=functionUncurryThis$1(SetPrototype.forEach),keys$4=functionUncurryThis$1(SetPrototype.keys),next=keys$4(new Set$2).next,setIterate=function(e,t,r){return r?iterateSimple({iterator:keys$4(e),next:next},t):forEach$5(e,t)},Set$1=setHelpers.Set,add=setHelpers.add;_export$1({target:"Set",proto:!0,real:!0,forced:!0},{map:function(e){var t=aSet(this),r=functionBindContext$1(e,arguments.length>1?arguments[1]:void 0),n=new Set$1;return setIterate(t,function(e){add(n,r(e,e,t))}),n}});var entryUnbind=function(e,t){return functionUncurryThis$1(globalThis_1$1[e].prototype[t])},Reflect$1;entryUnbind("Set","map"),function(e){!function(){var t="object"==typeof commonjsGlobal?commonjsGlobal:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=n(e);function n(e,t){return function(r,n){"function"!=typeof e[r]&&Object.defineProperty(e,r,{configurable:!0,writable:!0,value:n}),t&&t(r,n)}}void 0===t.Reflect?t.Reflect=e:r=n(t.Reflect,r),function(e){var t=Object.prototype.hasOwnProperty,r="function"==typeof Symbol,n=r&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",i=r&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,a={__proto__:[]}instanceof Array,s=!o&&!a,l={create:o?function(){return ne(Object.create(null))}:a?function(){return ne({__proto__:null})}:function(){return ne({})},has:s?function(e,r){return t.call(e,r)}:function(e,t){return t in e},get:s?function(e,r){return t.call(e,r)?e[r]:void 0}:function(e,t){return e[t]}},c=Object.getPrototypeOf(Function),u="object"==typeof process&&process.env&&"true"===process.env.REFLECT_METADATA_USE_MAP_POLYFILL,d=u||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?ee():Map,g=u||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?te():Set,p=new(u||"function"!=typeof WeakMap?re():WeakMap);function h(e,t,r,n){if(M(r)){if(!G(e))throw new TypeError;if(!J(t))throw new TypeError;return A(e,t)}if(!G(e))throw new TypeError;if(!B(t))throw new TypeError;if(!B(n)&&!M(n)&&!j(n))throw new TypeError;return j(n)&&(n=void 0),E(e,t,r=V(r),n)}function f(e,t){function r(r,n){if(!B(r))throw new TypeError;if(!M(n)&&!q(n))throw new TypeError;R(e,t,r,n)}return r}function y(e,t,r,n){if(!B(r))throw new TypeError;return M(n)||(n=V(n)),R(e,t,r,n)}function $(e,t,r){if(!B(t))throw new TypeError;return M(r)||(r=V(r)),I(e,t,r)}function w(e,t,r){if(!B(t))throw new TypeError;return M(r)||(r=V(r)),C(e,t,r)}function m(e,t,r){if(!B(t))throw new TypeError;return M(r)||(r=V(r)),O(e,t,r)}function b(e,t,r){if(!B(t))throw new TypeError;return M(r)||(r=V(r)),P(e,t,r)}function v(e,t){if(!B(e))throw new TypeError;return M(t)||(t=V(t)),x(e,t)}function T(e,t){if(!B(e))throw new TypeError;return M(t)||(t=V(t)),k(e,t)}function _(e,t,r){if(!B(t))throw new TypeError;M(r)||(r=V(r));var n=S(t,r,!1);if(M(n))return!1;if(!n.delete(e))return!1;if(n.size>0)return!0;var i=p.get(t);return i.delete(r),i.size>0||p.delete(t),!0}function A(e,t){for(var r=e.length-1;r>=0;--r){var n=(0,e[r])(t);if(!M(n)&&!j(n)){if(!J(n))throw new TypeError;t=n}}return t}function E(e,t,r,n){for(var i=e.length-1;i>=0;--i){var o=(0,e[i])(t,r,n);if(!M(o)&&!j(o)){if(!B(o))throw new TypeError;n=o}}return n}function S(e,t,r){var n=p.get(e);if(M(n)){if(!r)return;n=new d,p.set(e,n)}var i=n.get(t);if(M(i)){if(!r)return;i=new d,n.set(t,i)}return i}function I(e,t,r){if(C(e,t,r))return!0;var n=Z(t);return!j(n)&&I(e,n,r)}function C(e,t,r){var n=S(t,r,!1);return!M(n)&&F(n.has(e))}function O(e,t,r){if(C(e,t,r))return P(e,t,r);var n=Z(t);return j(n)?void 0:O(e,n,r)}function P(e,t,r){var n=S(t,r,!1);if(!M(n))return n.get(e)}function R(e,t,r,n){S(r,n,!0).set(e,t)}function x(e,t){var r=k(e,t),n=Z(e);if(null===n)return r;var i=x(n,t);if(i.length<=0)return r;if(r.length<=0)return i;for(var o=new g,a=[],s=0,l=r;s<l.length;s++){var c=l[s];o.has(c)||(o.add(c),a.push(c))}for(var u=0,d=i;u<d.length;u++){c=d[u];o.has(c)||(o.add(c),a.push(c))}return a}function k(e,t){var r=[],n=S(e,t,!1);if(M(n))return r;for(var i=Q(n.keys()),o=0;;){var a=z(i);if(!a)return r.length=o,r;var s=Y(a);try{r[o]=s}catch(e){try{X(i)}finally{throw e}}o++}}function N(e){if(null===e)return 1;switch(typeof e){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===e?1:6;default:return 6}}function M(e){return void 0===e}function j(e){return null===e}function D(e){return"symbol"==typeof e}function B(e){return"object"==typeof e?null!==e:"function"==typeof e}function L(e,t){switch(N(e)){case 0:case 1:case 2:case 3:case 4:case 5:return e}var r=3===t?"string":5===t?"number":"default",i=H(e,n);if(void 0!==i){var o=i.call(e,r);if(B(o))throw new TypeError;return o}return W(e,"default"===r?"number":r)}function W(e,t){if("string"===t){var r=e.toString;if(K(r))if(!B(i=r.call(e)))return i;if(K(n=e.valueOf))if(!B(i=n.call(e)))return i}else{var n;if(K(n=e.valueOf))if(!B(i=n.call(e)))return i;var i,o=e.toString;if(K(o))if(!B(i=o.call(e)))return i}throw new TypeError}function F(e){return!!e}function U(e){return""+e}function V(e){var t=L(e,3);return D(t)?t:U(t)}function G(e){return Array.isArray?Array.isArray(e):e instanceof Object?e instanceof Array:"[object Array]"===Object.prototype.toString.call(e)}function K(e){return"function"==typeof e}function J(e){return"function"==typeof e}function q(e){switch(N(e)){case 3:case 4:return!0;default:return!1}}function H(e,t){var r=e[t];if(null!=r){if(!K(r))throw new TypeError;return r}}function Q(e){var t=H(e,i);if(!K(t))throw new TypeError;var r=t.call(e);if(!B(r))throw new TypeError;return r}function Y(e){return e.value}function z(e){var t=e.next();return!t.done&&t}function X(e){var t=e.return;t&&t.call(e)}function Z(e){var t=Object.getPrototypeOf(e);if("function"!=typeof e||e===c)return t;if(t!==c)return t;var r=e.prototype,n=r&&Object.getPrototypeOf(r);if(null==n||n===Object.prototype)return t;var i=n.constructor;return"function"!=typeof i||i===e?t:i}function ee(){var e={},t=[],r=function(){function e(e,t,r){this._index=0,this._keys=e,this._values=t,this._selector=r}return e.prototype["@@iterator"]=function(){return this},e.prototype[i]=function(){return this},e.prototype.next=function(){var e=this._index;if(e>=0&&e<this._keys.length){var r=this._selector(this._keys[e],this._values[e]);return e+1>=this._keys.length?(this._index=-1,this._keys=t,this._values=t):this._index++,{value:r,done:!1}}return{value:void 0,done:!0}},e.prototype.throw=function(e){throw this._index>=0&&(this._index=-1,this._keys=t,this._values=t),e},e.prototype.return=function(e){return this._index>=0&&(this._index=-1,this._keys=t,this._values=t),{value:e,done:!0}},e}();return function(){function t(){this._keys=[],this._values=[],this._cacheKey=e,this._cacheIndex=-2}return Object.defineProperty(t.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),t.prototype.has=function(e){return this._find(e,!1)>=0},t.prototype.get=function(e){var t=this._find(e,!1);return t>=0?this._values[t]:void 0},t.prototype.set=function(e,t){var r=this._find(e,!0);return this._values[r]=t,this},t.prototype.delete=function(t){var r=this._find(t,!1);if(r>=0){for(var n=this._keys.length,i=r+1;i<n;i++)this._keys[i-1]=this._keys[i],this._values[i-1]=this._values[i];return this._keys.length--,this._values.length--,t===this._cacheKey&&(this._cacheKey=e,this._cacheIndex=-2),!0}return!1},t.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=e,this._cacheIndex=-2},t.prototype.keys=function(){return new r(this._keys,this._values,n)},t.prototype.values=function(){return new r(this._keys,this._values,o)},t.prototype.entries=function(){return new r(this._keys,this._values,a)},t.prototype["@@iterator"]=function(){return this.entries()},t.prototype[i]=function(){return this.entries()},t.prototype._find=function(e,t){return this._cacheKey!==e&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=e)),this._cacheIndex<0&&t&&(this._cacheIndex=this._keys.length,this._keys.push(e),this._values.push(void 0)),this._cacheIndex},t}();function n(e,t){return e}function o(e,t){return t}function a(e,t){return[e,t]}}function te(){return function(){function e(){this._map=new d}return Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),e.prototype.has=function(e){return this._map.has(e)},e.prototype.add=function(e){return this._map.set(e,e),this},e.prototype.delete=function(e){return this._map.delete(e)},e.prototype.clear=function(){this._map.clear()},e.prototype.keys=function(){return this._map.keys()},e.prototype.values=function(){return this._map.values()},e.prototype.entries=function(){return this._map.entries()},e.prototype["@@iterator"]=function(){return this.keys()},e.prototype[i]=function(){return this.keys()},e}()}function re(){var e=16,r=l.create(),n=i();return function(){function e(){this._key=i()}return e.prototype.has=function(e){var t=o(e,!1);return void 0!==t&&l.has(t,this._key)},e.prototype.get=function(e){var t=o(e,!1);return void 0!==t?l.get(t,this._key):void 0},e.prototype.set=function(e,t){return o(e,!0)[this._key]=t,this},e.prototype.delete=function(e){var t=o(e,!1);return void 0!==t&&delete t[this._key]},e.prototype.clear=function(){this._key=i()},e}();function i(){var e;do{e="@@WeakMap@@"+c()}while(l.has(r,e));return r[e]=!0,e}function o(e,r){if(!t.call(e,n)){if(!r)return;Object.defineProperty(e,n,{value:l.create()})}return e[n]}function a(e,t){for(var r=0;r<t;++r)e[r]=255*Math.random()|0;return e}function s(e){return"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(e)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(e)):a(new Uint8Array(e),e):a(new Array(e),e)}function c(){var t=s(e);t[6]=79&t[6]|64,t[8]=191&t[8]|128;for(var r="",n=0;n<e;++n){var i=t[n];4!==n&&6!==n&&8!==n||(r+="-"),i<16&&(r+="0"),r+=i.toString(16).toLowerCase()}return r}}function ne(e){return e.__=void 0,delete e.__,e}e("decorate",h),e("metadata",f),e("defineMetadata",y),e("hasMetadata",$),e("hasOwnMetadata",w),e("getMetadata",m),e("getOwnMetadata",b),e("getMetadataKeys",v),e("getOwnMetadataKeys",T),e("deleteMetadata",_)}(r)}()}(Reflect$1||(Reflect$1={})),createCommonjsModule(function(e){var t=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof $?t:$,a=Object.create(o.prototype),s=new P(n||[]);return i(a,"_invoke",{value:S(e,r,s)}),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var g="suspendedStart",p="suspendedYield",h="executing",f="completed",y={};function $(){}function w(){}function m(){}var b={};c(b,a,function(){return this});var v=Object.getPrototypeOf,T=v&&v(v(R([])));T&&T!==r&&n.call(T,a)&&(b=T);var _=m.prototype=$.prototype=Object.create(b);function A(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){function r(i,o,a,s){var l=d(e[i],e,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(u).then(function(e){c.value=e,a(c)},function(e){return r("throw",e,a,s)})}s(l.arg)}var o;i(this,"_invoke",{value:function(e,n){function i(){return new t(function(t,i){r(e,n,t,i)})}return o=o?o.then(i,i):i()}})}function S(e,t,r){var n=g;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===i)throw o;return x()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=I(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===g)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=d(e,t,r);if("normal"===l.type){if(n=r.done?f:p,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}function I(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var o=d(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:x}}function x(){return{value:t,done:!0}}return w.prototype=m,i(_,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:w,configurable:!0}),w.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},A(E.prototype),c(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},A(_),c(_,l,"Generator"),c(_,a,function(){return this}),c(_,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=R,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}});var fails$1=function(e){try{return!!e()}catch(e){return!0}},fails=fails$1,functionBindNative=!fails(function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}),NATIVE_BIND=functionBindNative,FunctionPrototype$3=Function.prototype,call$3=FunctionPrototype$3.call,uncurryThisWithBind=NATIVE_BIND&&FunctionPrototype$3.bind.bind(call$3,call$3),functionUncurryThis=NATIVE_BIND?uncurryThisWithBind:function(e){return function(){return call$3.apply(e,arguments)}},uncurryThis$1=functionUncurryThis,objectIsPrototypeOf=uncurryThis$1({}.isPrototypeOf),check=function(e){return e&&e.Math===Math&&e},globalThis_1=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||check("object"==typeof commonjsGlobal&&commonjsGlobal)||function(){return this}()||Function("return this")(),FunctionPrototype$2=Function.prototype,apply$1=FunctionPrototype$2.apply,call$2=FunctionPrototype$2.call,functionApply="object"==typeof Reflect&&Reflect.apply||(NATIVE_BIND?call$2.bind(apply$1):function(){return call$2.apply(apply$1,arguments)}),toString$5=uncurryThis$1({}.toString),stringSlice$2=uncurryThis$1("".slice),classofRaw=function(e){return stringSlice$2(toString$5(e),8,-1)},classof$2=classofRaw,functionUncurryThisClause=function(e){if("Function"===classof$2(e))return uncurryThis$1(e)},documentAll="object"==typeof document&&document.all,isCallable$1=void 0===documentAll&&void 0!==documentAll?function(e){return"function"==typeof e||e===documentAll}:function(e){return"function"==typeof e},descriptors=!fails(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}),call$1=Function.prototype.call,functionCall=NATIVE_BIND?call$1.bind(call$1):function(){return call$1.apply(call$1,arguments)},$propertyIsEnumerable$1={}.propertyIsEnumerable,getOwnPropertyDescriptor$3=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor$3&&!$propertyIsEnumerable$1.call({1:2},1),f$6=NASHORN_BUG?function(e){var t=getOwnPropertyDescriptor$3(this,e);return!!t&&t.enumerable}:$propertyIsEnumerable$1,objectPropertyIsEnumerable={f:f$6},createPropertyDescriptor$1=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},$Object$4=Object,split=uncurryThis$1("".split),indexedObject=fails(function(){return!$Object$4("z").propertyIsEnumerable(0)})?function(e){return"String"===classof$2(e)?split(e,""):$Object$4(e)}:$Object$4,isNullOrUndefined$1=function(e){return null==e},isNullOrUndefined=isNullOrUndefined$1,$TypeError$i=TypeError,requireObjectCoercible$1=function(e){if(isNullOrUndefined(e))throw new $TypeError$i("Can't call method on "+e);return e},IndexedObject=indexedObject,requireObjectCoercible=requireObjectCoercible$1,toIndexedObject$1=function(e){return IndexedObject(requireObjectCoercible(e))},isCallable=isCallable$1,isObject$1=function(e){return"object"==typeof e?null!==e:isCallable(e)},path$1={},path=path$1,globalThis$1=globalThis_1,aFunction=function(e){return isCallable(e)?e:void 0},getBuiltIn$1=function(e,t){return arguments.length<2?aFunction(path[e])||aFunction(globalThis$1[e]):path[e]&&path[e][t]||globalThis$1[e]&&globalThis$1[e][t]},navigator=globalThis$1.navigator,userAgent$1=navigator&&navigator.userAgent,environmentUserAgent=userAgent$1?String(userAgent$1):"",userAgent=environmentUserAgent,process$4=globalThis$1.process,Deno$1=globalThis$1.Deno,versions=process$4&&process$4.versions||Deno$1&&Deno$1.version,v8=versions&&versions.v8,match,version;v8&&(match=v8.split("."),version=match[0]>0&&match[0]<4?1:+(match[0]+match[1])),!version&&userAgent&&(match=userAgent.match(/Edge\/(\d+)/),(!match||match[1]>=74)&&(match=userAgent.match(/Chrome\/(\d+)/),match&&(version=+match[1])));var environmentV8Version=version,CHROME_VERSION=environmentV8Version,$String$5=globalThis$1.String,symbolConstructorDetection=!!Object.getOwnPropertySymbols&&!fails(function(){var e=Symbol("symbol detection");return!$String$5(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&CHROME_VERSION&&CHROME_VERSION<41}),NATIVE_SYMBOL=symbolConstructorDetection,useSymbolAsUid=NATIVE_SYMBOL&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,getBuiltIn=getBuiltIn$1,isPrototypeOf=objectIsPrototypeOf,USE_SYMBOL_AS_UID=useSymbolAsUid,$Object$3=Object,isSymbol$1=USE_SYMBOL_AS_UID?function(e){return"symbol"==typeof e}:function(e){var t=getBuiltIn("Symbol");return isCallable(t)&&isPrototypeOf(t.prototype,$Object$3(e))},$String$4=String,tryToString$1=function(e){try{return $String$4(e)}catch(e){return"Object"}},tryToString=tryToString$1,$TypeError$h=TypeError,aCallable$1=function(e){if(isCallable(e))return e;throw new $TypeError$h(tryToString(e)+" is not a function")},aCallable=aCallable$1,getMethod$1=function(e,t){var r=e[t];return isNullOrUndefined(r)?void 0:aCallable(r)},call=functionCall,isObject=isObject$1,$TypeError$g=TypeError,ordinaryToPrimitive$1=function(e,t){var r,n;if("string"===t&&isCallable(r=e.toString)&&!isObject(n=call(r,e)))return n;if(isCallable(r=e.valueOf)&&!isObject(n=call(r,e)))return n;if("string"!==t&&isCallable(r=e.toString)&&!isObject(n=call(r,e)))return n;throw new $TypeError$g("Can't convert object to primitive value")},isPure=!0,defineProperty$4=Object.defineProperty,defineGlobalProperty$1=function(e,t){try{defineProperty$4(globalThis$1,e,{value:t,configurable:!0,writable:!0})}catch(r){globalThis$1[e]=t}return t},IS_PURE=isPure,defineGlobalProperty=defineGlobalProperty$1,sharedStore=createCommonjsModule(function(e){var t="__core-js_shared__",r=e.exports=globalThis$1[t]||defineGlobalProperty(t,{});(r.versions||(r.versions=[])).push({version:"3.50.0",mode:IS_PURE?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),store$1=sharedStore,create$1=Object.create||Object,shared$1=function(e,t){return store$1[e]||(store$1[e]=t||create$1(null))},$Object$2=Object,toObject$1=function(e){return $Object$2(requireObjectCoercible(e))},toObject=toObject$1,hasOwnProperty=uncurryThis$1({}.hasOwnProperty),hasOwnProperty_1=Object.hasOwn||function(e,t){return hasOwnProperty(toObject(e),t)},id=0,postfix=Math.random(),toString$4=uncurryThis$1(1.1.toString),uid$1=function(e){return"Symbol("+(void 0===e?"":e)+")_"+toString$4(++id+postfix,36)},shared=shared$1,hasOwn=hasOwnProperty_1,uid=uid$1,Symbol$1=globalThis$1.Symbol,WellKnownSymbolsStore=shared("wks"),createWellKnownSymbol=USE_SYMBOL_AS_UID?Symbol$1.for||Symbol$1:Symbol$1&&Symbol$1.withoutSetter||uid,wellKnownSymbol$1=function(e){return hasOwn(WellKnownSymbolsStore,e)||(WellKnownSymbolsStore[e]=NATIVE_SYMBOL&&hasOwn(Symbol$1,e)?Symbol$1[e]:createWellKnownSymbol("Symbol."+e)),WellKnownSymbolsStore[e]},isSymbol=isSymbol$1,getMethod=getMethod$1,ordinaryToPrimitive=ordinaryToPrimitive$1,wellKnownSymbol=wellKnownSymbol$1,$TypeError$f=TypeError,TO_PRIMITIVE=wellKnownSymbol("toPrimitive"),toPrimitive$1=function(e,t){if(!isObject(e)||isSymbol(e))return e;var r,n=getMethod(e,TO_PRIMITIVE);if(n){if(void 0===t&&(t="default"),r=call(n,e,t),!isObject(r)||isSymbol(r))return r;throw new $TypeError$f("Can't convert object to primitive value")}return void 0===t&&(t="number"),ordinaryToPrimitive(e,t)},toPrimitive=toPrimitive$1,toPropertyKey$1=function(e){var t=toPrimitive(e,"string");return isSymbol(t)?t:t+""},document$3=globalThis$1.document,EXISTS$1=isObject(document$3)&&isObject(document$3.createElement),documentCreateElement=function(e){return EXISTS$1?document$3.createElement(e):{}},DESCRIPTORS=descriptors,createElement=documentCreateElement,ie8DomDefine=!DESCRIPTORS&&!fails(function(){return 7!==Object.defineProperty(createElement("div"),"a",{get:function(){return 7}}).a}),require$$0$B=objectPropertyIsEnumerable,createPropertyDescriptor=createPropertyDescriptor$1,toIndexedObject=toIndexedObject$1,toPropertyKey=toPropertyKey$1,IE8_DOM_DEFINE=ie8DomDefine,$getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,f$5=DESCRIPTORS?$getOwnPropertyDescriptor$1:function(e,t){if(e=toIndexedObject(e),t=toPropertyKey(t),IE8_DOM_DEFINE)try{return $getOwnPropertyDescriptor$1(e,t)}catch(e){}if(hasOwn(e,t))return createPropertyDescriptor(!call(require$$0$B.f,e,t),e[t])},objectGetOwnPropertyDescriptor={f:f$5},replacement=/#|\.prototype\./,isForced$1=function(e,t){var r=data[normalize(e)];return r===POLYFILL||r!==NATIVE&&(isCallable(t)?fails(t):!!t)},normalize=isForced$1.normalize=function(e){return String(e).replace(replacement,".").toLowerCase()},data=isForced$1.data={},NATIVE=isForced$1.NATIVE="N",POLYFILL=isForced$1.POLYFILL="P",isForced_1=isForced$1,uncurryThis=functionUncurryThisClause,bind$7=uncurryThis(uncurryThis.bind),functionBindContext=function(e,t){return aCallable(e),void 0===t?e:NATIVE_BIND?bind$7(e,t):function(){return e.apply(t,arguments)}},v8PrototypeDefineBug=DESCRIPTORS&&fails(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype}),$String$3=String,$TypeError$e=TypeError,anObject$1=function(e){if(isObject(e))return e;throw new $TypeError$e($String$3(e)+" is not an object")},V8_PROTOTYPE_DEFINE_BUG=v8PrototypeDefineBug,anObject=anObject$1,$TypeError$d=TypeError,$defineProperty=Object.defineProperty,$getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,ENUMERABLE="enumerable",CONFIGURABLE$1="configurable",WRITABLE="writable",f$4=DESCRIPTORS?V8_PROTOTYPE_DEFINE_BUG?function(e,t,r){if(anObject(e),t=toPropertyKey(t),anObject(r),"function"==typeof e&&"prototype"===t&&"value"in r&&WRITABLE in r&&!r[WRITABLE]){var n=$getOwnPropertyDescriptor(e,t);n&&n[WRITABLE]&&(e[t]=r.value,r={configurable:CONFIGURABLE$1 in r?r[CONFIGURABLE$1]:n[CONFIGURABLE$1],enumerable:ENUMERABLE in r?r[ENUMERABLE]:n[ENUMERABLE],writable:!1})}return $defineProperty(e,t,r)}:$defineProperty:function(e,t,r){if(anObject(e),t=toPropertyKey(t),anObject(r),IE8_DOM_DEFINE)try{return $defineProperty(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new $TypeError$d("Accessors not supported");return"value"in r&&(e[t]=r.value),e},objectDefineProperty={f:f$4},defineProperty$3=objectDefineProperty,createNonEnumerableProperty$1=DESCRIPTORS?function(e,t,r){return defineProperty$3.f(e,t,createPropertyDescriptor(1,r))}:function(e,t,r){return e[t]=r,e},apply=functionApply,getOwnPropertyDescriptorModule=objectGetOwnPropertyDescriptor,isForced=isForced_1,bind$6=functionBindContext,createNonEnumerableProperty=createNonEnumerableProperty$1,getOwnPropertyDescriptor$2=getOwnPropertyDescriptorModule.f,wrapConstructor=function(e){var t=function(r,n,i){if(this instanceof t){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,n)}return new e(r,n,i)}return apply(e,this,arguments)};return t.prototype=e.prototype,t},_export=function(e,t){var r,n,i,o,a,s,l,c,u,d=e.target,g=e.global,p=e.stat,h=e.proto,f=g?globalThis$1:p?globalThis$1[d]:globalThis$1[d]&&globalThis$1[d].prototype,y=g?path:path[d]||createNonEnumerableProperty(path,d,{})[d],$=y.prototype;for(o in t)n=!(r=isForced(g?o:d+(p?".":"#")+o,e.forced))&&f&&hasOwn(f,o),s=y[o],n&&(l=e.dontCallGetSet?(u=getOwnPropertyDescriptor$2(f,o))&&u.value:f[o]),a=n&&l?l:t[o],(r||h||typeof s!=typeof a)&&(c=e.bind&&n?bind$6(a,globalThis$1):e.wrap&&n?wrapConstructor(a):h&&isCallable(a)?uncurryThis(a):a,(e.sham||a&&a.sham||s&&s.sham)&&createNonEnumerableProperty(c,"sham",!0),createNonEnumerableProperty(y,o,c),h&&(hasOwn(path,i=d+"Prototype")||createNonEnumerableProperty(path,i,{}),createNonEnumerableProperty(path[i],o,a),e.real&&$&&(r||!$[o])&&createNonEnumerableProperty($,o,a)))},arraySlice=uncurryThis$1([].slice),slice$2=arraySlice,$Function=Function,concat$2=uncurryThis$1([].concat),join=uncurryThis$1([].join),factories={},construct$1=function(e,t,r){if(!hasOwn(factories,t)){for(var n=[],i=0;i<t;i++)n[i]="a["+i+"]";factories[t]=$Function("C,a","return new C("+join(n,",")+")")}return factories[t](e,r)},functionBind=NATIVE_BIND?$Function.bind:function(e){var t=aCallable(this),r=t.prototype,n=slice$2(arguments,1),i=function(){var r=concat$2(n,slice$2(arguments));return this instanceof i?construct$1(t,r.length,r):t.apply(e,r)};return isObject(r)&&(i.prototype=r),i},$$1=_export,bind$5=functionBind;$$1({target:"Function",proto:!0,forced:Function.bind!==bind$5},{bind:bind$5});var getBuiltInPrototypeMethod$1=function(e,t){var r=path[e+"Prototype"],n=r&&r[t];if(n)return n;var i=globalThis$1[e],o=i&&i.prototype;return o&&o[t]},getBuiltInPrototypeMethod=getBuiltInPrototypeMethod$1,bind$4=getBuiltInPrototypeMethod("Function","bind"),method$e=bind$4,FunctionPrototype$1=Function.prototype,bind$3=function(e){var t=e.bind;return e===FunctionPrototype$1||isPrototypeOf(FunctionPrototype$1,e)&&t===FunctionPrototype$1.bind?method$e:t},parent$o=bind$3,bind$2=parent$o,require$$0$A=bind$2,bind$1=require$$0$A;function __decorate(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}"function"==typeof SuppressedError&&SuppressedError;var $Date=Date,thisTimeValue$1=uncurryThis$1($Date.prototype.getTime);$$1({target:"Date",stat:!0},{now:function(){return thisTimeValue$1(new $Date)}});var now$2=path.Date.now,parent$n=now$2,now$1=parent$n,require$$0$z=now$1,now=require$$0$z,ceil$1=Math.ceil,floor$3=Math.floor,mathTrunc=Math.trunc||function(e){var t=+e;return(t>0?floor$3:ceil$1)(t)},trunc=mathTrunc,toIntegerOrInfinity$1=function(e){var t=+e;return t!=t||0===t?0:trunc(t)},TO_STRING_TAG$3=wellKnownSymbol("toStringTag"),test$2={};test$2[TO_STRING_TAG$3]="z";var toStringTagSupport="[object z]"===String(test$2),TO_STRING_TAG_SUPPORT=toStringTagSupport,TO_STRING_TAG$2=wellKnownSymbol("toStringTag"),$Object$1=Object,CORRECT_ARGUMENTS="Arguments"===classof$2(function(){return arguments}()),tryGet=function(e,t){try{return e[t]}catch(e){}},classof$1=TO_STRING_TAG_SUPPORT?classof$2:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=tryGet(t=$Object$1(e),TO_STRING_TAG$2))?r:CORRECT_ARGUMENTS?classof$2(t):"Object"===(n=classof$2(t))&&isCallable(t.callee)?"Arguments":n},classof=classof$1,$String$2=String,toString_1=function(e){if("Symbol"===classof(e))throw new TypeError("Cannot convert a Symbol value to a string");return $String$2(e)},toIntegerOrInfinity=toIntegerOrInfinity$1,toString$3=toString_1,charAt$2=uncurryThis$1("".charAt),charCodeAt$1=uncurryThis$1("".charCodeAt),stringSlice$1=uncurryThis$1("".slice),createMethod$6=function(e){return function(t,r){var n,i,o=toString$3(requireObjectCoercible(t)),a=toIntegerOrInfinity(r),s=o.length;return a<0||a>=s?e?"":void 0:(n=charCodeAt$1(o,a))<55296||n>56319||a+1===s||(i=charCodeAt$1(o,a+1))<56320||i>57343?e?charAt$2(o,a):n:e?stringSlice$1(o,a,a+2):i-56320+(n-55296<<10)+65536}},stringMultibyte={codeAt:createMethod$6(!1),charAt:createMethod$6(!0)},WeakMap$2=globalThis$1.WeakMap,weakMapBasicDetection=isCallable(WeakMap$2)&&/native code/.test(String(WeakMap$2)),keys$3=shared("keys"),sharedKey$1=function(e){return keys$3[e]||(keys$3[e]=uid(e))},hiddenKeys$2={},NATIVE_WEAK_MAP=weakMapBasicDetection,sharedKey=sharedKey$1,hiddenKeys$1=hiddenKeys$2,OBJECT_ALREADY_INITIALIZED="Object already initialized",TypeError$2=globalThis$1.TypeError,WeakMap$1=globalThis$1.WeakMap,set$1,get,has,enforce=function(e){return has(e)?get(e):set$1(e,{})},getterFor=function(e){return function(t){var r;if(!isObject(t)||(r=get(t)).type!==e)throw new TypeError$2("Incompatible receiver, "+e+" required");return r}};if(NATIVE_WEAK_MAP||store$1.state){var store=store$1.state||(store$1.state=new WeakMap$1);store.get=store.get,store.has=store.has,store.set=store.set,set$1=function(e,t){if(store.has(e))throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);return t.facade=e,store.set(e,t),t},get=function(e){return store.get(e)||{}},has=function(e){return store.has(e)}}else{var STATE=sharedKey("state");hiddenKeys$1[STATE]=!0,set$1=function(e,t){if(hasOwn(e,STATE))throw new TypeError$2(OBJECT_ALREADY_INITIALIZED);return t.facade=e,createNonEnumerableProperty(e,STATE,t),t},get=function(e){return hasOwn(e,STATE)?e[STATE]:{}},has=function(e){return hasOwn(e,STATE)}}var internalState={set:set$1,get:get,has:has,enforce:enforce,getterFor:getterFor},FunctionPrototype=Function.prototype,getDescriptor=DESCRIPTORS&&Object.getOwnPropertyDescriptor,EXISTS=hasOwn(FunctionPrototype,"name"),PROPER=EXISTS&&"something"===function(){}.name,CONFIGURABLE=EXISTS&&(!DESCRIPTORS||DESCRIPTORS&&getDescriptor(FunctionPrototype,"name").configurable),functionName={EXISTS:EXISTS,PROPER:PROPER,CONFIGURABLE:CONFIGURABLE},max$1=Math.max,min$2=Math.min,toAbsoluteIndex$1=function(e,t){var r=toIntegerOrInfinity(e);return r<0?max$1(r+t,0):min$2(r,t)},min$1=Math.min,toLength$1=function(e){var t=toIntegerOrInfinity(e);return t>0?min$1(t,9007199254740991):0},toLength=toLength$1,lengthOfArrayLike$1=function(e){return toLength(e.length)},toAbsoluteIndex=toAbsoluteIndex$1,lengthOfArrayLike=lengthOfArrayLike$1,createMethod$5=function(e){return function(t,r,n){var i=toIndexedObject(t),o=lengthOfArrayLike(i);if(0===o)return!e&&-1;var a,s=toAbsoluteIndex(n,o);if(e&&r!=r){for(;o>s;)if((a=i[s++])!=a)return!0}else for(;o>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},arrayIncludes={includes:createMethod$5(!0),indexOf:createMethod$5(!1)},require$$0$y=arrayIncludes,indexOf$4=require$$0$y.indexOf,push$4=uncurryThis$1([].push),objectKeysInternal=function(e,t){var r,n=toIndexedObject(e),i=0,o=[];for(r in n)!hasOwn(hiddenKeys$1,r)&&hasOwn(n,r)&&push$4(o,r);for(;t.length>i;)hasOwn(n,r=t[i++])&&(~indexOf$4(o,r)||push$4(o,r));return o},enumBugKeys$1=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],internalObjectKeys=objectKeysInternal,enumBugKeys=enumBugKeys$1,objectKeys=Object.keys||function(e){return internalObjectKeys(e,enumBugKeys)},nativeKeys=objectKeys,f$3=DESCRIPTORS&&!V8_PROTOTYPE_DEFINE_BUG?Object.defineProperties:function(e,t){anObject(e);for(var r,n=toIndexedObject(t),i=nativeKeys(t),o=i.length,a=0;o>a;)defineProperty$3.f(e,r=i[a++],n[r]);return e},objectDefineProperties={f:f$3},html$1=getBuiltIn("document","documentElement"),definePropertiesModule=objectDefineProperties,html=html$1,GT=">",LT="<",PROTOTYPE="prototype",SCRIPT="script",IE_PROTO$1=sharedKey("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return LT+SCRIPT+GT+e+LT+"/"+SCRIPT+GT},NullProtoObjectViaActiveX=function(e){e.write(scriptTag("")),e.close();var t=e.parentWindow.Object;return e=null,t},NullProtoObjectViaIFrame=function(){var e,t=createElement("iframe"),r="java"+SCRIPT+":";return t.style.display="none",html.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(scriptTag("document.F=Object")),e.close(),e.F},activeXDocument,NullProtoObject=function(){try{activeXDocument=new ActiveXObject("htmlfile")}catch(e){}NullProtoObject="undefined"!=typeof document?document.domain&&activeXDocument?NullProtoObjectViaActiveX(activeXDocument):NullProtoObjectViaIFrame():NullProtoObjectViaActiveX(activeXDocument);for(var e=enumBugKeys.length;e--;)delete NullProtoObject[PROTOTYPE][enumBugKeys[e]];return NullProtoObject()};hiddenKeys$1[IE_PROTO$1]=!0;var objectCreate=Object.create||function(e,t){var r;return null!==e?(EmptyConstructor[PROTOTYPE]=anObject(e),r=new EmptyConstructor,EmptyConstructor[PROTOTYPE]=null,r[IE_PROTO$1]=e):r=NullProtoObject(),void 0===t?r:definePropertiesModule.f(r,t)},correctPrototypeGetter=!fails(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}),CORRECT_PROTOTYPE_GETTER=correctPrototypeGetter,IE_PROTO=sharedKey("IE_PROTO"),$Object=Object,ObjectPrototype=$Object.prototype,objectGetPrototypeOf=CORRECT_PROTOTYPE_GETTER?$Object.getPrototypeOf:function(e){var t=toObject(e);if(hasOwn(t,IE_PROTO))return t[IE_PROTO];var r=t.constructor;return isCallable(r)&&t instanceof r?r.prototype:t instanceof $Object?ObjectPrototype:null},defineBuiltIn$1=function(e,t,r,n){return n&&n.enumerable?e[t]=r:createNonEnumerableProperty(e,t,r),e},create=objectCreate,getPrototypeOf=objectGetPrototypeOf,defineBuiltIn=defineBuiltIn$1,ITERATOR$4=wellKnownSymbol("iterator"),BUGGY_SAFARI_ITERATORS$1=!1,IteratorPrototype$2,PrototypeOfArrayIteratorPrototype,arrayIterator;[].keys&&(arrayIterator=[].keys(),"next"in arrayIterator?(PrototypeOfArrayIteratorPrototype=getPrototypeOf(getPrototypeOf(arrayIterator)),PrototypeOfArrayIteratorPrototype!==Object.prototype&&(IteratorPrototype$2=PrototypeOfArrayIteratorPrototype)):BUGGY_SAFARI_ITERATORS$1=!0);var NEW_ITERATOR_PROTOTYPE=!isObject(IteratorPrototype$2)||fails(function(){var e={};return IteratorPrototype$2[ITERATOR$4].call(e)!==e});NEW_ITERATOR_PROTOTYPE?IteratorPrototype$2={}:IS_PURE&&(IteratorPrototype$2=create(IteratorPrototype$2)),isCallable(IteratorPrototype$2[ITERATOR$4])||defineBuiltIn(IteratorPrototype$2,ITERATOR$4,function(){return this});var iteratorsCore={IteratorPrototype:IteratorPrototype$2,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS$1},objectToString=TO_STRING_TAG_SUPPORT?{}.toString:function(){return"[object "+classof(this)+"]"},toString$2=objectToString,defineProperty$2=defineProperty$3.f,TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),setToStringTag$1=function(e,t,r,n){var i=r?e:e&&e.prototype;i&&(hasOwn(i,TO_STRING_TAG$1)||defineProperty$2(i,TO_STRING_TAG$1,{configurable:!0,value:t}),n&&!TO_STRING_TAG_SUPPORT&&createNonEnumerableProperty(i,"toString",toString$2))},iterators=Object.create?Object.create(null):{},IteratorsCore=iteratorsCore,setToStringTag=setToStringTag$1,Iterators=iterators,IteratorPrototype$1=IteratorsCore.IteratorPrototype,returnThis$1=function(){return this},iteratorCreateConstructor=function(e,t,r,n){var i=t+" Iterator";return e.prototype=create(IteratorPrototype$1,{next:createPropertyDescriptor(+!n,r)}),setToStringTag(e,i,!1,!0),Iterators[i]=returnThis$1,e},functionUncurryThisAccessor=function(e,t,r){try{return uncurryThis$1(aCallable(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(e){}},isPossiblePrototype$1=function(e){return isObject(e)||null===e},isPossiblePrototype=isPossiblePrototype$1,$String$1=String,$TypeError$c=TypeError,aPossiblePrototype$1=function(e){if(isPossiblePrototype(e))return e;throw new $TypeError$c("Can't set "+$String$1(e)+" as a prototype")},uncurryThisAccessor=functionUncurryThisAccessor,aPossiblePrototype=aPossiblePrototype$1,objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=uncurryThisAccessor(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return requireObjectCoercible(r),aPossiblePrototype(n),isObject(r)?(t?e(r,n):r.__proto__=n,r):r}}():void 0),require$$0$x=functionName,createIteratorConstructor=iteratorCreateConstructor,setPrototypeOf=objectSetPrototypeOf,PROPER_FUNCTION_NAME$1=require$$0$x.PROPER,CONFIGURABLE_FUNCTION_NAME=require$$0$x.CONFIGURABLE,IteratorPrototype=IteratorsCore.IteratorPrototype,BUGGY_SAFARI_ITERATORS=IteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR$3=wellKnownSymbol("iterator"),KEYS="keys",VALUES="values",ENTRIES="entries",returnThis=function(){return this},iteratorDefine=function(e,t,r,n,i,o,a){createIteratorConstructor(r,t,n);var s,l,c,u=function(e){if(e===i&&f)return f;if(!BUGGY_SAFARI_ITERATORS&&e&&e in p)return p[e];switch(e){case KEYS:case VALUES:case ENTRIES:return function(){return new r(this,e)}}return function(){return new r(this)}},d=t+" Iterator",g=!1,p=e.prototype,h=p[ITERATOR$3]||p["@@iterator"]||i&&p[i],f=!BUGGY_SAFARI_ITERATORS&&h||u(i),y="Array"===t&&p.entries||h;if(y&&(s=getPrototypeOf(y.call(new e)))!==Object.prototype&&s.next&&(IS_PURE||getPrototypeOf(s)===IteratorPrototype||(setPrototypeOf?setPrototypeOf(s,IteratorPrototype):isCallable(s[ITERATOR$3])||defineBuiltIn(s,ITERATOR$3,returnThis)),setToStringTag(s,d,!0,!0),IS_PURE&&(Iterators[d]=returnThis)),PROPER_FUNCTION_NAME$1&&i===VALUES&&h&&h.name!==VALUES&&(!IS_PURE&&CONFIGURABLE_FUNCTION_NAME?createNonEnumerableProperty(p,"name",VALUES):(g=!0,f=function(){return call(h,this)})),i)if(l={values:u(VALUES),keys:o?f:u(KEYS),entries:u(ENTRIES)},a)for(c in l)(BUGGY_SAFARI_ITERATORS||g||!(c in p))&&defineBuiltIn(p,c,l[c]);else $$1({target:t,proto:!0,forced:BUGGY_SAFARI_ITERATORS||g},l);return IS_PURE&&!a||p[ITERATOR$3]===f||defineBuiltIn(p,ITERATOR$3,f,{name:i}),Iterators[t]=f,l},createIterResultObject$1=function(e,t){return{value:e,done:t}},require$$0$w=stringMultibyte,InternalStateModule=internalState,defineIterator=iteratorDefine,createIterResultObject=createIterResultObject$1,charAt$1=require$$0$w.charAt,STRING_ITERATOR="String Iterator",setInternalState$2=InternalStateModule.set,getInternalState$2=InternalStateModule.getterFor(STRING_ITERATOR);defineIterator(String,"String",function(e){setInternalState$2(this,{type:STRING_ITERATOR,string:toString$3(e),index:0})},function(){var e,t=getInternalState$2(this),r=t.string,n=t.index;return n>=r.length?createIterResultObject(void 0,!0):(e=charAt$1(r,n),t.index+=e.length,createIterResultObject(e,!1))});var iteratorClose$1=function(e,t,r){var n,i;anObject(e);try{if(!(n=getMethod(e,"return"))){if("throw"===t)throw r;return r}n=call(n,e)}catch(e){i=!0,n=e}if("throw"===t)throw r;if(i)throw n;return anObject(n),r},iteratorClose=iteratorClose$1,callWithSafeIterationClosing$1=function(e,t,r,n){try{return n?t(anObject(r)[0],r[1]):t(r)}catch(t){iteratorClose(e,"throw",t)}},ITERATOR$2=wellKnownSymbol("iterator"),ArrayPrototype$c=Array.prototype,isArrayIteratorMethod$1=function(e){return void 0!==e&&(Iterators.Array===e||ArrayPrototype$c[ITERATOR$2]===e)},functionToString=uncurryThis$1(Function.toString);isCallable(store$1.inspectSource)||(store$1.inspectSource=function(e){return functionToString(e)});var inspectSource$1=store$1.inspectSource,inspectSource=inspectSource$1,noop=function(){},construct=getBuiltIn("Reflect","construct"),constructorRegExp=/^\s*(?:class|function)\b/,exec$2=uncurryThis$1(constructorRegExp.exec),INCORRECT_TO_STRING=!constructorRegExp.test(noop),isConstructorModern=function(e){if(!isCallable(e))return!1;try{return construct(noop,[],e),!0}catch(e){return!1}},isConstructorLegacy=function(e){if(!isCallable(e))return!1;switch(classof(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return INCORRECT_TO_STRING||!!exec$2(constructorRegExp,inspectSource(e))}catch(e){return!0}};isConstructorLegacy.sham=!0;var isConstructor$1=!construct||fails(function(){var e;return isConstructorModern(isConstructorModern.call)||!isConstructorModern(Object)||!isConstructorModern(function(){e=!0})||e})?isConstructorLegacy:isConstructorModern,createProperty$1=function(e,t,r){DESCRIPTORS?defineProperty$3.f(e,t,createPropertyDescriptor(0,r)):e[t]=r},isArray$4=Array.isArray||function(e){return"Array"===classof$2(e)},isArray$3=isArray$4,$TypeError$b=TypeError,getOwnPropertyDescriptor$1=Object.getOwnPropertyDescriptor,SILENT_ON_NON_WRITABLE_LENGTH_SET=DESCRIPTORS&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}(),arraySetLength=SILENT_ON_NON_WRITABLE_LENGTH_SET?function(e,t){if(isArray$3(e)&&!getOwnPropertyDescriptor$1(e,"length").writable)throw new $TypeError$b("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t},getInternalIterator$1=function(e){var t=classof(e);return"Arguments"===t&&(t="Array"),hasOwn(Iterators,t)?Iterators[t]:void 0},getInternalIterator=getInternalIterator$1,ITERATOR$1=wellKnownSymbol("iterator"),getIteratorMethodInternal=function(e){if(!isNullOrUndefined(e))return getMethod(e,ITERATOR$1)||getMethod(e,"@@iterator")||getInternalIterator(e)},getIteratorMethod=getIteratorMethodInternal,$TypeError$a=TypeError,getIteratorInternal=function(e,t){var r=arguments.length<2?getIteratorMethod(e):t;if(isCallable(r))return anObject(call(r,e));throw new $TypeError$a(tryToString(e)+" is not iterable")},$TypeError$9=TypeError,MAX_SAFE_INTEGER=9007199254740991,doesNotExceedSafeInteger$1=function(e){if(e>MAX_SAFE_INTEGER)throw new $TypeError$9("Maximum allowed index exceeded");return e},callWithSafeIterationClosing=callWithSafeIterationClosing$1,isArrayIteratorMethod=isArrayIteratorMethod$1,isConstructor=isConstructor$1,createProperty=createProperty$1,setArrayLength=arraySetLength,getIterator=getIteratorInternal,doesNotExceedSafeInteger=doesNotExceedSafeInteger$1,$Array$1=Array,arrayFrom=function(e){var t=isConstructor(this),r=arguments.length,n=r>1?arguments[1]:void 0,i=void 0!==n;i&&(n=bind$6(n,r>2?arguments[2]:void 0));var o,a,s,l,c,u,d=toObject(e),g=getIteratorMethod(d),p=0;if(!g||this===$Array$1&&isArrayIteratorMethod(g))for(o=lengthOfArrayLike(d),a=t?new this(o):$Array$1(o);o>p;p++)u=i?n(d[p],p):d[p],createProperty(a,p,u);else for(a=t?new this:[],c=(l=getIterator(d,g)).next;!(s=call(c,l)).done;p++){try{doesNotExceedSafeInteger(p)}catch(e){iteratorClose(l,"throw",e)}u=i?callWithSafeIterationClosing(l,n,[s.value,p],!0):s.value;try{createProperty(a,p,u)}catch(e){iteratorClose(l,"throw",e)}}return setArrayLength(a,p),a},ITERATOR=wellKnownSymbol("iterator"),SAFE_CLOSING=!1;try{var called=0,iteratorWithReturn={next:function(){return{done:!!called++}},return:function(){SAFE_CLOSING=!0}};iteratorWithReturn[ITERATOR]=function(){return this},Array.from(iteratorWithReturn,function(){throw 2})}catch(e){}var checkCorrectnessOfIteration$1=function(e,t){try{if(!t&&!SAFE_CLOSING)return!1}catch(e){return!1}var r=!1;try{var n={};n[ITERATOR]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r},from=arrayFrom,checkCorrectnessOfIteration=checkCorrectnessOfIteration$1,INCORRECT_ITERATION=!checkCorrectnessOfIteration(function(e){Array.from(e)});$$1({target:"Array",stat:!0,forced:INCORRECT_ITERATION},{from:from});var from_1$2=path.Array.from,parent$m=from_1$2,from_1$1=parent$m,require$$0$v=from_1$1,from_1=require$$0$v,$RangeError$1=RangeError,floor$2=Math.floor,stringRepeat=function(e){var t=toString$3(requireObjectCoercible(this)),r="",n=toIntegerOrInfinity(e);if(n<0||n===1/0)throw new $RangeError$1("Wrong number of repetitions");for(;n>0;(n=floor$2(n/2))&&(t+=t))n%2&&(r+=t);return r},$repeat=stringRepeat,repeat=uncurryThis$1($repeat),stringSlice=uncurryThis$1("".slice),ceil=Math.ceil,createMethod$4=function(e){return function(t,r,n){var i=toString$3(requireObjectCoercible(t)),o=toLength(r),a=i.length;if(o<=a)return i;var s,l,c=void 0===n?" ":toString$3(n);return""===c?i:((l=repeat(c,ceil((s=o-a)/c.length))).length>s&&(l=stringSlice(l,0,s)),e?i+l:l+i)}},stringPad={start:createMethod$4(!1),end:createMethod$4(!0)},require$$0$u=stringPad,padStart=require$$0$u.start,$RangeError=RangeError,$isFinite=isFinite,abs=Math.abs,DatePrototype=Date.prototype,nativeDateToISOString=DatePrototype.toISOString,thisTimeValue=uncurryThis$1(DatePrototype.getTime),getUTCDate=uncurryThis$1(DatePrototype.getUTCDate),getUTCFullYear=uncurryThis$1(DatePrototype.getUTCFullYear),getUTCHours=uncurryThis$1(DatePrototype.getUTCHours),getUTCMilliseconds=uncurryThis$1(DatePrototype.getUTCMilliseconds),getUTCMinutes=uncurryThis$1(DatePrototype.getUTCMinutes),getUTCMonth=uncurryThis$1(DatePrototype.getUTCMonth),getUTCSeconds=uncurryThis$1(DatePrototype.getUTCSeconds),dateToIsoString=fails(function(){return"0385-07-25T07:06:39.999Z"!==nativeDateToISOString.call(new Date(-50000000000001))})||!fails(function(){nativeDateToISOString.call(new Date(NaN))})?function(){if(!$isFinite(thisTimeValue(this)))throw new $RangeError("Invalid time value");var e=this,t=getUTCFullYear(e),r=getUTCMilliseconds(e),n=t<0?"-":t>9999?"+":"";return n+padStart(abs(t),n?6:4,0)+"-"+padStart(getUTCMonth(e)+1,2,0)+"-"+padStart(getUTCDate(e),2,0)+"T"+padStart(getUTCHours(e),2,0)+":"+padStart(getUTCMinutes(e),2,0)+":"+padStart(getUTCSeconds(e),2,0)+"."+padStart(r,3,0)+"Z"}:nativeDateToISOString,toISOString=dateToIsoString,FORCED$4=fails(function(){return null!==new Date(NaN).toJSON()||1!==call(Date.prototype.toJSON,{toISOString:function(){return 1}})});$$1({target:"Date",proto:!0,forced:FORCED$4},{toJSON:function(e){var t=toObject(this),r=toPrimitive(t,"number");return"number"!=typeof r||isFinite(r)?"toISOString"in t||"Date"!==classof$2(t)?t.toISOString():call(toISOString,t):null}});var getInternalState$1=InternalStateModule.get,isRawJson=function(e){if(!isObject(e))return!1;var t=getInternalState$1(e);return!!t&&"RawJSON"===t.type},thisNumberValue$1=uncurryThis$1(1.1.valueOf),$SyntaxError=SyntaxError,$parseInt=parseInt,fromCharCode=String.fromCharCode,at=uncurryThis$1("".charAt),slice$1=uncurryThis$1("".slice),exec$1=uncurryThis$1(/./.exec),codePoints={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},IS_4_HEX_DIGITS=/^[\da-f]{4}$/i,IS_C0_CONTROL_CODE=/^[\u0000-\u001F]$/,parseJsonString=function(e,t){for(var r=!0,n="";t<e.length;){var i=at(e,t);if("\\"===i){var o=slice$1(e,t,t+2);if(hasOwn(codePoints,o))n+=codePoints[o],t+=2;else{if("\\u"!==o)throw new $SyntaxError('Unknown escape sequence: "'+o+'"');var a=slice$1(e,t+=2,t+4);if(!exec$1(IS_4_HEX_DIGITS,a))throw new $SyntaxError("Bad Unicode escape at: "+t);n+=fromCharCode($parseInt(a,16)),t+=4}}else{if('"'===i){r=!1,t++;break}if(exec$1(IS_C0_CONTROL_CODE,i))throw new $SyntaxError("Bad control character in string literal at: "+t);n+=i,t++}}if(r)throw new $SyntaxError("Unterminated string at: "+t);return{value:n,end:t}},nativeRawJson=!fails(function(){var e="9007199254740993",t=JSON.rawJSON(e);return!JSON.isRawJSON(t)||JSON.stringify(t)!==e}),isRawJSON=isRawJson,thisNumberValue=thisNumberValue$1,parseJSONString=parseJsonString,NATIVE_RAW_JSON=nativeRawJson,includes$5=require$$0$y.includes,$String=String,$TypeError$8=TypeError,$stringify=getBuiltIn("JSON","stringify"),$BigInt=getBuiltIn("BigInt"),stringValueOf=uncurryThis$1("".valueOf),booleanValueOf=uncurryThis$1((!0).valueOf),bigIntValueOf=$BigInt&&uncurryThis$1($BigInt.prototype.valueOf),exec=uncurryThis$1(/./.exec),charAt=uncurryThis$1("".charAt),charCodeAt=uncurryThis$1("".charCodeAt),replace$2=uncurryThis$1("".replace),slice=uncurryThis$1("".slice),push$3=uncurryThis$1([].push),pop=uncurryThis$1([].pop),numberToString=uncurryThis$1(1.1.toString),surrogates=/[\uD800-\uDFFF]/g,leadingSurrogates=/^[\uD800-\uDBFF]$/,trailingSurrogates=/^[\uDC00-\uDFFF]$/,digits=/^\d+$/,RAW_MARK=uid(),KEY_MARK=uid(),END_MARK=uid(),RAW_MARK_LENGTH=RAW_MARK.length,KEY_MARK_LENGTH=KEY_MARK.length,WRONG_SYMBOLS_CONVERSION=!NATIVE_SYMBOL||fails(function(){var e=getBuiltIn("Symbol")("stringify detection");return"[null]"!==$stringify([e])||"{}"!==$stringify({a:e})||"{}"!==$stringify(Object(e))}),ILL_FORMED_UNICODE=fails(function(){return'"\\udf06\\ud834"'!==$stringify("\udf06\ud834")||'"\\udead"'!==$stringify("\udead")}),isRawJSONValue=NATIVE_RAW_JSON?getBuiltIn("JSON","isRawJSON"):isRawJSON,stringifyWithProperSymbolsConversion=WRONG_SYMBOLS_CONVERSION?function(e,t,r){return $stringify(e,function(e,r){var n=call(t,this,e,r);if(!isSymbol(n))return n},r)}:$stringify,fixIllFormedJSON=function(e,t,r){var n=charAt(r,t-1),i=charAt(r,t+1);return exec(leadingSurrogates,e)&&!exec(trailingSurrogates,i)||exec(trailingSurrogates,e)&&!exec(leadingSurrogates,n)?"\\u"+numberToString(charCodeAt(e,0),16):e},getPropertyList=function(e){if(isArray$3(e)){for(var t=e.length,r=[],n=create(null),i=0;i<t;i++){var o,a=e[i];if("string"==typeof a)o=a;else{if("number"!=typeof a&&"Number"!==classof$2(a)&&"String"!==classof$2(a))continue;o=toString$3(a)}hasOwn(n,o)||(n[o]=!0,push$3(r,o))}return r}},hasInternalSlot=function(e,t){try{return e(t),!0}catch(e){return!1}},isBoxedPrimitive=function(e){var t=classof$2(e);return"Number"===t&&hasInternalSlot(thisNumberValue,e)||"String"===t&&hasInternalSlot(stringValueOf,e)||"Boolean"===t&&hasInternalSlot(booleanValueOf,e)||!!bigIntValueOf&&"BigInt"===t&&hasInternalSlot(bigIntValueOf,e)},isSerializedAsObject=function(e){if(!isObject(e)||isCallable(e)||isArray$3(e))return!1;try{return!isBoxedPrimitive(e)}catch(e){return!0}},createElementHolder=function(e,t){return{toJSON:function(){var r=e[t];if(isObject(r)||"bigint"==typeof r){var n=r.toJSON;isCallable(n)&&(r=call(n,r,t))}return r}}},getKeyPrefix=function(e){for(var t=0,r=e.length;t<r;t++)if(exec(digits,e[t]))return KEY_MARK;return""},createOrderedObject=function(e,t,r){for(var n=create(null),i=0,o=t.length;i<o;i++){var a=t[i];n[r+a]=createElementHolder(e,a)}return n[END_MARK]=null,n};$stringify&&$$1({target:"JSON",stat:!0,arity:3,forced:WRONG_SYMBOLS_CONVERSION||ILL_FORMED_UNICODE||!NATIVE_RAW_JSON},{stringify:function(e,t,r){var n,i=isCallable(t)?t:void 0,o=i?void 0:getPropertyList(t),a=o&&getKeyPrefix(o),s=[],l=[],c=[],u=!1,d=!0,g=stringifyWithProperSymbolsConversion(e,function(e,t){if(e=$String(e),o){if(e===END_MARK)return pop(l),void(n=pop(c));if(d)d=!1;else if(this!==n&&!isArray$3(this)&&!includes$5(o,e))return}else i&&(t=call(i,this,e,t));if(isRawJSONValue(t))return NATIVE_RAW_JSON?t:(u=!0,RAW_MARK+(push$3(s,t.rawJSON)-1));if(o&&isSerializedAsObject(t)){if(includes$5(l,t))throw new $TypeError$8("Converting circular structure to JSON");var r=createOrderedObject(t,o,a);return push$3(l,t),push$3(c,n),n=r,a&&(u=!0),r}return t},r);if("string"!=typeof g)return g;if(ILL_FORMED_UNICODE&&(g=replace$2(g,surrogates,fixIllFormedJSON)),!u)return g;for(var p="",h=g.length,f=0;f<h;f++){var y=charAt(g,f);if('"'===y){var $=parseJSONString(g,++f).end-1,w=slice(g,f,$);slice(w,0,RAW_MARK_LENGTH)===RAW_MARK?p+=s[slice(w,RAW_MARK_LENGTH)]:slice(w,0,KEY_MARK_LENGTH)===KEY_MARK?p+='"'+slice(w,KEY_MARK_LENGTH)+'"':p+='"'+w+'"',f=$}else p+=y}return p}}),path.JSON||(path.JSON={stringify:JSON.stringify});var stringify$2=function(e,t,r){return apply(path.JSON.stringify,null,arguments)},parent$l=stringify$2,stringify$1=parent$l,require$$0$t=stringify$1,stringify=require$$0$t;function CatchErrors(e){let t,r;return"string"==typeof e?t=e:void 0!==e&&({component:t,callback:r}=e),function(e,n,i){const o=i.value;return i.value=function(){try{return bind$1(o).call(o,this,...from_1(arguments))()}catch(e){const n=asErrorObject(e);if(this.errorTracker.track(n,t),void 0!==r)try{r(this)}catch(e){const r=t?`${t}.errorCallback`:"errorCallback";this.errorTracker.track(asErrorObject(e),r)}}},i}}function asErrorObject(e){if(e instanceof Error)return e;if("object"==typeof e)try{return new Error(stringify(e))}catch(e){}return new Error(String(e).toString())}const ENV="prod";var Lifecycle;!function(e){e[e.Transient=0]="Transient",e[e.Singleton=1]="Singleton",e[e.ResolutionScoped=2]="ResolutionScoped",e[e.ContainerScoped=3]="ContainerScoped"}(Lifecycle||(Lifecycle={}));var Lifecycle$1=Lifecycle,extendStatics=function(e,t){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},extendStatics(e,t)};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function __awaiter(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(a,s)}l((n=n.apply(e,t||[])).next())})}function __generator(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}var INJECTION_TOKEN_METADATA_KEY="injectionTokens";function getParamInfo(e){var t=Reflect.getMetadata("design:paramtypes",e)||[],r=Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY,e)||{};return Object.keys(r).forEach(function(e){t[+e]=r[e]}),t}function defineInjectionTokenMetadata(e,t){return function(r,n,i){var o=Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY,r)||{};o[i]=t?{token:e,transform:t.transformToken,transformArgs:t.args||[]}:e,Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY,o,r)}}function isClassProvider(e){return!!e.useClass}function isFactoryProvider(e){return!!e.useFactory}var DelayedConstructor=function(){function e(e){this.wrap=e,this.reflectMethods=["get","getPrototypeOf","setPrototypeOf","getOwnPropertyDescriptor","defineProperty","has","set","deleteProperty","apply","construct","ownKeys"]}return e.prototype.createProxy=function(e){var t,r=this,n=!1;return new Proxy({},this.createHandler(function(){return n||(t=e(r.wrap()),n=!0),t}))},e.prototype.createHandler=function(e){var t={};return this.reflectMethods.forEach(function(r){t[r]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t[0]=e(),Reflect[r].apply(void 0,__spread(t))}}),t},e}();function isNormalToken(e){return"string"==typeof e||"symbol"==typeof e}function isTokenDescriptor(e){return"object"==typeof e&&"token"in e&&"multiple"in e}function isTransformDescriptor(e){return"object"==typeof e&&"token"in e&&"transform"in e}function isConstructorToken(e){return"function"==typeof e||e instanceof DelayedConstructor}function isTokenProvider(e){return!!e.useToken}function isValueProvider(e){return null!=e.useValue}function isProvider(e){return isClassProvider(e)||isValueProvider(e)||isTokenProvider(e)||isFactoryProvider(e)}var RegistryBase=function(){function e(){this._registryMap=new Map}return e.prototype.entries=function(){return this._registryMap.entries()},e.prototype.getAll=function(e){return this.ensure(e),this._registryMap.get(e)},e.prototype.get=function(e){this.ensure(e);var t=this._registryMap.get(e);return t[t.length-1]||null},e.prototype.set=function(e,t){this.ensure(e),this._registryMap.get(e).push(t)},e.prototype.setAll=function(e,t){this._registryMap.set(e,t)},e.prototype.has=function(e){return this.ensure(e),this._registryMap.get(e).length>0},e.prototype.clear=function(){this._registryMap.clear()},e.prototype.ensure=function(e){this._registryMap.has(e)||this._registryMap.set(e,[])},e}(),Registry=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(RegistryBase),ResolutionContext=function(){this.scopedResolutions=new Map};function formatDependency(e,t){return null===e?"at position #"+t:'"'+e.split(",")[t].trim()+'" at position #'+t}function composeErrorMessage(e,t,r){return void 0===r&&(r="    "),__spread([e],t.message.split("\n").map(function(e){return r+e})).join("\n")}function formatErrorCtor(e,t,r){var n=__read(e.toString().match(/constructor\(([\w, ]+)\)/)||[],2)[1];return composeErrorMessage("Cannot inject the dependency "+formatDependency(void 0===n?null:n,t)+' of "'+e.name+'" constructor. Reason:',r)}function isDisposable(e){return"function"==typeof e.dispose&&!(e.dispose.length>0)}var PreResolutionInterceptors=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(RegistryBase),PostResolutionInterceptors=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t}(RegistryBase),Interceptors=function(){this.preResolution=new PreResolutionInterceptors,this.postResolution=new PostResolutionInterceptors},typeInfo=new Map,InternalDependencyContainer=function(){function e(e){this.parent=e,this._registry=new Registry,this.interceptors=new Interceptors,this.disposed=!1,this.disposables=new Set}return e.prototype.register=function(e,t,r){var n;if(void 0===r&&(r={lifecycle:Lifecycle$1.Transient}),this.ensureNotDisposed(),isTokenProvider(n=isProvider(t)?t:{useClass:t}))for(var i=[e],o=n;null!=o;){var a=o.useToken;if(i.includes(a))throw new Error("Token registration cycle detected! "+__spread(i,[a]).join(" -> "));i.push(a);var s=this._registry.get(a);o=s&&isTokenProvider(s.provider)?s.provider:null}if((r.lifecycle===Lifecycle$1.Singleton||r.lifecycle==Lifecycle$1.ContainerScoped||r.lifecycle==Lifecycle$1.ResolutionScoped)&&(isValueProvider(n)||isFactoryProvider(n)))throw new Error('Cannot use lifecycle "'+Lifecycle$1[r.lifecycle]+'" with ValueProviders or FactoryProviders');return this._registry.set(e,{provider:n,options:r}),this},e.prototype.registerType=function(e,t){return this.ensureNotDisposed(),isNormalToken(t)?this.register(e,{useToken:t}):this.register(e,{useClass:t})},e.prototype.registerInstance=function(e,t){return this.ensureNotDisposed(),this.register(e,{useValue:t})},e.prototype.registerSingleton=function(e,t){if(this.ensureNotDisposed(),isNormalToken(e)){if(isNormalToken(t))return this.register(e,{useToken:t},{lifecycle:Lifecycle$1.Singleton});if(t)return this.register(e,{useClass:t},{lifecycle:Lifecycle$1.Singleton});throw new Error('Cannot register a type name as a singleton without a "to" token')}var r=e;return t&&!isNormalToken(t)&&(r=t),this.register(e,{useClass:r},{lifecycle:Lifecycle$1.Singleton})},e.prototype.resolve=function(e,t,r){void 0===t&&(t=new ResolutionContext),void 0===r&&(r=!1),this.ensureNotDisposed();var n=this.getRegistration(e);if(!n&&isNormalToken(e)){if(r)return;throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"')}if(this.executePreResolutionInterceptor(e,"Single"),n){var i=this.resolveRegistration(n,t);return this.executePostResolutionInterceptor(e,i,"Single"),i}if(isConstructorToken(e)){i=this.construct(e,t);return this.executePostResolutionInterceptor(e,i,"Single"),i}throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.")},e.prototype.executePreResolutionInterceptor=function(e,t){var r,n;if(this.interceptors.preResolution.has(e)){var i=[];try{for(var o=__values(this.interceptors.preResolution.getAll(e)),a=o.next();!a.done;a=o.next()){var s=a.value;"Once"!=s.options.frequency&&i.push(s),s.callback(e,t)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}this.interceptors.preResolution.setAll(e,i)}},e.prototype.executePostResolutionInterceptor=function(e,t,r){var n,i;if(this.interceptors.postResolution.has(e)){var o=[];try{for(var a=__values(this.interceptors.postResolution.getAll(e)),s=a.next();!s.done;s=a.next()){var l=s.value;"Once"!=l.options.frequency&&o.push(l),l.callback(e,t,r)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}this.interceptors.postResolution.setAll(e,o)}},e.prototype.resolveRegistration=function(e,t){if(this.ensureNotDisposed(),e.options.lifecycle===Lifecycle$1.ResolutionScoped&&t.scopedResolutions.has(e))return t.scopedResolutions.get(e);var r,n=e.options.lifecycle===Lifecycle$1.Singleton,i=e.options.lifecycle===Lifecycle$1.ContainerScoped,o=n||i;return r=isValueProvider(e.provider)?e.provider.useValue:isTokenProvider(e.provider)?o?e.instance||(e.instance=this.resolve(e.provider.useToken,t)):this.resolve(e.provider.useToken,t):isClassProvider(e.provider)?o?e.instance||(e.instance=this.construct(e.provider.useClass,t)):this.construct(e.provider.useClass,t):isFactoryProvider(e.provider)?e.provider.useFactory(this):this.construct(e.provider,t),e.options.lifecycle===Lifecycle$1.ResolutionScoped&&t.scopedResolutions.set(e,r),r},e.prototype.resolveAll=function(e,t,r){var n=this;void 0===t&&(t=new ResolutionContext),void 0===r&&(r=!1),this.ensureNotDisposed();var i=this.getAllRegistrations(e);if(!i&&isNormalToken(e)){if(r)return[];throw new Error('Attempted to resolve unregistered dependency token: "'+e.toString()+'"')}if(this.executePreResolutionInterceptor(e,"All"),i){var o=i.map(function(e){return n.resolveRegistration(e,t)});return this.executePostResolutionInterceptor(e,o,"All"),o}var a=[this.construct(e,t)];return this.executePostResolutionInterceptor(e,a,"All"),a},e.prototype.isRegistered=function(e,t){return void 0===t&&(t=!1),this.ensureNotDisposed(),this._registry.has(e)||t&&(this.parent||!1)&&this.parent.isRegistered(e,!0)},e.prototype.reset=function(){this.ensureNotDisposed(),this._registry.clear(),this.interceptors.preResolution.clear(),this.interceptors.postResolution.clear()},e.prototype.clearInstances=function(){var e,t;this.ensureNotDisposed();try{for(var r=__values(this._registry.entries()),n=r.next();!n.done;n=r.next()){var i=__read(n.value,2),o=i[0],a=i[1];this._registry.setAll(o,a.filter(function(e){return!isValueProvider(e.provider)}).map(function(e){return e.instance=void 0,e}))}}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},e.prototype.createChildContainer=function(){var t,r;this.ensureNotDisposed();var n=new e(this);try{for(var i=__values(this._registry.entries()),o=i.next();!o.done;o=i.next()){var a=__read(o.value,2),s=a[0],l=a[1];l.some(function(e){return e.options.lifecycle===Lifecycle$1.ContainerScoped})&&n._registry.setAll(s,l.map(function(e){return e.options.lifecycle===Lifecycle$1.ContainerScoped?{provider:e.provider,options:e.options}:e}))}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},e.prototype.beforeResolution=function(e,t,r){void 0===r&&(r={frequency:"Always"}),this.interceptors.preResolution.set(e,{callback:t,options:r})},e.prototype.afterResolution=function(e,t,r){void 0===r&&(r={frequency:"Always"}),this.interceptors.postResolution.set(e,{callback:t,options:r})},e.prototype.dispose=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return this.disposed=!0,e=[],this.disposables.forEach(function(t){var r=t.dispose();r&&e.push(r)}),[4,Promise.all(e)];case 1:return t.sent(),[2]}})})},e.prototype.getRegistration=function(e){return this.isRegistered(e)?this._registry.get(e):this.parent?this.parent.getRegistration(e):null},e.prototype.getAllRegistrations=function(e){return this.isRegistered(e)?this._registry.getAll(e):this.parent?this.parent.getAllRegistrations(e):null},e.prototype.construct=function(e,t){var r=this;if(e instanceof DelayedConstructor)return e.createProxy(function(e){return r.resolve(e,t)});var n=function(){var n=typeInfo.get(e);if(!n||0===n.length){if(0===e.length)return new e;throw new Error('TypeInfo not known for "'+e.name+'"')}var i=n.map(r.resolveParams(t,e));return new(e.bind.apply(e,__spread([void 0],i)))}();return isDisposable(n)&&this.disposables.add(n),n},e.prototype.resolveParams=function(e,t){var r=this;return function(n,i){var o,a,s;try{return isTokenDescriptor(n)?isTransformDescriptor(n)?n.multiple?(o=r.resolve(n.transform)).transform.apply(o,__spread([r.resolveAll(n.token,new ResolutionContext,n.isOptional)],n.transformArgs)):(a=r.resolve(n.transform)).transform.apply(a,__spread([r.resolve(n.token,e,n.isOptional)],n.transformArgs)):n.multiple?r.resolveAll(n.token,new ResolutionContext,n.isOptional):r.resolve(n.token,e,n.isOptional):isTransformDescriptor(n)?(s=r.resolve(n.transform,e)).transform.apply(s,__spread([r.resolve(n.token,e)],n.transformArgs)):r.resolve(n,e)}catch(e){throw new Error(formatErrorCtor(t,i,e))}}},e.prototype.ensureNotDisposed=function(){if(this.disposed)throw new Error("This container has been disposed, you cannot interact with a disposed container")},e}(),instance=new InternalDependencyContainer;function inject$1(e,t){return defineInjectionTokenMetadata({token:e,multiple:!1,isOptional:t&&t.isOptional})}function injectable(e){return function(t){typeInfo.set(t,getParamInfo(t)),e&&e.token&&(Array.isArray(e.token)?e.token.forEach(function(e){instance.register(e,t)}):instance.register(e.token,t))}}function registry(e){return void 0===e&&(e=[]),function(t){return e.forEach(function(e){var t=e.token,r=e.options,n=__rest(e,["token","options"]);return instance.register(t,n,r)}),t}}function singleton(){return function(e){injectable()(e),instance.registerSingleton(e)}}if("undefined"==typeof Reflect||!Reflect.getMetadata)throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");let Config=class{scriptName="The-West Calc";scriptShortName="tw-calc";updateUrl="https://tw-calc.net/script/TW-Calc.user.js";githubUrl="https://github.com/The-West-Scripts/TW-Calc-Script";discordUrl="https://discord.gg/vhNSGhvkwk";version="2.11.7";author="timzatko";contributors="TomRobert".split(", ");website="https://tw-calc.net";showUntranslated=!1;logPrefix="TW-Calc";birthday={enabled:!1,date:"2012/12/16"};donations=!1;cdn="//westzz.innogamescdn.com/";languages=["sk_SK","cs_CZ","es_ES","pt_BR","pl_PL","sv_SE","hu_HU","ro_RO","tr_TR","nn_NO","it_IT","de_DE","nl_NL","ru_RU","el_GR","fr_FR"];env=ENV};Config=__decorate([singleton()],Config);var SPECIES$4=wellKnownSymbol("species"),$Array=Array,arraySpeciesConstructor$1=function(e){var t;return isArray$3(e)&&(t=e.constructor,(isConstructor(t)&&(t===$Array||isArray$3(t.prototype))||isObject(t)&&null===(t=t[SPECIES$4]))&&(t=void 0)),void 0===t?$Array:t},arraySpeciesConstructor=arraySpeciesConstructor$1,arraySpeciesCreate$1=function(e,t){return new(arraySpeciesConstructor(e))(0===t?0:t)},arraySpeciesCreate=arraySpeciesCreate$1,createMethod$3=function(e){var t=1===e,r=2===e,n=3===e,i=4===e,o=6===e,a=7===e,s=5===e||o;return function(l,c,u){for(var d,g,p=toObject(l),h=IndexedObject(p),f=lengthOfArrayLike(h),y=bind$6(c,u),$=0,w=0,m=t?arraySpeciesCreate(l,f):r||a?arraySpeciesCreate(l,0):void 0;f>$;$++)if((s||$ in h)&&(g=y(d=h[$],$,p),e))if(t)createProperty(m,$,g);else if(g)switch(e){case 3:return!0;case 5:return d;case 6:return $;case 2:createProperty(m,w++,d)}else switch(e){case 4:return!1;case 7:createProperty(m,w++,d)}return o?-1:n||i?i:m}},arrayIteration={forEach:createMethod$3(0),map:createMethod$3(1),filter:createMethod$3(2),some:createMethod$3(3),every:createMethod$3(4),find:createMethod$3(5),findIndex:createMethod$3(6),filterReject:createMethod$3(7)},SPECIES$3=wellKnownSymbol("species"),arrayMethodHasSpeciesSupport$1=function(e){return CHROME_VERSION>=51||!fails(function(){var t=[];return(t.constructor={})[SPECIES$3]=function(){return{foo:1}},1!==t[e](Boolean).foo})},require$$0$s=arrayIteration,arrayMethodHasSpeciesSupport=arrayMethodHasSpeciesSupport$1,$map=require$$0$s.map,HAS_SPECIES_SUPPORT$2=arrayMethodHasSpeciesSupport("map");$$1({target:"Array",proto:!0,forced:!HAS_SPECIES_SUPPORT$2},{map:function(e){return $map(this,e,arguments.length>1?arguments[1]:void 0)}});var map$3=getBuiltInPrototypeMethod("Array","map"),method$d=map$3,ArrayPrototype$b=Array.prototype,map$2=function(e){var t=e.map;return e===ArrayPrototype$b||isPrototypeOf(ArrayPrototype$b,e)&&t===ArrayPrototype$b.map?method$d:t},parent$k=map$2,map$1=parent$k,require$$0$r=map$1,map=require$$0$r,nativeReverse=uncurryThis$1([].reverse),test$1=[1,2];$$1({target:"Array",proto:!0,forced:String(test$1)===String(test$1.reverse())},{reverse:function(){return isArray$3(this)&&(this.length=this.length),nativeReverse(this)}});var reverse$3=getBuiltInPrototypeMethod("Array","reverse"),method$c=reverse$3,ArrayPrototype$a=Array.prototype,reverse$2=function(e){var t=e.reverse;return e===ArrayPrototype$a||isPrototypeOf(ArrayPrototype$a,e)&&t===ArrayPrototype$a.reverse?method$c:t},parent$j=reverse$2,reverse$1=parent$j,require$$0$q=reverse$1,reverse=require$$0$q,f$2=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$2},getOwnPropertySymbolsModule=objectGetOwnPropertySymbols,$assign=Object.assign,defineProperty$1=Object.defineProperty,concat$1=uncurryThis$1([].concat),objectAssign=!$assign||fails(function(){if(DESCRIPTORS&&1!==$assign({b:1},$assign(defineProperty$1({},"a",{enumerable:!0,get:function(){defineProperty$1(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol("assign detection"),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!==$assign({},e)[r]||nativeKeys($assign({},t)).join("")!==n})?function(e,t){for(var r=toObject(e),n=arguments.length,i=1,o=getOwnPropertySymbolsModule.f,a=require$$0$B.f;n>i;)for(var s,l=IndexedObject(arguments[i++]),c=o?concat$1(nativeKeys(l),o(l)):nativeKeys(l),u=c.length,d=0;u>d;)s=c[d++],DESCRIPTORS&&!call(a,l,s)||(r[s]=l[s]);return r}:$assign,assign$3=objectAssign;$$1({target:"Object",stat:!0,arity:2,forced:Object.assign!==assign$3},{assign:assign$3});var assign$2=path.Object.assign,parent$i=assign$2,assign$1=parent$i,require$$0$p=assign$1,assign=require$$0$p,$propertyIsEnumerable=require$$0$B.f,propertyIsEnumerable=uncurryThis$1($propertyIsEnumerable),push$2=uncurryThis$1([].push),IE_BUG=DESCRIPTORS&&fails(function(){var e=Object.create(null);return e[2]=2,!propertyIsEnumerable(e,2)}),createMethod$2=function(e){return function(t){for(var r,n=toIndexedObject(t),i=nativeKeys(n),o=IE_BUG&&null===getPrototypeOf(n),a=i.length,s=0,l=[];a>s;)r=i[s++],DESCRIPTORS&&!(o?r in n:propertyIsEnumerable(n,r))||push$2(l,e?[r,n[r]]:n[r]);return l}},objectToArray={entries:createMethod$2(!0),values:createMethod$2(!1)},require$$0$o=objectToArray,$values=require$$0$o.values;$$1({target:"Object",stat:!0},{values:function(e){return $values(e)}});var values$3=path.Object.values,parent$h=values$3,values$2=parent$h,require$$0$n=values$2,values$1=require$$0$n,arrayMethodIsStrict$1=function(e,t){var r=[][e];return!!r&&fails(function(){r.call(null,t||function(){return 1},1)})},arrayMethodIsStrict=arrayMethodIsStrict$1,$forEach=require$$0$s.forEach,STRICT_METHOD$2=arrayMethodIsStrict("forEach"),arrayForEach=STRICT_METHOD$2?[].forEach:function(e){return $forEach(this,e,arguments.length>1?arguments[1]:void 0)},forEach$4=arrayForEach;$$1({target:"Array",proto:!0,forced:[].forEach!==forEach$4},{forEach:forEach$4});var forEach$3=getBuiltInPrototypeMethod("Array","forEach"),parent$g=forEach$3,forEach$2=parent$g,method$b=forEach$2,ArrayPrototype$9=Array.prototype,DOMIterables$1={DOMTokenList:!0,NodeList:!0},forEach$1=function(e){var t=e.forEach;return e===ArrayPrototype$9||isPrototypeOf(ArrayPrototype$9,e)&&t===ArrayPrototype$9.forEach||hasOwn(DOMIterables$1,classof(e))?method$b:t},require$$0$m=forEach$1,forEach=require$$0$m,userAgentStartsWith=function(e){return userAgent.slice(0,e.length)===e},environment=userAgentStartsWith("Bun/")?"BUN":userAgentStartsWith("Cloudflare-Workers")?"CLOUDFLARE":userAgentStartsWith("Deno/")?"DENO":userAgentStartsWith("Node.js/")?"NODE":globalThis$1.Bun&&"string"==typeof Bun.version?"BUN":globalThis$1.Deno&&"object"==typeof Deno.version?"DENO":"process"===classof$2(globalThis$1.process)?"NODE":globalThis$1.window&&globalThis$1.document?"BROWSER":"REST",$TypeError$7=TypeError,validateArgumentsLength$1=function(e,t){if(e<t)throw new $TypeError$7("Not enough arguments");return e},ENVIRONMENT=environment,validateArgumentsLength=validateArgumentsLength$1,Function$2=globalThis$1.Function,WRAP=/MSIE .\./.test(userAgent)||"BUN"===ENVIRONMENT&&function(){var e=globalThis$1.Bun.version.split(".");return e.length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2])}(),schedulersFix$1=function(e,t){var r=t?2:1;return WRAP?function(n,i){var o=validateArgumentsLength(arguments.length,1)>r,a=isCallable(n)?n:Function$2(n),s=o?slice$2(arguments,r):[],l=o?function(){apply(a,this,s)}:a;return t?e(l,i):e(l)}:e},schedulersFix=schedulersFix$1,setInterval$2=schedulersFix(globalThis$1.setInterval,!0);$$1({global:!0,bind:!0,forced:globalThis$1.setInterval!==setInterval$2},{setInterval:setInterval$2});var setTimeout$3=schedulersFix(globalThis$1.setTimeout,!0);$$1({global:!0,bind:!0,forced:globalThis$1.setTimeout!==setTimeout$3},{setTimeout:setTimeout$3});var setTimeout$2=path.setTimeout,require$$0$l=setTimeout$2,setTimeout$1=require$$0$l;const defaultOptions={reloadable:!1,size:null,content:{marginLeft:12,marginBottom:12,marginTop:12,marginRight:12}};class TW2Window{id;errorTracker;window;language;logger;$;options;views={};win;constructor(e,t,r,n,i,o){this.id=e,this.errorTracker=t,this.window=r,this.language=n,this.logger=i,this.options=assign({},defaultOptions,o),this.$=r.$}get tw2win(){if(!this.win)throw new Error("Window manipulation before initialization!");return this.win}open(e){this.logger.log(`open window "${this.id}"...`,this.options,this.views);const t=[];this.options.reloadable||t.push("noreload");const r=getTitle(this.language,this.options.title)||"";if(this.win=this.window.wman.open(this.id,r,t.join(" ")).setMiniTitle(r),this.options.size){const{width:e,height:t}=this.options.size;this.win.setSize(e,t)}const n=values$1(this.views);forEach(n).call(n,e=>{const t=getTitle(this.language,e.title)||"",{marginLeft:r,marginRight:n,marginTop:i,marginBottom:o}=this.options.content;this.tw2win.addTab(t,e.key.toString(),()=>this.setTab(e.key,"tabSwitch")).appendToContentPane(this.window.$(`<div id="tab_${e.key}" style="display: none; overflow: hidden; margin: ${i}px ${r}px ${o}px ${n}px"></div>`))}),this.win.addEventListener("WINDOW_DESTROY",()=>{forEach(n).call(n,e=>{this.errorTracker.execute(()=>{e.destroy&&e?.destroy()})})}),e&&e.tab?this.setTab(e.tab,"windowOpen",e.tabInitOptions):n.length&&this.setTab(n[0].key,"windowOpen"),e&&e.position&&this.move(e.position)}move(e){$(".tw2gui_window.tw2gui_win2."+this.id).css("left",e.x).css("top",e.y)}setOptions(e){assign(this.options,e)}getMainDiv(){return this.$(`.${this.id}`)}setTab(e,t,r){const n=this.views[e];if(this.logger.log(`set tab = ${e}`,e,n,r),void 0===n)throw new Error(`Tab "${e}" does not exist!`);if(n.loader){this.getWindow().showLoader();const i="tabSwitch"===t?50:500;this.tw2win.activateTab(e.toString()),setTimeout$1(()=>{this.showTab(e,n,()=>{this.getWindow().hideLoader()},r)},i)}else this.showTab(e,n,()=>{},r)}addView(e){this.views[e.key]=e}getWindow(){if(!this.win)throw new Error("Window object does not exist!");return this.win}getTabMainDiv(e){return this.$(`.tw2gui_window_content_pane > #tab_${e}`,this.getMainDiv())}showTab(e,t,r,n){this.tw2win.activateTab(e.toString());const i=this.errorTracker.execute(()=>t.getMainDiv());this.getTabMainDiv(t.key).empty().append(i||""),$("div.tw2gui_window_content_pane > *",this.getMainDiv()).each(function(){$(this).hide()}),this.errorTracker.execute(()=>{"function"==typeof t.init&&t.init({loadCallback:r,options:n})}),$(`div.tw2gui_window_content_pane > #tab_${e}`,this.getMainDiv()).fadeIn()}}function getTitle(e,t){return"object"!=typeof t?t:e?e.getTranslation(t.translation):"undefined"}__decorate([CatchErrors("TW2Window.open"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],TW2Window.prototype,"open",null),__decorate([CatchErrors("TW2Window.moveTo"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],TW2Window.prototype,"move",null),__decorate([CatchErrors("TW2Window.setOptions"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],TW2Window.prototype,"setOptions",null),__decorate([CatchErrors("TW2Window.getMainDiv"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],TW2Window.prototype,"getMainDiv",null),__decorate([CatchErrors("TW2Window.setTab"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,String,Object]),__metadata("design:returntype",void 0)],TW2Window.prototype,"setTab",null);class ErrorLogWindow extends TW2Window{constructor(e,t,r){super("TWCalcErrorLog",t,e,null,r,{title:"TW-Calc ErrorLog"})}show(e){var t;super.open();const r=this.window.$("<div></div>"),n=new this.window.west.gui.Textarea;n.setHeight(355),n.setWidth(675),n.setReadonly(),n.setContent(map(t=reverse(e).call(e)).call(t,e=>{const t=[e.name];return e.message.length&&t.push(e.message),e.stack&&e.stack.length&&t.push(e.stack),t.join("| ")}).join("\n")),r.append(n.getMainDiv()),this.tw2win.appendToContentPane(r)}}class ErrorWindow extends TW2Window{config;constructor(e,t,r,n){super("TWCalcError",t,e,null,r,{title:"TW-Calc Error",size:{width:400,height:360}}),this.config=n}show(e,t){super.open();const{$:r}=this.window,n=this.window.$("<div></div>");if(n.append(r('<p>The error below occurred during TW-Calc execution. <b>You can let us now on our <a href="'+this.config.discordUrl+'" target="_blank">Discord</a> server.</b></p><br /><hr><br />')),t&&n.append(r(`<h2>${t}</h2>`)),n.append(r(`<p><b>${e.name}</b>: ${e.message}</p>`)),e.stack&&e.stack.length){const t=new this.window.west.gui.Textarea;t.setHeight(150),t.setWidth(325),t.setReadonly(),t.setContent(`<p>${e.stack}</p>`),n.append(t.getMainDiv())}this.tw2win.appendToContentPane(n)}}class InvisibleError extends Error{fromError;constructor(e){super(e.message),this.fromError=e}get stack(){return this.fromError.stack}static of(e){return new InvisibleError(e)}}const storagePrefix="TWCalc";let Storage=class{localStorage;constructor(e){this.localStorage=e}getString(e,t){return this.getValue(e,t,toString$1)}getNumber(e,t){return this.getValue(e,t,Number)}getObject(e,t){return this.getValue(e,t,JSON.parse)}setString(e,t){this.addItem(e,t)}setObject(e,t){this.addItem(e,stringify(t))}setNumber(e,t){this.addItem(e,t.toString())}has(e){return null!==this.getItem(e)}remove(e){this.localStorage.removeItem(getKey(e))}getItem(e){return this.localStorage.getItem(getKey(e))}addItem(e,t){this.localStorage.setItem(getKey(e),t)}getValue(e,t,r){const n=this.getItem(e);if(null!==n)return r(n);if(void 0!==t)return t;throw new Error(`Storage value for key "${e}" does not exist!`)}};function getKey(e){return`${storagePrefix}_${e}`}function toString$1(e){return e.toString()}var StorageKey;Storage=__decorate([injectable(),__param(0,inject$1("localStorage")),__metadata("design:paramtypes",[Object])],Storage),function(e){e.debug="DEBUG",e.languagePack="LANGUAGE_PACK",e.languagePackLastUpdate="LANGUAGE_PACK_LAST_UPDATE",e.languagePackReset="LANGUAGE_PACK_RESET",e.settings="Settings",e.birthday="Birthday",e.jobList="jobList",e.tombola="Tombola",e.battleCalc="BattleCalc",e.alarmClock="AlarmClock",e.notepad="notepad",e.wardrobe="Wardrobe",e.ownCalc="OwnCalc"}(StorageKey||(StorageKey={}));let Logger=class{window;config;storage;constructor(e,t,r){this.window=e,this.config=t,this.storage=r}error(...e){this.print("error",e)}log(...e){this.canShowLogs()&&this.print("log",e)}warn(...e){this.print("warn",e)}debug(...e){this.canShowLogs()&&this.print("debug",e)}canShowLogs(){return"prod"!==this.config.env||this.isDebugEnabled()}isDebugEnabled(){return!!this.storage.has(StorageKey.debug)||!!this.window.location.href.match(/tw-calc--debug=true/)}print(e,t){"string"==typeof t[0]?t[0]=`${this.getMessagePrefix()} ${t[0]}`:t.unshift(this.getMessagePrefix()),this.window.console[e](...t)}getMessagePrefix(){const e=(new Date).toUTCString();return`${this.config.logPrefix} [${e}]`}};function wrapError(e,t){const r=asErrorObject(e),n=new Error(`${t}\n\n${r.message}`);return n.stack+="\nCaused by: "+r.stack,n}var ErrorTracker_1;Logger=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Storage])],Logger);let ErrorTracker=ErrorTracker_1=class{window;onGoingEntryFunction;logger;config;log=[];errorWindow;errorLogWindow;constructor(e,t,r,n){this.window=e,this.onGoingEntryFunction=t,this.logger=r,this.config=n,this.errorWindow=new ErrorWindow(e,this,r,this.config),this.errorLogWindow=new ErrorLogWindow(e,this,r)}static isErrorNoficationVisible(e){return!(e instanceof InvisibleError)}track(e,t){this.logger.debug("tracking error...",e),this.log.push(e),this.logger.error(e),ErrorTracker_1.isErrorNoficationVisible(e)&&this.window.WestUi.NotiBar.add(this.onGoingEntryFunction(this.window,()=>{this.errorWindow.show(e,t)})),this.window.$.get(this.config.website+"/service/send-error",{errorCode:t?`${t} | ${toString(e)}`:toString(e),name:this.window.Character.name,id:this.window.Character.playerId,server:this.window.Game.gameURL,locale:this.window.Game.locale,WestCalcVersion:this.config.version,GameVersion:this.window.Game.version},function(){},"jsonp")}catchErrors(e){const t=this;return function(...r){return t.execute(()=>e.apply(this,r))}}execute(e,t){try{return e()}catch(e){let r=asErrorObject(e);return"string"==typeof t&&(r=wrapError(r,t)),void this.track(r)}}open(){this.errorLogWindow.show(this.log)}};function toString(e){return`${e.toString()}\n${e.stack}`.substr(0,1024)}function onGoingEntry(e,t){const r=new e.OnGoingEntry;return r.init("",t),r.setTooltip("TW-Calc Error"),r.setImageClass("hint"),r}ErrorTracker=ErrorTracker_1=__decorate([singleton(),registry([{token:"onGoingEntry",useValue:onGoingEntry}]),__param(0,inject$1("window")),__param(1,inject$1("onGoingEntry")),__metadata("design:paramtypes",[Object,Object,Logger,Config])],ErrorTracker);var $indexOf=require$$0$y.indexOf,nativeIndexOf=uncurryThis([].indexOf),NEGATIVE_ZERO=!!nativeIndexOf&&1/nativeIndexOf([1],1,-0)<0,FORCED$3=NEGATIVE_ZERO||!arrayMethodIsStrict("indexOf");$$1({target:"Array",proto:!0,forced:FORCED$3},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return NEGATIVE_ZERO?nativeIndexOf(this,e,t)||0:$indexOf(this,e,t)}});var indexOf$3=getBuiltInPrototypeMethod("Array","indexOf"),method$a=indexOf$3,ArrayPrototype$8=Array.prototype,indexOf$2=function(e){var t=e.indexOf;return e===ArrayPrototype$8||isPrototypeOf(ArrayPrototype$8,e)&&t===ArrayPrototype$8.indexOf?method$a:t},parent$f=indexOf$2,indexOf$1=parent$f,require$$0$k=indexOf$1,indexOf=require$$0$k,en_us={lang_0:"No",lang_1:"Yes",lang_2:"with premium",lang_3:"Settings",lang_4:"Skills",lang_5:"Leadership",lang_6:"Hiding",lang_7:"Stamina",lang_8:"Dodging",lang_9:"Aiming",lang_14:"Attack",lang_15:"Defence",lang_18:"Position on map",lang_20:"The tower of your character",lang_21:"Ground",lang_22:"Tower - level",lang_27:"Calculate",lang_28:"Health",lang_29:"Health points",lang_30:"Level",lang_31:"Fort-battle attack",lang_32:"Character",lang_33:"Fort-battle defence",lang_34:"Other",lang_35:"Delete",lang_36:"Save",lang_37:"Set time",lang_38:"Greenhorn",lang_39:"Dueller",lang_40:"Adventurer",lang_41:"Soldier",lang_42:"Worker",lang_43:"Player name",lang_44:"Game world",lang_45:"Player level",lang_46:"Character class",lang_49:"Health",lang_50:"Attack",lang_51:"Defense",lang_52:"Game world",lang_61:"Health",lang_62:"Alarm clock settings",lang_63:"Calculate the highest and lowest duelling level you are able to duel",lang_64:"Calculate the amount of experiences gained from a duel",lang_66:"Your duelling level",lang_67:"Calculate",lang_68:"Highest possible duelling level",lang_69:"Lowest possible duelling level",lang_70:"Duelling level of your opponent",lang_71:"Duel motivation",lang_72:"How to write a date? Example:",lang_77:"for The-West Calc is a new version available, please click ok to update the Userscript",lang_78:"TW-Calc Update needed",lang_79:"Current version",lang_80:"Later",lang_81:"Your note",lang_82:"Time",lang_83:"TW-Calc Alarm clock",lang_86:"Victory: You gain",lang_87:"experience and",lang_88:"Successfully saved",lang_89:"Your notes has been successfully deleted",lang_90:"Alarm Clock not set (BAD SYNTAX)",lang_91:"Alarm clock set",lang_92:"Cancel",lang_93:"TW-Calc Alarm clock - settings",lang_94:"Alarm clock",lang_95:"Enter URL address of your sound. For example: https://tw-calc.net/script/budik.mp3",lang_96:"Alarm clock set",lang_97:"Melody of alarm clock: Alarm1, Alarm2",lang_98:"Health points",lang_100:"Full energy in",lang_101:"hours and",lang_102:"minutes",lang_103:"Experience points",lang_104:"Full health in",lang_105:"Transfer fee",lang_106:"Transfer fee",lang_107:"Transfer amount",lang_108:"Add bank fees calculator (during transfer) to the bank window",lang_109:"Add energy&health refill calculators",lang_110:"duel experience.",lang_111:"New version",lang_112:"Whats new",lang_113:"Edit",lang_114:"Duelling level",lang_115:"Duleable",lang_116:"Distance",lang_117:"Center map",lang_118:"Town",lang_122:"Note",lang_123:"Really?",lang_124:"Actually empty",lang_140:"Resistance",lang_141:"Damage",lang_143:"Loading",lang_146:"All your saved jobs will be removed. Are you sure you want to do it?",lang_147:"Close (Saved automatically)",lang_148:"Reset jobs",lang_149:"Reset",lang_150:"Add or remove Jobs",lang_151:"Search for job",lang_152:"Job list",lang_153:"Replace native craft window in the menu by Westcalc craft window",lang_154:"Open duel window",lang_157:"Name",lang_159:"Importing...",lang_160:"Own skills",lang_161:"New equipment",lang_162:"Close",lang_163:"Add",lang_164:"Current clothing will be added as new equipment.",lang_165:"Successfull",lang_166:"Name...",lang_167:"Job",lang_169:"Show configuration of this set",lang_170:"Wardrobe",lang_171:"Remove this set",lang_172:"Create",lang_173:"Tombola analyser",lang_174:"Travelling fair",lang_175:"Add wardrobe to the game",lang_176:"Hide unavailable materials",lang_177:"Craft",lang_178:"Toggle all recipes",lang_179:"Field cook",lang_180:"Tonic peddler",lang_181:"Blacksmith",lang_182:"Master Saddler",lang_183:"Crafting",lang_184:"Add Westcalc icon to the right menu",lang_185:"Position of Job bar",lang_186:"Top",lang_187:"Bottom",lang_188:"In right panel",lang_189:"Hide",lang_190:"without premium",lang_191:"Position of duel panel",lang_192:"Show the crafting product",lang_193:"Setting Traps",lang_194:"Valentine's Day",lang_195:"Easter",lang_196:"Independence Day",lang_197:"Octoberfest",lang_198:"Day of the Dead",lang_199:"Defeat: You lose",lang_200:"Energy",lang_201:"Weapon damage",lang_202:"Cloth bonus",lang_203:"Wall - level",lang_204:"Accept the quest to see the quest giver",lang_205:"Show quest giver on map",lang_206:"Show the quest on TW-Calc.net",lang_207:"Wear all",lang_208:"Create or select set from the menu",lang_209:"Learn",lang_210:"Notepad",lang_211:"Import",lang_212:"My Character",lang_213:"Tombola",lang_214:"Battle Calc",lang_215:"Duel Calc",lang_216:"Settings",lang_217:"BB Code",lang_218:"Refresh the page to apply changes.",lang_219:"No shop with this item found",lang_220:"Search...",lang_221:"No tombola spins were tacked so far",lang_222:"There are no unlocked jobs for this product!",lang_223:"Flag",lang_224:"Flag ring",lang_225:"Import / Export local TW-Calc settings"};const fetchTimeout=4e3;let Language=class{window;config;storage;logger;errorTracker;languagePack;cb;constructor(e,t,r,n,i){this.window=e,this.config=t,this.storage=r,this.logger=n,this.errorTracker=i}init(e){if(this.logger.log("initializing language service..."),this.cb=e,!this.storage.has(StorageKey.languagePackLastUpdate)||!this.storage.has(StorageKey.languagePack))return void this.fetch();const t=new Date(this.storage.getString(StorageKey.languagePackLastUpdate)),r=new Date;if(Math.ceil(Math.abs(r.getTime()-t.getTime())/864e5)>5)return this.logger.log("language pack is too old"),void this.fetch();this.logger.log("using language pack from storage");try{this.use(this.storage.getObject(StorageKey.languagePack))}catch(e){this.logger.error("error while loading a language pack, using en_us...",e),this.use(en_us)}}getTranslation(e){const t=this.languagePack;return t&&t[`lang_${e}`]?t[`lang_${e}`]:this.config.showUntranslated?"untranslated":en_us[`lang_${e}`]||"undefined"}getTranslator(){const e=this.languagePack;return e&&e.translator?e.translator:this.config.author}loadPack(e){if(this.languagePack)return this.logger.warn("not overwriting language pack since it is already loaded");this.logger.log("loading and storing language pack...",e),this.storage.setObject(StorageKey.languagePack,e);const t=new Date,r=`${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`;this.storage.setString(StorageKey.languagePackLastUpdate,r),this.use(e)}use(e){if(this.languagePack)return;this.languagePack=e;const t=this.cb;if(!t)throw new Error("callback is not defined, was init method called?");setTimeout$1(()=>t())}fetch(){this.logger.log("fetching language pack from the server...");const e=this.getAvailableLocale();this.window.$.ajax({url:this.config.website+"/service/get-script-language-pack?lang="+e+"&"+(new Date).toDateString()+"&"+this.config.version,dataType:"jsonp",timeout:fetchTimeout}),setTimeout$1(()=>this.use(en_us),fetchTimeout)}getAvailableLocale(){var e;return-1!==indexOf(e=this.config.languages).call(e,this.window.Game.locale)?this.window.Game.locale:"en_US"}};Language=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Storage,Logger,ErrorTracker])],Language);let AlarmClock=class{window;storage;language;config;logger;errorTracker;constructor(e,t,r,n,i,o){this.window=e,this.storage=t,this.language=r,this.config=n,this.logger=i,this.errorTracker=o}init(){this.window.setInterval(()=>{if(!this.storage.has(StorageKey.alarmClock))return;const e=this.storage.getObject(StorageKey.alarmClock),t=this.getDate(e.date,e.time),r=t+6e4,n=now();n>=t&&n<=r&&(this.logger.log(`show alarm clock (now: ${n}; start: ${t}; end: ${r})'`),this.showAlarmClockDialog(e))},1e3)}getDate(e,t){return Date.parse(e+" "+t)}showAlarmClockDialog(e){this.storage.remove(StorageKey.alarmClock);new this.window.west.gui.Dialog(this.language.getTranslation(83),'<div><embed src="'+this.config.website+'/public/alarm/1.mp3" autostart="true" width="0" height="0"><span><b>'+this.language.getTranslation(82)+"</b></span>: <span><b>"+e.date+" "+e.time+"</b></span><br /><span><b>"+this.language.getTranslation(81)+":</b></span><br /><div>"+e.caption.replace(/\n/g,"<br />")+"</div></div>",this.window.west.gui.Dialog.SYS_WARNING).addButton("Ok").show()}};__decorate([CatchErrors("AlarmClock.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],AlarmClock.prototype,"init",null),AlarmClock=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Storage,Language,Config,Logger,ErrorTracker])],AlarmClock);const MAX_LOAD_ATTEMPTS=3;let BattleCalc=class{window;config;logger;errorTracker;loading=!1;constructor(e,t,r,n){this.window=e,this.config=t,this.logger=r,this.errorTracker=n}init(){this.load()}load(){this.isAvailable()||this.loading||(this.loading=!0,this.attemptLoad(1))}isAvailable(){return isAvailable(this.window)}getInstance(){const e=this.window;if(!isAvailable(e))throw new Error("Battle calc core is not loaded yet!");return e.BattleCalc}attemptLoad(e){this.window.$.getScript(this.config.website+"/js/battle-calculator-core.js").done(()=>{this.loading=!1}).fail(()=>{this.logger.error(`failed to load battle calc core (attempt ${e}/${MAX_LOAD_ATTEMPTS})`),e<MAX_LOAD_ATTEMPTS?this.window.setTimeout(()=>this.attemptLoad(e+1),2e3*e):this.loading=!1})}};function isAvailable(e){return e.hasOwnProperty("BattleCalc")&&void 0!==e.BattleCalc}__decorate([CatchErrors("BattleCalc.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],BattleCalc.prototype,"init",null),BattleCalc=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Logger,ErrorTracker])],BattleCalc);let Birthday=class{window;config;storage;logger;errorTracker;date;constructor(e,t,r,n,i){this.window=e,this.config=t,this.storage=r,this.logger=n,this.errorTracker=i,this.date=new Date(t.birthday.date)}init(){this.config.birthday.enabled&&(this.isSeen()||this.isBirthdayToday()&&(this.logger.log("it's TW-Calc birthday today!"),this.showBirthdayDialog()))}isSeen(){return this.storage.has(StorageKey.birthday)&&this.storage.getNumber(StorageKey.birthday)===(new Date).getFullYear()}isBirthdayToday(){const e=new Date;return e.getMonth()===this.date.getMonth()&&e.getDate()===this.date.getDate()}showBirthdayDialog(){const e=(new Date).getFullYear(),t=e-this.date.getFullYear();(new this.window.west.gui.Dialog).setTitle(`It's TW-Calc ${t}th birthday!`).setText(`<div style="display: flex; flex-direction: column; padding: 8px; align-items: center">\n                    <div style="padding: 8px">\n                        <img alt="" src="${this.config.cdn}/images/items/yield/5_year_cake.png?1">\n                    </div>\n                    <div style="padding: 8px; font-size: 16px; text-align: center">\n                        <div>\n                            Thank you for using this script and visiting our website!</br>\n                            If you like our webpage, please donate for server costs and further development, we'll be very grateful to you. We are funding everything from our own resources. All your donations will be appreciated and used in best way possible to ensure future development of our page and script.\n                        </div>\n                        <div style="margin: 24px; font-size: 28px; font-weight: bold; font-family: Georgia, 'Times New Roman';">Thank you!</div>\n                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="LRG4X3PGMYHZY"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>\n                    </div>\n                </div>`).addButton("Visit Website",()=>{this.storage.setNumber(StorageKey.birthday,e),this.window.open(this.config.website)}).addButton("Close",()=>{this.storage.setNumber(StorageKey.birthday,e)}).show()}};__decorate([CatchErrors("Birthday.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Birthday.prototype,"init",null),Birthday=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Storage,Logger,ErrorTracker])],Birthday);let Chests=class Chests{window;logger;config;errorTracker;constructor(e,t,r,n){this.window=e,this.logger=t,this.config=r,this.errorTracker=n}init(){const toolkit=this.window.ItemUse.doItOrigin?"doItOrigin":"doIt",originalFn=this.window.ItemUse[toolkit];if(void 0===originalFn)return;let newStr;try{const str=originalFn.toString(),match=str.match(/EventHandler\.signal\(['"]item_used['"]/);if(!match||void 0===match.index)throw new Error("item_used anchor not found in ItemUse.doIt");const pos=match.index,body=str.substr(0,pos)+"TW_Calc.trackChest(itemId,res);"+str.substr(pos);this.logger.log("patching the chest handler...",body),newStr=`ItemUse.${toolkit} = ${body}`,eval(newStr)}catch(e){const t=e;throw this.logger.error("error while patching the chest handler",newStr),this.window.ItemUse[toolkit]=originalFn,t.message=`${t.message}\n\n${newStr}`,InvisibleError.of(t)}}trackChest(e,t){var r;this.logger.log("tracking chest...",e,t);const{Game:n,$:i}=this.window;if(!t.msg||!t.msg.effects)return this.logger.log("not tracking chest because there are no effect in response object");forEach(r=t.msg.effects).call(r,t=>{if("lottery"==t.type||"content"==t.type){var r;const o=this.config.website+"/service/chest-export",a={chest:e,count:1,content:{},version:n.version};forEach(r=t.items||[]).call(r,e=>{a.content[e.item_id]=e.count}),this.logger.log("sending a request to "+o+" with data",a),i.get(o,a,()=>{this.logger.log("chest successfully tracked")},"jsonp")}})}};__decorate([CatchErrors("Chests.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],Chests.prototype,"init",null),__decorate([CatchErrors("Chests.trackChest"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number,Object]),__metadata("design:returntype",void 0)],Chests.prototype,"trackChest",null),Chests=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,Config,ErrorTracker])],Chests);var $filter=require$$0$s.filter,HAS_SPECIES_SUPPORT$1=arrayMethodHasSpeciesSupport("filter");$$1({target:"Array",proto:!0,forced:!HAS_SPECIES_SUPPORT$1},{filter:function(e){return $filter(this,e,arguments.length>1?arguments[1]:void 0)}});var filter$3=getBuiltInPrototypeMethod("Array","filter"),method$9=filter$3,ArrayPrototype$7=Array.prototype,filter$2=function(e){var t=e.filter;return e===ArrayPrototype$7||isPrototypeOf(ArrayPrototype$7,e)&&t===ArrayPrototype$7.filter?method$9:t},parent$e=filter$2,filter$1=parent$e,require$$0$j=filter$1,filter=require$$0$j;const craftTranslations={1:179,2:180,3:181,4:182};let CraftService=class{window;logger;errorTracker;lastRecipeCraftTimestamp={};learnedRecipes={};onBagChangeCallbacks=[];maxProfessionSkillValue=0;constructor(e,t,r){this.window=e,this.logger=t,this.errorTracker=r}get maxProfessionSkill(){return this.maxProfessionSkillValue}update(e){const{$:t,Character:r}=this.window;t.get("game.php",{window:"crafting"},t=>{if(t.error)return this.logger.error(t.error);const n=t.recipes_content;if(void 0!==n)for(let e=0;e<n.length;e++){const t=n[e];this.lastRecipeCraftTimestamp[t.item_id]=t.last_craft,this.learnedRecipes[t.item_id]=!0}r.setProfessionSkill(t.profession_skill),this.maxProfessionSkillValue=t.profession_maxskill,e&&e()})}isRecipeLearned(e){return this.learnedRecipes.hasOwnProperty(e)&&this.learnedRecipes[e]}setLearnedRecipe(e){this.learnedRecipes[e]=!0,this.lastRecipeCraftTimestamp[e]=null}getLastCraft(e){const t=this.lastRecipeCraftTimestamp;return t&&t.hasOwnProperty(e)?t[e]:null}init(){const{ItemManager:e}=this.window;patchBagUpdateChanges(this.window,e=>{var t;forEach(t=this.onBagChangeCallbacks).call(t,t=>t(e))}),this.update(),this.onBagChange(t=>{forEach(t).call(t,t=>{"recipe"===e.get(t.item_id).type&&t.count>0&&(this.learnedRecipes[t.item_id]=!0)})})}isProfession(e){const{Character:t}=this.window;return t.professionId===e}onBagChange(e){return this.onBagChangeCallbacks.push(e),()=>{var t;this.onBagChangeCallbacks=filter(t=this.onBagChangeCallbacks).call(t,t=>t!==e)}}};function patchBagUpdateChanges(e,t){const r=e.Bag.updateChanges;e.Bag.updateChanges=function(e,n){r.apply(this,[e,n]),t(e)}}__decorate([CatchErrors("CraftService.update"),__metadata("design:type",Function),__metadata("design:paramtypes",[Function]),__metadata("design:returntype",void 0)],CraftService.prototype,"update",null),CraftService=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,ErrorTracker])],CraftService);var $TypeError$6=TypeError,deletePropertyOrThrow$1=function(e,t){if(!delete e[t])throw new $TypeError$6("Cannot delete property "+tryToString(t)+" of "+tryToString(e))},floor$1=Math.floor,sort$4=function(e,t){var r=e.length;if(r<8)for(var n,i,o=1;o<r;){for(i=o,n=e[o];i&&t(e[i-1],n)>0;)e[i]=e[--i];i!==o++&&(e[i]=n)}else for(var a=floor$1(r/2),s=sort$4(slice$2(e,0,a),t),l=sort$4(slice$2(e,a),t),c=s.length,u=l.length,d=0,g=0;d<c||g<u;)e[d+g]=d<c&&g<u?t(s[d],l[g])<=0?s[d++]:l[g++]:d<c?s[d++]:l[g++];return e},arraySort=sort$4,firefox=userAgent.match(/firefox\/(\d+)/i),environmentFfVersion=!!firefox&&+firefox[1],environmentIsIeOrEdge=/MSIE|Trident/.test(userAgent),webkit=userAgent.match(/AppleWebKit\/(\d+)\./),environmentWebkitVersion=!!webkit&&+webkit[1],deletePropertyOrThrow=deletePropertyOrThrow$1,internalSort=arraySort,FF=environmentFfVersion,IE_OR_EDGE=environmentIsIeOrEdge,WEBKIT=environmentWebkitVersion,test=[],nativeSort=uncurryThis$1(test.sort),push$1=uncurryThis$1(test.push),FAILS_ON_UNDEFINED=fails(function(){test.sort(void 0)}),FAILS_ON_NULL=fails(function(){test.sort(null)}),STRICT_METHOD$1=arrayMethodIsStrict("sort"),STABLE_SORT=!fails(function(){if(CHROME_VERSION)return CHROME_VERSION<70;if(!(FF&&FF>3)){if(IE_OR_EDGE)return!0;if(WEBKIT)return WEBKIT<603;var e,t,r,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)test.push({k:t+n,v:r})}for(test.sort(function(e,t){return t.v-e.v}),n=0;n<test.length;n++)t=test[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}}),FORCED$2=FAILS_ON_UNDEFINED||!FAILS_ON_NULL||!STRICT_METHOD$1||!STABLE_SORT,getSortCompare=function(e){return function(t,r){if(void 0===r)return-1;if(void 0===t)return 1;if(void 0!==e)return+e(t,r)||0;var n=toString$3(t),i=toString$3(r);return n===i?0:n>i?1:-1}};$$1({target:"Array",proto:!0,forced:FORCED$2},{sort:function(e){void 0!==e&&aCallable(e);var t=toObject(this);if(STABLE_SORT)return void 0===e?nativeSort(t):nativeSort(t,e);var r,n,i=[],o=lengthOfArrayLike(t);for(n=0;n<o;n++)n in t&&push$1(i,t[n]);for(internalSort(i,getSortCompare(e)),r=lengthOfArrayLike(i),n=0;n<r;)t[n]=i[n++];for(;n<o;)deletePropertyOrThrow(t,n++);return t}});var sort$3=getBuiltInPrototypeMethod("Array","sort"),method$8=sort$3,ArrayPrototype$6=Array.prototype,sort$2=function(e){var t=e.sort;return e===ArrayPrototype$6||isPrototypeOf(ArrayPrototype$6,e)&&t===ArrayPrototype$6.sort?method$8:t},parent$d=sort$2,sort$1=parent$d,require$$0$i=sort$1,sort=require$$0$i,addToUnscopables$1=function(){},addToUnscopables=addToUnscopables$1,$find=require$$0$s.find,FIND="find",SKIPS_HOLES$1=!0;FIND in[]&&Array(1)[FIND](function(){SKIPS_HOLES$1=!1}),$$1({target:"Array",proto:!0,forced:SKIPS_HOLES$1},{find:function(e){return $find(this,e,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables();var find$3=getBuiltInPrototypeMethod("Array","find"),method$7=find$3,ArrayPrototype$5=Array.prototype,find$2=function(e){var t=e.find;return e===ArrayPrototype$5||isPrototypeOf(ArrayPrototype$5,e)&&t===ArrayPrototype$5.find?method$7:t},parent$c=find$2,find$1=parent$c,require$$0$h=find$1,find=require$$0$h;function zip(e,t,r){if(e.length!==t.length)throw new Error("Cannot zip two arrays of different length!");for(let n=0;n<e.length;n++)r(e[n],t[n])}class Recipe{recipeId;craftService;window;language;logger;onStartCraft;item;container;title;content;craftAmount;craft;collapse;difficulty;recipeName;resources;craftingItem;unsubscribe;constructor(e,t,r,n,i,o){this.recipeId=e,this.craftService=t,this.window=r,this.language=n,this.logger=i,this.onStartCraft=o;const{$:a,ItemManager:s,Crafting:l,tw2widget:c}=this.window;this.item=s.get(e),this.window.Crafting.recipes[e]=this.item,this.resources=this.getResources(),this.craftingItem=new c.CraftingItem(s.get(this.item.craftitem)),this.container=a('<div data-recipe-craft-item-id="'+this.item.craftitem+'"></div>'),this.title=a('<div class="recipe_title" data-name="'+this.item.name+'" data-recipe-id="" style="display: inline-block; text-align: left;"></div>'),this.collapse=a('<div class="recipe_collapse">+</div>'),this.collapse.on("click",()=>this.setCollapsedToggle()),this.difficulty=a('<div class="recipe_difficult hasMousePopup"></div>'),this.recipeName=a('<div class="recipe_name" style="width: 230px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">'+this.name.split(":").pop()+"</div>"),this.recipeName.on("click",()=>this.setCollapsedToggle());const u=a('<div class="recipe_title_inner"></div>');u.append(this.collapse),u.append(this.difficulty),u.append(this.recipeName),u.append(a('<div class="recipe_colors" style="margin-top: 3px; color: white; font-size: 12px; font-family: monospace; ">|&nbsp;<span style="color: rgb(196, 163, 103">'+this.item.min_level+'</span>/<span style="color: rgb(88, 185, 88)">'+this.getMidLevel()+'</span>/<span style="color: rgb(85, 205, 221)">'+this.item.max_level+"</span>").attr("title",l.description)),this.craftAmount=a('<div class="recipe_craft_amount"></div>'),this.craft=a('<div data-id="'+e+'" class="recipe_craft" style="color: white"></div>'),this.title.append(u).append(this.craftAmount).append(this.craft),this.content=a('<div class="recipe_content" style="margin-left: auto; margin-right: auto; display: none"></div>'),this.container.append(this.title).append(this.content),this.unsubscribe=this.craftService.onBagChange(()=>this.initMainDiv())}get name(){return this.item.name}static of(e,t,r,n,i,o){return new Recipe(e,t,r,n,i,o)}destroy(){this.unsubscribe()}isCraftable(){return this.isLearned()&&this.getMaxCraftable()>0&&this.isNotUnderCooldown()}isNotUnderCooldown(){return null===this.craftService.getLastCraft(this.recipeId)}getMaxCraftable(){const{maxCount:e}=this.window.Crafting.checkRequirementsForRecipe(this.recipeId);return this.isWithCooldown()?Math.min(1,e):e}isDependent(){const{dependent:e}=this.window.Crafting.checkRequirementsForRecipe(this.recipeId);return e>0}isWithCooldown(){return!!this.item.blocktime}getDifficulty(){return this.isLearned()?this.window.Crafting.getRecipeColor(this.item):null}getName(){return this.item.name}isLearned(){return this.isMyProfession()&&this.craftService.isRecipeLearned(this.recipeId)}isLearnable(){if(!this.isMyProfession()||this.isLearned())return!1;const{Bag:e}=this.window;if(!e.items_by_id.hasOwnProperty(this.recipeId))return!1;const{ItemManager:t,Character:r}=this.window;return t.get(this.recipeId).min_level<=(r.professionSkill||0)}setCollapsed(e){e?(this.content.slideDown(250),this.collapse.text("-")):(this.content.slideUp(250),this.collapse.text("+"))}setCollapsedToggle(){this.setCollapsed("+"===this.collapse.text())}setVisible(e){e?this.container.show():this.container.hide()}getOffsetTop(){return this.title[0].offsetTop}getMainDiv(){var e;const{$:t,ItemPopup:r}=this.window,n=t('<div class="recipe_craftitem"></div>'),i=t('<div class="recipe_resources" style="overflow-x: auto; overflow-y: hidden; display: flex;"></div>');forEach(e=this.resources.widgets).call(e,e=>{try{addMinimapLink(e,this.window),i.append(e.getMainDiv())}catch(t){throw wrapError(t,`Error while adding resource #${e.obj.item_id}!`)}});try{n.append(this.craftingItem.getMainDiv())}catch(e){throw wrapError(e,`Error while adding the crafting item #${this.craftingItem.obj.item_id}!`)}this.isMyProfession()||this.craft.empty();const o=new r(this.item);return this.recipeName.attr("title",o.getXHTML()),this.content.append(i).append(n),this.initMainDiv(),this.container}initMainDiv(){this.logger.log("reloading main div of recipe...",this);const{ItemUse:e,Bag:t,Crafting:r,$:n}=this.window,i=this.getMaxCraftable(),o=this.isCraftable();this.difficulty.removeClass("middle hard easy");const a=this.getDifficulty();a&&this.difficulty.addClass(a).attr("title",r.description);const s=this.getPlusMinusField(o,i);if(this.craftAmount.empty().append(s.getMainDiv()),this.craft.empty(),o){const e=this.isDependent(),t=n('<a class="'+(e?"crafting_dependent":"crafting_independent")+'">'+this.language.getTranslation(177)+"</a>");t.on("click",()=>this.onStartCraft(this,s.getValue())),underline(t),e&&!this.window.Premium.hasBonus("automation")&&this.craft.append('<img src="/images/premium/automation.png" alt="premium_automation">'),this.craft.append(t)}else{const t=this.craftService.getLastCraft(this.recipeId);if(null!==t)this.craft.append('<span style="crafting_independent">'+t.formatDurationBuffWay()+"</span>");else if(this.isLearnable()){const t=n("<span>"+this.language.getTranslation(209)+"</span>");t.on("click",()=>{e.use(this.recipeId,()=>this.setIsLearned(),"recipe")}),underline(t),this.craft.append(t)}}const{widgets:l,items:c}=this.resources;zip(l,c,(e,r)=>e.setRequired(t.getItemCount(r.item.item_id),r.count)),this.craftingItem.setCount(t.getItemCount(this.craftingItem.obj.item_id)),this.recipeName.css("color",this.isLearned()?"white":"gray")}getMidLevel(){return this.item.skillcolor?this.item.max_level:this.item.min_level+Math.round((this.item.max_level-this.item.min_level)/2)}getMinLevel(){return this.item.min_level}getMaxLevel(){return this.item.max_level}getResources(){var e;const{ItemManager:t,tw2widget:r}=this.window,n=map(e=this.item.resources||[]).call(e,({item:e,count:r})=>"number"==typeof e?{item:t.get(e),count:r}:{item:e,count:r});return{items:n,widgets:map(n).call(n,e=>new r.CraftingItem(e.item).setRequired(0,e.count))}}setIsLearned(){this.logger.log("a recipe was learned",this),this.craftService.setLearnedRecipe(this.recipeId),this.initMainDiv()}isMyProfession(){return this.craftService.isProfession(this.item.profession_id)}getPlusMinusField(e,t){const{west:r}=this.window,n=e?1:t,i=e?1:t,o=new r.gui.Plusminusfield("TWCalc_Craft_"+this.recipeId,n,i,t,0,e=>callbackPlusminusButton(this.window,e),e=>callbackPlusminusButton(this.window,e),(e,t,r)=>callbackWheel(this.window,t,r),callbackInput);return o.setEnabled(e),o.divMain.on("mouseover",()=>o.divMain.attr("title",`Max: ${o.getMax()}`)),o}}function callbackPlusminusButton(e,t){const r=e.$(t.currentTarget).hasClass("butPlus")?1:-1;return callbackWheel(e,r,t.data.obj)}function callbackWheel(e,t,r){if(!r.enabled)return!1;const n=r.getValue()+t;return!(n>r.getMax()||n<r.getMin())&&(r.setValue(n),e.$("span.displayValue",r.getMainDiv()).text(r.getValue()),!0)}function callbackInput(e,t){t.setValue(1*e.currentTarget.value)}function addMinimapLink(e,t){const{$:r,Quest:n}=t,i=r('<div style="width: 16px; right: 7px; bottom: 10px; position: absolute"></div>'),o=r(n.getMinimapLink({id:e.obj.item_id,type:"inventory_changed"})).css({display:"block",width:"16px",position:"relative",opacity:"1",left:"4px"});e.getMainDiv().append(i.append(o))}function underline(e){e.on("mouseover",()=>e.css("text-decoration","underline")).on("mouseout",()=>e.css("text-decoration","none"))}const recipes={1:[2e7,20001e3,20002e3,20083e3,20084e3,20085e3,20086e3,20003e3,20004e3,52031e3,52515e3,52522e3,53342e3,53346e3,20005e3,20006e3,20007e3,52875e3,20008e3,20009e3,2001e4,20011e3,20012e3,20013e3,20014e3,20015e3,20016e3,20017e3,20116e3,20018e3,20134e3,20019e3,20096e3,2012e4,20124e3,20097e3,20098e3,20135e3,20099e3,201e5,20136e3,51622e3,51617e3,51621e3,51619e3,5162e4,51618e3,52524e3,53942e3,54383e3,54516e3,54517e3,54518e3,54519e3,5452e4,54623e3,5483e4],2:[2002e4,20021e3,20022e3,20081e3,20087e3,20088e3,20089e3,20023e3,20024e3,52032e3,52514e3,52521e3,53343e3,53347e3,20025e3,20026e3,20027e3,52876e3,20028e3,20029e3,2003e4,20031e3,20032e3,20033e3,20034e3,20035e3,20036e3,20037e3,20119e3,20038e3,20123e3,20128e3,20039e3,20101e3,20127e3,20102e3,20103e3,20129e3,20104e3,20105e3,2013e4,5164e4,51635e3,51639e3,51637e3,51638e3,51636e3,52523e3,53945e3,54386e3,54526e3,54527e3,54528e3,54529e3,5453e4,54625e3,54833e3],3:[2004e4,20041e3,20042e3,20082e3,2009e4,20091e3,20092e3,20043e3,20044e3,52034e3,52517e3,52519e3,53344e3,53348e3,20045e3,20046e3,20047e3,52878e3,20048e3,20049e3,2005e4,20051e3,20052e3,20053e3,20054e3,20055e3,20056e3,20057e3,20118e3,20058e3,20122e3,20131e3,20059e3,20111e3,20126e3,20112e3,20113e3,20132e3,20114e3,20115e3,20133e3,51634e3,51629e3,51633e3,51631e3,51632e3,5163e4,52526e3,53943e3,54384e3,54511e3,54512e3,54513e3,54514e3,54515e3,54622e3,54831e3],4:[2006e4,20061e3,20062e3,2008e4,20093e3,20094e3,20095e3,20063e3,20064e3,52033e3,52516e3,5252e4,53345e3,53349e3,20065e3,20066e3,20067e3,52877e3,20068e3,20069e3,2007e4,20071e3,20072e3,20073e3,20074e3,20075e3,20076e3,20077e3,20117e3,20078e3,20121e3,20137e3,20079e3,20106e3,20125e3,20107e3,20108e3,20138e3,20109e3,2011e4,20139e3,51628e3,51623e3,51627e3,51625e3,51626e3,51624e3,52525e3,53944e3,54385e3,54521e3,54522e3,54523e3,54524e3,54525e3,54624e3,54832e3]},twCalcIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAMAAABEio12AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQ4BAFtKL2pSN0IqEDcjDTQgDDAdBxQCACcSABsSCmVMNVc3IA8DAEw+MRcMBmBJMSEYDychGUUoFh0KAHNcP0EvHwoAAFpKOFVBJVRCKHxlUYhwV081GzAlGzghFB4VDGBHIy0XA1A3J3hQJ41oQlxJKCYfFYx3ZSwcDm9FJIBXMHlQH6B7VopoPE1BOj0qE1pFJ5RmKhoSC083H2ZNPHZcOZt3TpRmRWRSQV1OMVlKMFZEJzEiBlNDKUU1LW1XPZZ8bIhWNigXD5l0RHlYMXNILYRjOqp7RZh/YYVtU6iGXZRlNI1eLT4cA3BNMraEUGA+FJV3X5RlPYlcOWBMLEg4HmtbRGJFI0gyHYVTNW1ROZd0TKCNZaaTa2dBGlAsEpFzW4x2XnlVO3RHJl1HKF1INKJ+V3piQYJdN////000FR8GABoGAPn18kgxF/X08i8bBNHJwTIdCPPx8DYcAyELAR4UCkYgAlQ7HjQcDsm1omJPNDkeE9rV0FQ0FdrOwx0OA2NKLFAuFlQ6IywTBCITBUcmCy0XCTAWAquek0kwIT8nEXJHJSYYDHNnWmJBIlw7ITokCycTBEkpEunm49/TyOTb1KGVh11DKl9ILl5IJ3ZSLjsoGZGDdjwiG6+SejQiFDoeBVk/Jlg2HVAzJScKAC8bDkgqGhMAAIRrT19IOVA7NIdwW8rBtmU9G2lOMGtKIkwrDeTh4HJCG7uUdJhjNNTLxINPKryvpWhELLCZhZtyTUQdBKGFZeDX0Laqn9TNyHhdRFQoGkEqHm9JNIxdLY11XlU1Gp6MgXxVL2A8Gd3Y1GA4HaWZjtLGunpKJntHHsO7tGY4FcKvm4JZL2QvCkweBqyYipJdPX1jSNPPzDkpFbixrNG+qNnRy1lDM21VR5WJg7CAUYd2aXlwaFw2E72hiXhjTmpMKlVGN8bBvJdoPYRZPXFTPL+SZK6ln4JtYPLs5urbz8qslXBPItC9r5R5aL+1rYhdSqCLdm1CIquDaV4lCujg1mVJJMWpjVXPAa8AAADcdFJOU+v+/v7s/uvs7P6vr/2v/uz+/a/rr/7rr8j+r6+t/q/rr+z+r6/s66/9r3jO6+uvyO2v6/3+66qvr+3tr8jtr6/rr6+vocivyNnr68jI7a+v6uui68jI7aLtyOvr6evZ6/2h6+v49fbr9v/////////////////////////////////////+///////////////////////////+///////////////////////////+//////////////////////////////////////////////////////////5vmyxZAAAEkElEQVQYGQXBeUxTBwAH4N+7etGbtlBKLUWq6ISJaBSELVwuLioaJJku02k8NhPMnDrFzSsSnZubV7Y5/9hkW7LFIwuTaSaSaQaoEfFEDqEFKi09aOn5aPvat+8j5ha0x4qmABfMtigASGaP5GEIKblbGmZVplHTOEwP5QBQRgzKEAJRTT8MKwC4AQAAdIGYMJZe4NEH2MK/AR3SIm6YbYUcG9FSHJHtJiScgAQSYD5lEme2nW8433AhBeDnlo5NOedWxY8fEOi1dd8Ta7UXPrrmPjKRic3E2/cPNQENyJgGRC7g4raML4Qpkltzc+CERcyOCQo90UAGPDoxbBl24HgDJXI5Lkrnx+O+9bl3Pg5tyK45uaQqqzmjpIOt9JE9E2x4eJ75QSPpWmwN5Ne1LE3sUlKE+HDaEACM9CT6Vl5tH2qeqLp/7+IroXdtj9IDAGmdSVmfpNVjcfS6rcVDLBmNvLydD2xNY5rgfUsMTPachuazRq2iAq8PA7qzlRtxJWch8Gb5cxTUlNaTSpzFAPBrueoScMgB/LIXkNo3q4jfNWIdgHOtXoD/D2gOA+W3HQ9IAuAAAP65wKAXiH4LzOS2PwM4+V8AqmcTQOdzIN4PuCmTlYR+OzQAHnECCaYh0GAa8NE/wmSk4QFgN82n4QZdgBeA1MwsI/lxWk4BtVPM01IAy1cDqLZeAU8lvOsAAFS3GoBsNYBT3lGOIkH8EGSBaLFzZArAyywA7uiO+TOQSfykBXTZY5l7AJT2ALhsgHOMlAFZ0kIUOIzTz49iN/31Qmxm8mj/mHWymAnshKVbnRxYiVpdfCfq1z0UVJOUZYIvTB2seTTNcUQH02l2eRgJTTtMo0Rxt0/6FDaf/JaBGre0VnsrpIzCNGSnEnSDLjc/N2n0p8tkNb0WubbsxtJJVYB/3RRbEvMxkuI2tSiaoFldbDDZTlwNPiaVYYWzX2TVuJJCp/OuGB5Ph6RDJIkO61pxI35EVRHUIPk5kkY4bWmhLuEsPSVi25bPsAfjqgWd7zPWfdpwUXeECR5951loxUSlSOvYGim71bjIF5ujfKPtyfKldfkbSD935IPuqhzp+ha4J8iTV0qaU/uleRifzdTz439W7Tk45xSCxv5+o+vYMdVtaqiPJpUKfzv6XfwIdt+kAQcB429Tz87OUsr/GMxGtK/0FE7ubwckOlzbVTEswWOSiNytg33l4nv4Bgs4lCqwYseyInrVFIylr6Hu6tqHfYgCl9yIns4tsT9ZRPIp/6395GWDLafy+Is10X9HN353gFhE3FFMmu1f5rT4txzKea+W38UNt+4c9BMvk4lGQh3ZImE18AK8BKyYLenSesWAcvB6o/GRQj5mjNvkc/pQ+wA+kZE24H6K1gabsyMhAoD0k3TBRrSEwcvS3pUG8npF7Bnl3qYTX8n++RBzeeIYwVvrUWYgNjkHHJkQxoTSXtNkRO/MgFCKHrpG22/AdUUIKYAkUzDMQxsHWu9YE6Diene05AUdId18KEuVmkeIBWqXuoziHLSv6BVJasl0pKhyNafMnmkxR9QC/n+f2e8W3vECWAAAAABJRU5ErkJggg==";class CraftView{profession;craftService;window;logger;language;errorTracker;noResults;collapseAll;progressBar;search;scrollpane;filters={craftableOnly:!1,difficulty:null,search:""};recipes;constructor(e,t,r,n,i,o){var a,s;this.profession=e,this.craftService=t,this.window=r,this.logger=n,this.language=i,this.errorTracker=o;const{west:l,Character:c,$:u}=this.window;this.logger.log("initializing craft view..."),this.progressBar=(new l.gui.Progressbar).setValue(c.professionSkill||0),this.search=(new l.gui.Textfield).setPlaceholder(this.language.getTranslation(220)),this.search.addKeyUpListener(()=>{this.filters.search=this.search.getValue(),this.apply()}),this.scrollpane=new l.gui.Scrollpane,this.recipes=map(a=recipes[this.profession]).call(a,e=>Recipe.of(e,this.craftService,this.window,this.language,this.logger,(e,t)=>this.startCraft(e,t))),sort(s=this.recipes).call(s,function(e,t){let r=e.getMinLevel()-t.getMinLevel();return 0!=r?r:(r=e.getMidLevel()-t.getMidLevel(),0!=r?r:e.getMaxLevel()-t.getMaxLevel())}),this.noResults=u('<div style="margin: 8px; text-align: center; font-weight: bold;"><p>No results</p></divs>'),this.noResults.hide(),this.collapseAll=this.getCollapseAllDiv()}static of(e,t,r,n,i,o){return new CraftView(e,t,r,n,i,o)}destroy(){var e;this.logger.log("destroying craft view..."),forEach(e=this.recipes).call(e,e=>e.destroy())}getFiltersDiv(){const{Crafting:e,$:t,west:r}=this.window,n=e.description.split("<br />"),i=t('<div style="align-items: center; display: flex; flex-direction: row;"></div>'),o=new r.gui.Checkbox("").setValue(!0).setTooltip(this.language.getTranslation(176)).setSelected(!1);o.setCallback(()=>{this.filters.craftableOnly=o.isSelected(),this.apply()}),i.append(o.getMainDiv()),i.append("&nbsp;|&nbsp;");const a=[null,"hard","medium","easy"];return forEach(a).call(a,(e,t)=>{const o=new r.gui.Checkbox("","TWCalc_CraftFilter").setValue(e).setSelected(null===e).setRadiobutton().setTooltip(t?n[t-1]:"All");o.setCallback(()=>{this.filters.difficulty=o.getValue(),this.apply()}),i.append(o.getMainDiv())}),i}show(e){this.logger.log(`showing recipe id = ${e}`);const t=this.getRecipe(e),r=(this.scrollpane.clipPane[0].clientHeight-30)/this.scrollpane.contentPane[0].clientHeight*t.getOffsetTop();this.scrollpane.scrollTo(0,r,!0),t.setCollapsed(!0)}apply(){var e;this.logger.log("apply craft filter...",this.filters);const t=this.filters;let r=0;forEach(e=this.recipes).call(e,e=>{const n=(null===t.difficulty||t.difficulty===e.getDifficulty())&&(!t.craftableOnly||e.isCraftable())&&(!t.search.length||-1!==e.getName().toLowerCase().search(t.search.toLowerCase()));n&&r++,e.setVisible(n)}),r?(this.collapseAll.show(),this.noResults.hide()):(this.collapseAll.hide(),this.noResults.show()),this.scrollpane.scrollToTop()}getMainDiv(){const{$:e,west:t}=this.window,r=e(`<div id="TWCalcCraft_${this.profession}"></div>`),n=new t.gui.Groupframe,i=e('<div style="display: flex; justify-content: space-between; flex-direction: row; align-items: center;"></div>');if(this.progressBar.setMaxValue(this.craftService.maxProfessionSkill),this.search.setWidth(this.isMyProfession()?200:624),i.append(this.search.getMainDiv()),this.isMyProfession()){const e=this.progressBar.getMainDiv().css("width",300);i.append(e)}this.isMyProfession()&&i.append(this.getFiltersDiv()),n.appendToContentPane(i),r.append(n.getMainDiv()),this.scrollpane.appendContent(this.collapseAll),this.scrollpane.appendContent(this.getRecipes()),this.scrollpane.appendContent(this.noResults);const o=e(this.scrollpane.getMainDiv()).css({height:293,"text-align":"center"});return r.append(o),r.append(e('<a href="//tw-calc.net/craft/'+this.profession+'" target="_blank" title="Show this profession on tw-calc.net"><div style="background-position: 0 0; background-image: url('+twCalcIcon+'); width: 25px; height: 25px; position: absolute; bottom: 0; left: 5px"></div></a>')),r}startCraft(e,t){this.logger.log(`start craft recipe id ${e.recipeId} (amount = ${t})`);const{Ajax:r,Character:n,MessageError:i,EventHandler:o,MessageSuccess:a}=this.window,s=e=>{var t;n.setProfessionSkill(e.msg.profession_skill),n.updateDailyTask("crafts",e.msg.count),o.signal("inventory_changed"),this.progressBar.setValue(n.professionSkill||0),forEach(t=this.recipes).call(t,e=>e.initMainDiv()),a(e.msg.msg).show()};r.remoteCall("crafting","start_craft",{recipe_id:e.recipeId,amount:t},t=>{t.error?i(t.msg).show():e.isWithCooldown()?this.craftService.update(()=>s(t)):s(t)})}getRecipes(){var e;const{$:t}=this.window,r=t("<div></div>");return forEach(e=this.recipes).call(e,e=>{this.errorTracker.execute(()=>r.append(e.getMainDiv()),`Error while adding recipe #${e.recipeId}!`)}),r}getRecipe(e){var t;const r=find(t=this.recipes).call(t,t=>t.recipeId===e);if(!r)throw new Error(`recipe (id = ${e}) not found`);return r}getCollapseAllDiv(){const{$:e}=this.window,t=e('<div id="recipe_title_" class="recipe_title" style="display: inline-block; text-align: left;"></div>'),r=e('<div class="recipe_title_inner"></div>'),n=e('<div class="recipe_collapse">+</div>');return r.append('<div id="recipe_difficult_" class="recipe_difficult"></div>'),r.append('<div id="recipe_name" class="recipe_name">'+this.language.getTranslation(178)+"</div>"),e(t).on("click",()=>{var e;const t="+"===n.text();forEach(e=this.recipes).call(e,e=>e.setCollapsed(t)),n.text(t?"-":"+")}),t.append(n).append(r)}isMyProfession(){return this.craftService.isProfession(this.profession)}}__decorate([CatchErrors("CraftView.destroy"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],CraftView.prototype,"destroy",null),__decorate([CatchErrors("CraftView.getFiltersDiv"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],CraftView.prototype,"getFiltersDiv",null);let CraftViewFactory=class{window;logger;craftService;language;errorTracker;constructor(e,t,r,n,i){this.window=e,this.logger=t,this.craftService=r,this.language=n,this.errorTracker=i}getWindowView(e,t){let r;return this.logger.log("get window view of craft profession...",e),{key:e,title:t,loader:!0,init:({loadCallback:e,options:t})=>{if(!r||void 0===t)return e();setTimeout$1(()=>{this.errorTracker.execute(()=>{r.show(t.showRecipe.id)})},250),e()},destroy:()=>{r&&r.destroy()},getMainDiv:()=>(r=CraftView.of(e,this.craftService,this.window,this.logger,this.language,this.errorTracker),this.window["a"+e]=r,r.getMainDiv())}}};CraftViewFactory=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,CraftService,Language,ErrorTracker])],CraftViewFactory);class CraftWindow extends TW2Window{window;craftViewFactory;craftService;errorTracker;constructor(e,t,r,n,i,o){super("TWCalcCraft",o,e,t,r,{title:{type:"translation",translation:183}}),this.window=e,this.craftViewFactory=n,this.craftService=i,this.errorTracker=o;for(let e=1;e<=4;e++)this.addView(this.craftViewFactory.getWindowView(e,{type:"translation",translation:craftTranslations[e]}))}open(e){super.open(e),this.craftService.update()}}__decorate([CatchErrors("CraftWindow.open"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],CraftWindow.prototype,"open",null);let Craft=class{window;language;logger;craftService;craftViewFactory;errorTracker;craftWindow;productRecipe;constructor(e,t,r,n,i,o){this.window=e,this.language=t,this.logger=r,this.craftService=n,this.craftViewFactory=i,this.errorTracker=o,this.craftWindow=new CraftWindow(e,this.language,this.logger,this.craftViewFactory,this.craftService,this.errorTracker)}init(){this.craftService.init()}open(){this.craftWindow.open({tab:this.getCurrentProfession()})}openCraftRecipeWindow(e){const{MessageError:t,ItemManager:r}=this.window;this.logger.log(`show recipe for productId = ${e}`);const n=this.getRecipeForProduct(e);if(n){const t=r.get(n).profession_id;this.logger.log(`there is a profession (id = ${t}) with recipe (id = ${n}) for the product (id = ${e})`),this.craftWindow.open({tab:t,tabInitOptions:{showRecipe:{id:n}}})}else t("There is no recipe for this product!").show()}getCurrentProfession(){return this.window.Character.professionId||0}getRecipeForProduct(e){if(!this.productRecipe){var t;const e=this.productRecipe={};forEach(t=values$1(recipes)).call(t,t=>{forEach(t).call(t,t=>{const r=this.window.ItemManager.get(t).craftitem;e[r]=t})})}const r=this.productRecipe[e];return r||null}};var DuelBarPosition,SettingBoolean,SettingNumber;__decorate([CatchErrors("Craft.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Craft.prototype,"init",null),__decorate([CatchErrors("Craft.open"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Craft.prototype,"open",null),__decorate([CatchErrors("Craft.openCraftRecipeWindow"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number]),__metadata("design:returntype",void 0)],Craft.prototype,"openCraftRecipeWindow",null),Craft=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Language,Logger,CraftService,CraftViewFactory,ErrorTracker])],Craft),function(e){e[e.up=1]="up",e[e.down=2]="down",e[e.hidden=4]="hidden"}(DuelBarPosition||(DuelBarPosition={})),function(e){e.Wardrobe="Wardrobe",e.MenuCraftButton="MenuCraftButton",e.TransferFeeCalc="TransferFeeCalc",e.XpHpEnergyCalc="XpHpEnergyCalc",e.WestCalc="WestCalc"}(SettingBoolean||(SettingBoolean={})),function(e){e.NearestJobsBar="NearestJobsBar",e.DuelBar="DuelBar"}(SettingNumber||(SettingNumber={}));let Settings=class{language;storage;logger;window;defaults={[SettingBoolean.Wardrobe]:!0,[SettingBoolean.MenuCraftButton]:!0,[SettingBoolean.TransferFeeCalc]:!0,[SettingBoolean.XpHpEnergyCalc]:!0,[SettingBoolean.WestCalc]:!0,[SettingNumber.NearestJobsBar]:1,[SettingNumber.DuelBar]:1};constructor(e,t,r,n){this.language=e,this.storage=t,this.logger=r,this.window=n}save(e){const t={};forEach(e).call(e,e=>{t[e.name]=getValue(e)}),this.logger.log("saving settings...",t),this.storage.setObject(StorageKey.settings,t),this.window.MessageSuccess(this.language.getTranslation(88)).show()}get(e){if(this.storage.has(StorageKey.settings)){const t=this.storage.getObject(StorageKey.settings)[e];if(void 0!==t)return t}return this.defaults[e]}};function getValue(e){return isBooleanSetting(e)?e.controller.isSelected():isNumberSetting(e)?e.controller.getValue():void 0}function isBooleanSetting(e){return"checkbox"===e.behaviour.type}function isNumberSetting(e){return"combobox"===e.behaviour.type}function WaitUntil(e,t=100,r=4e3,n=window){return function(i,o,a){const s=a.value;let l,c=0;a.value=function(){c=now(),l=n.setInterval(()=>{if(satisfies(bind$1(e).call(e,this)))return n.clearInterval(l),bind$1(s).call(s,this,...from_1(arguments))();r&&r>0&&now()-c>r&&(this.logger.warn("wait until timeout exceeded"),n.clearInterval(l))},t)}}}function satisfies(e){try{return e()}catch(e){return!1}}Settings=__decorate([singleton(),__param(3,inject$1("window")),__metadata("design:paramtypes",[Language,Storage,Logger,Object])],Settings);var $entries=require$$0$o.entries;$$1({target:"Object",stat:!0},{entries:function(e){return $entries(e)}});var entries$2=path.Object.entries,parent$b=entries$2,entries$1=parent$b,require$$0$g=entries$1,entries=require$$0$g,floor=Math.floor,isIntegralNumber$1=Number.isInteger||function(e){return!isObject(e)&&isFinite(e)&&floor(e)===e},isIntegralNumber=isIntegralNumber$1;$$1({target:"Number",stat:!0},{isInteger:isIntegralNumber});var isInteger$2=path.Number.isInteger,parent$a=isInteger$2,isInteger$1=parent$a,require$$0$f=isInteger$1,isInteger=require$$0$f,globalIsFinite=globalThis$1.isFinite,numberIsFinite$1=Number.isFinite||function(e){return"number"==typeof e&&globalIsFinite(e)},numberIsFinite=numberIsFinite$1;$$1({target:"Number",stat:!0},{isFinite:numberIsFinite});var _isFinite$2=path.Number.isFinite,parent$9=_isFinite$2,_isFinite$1=parent$9,require$$0$e=_isFinite$1,_isFinite=require$$0$e,WestCalcWindowTab;!function(e){e.Settings="settings",e.Notepad="notepad",e.Import="import",e.BattleCalc="battle-calc",e.DuelCalc="duel-calc",e.Tombola="tombola",e.Character="character"}(WestCalcWindowTab||(WestCalcWindowTab={}));const numericInputOptionsDefaults={label:void 0,inputWidth:100,labelWidth:180,isIntegerOnly:!0};let BattleCalcView=class{window;language;storage;config;battleCalc;logger;errorTracker;key=WestCalcWindowTab.BattleCalc;title={type:"translation",translation:214};constructor(e,t,r,n,i,o,a){this.window=e,this.language=t,this.storage=r,this.config=n,this.battleCalc=i,this.logger=o,this.errorTracker=a}calculate(){if(!this.window.$("#BattleCalc").length)return;const{charClass:e,premium:t,level:r,health:n,leadership:i,pitfall:o,hide:a,dodge:s,aim:l,mapPosition:c,charTower:u,damageBonus:d,dodgeBonus:g,resistanceBonus:p,hitBonus:h,weaponMax:f,weaponMin:y}=this.getCachedInput(),$={charClass:e,premium:t,level:r,skills:{health:n,leadership:i,pitfall:o,hide:a,dodge:s,aim:l},mapPosition:c,charTower:u,damage:[y,f],bonus:{attack:h,defense:g,resistance:p,damage:d}};this.logger.log("calculating battle calc based on input...",$);const w=this.battleCalc.getInstance().coreCalc($,!1);this.logger.log("battle calc calculation finished",w);const m="#TW_Calc_BattleCalc_";this.window.$(m+"AttackHit").text(w.attack.hit),this.window.$(m+"AttackDodge").text(w.attack.dodge),this.window.$(m+"DefenseHit").text(w.defense.hit),this.window.$(m+"DefenseDodge").text(w.defense.dodge),this.window.$(m+"HealthOutput").text(w.health+" HP"),this.window.$(m+"AttackResistance").text(w.attack.resistance),this.window.$(m+"AttackResistanceBonus").text(`(+${w.attack.resistance_bonus})`),this.window.$(m+"DefenseResistance").text(w.defense.resistance),this.window.$(m+"DefenseResistanceBonus").text(`(+${w.defense.resistance_bonus})`),this.window.$(m+"DamageOutput").text(w.damage)}getCachedInput(){const e={health:0,dodge:0,hide:0,aim:0,pitfall:0,leadership:0,weaponMin:50,weaponMax:110,level:1,charClass:"greenhorn",mapPosition:0,premium:!1,charTower:!1,hitBonus:0,dodgeBonus:0,resistanceBonus:0,damageBonus:0};return this.storage.has(StorageKey.battleCalc)?assign(e,this.storage.getObject(StorageKey.battleCalc)):e}init(){this.calculate()}getMainDiv(){var e,t,r;if(!this.battleCalc.isAvailable())return this.battleCalc.load(),$("<div>Battle calc core script is not loaded yet, reopen this window in a few seconds.</div>");const{west:n}=this.window,i=$("<div></div>"),o=(new n.gui.Groupframe).appendToContentPane('<div style="font-weight: bold; font-size: large;">'+this.language.getTranslation(4)+"</div>"),a={health:this.language.getTranslation(29),dodge:this.language.getTranslation(8),hide:this.language.getTranslation(6),aim:this.language.getTranslation(9),pitfall:this.language.getTranslation(193),leadership:this.language.getTranslation(5)};forEach(e=entries(a)).call(e,([e,t])=>{o.appendToContentPane($("<div></div>").append(this.getNumericInput(e,{label:t})))});const s=(new n.gui.Groupframe).appendToContentPane('<div style="font-weight: bold; font-size: large;">'+this.language.getTranslation(32)+"</div>");s.appendToContentPane($("<div></div>").append(this.getNumericInput("level",{label:this.language.getTranslation(30)}))),s.appendToContentPane($("<div></div>").append(this.getNumericInput("weaponMin",{label:this.language.getTranslation(201),inputWidth:50,labelWidth:140})).append("&nbsp;-&nbsp;").append(this.getNumericInput("weaponMax",{inputWidth:50}))),s.appendToContentPane('<div style="font-weight: bold;">'+this.language.getTranslation(32)+"</div>");const l=new n.gui.Combobox("TWCalc_Character").setWidth(100);l.addListener(this.onInputChange("charClass",()=>l.getValue())),s.appendToContentPane(l.addItem("greenhorn",this.language.getTranslation(38)).addItem("soldier",this.language.getTranslation(41)).addItem("worker",this.language.getTranslation(42)).addItem("duelist",this.language.getTranslation(39)).addItem("adventurer",this.language.getTranslation(40)).select(this.getCachedInputValue("charClass")).getMainDiv()),s.appendToContentPane('<div style="font-weight: bold;">'+this.language.getTranslation(18)+"</div>");const c=new n.gui.Combobox("TWCalc_Place").setWidth(100);c.addListener(this.onInputChange("mapPosition",()=>c.getValue())),s.appendToContentPane(c.addItem(0,this.language.getTranslation(21)).addItem(1e4,this.language.getTranslation(223)).addItem(10001,this.language.getTranslation(224)).addItem(100,this.language.getTranslation(22)+" 0").addItem(1,this.language.getTranslation(22)+" 1").addItem(2,this.language.getTranslation(22)+" 2").addItem(3,this.language.getTranslation(22)+" 3").addItem(4,this.language.getTranslation(22)+" 4").addItem(5,this.language.getTranslation(22)+" 5").addItem(1e3,this.language.getTranslation(203)+" 0").addItem(11,this.language.getTranslation(203)+" 1").addItem(12,this.language.getTranslation(203)+" 2").addItem(13,this.language.getTranslation(203)+" 3").addItem(14,this.language.getTranslation(203)+" 4").addItem(15,this.language.getTranslation(203)+" 5").select(this.getCachedInputValue("mapPosition")).getMainDiv());const u={premium:this.language.getTranslation(2),charTower:this.language.getTranslation(20)},d=$("<div></div>");forEach(t=entries(u)).call(t,([e,t])=>{const r=new n.gui.Checkbox(t).setId(e).setSelected(this.getCachedInputValue(e));r.setCallback(this.onInputChange(e,()=>r.isSelected())),$(d).append($('<div style="margin: 2px 0"></div>').append(r.getMainDiv()))}),s.appendToContentPane(d);const g=(new n.gui.Groupframe).appendToContentPane('<div style="font-weight: bold; font-size: large;">'+this.language.getTranslation(202)+"</div>"),p={hitBonus:this.language.getTranslation(14),dodgeBonus:this.language.getTranslation(51),resistanceBonus:this.language.getTranslation(140),damageBonus:this.language.getTranslation(141)};forEach(r=entries(p)).call(r,([e,t])=>{g.appendToContentPane($("<div></div>").append(this.getNumericInput(e,{label:t,isIntegerOnly:!1})))}),i.append(o.getMainDiv()).append(s.getMainDiv()).append(g.getMainDiv());const h=(new n.gui.Groupframe).appendToContentPane('<div style="font-weight: bold; font-size: 18px; color: darkred; margin: 6px 0">'+this.language.getTranslation(31)+'</div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(14)+'</div><div><span style="display: inline-block; width: 24px; text-align: center"><img alt="attacker_primary" src="'+this.config.cdn+'/images/fort/battle/attacker_primary.png"></span><span id="TW_Calc_BattleCalc_AttackHit">0</span></div></div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(51)+'</div><div><span style="display: inline-block; width: 24px; text-align: center"><img alt="defender_secondary" src="'+this.config.cdn+'/images/fort/battle/defender_secondary.png"></span><span id="TW_Calc_BattleCalc_AttackDodge">0</span></div></div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(140)+'</div><div><span style="display: inline-block; width: 24px; text-align: center"><img alt="resistance" src="'+this.config.cdn+'/images/fort/battle/resistance.png"></span></span><span id="TW_Calc_BattleCalc_AttackResistance">0</span> <span id="TW_Calc_BattleCalc_AttackResistanceBonus">0</span></div></div><div style="font-weight: bold; font-size: 18px; color: darkblue; margin: 6px 0">'+this.language.getTranslation(33)+'</div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(14)+'</div><div><span style="display: inline-block; width: 24px; text-align: center"><img alt="attacker_primary" src="'+this.config.cdn+'/images/fort/battle/attacker_primary.png"></span><span id="TW_Calc_BattleCalc_DefenseHit">0</span></div></div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(51)+'</div><div><span style="display: inline-block; width: 24px; text-align: center"><img alt="defender_secondary" src="'+this.config.cdn+'/images/fort/battle/defender_secondary.png"></span><span id="TW_Calc_BattleCalc_DefenseDodge">0</span></div></div><div style="margin: 2px 0"><div style="font-weight: bold;">'+this.language.getTranslation(140)+'</div><div><span style="display: inline-block; text-align: center; width: 24px;"><img alt="resistance" src="'+this.config.cdn+'/images/fort/battle/resistance.png"></span></span><span id="TW_Calc_BattleCalc_DefenseResistance">0</span> <span id="TW_Calc_BattleCalc_DefenseResistanceBonus">0</span></div></div><div style="margin-top: 12px"><div style="margin: 2px 0"><div style="font-size: 13px; font-weight: bold">'+this.language.getTranslation(28)+':&nbsp;<span id="TW_Calc_BattleCalc_HealthOutput">0</span></div></div><div style="margin: 2px 0"><div style="font-size: 13px; font-weight: bold">'+this.language.getTranslation(141)+':&nbsp;<span id="TW_Calc_BattleCalc_DamageOutput">0</span></div></div></div>'),f=$('<div id="BattleCalc"></div>');return f.append($('<div style="width: 350px; height: 355px; position: absolute; top: 10px; left: 0"></div>').append((new n.gui.Scrollpane).appendContent(i).getMainDiv())).append($('<div style="width: 340px; height: 355px; position: absolute; top: 10px; right: 5px"></div>').append((new n.gui.Scrollpane).appendContent(h.getMainDiv()).getMainDiv())),f}getNumericInput(e,t=numericInputOptionsDefaults){const r=new this.window.west.gui.Textfield,n=assign({...numericInputOptionsDefaults},t);return void 0!==n.label&&r.setLabel('<span style="display: inline-block; font-weight: bold; width: '+n.labelWidth+'px;">'+n.label+"</span>"),n.isIntegerOnly&&r.onlyNumeric(),r.setWidth(n.inputWidth).setValue(this.getCachedInputValue(e)).addKeyUpListener(this.onInputChange(e,()=>{const e=Number(r.getValue().replace(/,/,"."));return n.isIntegerOnly&&!isInteger(e)||!_isFinite(e)?0:e})).getMainDiv()}onInputChange(e,t){return()=>{this.errorTracker.execute(()=>{this.setCachedInputValue(e,t()),this.calculate()})}}getCachedInputValue(e){const t=this.getCachedInput();if(!t)throw new Error;if(!(e in t))throw new Error(`key "${e}" does not exist on battle calc view input!`);return t[e]}setCachedInputValue(e,t){const r=this.getCachedInput();if(!(e in r))throw new Error(`key "${e}" does not exist on battle calc view input!`);r[e]=t,this.storage.setObject(StorageKey.battleCalc,r)}};__decorate([CatchErrors("BattleCalcView.calculate"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],BattleCalcView.prototype,"calculate",null),__decorate([CatchErrors("BattleCalcView.getCachedInput"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],BattleCalcView.prototype,"getCachedInput",null),BattleCalcView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Language,Storage,Config,BattleCalc,Logger,ErrorTracker])],BattleCalcView);let CharacterView=class{window;config;language;battleCalc;key=WestCalcWindowTab.Character;title={type:"translation",translation:212};constructor(e,t,r,n){this.window=e,this.config=t,this.language=r,this.battleCalc=n}init(){const{Character:e,Premium:t,CharacterSkills:r}=this.window,n=this.window.$("#BattleCalcCharacterView");if(!n.length)return;const i={charClass:e.charClass,premium:t.hasBonus("character"),level:e.level,skills:{health:r.skills.health.getPointsWithBonus(),leadership:r.skills.leadership.getPointsWithBonus(),pitfall:r.skills.pitfall.getPointsWithBonus(),hide:r.skills.hide.getPointsWithBonus(),dodge:r.skills.dodge.getPointsWithBonus(),aim:r.skills.aim.getPointsWithBonus()},mapPosition:0,charTower:!1,damage:[0,0],bonus:{attack:0,defense:0,resistance:0,damage:0}},o=this.battleCalc.getInstance().coreCalc(i,!0);this.window.$("#data-attack-hit",n).text(o.attack.hit),this.window.$("#data-attack-dodge",n).text(o.attack.dodge),this.window.$("#data-attack-resistance",n).text(o.attack.resistance),this.window.$("#data-attack-resistance-bonus").text(`(+${o.attack.resistance_bonus})`),this.window.$("#data-defense-hit",n).text(o.defense.hit),this.window.$("#data-defense-dodge",n).text(o.defense.dodge),this.window.$("#data-defense-resistance",n).text(o.defense.resistance),this.window.$("#data-defense-resistance-bonus").text(`(+${o.defense.resistance_bonus})`),this.window.$("#data-health",n).text(o.health),this.window.$("#data-damage",n).text(o.damage)}getMainDiv(){if(!this.battleCalc.isAvailable())return this.battleCalc.load(),$("<div>Battle calc core script is not loaded yet, reopen this window in a few seconds.</div>");const e=$('<div id="BattleCalcCharacterView"></div>'),t=["health","dodge","hide","aim","pitfall","leadership"],r=new this.window.west.gui.Groupframe;for(let e=0;e<t.length;e++){const n=t[e],i=this.window.CharacterSkills.skills[n].name,o=this.window.CharacterSkills.skills[n].getPointsWithBonus();r.appendToContentPane(`<div style="display: inline-block; width: 88px; height: 60px;">\n                <img class="skillicon" src="${this.config.cdn}/images/window/skills/skillicon_${n}.png" title="${i}" alt="${i}" />\n                <div class="tw2gui_plusminus">\n                    <span class="displayValueBonus text_green unselectable" style="display: inline-block; width: 56px;">${o}</span>                 \n                </div>\n            </div>`)}e.append($('<div style="margin-top: 10px; text-align: center"></div>').append(r.getMainDiv()));const n=new this.window.west.gui.Groupframe;return n.appendToContentPane($('<table style="width: 100%; height: 180px; font-size: 16px"><tr><td style="width: 33%"><div style="margin: 6px 0; font-weight: bold; font-size: 18px; color: darkred;">'+this.language.getTranslation(31)+'</div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(14)+'</div><div id="data-attack-hit"></div></div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(51)+'</div><div id="data-attack-dodge"></div></div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(140)+'</div><div><span id="data-attack-resistance"></span> <span id="data-attack-resistance-bonus"></span></div></div></td><td style="width: 33%"><div style="margin: 6px 0; font-weight: bold; font-size: 18px; color: darkblue;">'+this.language.getTranslation(33)+'</div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(14)+'</div><div id="data-defense-hit"></div></div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(51)+'</div><div id="data-defense-dodge"></div></div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(140)+'</div><div><span id="data-defense-resistance"></span> <span id="data-defense-resistance-bonus"></span></div></div></td><td style="width: 33%"><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(28)+': </div><span><span id="data-health"></span> HP</span></div><div style="margin: 4px 0"><div style="font-weight: bold; margin: 2px 0; font-size: 15px">'+this.language.getTranslation(141)+': </div><span id="data-damage"></span></div></td></tr></table>')),e.append(n.getMainDiv()),e}};CharacterView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Language,BattleCalc])],CharacterView);let DuelCalcView=class{window;language;key=WestCalcWindowTab.DuelCalc;title={type:"translation",translation:215};constructor(e,t){this.window=e,this.language=t}init(){this.calcMaxDuelLevel(),this.calcExperience()}getMainDiv(){const e=$("<div></div>");return e.append(this.getMaxDuelLevelCalculatorContent()),e.append(this.getMotivationCalculatorContent()),e}calcMaxDuelLevel=()=>{};calcExperience=()=>{};getMaxDuelLevelCalculatorContent(){const e=this.window.$(`<div><div><h4>${this.language.getTranslation(63)}</h4></div></div>`),t=$('<span style="font-weight: bold"></span>'),r=$('<span style="font-weight: bold"></span>'),n=(new this.window.west.gui.Textfield).setId("TWCalc_DuelLevel").setWidth(100).setLabel(this.language.getTranslation(66)).setValue(this.window.Character.duelLevel.toString());return this.calcMaxDuelLevel=getMaxDuelLevelFunction(n,r,t),n.addKeyUpListener(this.calcMaxDuelLevel),e.append(n.getMainDiv()),e.append($(`<div><span>${this.language.getTranslation(69)}:&nbsp;</span></div>`).append(t)),e.append($(`<div><span>${this.language.getTranslation(68)}:&nbsp;</span></div>`).append(r)),(new this.window.west.gui.Groupframe).appendToContentPane(e).getMainDiv()}getMotivationCalculatorContent(){const e=this.window.$(`<div><div><h4>${this.language.getTranslation(64)}</h4></div></div>`),t=(new this.window.west.gui.Textfield).setId("TWCalc_DuelLevel1").setWidth(100).setLabel(this.language.getTranslation(66)).onlyNumeric().setValue(this.window.Character.duelLevel.toString()),r=(new this.window.west.gui.Textfield).setId("TWCalc_DuelLevel2").setWidth(100).setLabel(this.language.getTranslation(70)).onlyNumeric().setValue(this.window.Character.duelLevel+10),n=this.window.Character.duelMotivation,i=(new this.window.west.gui.Textfield).setId("TWCalc_DuelLevelMotivation").setWidth(100).setLabel(`<img alt="motivation" src="images/job/motivation.png"> ${this.language.getTranslation(71)}`).onlyNumeric().setValue(n?100*n:100),o=$('<div style="margin-top: 16px"></div>');this.calcExperience=getDuelExperienceFunction(t,r,i,o,this.language);const a=(new this.window.west.gui.Button).setCaption(this.language.getTranslation(67)).click(this.calcExperience).getMainDiv();return e.append($("<div></div>").append(t.getMainDiv())),e.append($("<div></div>").append(r.getMainDiv())),e.append($("<div></div>").append(i.getMainDiv())),e.append($("<div></div>").append(a)),e.append($("<div></div>").append(o)),(new this.window.west.gui.Groupframe).appendToContentPane(e).getMainDiv()}};function getMaxDuelLevelFunction(e,t,r){return function(){const n=Number(e.getValue());t.html(Math.floor(1.4*n).toString()),r.html(Math.ceil(n/1.4).toString())}}function getDuelExperienceFunction(e,t,r,n,i){return function(){const o=Number(e.getValue()),a=Number(t.getValue()),s=Number(r.getValue())/100*(7*a-5*o+5),l=3*Math.round(s),c=Math.round(s/3),u=`<div>${i.getTranslation(86)} <b>${l}</b> ${i.getTranslation(87)} <b>${Math.round(s)}</b> ${i.getTranslation(110)}</div><div>${i.getTranslation(199)} <b>${c}<b> ${i.getTranslation(110)}</div>`;n.html(u)}}DuelCalcView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Language])],DuelCalcView);let Importer=class{config;constructor(e){this.config=e}start(){$.getScript(this.config.website+"/doImport.js")}};Importer=__decorate([singleton(),__metadata("design:paramtypes",[Config])],Importer);let ImporterView=class{window;importer;key=WestCalcWindowTab.Import;title={type:"translation",translation:211};constructor(e,t){this.window=e,this.importer=t}init(){this.importer.start()}getMainDiv(){return this.window.$('<div id="TW_Calc_Importer"></div>')}};ImporterView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Importer])],ImporterView);let NotepadView=class{window;language;config;storage;logger;alarmClock;errorTracker;key=WestCalcWindowTab.Notepad;title={type:"translation",translation:210};constructor(e,t,r,n,i,o,a){this.window=e,this.language=t,this.config=r,this.storage=n,this.logger=i,this.alarmClock=o,this.errorTracker=a}clearNotes(e){new this.window.west.gui.Dialog(this.language.getTranslation(123),this.language.getTranslation(123)).addButton("Ok",()=>{this.storage.remove(StorageKey.notepad),e.setContent(""),this.window.MessageSuccess(this.language.getTranslation(89)).show()}).addButton("Cancel").show()}saveNotes(e){this.storage.setString(StorageKey.notepad,e.getContent()),this.window.MessageSuccess(this.language.getTranslation(88)).show()}setAlarmClock(e,t){const{west:r,MessageSuccess:n,MessageError:i}=this.window,o=(new r.gui.Textarea).setWidth(480).setHeight(120),a=e.getValue(),s=t.getValue();return a.length?s.length?this.alarmClock.getDate(a,s)<=now()-6e4?i("You cannot set alarm clock with past date!").show():void new r.gui.Dialog(this.language.getTranslation(93),o.getMainDiv()).addButton("Ok",()=>{const e={date:a,time:s,caption:o.getContent()};this.storage.setObject(StorageKey.alarmClock,e),this.logger.log("alarm clock set ",e),n(this.language.getTranslation(96)).show()}).addButton(this.language.getTranslation(92)).show():i("You must set a time for alarm clock!").show():i("You must set a date for alarm clock!").show()}getMainDiv(){const{west:e,$:t}=this.window,r=(new e.gui.Textarea).setWidth(655).setHeight(280).setContent(this.storage.getString(StorageKey.notepad,"")),n=t("<div></div>"),i=t("<div></div>");n.append((new e.gui.Button).setCaption(this.language.getTranslation(36)).click(()=>this.saveNotes(r)).getMainDiv()),n.append((new e.gui.Button).setCaption(this.language.getTranslation(35)).click(()=>this.clearNotes(r)).getMainDiv());const o=this.storage.getObject(StorageKey.alarmClock,{date:"",time:"",caption:""}),a=(new e.gui.Textfield).setValue(o.date).setLabel('<img src="'+this.config.cdn+'/images/icons/clock.png" width="20" height="20" alt="Alarm clock" />'),s=(new e.gui.Textfield).setValue(o.time);i.append(changeInput(a.getMainDiv(),"date")),i.append(changeInput(s.getMainDiv(),"time")),i.append((new e.gui.Button).setCaption(this.language.getTranslation(37)).click(()=>this.setAlarmClock(a,s)).getMainDiv());const l=t('<div style="display: flex; flex-direction: row; justify-content: space-between; margin: 5px"></div>');return l.append(n),l.append(i),t("<div></div>").append(l).append(r.getMainDiv())}};function changeInput(e,t){return find(e).call(e,"input").attr("type",t),e}__decorate([CatchErrors("NotepadView.clearNotes"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],NotepadView.prototype,"clearNotes",null),__decorate([CatchErrors("NotepadView.saveNotes"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],NotepadView.prototype,"saveNotes",null),__decorate([CatchErrors("NotepadView.setAlarmClock"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Object]),__metadata("design:returntype",void 0)],NotepadView.prototype,"setAlarmClock",null),NotepadView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Language,Config,Storage,Logger,AlarmClock,ErrorTracker])],NotepadView),$$1({target:"Array",stat:!0},{isArray:isArray$3});var isArray$2=path.Array.isArray,parent$8=isArray$2,isArray$1=parent$8,require$$0$d=isArray$1,isArray=require$$0$d,$includes=require$$0$y.includes,BROKEN_ON_SPARSE=fails(function(){return!Array(1).includes()}),BROKEN_ON_SPARSE_WITH_FROM_INDEX=fails(function(){return[,1].includes(void 0,1)});$$1({target:"Array",proto:!0,forced:BROKEN_ON_SPARSE||BROKEN_ON_SPARSE_WITH_FROM_INDEX},{includes:function(e){return $includes(this,e,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables();var includes$4=getBuiltInPrototypeMethod("Array","includes"),MATCH$1=wellKnownSymbol("match"),isRegexp=function(e){var t;return isObject(e)&&(void 0!==(t=e[MATCH$1])?!!t:"RegExp"===classof$2(e))},isRegExp=isRegexp,$TypeError$5=TypeError,notARegexp=function(e){if(isRegExp(e))throw new $TypeError$5("The method doesn't accept regular expressions");return e},MATCH=wellKnownSymbol("match"),correctIsRegexpLogic=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[MATCH]=!1,"/./"[e](t)}catch(e){}}return!1},notARegExp=notARegexp,correctIsRegExpLogic=correctIsRegexpLogic,stringIndexOf=uncurryThis$1("".indexOf);$$1({target:"String",proto:!0,forced:!correctIsRegExpLogic("includes")},{includes:function(e){return!!~stringIndexOf(toString$3(requireObjectCoercible(this)),toString$3(notARegExp(e)),arguments.length>1?arguments[1]:void 0)}});var includes$3=getBuiltInPrototypeMethod("String","includes"),arrayMethod=includes$4,stringMethod=includes$3,ArrayPrototype$4=Array.prototype,StringPrototype$1=String.prototype,includes$2=function(e){var t=e.includes;return e===ArrayPrototype$4||isPrototypeOf(ArrayPrototype$4,e)&&t===ArrayPrototype$4.includes?arrayMethod:"string"==typeof e||e===StringPrototype$1||isPrototypeOf(StringPrototype$1,e)&&t===StringPrototype$1.includes?stringMethod:t},parent$7=includes$2,includes$1=parent$7,require$$0$c=includes$1,includes=require$$0$c;let LocalSettingsExporter=class{window;storage;logger;exportable=[StorageKey.alarmClock,StorageKey.battleCalc,StorageKey.ownCalc,StorageKey.jobList,StorageKey.notepad,StorageKey.settings,StorageKey.tombola,StorageKey.wardrobe];constructor(e,t,r){this.window=e,this.storage=t,this.logger=r}setSettings(e){try{this.setSerializedSettings(e)}catch(e){return this.logger.error(e),this.window.MessageError("Unable to deserialize settings!").show(),!1}return!0}setSerializedSettings(e){const t=JSON.parse(e);if(!isArray(t))throw new Error("Array expected!");let r=t.length;for(const e of t){if("object"!=typeof e){this.logger.warn("Object expected!");continue}const t=e.key,n=e.value;this.isValidKey(t)?(this.storage.setString(t,n),r--):this.logger.warn("Invalid key!",e)}r?this.window.MessageHint(`Unable to import some settings! (${r})`).show():this.window.MessageSuccess("Successful!").show()}getSerializedExportableSettings(){return stringify(this.getExportableSettings())}getExportableSettings(){var e,t;return map(e=filter(t=this.exportable).call(t,e=>this.storage.has(e))).call(e,e=>({key:e,value:this.storage.getString(e)}))}isValidKey(e){var t;return"string"==typeof e&&includes(t=values$1(StorageKey)).call(t,e)}};LocalSettingsExporter=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Storage,Logger])],LocalSettingsExporter);class LocalSettingsExporterWindow extends TW2Window{window;errorTracker;localSettingsExporter;constructor(e,t,r,n,i){super("TWCalcSettingImporter",n,e,t,r,{title:{type:"translation",translation:225}}),this.window=e,this.errorTracker=n,this.localSettingsExporter=i,this.addView(this.getExportView()),this.addView(this.getImportView())}open(e){super.open(e)}getExportView(){return{key:"Export",title:"Export",loader:!1,getMainDiv:()=>{const e=this.localSettingsExporter.getSerializedExportableSettings(),t=(new this.window.west.gui.Textarea).setHeight(260).setWidth(650).setReadonly().setContent(e);return $("<div></div>").append("<div>Copy the text below to export all your TW-Calc settings (Wardrobe, Job List etc.).Open new The-West window, open TW-Calc Settings > Import / Export > Import > paste copied settings to textarea and submit.</div>").append(t.getMainDiv())}}}getImportView(){return{key:"Import",title:"Import",loader:!1,getMainDiv:()=>{const e=(new this.window.west.gui.Textarea).setHeight(260).setWidth(650),t=(new this.window.west.gui.Button).setCaption("Submit").click(()=>this.importSettings(e));return $("<div></div>").append("<div>Use the textarea below to import TW-Calc settings.</div>").append(e.getMainDiv()).append($('<div style="text-align: right"></div>').append(t.getMainDiv()))}}}importSettings(e){this.localSettingsExporter.setSettings(e.getContent())&&setTimeout$1(()=>this.window.location.reload(),1e3)}}__decorate([CatchErrors("SettingsManagerWindow.open"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],LocalSettingsExporterWindow.prototype,"open",null);var hiddenKeys=enumBugKeys.concat("length","prototype"),f$1=Object.getOwnPropertyNames||function(e){return internalObjectKeys(e,hiddenKeys)},objectGetOwnPropertyNames={f:f$1},getOwnPropertyNamesModule=objectGetOwnPropertyNames,concat=uncurryThis$1([].concat),ownKeys$1=getBuiltIn("Reflect","ownKeys")||function(e){var t=getOwnPropertyNamesModule.f(anObject(e)),r=getOwnPropertySymbolsModule.f;return r?concat(t,r(e)):t},ownKeys=ownKeys$1,copyConstructorProperties$1=function(e,t,r){for(var n=ownKeys(t),i=defineProperty$3.f,o=getOwnPropertyDescriptorModule.f,a=0;a<n.length;a++){var s=n[a];hasOwn(e,s)||r&&hasOwn(r,s)||i(e,s,o(t,s))}},installErrorCause$1=function(e,t){isObject(t)&&"cause"in t&&createNonEnumerableProperty(e,"cause",t.cause)},$Error$1=Error,replace$1=uncurryThis$1("".replace),TEST=String(new $Error$1("zxcasd").stack),V8_OR_CHAKRA_STACK_ENTRY=/\n\s*at [^:]*:[^\n]*/,IS_V8_OR_CHAKRA_STACK=V8_OR_CHAKRA_STACK_ENTRY.test(TEST),errorStackClear=function(e,t){if(IS_V8_OR_CHAKRA_STACK&&"string"==typeof e&&!$Error$1.prepareStackTrace)for(;t--;)e=replace$1(e,V8_OR_CHAKRA_STACK_ENTRY,"");return e},errorStackInstallable=!fails(function(){var e=new Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",createPropertyDescriptor(1,7)),7!==e.stack)}),clearErrorStack=errorStackClear,ERROR_STACK_INSTALLABLE=errorStackInstallable,captureStackTrace=Error.captureStackTrace,errorStackInstall=function(e,t,r,n){ERROR_STACK_INSTALLABLE&&(captureStackTrace?captureStackTrace(e,t):createNonEnumerableProperty(e,"stack",clearErrorStack(r,n)))},$TypeError$4=TypeError,Result=function(e,t){this.stopped=e,this.result=t},ResultPrototype=Result.prototype,iterate$1=function(e,t,r){var n,i,o,a,s,l,c,u=r&&r.that,d=!(!r||!r.AS_ENTRIES),g=!(!r||!r.IS_RECORD),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),f=bind$6(t,u),y=function(e){var t=n;return n=void 0,t&&iteratorClose(t,"normal"),new Result(!0,e)},$=function(e){return d?(anObject(e),h?f(e[0],e[1],y):f(e[0],e[1])):h?f(e,y):f(e)};if(g)n=e.iterator;else if(p)n=e;else{if(!(i=getIteratorMethod(e)))throw new $TypeError$4(tryToString(e)+" is not iterable");if(isArrayIteratorMethod(i)){for(o=0,a=lengthOfArrayLike(e);a>o;o++)if((s=$(e[o]))&&isPrototypeOf(ResultPrototype,s))return s;return new Result(!1)}n=getIterator(e,i)}for(l=g?e.next:n.next;!(c=call(l,n)).done;){var w=c.value;try{s=$(w)}catch(e){if(!n)throw e;iteratorClose(n,"throw",e)}if("object"==typeof s&&s&&isPrototypeOf(ResultPrototype,s))return s}return new Result(!1)},normalizeStringArgument$1=function(e,t){return void 0===e?arguments.length<2?"":t:toString$3(e)},copyConstructorProperties=copyConstructorProperties$1,installErrorCause=installErrorCause$1,installErrorStack=errorStackInstall,iterate=iterate$1,normalizeStringArgument=normalizeStringArgument$1,TO_STRING_TAG=wellKnownSymbol("toStringTag"),$Error=Error,push=[].push,$AggregateError=function(e,t){var r,n=isPrototypeOf(AggregateErrorPrototype,this);setPrototypeOf?r=setPrototypeOf(new $Error,n?getPrototypeOf(this):AggregateErrorPrototype):(r=n?this:create(AggregateErrorPrototype),createNonEnumerableProperty(r,TO_STRING_TAG,"Error")),void 0!==t&&createNonEnumerableProperty(r,"message",normalizeStringArgument(t)),installErrorStack(r,$AggregateError,r.stack,1),arguments.length>2&&installErrorCause(r,arguments[2]);var i=[];return iterate(e,push,{that:i}),createNonEnumerableProperty(r,"errors",i),r};setPrototypeOf?setPrototypeOf($AggregateError,$Error):copyConstructorProperties($AggregateError,$Error,{name:!0});var AggregateErrorPrototype=$AggregateError.prototype=create($Error.prototype,{constructor:createPropertyDescriptor(1,$AggregateError),message:createPropertyDescriptor(1,""),name:createPropertyDescriptor(1,"AggregateError")});$$1({global:!0,constructor:!0,arity:2},{AggregateError:$AggregateError});var defineProperty=defineProperty$3.f,ARRAY_ITERATOR="Array Iterator",setInternalState$1=InternalStateModule.set,getInternalState=InternalStateModule.getterFor(ARRAY_ITERATOR);defineIterator(Array,"Array",function(e,t){setInternalState$1(this,{type:ARRAY_ITERATOR,target:toIndexedObject(e),index:0,kind:t})},function(){var e=getInternalState(this),t=e.target,r=e.index++;if(!t||r>=t.length)return e.target=null,createIterResultObject(void 0,!0);switch(e.kind){case"keys":return createIterResultObject(r,!1);case"values":return createIterResultObject(t[r],!1)}return createIterResultObject([r,t[r]],!1)},"values");var values=Iterators.Arguments=Iterators.Array;if(addToUnscopables(),addToUnscopables(),addToUnscopables(),!IS_PURE&&DESCRIPTORS&&"values"!==values.name)try{defineProperty(values,"name",{value:"values"})}catch(e){}var environmentIsNode="NODE"===ENVIRONMENT,defineBuiltInAccessor$1=function(e,t,r){return defineProperty$3.f(e,t,r)},defineBuiltInAccessor=defineBuiltInAccessor$1,SPECIES$2=wellKnownSymbol("species"),setSpecies$1=function(e){var t=getBuiltIn(e);DESCRIPTORS&&t&&!t[SPECIES$2]&&defineBuiltInAccessor(t,SPECIES$2,{configurable:!0,get:function(){return this}})},$TypeError$3=TypeError,anInstance$1=function(e,t){if(isPrototypeOf(t,e))return e;throw new $TypeError$3("Incorrect invocation")},$TypeError$2=TypeError,aConstructor$1=function(e){if(isConstructor(e))return e;throw new $TypeError$2(tryToString(e)+" is not a constructor")},aConstructor=aConstructor$1,SPECIES$1=wellKnownSymbol("species"),speciesConstructor$1=function(e,t){var r,n=anObject(e).constructor;return void 0===n||isNullOrUndefined(r=anObject(n)[SPECIES$1])?t:aConstructor(r)},environmentIsIos=/ipad|iphone|ipod/i.test(userAgent)&&/applewebkit/i.test(userAgent),IS_IOS=environmentIsIos,IS_NODE=environmentIsNode,set=globalThis$1.setImmediate,clear=globalThis$1.clearImmediate,process$3=globalThis$1.process,Dispatch=globalThis$1.Dispatch,Function$1=globalThis$1.Function,MessageChannel=globalThis$1.MessageChannel,String$1=globalThis$1.String,counter=0,queue$2={},ONREADYSTATECHANGE="onreadystatechange",$location,defer,channel,port;fails(function(){$location=globalThis$1.location});var run=function(e){if(hasOwn(queue$2,e)){var t=queue$2[e];delete queue$2[e],t()}},runner=function(e){return function(){run(e)}},eventListener=function(e){run(e.data)},globalPostMessageDefer=function(e){globalThis$1.postMessage(String$1(e),$location.protocol+"//"+$location.host)};set&&clear||(set=function(e){validateArgumentsLength(arguments.length,1);var t=isCallable(e)?e:Function$1(e),r=slice$2(arguments,1);return queue$2[++counter]=function(){apply(t,void 0,r)},defer(counter),counter},clear=function(e){delete queue$2[e]},IS_NODE?defer=function(e){process$3.nextTick(runner(e))}:Dispatch&&Dispatch.now?defer=function(e){Dispatch.now(runner(e))}:MessageChannel&&!IS_IOS?(channel=new MessageChannel,port=channel.port2,channel.port1.onmessage=eventListener,defer=bind$6(port.postMessage,port)):globalThis$1.addEventListener&&isCallable(globalThis$1.postMessage)&&!globalThis$1.importScripts&&$location&&"file:"!==$location.protocol&&!fails(globalPostMessageDefer)?(defer=globalPostMessageDefer,globalThis$1.addEventListener("message",eventListener,!1)):defer=ONREADYSTATECHANGE in createElement("script")?function(e){html.appendChild(createElement("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this),run(e)}}:function(e){setTimeout(runner(e),0)});var task$1={set:set,clear:clear},getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,safeGetBuiltIn$1=function(e){if(!DESCRIPTORS)return globalThis$1[e];var t=getOwnPropertyDescriptor(globalThis$1,e);return t&&t.value},Queue$1=function(){this.head=null,this.tail=null};Queue$1.prototype={add:function(e){var t={item:e,next:null},r=this.tail;r?r.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return null===(this.head=e.next)&&(this.tail=null),e.item}};var queue$1=Queue$1,environmentIsIosPebble=/ipad|iphone|ipod/i.test(userAgent)&&"undefined"!=typeof Pebble,environmentIsWebosWebkit=/web0s(?!.*chrome)/i.test(userAgent),safeGetBuiltIn=safeGetBuiltIn$1,require$$0$b=task$1,Queue=queue$1,IS_IOS_PEBBLE=environmentIsIosPebble,IS_WEBOS_WEBKIT=environmentIsWebosWebkit,macrotask=require$$0$b.set,MutationObserver=globalThis$1.MutationObserver||globalThis$1.WebKitMutationObserver,document$2=globalThis$1.document,process$2=globalThis$1.process,Promise$2=globalThis$1.Promise,microtask$1=safeGetBuiltIn("queueMicrotask"),notify$1,toggle,node,promise$3,then;if(!microtask$1){var queue=new Queue,flush=function(){var e,t;for(IS_NODE&&(e=process$2.domain)&&e.exit();t=queue.get();)try{t()}catch(e){throw queue.head&&notify$1(),e}e&&e.enter()};IS_IOS||IS_NODE||IS_WEBOS_WEBKIT||!MutationObserver||!document$2?!IS_IOS_PEBBLE&&Promise$2&&Promise$2.resolve?(promise$3=Promise$2.resolve(void 0),promise$3.constructor=Promise$2,then=bind$6(promise$3.then,promise$3),notify$1=function(){then(flush)}):IS_NODE?notify$1=function(){process$2.nextTick(flush)}:(macrotask=bind$6(macrotask,globalThis$1),notify$1=function(){macrotask(flush)}):(toggle=!0,node=document$2.createTextNode(""),new MutationObserver(flush).observe(node,{characterData:!0}),notify$1=function(){node.data=toggle=!toggle}),microtask$1=function(e){queue.head||notify$1(),queue.add(e)}}var microtask_1=microtask$1,hostReportErrors$1=function(e,t){try{1===arguments.length?console.error(e):console.error(e,t)}catch(e){}},perform$1=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},promiseNativeConstructor=globalThis$1.Promise,NativePromiseConstructor=promiseNativeConstructor,NativePromisePrototype$3=NativePromiseConstructor&&NativePromiseConstructor.prototype,SPECIES=wellKnownSymbol("species"),SUBCLASSING=!1,NATIVE_PROMISE_REJECTION_EVENT$1=isCallable(globalThis$1.PromiseRejectionEvent),FORCED_PROMISE_CONSTRUCTOR$5=isForced("Promise",function(){var e=inspectSource(NativePromiseConstructor),t=e!==String(NativePromiseConstructor);if(!t&&66===CHROME_VERSION)return!0;if(IS_PURE&&(!NativePromisePrototype$3.catch||!NativePromisePrototype$3.finally))return!0;if(!CHROME_VERSION||CHROME_VERSION<51||!/native code/.test(e)){var r=new NativePromiseConstructor(function(e){e(1)}),n=function(e){e(function(){},function(){})};if((r.constructor={})[SPECIES]=n,!(SUBCLASSING=r.then(function(){})instanceof n))return!0}return!(t||"BROWSER"!==ENVIRONMENT&&"DENO"!==ENVIRONMENT||NATIVE_PROMISE_REJECTION_EVENT$1)}),promiseConstructorDetection={CONSTRUCTOR:FORCED_PROMISE_CONSTRUCTOR$5,REJECTION_EVENT:NATIVE_PROMISE_REJECTION_EVENT$1,SUBCLASSING:SUBCLASSING},$TypeError$1=TypeError,PromiseCapability=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw new $TypeError$1("Bad Promise constructor");t=e,r=n}),this.resolve=aCallable(t),this.reject=aCallable(r)},f=function(e){return new PromiseCapability(e)},newPromiseCapability$1={f:f},setSpecies=setSpecies$1,anInstance=anInstance$1,speciesConstructor=speciesConstructor$1,microtask=microtask_1,hostReportErrors=hostReportErrors$1,perform=perform$1,require$$0$a=promiseConstructorDetection,newPromiseCapabilityModule=newPromiseCapability$1,task=require$$0$b.set,PROMISE="Promise",FORCED_PROMISE_CONSTRUCTOR$4=require$$0$a.CONSTRUCTOR,NATIVE_PROMISE_REJECTION_EVENT=require$$0$a.REJECTION_EVENT,NATIVE_PROMISE_SUBCLASSING=require$$0$a.SUBCLASSING,getInternalPromiseState=InternalStateModule.getterFor(PROMISE),setInternalState=InternalStateModule.set,NativePromisePrototype$2=NativePromiseConstructor&&NativePromiseConstructor.prototype,PromiseConstructor=NativePromiseConstructor,PromisePrototype=NativePromisePrototype$2,TypeError$1=globalThis$1.TypeError,document$1=globalThis$1.document,process$1=globalThis$1.process,newPromiseCapability=newPromiseCapabilityModule.f,newGenericPromiseCapability=newPromiseCapability,DISPATCH_EVENT=!!(document$1&&document$1.createEvent&&globalThis$1.dispatchEvent),UNHANDLED_REJECTION="unhandledrejection",REJECTION_HANDLED="rejectionhandled",PENDING=0,FULFILLED=1,REJECTED=2,HANDLED=1,UNHANDLED=2,Internal,OwnPromiseCapability,PromiseWrapper,nativeThen,isThenable=function(e){var t;return!(!isObject(e)||!isCallable(t=e.then))&&t},callReaction=function(e,t){var r,n,i,o=t.value,a=t.state===FULFILLED,s=a?e.ok:e.fail,l=e.resolve,c=e.reject,u=e.domain;try{s?(a||(t.rejection===UNHANDLED&&onHandleUnhandled(t),t.rejection=HANDLED),!0===s?r=o:(u&&u.enter(),r=s(o),u&&(u.exit(),i=!0)),r===e.promise?c(new TypeError$1("Promise-chain cycle")):(n=isThenable(r))?call(n,r,l,c):l(r)):c(o)}catch(e){u&&!i&&u.exit(),c(e)}},notify=function(e,t){e.notified||(e.notified=!0,microtask(function(){for(var r,n=e.reactions;r=n.get();)callReaction(r,e);e.notified=!1,t&&!e.rejection&&onUnhandled(e)}))},dispatchEvent=function(e,t,r){var n,i;DISPATCH_EVENT?((n=document$1.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),globalThis$1.dispatchEvent(n)):n={promise:t,reason:r},!NATIVE_PROMISE_REJECTION_EVENT&&(i=globalThis$1["on"+e])?i(n):e===UNHANDLED_REJECTION&&hostReportErrors("Unhandled promise rejection",r)},onUnhandled=function(e){call(task,globalThis$1,function(){var t,r=e.facade,n=e.value;if(isUnhandled(e)&&(t=perform(function(){IS_NODE?process$1.emit("unhandledRejection",n,r):dispatchEvent(UNHANDLED_REJECTION,r,n)}),e.rejection=IS_NODE||isUnhandled(e)?UNHANDLED:HANDLED,t.error))throw t.value})},isUnhandled=function(e){return e.rejection!==HANDLED&&!e.parent},onHandleUnhandled=function(e){call(task,globalThis$1,function(){var t=e.facade;IS_NODE?process$1.emit("rejectionHandled",t):dispatchEvent(REJECTION_HANDLED,t,e.value)})},bind=function(e,t,r){return function(n){e(t,n,r)}},internalReject=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=REJECTED,notify(e,!0))},internalResolve=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw new TypeError$1("Promise can't be resolved itself");var n=isThenable(t);n?microtask(function(){var r={done:!1};try{call(n,t,bind(internalResolve,r,e),bind(internalReject,r,e))}catch(t){internalReject(r,t,e)}}):(e.value=t,e.state=FULFILLED,notify(e,!1))}catch(t){internalReject({done:!1},t,e)}}};if(FORCED_PROMISE_CONSTRUCTOR$4&&(PromiseConstructor=function(e){anInstance(this,PromisePrototype),aCallable(e),call(Internal,this);var t=getInternalPromiseState(this);try{e(bind(internalResolve,t),bind(internalReject,t))}catch(e){internalReject(t,e)}},PromisePrototype=PromiseConstructor.prototype,Internal=function(e){setInternalState(this,{type:PROMISE,done:!1,notified:!1,parent:!1,reactions:new Queue,rejection:!1,state:PENDING,value:null})},Internal.prototype=defineBuiltIn(PromisePrototype,"then",function(e,t){var r=getInternalPromiseState(this),n=newPromiseCapability(speciesConstructor(this,PromiseConstructor));return r.parent=!0,n.ok=!isCallable(e)||e,n.fail=isCallable(t)&&t,n.domain=IS_NODE?process$1.domain:void 0,r.state===PENDING?r.reactions.add(n):microtask(function(){callReaction(n,r)}),n.promise}),OwnPromiseCapability=function(){var e=new Internal,t=getInternalPromiseState(e);this.promise=e,this.resolve=bind(internalResolve,t),this.reject=bind(internalReject,t)},newPromiseCapabilityModule.f=newPromiseCapability=function(e){return e===PromiseConstructor||e===PromiseWrapper?new OwnPromiseCapability(e):newGenericPromiseCapability(e)},!IS_PURE&&isCallable(NativePromiseConstructor)&&NativePromisePrototype$2!==Object.prototype)){nativeThen=NativePromisePrototype$2.then,NATIVE_PROMISE_SUBCLASSING||defineBuiltIn(NativePromisePrototype$2,"then",function(e,t){var r=this;return new PromiseConstructor(function(e,t){call(nativeThen,r,e,t)}).then(e,t)},{unsafe:!0});try{delete NativePromisePrototype$2.constructor}catch(e){}setPrototypeOf&&setPrototypeOf(NativePromisePrototype$2,PromisePrototype)}$$1({global:!0,constructor:!0,wrap:!0,forced:FORCED_PROMISE_CONSTRUCTOR$4},{Promise:PromiseConstructor}),PromiseWrapper=path.Promise,setToStringTag(PromiseConstructor,PROMISE,!1,!0),setSpecies(PROMISE);var FORCED_PROMISE_CONSTRUCTOR$3=require$$0$a.CONSTRUCTOR,promiseStaticsIncorrectIteration=FORCED_PROMISE_CONSTRUCTOR$3||!checkCorrectnessOfIteration(function(e){NativePromiseConstructor.all(e).then(void 0,function(){})}),PROMISE_STATICS_INCORRECT_ITERATION=promiseStaticsIncorrectIteration;$$1({target:"Promise",stat:!0,forced:PROMISE_STATICS_INCORRECT_ITERATION},{all:function(e){var t=this,r=newPromiseCapabilityModule.f(t),n=r.resolve,i=r.reject,o=perform(function(){var r=aCallable(t.resolve),o=[],a=0,s=1;iterate(e,function(e){var l=a++,c=!1;s++,call(r,t,e).then(function(e){c||(c=!0,o[l]=e,--s||n(o))},i)}),--s||n(o)});return o.error&&i(o.value),r.promise}});var FORCED_PROMISE_CONSTRUCTOR$2=require$$0$a.CONSTRUCTOR,NativePromisePrototype$1=NativePromiseConstructor&&NativePromiseConstructor.prototype;if($$1({target:"Promise",proto:!0,forced:FORCED_PROMISE_CONSTRUCTOR$2,real:!0},{catch:function(e){return this.then(void 0,e)}}),!IS_PURE&&isCallable(NativePromiseConstructor)){var method$6=getBuiltIn("Promise").prototype.catch;NativePromisePrototype$1.catch!==method$6&&defineBuiltIn(NativePromisePrototype$1,"catch",method$6,{unsafe:!0})}$$1({target:"Promise",stat:!0,forced:PROMISE_STATICS_INCORRECT_ITERATION},{race:function(e){var t=this,r=newPromiseCapabilityModule.f(t),n=r.reject,i=perform(function(){var i=aCallable(t.resolve);iterate(e,function(e){call(i,t,e).then(r.resolve,n)})});return i.error&&n(i.value),r.promise}});var FORCED_PROMISE_CONSTRUCTOR$1=require$$0$a.CONSTRUCTOR;$$1({target:"Promise",stat:!0,forced:FORCED_PROMISE_CONSTRUCTOR$1},{reject:function(e){var t=newPromiseCapabilityModule.f(this);return(0,t.reject)(e),t.promise}});var promiseResolve$1=function(e,t){if(anObject(e),isObject(t)&&t.constructor===e)return t;var r=newPromiseCapabilityModule.f(e);return(0,r.resolve)(t),r.promise},promiseResolve=promiseResolve$1,FORCED_PROMISE_CONSTRUCTOR=require$$0$a.CONSTRUCTOR,PromiseConstructorWrapper=getBuiltIn("Promise"),CHECK_WRAPPER=IS_PURE&&!FORCED_PROMISE_CONSTRUCTOR;$$1({target:"Promise",stat:!0,forced:IS_PURE||FORCED_PROMISE_CONSTRUCTOR},{resolve:function(e){return promiseResolve(CHECK_WRAPPER&&this===PromiseConstructorWrapper?NativePromiseConstructor:this,e)}}),$$1({target:"Promise",stat:!0,forced:PROMISE_STATICS_INCORRECT_ITERATION},{allSettled:function(e){var t=this,r=newPromiseCapabilityModule.f(t),n=r.resolve,i=r.reject,o=perform(function(){var r=aCallable(t.resolve),i=[],o=0,a=1;iterate(e,function(e){var s=o++,l=!1;a++,call(r,t,e).then(function(e){l||(l=!0,i[s]={status:"fulfilled",value:e},--a||n(i))},function(e){l||(l=!0,i[s]={status:"rejected",reason:e},--a||n(i))})}),--a||n(i)});return o.error&&i(o.value),r.promise}});var PROMISE_ANY_ERROR="No one promise resolved";$$1({target:"Promise",stat:!0,forced:PROMISE_STATICS_INCORRECT_ITERATION},{any:function(e){var t=this,r=getBuiltIn("AggregateError"),n=newPromiseCapabilityModule.f(t),i=n.resolve,o=n.reject,a=perform(function(){var n=aCallable(t.resolve),a=[],s=0,l=1,c=!1;iterate(e,function(e){var u=s++,d=!1;l++,call(n,t,e).then(function(e){d||c||(c=!0,i(e))},function(e){d||c||(d=!0,a[u]=e,--l||o(new r(a,PROMISE_ANY_ERROR)))})}),--l||o(new r(a,PROMISE_ANY_ERROR))});return a.error&&o(a.value),n.promise}});var Promise$1=globalThis$1.Promise,ACCEPT_ARGUMENTS=!1,FORCED$1=!Promise$1||!Promise$1.try||fails(function(){var e=Promise$1.resolve();return Promise$1.try(function(t){return ACCEPT_ARGUMENTS=8===t,e},8)!==e})||!ACCEPT_ARGUMENTS;$$1({target:"Promise",stat:!0,forced:FORCED$1},{try:function(e){var t=arguments.length>1?slice$2(arguments,1):[],r=perform(function(){return apply(aCallable(e),void 0,t)});if(!r.error)return promiseResolve(this,r.value);var n=newPromiseCapabilityModule.f(this);return(0,n.reject)(r.value),n.promise}}),$$1({target:"Promise",stat:!0},{withResolvers:function(){var e=newPromiseCapabilityModule.f(this);return{promise:e.promise,resolve:e.resolve,reject:e.reject}}});var NativePromisePrototype=NativePromiseConstructor&&NativePromiseConstructor.prototype,NON_GENERIC=!!NativePromiseConstructor&&fails(function(){NativePromisePrototype.finally.call({then:function(){}},function(){})});if($$1({target:"Promise",proto:!0,real:!0,forced:NON_GENERIC},{finally:function(e){var t=speciesConstructor(this,getBuiltIn("Promise")),r=isCallable(e);return this.then(r?function(r){return promiseResolve(t,e()).then(function(){return r})}:e,r?function(r){return promiseResolve(t,e()).then(function(){throw r})}:e)}}),!IS_PURE&&isCallable(NativePromiseConstructor)){var method$5=getBuiltIn("Promise").prototype.finally;NativePromisePrototype.finally!==method$5&&defineBuiltIn(NativePromisePrototype,"finally",method$5,{unsafe:!0})}var promise$2=path.Promise,domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},DOMIterables=domIterables;for(var COLLECTION_NAME in DOMIterables)setToStringTag(globalThis$1[COLLECTION_NAME],COLLECTION_NAME),Iterators[COLLECTION_NAME]=Iterators.Array;var parent$6=promise$2,promise$1=parent$6,require$$0$9=promise$1,promise=require$$0$9,whitespaces$1="\t\n\v\f\r                　\u2028\u2029\ufeff",whitespaces=whitespaces$1,replace=uncurryThis$1("".replace),ltrim=RegExp("^["+whitespaces+"]+"),rtrim=RegExp("(^|[^"+whitespaces+"])["+whitespaces+"]+$"),createMethod$1=function(e){return function(t){var r=toString$3(requireObjectCoercible(t));return 1&e&&(r=replace(r,ltrim,"")),2&e&&(r=replace(r,rtrim,"$1")),r}},stringTrim={start:createMethod$1(1),end:createMethod$1(2),trim:createMethod$1(3)},PROPER_FUNCTION_NAME=require$$0$x.PROPER,non="​᠎",stringTrimForced=function(e){return fails(function(){return!!whitespaces[e]()||non[e]()!==non||PROPER_FUNCTION_NAME&&whitespaces[e].name!==e})},require$$0$8=stringTrim,forcedStringTrimMethod=stringTrimForced,$trim=require$$0$8.trim;$$1({target:"String",proto:!0,forced:forcedStringTrimMethod("trim")},{trim:function(){return $trim(this)}});var trim$3=getBuiltInPrototypeMethod("String","trim"),method$4=trim$3,StringPrototype=String.prototype,trim$2=function(e){var t=e.trim;return"string"==typeof e||e===StringPrototype||isPrototypeOf(StringPrototype,e)&&t===StringPrototype.trim?method$4:t},parent$5=trim$2,trim$1=parent$5,require$$0$7=trim$1,trim=require$$0$7,$TypeError=TypeError,REDUCE_EMPTY="Reduce of empty array with no initial value",createMethod=function(e){return function(t,r,n,i){var o=toObject(t),a=IndexedObject(o),s=lengthOfArrayLike(o);if(aCallable(r),0===s&&n<2)throw new $TypeError(REDUCE_EMPTY);var l=e?s-1:0,c=e?-1:1;if(n<2)for(;;){if(l in a){i=a[l],l+=c;break}if(l+=c,e?l<0:s<=l)throw new $TypeError(REDUCE_EMPTY)}for(;e?l>=0:s>l;l+=c)l in a&&(i=r(i,a[l],l,o));return i}},arrayReduce={left:createMethod(!1),right:createMethod(!0)},require$$0$6=arrayReduce,$reduce=require$$0$6.left,CHROME_BUG=!IS_NODE&&CHROME_VERSION>79&&CHROME_VERSION<83,FORCED=CHROME_BUG||!arrayMethodIsStrict("reduce");$$1({target:"Array",proto:!0,forced:FORCED},{reduce:function(e){var t=arguments.length;return $reduce(this,e,t,t>1?arguments[1]:void 0)}});var reduce$3=getBuiltInPrototypeMethod("Array","reduce"),method$3=reduce$3,ArrayPrototype$3=Array.prototype,reduce$2=function(e){var t=e.reduce;return e===ArrayPrototype$3||isPrototypeOf(ArrayPrototype$3,e)&&t===ArrayPrototype$3.reduce?method$3:t},parent$4=reduce$2,reduce$1=parent$4,require$$0$5=reduce$1,reduce=require$$0$5,setInterval$1=path.setInterval,require$$0$4=setInterval$1,setInterval=require$$0$4,NearestJobsBarPosition;function hidTasks(e,t){t.hidTasks={50:{inv:{721:6},eq:1796,85:""},55:{9:"14.02.-20.02."},262:{27:""},482:{25:"100%"},606:{eq:1784,22:""},858:{inv:{708:10},eq:1769,50:"Motivation ≤30%"},933:{999:"17.03.-23.03."},1704:{eq:704,22:"14:00-22:00|100%"},1712:{65:"≥730 APs",112:"≥730 APs"},1761:{eq:1760,7:""},1763:{inv:{1710:1,1711:1,1712:1},90:""},1764:{eq:1763,79:""},1765:{eq:1764,68:""},1766:{eq:753,50:""},1767:{eq:1766,42:"18:00-20:00"},1769:{inv:{1768:1},eq:715,67:"≥0 AP"},1770:{55:""},1773:{eq:1771,4:""},1774:{eq:1771,86:""},1775:{eq:1771,50:""},1776:{eq:1771,35:""},1777:{eq:1771,79:""},1778:{eq:1771,24:""},1779:{68:""},1780:{65:""},1781:{16:""},1782:{32:""},1783:{inv:{1779:1,1780:1,1781:1,1782:1},62:""},1785:{eq:1784,46:""},1786:{eq:1784,11:""},1790:{eq:1791,27:""},1793:{eq:736,26:"20:00-24:00"},1795:{eq:1794,79:"≥0 AP"},1796:{eq:1795,25:""},1799:{25:"30.10.-07.11."},1800:{42:"30.10.-07.11."},1801:{51:"30.10.-07.11."},1802:{45:""},1803:{eq:791,6:""},1804:{eq:744,11:""},1805:{94:""},1806:{5:""},1838:{10:""},1840:{95:"",97:"",98:""},1935:{eq:1789,4:""},1936:{eq:1792,45:""},1953:{54:""},1954:{69:""},1956:{23:""},1957:{inv:{1791:9},85:""},1958:{inv:{725:15},56:""},1959:{inv:{720:20},118:""},1962:{2:""},1963:{92:""},1964:{27:""},1992:{51:""},1994:{eq:17,10:""},1995:{eq:17,52:""},1996:{eq:766,13:""},2224:{91:""},2227:{999:"25.05.-01.06."},2266:{19:""},2267:{63:""},2306:{91:""},2307:{94:""},2308:{31:""},2309:{30:""},2345:{999:"08.08.-14.08."},2351:{29:"Quest 1832",48:"Quest 1834<br>& Wiederholbare Quest 20659",66:"Quest 1836",78:"Quest 1838"},2364:{88:"1. Fundort",38:"2. Fundort"},2373:{inv:{807:3},56:""},2375:{60:""},2376:{100:""},2377:{66:""},2398:{72:""},2399:{85:""},2400:{inv:{721:2,1818:1,1821:7},13:"",129:""},2401:{eq:708,90:""},2402:{eq:2401,56:""},2403:{eq:2402,41:""},2404:{inv:{789:1,790:1},13:"",129:""},2405:{79:"Mittwoch/Freitag"},2406:{eq:1820,5:""},2407:{eq:1821,92:""},2408:{78:""},2410:{eq:737,45:""},2411:{eq:793,51:""},2412:{inv:{1810:10,1811:10},13:"",129:""},2413:{63:""},2414:{65:""},2416:{eq:721,70:""},2417:{79:""},2418:{eq:2399,104:""},2419:{eq:1819,108:""},2420:{eq:548,eq2:216,74:"06:00-12:00"},2421:{eq:2420,112:""},2422:{121:""},2424:{5:""},2426:{inv:{715:1,1826:1},79:""},2427:{inv:{1825:1,1837:1},41:"18:00-08:00"},2428:{120:""},2500:{131:""},2502:{eq:2500,132:"08:00-15:00"},2503:{133:""},2504:{137:""},2505:{137:""},2506:{eq:2509,140:""},2508:{141:""},2509:{65:""},2510:{143:""},2511:{144:""},2512:{147:""},2513:{eq:2456,41:""},2514:{eq:728,156:""},2515:{153:""},2532:{eq:1827,21:""},2552:{28:""},2553:{128:"100%"},2554:{3:"100%"},2568:{8:"100%"},2570:{eq:2569,13:"100%",129:"100%"},2571:{eq:2570,34:"100%"},2572:{eq:2573,44:"100%"},2574:{999:""},2702:{27:"",46:"",55:""},2703:{13:""},2704:{6:""},2705:{2:""},10193:{38:"100%"},10304:{999:"17.03.-23.03."},11182:{92:"100%"},11278:{999:"17.03.-23.03."},17020:{eq:1859,18:"Freitag"},17021:{eq:802,90:"Sonntag"},17022:{eq:747,eq2:57,85:"18:00-21:45"},17023:{eq:1856,40:"20:00-22:00"},17024:{inv:{17027:1},eq:1857,28:"13:00-14:00"},17025:{inv:{715:1},eq:17024,106:"≥201 APs|Sonntag"},40049:{22:"100%"},40207:{999:"17.03.-23.03."},41020:{35:"100%"},42206:{999:"17.03.-23.03."},43205:{999:"17.03.-23.03."},44033:{999:"17.03.-23.03."},45019:{999:"17.03.-23.03."},50091:{63:""},50172:{eq:721,13:"100%",129:"100%"},50178:{157:"10%",158:"10%",159:"10%",160:"10%"},50180:{eq:708,90:"90%"},50181:{eq:50180,56:"90%"},50182:{eq:50181,41:"90%"},50185:{eq:755,101:"80%"},50186:{63:"80%"},50196:{73:"15%"},50197:{eq:711,26:"50%"},50198:{eq:50197,140:"10%"},50200:{36:"8%"},50201:{eq:1834,124:"10%"},50202:{eq:1814,115:"10%"},50203:{eq:1814,98:"10%"},50204:{146:"10%"},50209:{34:"75%"},50207:{13:"15%",36:"15%",70:"15%"},50271:{18:"50%"},50272:{eq:802,90:"50%"},50273:{eq:747,85:"50%"},50274:{eq:1856,40:"50%"},50276:{eq:50275,28:"30%"},50277:{eq:50276,106:"30%"},50320:{86:"15%"},50321:{36:"8%"},50322:{3:"4%",11:"4%",41:"4%"},50429:{118:"10%"},50760:{999:"21.11.-02.12.2017<br>& 05.-06.12.2017"},50764:{eq:706,13:"100%"},50765:{eq:10,11:"100%"},50855:{999:"30.01.-13.02.2018"},50881:{9:"20%",98:"20%"},50882:{36:"20%",155:"20%"},50893:{32:"5%",118:"5%"},50894:{36:"8%"},50895:{999:"06.03.-20.03.2018"},50952:{eq:2162,13:"4%",129:"4%"},50953:{2:"4%",4:"4%",36:"4%"},50954:{2:"4%",4:"4%",36:"4%"},50955:{37:"10%",63:"10%"},50957:{16:"3%",24:"3%",33:"3%",45:"3%",60:"3%"},50976:{2:"4%",4:"4%",5:"4%"},51016:{65:"10%",112:"10%"},51018:{91:"Quest 2960|10%"},51020:{eq:744,39:"10%"},51021:{inv:{721:2,1818:1,1821:7},13:"50%",129:"50%"},51027:{eq:50,68:"1%"},51028:{eq:51027,107:"3%"},51029:{eq:51028,112:"2%"},51059:{999:"14.-27.06.2018<br>& 14.-15.07.2018"},51156:{999:"20.08.-05.09.2018"},51234:{eq:723,36:"15%"},51238:{23:"40%"},51375:{41:""},51376:{32:""},51378:{45:""},51388:{999:"27.03.-15.04.2019"},51468:{999:"12.06.-02.07.2019"},51611:{999:"22.08.-09.09.2019 &<br>18.08.-09.09.2021 & 18.08.-01.09.2022"},51776:{999:"18.11.-02.12.2020"},51778:{999:"3%"},51779:{2:"5%",4:"5%",5:"5%",8:"5%",72:"5%"},51780:{19:"3%"},51781:{86:"6%"},51816:{999:"11.12.2019-02.01.2020"},51858:{999:"30.01.-14.02.2020"},51865:{36:""},52052:{999:"16.06.-26.06.2020"},52107:{9:"30%",98:"30%"},52108:{86:"30%"},52109:{eq:52108,86:"50%"},52134:{8:"Alle Erntearbeiten<br>17.08.-04.09.2020 & 18.08.-09.09.2021<br>& 18.08.-01.09.2022"},52154:{36:"50%"},52293:{999:"16.12.2020-07.01.2021"},52299:{45:"",54:""},52300:{17:"",48:""},52301:{36:""},52302:{24:"",27:""},52324:{999:"03.02.-12.02.2021"},52331:{23:""},52333:{38:""},52436:{9:""},52437:{8:""},52438:{5:""},52578:{28:""},52647:{4:"",9:"",33:"",48:""},52731:{999:"07.12.-17.12.2021"},52751:{999:"22.12.2021-13.01.2022"},52772:{999:"02.02.-15.02.2022"},52793:{999:"16.03.-29.03.2022"},52806:{25:""},52807:{39:""},52808:{26:""},52809:{19:""},52810:{12:""},52993:{999:"Quests 3767-3777|18.08.-01.09.2022"},53006:{125:"10%"},53008:{9:"50%"},53045:{164:""},53083:{999:""},53084:{999:""},53106:{999:"23.11.-07.12.2022"},53138:{999:"21.12.2022-12.01.2023"},53240:{999:"01.02.-15.02.2023"},53321:{1:"",10:"",22:"",29:"",130:"",175:""},53322:{999:""},53353:{999:"07.06.-21.06.2023"},53435:{197:"75%"},53436:{154:"45%",eq:752},53441:{169:"10%"},53442:{6:"& Tabak, Baumwolle, Mais,<br>Bohnen, Agaven, Orangen, Tomaten pflücken<br>& Getreide, Kartoffeln, Kürbisse, Chilischoten<br>ernten & Kräuter, Karotten, Pilze sammeln<br>16.08.-31.08.2023"},53456:{21:"",43:"",77:"",165:"",179:""},53549:{112:""},53558:{999:"22.11.-06.12.2023"},53588:{999:"20.12.2023-11.01.2024"},53789:{999:"01.02.2024-15.02.2024"},53818:{inv:{1835:5},118:""},53851:{inv:{1888:1,1974:1},134:""},53909:{inv:{711:1},38:""},53914:{193:"40%"},53915:{inv:{52964:1,1826:1},140:"15%"},53916:{169:"15%"},53917:{134:"2%"},53937:{999:"Sonntag, 1%"},53953:{999:"19.06.2024-03.07.2024"},54036:{inv:{52954:2,52950:1},197:"75%"},54035:{inv:{54036:1},195:"100%"},54038:{6:"& Tabak, Baumwolle, Mais,<br>Bohnen, Agaven, Orangen, Tomaten pflücken<br>& Getreide, Kartoffeln, Kürbisse, Chilischoten<br>ernten & Kräuter, Karotten, Pilze sammeln<br>14.08.-28.08.2024"},54200:{999:"18.12.2024-09.01.2025"},54242:{999:"29.01.-12.02.2025"},54256:{999:""},54264:{18:""},54265:{56:""},54261:{eq:54265,179:""},54262:{eq:54258,200:""},54284:{39:"",51:"",52:""},715:{106:"<150%"},719:{106:"<150%"},720:{106:"<150%"},721:{118:"<150%"},723:{106:"<150%"},725:{106:"<150%"},726:{112:"<169%",122:"<61%"},728:{122:"<61%"},730:{122:"<61%"},742:{112:"<169%",126:"<121%"},745:{106:"<150%"},747:{112:"<169%",126:"<121%"},758:{106:"<150%"},760:{106:"<150%"},761:{126:"<121%"},765:{112:"<169%",126:"<121%"},780:{122:"<61%"},783:{112:"<169%"},786:{122:"<61%"},792:{112:"<169%",122:"<61%"},794:{112:"<169%"},1708:{122:"<61%"},1755:{122:"<61%"},1756:{122:"<61%"},1791:{112:"<169%"},1824:{112:"<169%"},1828:{118:"<150%",112:"<169%"},1829:{118:"<150%",112:"<169%"},1830:{112:"<169%",118:"<150%"},1835:{112:"<169%"},2e3:{106:"<15%"},2003:{108:"<15%"},2006:{111:"<15%"},2009:{106:"<15%"},20019:{112:"<169%",122:"<61%"},20039:{112:"<169%",122:"<61%"},20059:{112:"<169%",122:"<61%"},20079:{122:"<61%"},50511:{158:""},50512:{132:""},50513:{155:""},50516:{147:""},50519:{116:""},50520:{154:""},50522:{136:""},50523:{133:""},50526:{159:""},50527:{140:""},50528:{139:""},50529:{157:""},50533:{153:""},50534:{160:""},50535:{143:""},50537:{141:""},50538:{131:""},52651:{184:""},52652:{164:""},52653:{198:""},52654:{173:""},52656:{205:""},52657:{193:""},52658:{172:""},52659:{169:""},52660:{201:""},52661:{204:""},52662:{183:""},52664:{175:""},52665:{197:""},52666:{171:""},52667:{165:""},52668:{163:""},52669:{186:""},52670:{176:""},52672:{170:""},52673:{182:""},52674:{187:""},53146:{185:""},53147:{186:""},53148:{203:""},53149:{188:""},53151:{199:""},53152:{161:""},53153:{174:""},53154:{200:""},53155:{167:""},53156:{179:""},53157:{195:""},53159:{181:""},53160:{190:""},53161:{189:""},53162:{178:""},53163:{191:""},53164:{192:""},53165:{180:""},53167:{162:""},53168:{177:""},53169:{166:""}};const r=setInterval(function(){if(t.ItemManager&&void 0!==t.ItemManager.get&&t.ItemManager.isLoaded()){const n=[1975e3];for(const e of n){const r=t.ItemManager.get(e);void 0!==r&&(r.spec_type="mapdrop")}const i=[52027,52028,52029,52030,52497,52500,52501,52502,52503,52504,52505,52506,52518,52868,52869,52870,52871,53938,53939,53940,53941];for(const e of i){const r=t.ItemManager.get(1e3*e);void 0!==r&&(r.spec_type="crafting")}e.log("hidTasks.js finished!"),clearInterval(r)}},1e3)}function jobListMonkeyPatch(e,t){hidTasks(e,t),jobListDropsItemPatch(t),jobListGetJobsIdsByItemIdPatch(t),e.log("jobList monkey patch is finished!")}function jobListDropsItemPatch(e){const{JobList:t}=e,r=t.dropsItem;t.dropsItem=function(t){return e.hidTasks&&!!e.hidTasks[t/1e3]||r.apply(this,[t])}}function jobListGetJobsIdsByItemIdPatch(e){const{JobList:t,ItemManager:r}=e,n=t.getJobsIdsByItemId;t.getJobsIdsByItemId=function(t){const i=e.hidTasks&&e.hidTasks[t/1e3];if(i&&"mapdrop"!=r.get(t).spec_type){const e=[];for(const t in i)i.hasOwnProperty(t)&&Number(t)<=205&&e.push(Number(t));return e}return n.apply(this,[t])}}!function(e){e[e.downTransparent=1]="downTransparent",e[e.down=5]="down",e[e.up=2]="up",e[e.right=3]="right",e[e.hidden=4]="hidden"}(NearestJobsBarPosition||(NearestJobsBarPosition={}));const plusIcon="iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAL9UExURQAAAAMAAAcEAwUCAgUCAgMAAAQBAQMAAAMAAAMAAAMAAAUCAQMBAAMAAAQBAQUCAgQBAAMAAAQBAQMAAAYDAgYDAgMAAAMAAAMAAHZcU2VPRREMCINgXbaimCogG2ZJRk88MiAXFB4TDjMnIg0IBSIZFBUNCEU3KDgqHyMbElNBOWpRTDoqJUg4MVRAOTYnGkouG6KBc2NCJs+2n3RiT2hVSiUdGDMjGlNBJS4iFzYmF6qUjoRpWishHFxJPnBcUF1GM62Me452YKqTf0o4N15LPkk5MMi0pIdvXWNQSEIyIyAbGKOMcL6biZh3bIdwZMyslHpgK4RuXk48M72Mg39YUb2Mhc2mkmtlVFtHPg4KCGxVSqaZfKOWeJ+SdaSYeZ+WdaaZeGmQK46CaGyUMHCYNHScOXegPHukQUdBNGWMKHJoUlZ8F5yPci8mHmddTFF2EIl+ZUk3LnCFOExDN6WYe1FJO4J1XmuAM1FBODw1LHxyW1+HImN4KlpDPUQ+MJK9W11VRFlQQY++TqCTd3huWFE8N4CqR6OWdVRNPkM1LUM4LzgwKDkrKGxkUIZ8YqmZfJmMbpyPdZmPcpGFajUpJUIvLCkgGoN4YYu2UXxnWLWbf5OJbGFYR1lJQF9FQmlUTHZjUYJrXIWvS2V6LFuBHJh+aU8wHUs9NlM/P29aUTwpHW5URCEbFY9taZaJbnVrVpaMbk5GOH90XUAzK0k5NUItIV9MRYx+ZXxaWlA6M1w8JoFnUI64V4iyUE5zDUtwC5XAX0drBpl/dWVbR0s2NFtCNG1OSbWfiIlhYYJpY6GWd5mMclQ6LD4vKUw4KXVQTo50XnRWUWFKOI92bYlxYTglFp2DbqaIeHWGPaLQaFN2FWuUK52SdGJSR4xoXnRaSXViTHttW5Z2ZH6JSWlPPn9eTqaObn1hWGBLP4tqUrKXdoZuZnFNL5yEd1BwEmFbR0Q+NJ+MgMWkhZF9cqDNZp+PdWZCQYx7VMq9tr2sq2WMJ5aFWKaWgoOFTKjYpjkAAABcdFJOUwAiPEgoGi4GFA6RjJc0cEJofE5iV6Bcg3b+/bX+/Fr+nt7Qeqvtwa3itPHZ7dvE7PX5/fXav5Py3MfV/vWn3avv3e/xJBBMyi6X8PbzpRrMafaBefz8Yu0GcHz06vg14gAACfJJREFUWMOdmAdUWlkaxyMg2MXeSzTV9N4nPZPMzuzstC3nvPeAvG0sAoEoBNzgwiCDIBpR0VjRbOwVe9lqd2KJJZp1E9PLpJepu3vO3vd4gCmmzN+j5/Dw/s7/++53v3vvmzfvlaKZNe/Haf/BA786tGHZsvUbwj8JpTo4vjXolwc/fjdk+/bOzur7nePVawKiVkaS3g7z05+9u+7T70MmqzsHjNX9/QPgNzh4fKXbm7vBCHeufrptqnLi7kDY6EhwdWtYWNjAturgdyLfjLL/57vX5eT05YT8MHXpfy3G0da7wY/Hy1TdAZ3lA63VyyIpgPIaxMEPfpHzJOcOoPxwdSxGmlmVyZMm5hsMurLWsrKCkZnPVnrav9rK/o93P7l55785T24WK6SZvKT4eDabHcNma6UZkuay7u6yb7/t37WR+ior+z5YVzx5s+/mncfxVUlgeEyMySRKTBSJRCaTKV7aaCyQhYX1hi0mzW1l3841ndn3+76f0vKkj9gmU6JCntfV1cXnd+XlKRQiE7u0tbd1ZGQ8ZKe7vcPLIfvC9/YH3yqeGuBJ49kmkULelZxcmxAHlJDA4STz5QqRRNXbP2qcPLOYbPdSCC18z9StW+WTbB5O4CfXxmUJUIEARVvQlpSsuDgOn69IlIzO3EBzchaTXgoJ3ZMzdWugWIqZSExOSckSCATpdfq0um/S0upyc2tyc9HaZLnCdKnjbMfN7eGuAPI8gvLhur6pmWodyIQoLzkdghiQUq9PTb2AcBFEjyAQrlq+XD42dr1jcn0k1f752aEdCumbLASIeLaIH2ceADG4EAQjagSBYeIJlADSUjR+O3vN+tAXIOS9xWfTs7XS+JhEvhiyCmYyIBbL9hlCQVoKz/Z8dXbNYndQsrMRDhtyisUTJlAUiQ85AtsQJQtmMoEP64MagZjDr7x6/Ubf+sjnUhL6/neFRYU84OIhR1xjGXDt8L9xHb5mZSDpaD1HXlxZCYyQn4nGYUPfd5cLpVqQTk4WmmYZcP7rf+H6+s+xlkdfKlNRMefypcrKq+9EkiizjBx4f9vVQmMSWyRPjhOkKq2MfxCyMRgXuLmCuOSOmZ7egB2es4zQdhaPFxkbQCRdCYIzaUwr40+EbAwmDMJJiSucaTMErKC724zY7+koLMpOYpvkHDF6hoswiAFHX2QwYITLTRdzZoy6gignb2CEsBG69/LliXxtjCK5HtXb5gA6/xdCVsYJCHyt1KP1o/2ytsAgOskyNQ6Htk0UFUnjTXkccTooTKYlmKMnCeEMRAkrEWymkVS0PqBfVta6wplMJRiUD0Me378rjVHw69EzShiyOjn6V0I4QwmzzPUGw3UoJ7igOyBqqberOau0A7tDQkIGpDFyMK96JsyC1Qwz5ugpQmYfMIPBYMJqBGbqcxMCRlTNUVt8iazSPtn+9GmnUSt6mJCSewHYuHaU0PSpL3CdenAMfDoG/oBiA/+A6NPFASMGSf4SOgjGEW8cgeXNtx/FJ/Lj0DQYZkCnT35u1skvCFkefH4aZBWEA+vR7BGDULHcHwsGMBxXGpvLLyaxFcliNA1kjBH9+zkVDZYwkwkzuWjRZ20aodDDl2QHEkJzXDYaWF6UxJbXptTo1TATjv7dnIpWI0w1DKvT0rNv9A4KhX5eeEJoDssKVLJyKVvOScnlwiwWHP3bORXNwGoEioVrsmfutRt0znQywQhWCWVJ7DxQ5zA2/dO/mVPToEqB0lIF2QE9g+2Dzm54hdAcNrS2CVU6wGhJ1QMf0PSv59Q0CJXFYDERQflE0+Da96yM8N4ClTCDnVebUgcyymROH55TR1gsBraa4KzCoqHh9lVWRmRUQYEwI15eK6jhwqBpTf/nD3PpCFgJIFokLeFSduWl4SVWRugKmaxRJwWx1CHQiRPQtWOEHvyR0APLk2vga/ADK2svXW+v3BVhyakjaaVKotLoFJysXKw+rO2DcdzCOG7pBkqQdLD6kbrkQklTxapFfkQLcbQLl6hkqqRE0Em/gWc1ccbx04SsDBjfZ1gwKqhsaqqYv8DDyx1f/Y72oYGqUmMjmy9GU2d1D8CIJmRlgDXLwEpV3NLTNLxpkYu/uU5BQlzf6RHK8jVdCVitq1/JAJsepIbP1BdW8M6tXuDs5mnuZDQHu/Ch6zJhgwgUO8KEZzGOELIxECYLhuGss8KqqqqtLn5eZKKjgmCiAo0ajRb0oFQk9pWMXGzjTL3SwcusWL3UCQvFzKA5UBf3CDVJUlGCoE45Ox9/I2RjxMKgpWYVA0b7Zh9rKHgw3sslGp1G01WffmE24++EbAyQED1aNHGvqWLtUicPL9vm4GjvulQjbDDkS2oFqTZG7Pl/Ejpve8hlIuKnbSUlH2E2LO0UN0LxXlJapmmTJCags3IKFg/W+hixsyY8Ny2u8waPV/IRZoNs26NowIhzqXBIZyhViOvTrXureRoYLLUNgrZcKQ64Pty+eouLM2iEdrZNGxghbxkbztAJJfLhtYQTJoSVEyh+tXXjg1o4/LMdPWurzm31wWxQZ51AgBGq1+YeIU+olcQ3DYrxlQEaBcQyH4FYFiOVeZMdTSXtVasWuPi5ec62gU8NaeMSjUaok+Rrz5nk/JQzCOg1EAPb19QwC/kSp1zm3C8ea+/4amEQiMTXnfLMGQYzQt7xXv5wQ2lp4yOwW6WkYsWEME+w4BMnQG9jqhlK7pXsq5Xtmbx7u4Jc8EieO5BhafXcseTi7QZtfkFZMz+uDmHFwhhFjXcdGEoXF01kD1WUVGUuwRB0zxdPl1g03htXjGkamwcLWu9e4cS1pHOxg1gsaBncmpQrhYGVbWMlFSX31u9wcfKje5NePKDSHB0oGIQdI2oLEzZ3jgfUczhXsrJSBFniBA7faLwly+SdKzm3eusCgHDzJr3sImOGeAQtv63TZBhUpeXZF/NFFy8ay8ubVY0yia5k7RBYaAsX+WCBvByBpwRA6C5bFxq6DTJJo0SiEuXLCkZl3brMzCZeRcnw4KoIYMIZ5IJEsX/5HQaHeHp5LIhYrgoskDVrSxt1PE1zRqYus6KJ11SxKSLIBcTh7+VJmvtGBsKxcyX7uvn5LJq/XCUbbBzSasoMGTxd0+pNCzdvWeCCm/AlgxmZ+yaFQajAipuHU1DE/FUZQ5puFa+q6icL50cEgTwAgpuvJ4lq98p7IY3mYE9xdff2wrxEzF+4SWtoAIT5i4J8nJz9/N28PN1dKfavu58CKxjF05fu7+Hs5OLigwkPwp/uixNefzkFVjAKlUQGZvw9/JydQAh+HsCCN5lExQlvctW2UIAZLzrdzc2NTvcCFkAe7N/izo9T7ChUV3d3MiZ3kiuV8lYEgoJh7CgUKpVKodhhgLd/fWHGWPRjAM+8hXndm5j/Axq+Sjd4ZUOgAAAAAElFTkSuQmCC";class NearestJobsBar{nearestJobs;window;settings;language;logger;errorTracker;constructor(e,t,r,n,i,o){this.nearestJobs=e,this.window=t,this.settings=r,this.language=n,this.logger=i,this.errorTracker=o}appendTo(e){let t=this.getMainDiv();e.append(t),this.nearestJobs.onJobListChange(()=>{t.remove(),t=this.getMainDiv(),e.append(t)})}getMainDiv(){const e=new this.window.west.gui.Scrollpane;e.verticalBar.hide();const t=$('<div style="width: 510px; height: 61px; margin: 4px auto 4px auto; text-align: left;"></div>');this.settings.get(SettingNumber.NearestJobsBar)===NearestJobsBarPosition.down&&t.css({background:"rgba(29, 28, 28, 0.8)",border:"1px solid rgb(100, 100, 100)","border-radius":"2px","box-shadow":"rgb(0, 0, 0) 0px 0px 1px 1px","padding-left":"5px"});const r=this.nearestJobs.getJobList();forEach(r).call(r,t=>{const r=this.window.JobList.getJobById(t);if(!r)return this.logger.warn(`There is a job saved in the job list which does not exist! (jobId: ${t})`);const n=this.window.$('<div class="job tw-calc-job" style="position: relative !important; display: inline-block !important; margin-top: 5px; margin-bottom: 2px;"></div>'),i=this.window.$('<div class="featured"></div>');i.attr("title",this.nearestJobs.getJobPopup(t)),i.on("click",()=>{this.nearestJobs.search(t)}),n.append(i),this.window.Premium.hasBonus("automation")&&(n.append(this.getJobStartBtn(r,"short",15)),n.append(this.getJobStartBtn(r,"middle",600)),n.append(this.getJobStartBtn(r,"long",3600))),n.append(`<img alt="${r.name}" src="/images/jobs/${r.shortname}.png" class="job_icon" /></div>`),e.appendContent(n)});const n=$(`<div class="job tw-calc-job" style="position: relative !important; display: inline-block !important; margin-top: 5px; margin-bottom: 2px" title="${this.language.getTranslation(150)}"><div class="featured"></div><img src="data:image/png;data:;base64,${plusIcon}" class="job_icon" /></div>`);return n.on("click",()=>{this.nearestJobs.dialog.open()}),e.appendContent(n),t.append(e.getMainDiv()),t}getJobStartBtn(e,t,r){const n=this.window.$(`<div class="instantwork-${t}" title="${formatDuration(r)} - ${e.name}"></div>`);return n.on("click",()=>{this.nearestJobs.start(e.id,r)}),n}}function formatDuration(e){return e<60?`${e}s`:e<3600?e%60?`${Math.floor(e/60)}m ${formatDuration(e%60)}`:`${Math.floor(e/60)}m`:e%3600?`${Math.floor(e/3600)}h ${formatDuration(e%3600)}`:`${Math.floor(e/3600)}h`}__decorate([CatchErrors("NearestJobsBar.appendTo"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],NearestJobsBar.prototype,"appendTo",null);var HAS_SPECIES_SUPPORT=arrayMethodHasSpeciesSupport("splice"),max=Math.max,min=Math.min;$$1({target:"Array",proto:!0,forced:!HAS_SPECIES_SUPPORT},{splice:function(e,t){var r,n,i,o,a,s,l=toObject(this),c=lengthOfArrayLike(l),u=toAbsoluteIndex(e,c),d=arguments.length;for(0===d?r=n=0:1===d?(r=0,n=c-u):(r=d-2,n=min(max(toIntegerOrInfinity(t),0),c-u)),doesNotExceedSafeInteger(c+r-n),i=arraySpeciesCreate(l,n),o=0;o<n;o++)(a=u+o)in l&&createProperty(i,o,l[a]);if(setArrayLength(i,n),r<n){for(o=u;o<c-n;o++)s=o+r,(a=o+n)in l?l[s]=l[a]:deletePropertyOrThrow(l,s);for(o=c;o>c-n+r;o--)deletePropertyOrThrow(l,o-1)}else if(r>n)for(o=c-n;o>u;o--)s=o+r-1,(a=o+n-1)in l?l[s]=l[a]:deletePropertyOrThrow(l,s);for(o=0;o<r;o++)l[o+u]=arguments[o+2];return setArrayLength(l,c-n+r),i}});var splice$3=getBuiltInPrototypeMethod("Array","splice"),method$2=splice$3,ArrayPrototype$2=Array.prototype,splice$2=function(e){var t=e.splice;return e===ArrayPrototype$2||isPrototypeOf(ArrayPrototype$2,e)&&t===ArrayPrototype$2.splice?method$2:t},parent$3=splice$2,splice$1=parent$3,require$$0$3=splice$1,splice=require$$0$3;class NearestJobsDialog{nearestJobs;window;language;logger;constructor(e,t,r,n){this.nearestJobs=e,this.window=t,this.language=r,this.logger=n}open(){var e;this.logger.log("opening nearest jobs dialog...");const t=this.window.$("<div></div>"),r=this.window.$('<div style="width: 615px; height: 325px"></div>');t.append(r),new this.window.west.gui.Dialog(this.language.getTranslation(152),t).addButton(this.language.getTranslation(149),()=>{new this.window.west.gui.Dialog(this.language.getTranslation(148),this.language.getTranslation(146)).addButton(this.language.getTranslation(149),()=>this.nearestJobs.reset()).addButton(this.language.getTranslation(92),()=>{}).show()}).addButton(this.language.getTranslation(147),()=>{}).show();const n=new this.window.west.gui.Scrollpane;forEach(e=this.window.JobList.getSortedJobs("id")).call(e,e=>{const t=this.nearestJobs.isInJobList(e.id),r=this.window.$(`<div class="job tw-calc-job" style="position: relative !important; display: inline-block !important; opacity: ${t?1:.5}"></div>`);r.attr("title",this.nearestJobs.getJobPopup(e.id)),r.attr("data-job-id",e.id),r.on("click",()=>this.add(e.id,r)),r.append(`<img alt="${e.name}" src="/images/jobs/${e.shortname}.png" class="job_icon" /></div>`),n.appendContent(r)}),r.append(n.getMainDiv());const i=(new this.window.west.gui.Textfield).setId("TWCalc_NearestJobDialog_Search").setWidth(600).setPlaceholder(this.language.getTranslation(151)).getMainDiv();$(t).append($('<div style="margin: 4px 0"></div>').append(i)),$(i).on("keyup",e=>{const t=(e.target&&$(e.target).val()||"").toString();this.search(r,t)})}add(e,t){this.logger.log("add new job to list...",e);const r=this.nearestJobs.getJobList();1===Number(t.css("opacity"))?(splice(r).call(r,indexOf(r).call(r,e),1),t.css("opacity","0.5")):-1===indexOf(r).call(r,e)&&(r.push(e),t.css("opacity","1")),this.nearestJobs.setJobList(r)}search(e,t){this.logger.log("filtering by query...",t);$(".job",e).hide();const r=this.window.JobList.getSortedJobs("id");forEach(r).call(r,r=>{t&&-1==r.name.toLowerCase().search(t.toLowerCase())||$(`.job[data-job-id=${r.id}]`,e).show()})}}class NearestJobsList{nearestJobs;window;language;logger;errorTracker;constructor(e,t,r,n,i){this.nearestJobs=e,this.window=t,this.language=r,this.logger=n,this.errorTracker=i}appendTo(e){var t;const r=(new this.window.west.gui.Selectbox).setHeader(this.language.getTranslation(152)).setWidth(275);find(t=r.divMain).call(t,".arrow").remove(),r.addItem(0,this.language.getTranslation(150));const n=this.nearestJobs.getJobList();forEach(n).call(n,e=>{const t=this.window.JobList.getJobById(e);t?r.addItem(e,t.name):this.logger.warn(`There is a job saved in the job list which does not exist! (jobId: ${e})`)}),r.addListener(e=>{e?this.nearestJobs.search(e):this.nearestJobs.dialog.open()}),r.show(e)}}__decorate([CatchErrors("NearestJobsList.appendTo"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],NearestJobsList.prototype,"appendTo",null);let NearestJobs=class{window;settings;storage;logger;language;errorTracker;dialog;bar;list;map;onJobListChangeCallbacks=[];constructor(e,t,r,n,i,o){this.window=e,this.settings=t,this.storage=r,this.logger=n,this.language=i,this.errorTracker=o,this.dialog=new NearestJobsDialog(this,e,i,this.logger),this.bar=new NearestJobsBar(this,e,t,i,this.logger,this.errorTracker),this.list=new NearestJobsList(this,e,i,this.logger,this.errorTracker)}init(){jobListMonkeyPatch(this.logger,this.window),4!==this.settings.get(SettingNumber.NearestJobsBar)&&this.getMinimap()}openNearestJobWindowByProductId(e){this.getMinimap(t=>{this.errorTracker.execute(()=>{var r;this.logger.log(`finding the best nearby job for item = ${e}`);const{JobList:n,MessageError:i,MessageHint:o}=this.window,a=getPlayerLastPosition(this.window);if(!a)return i("Unable to get player's latest position!");const s=n.getJobsIdsByItemId(e),l=[];if(forEach(r=map(s).call(s,e=>n.getJobById(e))).call(r,e=>{if(!e)return this.logger.warn("A job was expected to be found by its jobId, but it was not!");const r=findNearestJob(e,a,t,this.logger);r?l.push(this.getJobWindow(e.id,{x:r.x,y:r.y})):this.logger.warn(`Could not find a nearest job for (jobId: ${e.id})`,e,a,t)}),!l.length)throw new Error(`Unable to find nearby jobs for item! (itemId: ${e})`);promise.all(l).then(t=>{this.logger.log(`found nearby job views for item = ${e}`,t),this.errorTracker.execute(()=>{let r=-1/0,i=-1;if(forEach(t).call(t,(t,o)=>{const a=n.getJobById(t.id);if(!a)throw new Error("Job not found!");const s=a.level<=this.window.Character.level,l=a.malus<=t.jobSkillPoints;if(!s&&!l)return void this.logger.log(`player does not have enough work points or level to start the job = ${t.id}`);const c=getJobProductLuck(t,e);if(!1===c)throw new Error("Item is not obtainable from the job!");c>r&&(r=c,i=o)}),-1==i)return o(this.language.getTranslation(222)).show();const a=t[i];this.logger.log(`found best job for item = ${e}`,a),this.addTaskOrShowJobWindow(a.id,{type:"window"})})})})})}getMinimap(e,t=!1){if(void 0!==map(this))return e?.(map(this));t&&new this.window.UserMessage(this.language.getTranslation(143),"success").show(),this.window.Ajax.get("map","get_minimap",{},t=>{if(t.error)return new this.window.UserMessage("Unable to fetch the map!").show();this.map=t,e?.(t)})}startNearestJob(e){this.start(e,3600)}search(e){this.addTaskOrShowJobWindow(e,{type:"window"})}start(e,t){this.addTaskOrShowJobWindow(e,{type:"startJob",duration:t})}getJobWindow(e,t){return new promise(r=>{this.window.Ajax.remoteCallMode("job","job",{jobId:e,x:t.x,y:t.y},e=>{r(e)})})}addTaskOrShowJobWindow(e,t){this.getMinimap(this.errorTracker.catchErrors(r=>{const n=find(this).call(this,e,r);if(!n)return this.logger.error("Unable to find the nearest job!",e,r,n),this.window.MessageError("Unable to find the nearest job!");if(t&&"startJob"===t.type){const r=new this.window.TaskJob(e,n.x,n.y,t.duration);return this.window.TaskQueue.add(r)}return this.window.JobWindow.open(e,n.x,n.y)}))}onJobListChange(e){this.onJobListChangeCallbacks.push(e)}reset(){var e;this.storage.remove(StorageKey.jobList),forEach(e=this.onJobListChangeCallbacks).call(e,e=>e([]))}isInJobList(e){var t;return-1!==indexOf(t=this.getJobList()).call(t,e)}getJobList(){var e,t,r;return this.storage.has(StorageKey.jobList)?map(e=filter(t=map(r=this.storage.getString(StorageKey.jobList).split(",")).call(r,e=>trim(e).call(e))).call(t,e=>e.length)).call(e,Number):[]}setJobList(e){var t;this.logger.log("saving nearest job list...",e),e.length?this.storage.setString(StorageKey.jobList,e.join(",")):this.storage.remove(StorageKey.jobList),forEach(t=this.onJobListChangeCallbacks).call(t,t=>t(e))}getJobPopup(e){const t=this.window.JobList.getJobById(e);if(void 0===t)throw new Error(`There is no pop up for provided job id! (jobId: ${e})`);try{if(this.window.ItemManager.isLoaded())return this.window.GameMap.PopupHandler.getJobPopup(t)}catch(e){}return t.name}find(e,t){const r=getPlayerLastPosition(this.window);if(!r)return null;this.logger.log(`player's last position is x: ${r.x}, y: ${r.y}`);const n=this.window.JobList.getJobById(e);if(void 0===n)throw new Error(`Cannot find job by job id! (jobId: ${e})`);const i=findNearestJob(n,r,t,this.logger);return this.logger.log(`found the nearest job location for job id: ${e}`,i,r),i}isPosition(e){const t=this.settings.get(SettingNumber.NearestJobsBar);return"down"===e?t===NearestJobsBarPosition.down||t===NearestJobsBarPosition.downTransparent:"up"===e?t===NearestJobsBarPosition.up:t===NearestJobsBarPosition.right}};function getPlayerLastPosition(e){const{position:t}=e.Character,{queue:r}=e.TaskQueue;return reduce(r).call(r,(e,t)=>{const r=t.wayData;return r.x&&r.y?{x:r.x,y:r.y}:e},{x:t.x,y:t.y})}function findNearestJob(e,t,r,n){const i=r.job_groups[e.groupid];if(!i)return null;const o=[];n.log(`found the job group for the job (jobId: ${e.id})`,i);for(let e=0;e<i.length;e++){const r=i[e][0]-t.x,n=i[e][1]-t.y,a=Math.sqrt(r*r+n*n);o.push({distance:a,x:i[e][0],y:i[e][1]})}if(sort(o).call(o,(e,t)=>e.distance>t.distance?1:-1),n.log("jobs were sorted by distance",o),!o.length)throw new Error(`There are no jobs in this job group! (groupId: ${e.groupid}, jobId: ${e.id})`);return o[0]}function getJobProductLuck(e,t){var r;if(!e.durations.length)return!1;const n=e.durations[e.durations.length-1],i=find(r=n.items).call(r,e=>e.itemid===t);return!!i&&i.prop+i.probBonus}__decorate([CatchErrors("NearestJobs.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],NearestJobs.prototype,"init",null),__decorate([CatchErrors("NearestJobs.openNearestJobWindowByProductId"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number]),__metadata("design:returntype",void 0)],NearestJobs.prototype,"openNearestJobWindowByProductId",null),__decorate([CatchErrors("NearestJobs.getMinimap"),__metadata("design:type",Function),__metadata("design:paramtypes",[Function,Object]),__metadata("design:returntype",void 0)],NearestJobs.prototype,"getMinimap",null),__decorate([CatchErrors("NearestJobs.startNearestJob"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number]),__metadata("design:returntype",void 0)],NearestJobs.prototype,"startNearestJob",null),NearestJobs=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Settings,Storage,Logger,Language,ErrorTracker])],NearestJobs);let SettingsView=class{window;language;settings;nearestJobs;errorTracker;config;key=WestCalcWindowTab.Settings;title={type:"translation",translation:216};settingsImporterWindow;constructor(e,t,r,n,i,o,a,s){this.window=e,this.language=t,this.settings=r,this.nearestJobs=n,this.errorTracker=i,this.config=o,this.settingsImporterWindow=new LocalSettingsExporterWindow(e,t,a,i,s)}getMainDiv(){const{west:e,$:t}=this.window,r=[],n=this.getOptions(),i=t("<div></div>");if(!n)throw new Error("Setting component was not initialized!");return forEach(n).call(n,n=>{if(isBooleanSetting(n)){const{translation:o,name:a}=n,s=new e.gui.Checkbox(o).setId(`TWCalc_${a}`).setSelected(this.settings.get(a)).setCallback(()=>{this.settings.save(r)});r.push({...n,controller:s}),i.append(t(`<div style="margin: 3px 0" id="TWCalc_Setting_${a}"></div>`).append(s.getMainDiv()))}else if(isNumberSetting(n)){var o;const{behaviour:a,translation:s,name:l}=n,c=new e.gui.Combobox(`TWCalc_${l}`);forEach(o=a.options).call(o,e=>{c.addItem(e.value,e.translation)}),c.select(this.settings.get(l)),c.addListener(()=>{this.settings.save(r)}),r.push({...n,controller:c});const u=t(`<div style="margin: 2px 0" id="TWCalc_Settings_${l}"></div>`);u.append(`<span>${s}&nbsp;&nbsp;</span>`),u.append(c.getMainDiv()),i.append(u)}}),t(i).append(`<p style="text-align: right; margin-bottom: 5px">${this.language.getTranslation(218)}<b> (F5)</b></p>`).append("<hr>").append("</br>").append((new e.gui.Button).setCaption(this.language.getTranslation(152)).click(()=>this.nearestJobs.dialog.open()).getMainDiv()).append((new e.gui.Button).setCaption(this.language.getTranslation(225)).click(()=>this.settingsImporterWindow.open()).getMainDiv()).append((new e.gui.Button).setCaption("Error Log").click(()=>this.errorTracker.open()).getMainDiv()).append(`</br><div style="margin-top: 8px;">Translated by <b>${this.language.getTranslator()}</b>.&nbsp;Thanks for the translation! Version: <b>v${this.config.version}</b></div>`),i}getOptions(){return[{name:SettingBoolean.Wardrobe,translation:this.language.getTranslation(175),behaviour:{type:"checkbox"}},{name:SettingBoolean.MenuCraftButton,translation:this.language.getTranslation(153),behaviour:{type:"checkbox"}},{name:SettingBoolean.TransferFeeCalc,translation:this.language.getTranslation(108),behaviour:{type:"checkbox"}},{name:SettingBoolean.XpHpEnergyCalc,translation:this.language.getTranslation(109),behaviour:{type:"checkbox"}},{name:SettingBoolean.WestCalc,translation:this.language.getTranslation(184),behaviour:{type:"checkbox"}},{name:SettingNumber.NearestJobsBar,translation:this.language.getTranslation(185),behaviour:{type:"combobox",options:[{value:NearestJobsBarPosition.downTransparent,translation:`${this.language.getTranslation(187)} (transparent)`},{value:NearestJobsBarPosition.down,translation:this.language.getTranslation(187)},{value:NearestJobsBarPosition.up,translation:this.language.getTranslation(186)},{value:NearestJobsBarPosition.right,translation:this.language.getTranslation(188)},{value:NearestJobsBarPosition.hidden,translation:this.language.getTranslation(189)}]}},{name:SettingNumber.DuelBar,translation:this.language.getTranslation(191),behaviour:{type:"combobox",options:[{value:DuelBarPosition.up,translation:this.language.getTranslation(186)},{value:DuelBarPosition.down,translation:this.language.getTranslation(187)},{value:DuelBarPosition.hidden,translation:this.language.getTranslation(189)}]}}]}};SettingsView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Language,Settings,NearestJobs,ErrorTracker,Config,Logger,LocalSettingsExporter])],SettingsView);var FAILS_ON_PRIMITIVES=fails(function(){nativeKeys(1)});$$1({target:"Object",stat:!0,forced:FAILS_ON_PRIMITIVES},{keys:function(e){return nativeKeys(toObject(e))}});var keys$2=path.Object.keys,parent$2=keys$2,keys$1=parent$2,require$$0$2=keys$1,keys=require$$0$2,$findIndex=require$$0$s.findIndex,FIND_INDEX="findIndex",SKIPS_HOLES=!0;FIND_INDEX in[]&&Array(1)[FIND_INDEX](function(){SKIPS_HOLES=!1}),$$1({target:"Array",proto:!0,forced:SKIPS_HOLES},{findIndex:function(e){return $findIndex(this,e,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables();var findIndex$3=getBuiltInPrototypeMethod("Array","findIndex"),method$1=findIndex$3,ArrayPrototype$1=Array.prototype,findIndex$2=function(e){var t=e.findIndex;return e===ArrayPrototype$1||isPrototypeOf(ArrayPrototype$1,e)&&t===ArrayPrototype$1.findIndex?method$1:t},parent$1=findIndex$2,findIndex$1=parent$1,require$$0$1=findIndex$1,findIndex=require$$0$1;function wofPatch(e,t){wofWheelofFortunePatch(e,t),wofDotdCardgameWindowPatch(e,t)}function wofWheelofFortunePatch(e,t){const{west:r}=e;when(e,()=>r.wof.WheelofFortune.prototype.process,()=>{const e=r.wof.WheelofFortune.prototype.process;r.wof.WheelofFortune.prototype.process=function(r,n,i,o,a,s){const l=this.id;e.call(this,r,n,function(e){t(r,l,n,e),i.call(this,e)},o,a,s)}})}function wofDotdCardgameWindowPatch(e,t){const{west:r}=e;when(e,()=>r.wof.WofDotdCardgameWindow.requestData,()=>{const e=r.wof.WofDotdCardgameWindow.requestData;r.wof.WofDotdCardgameWindow.requestData=function(r,n,i){const o=this.model.getWofId();e.apply(this,[r,n,function(e){t(r,o,n,e),"function"==typeof i&&i(e)}])}})}function when(e,t,r){const n=setInterval(()=>{try{const e=t();clearInterval(n),r(e)}catch(e){}},500)}const events=["Hearts","Easter","Independence","Octoberfest","DayOfDead"],translations={easter:195,independence:196,valentine:194,octoberfest:197,dotd:198,fair:174};let TombolaExporter=class{window;localStorage;storage;logger;config;language;errorTracker;tombolaInfo;callbackList=[];constructor(e,t,r,n,i,o,a){this.window=e,this.localStorage=t,this.storage=r,this.logger=n,this.config=i,this.language=o,this.errorTracker=a}init(){this.migrate(),wofPatch(this.window,(e,t,r,n)=>this.errorTracker.execute(()=>this.onWheelOfFortuneSpin({...r,action:e,wofid:t},n)))}onWheelOfFortuneSpin(e,t){this.logger.log("new tombola spin",e,t);const r=this.getCurrentEvent(),n=e.wofid;if(1===n){if(!t.picked)throw new Error("Invalid tombola! (wofId = 1)");const e=1===t.payid;return this.save({tombolaId:n,prize:t.picked[0],category:t.picked[1]},e)}if(t.prize){const e=t.prize.itemId,r=!!this.window.west.wof.WofManager.wofs.heartswof.mode.free;return this.save({tombolaId:n,prize:e,category:0},r)}if(t&&t.cost&&t.stages){const r=t.stages.length-1,i=t.stages[r].rewards.item,o=Number(e.card||t.card);if("gamble"===e.action){const e=2==o?"Left_card":1==o?"Middle_card":"Right_card";return this.save({tombolaId:n,prize:i,category:r,level:e},!0)}if("bribe"===e.action||"change"===e.action){const e="After_bribe";return this.save({tombolaId:n,prize:i,category:r,level:e},!1)}e.action}else if(r)if(t&&!t.failed&&(t.itemId||t.outcome)){const i=t.itemEnhance||t.outcome&&t.outcome.itemEnhance,o=t.itemId||t.outcome&&t.outcome.itemId||0,a=getLevel(e,t);let s=0;switch(i){case 25:s=1;break;case 150:s=2;break;case 800:s=3}const l={tombolaId:n,prize:o,category:s,level:a};if(void 0===a)throw this.addSpinToStorage(l,!0),InvisibleError.of(new Error(`Unable to resolve the tombola level! event=${r} data=${stringify(e)} response=[${keys(t).join(", ")}]`));this.save(l,!0)}else this.logger.warn("Unable to process WoF response!",t);else this.logger.warn("Unknown event type!",r)}getEventTranslation(e){return this.language.getTranslation(translations[e])}addTombolaInfo(e){var t;(this.tombolaInfo=e,this.callbackList.length)&&(forEach(t=this.callbackList).call(t,t=>t(e)),this.callbackList=[])}getFromStorage(){return this.storage.getObject(StorageKey.tombola,{})}getTombolaInfo(e){if(this.tombolaInfo)return e(this.tombolaInfo);this.callbackList.push(e),this.logger.log("loading tombola list..."),this.window.$.get(this.config.website+"/service/tombola-list",()=>{},"jsonp")}save(e,t){this.logger.log("saving tombola...",e,{isFree:t}),this.exportSpin(e),this.addSpinToStorage(e,t)}getCurrentEvent(){const e=findIndex(events).call(events,e=>this.window.Game.sesData.hasOwnProperty(e));return e?events[e]:null}exportSpin(e){const{$:t}=this.window;t.get(this.config.website+"/service/tombola-export",e,null,"jsonp").done(e=>{this.logger.log("tombola exported",e)}).fail((t,r,n)=>{"parsererror"!==r?this.logger.warn("unable to export the tombola spin",e,r,n):this.logger.log("tombola exported",e)})}addSpinToStorage(e,t){const{category:r,prize:n,tombolaId:i}=e,o=this.getFromStorage();o.hasOwnProperty(i)||(o[i]={key:i,spins:{free:0,total:0},levels:{}}),o[i].spins.total++,t&&o[i].spins.free++,o[i].levels.hasOwnProperty(r)||(o[i].levels[r]={}),o[i].levels[r].hasOwnProperty(n)||(o[i].levels[r][n]=0),o[i].levels[r][n]++,this.storage.setObject(StorageKey.tombola,o)}migrate(){if(this.storage.has(StorageKey.tombola))return;this.logger.log("migrating from tombola v1...");const e={},t=this.localStorage;for(const r in t){if(!t.hasOwnProperty(r))continue;const n=r.match(/^TWCalc_Tombola_(\d+_\d+_\d+|\d+)$/);if(!n)continue;const i=n[1],o=parseKey(i);if(!o){this.logger.log(`could not parse tombola key ${i}...`);continue}let a,s;try{a=JSON.parse(t.getItem(r)||"[]")}catch(e){}if("number"!=typeof o)try{s=JSON.parse(t.getItem(`TWCalc_Tombola_Spins_${o.id}_${o.year}`)||"{}")}catch(e){}if(void 0===a||void 0===s){this.logger.log("invalid tombola data...",o,a,s);continue}const l={};forEach(a).call(a,(e,t)=>l[t]=e),e[getId(o)]={key:o,spins:s,levels:l}}this.storage.setObject(StorageKey.tombola,e),this.logger.log("migration finished!",e)}};function getLevel(e,t){for(const r of[e.enhance,t.enhance])if(null!=r)return r}function getId(e){return"number"==typeof e?e:e.id}function parseKey(e){if(e.match(/^1$/))return 1;const t=e.match(/^(\d+)_(\d+)_(\d+)$/);return t?{id:Number(t[1]),year:Number(t[2]),type:events[Number(t[3])]}:void 0}var TombolaView_1;__decorate([CatchErrors("TombolaExporter.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],TombolaExporter.prototype,"init",null),__decorate([CatchErrors("TombolaExporter.onWheelOfFortuneSpin"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Object]),__metadata("design:returntype",void 0)],TombolaExporter.prototype,"onWheelOfFortuneSpin",null),TombolaExporter=__decorate([singleton(),__param(0,inject$1("window")),__param(1,inject$1("localStorage")),__metadata("design:paramtypes",[Object,Object,Storage,Logger,Config,Language,ErrorTracker])],TombolaExporter);let TombolaView=TombolaView_1=class{window;logger;config;language;tombolaExporter;scrollpane;navigation;tombolaName;actions;constructor(e,t,r,n,i){this.window=e,this.logger=t,this.config=r,this.language=n,this.tombolaExporter=i;const{west:o,$:a}=this.window;this.actions=a("<div></div>"),this.tombolaName=a('<div style="font-size: 18px;"></div>'),this.navigation=a('<div style="display: flex; justify-content: space-between; align-items: center; margin: 6px 6px 12px 6px"></div>'),this.navigation.append(this.actions).append(this.tombolaName),this.scrollpane=new o.gui.Scrollpane}static of(e,t,r,n,i){return new TombolaView_1(e,t,r,n,i)}show(e){const{west:t,$:r}=this.window;this.tombolaExporter.getTombolaInfo(n=>{var i;this.actions.empty();const o=this.tombolaExporter.getFromStorage(),a=filter(i=values$1(n)).call(i,e=>o.hasOwnProperty(e.id));sort(a).call(a,(e,t)=>e.year||t.year?-1:Number(e.year)-Number(t.year));const s=new t.gui.Combobox("TW_Calc_Tombola_list").addListener(e=>this.apply(n,e)).setWidth(250);if(forEach(a).call(a,e=>{const t=getTombolaHeader(this.tombolaExporter,e);s.addItem(e.id,t)}),a.length){this.actions.append(s.getMainDiv());const e=a[a.length-1].id;s.select(e),this.apply(n,e)}else this.scrollpane.appendContent(r('<div style="text-align: center; padding: 24px; font-weight: bold">'+this.language.getTranslation(221)+"...</div>")),this.navigation.remove();e()})}getMainDiv(){const{$:e}=this.window,t=e('<div style="height: 308px"></div>').append(this.scrollpane.getMainDiv());return e("<div></div>").append(this.navigation).append(t)}apply(e,t){const{$:r}=this.window,n=e[t],i=this.tombolaExporter.getFromStorage()[n.id];this.logger.log("showing tombola id = "+t,n);const o=r(`<a href="${this.config.website}/tombola/${n.tombolaId}" target="_blank">${getTombolaHeader(this.tombolaExporter,n)}</a>`);this.tombolaName.empty().append(o),this.scrollpane.getContentPane().empty(),this.scrollpane.appendContent(this.getContent(n,i)),this.scrollpane.scrollToTop()}getContent(e,t){var r;const{$:n}=this.window,i=n('<div style="overflow: auto;"></div>'),{spins:o,levels:a}=t;return"valentine"===e.type&&i.append('<span style="font-size: 15px; text-align: right; margin-left: 20px; font-weight: bold">'+o.free+" free "+pluralize(o.free,"spin")+" of "+o.total+" total "+pluralize(o.total,"spin")+"</span></h2>"),forEach(r=entries(a)).call(r,([e,t])=>{const r=getContainer(this.window,Number(e)),n=entries(t);n.length&&(forEach(n).call(n,([e,t])=>r.append(getItem(this.window,Number(e),t))),i.append(r))}),i}};function getItem(e,t,r){const{ItemManager:n,tw2widget:i}=e,o=n.get(t);return new i.InventoryItem(o).setCount(r).setShowcompare(!1).getMainDiv()}function getContainer(e,t){let r="rgba(128, 128, 128, 0.4)";switch(t){case 1:r="rgba(0, 128, 0, 0.4)";break;case 2:r="rgba(0, 0, 255, 0.4)";break;case 3:r="rgba(255, 215, 0, 0.4)";break;case 4:r="rgba(255, 0, 0, 0.4)"}return e.$('<div style="background:'+r+'; float: left; width: 613px; margin: 10px; padding: 10px; border: 3px solid #a49e97; border-radius: 8px; box-shadow: 0 0 20px inset; opacity: 0.9; left: 0; right: 0; top: 0; bottom: 0;"></div>')}function pluralize(e,t){return 1==e?t:t+"s"}function getTombolaHeader(e,t){const r=e.getEventTranslation(t.type);return t.year?`${t.year} - ${r}`:r}TombolaView=TombolaView_1=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,Config,Language,TombolaExporter])],TombolaView);let TombolaViewFactory=class{window;logger;config;language;tombola;constructor(e,t,r,n,i){this.window=e,this.logger=t,this.config=r,this.language=n,this.tombola=i}getWindowView(){let e;return{key:WestCalcWindowTab.Tombola,title:{type:"translation",translation:213},loader:!0,init({loadCallback:t}){e.show(t)},getMainDiv:()=>(e=TombolaView.of(this.window,this.logger,this.config,this.language,this.tombola),e.getMainDiv())}}};TombolaViewFactory=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,Config,Language,TombolaExporter])],TombolaViewFactory);class WestCalcWindow extends TW2Window{constructor(e,t,r,n,i,o,a,s,l,c,u){super("TWCalcWindow",t,e,r,n,{title:"The-West Calc"}),this.addView(i),this.addView(o),this.addView(a),this.addView(s),this.addView(l),this.addView(c.getWindowView()),this.addView(u)}open(e){super.open(e)}openSettings(e){this.open({tab:WestCalcWindowTab.Settings}),e&&setTimeout$1(()=>{var t;find(t=this.getMainDiv()).call(t,"#TWCalc_Settings_"+e).css({"background-color":"rgb(255 255 0 / 0.5)","font-weight":"bold"})})}}let WestCalc=class{window;constructor(e,t,r,n,i,o,a,s,l,c,u){this.window=new WestCalcWindow(e,t,r,n,i,o,a,s,l,c,u)}};WestCalc=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,ErrorTracker,Language,Logger,NotepadView,ImporterView,CharacterView,BattleCalcView,DuelCalcView,TombolaViewFactory,SettingsView])],WestCalc);let DuelBar=class{window;settings;language;westCalc;logger;errorTracker;updateInterval=1e3;lastPosition={x:-1,y:-1};onNearbyPlayersChangeCallbacks=[];nearbyPlayers=[];updateInProgress=!1;constructor(e,t,r,n,i,o){this.window=e,this.settings=t,this.language=r,this.westCalc=n,this.logger=i,this.errorTracker=o}init(){this.isEnabled()&&this.window.setInterval(()=>this.update(),this.updateInterval)}update(){this.lastPosition.x===this.window.Character.position.x||this.lastPosition.y===this.window.Character.position.y||this.updateInProgress||(this.logger.log("updating duel bar..."),this.updateInProgress=!0,this.loadNearbyPlayers(this.errorTracker.catchErrors(e=>{this.lastPosition.x=this.window.Character.position.x,this.lastPosition.y=this.window.Character.position.y,this.updateInProgress=!1,this.logger.log("duel bar updated",this.lastPosition,e)})))}appendTo(e){let t;this.onNearbyPlayersChange(r=>{this.logger.log("nearby players list has changed",r),null!=t&&t.remove(),0!==r.length&&(t=this.getMainDiv(r),e.append(t))})}isEnabled(){return this.settings.get(SettingNumber.DuelBar)!=DuelBarPosition.hidden}isPosition(e){const t=this.settings.get(SettingNumber.DuelBar);return"down"===e?t===DuelBarPosition.down:t===DuelBarPosition.up}getMainDiv(e){var t;const r=$('<div style="text-align: center; width: 620px; height: 88px; position: relative; margin: 4px 0 4px 0;"></div>');return forEach(e).call(e,e=>{const t=this.window.GameMap.calcWayTime(this.window.Character.position,{x:e.character_x,y:e.character_y}),n="Duel "+e.player_name+" ("+t.formatDuration()+")",i=this.window.$(`\n                <div style="display: inline-block; margin-right: 5px; cursor:pointer; position:relative; float: left;">\n                    <div class="duel-bar-avatar">${e.avatar}</div>\n                    <div style="color: #F8C57C; top: 5px; position: absolute; text-align: center; width: 100%; font-weight: bold; text-shadow: 1px 1px 1px black; font-size: 11px;">\n                        ${e.duellevel}                    \n                    </div>\n                    <img alt="${n}" onclick="SaloonWindow.startDuel(${e.player_id})" title="${n}" style="position: absolute; bottom: -22px; left: 11px; width: 50px;" src="/images/window/duels/charclass_${e.class}.png">\n                    <div class="open_profile" title="${e.player_name}" onclick="PlayerProfileWindow.open(${e.player_id})" style="z-index: 3; width: 20px; height: 20px; display: none; cursor: pointer; position: absolute; left: -10px; top: 20px; background-image: url(/images/map/icons/instant-work-1.png);"></div>\n                </div>`);i.on("mouseover",function(){var e;find(e=$(this)).call(e,".open_profile").show()}),i.on("mouseout",function(){var e;find(e=$(this)).call(e,".open_profile").hide()}),find(i).call(i,".duel-bar-avatar").attr("title",n).on("click",t=>{t.stopPropagation(),this.window.SaloonWindow.startDuel(e.player_id)}),find(i).call(i,".open_profile").on("mouseover",function(){$(this).css({"background-image":"url(/images/map/icons/instant-work-1_hover.png)","margin-top":"-2px","margin-left":"-2px",width:"24px",height:"25px"})}).on("mouseout",function(){$(this).css({"background-image":"url(/images/map/icons/instant-work-1.png)","margin-top":"0px","margin-left":"0px",width:"20px",height:"20px"})}),r.append(i)}),find(t=r.append(`<div class="tw2gui_window_buttons_close" style="position: absolute; right: -15px; top: 0;" title="${this.language.getTranslation(189)} Duel Bar"></div>`)).call(t,".tw2gui_window_buttons_close").on("click",()=>{this.westCalc.window.openSettings(SettingNumber.DuelBar)}),r}onNearbyPlayersChange(e){e(this.nearbyPlayers),this.onNearbyPlayersChangeCallbacks.push(e)}loadNearbyPlayers(e){this.logger.log("loading nearby players..."),loadNearbyPlayers(this.errorTracker,this.window,8,this.errorTracker.catchErrors(t=>{var r;this.nearbyPlayers=t,forEach(r=this.onNearbyPlayersChangeCallbacks).call(r,e=>e(t)),e(t)}))}};function loadNearbyPlayers(e,t,r,n){!function i(o,a){t.$.post("/game.php?window=duel&action=search_op&h="+t.Player.h,{page:a},e.catchErrors(e=>{const s=e.oplist.pclist;forEach(s).call(s,e=>{o.length<r&&!find(o).call(o,t=>t.player_id===e.player_id)&&o.push(e)}),o.length>=r||!s.length?(sortPlayersByDistance(t,o),n(o)):i(o,a+1)}),"json")}([],0)}function sortPlayersByDistance(e,t){sort(t).call(t,(t,r)=>e.GameMap.calcWayTime(e.Character.position,{x:t.character_x,y:t.character_y})-e.GameMap.calcWayTime(e.Character.position,{x:r.character_x,y:r.character_y}))}__decorate([WaitUntil(function(){const e=this.window.GameMap;return"object"==typeof e&&"function"==typeof e.calcWayTime}),CatchErrors("DuelBar.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],DuelBar.prototype,"init",null),__decorate([CatchErrors("DuelBar.update"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],DuelBar.prototype,"update",null),DuelBar=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Settings,Language,WestCalc,Logger,ErrorTracker])],DuelBar);let BankFeesCalculator=class{window;language;timeout;settings;logger;errorTracker;interval;constructor(e,t,r,n,i,o){this.window=e,this.language=t,this.timeout=r,this.settings=n,this.logger=i,this.errorTracker=o}inject(){const{BankWindow:e,format_money:t}=this.window;if("*"!==e.DOM){const r=Math.max(Number(this.window.$("#amount").val()),0),n=Math.round(r/100*e.Transfer.fee),i=Math.round(r-n),o=$("div.bank-transfer-info .tw2gui_groupframe_content_pane",e.DOM);Number(o.data("amount"))!==r&&(this.logger.log("updating transfer fees..."),o.data("amount",r),o.empty().append(this.language.getTranslation(105)+": "+e.Transfer.fee+'% <span style="font-size: 9px">('+this.language.getTranslation(106)+": - $"+t(n)+", "+this.language.getTranslation(107)+": $"+t(i)+")</span>"))}}init(){var e;this.settings.get(SettingBoolean.TransferFeeCalc)&&(this.logger.log("initializing transfer fees calculator..."),this.interval=this.window.setInterval(bind$1(e=this.inject).call(e,this),this.timeout))}};__decorate([CatchErrors({component:"BankFeesCalculator.inject",callback:e=>{e.window.clearInterval(e.interval)}}),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],BankFeesCalculator.prototype,"inject",null),BankFeesCalculator=__decorate([singleton(),registry([{token:"timeout",useValue:1e3}]),__param(0,inject$1("window")),__param(2,inject$1("timeout")),__metadata("design:paramtypes",[Object,Language,Number,Settings,Logger,ErrorTracker])],BankFeesCalculator);const nearestJobsIcon="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAQcHBw0MDRgQEBgUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAaADIDAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAwQFAQYC/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB4jHZ5CYVM7ZcjmjS4Os9dJKYoq6aGNkdNLXLBhG4g8vVSdz4aTtU86ySdon5LeOn/8QAIRABAAICAAYDAAAAAAAAAAAAAwIEAAEFEBESEzMjMTL/2gAIAQEAAQUCZHko0eKJGcrpKm/kGmqRY2Ofdkpb2lYSonfuQsYja09cY61dtafPMGBYIbKW0Wctj44sUbTW5om51endDLfuPC91v9w++X//xAAeEQACAwABBQAAAAAAAAAAAAAAEQECIQMQUWFxwf/aAAgBAwEBPwGWOTfZsjRpvYgmBIengrRfRkSMcIwZNjDkKFSxXr//xAAdEQACAgMBAQEAAAAAAAAAAAAAAQIRECExEgNR/9oACAECAQE/AUka/ConCrOYaPWy7EtFjlZ5ZJCiVsp0UVj58JYjwef/xAAxEAAABAMEBwcFAAAAAAAAAAAAAQIRITEyAxIiQTNDUWFxkdE0QoGCscHwBBMUI+H/2gAIAQEABj8CVFkkbcgSrIjjTSQxqU6JpOHoFJyTDf4h7NHDIXV30mnKI79F+o585b5hRJJ8Z+oL6m2P980om39+Sn9y1w2u3dwFo0cRMfgQ/ItsBno07ePT3karUygbJV1Gk1L/ADoFrMnN1TTm8wZqxPz9xEjJTMDWuMSNrpxgLz3tge6pyyyFWquU5dQuiRTqkNX5hZ9nmE0U5+27YO55gns8xq9IP//EACUQAAIBBAICAgIDAAAAAAAAAAERIQAxQVFh8HGRgbEQocHR4f/aAAgBAQABPyFIuAgAEI05Zm82eBR3ITAA5F4BRnHFQSmuvMWJjIxLpkh6EuBAOV8FQxTkCGkTHiz1GaSuWYh9H97pNdb6+6k9rMudhvQpSo0EAjxEhljzdSAAVuaIWCZ5Uryy6PmQO7s1Ys5blZjpxL70GhsKcDQDPsi0hL/Ad/nS22sEYKBPPHsKhjkGRtLmhF3DJoH072VTXQ3YCqcB2Wr0hUBEEgNIWjGhjZjRgeTZLeNqViuX1jf0rsH1+qu7fNf1+/xzrmulm9Tsd+Kzx/v8H//aAAwDAQACAAMAAAAQMMKaHs76QLgMIs//xAAfEQADAAICAgMAAAAAAAAAAAAAAREhMRBBIFFhcfH/2gAIAQMBAT8QZyXZrUG8DwfIJsX9BH9lEKDzgcNCVQU74EcWBOmJkxCRPY2NDZHXwf/EAB4RAQACAgEFAAAAAAAAAAAAAAEAESExEEFhcYHx/9oACAECAQE/EARPpOlUEFy22oke5RB4GorAJiPmNW5TwZnajpArdQQm5YSpWLdMt4tI6d8g4//EACMQAQEAAwABAwQDAAAAAAAAAAERACExQRBxkVFhofDB0eH/2gAIAQEAAT8QnOx0YGngwAXlaEKGiOlMKZ/N0mkUsUAfFRlEG61uAUeKTrp09MDGIlGpxpj9I9CrUpHcvAgeRWDaU2wUdprgGQih+YKpMCdzCIu4iOlwM7MV2gBAlKq8MBqcJsHhpXXzlT/o394EOGVInRcZExJEYMraD8ZFh60KUbcSEpxxhqJEYFk64cmtiCIMAqdEhAeSfL0Awn+k+nc8vv8AfzHw782F+h9MH5fu7g/kft9D/9k=";var $some=require$$0$s.some,STRICT_METHOD=arrayMethodIsStrict("some");$$1({target:"Array",proto:!0,forced:!STRICT_METHOD},{some:function(e){return $some(this,e,arguments.length>1?arguments[1]:void 0)}});var some$3=getBuiltInPrototypeMethod("Array","some"),method=some$3,ArrayPrototype=Array.prototype,some$2=function(e){var t=e.some;return e===ArrayPrototype||isPrototypeOf(ArrayPrototype,e)&&t===ArrayPrototype.some?method:t},parent=some$2,some$1=parent,require$$0=some$1,some=require$$0,WardrobeWindowTab;class WearableView{config;window;logger;language;errorTracker;container;content;caption;headerLeft;iconShowList;actions;wearable;constructor(e,t,r,n,i){this.config=e,this.window=t,this.logger=r,this.language=n,this.errorTracker=i;const{$:o}=this.window;this.content=this.window.$("<div></div>"),this.actions=o('<div style="display: flex; align-items: center; margin-left: -2px;"></div>'),this.caption=o("<div style=\"font-size: 16px; font-family: Georgia, 'Times New Roman', serif; text-shadow: 1px 1px 0 #FFCC66, 1px 1px 2px #000000; text-transform: capitalize;\"></div>");const a=o('<div style="\n                background: url(/images/tw2gui/iconset.png) repeat -48px 0px;\n                width: 16px;\n                height: 16px;\n                display: inline-block;\n                cursor: pointer;\n                margin-right: 8px;"></div>').attr("title",this.language.getTranslation(171)).on("click",()=>this.remove());this.iconShowList=o('<div style="\n                width: 24px;\n                height: 18px;\n                cursor: pointer;\n                background: url(/images/window/character/title_editbtn.jpg) no-repeat -2px -1px;\n                border: 1px solid;\n                margin: 0 2px;\n                display: inline-block"></div>').on("click",e=>this.bindSelectBox(e));const s=o('<div style="\n            background: url(/images/tw2gui/iconset.png) repeat -16px 80px;\n            width: 16px;\n            height: 16px;\n            display: inline-block;\n            cursor: pointer;\n            margin: 2px 4px;"></div>').attr("title",this.language.getTranslation(161)).on("click",()=>this.add());this.headerLeft=o('<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;"></div>').append(a).append(this.actions).append(this.caption);const l=o('<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;"></div>').append(s).append(this.iconShowList),c=o('<div style="display: flex; justify-content: space-between; height: 32px; align-items: center; margin: 0 6px;"></div>').append(this.headerLeft).append(l);this.container=o("<div></div>").append(c).append(this.content)}static of(e,t,r,n,i){return new WearableView(e,t,r,n,i)}add(){this.config.add(e=>this.show(e))}remove(){if(void 0===this.wearable)throw new Error("No wearable is selected!");const{MessageSuccess:e}=this.window;this.config.remove(this.wearable.config.id),this.wearable=void 0,this.show(!1),e().show()}bindSelectBox(e){var t;const r=(new this.window.west.gui.Selectbox).setHeader(this.language.getTranslation(170)).setWidth(300);forEach(t=this.config.list()).call(t,e=>{r.addItem(e.id,getViewName(e.name))}),r.addListener(e=>this.errorTracker.execute(()=>this.show(e))),r.show(e)}wear(e,t){const{Bag:r,Wear:n,$:i,MessageError:o}=this.window;if(this.logger.log(`wearing item id = ${e}`,t),r.loaded){const o=r.getItemByItemId(e);void 0!==o&&n.carry(o),i(t).css("opacity","0.5")}else o("Loading...").show,r.loadItems(),this.logger.warn("bag is not loaded, cannot wear an item...")}getMainDiv(){return this.container}show(e){this.errorTracker.execute(()=>{var t,r;let n;if(this.actions.empty(),this.caption.empty(),"number"==typeof e&&(n=e),void 0===n){const t=this.config.list();if(t.length||this.iconShowList.hide(),!t.length||!e)return this.headerLeft.css("visibility","hidden"),void this.content.html('<div style="margin: 15px; text-align: center; font-weight: bold">'+this.language.getTranslation(208)+"</div>");n=t[0].id}const{tw2widget:i,ItemManager:o,$:a,west:s,Premium:l,MessageError:c}=this.window;this.logger.log(`show wearable, id = ${n}`),this.headerLeft.css("visibility","visible"),this.iconShowList.show();const u=this.config.show(n,this.actions);if(!u)return this.logger.error(`not found a wearable id = ${n}`),void c(`Wearable '${n}' not found!`).show();this.logger.log("wearable config",u);const d={config:u,itemsDOM:[]};this.caption.text(getViewName(u.name)),d.itemsDOM=map(t=u.items).call(t,e=>{const t=new i.InventoryItem(o.get(e)).getMainDiv().css({float:"none",display:"inline-block"});return this.isWearing(e)&&a(t).css("opacity","0.5"),a(t).on("click",()=>{this.wear(e,t)})});const g=a("<div></div>");forEach(r=d.itemsDOM).call(r,e=>g.append(e));const p=(new this.window.west.gui.Groupframe).appendToContentPane(g);if(l.hasBonus("automation")){this.logger.log("wear all button enabled");const e=(new s.gui.Button).setCaption(this.language.getTranslation(207)).click(()=>{this.errorTracker.execute(()=>{const e=d.config.items;for(let t=0;t<e.length;t++){const r=e[t],n=d.itemsDOM[t];this.wear(r,n)}})});p.appendToContentPane(a('<div style="display: block; margin: 4px 0; text-align: center"></div>').append(e.getMainDiv()))}else this.logger.log("wear all button disabled, no automation");this.wearable=d,this.content.empty().append(p.getMainDiv())})}isWearing(e){var t;return some(t=values$1(this.window.Wear.wear)).call(t,t=>t.obj.item_id===e)}}function getViewName(e){return e||"unnamed"}__decorate([CatchErrors("WearableView.add()"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],WearableView.prototype,"add",null),__decorate([CatchErrors("WearableView.remove()"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],WearableView.prototype,"remove",null),__decorate([CatchErrors("WearableView.bindSelectBox()"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],WearableView.prototype,"bindSelectBox",null),__decorate([CatchErrors("WearableView.wear"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number,Object]),__metadata("design:returntype",void 0)],WearableView.prototype,"wear",null),function(e){e[e.Wardrobe=0]="Wardrobe",e[e.OwnCalc=1]="OwnCalc"}(WardrobeWindowTab||(WardrobeWindowTab={}));let WearableViewFactory=class{window;logger;language;errorTracker;constructor(e,t,r,n){this.window=e,this.logger=t,this.language=r,this.errorTracker=n}getWindowView(e,t,r){let n;return{key:e,title:t,loader:!0,init({loadCallback:e}){n.show(!0),e()},getMainDiv:()=>(n=WearableView.of(r,this.window,this.logger,this.language,this.errorTracker),n.getMainDiv())}}};WearableViewFactory=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Logger,Language,ErrorTracker])],WearableViewFactory);let OwnCalcView=class{window;wardrobeViewFactory;storage;language;logger;errorTracker;constructor(e,t,r,n,i,o){this.window=e,this.wardrobeViewFactory=t,this.storage=r,this.language=n,this.logger=i,this.errorTracker=o,this.errorTracker.execute(()=>{if(this.storage.has(StorageKey.ownCalc)){const e=this.storage.getObject(StorageKey.ownCalc);if(isWearableV1(e)){const t=map(e).call(e,(e,t)=>{const{name:r,...n}=e;return{id:t,name:r,config:n}});this.storage.setObject(StorageKey.ownCalc,t)}}})}showAddOwnCalcDialog(e){var t;const{west:r,CharacterSkills:n}=this.window,i=getSkillsConfig(n),o=(new r.gui.Textfield).setWidth(440).setPlaceholder(this.language.getTranslation(157)),a=new r.gui.Dialog(this.language.getTranslation(172)).setWidth(462).setHeight(324).addButton(this.language.getTranslation(36),()=>{const t=this.addOwnCalcWearable(o.getValue(),i);e(t.id)}).addButton(this.language.getTranslation(92)).show(),s=find(t=a.divMain).call(t,".tw2gui_dialog_content > .tw2gui_dialog_text");s.append(this.getSkillsFrame(i,!0)),s.append(o.getMainDiv())}showOwnCalcConfigDialog(e){var t;const{west:r}=this.window,n=new r.gui.Dialog(getViewName(e.name)).setWidth(462).setHeight(294).addButton(this.language.getTranslation(162)).show();find(t=n.divMain).call(t,".tw2gui_dialog_content > .tw2gui_dialog_text").append(this.getSkillsFrame(e.config,!1))}addOwnCalcWearable(e,t){const{MessageSuccess:r}=this.window,n={id:now(),name:e,config:t},i=this.getList();return i.push(n),this.storage.setObject(StorageKey.ownCalc,i),this.logger.log("set own calc to",i),r(this.language.getTranslation(165)).show(),n}getSkillsFrame(e,t){var r;const{$:n,west:i,CharacterSkills:o}=this.window,a=n('<div style="width: 432px; margin-left: auto; margin-right: auto; text-align: center;"></div>');return forEach(r=o.allSkillKeys).call(r,r=>{const i=e[r],s=t?1/0:e[r],l=t?0:e[r],c=t=>{var i;const o=find(i=n(t.currentTarget).parent()).call(i,".displayValue");let a=e[r];n(t.currentTarget).hasClass("butPlus")?a=Math.min(s,a+1):n(t.currentTarget).hasClass("butMinus")&&(a=Math.max(0,a-1)),n(o).val(a.toString()),e[r]=a},u=o.getSkill(r).getSkillPMBox("TWCalc_Wardrobe_"+r,{},{id:"TWCalc_Wardrobe_"+r,min_value:l,start_value:i,max_value:s,extra_points:0,callbackPlus:e=>c(e),callbackMinus:e=>c(e)});a.append(u)}),(new i.gui.Groupframe).appendToContentPane(a).getMainDiv()}getBestItems(e){var t;const{west:r,Bag:n,Wear:i,ItemManager:o}=this.window,a=r.item.Calculator.getBestSet(e.config),s=a&&a.getItems()||[],l={};forEach(s).call(s,e=>{l[o.get(e).type]=e});const c=n.getItemsByItemIds(s),u={};for(let e=0;e<c.length;e++){const t=c[e],r=t.getType(),n=i.get(r);!n||n&&(n.getItemBaseId()!==t.getItemBaseId()||n.getItemLevel()<t.getItemLevel())?u[r]=t.getId():u[r]=n.getId()}return forEach(t=i.slots).call(t,e=>{u.hasOwnProperty(e)||(i.wear.hasOwnProperty(e)?u[e]=i.wear[e].obj.item_id:l.hasOwnProperty(e)&&(u[e]=l[e]))}),values$1(u)}getTW2WindowView(){return this.wardrobeViewFactory.getWindowView(WardrobeWindowTab.OwnCalc,{type:"translation",translation:160},{add:e=>this.showAddOwnCalcDialog(e),list:()=>{var e;return map(e=this.getList()).call(e,({id:e,name:t})=>({id:e,name:t}))},remove:e=>{var t;const r=filter(t=this.getList()).call(t,t=>t.id!==e);this.setList(r)},show:(e,t)=>{const r=this.getList(),n=find(r).call(r,t=>t.id===e);return n?(t.append($('<div style="background: url(/images/tw2gui/iconset.png) repeat -32px 80px;width: 16px;height: 16px;display: inline-block;cursor: pointer;margin-right: 8px"></div>').attr("title",this.language.getTranslation(169)).on("click",()=>this.showOwnCalcConfigDialog(n))),this.logger.log("show own calc wearable id = "+n.id,n),{id:e,name:n.name,items:this.getBestItems(n)}):null}})}setList(e){this.storage.setObject(StorageKey.ownCalc,e)}getList(){return this.storage.getObject(StorageKey.ownCalc,[])}};function isWearableV1(e){return isArray(e)&&e.length>0&&!e[0].hasOwnProperty("id")}function getSkillsConfig(e){var t;const r={};return forEach(t=e.allSkillKeys).call(t,e=>{r[e]=0}),r}__decorate([CatchErrors("OwnCalcView.showAddOwnCalcDialog"),__metadata("design:type",Function),__metadata("design:paramtypes",[Function]),__metadata("design:returntype",void 0)],OwnCalcView.prototype,"showAddOwnCalcDialog",null),__decorate([CatchErrors("OwnCalcView.showOwnCalcConfigDialog"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],OwnCalcView.prototype,"showOwnCalcConfigDialog",null),__decorate([CatchErrors("OwnCalcView.addOwnCalcWearable"),__metadata("design:type",Function),__metadata("design:paramtypes",[String,Object]),__metadata("design:returntype",Object)],OwnCalcView.prototype,"addOwnCalcWearable",null),__decorate([CatchErrors("OwnCalcView.getSkillsFrame"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object,Boolean]),__metadata("design:returntype",void 0)],OwnCalcView.prototype,"getSkillsFrame",null),__decorate([CatchErrors("OwnCalcView.getBestItems"),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",Array)],OwnCalcView.prototype,"getBestItems",null),OwnCalcView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,WearableViewFactory,Storage,Language,Logger,ErrorTracker])],OwnCalcView);let WardrobeView=class{window;wardrobeViewFactory;storage;language;logger;errorTracker;constructor(e,t,r,n,i,o){this.window=e,this.wardrobeViewFactory=t,this.storage=r,this.language=n,this.logger=i,this.errorTracker=o,this.errorTracker.execute(()=>{if(this.storage.has(StorageKey.wardrobe)){const e=this.storage.getObject(StorageKey.wardrobe);if(isArray(e)&&e.length>0&&isArray(e[0])){const t=map(e).call(e,(e,t)=>{const r=[];for(let t=0;t<e.length-1;t++)e[t]&&r.push(e[t]);return{id:t,items:r,name:e[e.length-1]}});this.storage.setObject(StorageKey.wardrobe,t)}}})}addWardrobeWearable(e){var t;const{Wear:r,MessageSuccess:n}=this.window,i=map(t=values$1(r.wear)).call(t,e=>e.obj.item_id),o={id:now(),name:e,items:i},a=this.getList();return a.push(o),this.storage.setObject(StorageKey.wardrobe,a),this.logger.log("set wardrobe to",a),n(this.language.getTranslation(165)).show(),o}getTW2WindowView(){return this.wardrobeViewFactory.getWindowView(WardrobeWindowTab.Wardrobe,{type:"translation",translation:170},{add:e=>{(new this.window.west.gui.TextInputDialog).setTitle(this.language.getTranslation(161)).setText(this.language.getTranslation(164)).setPlaceholder(this.language.getTranslation(166)).addButton(this.language.getTranslation(163),t=>{const r=this.addWardrobeWearable(t);e(r.id)}).addButton(this.language.getTranslation(162)).show()},list:()=>{var e;return map(e=this.getList()).call(e,({id:e,name:t})=>({id:e,name:t}))},remove:e=>{var t;const r=filter(t=this.getList()).call(t,t=>t.id!==e);this.setList(r)},show:e=>{const t=this.getList(),r=find(t).call(t,t=>t.id===e);return r?{id:e,name:r.name,items:r.items}:null}})}setList(e){this.storage.setObject(StorageKey.wardrobe,e)}getList(){return this.storage.getObject(StorageKey.wardrobe,[])}};__decorate([CatchErrors("WardrobeView.addWear"),__metadata("design:type",Function),__metadata("design:paramtypes",[String]),__metadata("design:returntype",Object)],WardrobeView.prototype,"addWardrobeWearable",null),WardrobeView=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,WearableViewFactory,Storage,Language,Logger,ErrorTracker])],WardrobeView);class WardrobeWindow extends TW2Window{constructor(e,t,r,n,i,o){super("TWCalcWardrobe",t,e,r,n,{title:{type:"translation",translation:170},size:{width:332,height:402},content:{marginTop:12,marginBottom:12,marginLeft:4,marginRight:4}}),this.addView(i.getTW2WindowView()),this.addView(o.getTW2WindowView())}}let Wardrobe=class{window;errorTracker;wardrobeWindow;constructor(e,t,r,n,i,o){this.window=e,this.errorTracker=t,this.wardrobeWindow=new WardrobeWindow(e,t,r,n,i,o)}open(){const{wman:e,Wear:t}=this.window,r=e.getById("wear");void 0===r?t.open():r.bringToTop(),setTimeout$1(()=>{const t=e.getById("inventory");void 0!==t&&t.destroy()}),this.wardrobeWindow.open({position:this.getWearWindowPosition()})}getWearWindowPosition(){const e=this.window.$(".tw2gui_window.tw2gui_win2."+this.window.Wear.window.id);return{x:Number(e.css("left").split("px")[0])+Number(e.css("width").split("px")[0]),y:Number(e.css("top").split("px")[0])}}};__decorate([CatchErrors("Wardrobe.open"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Wardrobe.prototype,"open",null),Wardrobe=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,ErrorTracker,Language,Logger,WardrobeView,OwnCalcView])],Wardrobe);const wardrobeIcon="data:image/png;data:;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/2wBDAQcHBw0MDRgQEBgUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAaADIDAREAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQQFAgMG/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB8VhsZeWVooyAGk0rmihNVse3LUUi3P1yeh8WBtiTrLn6GGk7VPOhJO0T8lvHT//EACIQAAICAQMEAwAAAAAAAAAAAAIDAQQAEhMhEBQVMyQxMv/aAAgBAQABBQJhWWO270RJ3QI+WwqcKDzVlRnyAtyLLbBlKGj5CLJyLXg1e8jFOBb+65tvSyIcsbUOmcZYWcagy37l4r3W/wBh99P/xAAoEQABAwIEBAcAAAAAAAAAAAAAAREhAqEDIkFREBKxwTFhgZHR4vD/2gAIAQMBAT8BV1MxJKiIpJOwgv29M0ftkNDUa/h5Nyv791MORxFPl+sXsOOg3azdWuOxBiFBSVFPH//EACURAAIABQMDBQAAAAAAAAAAAAABAhESIfAQMUEDUWEikaHR4f/aAAgBAgEBPwGyKocYqSckVITWkaEp25dk+zb3FuNenO4nL5+v0cLTlyrexSyJCXjMsQJok5CtnjGUvTp7EWkOw9f/xAAxEAABAgIHBQYHAAAAAAAAAAABAAIRMQMSISIyQYE0QkNRYTNxgsHR8AQkkaGx0uH/2gAIAQEABj8CcGyFkAIyW9oz+IOc59mRi1OZDDYOeqwkaKJrgahb+CviM/rLrNU0ItspLw8paSTXmnpi2INXnDLHmqIueXXXXnzxa/lEC0VxA6IfM0/L3fReXuqmkcRXylAZ2D2F2nBj79FSGsWm+IwMbc1EfEUn3Pmt6wQibZ9+XIRPei8m8CDhMZLaKSXX9kK9Z0LY9enIawjKAli4VTDl6p+CQnikuH4lR7PNNwYc/LpyW54k3Z5rh9ov/8QAJRABAAICAQQBBAMAAAAAAAAAAREhADFBUWGB8HGRscHhEKHR/9oACAEBAAE/IUlVE3g4m5b3ep4MCEDHEH2wT4WLw5KhJ1JeSISLkkIPlwxUmCK+M/wYGIBqd31Mh09b9frkaqzN5uHqG7W5w52Y1gXf0Mf/AHLLtu7xRao+DYAsa13ixwE5d9cXyzFUohvcqIufl+ge/niRRYBFbt1uYrxgd8ESQK7MWejXXCUzVEkN3ZbMMoRKbyoccgRHng6VeCESkJ+7DVPm1MaEhWolJSMGDHd+s7+jPYP1/Wbe3nP8/vx36d89Ld5PY98Zz2/3/g//2gAMAwEAAgADAAAAEDRH2Tok62DYDCLP/8QAHxEAAgMAAgIDAAAAAAAAAAAAAAERITFBURAggaHx/9oACAEDAQE/EBJdvoaW9G6HQkQJ/QWmQv5NFCsTaCzgkjJJ4fgobXYK1gSGx6vQFJojsaMGkcfR/8QAIBEBAAICAgEFAAAAAAAAAAAAAQARITEQYUFRcYHB4f/aAAgBAgEBPxArzHrm0xAWRTaVPCnzKa941jUZQqqPSYzFjIP46R50CHVHQxKBG1n3CmYsSpmyXuBC3i0jp3yDj//EACQQAQACAgAFBAMAAAAAAAAAAAEAESExEFFhcZFBocHwsdHh/9oACAEBAAE/EDXBqGkBrQBwfoDTsesSlAQBYswiBzIu6ogVs3gQPBYVAt9b+SHYmqYgya5mOCrUNWjmjCqSsUIxyfEhVaApTFylgzIFHKBMAwCA2AX82ekIJgrIVnwxCzAoJFdLQ/o37gpwqJQFhjSeShgglN5oW1EEdWr8k1yAJfESYGBiJV1JBaFAgVVX8UZ1g6L8IGE/AFSYT+k+G51dffqPDvehfQ9kHu+7cHyPt4H/2Q==";let XpHpEnergyCalculator=class{window;language;timeout;settings;logger;errorTracker;interval;constructor(e,t,r,n,i,o){this.window=e,this.language=t,this.timeout=r,this.settings=n,this.logger=i,this.errorTracker=o}inject(){const e=this.window.Character.getExperience4Level(),t=this.window.Character.getMaxExperience4Level(),r=e-t,n=this.window.$("#ui_experience_bar");isNaN(r)||Number(n.data("experience"))===e||(this.logger.log("updating xp indicator..."),n.data("experience",e),n.addMousePopup(this.language.getTranslation(103)+": "+e+" / "+t+" ("+r+")"));const i=this.window.Character.health,o=this.window.Character.maxHealth,a=(this.window.Character.maxHealth-i)/(this.window.Character.healthRegen*o),s=Math.floor(a),l=Math.floor(60*(a-s)),c=i-o,u=$("#ui_character_container > .health_bar");Number(u.data("health"))!==i&&(this.logger.log("updating health indicator..."),u.data("health",i),u.text(i+" / "+o+(c<0?" ("+c+")":"")).addMousePopup(this.language.getTranslation(98)+": "+i+" / "+o+(c<0?" ("+c+")</br>"+this.language.getTranslation(104)+" "+s+" "+this.language.getTranslation(101)+" "+l+" "+this.language.getTranslation(102):"")));const d=this.window.Character.energy,g=this.window.Character.maxEnergy,p=(g-d)/(this.window.Character.energyRegen*g),h=Math.floor(p),f=Math.floor(60*(p-h)),y=d-g,w=this.window.$("#ui_character_container > .energy_bar");Number(w.data("energy"))!==d&&(this.logger.log("updating energy indicator..."),w.data("energy",d),w.text(d+" / "+g+(y<0?" ("+y+")":"")).addMousePopup(this.language.getTranslation(200)+": "+d+" / "+g+(y<0?" ("+y+")</br>"+this.language.getTranslation(100)+": "+h+" "+this.language.getTranslation(101)+" "+f+" "+this.language.getTranslation(102):"")))}init(){var e;this.settings.get(SettingBoolean.XpHpEnergyCalc)&&(this.logger.log("initializing xp, hp and energy ui indicator..."),this.interval=this.window.setInterval(bind$1(e=this.inject).call(e,this),this.timeout))}};__decorate([CatchErrors({component:"XpHpEnergyCalc.inject",callback:e=>{e.window.clearInterval(e.interval)}}),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],XpHpEnergyCalculator.prototype,"inject",null),XpHpEnergyCalculator=__decorate([singleton(),registry([{token:"timeout",useValue:1e3}]),__param(0,inject$1("window")),__param(2,inject$1("timeout")),__metadata("design:paramtypes",[Object,Language,Number,Settings,Logger,ErrorTracker])],XpHpEnergyCalculator);let Gui=class{window;settings;westCalc;wardrobe;nearestJobs;duelBar;logger;language;craft;xpHpEnergyCalculator;bankFeesCalculator;errorTracker;uiMenuContainer;constructor(e,t,r,n,i,o,a,s,l,c,u,d){this.window=e,this.settings=t,this.westCalc=r,this.wardrobe=n,this.nearestJobs=i,this.duelBar=o,this.logger=a,this.language=s,this.craft=l,this.xpHpEnergyCalculator=c,this.bankFeesCalculator=u,this.errorTracker=d,this.uiMenuContainer=this.window.$('<div class="ui_menucontainer" id="TWCalc_Buttons"></div>')}init(){this.logger.log("initializing gui..."),this.initUiMenu(),this.initBottomBar(),this.initTopBar(),this.initCraftButton(),this.xpHpEnergyCalculator.init(),this.bankFeesCalculator.init()}initUiMenu(){if(this.settings.get(SettingBoolean.WestCalc)){const e=this.window.$(`<div class="menulink" title="The-West Calc" style="background-position: 0 0; background-image: url(${twCalcIcon});"></div>`).on("click",()=>{this.westCalc.window.open()}).on("mouseover",rightMenuButtonLogicMouseOver(this.window.$)).on("mouseout",rightMenuButtonLogicMouseOut(this.window.$));this.uiMenuContainer.append(e)}if(this.settings.get(SettingNumber.NearestJobsBar)===NearestJobsBarPosition.right){const e=this.window.$(`<div class="menulink" title="${this.language.getTranslation(152)}" style="background-position: 0 0; background-image: url(${nearestJobsIcon});"></div>`).on("click",e=>{this.nearestJobs.list.appendTo(e)}).on("mouseover",rightMenuButtonLogicMouseOver(this.window.$)).on("mouseout",rightMenuButtonLogicMouseOut(this.window.$));this.uiMenuContainer.append(e)}if(this.settings.get(SettingBoolean.Wardrobe)){const e=this.window.$(`<div class="menulink" title="${this.language.getTranslation(170)}" style="background-position: 0 0; background-image: url(${wardrobeIcon});"></div>`).on("click",()=>{this.wardrobe.open()}).on("mouseover",rightMenuButtonLogicMouseOver(this.window.$)).on("mouseout",rightMenuButtonLogicMouseOut(this.window.$));this.uiMenuContainer.append(e)}this.window.$(this.uiMenuContainer).append('<div class="menucontainer_bottom"></div>'),this.window.$("#ui_menubar").append(this.uiMenuContainer)}initTopBar(){if(!(this.nearestJobs.isPosition("up")||this.duelBar.isPosition("up")))return;const{$:e}=this.window;setInterval(()=>{this.window.$(".first-purchase").remove()},500);const t=e("div.custom_unit_counter").length?58:44,r=e(`<div id="TWCalc_TopBar" style="\n                    text-align: center;                      \n                    left: 50%;\n                    margin-top: 10px;\n                    max-width: 620px;\n                    position: absolute;\n                    top: ${t}px;\n                    z-index: 19;\n                    -webkit-transform: translateX(-50%);\n                    -moz-transform: translateX(-50%);\n                    -ms-transform: translateX(-50%);\n                    -o-transform: translateX(-50%);\n                    transform: translateX(-50%);"></div>`);if(this.window.$("#user-interface").append(r),this.nearestJobs.isPosition("up")){this.logger.log("add the nearest jobs bar up");const e=this.window.$("<div></div>");this.window.$(r).append(e),this.nearestJobs.bar.appendTo(e)}if(this.duelBar.isPosition("up")){this.logger.log("add duel bar up");const e=this.window.$("<div></div>");this.window.$(r).append(e),this.duelBar.appendTo(e)}}initBottomBar(){if(!(this.nearestJobs.isPosition("down")||this.duelBar.isPosition("down")))return;const e=$('<div id="TWCalc_BottomBar" style="\n                    left: 50%;\n                    -webkit-transform: translateX(-50%);\n                    -moz-transform: translateX(-50%);\n                    -ms-transform: translateX(-50%);\n                    -o-transform: translateX(-50%);\n                    transform: translateX(-50%);\n                    text-align: center;\n                    max-width: 620px;\n                    position: absolute;\n                    bottom: 97px;"></div>');if(this.window.$("#ui_bottombar").append(e),setInterval(()=>{this.window.$(e).stop(),this.window.$(e).animate({bottom:getBottomBarPositionY(this.window)},500)},500),this.duelBar.isPosition("down")){this.logger.log("add duel bar up");const t=this.window.$("<div></div>");this.window.$(e).append(t),this.duelBar.appendTo(t)}if(this.nearestJobs.isPosition("down")){this.logger.log("add the nearest jobs bar down");const t=this.window.$("<div></div>");this.window.$(e).append(t),this.nearestJobs.bar.appendTo(t)}}initCraftButton(){const e=null!=this.window.Character.professionId;this.settings.get(SettingBoolean.MenuCraftButton)&&e&&this.window.$(".button.crafting.background").off("click").on("click",()=>{this.craft.open()})}};function getBottomBarPositionY(e){let t=(e.$("#ui_bottombar").height()||0)+5+14+(e.$(".friendsbar").height()||0);return"none"==$("#ui_windowdock").css("display")||""==$(".windowbar_frames").html()?t+=15:t+=47,t}function rightMenuButtonLogicMouseOver(e){return function(){e(this).css("background-position","-25px 0")}}function rightMenuButtonLogicMouseOut(e){return function(){e(this).css("background-position","0 0")}}__decorate([CatchErrors("Gui.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Gui.prototype,"init",null),__decorate([CatchErrors("Gui.initUiMenu"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Gui.prototype,"initUiMenu",null),__decorate([CatchErrors("Gui.initTopBar"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Gui.prototype,"initTopBar",null),__decorate([CatchErrors("Gui.initBottomBar"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Gui.prototype,"initBottomBar",null),__decorate([CatchErrors("Gui.initCraftButton"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Gui.prototype,"initCraftButton",null),Gui=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Settings,WestCalc,Wardrobe,NearestJobs,DuelBar,Logger,Language,Craft,XpHpEnergyCalculator,BankFeesCalculator,ErrorTracker])],Gui);const itemTypeToShopType={head:"tailor",body:"tailor",foot:"tailor",pants:"tailor",right_arm:"gunsmith",left_arm:"gunsmith",neck:"general",animal:"general",belt:"general"};function getItemShopType(e,t){const r=t.get(e);return!itemTypeToShopType.hasOwnProperty(r.type)||!r.traderlevel||r.traderlevel>30?null:itemTypeToShopType[r.type]}function questsMonkeyPatch(e,t,r){questsGetMinimapLinkPath(e,t),questRenderPatch(e,t,r)}function questsGetMinimapLinkPath(e,t){const{Quest:r,ItemManager:n,MinimapWindow:i}=e,o=r.getMinimapLink;r.getMinimapLink=function(r){let a="";const s=["inventory_changed","wear_changed"];if(r&&r.id&&indexOf(s).call(s,r.type)>-1){const o=n.get(r.id),s=!!getItemShopType(o.item_id,n);if("crafting"===o.spec_type)return'<span class="quest_craftlink" style="cursor: pointer;" title="'+t.getTranslation(192)+'" onclick="TW_Calc.openCraftRecipeWindow('+o.item_id+')"><img src="/images/items/yield/toolbox.png" alt="Toolbox" width="16"/></span>&nbsp;';"mapdrop"===o.spec_type?a+='<span class="tw2gui-iconset tw2gui-icon-hammer" style="display: inline-block; cursor: pointer; vertical-align: middle; margin-right: 2px;" onclick="TW_Calc.openNearestJobWindowByProductId('+o.item_id+')"></span>':s?a+='<span class="tw2gui-iconset tw2gui-icon-home" style="display: inline-block; cursor: pointer; vertical-align: middle; margin-right: 2px;" onclick="TW_Calc.openShopWindowByItemId('+o.item_id+')"></span>':e.hidTasks&&e.hidTasks[o.item_base_id]&&(a+=i.getQuicklink(r.id,"inventory_changed").replace("class='quest_mmaplink'","style='cursor: pointer;'"))}else{if(r&&"task-finish-walk"===r.type)return'<span class="quest_employerlink" style="cursor: pointer;" title=\''+t.getTranslation(205)+"' onclick=\"TW_Calc.findQuestEmployer("+r.value+')"><img src="/images/map/minimap/icons/miniicon_quests.png" alt="Quests"/></span>&nbsp;';r&&"task-finish-job"===r.type&&(a+='<span class="tw2gui-iconset tw2gui-icon-hammer" style="display: inline-block; cursor: pointer; vertical-align: middle; margin-right: 2px;" onclick="TW_Calc.startNearestJob('+r.id+', {})"></span>')}return a+o(r)}}function questRenderPatch(e,t,r){const{Quest:n}=e,i=n.render;n.render=function(){var e;i.apply(this,arguments),find(e=this.el).call(e,".quest_description_container .strong").append('<a class="quest_calclink" style="float: right;" title="'+t.getTranslation(206)+'" href="'+r.website+"/quests/quest/"+this.id+'" target="_blank"><img src="/images/items/yield/book_plain.png" alt="Show Quest" width="22"/></a>')}}let Quests=class{window;nearestJobs;language;config;logger;errorTracker;constructor(e,t,r,n,i,o){this.window=e,this.nearestJobs=t,this.language=r,this.config=n,this.logger=i,this.errorTracker=o}init(){questsMonkeyPatch(this.window,this.language,this.config)}findQuestEmployer(e){const{GameMap:t,UserMessage:r}=this.window;this.nearestJobs.getMinimap(n=>{const i=n.quest_locations[e];if(!i)return new r(this.language.getTranslation(204),"hint").show();t.center(i[0][0],i[0][1])})}openShopWindowByItemId(e){const{$:t,GameMap:r,MessageSuccess:n,MessageError:i,ItemManager:o,Character:a,Trader:s}=this.window;this.nearestJobs.getMinimap(l=>{n(this.language.getTranslation(143)).show();const c=getTownsByDistance(l.towns,r,a),u=getItemShopType(e,o);if(!u)return i(this.language.getTranslation(219)).show();findItemShopRecursive(e,u,c,t,this.logger,e=>{s.open(u,e.town_id,e.x,e.y)},()=>i(this.language.getTranslation(219)).show())})}};function getShop(e,t,r){return new promise((n,i)=>{e.get("game.php?window=building_"+t+"&town_id="+r,e=>{var t;if("error"in e)return i();n(map(t=e.trader_inv).call(t,e=>e.item_id))})})}function findItemShopRecursive(e,t,r,n,i,o,a){const s=r.shift();if(i.log("finding item in shops recursively",s,r),!s)return a();getShop(n,t,s.town_id).then(l=>{if(includes(l).call(l,e))return o(s);findItemShopRecursive(e,t,r,n,i,o,a)}).catch(()=>findItemShopRecursive(e,t,r,n,i,o,a))}function getTownsByDistance(e,t,r){var n;const i=[],o=r.homeTown;if(forEach(n=values$1(e)).call(n,e=>{e.member_count&&e.town_points>2e3&&e.town_id!=o.town_id&&i.push({town_id:e.town_id,x:e.x,y:e.y,distance:t.calcWayTime(r.position,e)})}),sort(i).call(i,(e,t)=>e.distance-t.distance),o&&o.town_id){const{town_id:e,x:t,y:r}=o;i.unshift({town_id:e,x:t,y:r,distance:0})}return i}__decorate([CatchErrors("Quests.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",Object)],Quests.prototype,"init",null),__decorate([CatchErrors("Quests.findQuestEmployer"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number]),__metadata("design:returntype",void 0)],Quests.prototype,"findQuestEmployer",null),__decorate([CatchErrors("Quests.openShopWindowByItemId"),__metadata("design:type",Function),__metadata("design:paramtypes",[Number]),__metadata("design:returntype",void 0)],Quests.prototype,"openShopWindowByItemId",null),Quests=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,NearestJobs,Language,Config,Logger,ErrorTracker])],Quests);let Updater=class{window;config;logger;language;storage;errorTracker;constructor(e,t,r,n,i,o){this.window=e,this.config=t,this.logger=r,this.language=n,this.storage=i,this.errorTracker=o}init(){this.window.$.get(this.config.website+"/service/updater",{name:this.window.Character.name,id:this.window.Character.playerId,world:this.window.Game.gameURL,locale:this.window.Game.locale,TWCalc:this.config.version},()=>{},"jsonp")}callback(e){try{e.version!==this.config.version&&e.beta_version!=this.config.version&&this.showUpdaterWindow(e),this.storage.has(StorageKey.languagePackReset)&&this.storage.getNumber(StorageKey.languagePackReset)===Number(e.reset_language_pack)||(this.logger.log("language pack reset"),this.storage.remove(StorageKey.languagePackLastUpdate),this.storage.setString(StorageKey.languagePackReset,e.reset_language_pack))}catch(e){this.logger.error("Updater error. Your TW-Calc might be updated, check the latest version on the website!",e)}}showUpdaterWindow(e){const{west:t}=this.window,r=this.config.version;if(void 0!==t.gui.Dialog)new t.gui.Dialog(this.language.getTranslation(78),`<div class="txcenter">${this.language.getTranslation(77)}</div><div><br />${this.language.getTranslation(79)}: ${r}<br />${this.language.getTranslation(111)}: ${e.version}<br/></br><b>${this.language.getTranslation(112)}?</b></br>${e.news}</div>`,t.gui.Dialog.SYS_WARNING).addButton("Download",()=>this.doUpdate()).addButton(this.language.getTranslation(80),()=>{}).show();else{if(!confirm(this.language.getTranslation(77)+"\n\n"+this.language.getTranslation(79)+": "+this.config.version+"\n"+this.language.getTranslation(111)+": "+e.version))return;this.doUpdate()}}doUpdate(){const e=`${this.config.updateUrl}?t=${now()}`;this.logger.log(`opening update url... (${e})`),this.window.open(e)}};__decorate([CatchErrors("Updater.init"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Updater.prototype,"init",null),Updater=__decorate([singleton(),__param(0,inject$1("window")),__metadata("design:paramtypes",[Object,Config,Logger,Language,Storage,ErrorTracker])],Updater);let Initializer=class{language;config;importer;updater;settings;gui;westCalc;logger;birthday;nearestJobs;tombolaExporter;errorTracker;duelBar;battleCalc;alarmClock;chests;quests;craft;window;patch;constructor(e,t,r,n,i,o,a,s,l,c,u,d,g,p,h,f,y,$,w,m){this.language=e,this.config=t,this.importer=r,this.updater=n,this.settings=i,this.gui=o,this.westCalc=a,this.logger=s,this.birthday=l,this.nearestJobs=c,this.tombolaExporter=u,this.errorTracker=d,this.duelBar=g,this.battleCalc=p,this.alarmClock=h,this.chests=f,this.quests=y,this.craft=$,this.window=w,this.patch=m,this.errorTracker.execute(()=>{this.logger.log("initializing tw-calc..."),this.registerApi(),this.patch(this.window),this.language.init(()=>{this.gui.init(),this.updater.init(),this.birthday.init(),this.nearestJobs.init(),this.duelBar.init(),this.tombolaExporter.init(),this.battleCalc.init(),this.alarmClock.init(),this.chests.init(),this.quests.init(),this.craft.init()})})}registerApi(){const e=this.window.Game.version.toString(),{scriptShortName:t,scriptName:r,website:n,author:i,contributors:o,githubUrl:a,discordUrl:s}=this.config,l=`${i}, ${o.join(", ")}`,c=this.window.TheWestApi.register(t,r,"1.36",e,l,n),u=this.window.$("<div style=\"font-size: 20px; font-family: Georgia, 'Times New Roman', serif; text-align: center; margin: 15px; text-shadow: 1px 1px 0 #FFCC66, 1px 1px 2px #000000;\"></div>").append(`<div style="margin-bottom: 8px"><a href="${n}" target="_blank">${n}</a></div>`).append(`<div style="margin-bottom: 8px"><a href="${s}" target="_blank">Discord</a></div>`).append(`<div style="margin-bottom: 32px"><a href="${a}" target="_blank">GitHub</a></div>`).append(`<div><a href="javascript: TW_Calc._window.open({ tab: 'settings' }); void(0)">${this.language.getTranslation(3)}</a></div>`),d=this.window.$("<div></div>").append(u);this.config.donations&&d.append('<div style="font-size: 16px; text-align: center; margin-bottom: 15px">If you like our webpage and script, please donate for server costsand further development, we will be very grateful to you. We are funding everything from our own resources. All your donations will be appreciated and used in best way possible to ensure future development of this script.<div style="font-weight: bold; font-size: 20px; font-family: Georgia, \'Times New Roman\'; margin: 4px;">Thank you!</div></div>\n                <div style="text-align: center"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="LRG4X3PGMYHZY"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></div>'),c.setGui(d)}};function bootstrap(e){const t=e.resolve(Initializer),{importer:r,config:n,language:i,updater:o}=t;setUpdaterCallback(e,o);const{version:a,website:s}=n;return{version:a,website:s,doImport:()=>{r.start()},loadPack:e=>{i.loadPack(e)},trackChest:(...e)=>t.chests.trackChest(...e),openCraftRecipeWindow:e=>t.craft.openCraftRecipeWindow(e),openNearestJobWindowByProductId:e=>t.nearestJobs.openNearestJobWindowByProductId(e),openShopWindowByItemId:e=>t.quests.openShopWindowByItemId(e),findQuestEmployer:e=>t.quests.findQuestEmployer(e),startNearestJob:e=>t.nearestJobs.startNearestJob(e),addTombolaInfo:e=>t.tombolaExporter.addTombolaInfo(e),_window:t.westCalc.window,_initializer:t}}function setUpdaterCallback(e,t){var r;e.resolve("window").TWCalc_updaterCallback=bind$1(r=t.callback).call(r,t)}function isGameReady(e){return void 0!==e.$}function isAlreadyInjected(e){return void 0!==e.TW_Calc}function inject(e,t,r){const n=setInterval(()=>{isGameReady(t)&&(clearInterval(n),isAlreadyInjected(t)||(t.TW_Calc=injectScript(e,r)))},250);return n}function injectScript(e,t){const{href:r}=t;if((-1!=indexOf(r).call(r,".the-west.")||-1!=indexOf(r).call(r,".tw.innogames."))&&-1!=indexOf(r).call(r,"game.php"))return e(instance);throw new Error("TW-Calc must be loaded in the game!")}function tw2patch(e){patchPlusminusField(e),patchCraftingUpdateResources(e)}function patchPlusminusField(e){e.west.gui.Plusminusfield.prototype.setEnabled=function(e){return this.enabled=e,this}}function patchCraftingUpdateResources(e){const t=e.Crafting.updateResources;e.Crafting.updateResources=function(){e.CharacterWindow.window&&t.call(e.Crafting)}}__decorate([CatchErrors("Initializer.registerApi"),__metadata("design:type",Function),__metadata("design:paramtypes",[]),__metadata("design:returntype",void 0)],Initializer.prototype,"registerApi",null),Initializer=__decorate([singleton(),__param(18,inject$1("window")),__param(19,inject$1("tw2patch")),__metadata("design:paramtypes",[Language,Config,Importer,Updater,Settings,Gui,WestCalc,Logger,Birthday,NearestJobs,TombolaExporter,ErrorTracker,DuelBar,BattleCalc,AlarmClock,Chests,Quests,Craft,Object,Object])],Initializer),instance.register("window",{useValue:window}),instance.register("localStorage",{useValue:localStorage}),instance.register("tw2patch",{useValue:tw2patch}),inject(bootstrap,window,location)})()},TWCalcJSElement=document.createElement("script");TWCalcJSElement.setAttribute("type","text/javascript"),TWCalcJSElement.setAttribute("language","javascript"),TWCalcJSElement.setAttribute("id","TWCalc_js"),TWCalcJSElement.innerHTML="("+TWCalcJS.toString()+")()",document.getElementsByTagName("body")[0].appendChild(TWCalcJSElement);

  });
  // The West - Color tchat | 0.3.0.5 | Falc0n.RG (updated by Tom Robert)
  start("The West - Color tchat", ["^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$"], ["^https://classic\\.the\\-west\\.net[^/:@]*(?::\\d+)?/.*$"], function () {
// translation:Falc0n.RG(French),pepe100(Spanish),Tom Robert(German&English),?(Portuguese),TeeNOmore127(Polish)
(function (e) {
  var t = document;
  var n = document.createElement('script');
  n.type = 'application/javascript';
  n.textContent = '(' + e + ')();';
  (t.body || t.head || t.documentElement).appendChild(n);
  n.parentNode.removeChild(n);
})(function () {
  CT = {
    version: '0.3.0.5',
    name: 'Color tchat',
    author: 'Falc0n.RG (updated by Tom Robert)',
    minGame: '2.0',
    maxGame: Game.version.toString(),
    website: 'https://greasyfork.org/scripts/7355',
    updateUrl: 'https://tomrobert.safe-ws.de/sUp.js',
    updateAd: 'http://adf.ly/1XWlcN',
    DATA: {},
    Window: {},
    Chat: {},
    Tools: {},
    langs: {
      en: {
        language: 'English',
        save: 'Save',
        saveMessage: 'Successfully saved',
        chooseLang: 'Choose language',
        contact: 'Contact',
        ColorWindowTitle: 'Color tchat setting',
        ColorWindowPreviewTxt: '*Click on the letters to change color',
        ColorWindowOkBtn: 'Apply',
        ColorWindowToDefaultBtn: 'Set to default',
        ColorWindowThisTchatBtn: 'Set to this',
        ColorWindowDefaultText: 'Select the tchat for reset to default: ',
        ColorWindowBold: 'Bold',
        ColorWindowCaps: 'Capitalized',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'No color',
          'Enter a color code',
          'red',
          'brown',
          'purple',
          'blue',
          'green',
          'pink',
          'magenta',
          'violet gradient',
          'degraded dark blue',
          'green gradient',
          'degraded red',
          'blue gradient light',
          'degraded pink',
          'light green gradient',
          'degraded pink',
          'red gradient light'
        ],
        ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
        ColorSaveEmpty: '[empty]',
        CustomReady: 'Valid Code',
        CustomNotReady: 'Invalid Code',
      },
      fr: {
        language: 'French (français)',
        save: 'Sauvegarder',
        saveMessage: 'Enregistrer avec succès',
        chooseLang: 'Choisissez la langue',
        contact: 'Contact',
        ColorWindowTitle: 'Configurer Color tchat',
        ColorWindowPreviewTxt: '*Clickez sur la lettre à changer de couleur',
        ColorWindowOkBtn: 'Appliquer',
        ColorWindowToDefaultBtn: 'Par défaut',
        ColorWindowThisTchatBtn: 'Pour se tchat',
        ColorWindowDefaultText: 'Sélectionnez les tchat à Remettre par défaut:',
        ColorWindowBold: 'En gras',
        ColorWindowCaps: 'En majuscule',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'Sans couleur',
          'Entrer des couleurs',
          'rouge',
          'marron',
          'violet',
          'bleu',
          'vert',
          'rose',
          'magenta',
          'dégradé violet',
          'dégradé bleu foncé',
          'dégradé vert',
          'dégradé rouge',
          'dégradé bleu clair',
          'dégradé rose',
          'dégradé vert clair',
          'dégradé rose clair',
          'dégradé rouge clair'
        ],
        ColorLoadTitle: 'Clickez pour charger un autre code couleur<br>Le code couleur actuel est: ',
        ColorSaveEmpty: '[vide]',
        CustomReady: 'Code valide',
        CustomNotReady: 'Non valide',
      },
      es: {
        language: 'Spanish (español)',
        save: 'Guardar',
        saveMessage: 'Guardar correctamente',
        chooseLang: 'Elige lengua',
        contact: 'Contacto',
        ColorWindowTitle: 'Configurar Color tchat',
        ColorWindowPreviewTxt: '*Haga clic en la carta de un cambio de color',
        ColorWindowOkBtn: 'Aplicar',
        ColorWindowToDefaultBtn: 'Color por defecto',
        ColorWindowThisTchatBtn: 'Elegir este color',
        ColorWindowDefaultText: 'Seleccione la tchat para restablecer a los valores predeterminados',
        ColorWindowBold: 'En negrita',
        ColorWindowCaps: 'Capitalizado',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'No hay color',
          'Introduzca un código de color',
          'rojo',
          'marrón',
          'morado',
          'azul',
          'verde',
          'rosa',
          'magenta',
          'gradiente violeta',
          'degradado rosa',
          'degradado azul marino',
          'gradient',
          'rojo degradado',
          'luz azul degradado',
          'gradiente de luz verde',
          'rosa degradado',
          'luz pendiente roja'
        ],
        ColorLoadTitle: 'Haga clic para cargar otro código de colores<br>El código de color actual es: ',
        ColorSaveEmpty: '[vacío]',
        CustomReady: 'Código válido',
        CustomNotReady: 'No válido',
      },
      de: {
        language: 'German (Deutsch)',
        save: 'Speichern',
        saveMessage: 'Speichern erfolgreich',
        chooseLang: 'Sprache ändern',
        contact: 'Kontakt',
        ColorWindowTitle: 'Color tchat Einstellung',
        ColorWindowPreviewTxt: '*Klicke auf diese Buchstaben um die aktuell im oberen Feld gewählte Farbe reinzumischen',
        ColorWindowOkBtn: 'Übernehmen',
        ColorWindowToDefaultBtn: 'Zurücksetzen',
        ColorWindowThisTchatBtn: 'Einstellung speichern',
        ColorWindowDefaultText: 'Chaträume auf Standard setzen:',
        ColorWindowBold: 'Fett',
        ColorWindowCaps: 'CAPS LOCK',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'Keine Farbe',
          'Eigener Farbcode',
          'rot',
          'braun',
          'violett',
          'blau',
          'grün',
          'pink',
          'magenta',
          'violett wechselnd',
          'blau wechselnd',
          'grün wechselnd',
          'rot wechselnd',
          'hellblau wechselnd',
          'pink wechselnd',
          'hellgrün wechselnd',
          'pink wechselnd',
          'hellrot wechselnd'
        ],
        ColorLoadTitle: 'Klicke um weitere Farben auszuwählen<br>Aktueller Farbcode: ',
        ColorSaveEmpty: '[leer]',
        CustomReady: 'Code ok',
        CustomNotReady: 'Ungültig',
      },
      pt: {
        language: 'Portuguese (português)',
        save: 'Salvar',
        saveMessage: 'Economize com sucesso',
        chooseLang: 'Escolhe idioma',
        contact: 'Contato',
        ColorWindowTitle: 'Set Color tchat',
        ColorWindowPreviewTxt: '*Clique na letra de uma mudança de cor',
        ColorWindowOkBtn: 'Aplicar',
        ColorWindowToDefaultBtn: 'Definido como padrão',
        ColorWindowThisTchatBtn: 'Definido para este',
        ColorWindowDefaultText: 'Selecione o tchat para repor as predefinições: ',
        ColorWindowBold: 'Em negrito',
        ColorWindowCaps: 'Capitalizados',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'Incolor',
          'Insira um código de cor',
          'vermelho',
          'marrom',
          'roxo',
          'azul',
          'verde',
          'cor de rosa',
          'magenta',
          'gradiente violeta',
          'gradiente azul escuro',
          'gradiente verde',
          'gradiente vermelho',
          'gradiente de luz azul',
          'Pink Gradient',
          'gradiente luz verde',
          'rosa Gradiente',
          'gradiente claro vermelho'
        ],
        ColorLoadTitle: 'Clique para carregar outro código de cor<br>O código de cores atual é: ',
        ColorSaveEmpty: '[vazio]',
        CustomReady: 'Código válido',
        CustomNotReady: 'Inválido',
      },
      pl: {
        language: 'Polish (polski)',
        save: 'Zapisz',
        saveMessage: 'Zapisz powodzeniem',
        chooseLang: 'Wybierz język',
        contact: 'Kontakt',
        ColorWindowTitle: 'Ustawienia Koloru Tchat',
        ColorWindowPreviewTxt: '*Kliknij na literę, aby zmienić kolor',
        ColorWindowOkBtn: 'Zastosuj',
        ColorWindowToDefaultBtn: 'Ustaw na domyślny',
        ColorWindowThisTchatBtn: 'Ustaw na ten',
        ColorWindowDefaultText: 'Wybierz tchat, który ma być domyślny: ',
        ColorWindowBold: 'Grubość',
        ColorWindowCaps: 'Wielkie litery',
        ColorWindowFlip: 'Flip',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'Bez koloru',
          'Wprowadź kod koloru',
          'Czerwony',
          'Brązowy',
          'Fioletowy',
          'Niebieski',
          'Zielony',
          'Różowy',
          'Purpurowy',
          'Fioletowo gradientowy',
          'Zwietrzały ciemny niebieski',
          'Zielony gradient',
          'Zwietrzały czerwony',
          'Jasnoniebieski gradient',
          'Zwietrzały ciemny różowy',
          'Jasnozielony gradient',
          'Zwietrzały różowy',
          'Jasnoczerwony gradient'
        ],
        ColorLoadTitle: 'Kliknij tutaj, aby załadować inny kod koloru<br>Twój obecny kod koloru jest: ',
        ColorSaveEmpty: '[pusty]',
        CustomReady: 'Prawidłowy Kod',
        CustomNotReady: 'Zły Kod',
      },
      el: {
        language: 'Greek (ελληνικά)',
        save: 'Αποθήκευση',
        saveMessage: 'Αποθηκεύτηκε με επιτυχία',
        chooseLang: 'Επιλογή γλώσσας',
        contact: 'Επικοινωνία',
        ColorWindowTitle: 'Ρυθμίσεις',
        ColorWindowPreviewTxt: '*Κάντε κλικ στα γράμματα για να αλλάξετε χρώμα',
        ColorWindowOkBtn: 'Εφαρμογή',
        ColorWindowToDefaultBtn: 'Προεπιλογή',
        ColorWindowThisTchatBtn: 'Ορίστε σε αυτό',
        ColorWindowDefaultText: 'Select the tchat for reset to default: ',
        ColorWindowBold: 'Έντονα',
        ColorWindowCaps: 'Κεφαλαία',
        ColorWindowFlip: 'Ανάποδα',
        ColorBtnTitle: '',
        ColorLoadListName: [
          'Χωρίς χρώμα',
          'Καταχωρίστε έναν κωδικό χρώματος',
          'Κόκκινο',
          'Καφέ',
          'Μωβ',
          'Μπλε',
          'Πράσινο',
          'Ροζ',
          'Σκούρο μωβ',
          'Βιολετί',
          'Ξεθωριασμένο σκούρο μπλε',
          'Ανοιχτό πράσινο',
          'Υποβαθμισμένο κόκκινο',
          'Γαλάζιο',
          'Ξεθωριασμένο σκούρο ροζ',
          'Λαχανί',
          'Ξεθωριασμένο ροζ',
          'Φωτεινό κόκκινο'
        ],
        ColorLoadTitle: 'Κάντε κλικ για να τοποθετήσετε έναν άλλο κωδικό χρώματος<br>Ο τρέχων κωδικός χρώματος είναι: ',
        ColorSaveEmpty: '[Άδειο]',
        CustomReady: 'Έγκυρος κωδικός',
        CustomNotReady: 'Μη έγκυρος κωδικός',
      },
    },
    updateLang: function () {
      var lg = CT.langs;
      CT.lang = lg[localStorage.getItem('scriptsLang')] ? localStorage.getItem('scriptsLang') : lg[Game.locale.substr(0, 2)] ? Game.locale.substr(0, 2) : 'en';
      CTlang = lg[CT.lang];
    },
  };
  CT.updateLang();
  var langBox = new west.gui.Combobox();
  for (var j in CT.langs)
    langBox.addItem(j, CT.langs[j].language);
  langBox.select(CT.lang);
  var saveBtn = new west.gui.Button(CTlang.save, function () {
      localStorage.setItem('scriptsLang', langBox.getValue());
      CT.updateLang();
      new UserMessage(CTlang.saveMessage, 'success').show();
    }),
  fmfb = function (l) {
    return 'https://forum.the-west.' + l + '/index.php?conversations/add&to=Tom Robert';
  };
  TheWestApi.register('Color_tchat', CT.name, CT.minGame, CT.maxGame, CT.author, CT.website).setGui($('<div>' + CTlang.chooseLang +
      ': </div>').append(langBox.getMainDiv()).append(saveBtn.getMainDiv()).append('<br><br>This script adds new features to the chat:<br>Smileys, BB-Codes and Emojis! 🐧🎉<br><br><i>' +
      CT.name + ' v' + CT.version + '</i><br><br><br><b>' + CTlang.contact +
      ':</b><ul style="margin-left:15px;"><li>Send a message to <a target=\'_blanck\' href="http://om.the-west.de/west/de/player/?ref=west_invite_linkrl&player_id=647936&world_id=13&hash=7dda">Tom Robert on German world Arizona</a></li>' +
      '<li>Contact me on <a target=\'_blanck\' href="https://greasyfork.org/forum/messages/add/Tom Robert">Greasy Fork</a></li>' +
      '<li>Message me on one of these The West Forum:<br>/ <a target=\'_blanck\' href="' + fmfb('de') + '">deutsches Forum</a> / ' +
      '<a target=\'_blanck\' href="' + fmfb('net') + '">English forum</a> / <a target=\'_blanck\' href="' + fmfb('pl') + '">forum polski</a> / ' +
      '<a target=\'_blanck\' href="' + fmfb('es') + '">foro español</a> /<br>/ <a target=\'_blanck\' href="' + fmfb('ru') + '">Русский форум</a> / ' +
      '<a target=\'_blanck\' href="' + fmfb('fr') + '">forum français</a> / <a target=\'_blanck\' href="' + fmfb('it') + '">forum italiano</a> / ' +
      '<a target=\'_blanck\' href="https://forum.beta.the-west.net//index.php?conversations/add&to=Tom Robert">beta forum</a> /<br>I will get an e-mail when you sent me the message <img src="images/chat/emoticons/smile.png"></li></ul>'));
  CT.DATA = new function () {
    this.Setting = {
      saves: {
        'save 1': '999',
        'save 2': '999',
        'save 3': '999',
        'save 4': '999',
        'save 5': '999'
      },
      Default: {
        Format: '%c',
        colorTag: '999'
      },
    };
    this.Load = function () {
      this.Setting = JSON.parse(localStorage.getItem('CT_save')) || this.Setting;
    };
    this.Load();
    this.Save = function () {
      localStorage.CT_save = JSON.stringify(this.Setting);
    };
  };
  CT.Tools = new function () {
    this.colorTagInv = function (e) {
      if (e == null || e == undefined)
        return '';
      if (e.length == 3)
        return '';
      var t = '';
      for (var n = 1; n < e.length / 3 - 1; n++) {
        t = e.substring(n * 3, n * 3 + 3) + t;
      }
      return t;
    };
    this.Degrader = function (e) {
      var t;
      if (e.length == 3)
        t = '#' + this.colorrgb(e);
      else {
        t = 'linear-gradient(to right, ';
        for (var n = 0; n < e.length / 3; n++) {
          t += '#' + this.colorrgb(e.substring(n * 3, n * 3 + 3));
          if (n !== e.length / 3 - 1)
            t += ',';
        }
        t += ')';
      }
      return t;
    };
    this.colorrgb = function (e) {
      result = '';
      TransCode = {
        0: '0',
        1: '1',
        2: '3',
        3: '5',
        4: '6',
        5: '8',
        6: 'a',
        7: 'b',
        8: 'd',
        9: 'f'
      };
      for (var t = 0; t < e.length; t++) {
        result += TransCode[e.substring(t, t + 1)];
      }
      return result;
    };
    this.GuiSelectbox = west.gui.Selectbox;
    this.Guicheckbox = west.gui.Checkbox;
    this.Guitextfield = west.gui.Textfield;
    this.Guibutton = west.gui.Button;
    this.Guidialog = west.gui.Dialog;
  };
  CT.Chat = new function () {
    this.init = function () {
      if (!$('div.chat_room').length)
        return;
      clearInterval(CT.initInterval);
      this.Draw();
      CT.initInterval = setInterval(function () {
          CT.Chat.OnChanelChange();
        }, 500);
    };
    this.Draw = function () {
      if (isDefined(this.btncolor))
        return;
      var e;
      $('#colorTxtStyle').append('div.btnColor{cursor: pointer;position: absolute;right: 0px; width: 25px;height: 25px;}\n');
      $('#colorTxtStyle').append('div.btnColorBG{background-image: url(data:image/png;base64,' + border + ');background-position: 0px 3px;background-repeat: no-repeat;}\n.btnColorBG:hover{background-position: -25px 3px;}\n');
      $('#colorTxtStyle').append('div.btnColorImg{width: 11px; height: 11px; margin: 8px 0px 0px 5px; position: absolute; border-radius: 5px; background-image: url(data:image/png;base64,' + color + ');}\n');
      $('#colorTxtStyle').append('div.btnColorSmiley{border-top-right-radius: 10px;border-top-left-radius: 10px;border: 1px solid #646464;box-shadow: 0px 0px 1px 1px black;background-image: url(images/interface/wood_texture_dark.jpg);width: 425px;bottom: 18px;left: -400px;height: 208px;\tmargin: 0px 0px 6px 0px; position: absolute;}\n');
      $('#colorTxtStyle').append('div.btnColorOneSmiley{display: inline-block; cursor: pointer; width: 17px; height: 13px; padding: 1px; text-align: center; vertical-align: middle;}\n');
      this.btncolor = $('<div class="btnColor btnColorBG"/>').append($('<div class="btnColorImg btnColorImgTag"/>').click(function () {
            CT.Window.show();
          })).append(e = $('<div class="btnColorSmiley"/>').hide()).mouseout(function () {
          $('div.btnColorSmiley:last-child', this).hide();
        }).mouseover(function () {
          $('div.btnColorSmiley:last-child', this).show();
        });
      for (var t in sm) {
        if (sm[t] !== '') {
          e.append($('<div class="btnColorOneSmiley"/>').data('Tag', t).click(this.addSmToTxt).append(sm[t]));
        }
      }
    };
    this.addSmToTxt = function (e) {
      var inp = $(e.target).parentsUntil($('div.chat_main')).find('input');
      var n = $(e.currentTarget).data('Tag');
      var r = inp[0].selectionStart;
      var i = inp[0].selectionEnd;
      var s = inp.val();
      if (n == '[player][/player]') {
        s = s.substring(0, r) + '[player]' + s.substring(r, i) + '[/player]' + s.substring(i);
      } else if (n == '[item=]') {
        s = s.substring(0, r) + '[item=' + s.substring(r, i) + ']' + s.substring(i);
      } else {
        s = s.substring(0, r) + ' ' + n + s.substring(r);
      }
      inp.val(s);
    };
    this.appliquer_couleur = function (e, t) {
      if (e == '')
        return '';
      if (t == '999' && !CT.DATA.Setting.Default.Format.startsWith('/111* '))
        return e;
      if (e.toLowerCase().indexOf('[player]') == 0 && e.toLowerCase().indexOf('[/player]') !== -1)
        return e.substring(0, e.toLowerCase().indexOf('[/player]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/player]') + 10), t);
      if (e.toLowerCase().indexOf('[report=') == 0 && e.toLowerCase().indexOf('[/report]') !== -1)
        return e.substring(0, e.toLowerCase().indexOf('[/report]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/report]') + 10), t);
      if (e.toLowerCase().indexOf('http') == 0)
        if (e.indexOf(' ') !== -1)
          return e.substring(0, e.indexOf(' ') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(' ') + 1), t);
        else
          return e;
      if (e.toLowerCase().indexOf('[item=') == 0 && e.indexOf(']') !== -1)
        return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
      if (e.toLowerCase().indexOf('[marker') == 0 && e.indexOf(']') !== -1)
        return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
      for (var n in sm) {
        if (e.indexOf(n) == 0)
          return e.substring(0, n.length) + ' ' + this.appliquer_couleur(e.substring(n.length), t);
      }
      if (t.length == 3)
        return '/' + t + e;
      if (e.charAt(0) == ' ')
        return e.charAt(0) + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
      return '/' + t.substring(0, 3) + e.charAt(0) + ' ' + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
    };
    this.fCharAt = function (str, idx) {
      str += '';
      var ret = '',
      end = str.length,
      surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 < idx)
          idx++;
        else
          break;
      }
      if (idx >= end || idx < 0)
        return '';
      ret += str.charAt(idx);
      if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1)))
        ret += str.charAt(idx + 1);
      return ret;
    };
    this.flipString = function (e) {
      if (e.length === 0)
        return '';
      var eO = this.fCharAt(e, 0);
      for (var p in fl)
        if (p == eO)
          return this.flipString(e.substring(eO.length)) + fl[p];
        else if (fl[p] == eO)
          return this.flipString(e.substring(eO.length)) + p;
      return this.flipString(e.substring(eO.length)) + eO;
    };
    this.OnPressKeyEnter = function (e) {
      var obj = $.extend({}, $(e.target).data('ColorTchat'));
      var n = $(e.target).val();
      if (n.charAt(0) == '/') {
        if (n.substring(0, 6) == '/tell ') {
          if (n.indexOf(':') !== -1) {
            var r = n.substring(6, n.indexOf(':') + 1);
            n = n.substring(n.indexOf(':') + 1);
          }
        } else {
          var i = [
            '/topic',
            '/clear',
            '/logout',
            '/ignorelist',
            '/ignore',
            '/unignore',
            '/rights',
            '/color',
            '/me',
            '/help',
            '/?',
            '/join',
            '/items',
            '/items.s',
            '/items.add',
          ];
          for (var s = 0; s < i.length; s++) {
            if (n.substring(0, i[s].length) == i[s]) {
              return;
            }
          }
        }
      }
      if (/\/flip /.test(n.substring(0, 6))) {
        obj.Format = '%f';
        n = n.substring(6);
      }
      if (/\/[0-9]{3}/.test(n.substring(0, 5))) {
        obj.Format = '%n';
      }
      if (typeof r !== 'undefined')
        obj.Format = '/tell %t:' + obj.Format;
      var cT = function () {
        var te = '',
        co = obj.colorTag;
        if (!co || co.length % 3 !== 0)
          return '999';
        if (co.length !== 3) {
          for (var n = 1; n < co.length / 3 - 1; n++)
            te = co.substring(n * 3, n * 3 + 3) + te;
          return co + te;
        } else
          return co;
      }
      (),
      code = /%[C-n]/.exec(obj.Format)[0],
      newN;
      switch (code) {
      case '%c':
        newN = this.appliquer_couleur(n, cT);
        break;
      case '%C':
        newN = this.appliquer_couleur(n, cT).toUpperCase();
        break;
      case '%f':
        var u = this.flipString(n);
        newN = this.appliquer_couleur(u, cT);
        break;
      case '%F':
        var f = this.flipString(n.toUpperCase());
        newN = this.appliquer_couleur(f, cT);
        break;
      default: //%n
        newN = n;
        break;
      }
      $(e.target).val(obj.Format.replace(code, newN));
    };
    this.OnChanelChange = function () {
      if (!$('div.chat_room').length)
        return;
      clearInterval(CT.initInterval);
      $('div.chat_room').find('.chat_input').each(function (e) {
        if (!$(this).children().is('.btnColor')) {
          $(this).append(CT.Chat.btncolor.clone(true));
          $(this).find('input.message').keypress(function (e) {
            if (e.keyCode == 13) {
              CT.Chat.OnPressKeyEnter(e);
              document.focusing = undefined;
            }
          }).data('ColorTchat', CT.DATA.Setting.Default);
          CT.Chat.Change = true;
        }
      });
      this.ChangeColor();
      CT.initInterval = setInterval(function () {
          CT.Chat.OnChanelChange();
        }, 500);
    };
    this.ChangeColor = function () {
      if (this.Change === false)
        return;
      this.Change = false;
      var e = CT.DATA.Setting.Default.colorTag;
      if (pos[e])
        $('#colorTxtStyleTmp').text('div.btnColorImgTag{background-position: ' + pos[e] + '; z-index: 6}\n');
      else
        $('#colorTxtStyleTmp').text('div.btnColorImgTag{background: ' + CT.Tools.Degrader(e) + '}\n');
      $('div.chat_room').each(function (e) {
        $(this).find('input.message').data('ColorTchat', CT.DATA.Setting.Default);
      });
    };
    var fl = {
      a: 'ɐ',
      A: 'Ɐ',
      b: 'q',
      B: '𐐒',
      c: 'ɔ',
      C: 'Ɔ',
      d: 'p',
      D: 'ᗡ',
      e: 'ǝ',
      E: 'Ǝ',
      f: 'ɟ',
      F: 'Ⅎ',
      g: 'ƃ',
      G: '⅁',
      h: 'ɥ',
      i: 'ᴉ',
      j: 'ɾ',
      J: 'ſ',
      k: 'ʞ',
      K: 'ʞ',
      l: 'ן',
      L: '⅂',
      m: 'ɯ',
      M: 'W',
      n: 'u',
      N: 'N',
      P: 'Ԁ',
      Q: 'Ὁ',
      r: 'ɹ',
      R: 'ᴚ',
      t: 'ʇ',
      T: '⊥',
      U: '∩',
      v: 'ʌ',
      V: 'Ʌ',
      w: 'ʍ',
      y: 'ʎ',
      Y: '⅄',
      1: 'ɩ',
      2: 'ζ',
      3: 'Ɛ',
      4: 'ᔭ',
      5: 'ﻛ',
      6: '9',
      7: 'ㄥ',
      '.': '˙',
      '[': ']',
      '(': ')',
      '{': '}',
      '?': '¿',
      '!': '¡',
      '\'': ',',
      '<': '>',
      '_': '‾',
      ';': '؛',
      '&': '⅋',
      '"': '„',
      '‿': '⁀',
      '⁅': '⁆',
      '∴': '∵',
    },
    sm = {
      ':-)': '',
      ':)': '<img src ="images/chat/emoticons/smile.png">',
      ':-D': '',
      ':D': '<img src ="images/chat/emoticons/grin.png">',
      ':-(': '',
      ':(': '<img src ="images/chat/emoticons/frown.png">',
      ';-)': '',
      ';)': '<img src ="images/chat/emoticons/smirk.png">',
      ':-p': '',
      ':p': '',
      ':-P': '',
      ':P': '<img src ="images/chat/emoticons/tongue.png">',
      '-.-': '<img src ="images/chat/emoticons/nc.png">',
      '^_^': '',
      '^^': '<img src ="images/chat/emoticons/happy.png">',
      'O.o': '',
      'o.O': '',
      'O_o': '',
      'o_O': '<img src ="images/chat/emoticons/oo.png">',
      ':-/': '',
      ':/': '<img src="images/chat/emoticons/sore.png">',
      '=:)': '<img src="images/chat/emoticons/invader.png">',
      '>:(': '<img src="images/chat/emoticons/angry.png">',
      'T_T': '',
      'T.T': '',
      ':\'(': '<img src="images/chat/emoticons/cry.png">',
      ':-o': '',
      ':o': '',
      ':-O': '',
      ':O': '<img src="images/chat/emoticons/ohmy.png">',
      ':-x': '',
      ':x': '',
      ':-X': '',
      ':X': '<img src="images/chat/emoticons/muted.png">',
      ':-|': '',
      ':|': '<img src="images/chat/emoticons/silent.png">',
      '>_<': '',
      '>.<': '<img src="images/chat/emoticons/palm.png">',
      'X_X': '',
      'x_x': '',
      'X.X': '',
      'x.x': '<img src="images/chat/emoticons/xx.png">',
      'el pollo diablo!': '<img src ="images/chat/emoticons/elpollodiablo.png">',
      '!el pollo diablo': '<img src ="images/chat/emoticons/elpollodiablo_mirror.png">',
      'el pollo diablo?!': '<img src ="images/chat/emoticons/elpollodiablo_front.png">',
      'addme!': '<img src="images/chat/emoticons/sheep_rainbow.gif">',
      'addme': '<img src="images/chat/emoticons/sheep.gif">',
      '[player][/player]': '<div style="background-image: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-88px 20px; width: 21px; height: 20px">',
      '[item=]': '<img src="images/forum/icon/cowboy_boots.png" style="background: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-22px 20px; width: 21px; height: 20px">',
    },
    em = [
      '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '🌟', '💫', '💦', '💧', '💤', '💨', '👍', '👎', '👌', '👊', '✌️', '👋', '👉', '👈', '🙌', '🙏', '👏', '💪', '🎩', '👑', '👒', '💼', '👜', '👓', '🌂', '💛', '💙', '💜', '💚', '❤️', '💔', '💗', '💓', '💕', '💘', '💌', '💋', '💍', '💎', '💬', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '☀️', '⛅️', '☁️', '⚡️', '☔️', '❄️', '⛄️', '🌁', '🌈', '🌊', '🎓', '🎃', '🎅', '🎄', '🎁', '🎉', '🎊', '🎈', '📱', '📞', '⏰', '🔒', '🚿', '🚽', '🚬', '💣', '🔫', '🔪', '💰', '✂️', '🎤', '🎧', '🎶', '🎻', '🎺', '🎷', '🎸', '🎮', '🏈', '🏀', '⚽️', '⚾️', '🎾', '🎳', '⛳️', '🏁', '🏆', '🎿', '🏂', '🏊', '🏄', '☕️', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍳', '🍩', '🍦', '🍨', '🍪', '🍫', '🍬', '🍭', '🍎', '🍇', '🍓', '🍌', '🍍', '🍅',
    ],
    EvName = Object.keys(Game.sesData)[0];
    for (var j of em)
      sm[j] = j;
    if (EvName == 'Easter')
      sm['easter!'] = '<div style="background-image: url(images/window/events/easter/easter_sprite.png); background-position:-20px 0px; width: 17px; height: 20px">';
    else if (EvName)
      sm[EvName.toLowerCase() + '!'] = '<img src="images/icons/' + EvName + '.png">';
    var color = 'iVBORw0KGgoAAAANSUhEUgAAAGAAAAAMCAYAAACdrrgZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAbDSURBVHja7JhLaBzZFYa/c6tf1a12Sy3Zssex/GLG8VtOsDMTDCFMCJ10IK9NZhGyCEMgRHgQCLLLLgjvBrwNIZBVCMoL4gweyGJs8DgeO57YHnvkka2XLcmtV6vV1V2tqpNFXbValmyPFtnlwEWl29/96697zj0qtfz0q7v1zpTH8FMPVeVQV5rjr7hozFA9m6Z2MgVA4oZH8kqVBCGqyoh7jD31YVJhDcUQAqohNUkykTjIfu8TUKicvCxsId7fs5ctRTy2JfzqL7cmf0t1S/yXt/C0BxTM7cdVbk5UWPYDqo2QGxMVbpc8KqdTVL+WIcg5BDkH7+tt1M5mEAURZfjBfa48Noz7aUQENGSiluTqlMP4xCjGwCbevw9cBGbtuGjnnhdb54WLCLN2vJQXuGhg1sCs/A/8CFyUSHtTfXP/aS3aQARVEBFuz3ssv54GWUunAPXTLkLITNUhmJxmmhjlaoMgXAFgZr5C2c1SH52g5DkYsy4D54EhhAKGPA55hAIwZD97NiwvBRyTxzF5jDyfF86jDFGnwDJ5KuSpUUA35wXOKwwtQ2Ee8vOQr0IhhCF5gR8DBQfyDuQNL/av6FCNaqHCQr7CYr6GV1DCdfoGiEpVFRFBW8tWlSg1gtokeOrwn3o7fwpW+PHYI+rBCo7j4MQcJObw1sgwQ40Gt+vbaBhnVakIDEQCQAmYAapWFAYss5FfrsHjhWgs1Z7PKwNUgTlg2urP23voel6gGMDAokXHgHF7vQQEMCCb+BFg0fJjQLlpf6MfJRiossg8T5hhjGlGmWcKjyWUsMmbfR0JAiAUIVAlBF7NJUlf9xAjYAREMUZI3qoxNie8MzrOaQ3Z2Z7js4rgh+AHykjVwQVOo7wzOsHEXPMEnWtu/hTwwI4pOyeWWYtziEDFh0cl+Hg8GqMlWPZXT+a5lnI+h293r2R1p+x1GWhYpkW/bvPzGHgEPAQm7VydjX7ESg0DV4EP7fVSs4rXeIFzPjXKzFJikilGmGaEEhOUmcOnjlg+drzbJes4PCjVEISDnUkO5l34YBkagnfGRQH3mof7UZV7NZc3vSegytN4gtlFj0rmNVBlvvwp0/E4VKu8uVzm17VuzkaeehFbjTPAZy19LQekAaW35YF7MRJV/ORCtPmr0ZmFbAoCXc+vADW7S6WWT9KADyTX9AV6faBiG/lkC74N6AAy0NvSC3odW/0PgX/ZTTfATqAdCFnv36eOxxJLzPKUcQQDCBlyNMiTxO0FiMWN4btdOzncmQMR7pkF7kqZIDAMX/kWdz74HiAcc/7Midhf2Lvd8N5Cjp6FOe5Xlzi8u52PHi2CKid62ql7sLS4yN+PHGd/pr6+K+ozPwHRdb9uaNSfO/QFa+TzLX0ZI3asbv7W7Km1sn5V7BSdnDJ5xN7kDToRTfJ7/QY39G3QEASur/yMkDZOJn/HP3fu4MlimSfbt/NGj8tv3/8EgLcLx3nid/CrkTE+PbiXo+VbLET3uYZSJA10ReWCANub1R8xa3GNUItkU7C7fW12d3tU/aFu5GMUSdkSXo02qx9br69wLQHFLNDZgueBLJCwTKt+CMUcsL8lEfvs7UI2+k+QLKbJkqWzuSJLnhRZ4iSafOyLmiNE7ZtQJHYk6OK2/gBMGJWo/YN8d+XbnJLfkNoV44/xA3ylpxtCj0w2ByiBxOnIGoaO7uX18jDOqjUYbCZgl3Ut0TlXt5mAwZYHGES1SCYB+7qitgOQTUImsfp+O9hSXoMkKJJtaTtAMyFxEGWwpdIHk1DssLfO2cmMbT9JNvpRm7BXgW5rf5tdo8/wCoMJUsU2OlGEDO2A4NJGlg4SpFDLm+ax0E3f2zdMBqGSrZX44YE0X8g0+HjWwRUfVxr8e8awK+Hxo9eybFtZIAiaCbgM9KH4pIEdtvqjzfeBPsts5DMpeKU9GpnU83lDH2l8Oqz+DlvSLj6GPm3hFS470JcFvxvYY0d3dAJ8h/X8qh8FfxvQY3mbb1838WNw+tLk/Dy76GYvO+ihg52kyfqCNPnYsClzLOxoHisB7juzHOWv3Ax/smZZhEOx9wAhRClNT9LoOsz1Gx/yi+98CQQu/O0GR7rPkJx7jBhjX16bcQG4hNKPcoa1Y/sucHeT1Fte+wn05bxyAeESKfqhRV835xUuGLiUgX6xvMI1hXf1BX5C6A95uf9IXy6lcPvBbfLP6svPz+7RYyvtHAii5jkSK3MnvkidODcbb3Fv5ZugyiHzD46aP5CK1RDblh56bVSWq5zoiv4R+7gUoy3jsj9ZJgxBVSifuPL/ryJe8FXEfwcAU73isuGF8swAAAAASUVORK5CYII=',
    border = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAnFSURBVHjazJhLb5xHdoafU1XfrdmkSJOWLGs8tjQzgDTKxAGCBEjCyYIDZBtAy8CL8e/QWkj+RgBvo613TJBoEiABJlZGE3EiS45lXakmu8m+fZeqc7JotkRZciazywG6PzTQXU+dt+qct6rlr3/+UwN4PJgC8IPvbVIWOQ/3B9TzyNmNihiFg+MZ6oTNfsHhqCGaIhiD4XNCscl6LwNgPD3gb//+6w+AAzObA/zNp3/+VsZ/Px6QVHl3vSJG5cnhjF4eONPPeXo4Q1jEYPjstzLC+pkzACyfGJgaF7beoYstk0nNdN7iRShyx389fESMHWWxQVIhAXfuPeAPfnSJ9V5GTArwU+CfgEenx37JOIkPL5ylbRtm9YzhuKFfBYos8O93HtDrl0ixijMD4Is3GX8M/OuSEX59/8l8NOuq4eEjEPDSp8gDuTNmUdEYaZtI7AxMF4lipPQE1YRzFWeAL+894Ic/usTvXfoI/vGby8AXywn/+v6T4WjWbXy2+ysAcu/wziFiGIthFWMxZ8EwzAzBEBH05Dt3vvkVn+z8ZMn4EPjPJSNc2FrhAnDz/te8u1Ywjg0hRloVSu8whNWQQaEQFBQEwUTIi0CZFUid+GrUcvX76y/HBdzyw5IBkAdHHgRQSnGId4Qgi+S8Q8wQJ5g4uqi0XUcTlS4a81ZPM/xpRrh9775sbpxjsSGNnIgzoyo9PnNk3uEEgneIMxRwBiZG5pV+1mBlRZ2t8HgwZTB8BixEXEJu37vvtjbewwmUAj/cKlkpPL3SUxUFeeYpMyP3INFIImQO6nnL4TTwzUQZjjtGkng0mHLwFkbY2jjnBofPWXU5H2ysMZ11eJ/wCAG7JcpNRHYT3CXJFWAnYdcQt21mjFLH+LDhAOinxNbGOeDJa7WwtfGefzF8xkoRuPLBBn/x8Vmy3GEGInLLOW46s11RvRtTulLP251m1lwzddv96Hm36TTriRMRXgyfcXb97BuMYAgh32T17DG0Y1bLgmgOgc/AbjhhzzCSAsrthN3G+Byx65r4ZDV3nDvXJw3nWH6GC1v9xeoar4OyTcowoApQBaOXecz4TMVuJNW9pAlNSkrxtmG3LfjPi2TXWfWfZGXmtszTPj4mz9d5f72vTkBPMZxg2epK4HB/xDQaYAS45bEbHtlTBU2Q1IgGqJASezHajaaxW8djYzgxxm1BL895NJgiiAB8+rOryw5anul5iiqw0gvUbcOknt6a1vMb00m9Nzmec3RUcziaMTyqOZ621E23F01voHari8ZwPGXamFbB6ePRDMG514QCEWeJMi/RoiRpxGE3gb1lJ7GXBW6ogHgQk72kdnPe2ra1xmh8xPn31hAqwAQgqp60dA0JoWuNw8MJz3uOMvc3nZM9OVFW1YiLVSdFiGp0Ke3Vrd6c1nE7RVgJ3kVMc8A5Q1VOJWKGCUicYpNAUyge2fWytBXBWLRHOWmPIot+EWC3q0CbhjL0UAt4AxxKgmQ4Fg/FouItdHjq5LBWd70I4sA5wYuQe4HgIAckkIBVk931pMzapPFwhuBIYuoC4qO9tiJgQlUF+quJWS0gdtdUEHeSzcvEF0mIBy+Ceu7GqVF3SkeHqQPMZGE3nNgEZmg0nJwobSgq/u7CtxY+IQgOW7zcwk0Eo1W92ybVrjWnJupNW0k4UmZq3cvt5RA4miUOp/BovyWIILgrJ9sck8WqCCDO8H4hmnNG5rmSV45eryQnZ5YSJiJiIk5EkppbCjGdJeeDiyuZ4SziLF0JYgSB3EEWjCwIWXB45xEX8C4QJFzxEpw5kCgc1SksmomJOyVxWIAS+1PH+rsOwxAnO4LcRljkI7ZYCeSlzCLgnNtZO7NCIRGr+ie6QsIMw7wXXaiFcw5cJmFlpWJ1rSLAjkdui4Bb1h3CchNgoAhO3E4SRRUkRBc8ToyoTnVZgrx0RhN6ldCTnGSGOK7h9bK4xYQ9QhDBy0nFqKKdXk6q1zKBOrZMJqMTjzoVr1ZVFcF3jiLz9BdmeK1X+cu9ylNVnqrMqMqMPM/wIYD3JJPLdbJrszoymScdNxEzFDEkYaaWXiYymnWIc1hsGNNSlY4isF3m7nqeyeW8EEK+sHNVpWsT8zpdnrZ6fd7adtvUxEkEiwtdTvX2uk0GMJq1zptSp4ZpA+tneqyvrWz3+9X1lV55uSwLihDIs0CeeYrgyYO7XGZyvfK2nUxAcUYGIs4JrtUkdooVnuwPMIN53VLFjC55IglvfILZR6Z6M6ntxqh3m06vNNF2OuUazm/3e47Bi5rzG2vEwwMeNwPi+quW+He/+I0BPN0/cGpoTHA0PHb3HmSs9XPyXD5xwkdmdtPMdhW7K8IVL+z44K95H7bLMmOtnZNUSU3N88GIGMV923RDPZ1Q9Pq0DdTB8/TpFBeNLDfUsZ2SbatBUkFNSTjEEk5hPplzrJ7x0YBx07G+2eP56FuWDpwwXDJjdaNHspr9g5ZJm2g72VZj23tHljnKXKhKT3CJwieq3NN6aE0Zt8q6wmB0cgQ/bYhFr1+vhrqkKBgft8yTkJpI39zCyR14bwQFEyETBRzzZMy9MG4bNK+IGlkNNW+Lotc/Wg31meN5ZP/FmD/6wSVmbcf8oGZWzxjXEcMIYoSTrhgI+CKQYkszc3Qe5m1kLX87I1y9eN4Gw2cMps+pO4+2CQmOqRSoGW0byXEQPFIITgSJxrzrKBplZsa0mbC1vkKvX7G18R7cHr4GuXrxvA6GzzAd8uio49/uPSe1LXleoEBRCE48rRrjtiN1iZAZpSWOjyPDWUurSpugt1Kx9c6bjDCadVUoNvnLP1lcJXVxAGM2mzA4OsbJKiv9Ak01asqLoxmbqxWFg6g1dx4e00yUq9+rWBR294Zao1m3EYpN/mrn1XVVBCbzYw6OJuTlFmUWsNhQNy2Tecs7Gz1EO+qtji+fHDOfKH/4443vZIQ/+8mHfHjxfQC+/urJsoWfvC8q6vH+IZr6zOqOjy+9T55n9Ff6qBnwS56PjNlkTq9f8ezF4WtnAYC3MRZxHnB0KfF8f0jUHlGVrbWSqirpVRXjaUMe7vxWRvj8H37B9+9f5MLW4mJU5h7vHON5ixNBDY7nLRpn+FDx5aOnxGT0QmQ4D0urYBxLXjw+Xhraa5eebzOqfPG7Sd3hRYhqHM8bTFucy/iPLx9RZoLGyDSGlzP+3xhiZojIReBnwKfAv7zpbN8ZJfBj4Je8OpVF4DfArpk9fOWNchH40xPGF78Do1r+wXCKkYBvgH9eMpaJ9IBzwMfAgzevRd8ZHrgAPDwFUWAMvDCz2alElozfB776HRnxW4koMDnNELP/63j/v+N/BgBXi5F3d3nGEQAAAABJRU5ErkJggg==',
    pos = {
      999: '0px 0px',
      308318328338348: '-24px -0px',
      106117128139: '-36px -0px',
      120130140150: '-48px -0px',
      400500600700800: '-60px -0px',
      199299399499599699: '-72px -0px',
      505606607709809: '-84px -0px'
    };
  };
  CT.Window = new function () {
    var saveB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAIAAAAv2XlzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH6SURBVHjaVM89a1RRFIXhtffZ9zOYTBKJYaKOiumiqdKKgmBhqUL+hI2VIFjYCZaChb9ABAtJIQbFIoJoQNSMEKLkC+IEZhLnzuTM3DP3nm2hhLjq9RYPRceOn5qeDUWcyw0jjUNjDBsTiEnikADbd13rbF7sbKwetLZkdPLs5Ru34cvv9ZXauNy6OlOrnZ6aOmmC+FN9KxQzd+HMs8Wv71caG6ufl54/EvW+28nyfr/V2hvh4KCb9W2XfP5rN3vwZCGJ5en9+Z7tZu3faZKaIBIiEKlhiqMgikMjwswKAJAgEBEAhskwoCVUBQBUiSGBRGEYCweGhPnE2PD8tdk4DCrDQ1nH2l6/KEsQBABB1StIfu5kr5c3zzcHE9udykhl5txEIPxicfnd8mpeStFzBAgBWcfud2xBYUH8diV7862tWldVKBQgIE3jsdGKVw9AitLvtTvMdGVuulYdJyLVvwQAIBAzrW3ufllrDJxT9VKW5X67e/3SxYd3bjKKvu2B6DCAahSFecn3Hi+8fLWuqjIoCmt7IsxMe812s9li5sO/934oTSar1TQJDqxVVfFenXO+LAGEYZikydFAVeM4BtHADVzuVFWIWFkUVBYuTZMwjvD/xLBqCZCyAZHkWUMa9Q9L7m573Xs9Kv7nJmLmj/XtQeuHd70/AwDj7v01yw6ZhAAAAABJRU5ErkJggg==',
    setB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAACoUlEQVQ4T42Uy2sTURTGk1Zbq+ILUdyKG5uZSerQkPbeyYAYCZhlggurFUJN5xGUgiBushdBsQguFMGFC7EqLiyiCwWh0IL/QH3tFJcu1CKlft+duTqJieTA4Z7cOfeX755zZlLaarXaYBx2i9OMW63WQDI2ZDBniOCrKcMHo66/nfvKXNfdgkUlMo4Ppsrl8rCGYx2ybXtzZsIbN47W91vCuwLQhimDDQuekeFl5rUpKBQKIxpAMHwTY8IIN4QfmtL/Dv+WhKnY8S/qfGVJGA8nYXTDCU+YIvhhykbVFCHWBEwGz+1jtZ3MV0Y1vZTRGY8V64eh7BGgP+GPTeG/UjARvCkcr+5hjjKCkjXrBssVZ8YB+wJl96BmwZL+EtY1NOWZJb0VpLBkaX1WWS9lCib8j1knzANyC824b4jwIbr7EvFrQ/rXkJauVqsjXHnmv8rQiPem9GzsDVYqla2A3oayu1C8AOgTvY/0CMYNehz/C3P8IoC7jzinDtju3F7Aliw5exqTONABS2uOInfCTOF9yIjwBlT8QrzOeqEJKxFMWToJ45TEcReY9FbNyWAe11vnaKBmi+jmsiUaZ5CiAEkY66cbq14hvgGMc7Ixqq4JZX9hwSKV5SIYrSes7cqEYhyuA3S1TZkMlk1nZjrO6wnjlGCJVLLDrju9C4ffWSK4iQ6ucTQi2CxhtJ6w5FtGY7eGALgEwLw1ee4krngHvpp1GmfjnL5gek9d2RK+BPATavbWEmF9ojS1L37WF4yzrPdVMUulqW3o7sFD5eYwD6kHfcKSbxktnZUNAWUv8vnmjhjWt7IOmHrOL+9T1AxfDu+82o4BXOkEaBgByWtqGKdE76cwtBfgn61ic4y/4yTC9GwlYwXmH/ypWdRYPEulfgMLajrH8hIjewAAAABJRU5ErkJggg==',
    cList = [
      '999',
      'custom',
      '700',
      '321',
      '409',
      '007',
      '031',
      '704',
      '608',
      '308318328338348',
      '106117128139',
      '120130140150',
      '400500600700800',
      '199299399499599699',
      '505606607709809',
      '696595494393292',
      '959949839829819',
      '900911922933944'
    ];
    this.show = function () {
      var e;
      var i;
      var format = CT.DATA.Setting.Default.Format;
      $((this.w = wman.open('Colorsettings').setTitle(CTlang.ColorWindowTitle).setMiniTitle(CT.name).setSize(350, 400)).getContentPane()).css('text-align', 'center').append(i = $('<input type=hidden class="color" id="colorinput" value="66ff00"/>'));
      (this.ColorPicker = new jscolor.color(i[0], {
            pickerOnfocus: false
          })).showPicker();
      this.tab1 = $('<div style="display:inline-block;width:290px;height:275px;position:relative;padding:4px12px4px4px;text-align:left"/>').appendTo(this.w.getContentPane()).append($(jscolor.picker.boxB).css({
            position: 'relative',
            display: 'inline-block',
            'background-color': ''
          })).append($('<div id="colorPanelDIV" style="display:inline-block;width:auto;height:123px;position:relative;margin-left:7px;border:' + this.ColorPicker.pickerBorder + 'px solid;border-color:' + this.ColorPicker.pickerBorderColor + '"/>').append($('<div id="colorWSetbtn" style="width:20px;height:20px;background-image:url(' + setB + ');margin:10px;cursor:pointer;"/>').click(function (e) {
              CT.Window.SetPreviewColor(0);
            })).append($('<div id="colorWLoadbtn" style="width:20px;height:20px;margin:10px;cursor:pointer;"/>').click(function (e) {
              CT.Window.selectLoad.show(e);
            })).append($('<div id="colorWSavebtnBg" style="width:20px;height:20px;background-image:url(' + saveB + ');background-size:100%100%;margin:10px;cursor:pointer;"/>').click(function (e) {
              CT.Window.selectSave.show(e);
            }))).append(e = $('<div id="PreviewDIV" class="chatwindow_background" style="display:inline-block;width:287px;height:60px;position:relative;zIndex:5;margin-top:5px;border:' + this.ColorPicker.pickerInset + 'px solid;border-color:' + this.ColorPicker.pickerInsetColor + ';color:white;background:#1D1C1C;opacity:' + $('.tw2gui_window_inset', '.chat').css('opacity') + '"/>')).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%"/>').append((this.Bold = new CT.Tools.Guicheckbox(CTlang.ColorWindowBold).setSelected(/\*.*\*/.test(format))).getMainDiv().click(function () {
              CT.Window.updateFormat();
              CT.Window.updatePreview();
            }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:auto"/>').append((this.Caps = new CT.Tools.Guicheckbox(CTlang.ColorWindowCaps).setSelected(/%C|%F/.test(format))).getMainDiv().click(function () {
              CT.Window.updateFormat();
              CT.Window.updatePreview();
            }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%"/>').append((this.Flip = new CT.Tools.Guicheckbox(CTlang.ColorWindowFlip).setSelected(/%f|%F/.test(format))).getMainDiv().click(function () {
              CT.Window.updateFormat();
              CT.Window.updatePreview();
            }))).append((this.inputFormat = new CT.Tools.Guitextfield('bdfFormat').setValue(format).setSize(14).setReadonly(true)).getMainDiv());
      $((this.selectLoad = (new CT.Tools.GuiSelectbox('topleft-left')).setPosition(42, 10).addListener(function (e) {
            CT.Window.LoadColor(e);
            setTimeout(function () {
              CT.Window.selectLoad.hide();
            }, 0);
          }).setWidth(200).setHeight(300)).elContent).css({
        'overflow-y': 'auto'
      });
      this.selectSave = (new CT.Tools.GuiSelectbox('topleft-left')).setPosition(42).addListener(function (e) {
        CT.Window.SaveColor(e);
        setTimeout(function () {
          CT.Window.selectSave.hide();
        }, 0);
      }).setWidth(200);
      for (var s = 0; s < cList.length; s++)
        this.selectLoad.addItem(cList[s], $('<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', CT.Tools.Degrader(cList[s]))).append(CTlang.ColorLoadListName[s]), CTlang.ColorLoadListName[s]);
      for (s in CT.DATA.Setting.saves)
        this.selectLoad.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', CT.Tools.Degrader(CT.DATA.Setting.saves[s]))).append(s + (CT.DATA.Setting.saves[s] == cList[0] ? ' ' + CTlang.ColorSaveEmpty : '')));
      for (s in CT.DATA.Setting.saves)
        this.selectSave.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;"/>').css('background', CT.Tools.Degrader(CT.DATA.Setting.saves[s]))).append(s + (CT.DATA.Setting.saves[s] == cList[0] ? ' ' + CTlang.ColorSaveEmpty : '')));
      for (s = 1; s < CTlang.ColorWindowPreviewTxt.length; s++)
        $('<div id="idColorPreview_' + s + '"style="display:inline-block;cursor:pointer" onclick="javascript:CT.Window.SetPreviewColor(\'' + s + '\');"/>').appendTo(e);
      this.customTF = (new CT.Tools.Guitextfield).setSize(30);
      this.test = function () {
        CT.Window.customTest.html(CTlang.CustomNotReady).css('color', 'red');
        v = CT.Window.customTF.getValue();
        if (v.length % 3 == 0 && /[0-9]+/.exec(v) == v) {
          CT.Window.customTest.html(CTlang.CustomReady).css('color', 'green');
          CT.Window.customPrev.css('background', CT.Tools.Degrader(v));
        }
      };
      this.customTF.getField()[0].addEventListener('keyup', this.test);
      this.customPrev = $('<div style="float:left;margin-top:5px;width:19px;height:19px;"/>');
      this.customTest = $('<div style="height:12px;width:120px;"/>');
      this.customTF.divMain.append(this.customPrev, this.customTest);
      this.DefaultButton = (new CT.Tools.Guibutton(CTlang.ColorWindowToDefaultBtn, function () {
          CT.Window.DefaultClick();
        })).appendTo(this.w.getContentPane());
      this.OkButton = (new CT.Tools.Guibutton(CTlang.ColorWindowThisTchatBtn, function () {
          CT.Window.OkClick();
        })).appendTo(this.w.getContentPane());
      this.LoadColor(CT.DATA.Setting.Default.colorTag);
    };
    this.OkClick = function () {
      CT.DATA.Setting.Default = {
        Format: $('#bdfFormat').val(),
        colorTag: this.ColorTag
      };
      CT.DATA.Save();
      CT.Chat.Change = true;
      CT.Chat.ChangeColor();
      new UserMessage(CTlang.saveMessage, 'success').show();
    };
    this.DefaultClick = function () {
      CT.DATA.Setting.Default = {
        Format: '%c',
        colorTag: cList[0]
      };
      CT.DATA.Save();
      CT.Chat.Change = true;
      CT.Chat.ChangeColor();
      this.show();
    };
    this.SetPreviewColor = function (e) {
      if (e == 0) {
        this.ColorTag = this.colorwest(this.ColorPicker.toString());
      } else {
        e--;
        if (e > this.ColorTag.length / 3) {
          this.ColorTag += this.colorwest(this.ColorPicker.toString());
        } else {
          this.ColorTag = this.ColorTag.substring(0, e * 3) + this.colorwest(this.ColorPicker.toString()) + this.ColorTag.substring(e * 3 + 3);
        }
      }
      this.updatePreview();
    };
    this.updateFormat = function () {
      var e = this.Flip.isSelected() ? '%f' : '%c';
      if (this.Caps.isSelected())
        e = e.toUpperCase();
      if (this.Bold.isSelected())
        e = '/111* ' + e + ' /111*';
      $('#bdfFormat').val(e);
    };
    this.updatePreview = function () {
      var flip = this.Flip.isSelected();
      var e = flip ? '%f' : '%c';
      if (this.Bold.isSelected())
        e = e.bold();
      if (this.Caps.isSelected())
        e = e.toUpperCase();
      var n = this.ColorTag + CT.Tools.colorTagInv(this.ColorTag);
      var leng = CTlang.ColorWindowPreviewTxt.length;
      for (var r = 1; r < leng; r++) {
        var i = document.getElementById('idColorPreview_' + r);
        i.style.color = '#' + CT.Tools.colorrgb(n.substring(0, 3));
        var g = flip ? leng - r : r;
        var s = CTlang.ColorWindowPreviewTxt.charAt(g);
        if (s == ' ')
          i.innerHTML = '&nbsp';
        else
          i.innerHTML = e.replace('%c', s).replace('%C', s.toUpperCase()).replace('%f', CT.Chat.flipString(s)).replace('%F', CT.Chat.flipString(s.toUpperCase()));
        n = n.substring(3) + n.substring(0, 3);
      }
      $('#colorWLoadbtn').css('background', CT.Tools.Degrader(this.ColorTag));
      $('#colorWLoadbtn').attr('title', CTlang.ColorLoadTitle + this.ColorTag);
    };
    this.SaveColor = function (e) {
      CT.DATA.Setting.saves[e] = this.ColorTag;
      for (var i in this.selectLoad.items) {
        if (this.selectLoad.items[i].value == e) {
          $(this.selectLoad.items[i].node[0].firstChild).css('background', CT.Tools.Degrader(CT.DATA.Setting.saves[e]));
          this.selectLoad.items[i].node[0].lastChild.textContent = e + (CT.DATA.Setting.saves[e] == cList[0] ? ' ' + CTlang.ColorSaveEmpty : '');
        }
        if (typeof this.selectSave.items[i] !== 'undefined')
          if (this.selectSave.items[i].value == e) {
            $(this.selectSave.items[i].node[0].firstChild).css('background', CT.Tools.Degrader(CT.DATA.Setting.saves[e]));
            this.selectSave.items[i].node[0].lastChild.textContent = e + (CT.DATA.Setting.saves[e] == cList[0] ? ' ' + CTlang.ColorSaveEmpty : '');
          }
      }
      this.updateFormat();
      CT.DATA.Save();
    };
    this.LoadColor = function (e) {
      if (/save/.test(e)) {
        e = CT.DATA.Setting.saves[e];
      }
      if (e == 'custom') {
        this.customTF.setValue(this.ColorTag);
        this.test();
        (new CT.Tools.Guidialog(CTlang.ColorLoadListName[1], this.customTF.getMainDiv(), 'question')).addButton(CTlang.ColorWindowOkBtn, function () {
          var e = CT.Window.customTF.getValue();
          if (e.length % 3 == 0 && /[0-9]+/.exec(e) == e)
            CT.Window.LoadColor(e);
        }).addButton('cancel').show();
        return;
      }
      this.ColorPicker.fromString('#' + CT.Tools.colorrgb(e.substring(0, 3)));
      this.ColorTag = e;
      this.updateFormat();
      this.updatePreview();
    };
    this.colorwest = function (e) {
      Wr = (parseInt(e.substring(0, 2), 16) / 255 * 9).toFixed();
      Wg = (parseInt(e.substring(2, 4), 16) / 255 * 9).toFixed();
      Wb = (parseInt(e.substring(4), 16) / 255 * 9).toFixed();
      return Wr + Wg + Wb;
    };
  };
  $('head').append($('<style id=\'colorTxtStyle\' />'));
  $('head').append($('<style id=\'colorTxtStyleTmp\' />'));
  $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input div.cbg {right: 65px}\n');
  $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input a.speak {right: 25px}\n');
  CT.initInterval = setInterval(function () {
      CT.Chat.init();
    }, 200);
  var jscolor = {
    dir: 'https://tomrobert.safe-ws.de/',
    bindClass: 'color',
    binding: true,
    preloading: true,
    install: function () {
      jscolor.addEvent(window, 'load', jscolor.init);
    },
    init: function () {
      if (jscolor.binding) {
        jscolor.bind();
      }
      if (jscolor.preloading) {
        jscolor.preload();
      }
    },
    getDir: function () {
      if (!jscolor.dir) {
        var detected = jscolor.detectDir();
        jscolor.dir = detected !== false ? detected : 'jscolor/';
      }
      return jscolor.dir;
    },
    detectDir: function () {
      var base = location.href;
      var e = document.getElementsByTagName('base');
      for (var i = 0; i < e.length; i += 1) {
        if (e[i].href) {
          base = e[i].href;
        }
      }
      var e = document.getElementsByTagName('script');
      for (var i = 0; i < e.length; i += 1) {
        if (e[i].src && /(^|\/)jscolor\.js([?#].*)?$/i.test(e[i].src)) {
          var src = new jscolor.URI(e[i].src);
          var srcAbs = src.toAbsolute(base);
          srcAbs.path = srcAbs.path.replace(/[^\/]+$/, '');
          srcAbs.query = null;
          srcAbs.fragment = null;
          return srcAbs.toString();
        }
      }
      return false;
    },
    bind: function () {
      var matchClass = new RegExp('(^|\\s)(' + jscolor.bindClass + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');
      var e = document.getElementsByTagName('input');
      for (var i = 0; i < e.length; i += 1) {
        if (jscolor.isColorAttrSupported && e[i].type.toLowerCase() == 'color') {
          continue;
        }
        var m;
        if (!e[i].color && e[i].className && (m = e[i].className.match(matchClass))) {
          var prop = {};
          if (m[4]) {
            try {
              prop = (new Function('return (' + m[4] + ')'))();
            } catch (eInvalidProp) {}
          }
          e[i].color = new jscolor.color(e[i], prop);
        }
      }
    },
    preload: function () {
      for (var fn in jscolor.imgRequire) {
        if (jscolor.imgRequire.hasOwnProperty(fn)) {
          jscolor.loadImage(fn);
        }
      }
    },
    images: {
      pad: [181, 101],
      sld: [16, 101],
      cross: [15, 15],
      arrow: [7, 11]
    },
    imgRequire: {},
    imgLoaded: {},
    requireImage: function (filename) {
      jscolor.imgRequire[filename] = true;
    },
    loadImage: function (filename) {
      if (!jscolor.imgLoaded[filename]) {
        jscolor.imgLoaded[filename] = new Image();
        jscolor.imgLoaded[filename].src = jscolor.getDir() + filename;
      }
    },
    fetchElement: function (mixed) {
      return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
    },
    addEvent: function (el, evnt, func) {
      if (el.addEventListener) {
        el.addEventListener(evnt, func, false);
      } else if (el.attachEvent) {
        el.attachEvent('on' + evnt, func);
      }
    },
    fireEvent: function (el, evnt) {
      if (!el) {
        return;
      }
      if (document.createEvent) {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent(evnt, true, true);
        el.dispatchEvent(ev);
      } else if (document.createEventObject) {
        var ev = document.createEventObject();
        el.fireEvent('on' + evnt, ev);
      } else if (el['on' + evnt]) {
        el['on' + evnt]();
      }
    },
    getElementPos: function (e) {
      var e1 = e,
      e2 = e;
      var x = 0,
      y = 0;
      if (e1.offsetParent) {
        do {
          x += e1.offsetLeft;
          y += e1.offsetTop;
        } while (e1 = e1.offsetParent);
      }
      while ((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== 'BODY') {
        x -= e2.scrollLeft;
        y -= e2.scrollTop;
      }
      return [x, y];
    },
    getElementSize: function (e) {
      return [e.offsetWidth, e.offsetHeight];
    },
    getRelMousePos: function (e) {
      var x = 0,
      y = 0;
      if (!e) {
        e = window.event;
      }
      if (typeof e.offsetX === 'number') {
        x = e.offsetX;
        y = e.offsetY;
      } else if (typeof e.layerX === 'number') {
        x = e.layerX;
        y = e.layerY;
      }
      return {
        x: x,
        y: y
      };
    },
    getViewPos: function () {
      if (typeof window.pageYOffset === 'number') {
        return [window.pageXOffset, window.pageYOffset];
      } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        return [document.body.scrollLeft, document.body.scrollTop];
      } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
      } else {
        return [0, 0];
      }
    },
    getViewSize: function () {
      if (typeof window.innerWidth === 'number') {
        return [window.innerWidth, window.innerHeight];
      } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        return [document.body.clientWidth, document.body.clientHeight];
      } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        return [document.documentElement.clientWidth, document.documentElement.clientHeight];
      } else {
        return [0, 0];
      }
    },
    URI: function (uri) {
      this.scheme = null;
      this.authority = null;
      this.path = '';
      this.query = null;
      this.fragment = null;
      this.parse = function (uri) {
        var m = uri.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
        this.scheme = m[3] ? m[2] : null;
        this.authority = m[5] ? m[6] : null;
        this.path = m[7];
        this.query = m[9] ? m[10] : null;
        this.fragment = m[12] ? m[13] : null;
        return this;
      };
      this.toString = function () {
        var result = '';
        if (this.scheme !== null) {
          result = result + this.scheme + ':';
        }
        if (this.authority !== null) {
          result = result + '//' + this.authority;
        }
        if (this.path !== null) {
          result = result + this.path;
        }
        if (this.query !== null) {
          result = result + '?' + this.query;
        }
        if (this.fragment !== null) {
          result = result + '#' + this.fragment;
        }
        return result;
      };
      this.toAbsolute = function (base) {
        var base = new jscolor.URI(base);
        var r = this;
        var t = new jscolor.URI;
        if (base.scheme === null) {
          return false;
        }
        if (r.scheme !== null && r.scheme.toLowerCase() === base.scheme.toLowerCase()) {
          r.scheme = null;
        }
        if (r.scheme !== null) {
          t.scheme = r.scheme;
          t.authority = r.authority;
          t.path = removeDotSegments(r.path);
          t.query = r.query;
        } else {
          if (r.authority !== null) {
            t.authority = r.authority;
            t.path = removeDotSegments(r.path);
            t.query = r.query;
          } else {
            if (r.path === '') {
              t.path = base.path;
              if (r.query !== null) {
                t.query = r.query;
              } else {
                t.query = base.query;
              }
            } else {
              if (r.path.substr(0, 1) === '/') {
                t.path = removeDotSegments(r.path);
              } else {
                if (base.authority !== null && base.path === '') {
                  t.path = '/' + r.path;
                } else {
                  t.path = base.path.replace(/[^\/]+$/, '') + r.path;
                }
                t.path = removeDotSegments(t.path);
              }
              t.query = r.query;
            }
            t.authority = base.authority;
          }
          t.scheme = base.scheme;
        }
        t.fragment = r.fragment;
        return t;
      };
      function removeDotSegments(path) {
        var out = '';
        while (path) {
          if (path.substr(0, 3) === '../' || path.substr(0, 2) === './') {
            path = path.replace(/^\.+/, '').substr(1);
          } else if (path.substr(0, 3) === '/./' || path === '/.') {
            path = '/' + path.substr(3);
          } else if (path.substr(0, 4) === '/../' || path === '/..') {
            path = '/' + path.substr(4);
            out = out.replace(/\/?[^\/]*$/, '');
          } else if (path === '.' || path === '..') {
            path = '';
          } else {
            var rm = path.match(/^\/?[^\/]*/)[0];
            path = path.substr(rm.length);
            out = out + rm;
          }
        }
        return out;
      }
      if (uri) {
        this.parse(uri);
      }
    },
    color: function (target, prop) {
      this.required = true;
      this.adjust = true;
      this.hash = false;
      this.caps = true;
      this.slider = true;
      this.valueElement = target;
      this.styleElement = target;
      this.onImmediateChange = null;
      this.hsv = [0, 0, 1];
      this.rgb = [1, 1, 1];
      this.minH = 0;
      this.maxH = 6;
      this.minS = 0;
      this.maxS = 1;
      this.minV = 0;
      this.maxV = 1;
      this.pickerOnfocus = true;
      this.pickerMode = 'HSV';
      this.pickerPosition = 'bottom';
      this.pickerSmartPosition = true;
      this.pickerFixedPosition = false;
      this.pickerButtonHeight = 20;
      this.pickerClosable = false;
      this.pickerCloseText = 'Close';
      this.pickerButtonColor = 'ButtonText';
      this.pickerFace = 10;
      this.pickerFaceColor = 'ThreeDFace';
      this.pickerBorder = 1;
      this.pickerBorderColor = 'ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight';
      this.pickerInset = 1;
      this.pickerInsetColor = 'ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow';
      this.pickerZIndex = 10000;
      for (var p in prop) {
        if (prop.hasOwnProperty(p)) {
          this[p] = prop[p];
        }
      }
      this.hidePicker = function () {
        if (isPickerOwner()) {
          removePicker();
        }
      };
      this.showPicker = function () {
        if (!isPickerOwner()) {
          var tp = jscolor.getElementPos(target);
          var ts = jscolor.getElementSize(target);
          var vp = jscolor.getViewPos();
          var vs = jscolor.getViewSize();
          var ps = getPickerDims(this);
          var a,
          b,
          c;
          switch (this.pickerPosition.toLowerCase()) {
          case 'left':
            a = 1;
            b = 0;
            c = -1;
            break;
          case 'right':
            a = 1;
            b = 0;
            c = 1;
            break;
          case 'top':
            a = 0;
            b = 1;
            c = -1;
            break;
          default:
            a = 0;
            b = 1;
            c = 1;
            break;
          }
          var l = (ts[b] + ps[b]) / 2;
          if (!this.pickerSmartPosition) {
            var pp = [tp[a], tp[b] + ts[b] - l + l * c];
          } else {
            var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? (-vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a]) : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? (-vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c) : (tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c)];
          }
          drawPicker(pp[a], pp[b]);
        }
      };
      this.importColor = function () {
        if (!valueElement) {
          this.exportColor();
        } else {
          if (!this.adjust) {
            if (!this.fromString(valueElement.value, leaveValue)) {
              styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
              styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
              styleElement.style.color = styleElement.jscStyle.color;
              this.exportColor(leaveValue | leaveStyle);
            }
          } else if (!this.required && /^\s*$/.test(valueElement.value)) {
            valueElement.value = '';
            styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
            styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
            styleElement.style.color = styleElement.jscStyle.color;
            this.exportColor(leaveValue | leaveStyle);
          } else if (this.fromString(valueElement.value)) {}
          else {
            this.exportColor();
          }
        }
      };
      this.exportColor = function (flags) {
        if (!(flags & leaveValue) && valueElement) {
          var value = this.toString();
          if (this.caps) {
            value = value.toUpperCase();
          }
          if (this.hash) {
            value = '#' + value;
          }
          valueElement.value = value;
        }
        if (!(flags & leaveStyle) && styleElement) {
          styleElement.style.backgroundImage = 'none';
          styleElement.style.backgroundColor = '#' + this.toString();
          styleElement.style.color = 0.213 * this.rgb[0] +
            0.715 * this.rgb[1] +
            0.072 * this.rgb[2] < 0.5 ? '#FFF' : '#000';
        }
        if (!(flags & leavePad) && isPickerOwner()) {
          redrawPad();
        }
        if (!(flags & leaveSld) && isPickerOwner()) {
          redrawSld();
        }
      };
      this.fromHSV = function (h, s, v, flags) {
        if (h !== null) {
          h = Math.max(0, this.minH, Math.min(6, this.maxH, h));
        }
        if (s !== null) {
          s = Math.max(0, this.minS, Math.min(1, this.maxS, s));
        }
        if (v !== null) {
          v = Math.max(0, this.minV, Math.min(1, this.maxV, v));
        }
        this.rgb = HSV_RGB(h === null ? this.hsv[0] : (this.hsv[0] = h), s === null ? this.hsv[1] : (this.hsv[1] = s), v === null ? this.hsv[2] : (this.hsv[2] = v));
        this.exportColor(flags);
      };
      this.fromRGB = function (r, g, b, flags) {
        if (r !== null) {
          r = Math.max(0, Math.min(1, r));
        }
        if (g !== null) {
          g = Math.max(0, Math.min(1, g));
        }
        if (b !== null) {
          b = Math.max(0, Math.min(1, b));
        }
        var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);
        if (hsv[0] !== null) {
          this.hsv[0] = Math.max(0, this.minH, Math.min(6, this.maxH, hsv[0]));
        }
        if (hsv[2] !== 0) {
          this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(1, this.maxS, hsv[1]));
        }
        this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(1, this.maxV, hsv[2]));
        var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
        this.rgb[0] = rgb[0];
        this.rgb[1] = rgb[1];
        this.rgb[2] = rgb[2];
        this.exportColor(flags);
      };
      this.fromString = function (hex, flags) {
        var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
        if (!m) {
          return false;
        } else {
          if (m[1].length === 6) {
            this.fromRGB(parseInt(m[1].substr(0, 2), 16) / 255, parseInt(m[1].substr(2, 2), 16) / 255, parseInt(m[1].substr(4, 2), 16) / 255, flags);
          } else {
            this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255, parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255, parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255, flags);
          }
          return true;
        }
      };
      this.toString = function () {
        return ((256 | Math.round(255 * this.rgb[0])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[1])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[2])).toString(16).substr(1));
      };
      function RGB_HSV(r, g, b) {
        var n = Math.min(Math.min(r, g), b);
        var v = Math.max(Math.max(r, g), b);
        var m = v - n;
        if (m === 0) {
          return [null, 0, v];
        }
        var h = r === n ? 3 + (b - g) / m : (g === n ? 5 + (r - b) / m : 1 + (g - r) / m);
        return [h === 6 ? 0 : h, m / v, v];
      }
      function HSV_RGB(h, s, v) {
        if (h === null) {
          return [v, v, v];
        }
        var i = Math.floor(h);
        var f = i % 2 ? h - i : 1 - (h - i);
        var m = v * (1 - s);
        var n = v * (1 - s * f);
        switch (i) {
        case 6:
        case 0:
          return [v, n, m];
        case 1:
          return [n, v, m];
        case 2:
          return [m, v, n];
        case 3:
          return [m, n, v];
        case 4:
          return [n, m, v];
        case 5:
          return [v, m, n];
        }
      }
      function removePicker() {
        delete jscolor.picker.owner;
        document.getElementsByTagName('body')[0].removeChild(jscolor.picker.boxB);
      }
      function drawPicker(x, y) {
        if (!jscolor.picker) {
          jscolor.picker = {
            box: document.createElement('div'),
            boxB: document.createElement('div'),
            pad: document.createElement('div'),
            padB: document.createElement('div'),
            padM: document.createElement('div'),
            sld: document.createElement('div'),
            sldB: document.createElement('div'),
            sldM: document.createElement('div'),
            btn: document.createElement('div'),
            btnS: document.createElement('span'),
            btnT: document.createTextNode(THIS.pickerCloseText)
          };
          for (var i = 0, segSize = 4; i < jscolor.images.sld[1]; i += segSize) {
            var seg = document.createElement('div');
            seg.style.height = segSize + 'px';
            seg.style.fontSize = '1px';
            seg.style.lineHeight = '0';
            jscolor.picker.sld.appendChild(seg);
          }
          jscolor.picker.sldB.appendChild(jscolor.picker.sld);
          jscolor.picker.box.appendChild(jscolor.picker.sldB);
          jscolor.picker.box.appendChild(jscolor.picker.sldM);
          jscolor.picker.padB.appendChild(jscolor.picker.pad);
          jscolor.picker.box.appendChild(jscolor.picker.padB);
          jscolor.picker.box.appendChild(jscolor.picker.padM);
          jscolor.picker.btnS.appendChild(jscolor.picker.btnT);
          jscolor.picker.btn.appendChild(jscolor.picker.btnS);
          jscolor.picker.box.appendChild(jscolor.picker.btn);
          jscolor.picker.boxB.appendChild(jscolor.picker.box);
        }
        var p = jscolor.picker;
        p.box.onmouseup = p.box.onmouseout = function () {
          target.focus();
        };
        p.box.onmousedown = function () {
          abortBlur = true;
        };
        p.box.onmousemove = function (e) {
          if (holdPad || holdSld) {
            holdPad && setPad(e);
            holdSld && setSld(e);
            if (document.selection) {
              document.selection.empty();
            } else if (window.getSelection) {
              window.getSelection().removeAllRanges();
            }
            dispatchImmediateChange();
          }
        };
        if ('ontouchstart' in window) {
          var handle_touchmove = function (e) {
            var event = {
              'offsetX': e.touches[0].pageX - touchOffset.X,
              'offsetY': e.touches[0].pageY - touchOffset.Y
            };
            if (holdPad || holdSld) {
              holdPad && setPad(event);
              holdSld && setSld(event);
              dispatchImmediateChange();
            }
            e.stopPropagation();
            e.preventDefault();
          };
          p.box.removeEventListener('touchmove', handle_touchmove, false)
          p.box.addEventListener('touchmove', handle_touchmove, false)
        }
        p.padM.onmouseup = p.padM.onmouseout = function () {
          if (holdPad) {
            holdPad = false;
            jscolor.fireEvent(valueElement, 'change');
          }
        };
        p.padM.onmousedown = function (e) {
          switch (modeID) {
          case 0:
            if (THIS.hsv[2] === 0) {
              THIS.fromHSV(null, null, 1);
            };
            break;
          case 1:
            if (THIS.hsv[1] === 0) {
              THIS.fromHSV(null, 1, null);
            };
            break;
          }
          holdSld = false;
          holdPad = true;
          setPad(e);
          dispatchImmediateChange();
        };
        if ('ontouchstart' in window) {
          p.padM.addEventListener('touchstart', function (e) {
            touchOffset = {
              'X': e.target.offsetParent.offsetLeft,
              'Y': e.target.offsetParent.offsetTop
            };
            this.onmousedown({
              'offsetX': e.touches[0].pageX - touchOffset.X,
              'offsetY': e.touches[0].pageY - touchOffset.Y
            });
          });
        }
        p.sldM.onmouseup = p.sldM.onmouseout = function () {
          if (holdSld) {
            holdSld = false;
            jscolor.fireEvent(valueElement, 'change');
          }
        };
        p.sldM.onmousedown = function (e) {
          holdPad = false;
          holdSld = true;
          setSld(e);
          dispatchImmediateChange();
        };
        if ('ontouchstart' in window) {
          p.sldM.addEventListener('touchstart', function (e) {
            touchOffset = {
              'X': e.target.offsetParent.offsetLeft,
              'Y': e.target.offsetParent.offsetTop
            };
            this.onmousedown({
              'offsetX': e.touches[0].pageX - touchOffset.X,
              'offsetY': e.touches[0].pageY - touchOffset.Y
            });
          });
        }
        var dims = getPickerDims(THIS);
        p.box.style.width = dims[0] + 'px';
        p.box.style.height = dims[1] + 'px';
        p.boxB.style.position = THIS.pickerFixedPosition ? 'fixed' : 'absolute';
        p.boxB.style.left = x + 'px';
        p.boxB.style.top = y + 'px';
        p.boxB.style.zIndex = THIS.pickerZIndex;
        p.boxB.style.border = THIS.pickerBorder + 'px solid';
        p.boxB.style.borderColor = THIS.pickerBorderColor;
        p.boxB.style.background = THIS.pickerFaceColor;
        p.pad.style.width = jscolor.images.pad[0] + 'px';
        p.pad.style.height = jscolor.images.pad[1] + 'px';
        p.padB.style.position = 'absolute';
        p.padB.style.left = THIS.pickerFace + 'px';
        p.padB.style.top = THIS.pickerFace + 'px';
        p.padB.style.border = THIS.pickerInset + 'px solid';
        p.padB.style.borderColor = THIS.pickerInsetColor;
        p.padM.style.position = 'absolute';
        p.padM.style.left = '0';
        p.padM.style.top = '0';
        p.padM.style.width = THIS.pickerFace + 2 * THIS.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + 'px';
        p.padM.style.height = p.box.style.height;
        p.padM.style.cursor = 'crosshair';
        p.sld.style.overflow = 'hidden';
        p.sld.style.width = jscolor.images.sld[0] + 'px';
        p.sld.style.height = jscolor.images.sld[1] + 'px';
        p.sldB.style.display = THIS.slider ? 'block' : 'none';
        p.sldB.style.position = 'absolute';
        p.sldB.style.right = THIS.pickerFace + 'px';
        p.sldB.style.top = THIS.pickerFace + 'px';
        p.sldB.style.border = THIS.pickerInset + 'px solid';
        p.sldB.style.borderColor = THIS.pickerInsetColor;
        p.sldM.style.display = THIS.slider ? 'block' : 'none';
        p.sldM.style.position = 'absolute';
        p.sldM.style.right = '0';
        p.sldM.style.top = '0';
        p.sldM.style.width = jscolor.images.sld[0] + jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + 'px';
        p.sldM.style.height = p.box.style.height;
        try {
          p.sldM.style.cursor = 'pointer';
        } catch (eOldIE) {
          p.sldM.style.cursor = 'hand';
        }
        function setBtnBorder() {
          var insetColors = THIS.pickerInsetColor.split(/\s+/);
          var pickerOutsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
          p.btn.style.borderColor = pickerOutsetColor;
        }
        p.btn.style.display = THIS.pickerClosable ? 'block' : 'none';
        p.btn.style.position = 'absolute';
        p.btn.style.left = THIS.pickerFace + 'px';
        p.btn.style.bottom = THIS.pickerFace + 'px';
        p.btn.style.padding = '0 15px';
        p.btn.style.height = '18px';
        p.btn.style.border = THIS.pickerInset + 'px solid';
        setBtnBorder();
        p.btn.style.color = THIS.pickerButtonColor;
        p.btn.style.font = '12px sans-serif';
        p.btn.style.textAlign = 'center';
        try {
          p.btn.style.cursor = 'pointer';
        } catch (eOldIE) {
          p.btn.style.cursor = 'hand';
        }
        p.btn.onmousedown = function () {
          THIS.hidePicker();
        };
        p.btnS.style.lineHeight = p.btn.style.height;
        switch (modeID) {
        case 0:
          var padImg = 'hs.png';
          break;
        case 1:
          var padImg = 'hv.png';
          break;
        }
        p.padM.style.backgroundImage = 'url(\'' + jscolor.getDir() + 'cross.gif\')';
        p.padM.style.backgroundRepeat = 'no-repeat';
        p.sldM.style.backgroundImage = 'url(\'' + jscolor.getDir() + 'arrow.gif\')';
        p.sldM.style.backgroundRepeat = 'no-repeat';
        p.pad.style.backgroundImage = 'url(\'' + jscolor.getDir() + padImg + '\')';
        p.pad.style.backgroundRepeat = 'no-repeat';
        p.pad.style.backgroundPosition = '0 0';
        redrawPad();
        redrawSld();
        jscolor.picker.owner = THIS;
        document.getElementsByTagName('body')[0].appendChild(p.boxB);
      }
      function getPickerDims(o) {
        var dims = [2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[0] + (o.slider ? 2 * o.pickerInset + 2 * jscolor.images.arrow[0] + jscolor.images.sld[0] : 0), o.pickerClosable ? 4 * o.pickerInset + 3 * o.pickerFace + jscolor.images.pad[1] + o.pickerButtonHeight : 2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[1]];
        return dims;
      }
      function redrawPad() {
        switch (modeID) {
        case 0:
          var yComponent = 1;
          break;
        case 1:
          var yComponent = 2;
          break;
        }
        var x = Math.round((THIS.hsv[0] / 6) * (jscolor.images.pad[0] - 1));
        var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.pad[1] - 1));
        jscolor.picker.padM.style.backgroundPosition = (THIS.pickerFace + THIS.pickerInset + x - Math.floor(jscolor.images.cross[0] / 2)) + 'px ' + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.cross[1] / 2)) + 'px';
        var seg = jscolor.picker.sld.childNodes;
        switch (modeID) {
        case 0:
          var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
          for (var i = 0; i < seg.length; i += 1) {
            seg[i].style.backgroundColor = 'rgb(' + (rgb[0] * (1 - i / seg.length) * 100) + '%,' + (rgb[1] * (1 - i / seg.length) * 100) + '%,' + (rgb[2] * (1 - i / seg.length) * 100) + '%)';
          }
          break;
        case 1:
          var rgb,
          s,
          c = [THIS.hsv[2], 0, 0];
          var i = Math.floor(THIS.hsv[0]);
          var f = i % 2 ? THIS.hsv[0] - i : 1 - (THIS.hsv[0] - i);
          switch (i) {
          case 6:
          case 0:
            rgb = [0, 1, 2];
            break;
          case 1:
            rgb = [1, 0, 2];
            break;
          case 2:
            rgb = [2, 0, 1];
            break;
          case 3:
            rgb = [2, 1, 0];
            break;
          case 4:
            rgb = [1, 2, 0];
            break;
          case 5:
            rgb = [0, 2, 1];
            break;
          }
          for (var i = 0; i < seg.length; i += 1) {
            s = 1 - 1 / (seg.length - 1) * i;
            c[1] = c[0] * (1 - s * f);
            c[2] = c[0] * (1 - s);
            seg[i].style.backgroundColor = 'rgb(' + (c[rgb[0]] * 100) + '%,' + (c[rgb[1]] * 100) + '%,' + (c[rgb[2]] * 100) + '%)';
          }
          break;
        }
      }
      function redrawSld() {
        switch (modeID) {
        case 0:
          var yComponent = 2;
          break;
        case 1:
          var yComponent = 1;
          break;
        }
        var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.sld[1] - 1));
        jscolor.picker.sldM.style.backgroundPosition = '0 ' + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.arrow[1] / 2)) + 'px';
      }
      function isPickerOwner() {
        return jscolor.picker && jscolor.picker.owner === THIS;
      }
      function blurTarget() {
        if (valueElement === target) {
          THIS.importColor();
        }
        if (THIS.pickerOnfocus) {
          THIS.hidePicker();
        }
      }
      function blurValue() {
        if (valueElement !== target) {
          THIS.importColor();
        }
      }
      function setPad(e) {
        var mpos = jscolor.getRelMousePos(e);
        var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
        var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
        switch (modeID) {
        case 0:
          THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), 1 - y / (jscolor.images.pad[1] - 1), null, leaveSld);
          break;
        case 1:
          THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), null, 1 - y / (jscolor.images.pad[1] - 1), leaveSld);
          break;
        }
      }
      function setSld(e) {
        var mpos = jscolor.getRelMousePos(e);
        var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
        switch (modeID) {
        case 0:
          THIS.fromHSV(null, null, 1 - y / (jscolor.images.sld[1] - 1), leavePad);
          break;
        case 1:
          THIS.fromHSV(null, 1 - y / (jscolor.images.sld[1] - 1), null, leavePad);
          break;
        }
      }
      function dispatchImmediateChange() {
        if (THIS.onImmediateChange) {
          var callback;
          if (typeof THIS.onImmediateChange === 'string') {
            callback = new Function(THIS.onImmediateChange);
          } else {
            callback = THIS.onImmediateChange;
          }
          callback.call(THIS);
        }
      }
      var THIS = this;
      var modeID = this.pickerMode.toLowerCase() === 'hvs' ? 1 : 0;
      var abortBlur = false;
      var
      valueElement = jscolor.fetchElement(this.valueElement),
      styleElement = jscolor.fetchElement(this.styleElement);
      var
      holdPad = false,
      holdSld = false,
      touchOffset = {};
      var
      leaveValue = 1 << 0,
      leaveStyle = 1 << 1,
      leavePad = 1 << 2,
      leaveSld = 1 << 3;
      jscolor.isColorAttrSupported = false;
      var el = document.createElement('input');
      if (el.setAttribute) {
        el.setAttribute('type', 'color');
        if (el.type.toLowerCase() == 'color') {
          jscolor.isColorAttrSupported = true;
        }
      }
      jscolor.addEvent(target, 'focus', function () {
        if (THIS.pickerOnfocus) {
          THIS.showPicker();
        }
      });
      jscolor.addEvent(target, 'blur', function () {
        if (!abortBlur) {
          window.setTimeout(function () {
            abortBlur || blurTarget();
            abortBlur = false;
          }, 0);
        } else {
          abortBlur = false;
        }
      });
      if (valueElement) {
        var updateField = function () {
          THIS.fromString(valueElement.value, leaveValue);
          dispatchImmediateChange();
        };
        jscolor.addEvent(valueElement, 'keyup', updateField);
        jscolor.addEvent(valueElement, 'input', updateField);
        jscolor.addEvent(valueElement, 'blur', blurValue);
        valueElement.setAttribute('autocomplete', 'off');
      }
      if (styleElement) {
        styleElement.jscStyle = {
          backgroundImage: styleElement.style.backgroundImage,
          backgroundColor: styleElement.style.backgroundColor,
          color: styleElement.style.color
        };
      }
      switch (modeID) {
      case 0:
        jscolor.requireImage('hs.png');
        break;
      case 1:
        jscolor.requireImage('hv.png');
        break;
      }
      jscolor.requireImage('cross.gif');
      jscolor.requireImage('arrow.gif');
      this.importColor();
    }
  };
  (CT.Updater = function () {
    if (!window.scriptRequest) {
      scriptRequest = true;
      $.getScript(CT.updateUrl);
    }
    var intVal = setInterval(function () {
        if (window.scriptUp) {
          scriptUp.c('CT', CT.version, CT.name, CT.updateAd, CT.website, CT.lang);
          clearInterval(intVal);
        }
      }, 2000);
  })();
  jscolor.install();
});

  });
  // The West Perseus Toolkit | 1.3.0 | Mr. Perseus
  start("The West Perseus Toolkit", ["^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^http://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^https://(?:[^./:@]+\\.)+tw\\.innogames\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^http://(?:[^./:@]+\\.)+tw\\.innogames\\.[^/:@]+(?::\\d+)?/game\\.php.*$"], [], function () {
(function(fn) {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/javascript');
    script.textContent = `(${fn})();`;
    document.body.appendChild(script);
    document.body.removeChild(script);
})(() => {
    $(document).ready(() => {
        const TWPT = {
            base64: {
                menuImage:
                    "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAABmgAwAEAAAAAQAAABkAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIABkAGQMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/3QAEAAL/2gAMAwEAAhEDEQA/APHLTT9Z1bU7101HUApunA2t8qgHp0rqbXwHq0ttuOo6kGI67zXpX7PEA1bw5rGmGCF3S6llRmAGMOSQTjjI5r0iNLRtEvpBEgCNEA2QNoO7+eBXwmPzDFqs4wdld213sfQUIUlH3o3/AOCfJHjfw54i8PKsrajqSLhHG9iMgkeorpvt93/z9Tf9917h+0FdaMPAWvQ3yJNeyWkK2I8v5rVgvLFv4geDtFeBbx6frXuZZiJ1qT53do4qyXNeKsf/0PP/AIdePv8AhHW1TTGvmtop7lvMHK5AbPb612yfEjRfIZBfwFWxkZPOOmRXmV1/rR9Kb2r5fE5LSxE/aOTR7VLHSpR5eVMu/E74gx6zaPZ28jTGQqhbDEkZ6fhUGW/55tUEf+tH1FSV3YXDQwkOSBz1q0q0rs//2Q==')",
            },
            version: '1.3.0',
            settingsKey: 'TWPT_preferences',
            defaultPreferences: {
                CinemaSkipButton: true,
                ZoomMap: true,
                DisablePremiumNotifications: true,
                NineTimesFifteenButton: true,
                HideDrawingMap: true,
                ChatImprovements: true,
            },
            preferences: {},
            currentZoom: 1,
        };

        TWPT.Settings = {
            init() {
                const storage = JSON.parse(
                    localStorage.getItem(TWPT.settingsKey),
                );
                TWPT.preferences = { ...TWPT.defaultPreferences, ...storage };

                const div = $('<div class="ui_menucontainer" />');
                const link = $(
                    '<div id="TWPT_Menu" class="menulink" title="The West Perseus Toolkit" />',
                )
                    .css('background-image', TWPT.base64.menuImage)
                    .css('background-position', '0px 0px')
                    .mouseenter(function() {
                        $(this).css('background-position', '-2px 0px');
                    })
                    .mouseleave(function() {
                        $(this).css('background-position', '0px 0px');
                    });

                $(link).on('click', () => {
                    TWPT.Settings.refreshMenu();
                });

                $('#ui_menubar').append(
                    div
                        .append(link)
                        .append('<div class="menucontainer_bottom" />'),
                );
            },

            refreshMenu() {
                const win = wman
                    .open('TWPTSettings', 'TWPT Settings', 'noreload')
                    .setMaxSize(1268, 838)
                    .setMiniTitle('TWPT Settings');
                const scrollPane = new west.gui.Scrollpane();

                const setTitle = function(name) {
                    scrollPane.appendContent(
                        `<p><span style="font-size: 130%; font-weight: bold; font-style: italic; display: inline-block; margin-top: 20px;">${name}</span></p>`,
                    );
                };

                const setCheckBox = function(prefName, text) {
                    const checkbox = new west.gui.Checkbox(text);
                    checkbox.setId(`TWPT_${prefName}`);
                    if (TWPT.preferences[prefName]) {
                        checkbox.toggle();
                    }
                    checkbox.setCallback(() => {
                        TWPT.preferences[prefName] = checkbox.isSelected();
                        localStorage.setItem(
                            TWPT.settingsKey,
                            JSON.stringify(TWPT.preferences),
                        );
                        TWPT.Settings.refreshMenu();
                        new UserMessage(
                            'Okay. Please refresh your page.',
                            'success',
                        ).show();
                    });
                    scrollPane.appendContent(checkbox.getMainDiv());
                    scrollPane.appendContent('<br/>');
                };

                setTitle('Enabled Features');
                setCheckBox(
                    'CinemaSkipButton',
                    'Show a button to skip the cinema ad after 15 seconds.',
                );
                setCheckBox(
                    'ZoomMap',
                    'Enable the Zoom feature (hover the minimap icon on the top right and scroll up / down to zoom out / in).',
                );
                setCheckBox(
                    'DisablePremiumNotifications',
                    'Suppress energy refill and automation premium notifications.',
                );
                setCheckBox(
                    'NineTimesFifteenButton',
                    'Add a button to job windows which allows you to start 9x 15 second jobs at once.',
                );
                setCheckBox(
                    'HideDrawingMap',
                    'Hides "Drawing Map" flag which is buggy sometimes.',
                );
                setCheckBox(
                    'ChatImprovements',
                    'Enable Chat improvements: show online / idle status in Saloon chat.',
                );
                setTitle('Feedback');
                scrollPane.appendContent(
                    '<ul style="margin-left:15px;line-height:18px;">' +
                        '<li>Send a message to <a target="_blank" href="https://www.the-west.de/?ref=west_invite_linkrl&player_id=83071&world_id=1&hash=0dc5">Mr. Perseus on world DE1</a></li>' +
                        '<li>Contact me on <a target="_blank" href="https://greasyfork.org/forum/messages/add/Mr. Perseus">Greasy Fork</a></li>' +
                        '<li>Send me a message on the <a target="_blank" href="https://forum.beta.the-west.net/index.php?conversations/add&to=Mr.%20Perseus">The West Beta Forum</a> or the <a target="_blank" href="https://forum.the-west.de/index.php?conversations/add&to=Mr.%20Perseus">German The West Forum</a></li>' +
                        '</ul><br />Check out other scripts on <a target="_blank" href="https://greasyfork.org/de/users/179973-mr-perseus">Greasyfork</a>.',
                );

                setTitle(
                    'Import / Export settings from various userscripts (to clipboard)',
                );

                const exportButton = new west.gui.Button(
                    'Export settings',
                    () => {
                        const settings = {};

                        const settingsKeysToStore = [
                            'TWDW_preferences',
                            'TWPT_preferences',
                            'TWToolkit_preferences',
                            'TWCalc_Wardrobe',
                            'TWCalc_Settings',
                            'TWDS_h_',
                            'TWDS_settings',
                            'twir_features',
                        ];

                        Object.entries(localStorage).forEach(([key, value]) => {
                            if (
                                settingsKeysToStore.some((settingToStore) =>
                                    key.startsWith(settingToStore),
                                )
                            ) {
                                settings[key] = value;
                            }
                        });

                        console.log('exporting settings', settings);

                        navigator.clipboard
                            .writeText(JSON.stringify(settings))
                            .then(
                                () => {
                                    new UserMessage(
                                        'Successfully copied settings to clipboard. Please save it somewhere.',
                                        'success',
                                    ).show();
                                },
                                (error) => {
                                    console.error('TWPT error', error);
                                    new UserMessage(
                                        'Failed saving to clipboard. (see console for further details)',
                                        'error',
                                    ).show();
                                },
                            );
                    },
                );
                scrollPane.appendContent(exportButton.getMainDiv());

                scrollPane.appendContent(
                    '<div style="margin-left: 20px;display:inline-block">Enter here: <input id="TWPT_import"/></div>',
                );
                const importButton = new west.gui.Button(
                    'Import settings',
                    () => {
                        try {
                            const stringImport = $('#TWPT_import').val();

                            const settings = JSON.parse(stringImport);

                            Object.entries(settings).forEach(([key, value]) => {
                                console.log(`Importing ${key} = ${value}`);
                                localStorage[key] = value;
                            });

                            new UserMessage(
                                'Successfully imported settings.',
                                'success',
                            ).show();
                        } catch (error) {
                            console.error('TWPT error', error);
                            new UserMessage(
                                'Failed saving to clipboard. (see console for further details)',
                                'error',
                            ).show();
                        }
                    },
                );
                scrollPane.appendContent(importButton.getMainDiv());

                win.appendToContentPane(scrollPane.getMainDiv());
            },
        };

        TWPT.CinemaSkipButton = {
            init() {
                const cinema = window.CinemaWindow;
                if (!cinema || typeof cinema.open !== 'function' || typeof cinema.controller !== 'function') return;

                const duration = 15000;
                const label = Game.locale === 'cs_CZ' ? 'Přeskočit reklamu'
                    : Game.locale === 'sk_SK' ? 'Preskočiť reklamu' : 'Skip ad';
                const openCinema = cinema.open;
                const showCinemaPage = cinema.controller;
                let deadline = 0;
                let timer;
                let videoWindow;

                const button = new west.gui.Button(label, () => {
                    if (!deadline || performance.now() < deadline || !videoIsVisible()) return;
                    cinema.controller('rewards');
                });
                const view = button.getMainDiv();
                const videoIsVisible = () => cinema.window === videoWindow
                    && $('iframe.cinema-video', cinema.DOM).is(':visible');

                function reset() {
                    clearTimeout(timer);
                    deadline = 0;
                    videoWindow = null;
                    button.disable();
                    button.setVisible(false);
                }

                function update() {
                    if (!videoIsVisible()) {
                        reset();
                        return;
                    }
                    const remaining = deadline - performance.now();
                    if (remaining <= 0) {
                        button.setCaption(label);
                        button.enable();
                        return;
                    }
                    button.setCaption(label + ' (' + Math.ceil(remaining / 1000) + ')');
                    timer = setTimeout(update, Math.min(1000, remaining));
                }

                cinema.open = function (...args) {
                    reset();
                    const result = openCinema.apply(this, args);
                    $(cinema.window?.divMain).find('.tw2gui_inner_window_title').append(view);
                    return result;
                };

                cinema.controller = function (page, ...args) {
                    reset();
                    const result = showCinemaPage.call(this, page, ...args);
                    if (page === 'video') {
                        videoWindow = cinema.window;
                        deadline = performance.now() + duration;
                        button.setVisible(true);
                        update();
                    }
                    return result;
                };

                $(view).css({marginLeft: '20px', marginTop: '-20px', position: 'absolute'});
                $(view).children().last().css({lineHeight: 'normal', paddingTop: '10px'});
                reset();
            },
        };

        TWPT.ZoomMap = {
            init() {
                $(window).bind('mousewheel', (event) => {
                    if ($('#ui_minimap').is(':hover')) {
                        if (event.originalEvent.wheelDelta >= 0) {
                            if (TWPT.currentZoom < 1.95)
                                TWPT.currentZoom += 0.1;
                        } else if (TWPT.currentZoom > 0.75)
                            TWPT.currentZoom -= 0.1;

                        document.getElementById('map').style.zoom =
                            TWPT.currentZoom;
                    }
                });
            },
        };

        TWPT.DisablePremiumNotifications = {
            init() {
                Premium.checkForEnergyPremium = function(
                    callback,
                    failCallback,
                ) {
                    if (typeof failCallback !== 'undefined')
                        return failCallback();

                    return () => {};
                };
                Premium.checkForAutomationPremium = function(
                    callback,
                    failCallback,
                ) {
                    if (typeof failCallback !== 'undefined')
                        return failCallback();

                    return () => {};
                };
            },
        };

        TWPT.NineTimesFifteenButton = {
            init() {
                JobWindow.backup_twpt_initView = JobWindow.initView;
                JobWindow.initView = function() {
                    JobWindow.backup_twpt_initView.apply(this, arguments);
                    const button = new west.gui.Button('9x 15s', () => {
                        button.disable();
                        const jobAmountNum = this.window.divMain.getElementsByClassName(
                            'job-amount-num',
                        )[0];
                        const numberBefore = jobAmountNum.innerHTML;
                        jobAmountNum.innerHTML = '9';
                        $(this.window.divMain)
                            .find('.job_durationbar.job_durationbar_short')
                            .click();
                        setTimeout(() => {
                            button.enable();
                            jobAmountNum.innerHTML = numberBefore;
                        }, 5000);
                    });

                    const buttonDiv = button.getMainDiv();
                    buttonDiv.style['z-index'] = '5';
                    buttonDiv.style.bottom = '25px';
                    buttonDiv.style.left = '300px';
                    this.window.divMain
                        .querySelector('div.tw2gui_window_content_pane')
                        .appendChild(button.getMainDiv());
                };
            },
        };

        TWPT.HideDrawingMap = {
            init() {
                GameLoader.backup_twpt_async = GameLoader.async;
                GameLoader.async = function(message, signal, callback, max) {
                    GameLoader.backup_twpt_async(
                        message,
                        signal,
                        callback,
                        max,
                        true,
                        true,
                    );
                };
            },
        };

        TWPT.ChatImprovements = {
            init() {
                Chat.Resource.Client.prototype.isStranger = function() {
                    return false;
                };
            },
        };

        try {
            TWPT.Settings.init();
            Object.keys(TWPT.defaultPreferences).forEach((property) => {
                if (TWPT.preferences[property]) {
                    try {
                        TWPT[property].init();
                    } catch (err) {
                        console.error(
                            `TWPT Error with feature "${property}".`,
                            err,
                        );
                    }
                }
            });
        } catch (err) {
            console.error('TWPT ERROR', err);
        }
    });
});

  });
  // The West - Essentials | 1.50.5 | Tom Robert (Leotas/Falc0n.RG/neversleep1911/Rask Hund/Esperiano/Dun/Macabre2077)
  start("The West - Essentials", ["^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$", "^https://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/index\\.php\\?page=logout$", "^https://www\\.the\\-west\\.[^/:@]*(?::\\d+)?/.*$", "^https://beta\\.the\\-west\\.net[^/:@]*(?::\\d+)?/.*$", "^https?://tw\\-db\\.info(?::\\d+)?/.*\\?strana=invent\\&x=.*$"], ["^https://classic\\.the\\-west\\.net[^/:@]*(?::\\d+)?/.*$"], function () {
// translation:Tom Robert(German&English),Darius II/Wojcieszy/TeeNOmore127/pantomas(Polish),pepe100/HALCON DE ORO(Spanish),ruud99/Tanais(Dutch),Creature/krcsirke(Hungarian),Timemod Herkumo(Greek),Elly Siranno/Raymond Reddington/jccwest/gamer(Portuguese),Billy-AR/tw81(Italian),Tom Robert/Falc0n.RG/Dun(French),Jamza/Surge(Czech&Slovak),Did97/Macabre2077(Russian),OguzhanCekic/Elderly-Emre(Turkish)
// jshint -W100
(function (fn) {
  var script = document.createElement('script');
  script.setAttribute('type', 'application/javascript');
  script.textContent = '(' + fn.toString() + ')();';
  document.body.appendChild(script);
  document.body.removeChild(script);
})(function () {
  if (location.href.includes('index.php?page=logout')) {
    location.href = '/';
  } else {
    TWX = {
      version: '1.50.5',
      langs: {
        en: {
          language: 'English',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Add a duel map to the duel window',
            MarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
            MarketMessage: 'Get a message when there are items or money to pick up on actual market',
            AchievHide: 'Hide completed achievements in achievements window',
            RecipeMarket: 'Improve the purchase of recipes on market',
            MoveJobs: 'Move the queued jobs a bit to the left',
            InstantQuest: 'Complete the quest instantly if all requirements are done',
            QuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
            CityTravel: 'Show the travel time to the towns in the blackboard',
            BetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
            ChatProfessions: 'Show the crafting profession of the players in the chat list',
            QuestBookSearch: 'Search for solved quests in the quest book',
            MarketRights: 'Show if market offers are public or only for alliance/town members',
            EquipManagerPlus: 'Improve the equipment manager in the inventory',
            ShortPopups: 'Make the item pop-ups shorter',
            HideNotis: 'Add a button to hide the job notifications on the left side',
            JobProducts: 'Show in the job pop-up how many products you already have in your inventory',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control on your mobile browser',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Add a logout button on the right side',
            Statusbar: 'Remove the taskbar',
            ChangeCity: 'Switch title and player name in the town hall',
            BlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
            FortTracker: 'Turn off fort battle reminder',
            FriendsPop: 'Hide "Friend online" pop-ups',
          },
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown2: 'Open ghost town',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown2: 'Open Indian village',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Open market',
          opentrader: 'Open mobile trader',
          forum: 'Open town forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choose language',
          features: 'Features',
          name: 'Name',
          save: 'Save',
          saveMessage: 'Saved successfully',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          bonussearch2: 'Find items by bonus',
          frame2: 'Helpful web pages',
          npclocator2: 'Find quest givers on the map',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          other: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duel map',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Adventures',
            work: '*Work',
            duel: '*Duels',
            energy: '*Energy',
            skill: '*Skill points',
            fk: '*Fort battles',
            speed: '*Speed',
            lp: '*Health points',
            luckNmoney: '*Luck & money',
            workmoti: '*Work motivation',
            duelmoti: '*Duel motivation',
            experience: '*Experience',
            special: '*Premium/special',
            events: '*Events',
            chests: '*Open & unpack',
            equipment: '-Equipment',
            products: '-Products',
            questitems: '-Quest items',
            craftitems: '-Craft items',
            recipes: '-Recipes',
            NAMED: 'NAMED',
            nothingFound: 'No items of this type found!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Quest giver locator',
            chooseNpc: 'Select employer',
            yourposition: 'Your position',
            questgiver: 'Quest giver',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Rank is given!',
            error: 'An error has occured',
            showPlayerOnMap: 'Show player on map',
            showTown: 'Show town overview',
            showAlly: 'Show alliance overview',
            showFort: 'Show fort overview',
            showBattle: 'Show battlefield',
            atFort: 'At the fort',
            nearFort: 'Nearby the fort',
            notFort: 'Not at the fort',
            evaluated: 'Number of evaluated players',
            started: 'The battle is taking place right now',
            remindAlly: 'Remind ally members, who haven\'t participated yet',
            where: 'Where',
            when: 'When',
            att: 'Attackers',
            def: 'Defenders',
            getData: 'Loading rank information',
            appointTo: 'Promote to %1',
            degradeTo: 'Degrade to %1',
            astraitor: 'Mark as %1',
            youcant: 'You can\'t demote fighters of<br>the same or higher rank.',
            position: 'Position',
            notown: 'No town',
            noally: 'No alliance',
            damage: 'Damage',
            flag: 'Flag',
            inside: 'Inside the fort',
            sectors: {
              undef: 'No starting position',
              0: 'The upper-left sector',
              1: 'The lower-left sector',
              2: 'The central left sector',
              3: 'The lower central sector',
              4: 'The central right sector',
              5: 'The lower-right sector',
              6: 'The upper-right sector',
              7: 'Adventurer\'s tower',
              8: 'Dueller\'s tower',
              9: 'Soldier\'s tower',
              10: 'Worker\'s tower',
              11: 'Barracks',
              12: 'Resource stock',
              13: 'Headquarters',
              14: 'North wall',
              15: 'South wall',
              16: 'West wall',
              17: 'East wall',
              18: 'Gate',
              19: 'Flag',
            },
          },
        },
        de: {
          language: 'German (Deutsch)',
          ApiGui1: 'Das Script beinhaltet verschiedene Funktionen, um den Alltag bei The West zu vereinfachen.<br>Weitere Informationen',
          ApiGui2: 'Skriptfenster öffnen',
          Feat: {
            ColorTchat: '%0 Neue Funktionen für den Chat. Farbiger Text, Emojis 🐧🎉 usw.',
            QuickItemsSearch: '%0 Suche nach Buff-Kategorien und Sets in deinem Inventar',
            MarketBestBids: '%0 Färbt die Auktionen dem Preis entsprechend %1 Grün %2 Gebot ist tiefer als der VK (Verkaufspreis) %3 Schwarz %4 Gebot entspricht dem VK %5 Blau %6 Gebot ist zwischen 100% and 200% des VK %7 Rot %8 Gebot ist höher als 200% des VK">',
            BattleStars: '%0 Zusätzliche Statistiken im Fortkampfbericht',
            KickoMatic: '%0 Vereinfacht die Musterung vor einem Fortkampf',
            DuelMap: 'Füge im Duellfenster einen Tab hinzu, der eine Duellkarte zeigt',
            MarkDaily: 'Markiere Täglicher Loginbonus am Tag 5 besonders, um ihn nicht zu übersehen',
            MarketMessage: 'Wenn du an einem Markt stehst, wo etwas abgeholt werden kann, erscheint eine Meldung',
            AchievHide: 'Verstecke alle abgeschlossenen Erfolge im Erfolgsfenster für eine bessere Übersicht',
            RecipeMarket: 'Verbessert den Kauf von Rezepten im Markt',
            MoveJobs: 'Verschiebe eingestellte Arbeiten ein wenig nach links',
            InstantQuest: 'Schliesse die Quest sofort ab, wenn die Voraussetzungen bereits erfüllt sind',
            QuestWiki: 'Füge im Questfenster einen Link hinzu, der die Quest im Wiki zeigt',
            CityTravel: 'Zeige die Reisezeit zu den Städten im Blackboard-Fenster',
            BetterSheriff: 'Erweitere den Sheriff um einen Tab, welcher alle Kopfgelder auflistet',
            ChatProfessions: 'Zeige den Handwerksberuf der Spieler in der Chatliste',
            QuestBookSearch: 'Suche im Questbuch nach abgeschlossenen Quests',
            MarketRights: 'Zeige ob Marktangebote öffentlich oder nur für Allianz-/Stadtmitglieder sind',
            EquipManagerPlus: 'Erweitere den Ausrüstungsmanager im Inventar',
            ShortPopups: 'Mache die Item-Popups kompakter',
            HideNotis: 'Blende Arbeits-Benachrichtigungen am linken Rand mit einem Klick aus',
            JobProducts: 'Zeige bei den Arbeiten, wie viele Produkte du bereits besitzt',
            MapDistance: 'Zeige die Entfernung in Meilen neben der Reisezeit',
            TraderSell: 'Ermöglicht dem Fahrenden Händler mehrere Gegenstände auf einmal zu verkaufen',
            TouchControl: 'Aktiviere Touchsteuerung im mobilen Browser',
            FbRankingChar: 'Zeige die Charakterklasse in der Fortkampf-Weltrangliste',
            DuelXpCalc: 'Zeige die Duellerfahrung in Spielerprofilen',
            ItemNew: 'Markiere Items, welche du nicht besitzt, bei den Händlern und im Markt',
            Logout: 'Erstellt einen Logout-Button rechts in der Menüleiste',
            Statusbar: 'Entfernt die Fensterleiste mit den verschiedenen Tabs im unteren Teil',
            ChangeCity: 'Tausche Titel und Spielername in der Stadthalle',
            BlinkEvents: 'Das Blinken der Event-, Wanderzirkus-Buttons usw. am linken Rand entfernen',
            FortTracker: 'Fortkampftracker abschalten',
            FriendsPop: '"Freund online" Pop-ups deaktivieren',
          },
          settings1: 'Einstellungen öffnen',
          settings2: 'Öffnet das Informations- und Einstellungsfenster',
          ghosttown2: 'Öffne Geisterstadt',
          ghosttown3: 'Öffnet das Fenster der Geisterstadt und zentriert es auf der Map',
          indiantown2: 'Öffne Indianerdorf',
          indiantown3: 'Öffnet das Fenster des Indianerdorfes und zentriert es auf der Map',
          openmarket: 'Öffne Marktfenster',
          opentrader: 'Öffne den Fahrenden Händler',
          forum: 'Öffne Stadtforum',
          newsets: 'Dem Script wurden neue Sets hinzugefügt',
          chooseItems: 'Wähle die Gegenstände aus',
          remindHover: 'Wenn die Gegenstände bereit zum Einsammeln sind, bekommst du einen Hinweis. Hier kannst du diese Items auswählen.',
          remindReady: 'Bereit zum Einsammeln',
          skipHover: 'Überspringe die Bestätigungs- und Resultatsmeldung beim Öffnen bestimmter Taschen. Hier kannst du diese Taschen auswählen.',
          skipDone: 'Du bekommst',
          info: 'Info',
          contact: 'Kontakt',
          chooseLang: 'Sprache auswählen',
          features: 'Features',
          name: 'Name',
          save: 'Speichern',
          saveMessage: 'Speichern erfolgreich',
          saveMessage2: 'Einstellungen gespeichert. Manche Änderungen werden erst nach Neuladen des Spiels sichtbar.',
          setbonus2: 'Lass dir die Boni aller Sets anzeigen',
          bonussearch2: 'Finde Items mit bestimmten Boni',
          frame2: 'Hilfreiche Webseiten',
          npclocator2: 'Finde die Questgeber auf der Karte',
          choose: 'Klicke auf den Hut und wähle aus',
          items: 'Gegenstände',
          parts: 'Teile',
          showItems: 'Zeige die Setgegenstände in deinem Inventar',
          noItems: 'Keine Gegenstände im Inventar gefunden. Klicke erneut mit CTRL, um sie auf TW-Calc anzuzeigen.',
          ownSets: 'Nur eigene Sets',
          switchWeapon: 'Wähle Schuss- oder Schlagwaffe',
          selectBonus: 'Boni auswählen',
          resetB: 'Zurücksetzen',
          body: 'Kleidung',
          right_arm: 'Waffen',
          animal: 'Pferd & Produkt',
          other: 'Andere',
          buff: 'Buffs',
          refresh: 'Aktualisieren',
          noFriends: 'Keine Freunde',
          reward: 'Belohnung',
          allprofessions: 'Alle Berufe',
          market1: 'Gegenstände auf dem Markt',
          market2: 'Es sind noch Gegenstände/Geld auf diesem Markt. Was soll abgeholt werden?',
          all: 'Alles',
          onlyBids: 'Nur Gebote',
          nothing: 'Nichts',
          worldwide: 'Weltweit',
          alliance: 'Allianz',
          town: 'Stadt',
          level: 'Stufe',
          duelLevel: 'Duellstufe',
          exp: 'XP',
          distance: 'Distanz',
          startduel: 'Starte Duell',
          centerMap: 'Zentriere Map',
          popup: 'Fertigkeitenbonus des Gegners',
          damage: 'Schaden',
          duelmap: 'Duellkarte',
          duelradius: 'Duellradius',
          minutes: 'Minuten',
          hour: '1 Stunde',
          hours: 'Stunden',
          searchOpp: 'Duellgegner suchen',
          amount: 'Tot',
          not_dead_amount: 'Lebendig',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sortiere nach',
          tooLow: 'Zu tiefe Duellstufe des Gegners',
          tooHigh: 'Zu hohe Duellstufe des Gegners',
          ownTown: 'Mitbürger deiner Stadt',
          attackable: 'Zeige nur duellierbare Spieler',
          youKO: 'Du hast Duellschutz',
          attDl: 'Angreifbare Duellstufen',
          duelxp: 'Aktuelle Duellerfahrung',
          logout: 'Logout',
          accNfin: 'Quest annehmen & abschließen',
          onWiki: 'Zeige die Quest im Wiki',
          longerName: 'Name muss länger als 2 Zeichen sein',
          loading: 'Lädt...',
          rename: 'Umbenennen',
          newName: 'Neuer Set-Name',
          used: 'Benutzt',
          renameWarning: 'Du ziehst das Set beim Umbenennen an und wieder aus.<br>Möglicherweise verlierst du deswegen Lebenspunkte!',
          sellItems: 'Items dem Händler verkaufen?',
          sellOpt: 'Markiere diese als unverkaufbar',
          sellOpts: {
            sets: 'Setitems',
            named: 'NAMED-Items',
            reps: 'Kleidung für wiederholbare Quests',
            auct: 'nicht-auktionierbare Items',
          },
          sellOptInfo: 'Zudem markiert TW Clothcache beste Arbeitskleidung als unverkaufbar. Siehe Skripteinstellungen:',
          removeWorkNotis: 'Entferne die Arbeits-Benachrichtigungen',
          compInv: 'Klicke auf "Abbrechen, um nur auktionierbare Items anzuzeigen\n oder\nFüge andere Inventar-URL ein, um zu vergleichen',
          loginAll1: 'Alle einloggen',
          loginAll2: 'Lade all deine aktiven Welten mit einem Klick',
          custom1: 'Eigene',
          custom2: 'Deine eigene Login-Liste',
          edit: 'Bearbeiten',
          CT: {
            ColorWindowTitle: 'Color tchat Einstellung',
            ColorWindowPreviewTxt: '*Klicke auf diese Buchstaben, um die aktuell im oberen Feld gewählte Farbe reinzumischen',
            ColorWindowOkBtn: 'Übernehmen',
            ColorWindowToDefaultBtn: 'Zurücksetzen',
            ColorWindowThisTchatBtn: 'Einstellung speichern',
            ColorWindowDefaultText: 'Chaträume auf Standard setzen:',
            ColorWindowBold: 'Fett',
            ColorWindowCaps: 'CAPS LOCK',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Keine Farbe',
              'Eigener Farbcode',
              'rot',
              'braun',
              'violett',
              'blau',
              'grün',
              'pink',
              'magenta',
              'violett wechselnd',
              'blau wechselnd',
              'grün wechselnd',
              'rot wechselnd',
              'hellblau wechselnd',
              'pink wechselnd',
              'hellgrün wechselnd',
              'pink wechselnd',
              'hellrot wechselnd'
            ],
            ColorLoadTitle: 'Klicke, um weitere Farben auszuwählen.<br>Aktueller Farbcode: ',
            ColorSaveEmpty: '[leer]',
            CustomReady: 'Code ok',
            CustomNotReady: 'Ungültig',
          },
          QIS: {
            adventure: '*Abenteuer',
            work: '*Arbeit (AP)',
            duel: '*Duell',
            energy: '*Erholung (EP)',
            skill: '*Fertigkeiten (FP)',
            fk: '*Fortkampf (FK)',
            speed: '*Geschwindigkeit',
            lp: '*Lebenspunkte (LP)',
            luckNmoney: '*Glück & Geld',
            workmoti: '*Arbeitsmotivation',
            duelmoti: '*Duellmotivation',
            experience: '*Erfahrung (XP)',
            special: '*Premium/Special',
            events: '*Events',
            chests: '*Öffnen & Auspacken',
            equipment: '-Ausrüstung',
            products: '-Arbeitsprodukte',
            questitems: '-Questprodukte',
            craftitems: '-Handwerk',
            recipes: '-Rezepte',
            NAMED: 'NAMED',
            nothingFound: 'Keine Gegenstände dieser Art gefunden!',
          },
          NPC: {
            loading: 'Aktuelle Questgeber werden geladen',
            title: 'Questgebersuche',
            chooseNpc: 'Wähle den Questgeber',
            yourposition: 'Eigene Position',
            questgiver: 'Questgeber',
            reload: 'Questgeber neu laden',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Anzahl Schüsse (eingesteckt & ausgewichen) pro 1000 LPs',
            rate: 'Quote',
            hitsTaken: 'Eingesteckte Treffer',
            dodgedShots: 'Schüssen ausgewichen',
            startHP: 'Anfangs-LP',
            survivor: 'SURVIVOR',
            survivorT: 'Überlebender mit den wenigsten LPs am Ende des Fortkampfes',
            endHP: 'LPs am Ende',
            sniper: 'SNIPER',
            sniperT: 'Anzahl erfolgreicher Treffer (in Prozent) im Verhältnis zu allen abgegebenen Schüssen',
            rateP: 'Quote(%)',
            hitCount: 'Trefferanzahl',
            missedShots: 'Fehlschüsse',
            matrix: 'MATRIX',
            matrixT: 'Anzahl Ausweicher (in Prozent) im Verhältnis zu allen Schüssen (eingesteckt & ausgewichen)',
            terminator: 'TERMINATOR',
            terminatorT: 'Anzahl erzielter KOs (in Prozent) im Verhältnis zu den erfolgreichen Treffern',
            KOs: 'KOs',
            ranking: 'Rangliste',
            statsTitle: 'Fortkampfstatistik',
            designation: 'Bezeichnung',
            attack: 'Angriff',
            defense: 'Verteidigung',
            difference: 'Differenz',
            statistics: 'Statistik',
            code: 'Code',
            goBack: 'Zurück',
            starsTitle: 'Die Stars des Kampfes',
            title: 'Titel',
            name: 'Name',
            details: 'Details',
            start: ' LP - Start: ',
            end: ' - Ende: ',
            damageTaken: ' - Unterschied: ',
            avgHP: ' - LP pro Mann: ',
            total: 'Total ',
            average: 'Durchschn. ',
            HP: 'LP',
            damage: 'Schaden',
            avgDamage: 'Durchschn. Schaden',
            avgDamageMax: 'Max Schaden',
            avgWeaponDamage: 'Durchschn Waffenschaden',
            avgWeaponDamageMax: 'Max Schaden der Waffe',
          },
          KoM: {
            success: 'Musterung erfolgreich!',
            error: 'Ein Fehler ist aufgetreten',
            showPlayerOnMap: 'Spieler auf Karte zeigen',
            showTown: 'Stadtübersicht anzeigen',
            showAlly: 'Bündnisübersicht anzeigen',
            showFort: 'Fortübersicht anzeigen',
            showBattle: 'Schlachtfeld öffnen',
            atFort: 'Am Fort',
            nearFort: 'In der Nähe des Forts',
            notFort: 'Nicht am Fort',
            evaluated: 'Anzahl gemusterte Spieler',
            started: 'Die Schlacht ist in vollem Gange',
            remindAlly: 'Informiere Allianzmitglieder, die noch nicht angemeldet sind',
            where: 'Wo',
            when: 'Wann',
            att: 'Angreifer',
            def: 'Verteidiger',
            getData: 'Rang-Informationen werden geladen',
            appointTo: 'Zum %1 befördern',
            degradeTo: 'Zum %1 degradieren',
            astraitor: 'Als %1 markieren',
            youcant: 'Du kannst Kämpfer von gleichem oder<br>höherem Rang nicht degradieren.',
            position: 'Position',
            notown: 'Stadtlos',
            noally: 'Ohne Bündnis',
            damage: 'Schaden',
            flag: 'Flagge',
            inside: 'Innerhalb des Forts',
            sectors: {
              undef: 'Keine Startposition',
              0: 'Sektor oben-links',
              1: 'Sektor unten-links',
              2: 'Sektor mitte-links',
              3: 'Sektor unten-mitte',
              4: 'Sektor mitte-rechts',
              5: 'Sektor unten-rechts',
              6: 'Sektor oben-rechts',
              7: 'Abenteurerturm',
              8: 'Duellantentrum',
              9: 'Soldatenturm',
              10: 'Arbeiterturm',
              11: 'Kaserne',
              12: 'Rohstofflager',
              13: 'Hauptgebäude',
              14: 'Nordwall',
              15: 'Südwall',
              16: 'Westwall',
              17: 'Ostwall',
              18: 'Tor',
              19: 'Flagge',
            },
          },
        },
        pl: {
          language: 'Polish (polski)',
          ApiGui1: 'Skrypt ten zawiera wiele funkcji, aby uprościć codzienne życie na Zachodzie.<br>Więcej informacji',
          ApiGui2: 'Otwórz w nowej karcie',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Dodaje dodatkową zakładkę pojedynków, w pojedynkach.',
            MarkDaily: 'Oznacza dodatkową ramką 5 dzień logowania.',
            MarketMessage: 'Jeżeli znajdujesz się w mieście gdzie coś jest do odebrania. Pojawia się komunikat.',
            AchievHide: 'Ukrywa zaliczone osiągnięcia.',
            RecipeMarket: 'Dodaje dodatkowe przyciski z receptami w karcie targ.',
            MoveJobs: 'Przenieś zadania w kolejce trochę na lewo',
            InstantQuest: 'Wykonaj zadanie natychmiast, gdyby wszystkie wymagania zostały wykonane',
            QuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
            CityTravel: 'Show the travel time to the towns in the blackboard',
            BetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
            ChatProfessions: 'Show the crafting profession of the players in the chat list',
            QuestBookSearch: 'Search for solved quests in the quest book',
            MarketRights: 'Show if market offers are public or only for alliance/town members',
            EquipManagerPlus: 'Improve the equipment manager in the inventory',
            ShortPopups: 'Make the item pop-ups shorter',
            HideNotis: 'Add a button to hide the job notifications on the left side',
            JobProducts: 'Show in the job pop-up how many products you already have in your inventory',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control for map and scrollbar on your mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Dodanie przycisku po prawej stronie, wyloguj się.',
            Statusbar: 'Usuwa pasek z oknami w dolnej części gry.',
            ChangeCity: 'Zamienia tytuł gracza na początku, w karcie graczy w ratuszu.',
            BlinkEvents: 'Zatrzymaj pulsowanie przycisków (zdarzenie, pomoce, ostrzeżenia itp) po lewej stronie',
            FortTracker: 'Wyłącz przypomnienie o bitwie',
            FriendsPop: 'Ukryj "Przyjaciel on-line" pop-ups',
          },
          settings1: 'Otwórz ustawienia',
          settings2: 'Otwiera okno ustawień oraz informacji o skrypcie.',
          ghosttown2: 'Otwórz zadania w Mieście Widmo',
          ghosttown3: 'Otwiera okno z zadaniami w Mieście Widmo',
          indiantown2: 'Otwórz zadania w Wiosce Indiańskiej',
          indiantown3: 'Otwiera okno z zadaniami w Wiosce Indiańskiej.',
          openmarket: 'Otwórz targ',
          opentrader: 'Otwórz handlarza',
          forum: 'Otwórz forum',
          newsets: 'Nowe zestawy są dodawane do skryptu',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Informacja',
          contact: 'Kontakt',
          chooseLang: 'Wybierz język',
          features: 'Ustawienia',
          name: 'Nazwa',
          save: 'Zapisz',
          saveMessage: 'Saved successfully',
          saveMessage2: 'Ustawienia zapisane. Niektóre zmiany potrzebują odświeżenia okna gry.',
          setbonus2: 'Informacje o ustawionych premie',
          bonussearch2: 'Find items by bonus',
          frame2: 'Pomocna stron internetowych',
          npclocator2: 'Find quest givers on the map',
          choose: 'Kliknij na kapelusz i wybierz',
          items: 'przedmioty',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          other: 'Other',
          buff: 'Buffs',
          refresh: 'Odświeżać',
          noFriends: 'Brak przyjaciół',
          reward: 'Nagroda',
          allprofessions: 'Wszystko',
          market1: 'Przedmioty na targu',
          market2: 'Na tym targu znajdują się przedmioty/kasa, odebrać?',
          all: 'Wszystko',
          onlyBids: 'Tylko oferty',
          nothing: 'Nic',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Miasto',
          level: 'Poziom',
          duelLevel: 'Poziom pojedynków',
          exp: 'Exp',
          distance: 'Odległość',
          startduel: 'Akcja',
          centerMap: 'Wyśrodkowanie',
          popup: 'Bonusy umiejętności przeciwnika',
          damage: 'Obrażenia',
          duelmap: 'Mapa pojedynków',
          duelradius: 'Zasięg',
          minutes: 'Minut',
          hour: '1 Godzina',
          hours: 'Godzin',
          searchOpp: 'Szukaj przeciwników',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Logout',
          accNfin: 'Przyjmij & zakończ zadanie',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Załaduj wszystkie aktywne światów za pomocą jednego kliknięcia',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          CT: {
            ColorWindowTitle: 'Ustawienia Koloru Tchat',
            ColorWindowPreviewTxt: '*Kliknij na literę, aby zmienić kolor',
            ColorWindowOkBtn: 'Zastosuj',
            ColorWindowToDefaultBtn: 'Ustaw na domyślny',
            ColorWindowThisTchatBtn: 'Ustaw na ten',
            ColorWindowDefaultText: 'Wybierz tchat, który ma być domyślny: ',
            ColorWindowBold: 'Grubość',
            ColorWindowCaps: 'Wielkie litery',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Bez koloru',
              'Wprowadź kod koloru',
              'Czerwony',
              'Brązowy',
              'Fioletowy',
              'Niebieski',
              'Zielony',
              'Różowy',
              'Purpurowy',
              'Fioletowo gradientowy',
              'Zwietrzały ciemny niebieski',
              'Zielony gradient',
              'Zwietrzały czerwony',
              'Jasnoniebieski gradient',
              'Zwietrzały ciemny różowy',
              'Jasnozielony gradient',
              'Zwietrzały różowy',
              'Jasnoczerwony gradient'
            ],
            ColorLoadTitle: 'Kliknij tutaj, aby załadować inny kod koloru<br>Twój obecny kod koloru jest: ',
            ColorSaveEmpty: '[pusty]',
            CustomReady: 'Prawidłowy Kod',
            CustomNotReady: 'Zły Kod',
          },
          QIS: {
            adventure: '*Przygody',
            work: '*Prace',
            duel: '*Pojedynki',
            energy: '*Energia',
            skill: '*Umiejętności',
            fk: '*Bitwy fortowe',
            speed: '*Prędkość',
            lp: '*HP',
            luckNmoney: '*Luck & money',
            workmoti: '*Motywacja pracy',
            duelmoti: '*Motywacja pojedynków',
            experience: '*Experience',
            special: '*Premia/specjalny',
            events: '*Eventy',
            chests: '*Przedmioty - Skrzynie',
            equipment: '-Ekwipunek',
            products: '-Produkty',
            questitems: '-Przedmiot zlecenia',
            craftitems: '-Rzemiosło',
            recipes: '-Przepisy',
            NAMED: 'NAMED',
            nothingFound: 'Nie posiadasz żadnych przedmiotów tego typu!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Gdzie jest zleceniodawca?',
            chooseNpc: 'Wybierz zleceniodawcę',
            yourposition: 'Twoja pozycja',
            questgiver: 'Zleceniodawca',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Liczba strzałów (przyjętych i unikniętych) na 1000HP',
            rate: 'Średnia',
            hitsTaken: 'Otrzymane ciosy',
            dodgedShots: 'Zadane ciosy',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Osoba z największą ilością HP pod koniec bitwy',
            endHP: 'Końcowe HP',
            sniper: 'SNIPER',
            sniperT: 'Liczba celnych trafień (w procentach) w porównaniu do wszystkich',
            rateP: 'Średnia(%)',
            hitCount: 'Trafione strzały',
            missedShots: 'Chybione strzały',
            matrix: 'MATRIX',
            matrixT: 'Liczba uników (w procentach) w porównaniu do wszystkich otrzymanych strzałów',
            terminator: 'TERMINATOR',
            terminatorT: 'Liczba omdleń (w procentach) w porównaniu do trafionych strzałów',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Statystyki bitwy',
            designation: 'Nazwa',
            attack: 'Atak',
            defense: 'Obrona',
            difference: 'Różnica',
            statistics: 'Statystyki',
            code: 'Kod',
            goBack: 'Wróć',
            starsTitle: 'Gwiazdy podczas bitwy',
            title: 'Tytuł',
            name: 'Nick',
            details: 'Sczegóły',
            start: ' HP - Start: ',
            end: ' - Końcowe: ',
            damageTaken: ' - Obrażenia zadane: ',
            avgHP: ' - Średnie zadane obrażenia: ',
            total: 'Całkowity ',
            average: 'Średni ',
            HP: 'HP',
            damage: 'Obrażenia',
            avgDamage: 'Średnie obrażenia',
            avgDamageMax: 'Największe obrażenia',
            avgWeaponDamage: 'Średnia obrażeń broni',
            avgWeaponDamageMax: 'Największe obrażenia broni',
          },
          KoM: {
            success: 'Ranga została zmieniona!',
            error: 'Wystąpił błąd',
            showPlayerOnMap: 'Pokaż gracza na mapie',
            showTown: 'Pokaż podgląd profilu',
            showAlly: 'Pokaż podgląd sojuszu',
            showFort: 'Pokaż podgląd fortu',
            showBattle: 'Pokaż bitwy',
            atFort: 'W forcie',
            nearFort: 'W pobliżu fortu',
            notFort: 'Nie w forcie',
            evaluated: 'Ocena gracza',
            started: 'Bitwa właśnie się odbywa',
            remindAlly: 'Przypomnij członków sojuszu, którzy nie dotychczas ze',
            where: 'Gdzie',
            when: 'Gdy',
            att: 'Napastnicy',
            def: 'Obrońcy',
            getData: 'Pobieranie danych o rangach',
            appointTo: 'Awans na %1',
            degradeTo: 'Mianowanie na %1',
            astraitor: 'Oznacz jako %1',
            youcant: 'Nie można zmienić ragi, posiadasz<br>niższą lub taką samą rangę.',
            position: 'Pozycja',
            notown: 'No town',
            noally: 'Bez sojuszu',
            damage: 'Obrażenia',
            flag: 'Flaga',
            inside: 'W forcie',
            sectors: {
              undef: 'Źle ustawiony',
              0: 'Lewy górny - 7',
              1: 'Lewy dolny - 6',
              2: 'Dolny lewy - 5',
              3: 'Dolny środkowy - 4',
              4: 'Dolny Prawy - 3',
              5: 'Prawy dolny - 2',
              6: 'Prawy górny - 1',
              7: 'Baszta poszukiwaczy',
              8: 'Baszta zawadiaków',
              9: 'Baszta żołnierzy',
              10: 'Baszta budowniczych',
              11: 'Koszary',
              12: 'Magazyn',
              13: 'Budynek główny',
              14: 'Górny mur',
              15: 'Dolny mur',
              16: 'Lewy mur',
              17: 'Prawy mur',
              18: 'Brama',
              19: 'Flaga',
            },
          },
        },
        es: {
          language: 'Spanish (español)',
          ApiGui1: 'El script incluye varias funciones que simplifican la vida cotidiana en The West.<br>Más información',
          ApiGui2: 'Abrir ventana del script',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Completar la ventana de duelos con una pestaña que muestra el mapa de duelos',
            MarkDaily: 'Marcar el Bonus-Conexión-5 Días especialmente para que no te lo pierdas',
            MarketMessage: 'Si llegas a un mercado donde tienes algo que puede ser recogido, aparece un mensaj',
            AchievHide: 'Ocultar logros completados en la ventana de logros para una mejor visión',
            RecipeMarket: 'Mejorar la compra de recetas en el mercado',
            MoveJobs: 'Mover los trabajos en cola un poco a la izquierda',
            InstantQuest: 'Completar la misión al instante si se cumplen todos los requisitos',
            QuestWiki: 'Agregar un enlace en la ventana de búsqueda para mostrar la búsqueda en la Wiki',
            CityTravel: 'Mostrar el tiempo de viaje a las ciudades en la pizarra',
            BetterSheriff: 'Añadir una nueva pestaña en la ventana del sheriff para ver todas las recompensas posibles',
            ChatProfessions: 'Mostrar el oficio de los jugadores en la lista del chat',
            QuestBookSearch: 'Buscar misiones terminadas en libro de misiones',
            MarketRights: 'Mostrar si las ofertas de mercado son públicas o solo para los miembros de la Alianza/Ciudad',
            EquipManagerPlus: 'Mejorar el administrador de equipos en el inventario',
            ShortPopups: 'Hacer los pop-ups de articulos más cortos',
            HideNotis: 'Agregar un botón para ocultar las notificaciones de trabajo en el lado izquierdo',
            JobProducts: 'Mostrar en la ventana emergente de trabajo cuántos productos tienes en tu inventario',
            MapDistance: 'Mostrar la cantidad de millas al lado del tiempo de viaje',
            TraderSell: 'Vender varios artículos a la vez al comerciante',
            TouchControl: 'Habilitar el control táctil para el mapa y la barra de desplazamiento en su dispositivo móvil',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Crea un botón de cierre de sesión a la derecha en la barra de menús',
            Statusbar: 'Oculta la barra inferior de las ventanas',
            ChangeCity: 'Cambiar título y nombre del jugador en el ayuntamiento',
            BlinkEvents: 'Detener el parpadeo de los botones de Evento y Feria de Condado en el lado izquierdo',
            FortTracker: 'Apagar el recordatorio de Batalla de fuerte',
            FriendsPop: 'Esconder ventana emergente de "Amigo conectado"',
          },
          settings1: 'Abrir preferencias',
          settings2: 'Abrir la ventana de información y ajustes',
          ghosttown2: 'Abrir Ciudad Fantasma',
          ghosttown3: 'Abrir la ventana de la Ciudad Fantasma y centrarla en el mapa',
          indiantown2: 'Abrir Pueblo Indio Waupee',
          indiantown3: 'Abrir la ventana del Pueblo Indio Waupee y centrarla en el mapa',
          openmarket: 'Abrir Mercado',
          opentrader: 'Abrir Comerciante Ambulante',
          forum: 'Abrir el foro de la ciudad',
          newsets: 'Nuevos conjuntos añadidos al script',
          chooseItems: 'Elegir los artículos',
          remindHover: 'Recibir una notificación cuando un artículo puede volverse a usar. Aquí puedes elegir estos artículos.',
          remindReady: 'Listo para recoger',
          skipHover: 'Omitir los mensajes de confirmación y resultado cuando abres algunas bolsas. Aquí puedes elegir estas bolsas',
          skipDone: 'Obtienes',
          info: 'Información',
          contact: 'Contacto',
          chooseLang: 'Elige idioma',
          features: 'Funciones',
          name: 'Nombre',
          save: 'Guardar',
          saveMessage: 'Grabado con éxito',
          saveMessage2: 'Ajustes guardados. Algunos cambios necesitan una actualización de la ventana de juego.',
          setbonus2: 'Información acerca de los bonus de conjunto',
          bonussearch2: 'Find items by bonus',
          frame2: 'Páginas web votos',
          npclocator2: 'Find quest givers on the map',
          choose: 'Haga clic en el sombrero y elegir',
          items: 'artículos',
          parts: 'partes',
          showItems: 'Mostrar los artículos del conjunto en tu bolsa',
          noItems: '¡No se han encontrado artículos de este conjunto!',
          ownSets: 'Solo conjuntos propios',
          switchWeapon: 'Cambiar entre arma de fuego y arma contundente',
          selectBonus: 'Seleccionas bonus',
          resetB: 'Reiniciar',
          body: 'Ropa',
          right_arm: 'Armas',
          animal: 'Montura y Producto',
          other: 'Otros',
          refresh: 'Actualizar',
          noFriends: 'Sin Amigos',
          reward: 'Recompensa',
          allprofessions: 'Todos Oficios',
          market1: 'Productos en el Mercado',
          market2: 'Todavía hay productos/dinero en el Mercado. ¿Desea recogerlos?',
          all: 'Todos',
          onlyBids: 'Solo Ofertas',
          nothing: 'Ninguno',
          worldwide: 'Mundo',
          alliance: 'Alianza',
          town: 'Ciudad',
          level: 'Nivel',
          duelLevel: 'Nivel Duelo',
          exp: 'Exp',
          distance: 'Distancia',
          startduel: 'Iniciar Duelo',
          centerMap: 'Centrar Mapa',
          popup: 'El bonus de habilidad del oponente',
          damage: 'Daño',
          duelmap: 'Mapa Duelos',
          duelradius: 'Radio duelos',
          minutes: 'Minutos',
          hour: '1 Hora',
          hours: 'Horas',
          searchOpp: 'Buscar Duelo',
          amount: 'Muerto',
          not_dead_amount: 'Vivo',
          duellevel: 'Niv',
          pStatus: 'Estado',
          sortBy: 'Ordenar por',
          tooLow: 'Nivel de duelo del oponente demasiado bajo',
          tooHigh: 'Nivel de duelo del oponente demasiado alto',
          ownTown: 'Miembro de tu ciudad',
          attackable: 'Mostrar solo jugadores atacables',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Cerrar sesión',
          accNfin: 'Aceptar & concluir búsqueda',
          onWiki: 'Mostrar la búsqueda en la Wiki',
          longerName: 'El nombre debe tener más de 2 caracteres',
          loading: 'Cargando...',
          rename: 'Renombrar',
          newName: 'Elige un nuevo nombre de conjunto',
          used: 'Usado',
          renameWarning: 'Cuando renombre un conjunto, se lo pondrá y se lo quitará de nuevo.<br>¡Puede perder puntos de vida durante el proceso!',
          sellItems: '¿Vender artículos al comerciante?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Ocultar todas las notificaciones de trabajo',
          compInv: 'Haga clic en "cancelar" para mostrar solo los artículos subastables \n o \n Ingrese otra URL de inventario para comparar',
          loginAll1: 'Conectarse a todos los mundos',
          loginAll2: 'Cargar todos los mundos activos con un solo click',
          custom1: 'Personalizar',
          custom2: 'Tu lista de conexión personalizada',
          edit: 'Editar',
          CT: {
            ColorWindowTitle: 'Configurar Color tchat',
            ColorWindowPreviewTxt: '*Haga clic en la carta de un cambio de color',
            ColorWindowOkBtn: 'Aplicar',
            ColorWindowToDefaultBtn: 'Color por defecto',
            ColorWindowThisTchatBtn: 'Elegir este color',
            ColorWindowDefaultText: 'Seleccione la tchat para restablecer a los valores predeterminados',
            ColorWindowBold: 'En negrita',
            ColorWindowCaps: 'Capitalizado',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No hay color',
              'Introduzca un código de color',
              'rojo',
              'marrón',
              'morado',
              'azul',
              'verde',
              'rosa',
              'magenta',
              'gradiente violeta',
              'degradado rosa',
              'degradado azul marino',
              'gradient',
              'rojo degradado',
              'luz azul degradado',
              'gradiente de luz verde',
              'rosa degradado',
              'luz pendiente roja'
            ],
            ColorLoadTitle: 'Haga clic para cargar otro código de colores<br>El código de color actual es: ',
            ColorSaveEmpty: '[vacío]',
            CustomReady: 'Código válido',
            CustomNotReady: 'No válido',
          },
          QIS: {
            adventure: '*Buffs de Aventuras',
            work: '*Buffs de Trabajo',
            duel: '*Buffs de Duelo',
            energy: '*Buffs Energía',
            skill: '*Buffs de Habilidades',
            fk: '*Buffs de Batalla',
            speed: '*Buffs de Velocidad',
            lp: '*Buffs de Salud',
            luckNmoney: '*Suerte y Dinero',
            workmoti: '*Motivación trabajo ',
            duelmoti: '*Motivación duelo',
            experience: '*Experiencia',
            special: '*Premio/especial',
            events: '*Eventos',
            chests: '*Cajas y cofres',
            equipment: '-Equipo',
            products: '-Productos',
            questitems: '-Objetos de búsqueda',
            craftitems: '-Artesano',
            recipes: '-Recetas',
            NAMED: 'NAMED',
            nothingFound: 'No tienes de este tipo!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Dador de búsqueda',
            chooseNpc: 'Seleccionar empleador',
            yourposition: 'Tu posición',
            questgiver: 'Dador de búsqueda',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HÉROE',
            heroT: 'Tasa de tiros absorbidos (recibidos + eludidos) sobre los PV inicial',
            rate: 'Tasa',
            hitsTaken: 'Nº Aciertos recibidos',
            dodgedShots: 'Nº Eludidos',
            startHP: 'Vida Inicial',
            survivor: 'SUPERVIVIENTE',
            survivorT: 'El que termina con menos puntos de vida final',
            endHP: 'Vida Final',
            sniper: 'FRANCOTIRADOR',
            sniperT: 'Porcentaje de aciertos realizados sobre el total de tiros realizados (aciertos + fallos)',
            rateP: 'Tasa(%)',
            hitCount: 'Nº Aciertos',
            missedShots: 'Nº Fallos',
            matrix: 'MATRIX',
            matrixT: 'Porcentaje de tiros eludidos sobre el total de tiros recibidos',
            terminator: 'TERMINATOR',
            terminatorT: 'Porcentaje de Kos conseguidos sobre aciertos realizados',
            KOs: 'Kos efectuados',
            ranking: 'Classement',
            statsTitle: 'Estadísticas de la Batalla',
            designation: 'Estadística',
            attack: 'Ataque',
            defense: 'Defensa',
            difference: 'Diferencia',
            statistics: 'Estadística',
            code: 'Formato Foro',
            goBack: 'Volver',
            starsTitle: 'Las Estrellas de la Batalla',
            title: 'Titre',
            name: 'Nombre',
            details: 'Detalles',
            start: ' PV - Inicial: ',
            end: ' - Final: ',
            damageTaken: ' - Daño recibido: ',
            avgHP: ' - PV por luchador: ',
            total: 'Total ',
            average: 'Promedio ',
            HP: 'PV',
            damage: 'daño',
            avgDamage: 'Daño medio',
            avgDamageMax: 'Daño max. medio',
            avgWeaponDamage: 'Daño por arma medio',
            avgWeaponDamageMax: 'Daño por arma max. medio',
          },
          KoM: {
            success: 'Rango asignado!',
            error: 'Un error ha ocurrido',
            showPlayerOnMap: 'Mostrar jugador en el mapa',
            showTown: 'Mostrar resumen de ciudad',
            showAlly: 'Mostrar resumen de alianza',
            showFort: 'Mostrar resumen del fuerte',
            showBattle: 'Mostrar campo de batalla',
            atFort: 'En el fuerte',
            nearFort: 'Cerca del fuerte',
            notFort: 'No en el fuerte',
            evaluated: 'Evaluar jugador',
            started: 'La batalla ya ha comenzado',
            remindAlly: 'Recuerde a los miembros de la alianza, que todavía no han participado',
            where: 'Dónde',
            when: 'Cuando',
            att: 'atacantes',
            def: 'defensores',
            getData: 'Información del rango cargada',
            appointTo: 'Promocionar a %1',
            degradeTo: 'Designar como %1',
            astraitor: 'Marcar como %1',
            youcant: 'No se pueden disminuir los combatientes<br>con igual o superior rango.',
            position: 'Posición',
            notown: 'Sin ciudad',
            noally: 'Sin alianza',
            damage: 'Daño',
            flag: 'Bandera',
            inside: 'Dentro del fuerte',
            sectors: {
              undef: 'Sin posición de partida',
              0: 'El sector superior izquierdo',
              1: 'El sector central izquierdo',
              2: 'El sector inferior izquierdo',
              3: 'El sector central inferior',
              4: 'El sector inferior derecho',
              5: 'El sector central derecho',
              6: 'El sector superior derecho',
              7: 'Torre Aventureros',
              8: 'Torre Duelistas',
              9: 'Torre Soldados',
              10: 'Torre Trabajadores',
              11: 'Barracas',
              12: 'Almacén de recursos',
              13: 'Cuartel general',
              14: 'Muralla Norte',
              15: 'Muralla Sur',
              16: 'Muralla Oeste',
              17: 'Muralla Este',
              18: 'Puerta',
              19: 'Bandera',
            },
          },
        },
        nl: {
          language: 'Dutch (Nederlands)',
          ApiGui1: 'Dit script bevat veel mogelijkheden om het dagelijks leven in The West te vergemakkelijken.<br>Voor meer informatie',
          ApiGui2: 'Open script pagina',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Voeg een duelkaart toe aan de duel tab',
            MarkDaily: 'Markeer de dagelijkse inlogbonus op de 5e dag zodat je hem niet mist',
            MarketMessage: 'Krijg een bericht wanneer er voorwerpen of geld beschikbaar zijn om op te halen',
            AchievHide: 'Verberg voltooide prestaties in prestatiescherm',
            RecipeMarket: 'Verbeter overzicht voor recepten kopen.',
            MoveJobs: 'Verschuif de werkzaamheden in de wachtrij een stukje naar links',
            InstantQuest: 'Voltooi de quest direct als aan alle vereisten is gedaan',
            QuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
            CityTravel: 'Show the travel time to the towns in the blackboard',
            BetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
            ChatProfessions: 'Show the crafting profession of the players in the chat list',
            QuestBookSearch: 'Search for solved quests in the quest book',
            MarketRights: 'Show if market offers are public or only for alliance/town members',
            EquipManagerPlus: 'Improve the equipment manager in the inventory',
            ShortPopups: 'Make the item pop-ups shorter',
            HideNotis: 'Add a button to hide the job notifications on the left side',
            JobProducts: 'Show in the job pop-up how many products you already have in your inventory',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control for map and scrollbar on your mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Voeg een afmeldknop toe aan de rechterzijde van het scherm',
            Statusbar: 'Verwijder het dagelijkse taken icoon',
            ChangeCity: 'Verwissel de titel en de spelersnaam in het  stadhuis',
            BlinkEvents: 'Stop het knipperen van event of circus knop aan linkerkant',
            FortTracker: 'Schakel de fortgevecht herinnering uit',
            FriendsPop: 'Verberg “uw vriend logt in” pop-ups',
          },
          settings1: 'Instellingen openen',
          settings2: 'Instellingen en informatiescherm openen',
          ghosttown2: 'Open Spookstad',
          ghosttown3: 'Open Spookstad en centreer het op de kaart',
          indiantown2: 'Open Waupees indianendorp',
          indiantown3: 'Open Waupees indianendorp en centreer het op de kaart',
          openmarket: 'Open markt',
          opentrader: 'Open mobile trader',
          forum: 'Open stadsforum',
          newsets: 'Nieuwe sets worden toegevoegd aan het script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Informatie',
          contact: 'Contact',
          chooseLang: 'Kies een taal',
          features: 'Features',
          name: 'Naam',
          save: 'Opslaan',
          saveMessage: 'Sparen succes',
          saveMessage2: 'Instellingen toegevoegd. Sommige veranderingen hebben behoefte aan een refresh van het spel venster.',
          setbonus2: 'Informatie over de set bonusen',
          bonussearch2: 'Find items by bonus',
          frame2: 'Nuttige websites',
          npclocator2: 'Find quest givers on the map',
          choose: 'Klik op de hoed en kies',
          items: 'Voorwerpen',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          other: 'Other',
          buff: 'Buffs',
          refresh: 'Verversen',
          noFriends: 'Geen vrienden',
          reward: 'Beloning',
          allprofessions: 'Alle Beroepen',
          market1: 'Voorwerpen op de markt',
          market2: 'Er zijn voorpen/geld op de markt. Wat wil je eraf halen?',
          all: 'Alles',
          onlyBids: 'Alleen biedingen',
          nothing: 'Niets',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Stad',
          level: 'Level',
          duelLevel: 'Duel level',
          exp: 'Ervaring',
          distance: 'Afstand',
          startduel: 'Duelleren',
          centerMap: 'Centreer kaart',
          popup: 'Vaardigheden-Bonus van de tegenstander',
          damage: 'Schade',
          duelmap: 'Duelkaart',
          duelradius: 'Duel radius',
          minutes: 'minuten',
          hour: '1 uur',
          hours: 'uren',
          searchOpp: 'Zoek naar tegenstanders',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Afmelden',
          accNfin: 'Opdracht aannemen & afsluiten',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Laad al uw actieve werelden met één klik',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Avontuur',
            work: '*Werkzaamheid',
            duel: '*Duels',
            energy: '*Actiepunten',
            skill: '*Vaardigheden',
            fk: '*Fort gevechten',
            speed: '*Snelheid',
            lp: '*Levenspunten',
            luckNmoney: '*Luck & money',
            workmoti: '*Arbeidsmotivatie',
            duelmoti: '*Duel motivatie',
            experience: '*Experience',
            special: '*Premium/speciaal',
            events: '*Events',
            chests: '*Openen',
            equipment: '-Uitrusting',
            products: '-Producten',
            questitems: '-Opdracht gerelateerde voowerpen',
            craftitems: '-Handwerk',
            recipes: '-Recepten',
            NAMED: 'NAMED',
            nothingFound: 'Er kon geen voorwerp van dit type worden!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Quest giver locator',
            chooseNpc: 'Select employer',
            yourposition: 'Your position',
            questgiver: 'Quest giver',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Rang wordt gegeven!',
            error: 'Er is een fout opgetreden',
            showPlayerOnMap: 'Laat speler zien op de map',
            showTown: 'Stadsoverzicht tonen',
            showAlly: 'Alliantie overzicht tonen',
            showFort: 'Fort overzicht tonen',
            showBattle: 'Show slagveld',
            atFort: 'Bij het fort',
            nearFort: 'Dichtbij het fort',
            notFort: 'Niet bij het fort',
            evaluated: 'Evalueer speler',
            started: 'Het gevecht is volop bezig',
            remindAlly: 'Herinner alliantieleden, die nog niet hebben deelgenomen',
            where: 'Waarin',
            when: 'Wanneer',
            att: 'Aanvallers',
            def: 'Verdedigers',
            getData: 'Ranginformatie aan het laden',
            appointTo: 'Tot %1 bevorderen',
            degradeTo: 'Tot %1 benoemen',
            astraitor: 'Als %1 markeren',
            youcant: 'Je kan geen spelers met dezelfde<br>of een hogere rang rekruteren.',
            position: 'Positie',
            notown: 'No town',
            noally: 'Geen alliantie',
            damage: 'Schade',
            flag: 'Vlag',
            inside: 'Binnen het fort',
            sectors: {
              undef: 'Geen startpositie',
              0: 'De sector links boven',
              1: 'De centraal linker sector',
              2: 'De sector linksonder',
              3: 'De sector midden onder',
              4: 'De sector rechtsonder',
              5: 'De centraal rechter sector',
              6: 'De sector rechtsboven',
              7: 'Avonturierstoren',
              8: 'Duellantentoren',
              9: 'Soldatentoren',
              10: 'Arbeiderstoren',
              11: 'Kazerne',
              12: 'Opslagplaats',
              13: 'Hoofdgebouw',
              14: 'Bovenmuur',
              15: 'Ondermuur',
              16: 'Linkermuur',
              17: 'Rechtermuur',
              18: 'Poort',
              19: 'Vlag',
            },
          },
        },
        hu: {
          language: 'Hungarian (Magyar)',
          ApiGui1: 'Ez a szkript több olyan funkciót tartalmaz ami megkönnyíti a mindennapjaidat a vadnyugaton.<br>Több információ',
          ApiGui2: 'Szkript oldalának megnyitása',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Párbajtérkép a párbaj ablakban',
            MarkDaily: 'Az 5. napi belépés bónusz bekeretezése, hogy nehogy kihagyd',
            MarketMessage: 'Felugró ablak amikor tárgyak vagy pénz felvétele lehetséges az aktuális piacnál',
            AchievHide: 'Befejezett események elrejtése az esemény ablakban',
            RecipeMarket: 'Receptvásárlás megkönnyítése, rendezése a piacon',
            MoveJobs: 'Mozgassa el a munka várólistát kissé balra hogy elférjenek az ikonok',
            InstantQuest: 'Befejezni a küldetést, azonnal, ha minden feltétel kész',
            QuestWiki: 'Link hozzáadása a kalandablakban, amin elérhető a kaland wikioldala',
            CityTravel: 'Távolság a várostól mutatása a hirdetőtáblán',
            BetterSheriff: 'Új lap hozzáadása a Seriff ablakban, láthatóvá téve az összes körözöttet',
            ChatProfessions: 'Mesterségek mutatása a játékosoknál a chat partnerlistánál',
            QuestBookSearch: 'Keresés a befejezett kalandoknál a kalandkönyvben',
            MarketRights: 'Piaci ajánlatoknál mutatása, hogy bárki számára elérhető vagy csak szövetség/város tagok számára',
            EquipManagerPlus: 'Felszerelés kezelő ablak fejlesztése',
            ShortPopups: 'Tárgy felugró menüjének rövidítése',
            HideNotis: 'Bal oldalon lévő munkaértesítéseket eltüntető gomb hozzáadása',
            JobProducts: 'Munkáknál felugró menüben mutassa, mennyi terméked van már a felszerelésedben, ami az adott munkánál található',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control for map and scrollbar on your mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Kilépés gomb a jobb oldalra',
            Statusbar: 'Tálca eltüntetése',
            ChangeCity: 'Cím és játékosnév felcserélése a városházánál',
            BlinkEvents: 'Események, eladás és piaci vásár gomb villogás kikapcsolása',
            FortTracker: 'Kapcsolja ki az erődharc emlékeztetőt',
            FriendsPop: 'Rejtse el a "barátod bejelentkezett" felugró ablakokat',
          },
          settings1: 'Beállítások megnyitása',
          settings2: 'Beállítások és információk',
          ghosttown2: 'Szellemváros megnyitása',
          ghosttown3: 'Szellemváros megnyitása és ráközelítés térképen',
          indiantown2: 'Indián falu megnyitása',
          indiantown3: 'Indián falu megnyitása és ráközelítés térképen',
          openmarket: 'Piac megnyitása',
          opentrader: 'Utazó kereskedő megnyitása',
          forum: 'Városfórum megnyitása',
          newsets: 'Új szett(ek) lettek hozzáadva a szkripthez',
          chooseItems: 'Válasz tárgyat',
          remindHover: 'Értesítést kapsz, amint egy tárgy ismét használható. Itt tudod kiválasztani melyik tárgyakról szeretnél értesítést kapni.',
          remindReady: 'Begyűjtésre készen áll',
          skipHover: 'Táskák nyitásánál megerősítő és jutalom üzenet figyelem kívül hagyása. Itt tudod kiválasztani melyik táska nyitásról ne kapj üzenetet.',
          skipDone: 'Ezt kapod',
          info: 'Információk',
          contact: 'Elérhetőségek',
          chooseLang: 'Válasszon nyelvet',
          features: 'Funkciók',
          name: 'Név',
          save: 'Mentés',
          saveMessage: 'Sikeres mentés',
          saveMessage2: 'Beállítások elmentve. Néhány változás életbe lépéséhez frissítse a játék ablakát.',
          setbonus2: 'Információk a szettbónuszokról',
          bonussearch2: 'Find items by bonus',
          frame2: 'Hasznos weboldalak',
          npclocator2: 'Find quest givers on the map',
          choose: 'Kattints a kalapra a kezdéshez, választáshoz',
          items: 'tárgyak',
          parts: 'darabok',
          showItems: 'Mutassa a szett tárgyakat a felszerelésedben',
          noItems: 'Nem található tárgy(ak) a felszerelésedben',
          ownSets: 'Csak a megszerzett szettek',
          switchWeapon: 'Váltás lőfegyver és ütőfegyver közt',
          selectBonus: 'Válasz bónuszt',
          resetB: 'Visszaállítás',
          body: 'Ruházat',
          right_arm: 'Párbajfegyver',
          animal: 'Állat',
          other: 'Egyéb',
          buff: 'Buffs',
          refresh: 'Újratöltés',
          noFriends: 'Nincsenek barátok',
          reward: 'Díjak',
          allprofessions: 'Minden szakma',
          market1: 'Áruk a piacon',
          market2: 'Vannak Áruk/Pénz ezen a piacon. Mit szeretnél átvenni? ',
          all: 'Mindent',
          onlyBids: 'Árukat',
          nothing: 'Semmit',
          worldwide: 'Világ',
          alliance: 'Szövetség',
          town: 'Város',
          level: 'Szint',
          duelLevel: 'Párbajszint',
          exp: 'Tp',
          distance: 'Távolság',
          startduel: 'Párbaj kezdése',
          centerMap: 'Térkép közepére',
          popup: 'Az ellenfél bónusza',
          damage: 'Sebzés',
          duelmap: 'Párbajtérkép',
          duelradius: 'Párbaj sugár',
          minutes: 'perc',
          hour: '1 óra',
          hours: 'óra',
          searchOpp: 'Ellenfél keresése',
          amount: 'Halva',
          not_dead_amount: 'Élve',
          duellevel: 'Szint',
          pStatus: 'Státusz',
          sortBy: 'Rendezés',
          tooLow: 'Túl alacsony a párbajszintje az ellenfélnek',
          tooHigh: 'Túl magas a párbajszintje az ellenfélnek',
          ownTown: 'Városod tagja',
          attackable: 'Csak a kihívható ellenfeleket mutassa',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Kijelentkezés',
          accNfin: 'Kaland elfogadása & lezárása',
          onWiki: 'Kaland mutatása a wikin',
          longerName: 'Névnek két karakternél hosszabbnak kell lennie',
          loading: 'Töltés...',
          rename: 'Átnevezés',
          newName: 'Válasz új nevet a szettnek',
          used: 'Használt',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Összes munkaértesítés elrejtése',
          compInv: 'Kattints a "mégse" gombra hogy csak az árverezhető tárgyakat mutassa\n vagy\nHozzáadd egy másik táska URL címét összehasonlításként',
          loginAll1: 'Összes világba bejelentkezés',
          loginAll2: 'Betölti az összes aktív világok egyetlen kattintással',
          custom1: 'Egyedi',
          custom2: 'Egyedi bejelentkezési listád',
          edit: 'Szerkesztés',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Adventures',
            work: '*Work',
            duel: '*Duels',
            energy: '*Energy',
            skill: '*Skill points',
            fk: '*Fort battles',
            speed: '*Speed',
            lp: '*Health points',
            luckNmoney: '*Luck & money',
            workmoti: '*Work motivation',
            duelmoti: '*Duel motivation',
            experience: '*Experience',
            special: '*Premium/special',
            events: '*Events',
            chests: '*Open & unpack',
            equipment: '-Equipment',
            products: '-Products',
            questitems: '-Quest items',
            craftitems: '-Craft items',
            recipes: '-Recipes',
            NAMED: 'NAMED',
            nothingFound: 'No items of this type found!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Quest giver locator',
            chooseNpc: 'Select employer',
            yourposition: 'Your position',
            questgiver: 'Quest giver',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Rank is given!',
            error: 'An error has occured',
            showPlayerOnMap: 'Show player on map',
            showTown: 'Show town overview',
            showAlly: 'Show alliance overview',
            showFort: 'Show fort overview',
            showBattle: 'Show battlefield',
            atFort: 'At the fort',
            nearFort: 'Nearby the fort',
            notFort: 'Not at the fort',
            evaluated: 'Number of evaluated players',
            started: 'The battle is taking place right now',
            remindAlly: 'Remind ally members, who haven\'t participated yet',
            where: 'Where',
            when: 'When',
            att: 'Attackers',
            def: 'Defenders',
            getData: 'Loading rank information',
            appointTo: 'Promote to %1',
            degradeTo: 'Degrade to %1',
            astraitor: 'Mark as %1',
            youcant: 'You can\'t demote fighters of<br>the same or higher rank.',
            position: 'Position',
            notown: 'No town',
            noally: 'No alliance',
            damage: 'Damage',
            flag: 'Flag',
            inside: 'Inside the fort',
            sectors: {
              undef: 'No starting position',
              0: 'The upper-left sector',
              1: 'The lower-left sector',
              2: 'The central left sector',
              3: 'The lower central sector',
              4: 'The central right sector',
              5: 'The lower-right sector',
              6: 'The upper-right sector',
              7: 'Adventurer\'s tower',
              8: 'Dueller\'s tower',
              9: 'Soldier\'s tower',
              10: 'Worker\'s tower',
              11: 'Barracks',
              12: 'Resource stock',
              13: 'Headquarters',
              14: 'North wall',
              15: 'South wall',
              16: 'West wall',
              17: 'East wall',
              18: 'Gate',
              19: 'Flag',
            },
          },
        },
        el: {
          language: 'Greek (ελληνικά)',
          ApiGui1: 'Αυτό το script περιέχει πολλά χαρακτηριστικά για να απλοποιήσετε την ζωή σας στο The West.<br>Περισσότερες πληροφορίες',
          ApiGui2: 'Ρυθμίσεις του script',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Προσθήκη καρτέλας Duelmap στην καρτέλα μονομαχιών',
            MarkDaily: 'Επισημάνετε το καθημερινό μπόνους σύνδεσης την 5η ημέρα για να μην το χάσετε',
            MarketMessage: 'Εμφάνιση μηνύματος όταν υπάρχουν αντικείμενα ή χρήματα στην αγορά της πόλης που μόλις ταξιδέψατε',
            AchievHide: 'Απόκρυψη ολοκληρωμένων επιτευγμάτων στο παράθυρο επιτευγμάτων',
            RecipeMarket: 'Βελτιώστε την αγορά συνταγών στην αγορά',
            MoveJobs: 'Μετακινήστε την καρτέλα των τρέχουσων εργασιών λίγο προς τα αριστερά',
            InstantQuest: 'Ολοκληρώστε μια αποστολή αμέσως αν πληρούνται όλες οι απαιτήσεις',
            QuestWiki: 'Προσθήκη ενός κουμπιού στις αποστολές για την εμφάνισή τους στην σελίδα "Βοήθειας"',
            CityTravel: 'Εμφάνιση του χρόνου ταξιδιού στις πόλεις του μαυροπίνακα',
            BetterSheriff: 'Προσθήκη μιας νέας καρτέλας στο παράθυρο του "Σερίφη" για να δείτε όλες τις πιθανές επικυρήξεις',
            ChatProfessions: 'Προσθήκη του εικονιδίου επαγγέλματος των παικτών στη λίστα συνομιλίας (τσατ)',
            QuestBookSearch: 'Αναζήτηση για επιλυμένες αποστολές στο βιβλίο αποστολών',
            MarketRights: 'Προσθήκη εικονιδίου για το εάν οι προσφορές της αγοράς είναι δημόσιες ή μόνο για μέλη της συμμαχίας / πόλης',
            EquipManagerPlus: 'Βελτιώστε τον υπεύθυνο εξοπλισμού στα αποθέματα',
            ShortPopups: 'Εμφάνιση μικρότερης περιγραφής αντικειμένων στα αποθέματα',
            HideNotis: 'Προσθήκη ενός κουμπιού για την απόκρυψη των ειδοποιήσεων εργασίας στην αριστερή πλευρά',
            JobProducts: 'Εμφανίστε στο αναδυόμενο παράθυρο εργασίας πόσα προϊόντα έχετε ήδη στα αποθέματά σας',
            MapDistance: 'Εμφάνιση της απόστασης του ταξιδιού σας σε Μίλια',
            TraderSell: 'Πώληση πολλαπλών αντικειμένων στον Έμπορο',
            TouchControl: 'Enable touch control for map and scrollbar on your mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Προσθέστε ένα κουμπί αποσύνδεσης στη δεξιά πλευρά',
            Statusbar: 'Αφαιρέστε τη γραμμή εργασιών',
            ChangeCity: 'Βάλτε τον τίτλο πριν από το όνομα του παίκτη στην καρτέλα του Δημαρχείου',
            BlinkEvents: 'Σταματήστε την αναλαμπή των Εκδηλώσεων και του Λούνα Παρκ στην αριστερή πλευρά',
            FortTracker: 'Απενεργοποιήστε την υπενθύμιση μάχης οχυρού',
            FriendsPop: 'Απόκρυψη αναδυόμενων παραθύρων "Συνδεδεμένοι φίλοι"',
          },
          settings1: 'Ρυθμίσεις',
          settings2: 'Ανοίξτε τις ρυθμίσεις και το παράθυρο πληροφοριών',
          ghosttown2: 'Άνοιγμα της Πόλης Φάντασμα',
          ghosttown3: 'Άνοιγμα και κεντράρισμα του χάρτη στην Πόλη Φάντασμα',
          indiantown2: 'Άνοιγμα του Ινδιάνικου χωριού',
          indiantown3: 'Άνοιγμα και κεντράρισμα του χάρτη στο Ινδιάνικο χωριό',
          openmarket: 'Άνοιγμα της Αγοράς',
          opentrader: 'Άνοιξε τον Πλανόδιο Πωλητή',
          forum: 'Άνοιγμα του Φόρουμ Πόλης',
          newsets: 'Νέα Σετ προσθέθηκαν στο script',
          chooseItems: 'Επιλέξτε τα αντικείμενα',
          remindHover: 'Λαμβάνετε μια ειδοποίηση όταν ένα αντικείμενο μπορεί να χρησιμοποιηθεί ξανά. Εδώ μπορείτε να επιλέξετε αυτά τα αντικείμενα.',
          remindReady: 'Έτοιμο για συλλογή',
          skipHover: 'Απενεργοποιήστε τα μηνύματα επιβεβαίωσης και τα αποτελέσματα όταν ανοίγετε κάποιες τσάντες. Εδώ μπορείτε να επιλέξετε αυτές τις τσάντες',
          skipDone: 'Παίρνετε',
          info: 'Πληροφορίες',
          contact: 'Επικοινωνία',
          chooseLang: 'Επιλογή γλώσσας',
          features: 'Χαρακτηριστικά',
          name: ' Όνομα παίκτη',
          save: 'Αποθήκευση',
          saveMessage: 'Αποθηκεύτηκε με επιτυχία',
          saveMessage2: 'Οι ρυθμίσεις αποθηκεύτηκαν. Ορισμένες αλλαγές χρειάζονται μια ανανέωση του παραθύρου του παιχνιδιού.',
          setbonus2: 'Πληροφορίες σχετικά με τα μπόνους των Σετ',
          bonussearch2: 'Find items by bonus',
          frame2: 'Χρήσιμες ιστοσελίδες',
          npclocator2: 'Find quest givers on the map',
          choose: 'Κάντε κλικ στο καπέλο για να ξεκινήσετε',
          items: 'Αντικείμενα',
          parts: 'Τεμάχια',
          showItems: 'Εμφάνιση των αντικειμένων που υπάρχουν στα αποθέματά σας',
          noItems: 'Δεν βρέθηκαν αντικείμενα στα αποθέματά σας!',
          ownSets: 'Δικά σου Σετ',
          switchWeapon: 'Εναλλαγή μεταξύ πυροβόλου όπλου και ξίφους όπλου',
          selectBonus: 'Επιλέξτε Μπόνους',
          resetB: 'Επαναφορά',
          body: 'Ένδυση',
          right_arm: 'Όπλο μονομαχίας',
          animal: 'Άλογο & σέλα',
          other: 'Άλλο',
          buff: 'Buffs',
          refresh: 'Ανανέωση',
          noFriends: 'Δεν υπάρχουν φίλοι',
          reward: 'Ανταμοιβή',
          allprofessions: 'Όλα τα επαγγέλματα',
          market1: 'Αντικείμενα στην Αγορά',
          market2: 'Υπάρχουν αντικείμενα / χρήματα σε αυτήν την αγορά. Τι θέλετε να σηκώσετε;',
          all: 'Όλα',
          onlyBids: 'Μόνο προσφορές',
          nothing: 'Τίποτα',
          worldwide: 'Οποιονδήποτε',
          alliance: 'Συμμαχία',
          town: 'Πόλη',
          level: 'Επίπεδο',
          duelLevel: 'Επίπεδο μονομαχίας ',
          exp: 'Εμπειρία ',
          distance: 'Απόσταση ',
          startduel: 'Μονομαχήστε ',
          centerMap: 'Κεντράρισμα στον χάρτη',
          popup: 'Το μπόνους δεξιοτήτων των αντιπάλων',
          damage: 'Ζημιά',
          duelmap: 'Χάρτης μονομαχιών',
          duelradius: 'Ακτίνα μονομαχιών',
          minutes: 'λεπτά',
          hour: '1 ώρα',
          hours: 'ώρες',
          searchOpp: 'Αναζήτηση για αντιπάλους',
          amount: 'Νεκρός/ή',
          not_dead_amount: 'Ζωντανός/ή',
          duellevel: 'Επίπεδο',
          pStatus: 'Κατάσταση',
          sortBy: 'Ταξινόμηση κατά',
          tooLow: 'Χαμηλό επίπεδο μονομαχίας του αντιπάλου',
          tooHigh: 'Υψηλό επίπεδο μονομαχίας του αντιπάλου',
          ownTown: 'Μέλος της πόλης σου',
          attackable: 'Εμφάνιση μόνο παίκτες που μπορείτε να μονομαχήσετε',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Αποσύνδεση',
          accNfin: 'Αποδοχή & Ολοκλήρωση αποστολής',
          onWiki: 'Εμφάνισε την αποστολή στο Wiki',
          longerName: 'Το όνομα πρέπει να είναι μεγαλύτερο από 2 χαρακτήρες',
          loading: 'Φόρτωση...',
          rename: 'Μετονομασία',
          newName: 'Επιλέξτε ένα νέο όνομα Σετ',
          used: 'Χρησιμοποιείται',
          renameWarning: 'Όταν μετονομάζετε ένα Σετ, θα το φορέσετε και θα το ξαναβγάλετε.<br>Μπορεί να χάσετε κάποιους πόντους υγείας κατά τη διάρκεια της διαδικασίας!',
          sellItems: 'Πώληση αντικειμένων στον Έμπορο;',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Απόκρυψη όλων των ειδοποιήσεων εργασιών',
          compInv: 'Κάντε κλικ στην επιλογή "ακύρωση" για να προβάλλετε μόνο αντικείμενα που μπορούν να πουληθούν με πλειστηριασμό\n ή\nΠροσθέστε άλλη διεύθυνση URL αποθέματος για σύγκριση',
          loginAll1: 'Είσοδος σε όλους',
          loginAll2: 'Φορτώστε όλους τους ενεργούς κόσμους σας με ένα κλικ',
          custom1: 'Προσαρμοσμένο',
          custom2: 'Η προσαρμοσμένη λίστα σας σύνδεσης',
          edit: 'Επεξεργασία',
          CT: {
            ColorWindowTitle: 'Ρυθμίσεις',
            ColorWindowPreviewTxt: '*Κάντε κλικ στα γράμματα για να αλλάξετε χρώμα',
            ColorWindowOkBtn: 'Εφαρμογή',
            ColorWindowToDefaultBtn: 'Προεπιλογή',
            ColorWindowThisTchatBtn: 'Ορίστε σε αυτό',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Έντονα',
            ColorWindowCaps: 'Κεφαλαία',
            ColorWindowFlip: 'Ανάποδα',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Χωρίς χρώμα',
              'Καταχωρίστε έναν κωδικό χρώματος',
              'Κόκκινο',
              'Καφέ',
              'Μωβ',
              'Μπλε',
              'Πράσινο',
              'Ροζ',
              'Σκούρο μωβ',
              'Βιολετί',
              'Ξεθωριασμένο σκούρο μπλε',
              'Ανοιχτό πράσινο',
              'Υποβαθμισμένο κόκκινο',
              'Γαλάζιο',
              'Ξεθωριασμένο σκούρο ροζ',
              'Λαχανί',
              'Ξεθωριασμένο ροζ',
              'Φωτεινό κόκκινο'
            ],
            ColorLoadTitle: 'Κάντε κλικ για να τοποθετήσετε έναν άλλο κωδικό χρώματος<br>Ο τρέχων κωδικός χρώματος είναι: ',
            ColorSaveEmpty: '[Άδειο]',
            CustomReady: 'Έγκυρος κωδικός',
            CustomNotReady: 'Μη έγκυρος κωδικός',
          },
          QIS: {
            adventure: '*Περιπέτειες',
            work: '*Εργασίες',
            duel: '*Μονομαχίες',
            energy: '*Ενέργεια',
            skill: '*Πόντοι ικανοτήτων',
            fk: '*Μάχες οχυρών',
            speed: '*Ταχύτητα',
            lp: '*Πόντοι υγείας',
            luckNmoney: '*Τύχη & Χρήματα',
            workmoti: '*Κίνητρο δουλειάς',
            duelmoti: '*Κίνητρο μονομαχίας',
            experience: '*Εμπειρία',
            special: '*Premium/special',
            events: '*Εκδηλώσεις',
            chests: '*Θήκες & Κάτι για να ανοίξεις',
            equipment: '-Εξοπλισμός',
            products: '-Προϊόντα',
            questitems: '-Αντικείμενα αποστολών',
            craftitems: '-Αντικείμενα επαγγελμάτων',
            recipes: '-Συνταγές',
            NAMED: 'NAMED',
            nothingFound: 'Δεν βρέθηκαν αντικείμενα αυτού του τύπου!',
          },
          NPC: {
            loading: 'Φόρτωση των τρέχοντων δοτών αποστολής',
            title: 'Τοποθεσία δότη αποστολής',
            chooseNpc: 'Επιλέξτε εργοδότη',
            yourposition: 'Η θέση σου',
            questgiver: 'Δότης αποστολής',
            reload: 'Ανανέωση όλων των δοτών αποστολής',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Αριθμός βολών (ληφθείσες & αποφεύχθηκαν) ανά 1000 Ζωή',
            rate: 'Ποσοστό',
            hitsTaken: 'Λαμβανόμενα χτυπήματα',
            dodgedShots: 'Αποφυγή βολών',
            startHP: 'Αρχική ζωή',
            survivor: 'SURVIVOR',
            survivorT: 'Επιζών με την λιγότερη ζωή στο τέλος της μάχης του οχυρού',
            endHP: 'Ζωή στο τέλος της μάχης',
            sniper: 'SNIPER',
            sniperT: 'Αριθμός επιτυχημένων βολών (ποσοστό) σε σχέση με όλες τις βολές',
            rateP: 'Ποσοστό(%)',
            hitCount: 'Αριθμός χτυπημάτων',
            missedShots: 'Άστοχες βολές',
            matrix: 'MATRIX',
            matrixT: 'Αριθμός βολών (ποσοστό) σε σχέση με όλες τις βολές (ληφθείσες & αποφεύχθηκαν)',
            terminator: 'TERMINATOR',
            terminatorT: 'Αριθμός K.O. (ποσοστό) σε σχέση με τις επιτυχημένες βολές',
            KOs: 'K.O.',
            ranking: 'Κατάταξη',
            statsTitle: 'Στατιστικά μάχης οχυρού',
            designation: 'Περιγραφή',
            attack: 'Επίθεση',
            defense: 'Άμυνα',
            difference: 'Διαφορά',
            statistics: 'Στατιστικές',
            code: 'Κώδικας',
            goBack: 'Πίσω',
            starsTitle: 'Τα αστέρια της μάχης',
            title: 'Τίτλος',
            name: 'Όνομα παίκτη',
            details: 'Λεπτομέρειες',
            start: ' Ζωή - Αρχή: ',
            end: ' - Τέλος: ',
            damageTaken: ' - Λαμβάνουσα ζημιά: ',
            avgHP: ' - Ζωή ανά Παίκτη: ',
            total: 'Σύνολο ',
            average: 'Μέσος όρος ',
            HP: 'Ζωή',
            damage: 'Ζημιά',
            avgDamage: 'Μέση ζημιά',
            avgDamageMax: 'Μέση μέγιστη ζημία',
            avgWeaponDamage: 'Μέση ζημιά από όπλα',
            avgWeaponDamageMax: 'Μέγιστη ζημιά όπλου',
          },
          KoM: {
            success: 'Ο βαθμός άλλαξε με επιτυχία!',
            error: 'Παρουσιάστηκε σφάλμα',
            showPlayerOnMap: 'Κεντράρισμα παίχτη στον χάρτη',
            showTown: 'Επισκόπηση Πόλης',
            showAlly: 'Επισκόπηση Συμμαχίας',
            showFort: 'Επισκόπηση Οχυρού',
            showBattle: 'Επισκόπηση Μάχης Οχυρού',
            atFort: 'Βρίσκεται στο Οχυρό',
            nearFort: 'Βρίσκεται κοντά στο Οχυρό',
            notFort: 'Βρίσκεται μακριά από το Οχυρό',
            evaluated: 'Αριθμός αξιολογούμενων παικτών',
            started: 'Η μάχη μόλις ξεκίνησε',
            remindAlly: 'Στείλτε μύνημα στα μέλη της συμμαχίας,<br>που δεν έχουν ακόμη συμμετάσχει στην μάχη.',
            where: 'Πάμε στο Οχυρό',
            when: 'Ημέρα Μάχης',
            att: 'Επιτιθέμενοι',
            def: 'Αμυνόμενοι',
            getData: 'Φόρτωση πληροφοριών κατάταξης βαθμίδας',
            appointTo: 'Προβιβασμός σε %1',
            degradeTo: 'Ορισμός ως %1',
            astraitor: 'Σήμανση ως %1',
            youcant: 'Δεν μπορείτε να υποβιβάσετε παίχτες<br>της ίδιας ή υψηλότερης βαθμίδας',
            position: 'Θέση στο οχυρό',
            notown: 'Χωρίς πόλη',
            noally: 'Χωρίς συμμαχία',
            damage: 'Ζημιά',
            flag: 'Σημαία',
            inside: 'Μέσα στο Οχυρό',
            sectors: {
              undef: '❝Χωρίς θέση ακόμη❞',
              0: '❝Αριστερός (πάνω) μεγάλος τομέας❞',
              1: '❝Αριστερός (κάτω) μεγάλος τομέας❞',
              2: '❝Κεντρικός (αριστερά) μεγάλος τομέας❞',
              3: '❝Κεντρικός (μεσαίος) μεγάλος τομέας❞',
              4: '❝Κεντρικός (δεξιά) μεγάλος τομέας❞',
              5: '❝Δεξιός (κάτω) μεγάλος τομέας❞',
              6: '❝Δεξιός (πάνω) μεγάλος τομέας❞',
              7: '❝Πύργος Τυχοδιοκτών❞',
              8: '❝Πύργος Μονομάχων❞',
              9: '❝Πύργος Στρατιωτών❞',
              10: '❝Πύργος Εργατών❞',
              11: '❝Κάτω δεξιά Σπιτάκι❞',
              12: '❝Πάνω δεξιά Σπιτάκι❞',
              13: '❝Αριστερά Σπιτάκι❞',
              14: '❝Πάνω τοίχος❞',
              15: '❝Κάτω τοίχος❞',
              16: '❝Αριστερό τοίχος❞',
              17: '❝Δεξιό τοίχος❞',
              18: '❝Πύλες❞',
              19: '❝Σημαία❞',
            },
          },
        },
        pt: {
          language: 'Portuguese (português)',
          ApiGui1: 'Esse script foi feito para facilitar sua vida no Velho Oeste',
          ApiGui2: 'Abrir página do Script',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Adicionar mapa de duelos na janela duelos.',
            MarkDaily: 'Destacar bônus de login diário.',
            MarketMessage: 'Receber notificação de itens comprados ou vendidos no mercado atual.',
            AchievHide: 'Ocultar conquistas realizadas na janela de conquistas.',
            RecipeMarket: 'Melhorar a compra de receitas no mercado.',
            MoveJobs: 'Mover os trabalhos enfileirados a esquerda.',
            InstantQuest: 'Completar aventura instantâneamente quando tiver os requisitos.',
            QuestWiki: 'Adicionar link para abrir a aventura no wiki.',
            CityTravel: 'MOstrar o tempo de distância nas cidades do quadro.',
            BetterSheriff: 'Adicionar aba no Xerife para ver todas as recompensas possíveis.',
            ChatProfessions: 'MOstrar a profissão dos jogadores na lista do chat.',
            QuestBookSearch: 'Pesquisar por aventuras resolvidas no livro de aventuras',
            MarketRights: 'Diferenciar itens no mercado entre cidade, aliança, e público.',
            EquipManagerPlus: 'Mostre o gerenciamento de equipamento no inventário.',
            ShortPopups: 'Tornar janelas pop-up mais curtas.',
            HideNotis: 'Adicionar botão para ocultar as notificações do trabalho ao lado esquerdo.',
            JobProducts: 'Mostrar na janela de trabalho quantos produtos você já tem no inventário.',
            MapDistance: ' Mostrar o número de milhas ao lado do tempo de viagem.',
            TraderSell: 'Vender vários itens de uma só vez ao comerciante.',
            TouchControl: 'Enable touch control for map and scrollbar on your mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Adicionar botão de sair no fim dos scripts',
            Statusbar: 'Remover a barra de tarefas',
            ChangeCity: 'Mude o título e nome do jogador na cidade.',
            BlinkEvents: 'Não piscar botões de evento ao lado esquerdo.',
            FortTracker: 'Ocultar botão da batalha de forte.',
            FriendsPop: 'Ocultar janela de amigos online.',
          },
          settings1: 'Configurações',
          settings2: 'Configurações e Janela de Informações',
          ghosttown2: 'Abrir Cidade Fantasma',
          ghosttown3: 'Abrir Cidade Fantasma e Centralizar no Mapa',
          indiantown2: 'Abrir Vila Ingígena',
          indiantown3: 'Abrir Vila Indígena e Centralizar no Mapa',
          openmarket: 'Mercado',
          opentrader: 'Abrir Mercador Ambulante',
          forum: 'Fórum da Cidade',
          newsets: 'Novos Sets Adicionados ao Script',
          chooseItems: 'Escolha os Itens',
          remindHover: 'Receber notificação quando um item puder ser usado novamente.',
          remindReady: 'Pronto para recolher.',
          skipHover: 'Pular janelas de confirmação ao abrir algumas caixas e itens.',
          skipDone: 'Você ganhou:',
          info: 'Informação',
          contact: 'Contato',
          chooseLang: 'Escolhe idioma',
          features: 'Características',
          name: 'Nome',
          save: 'Salvar',
          saveMessage: 'Salvo com sucesso!',
          saveMessage2: 'Configurações salvas. Algumas mudanças só apareceram quando atualizar a janela.',
          setbonus2: 'Informações sobre o bônus do set',
          bonussearch2: 'Find items by bonus',
          frame2: 'Páginas da Web Úteis',
          npclocator2: 'Find quest givers on the map',
          choose: 'Clique no Chapéu para começar.',
          items: 'Itens',
          parts: 'Partes',
          showItems: 'Mostrar os itens definidos no seu saco.',
          noItems: 'Nenhum item no seu inventário foi encontrado. Clique novamente com a tecla CTRL para mostrar no TW-Calc.',
          ownSets: 'Apenas possui conjuntos.',
          switchWeapon: 'Alternar entre arma de fogo e arma de vigor.',
          selectBonus: 'Selecionar bônus',
          resetB: 'Resetar',
          body: 'Roupas',
          right_arm: 'Armas',
          animal: 'Cavalo & Sela',
          other: 'Outros',
          buff: 'Buffs',
          refresh: 'Atualizar',
          noFriends: 'Sem Amigos',
          reward: 'Recompensa',
          allprofessions: 'Todas as Profissões',
          market1: 'Itens no Mercado',
          market2: 'Há itens e dinheiro no mercado, o que você quer recolher?',
          all: 'Os dois',
          onlyBids: 'Apenas Lance',
          nothing: 'Nada',
          worldwide: 'No mundo todo',
          alliance: 'Aliança',
          town: 'Cidade',
          level: 'Nível',
          duelLevel: 'Nivel de Duelo',
          exp: 'Experiência',
          distance: 'Distância',
          startduel: 'Desafiar num Duelo',
          centerMap: 'Centralizar Mapa',
          popup: 'Bônus de Habilidade do Oponente',
          damage: 'Danificar',
          duelmap: 'Mapa de Duelo',
          duelradius: 'Raio de Duelo',
          minutes: 'Minutos',
          hour: '1 hora',
          hours: 'horas',
          searchOpp: 'Pesquisar Oponentes',
          amount: 'Morto',
          not_dead_amount: 'Vivo',
          duellevel: 'Nível',
          pStatus: 'Status',
          sortBy: 'Ordenar por:',
          tooLow: 'Nível de duelo muito baixo.',
          tooHigh: 'Nível de duelo muito alto',
          ownTown: 'Membro da sua Cidade',
          attackable: 'Mostrar apenas jogadores atacáveis',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Sair',
          accNfin: 'Aceitar e completar quest.',
          onWiki: 'Abrir quest na janela wi-ki',
          longerName: 'O nome deve ter mais de 2 caracteres.',
          loading: 'Carregando...',
          rename: 'Renomear',
          newName: 'Escolha um novo nome de conjunto',
          used: 'Usado',
          renameWarning: 'Quando você renomeia um conjunto, você vai usá-lo e despir-lo novamente.<br>Você pode perder pontos de saúde durante o processo!',
          sellItems: 'Vender itens para o comerciante?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Ocultar todas as notificações de Jobs',
          compInv: 'Clique em "cancelar" para mostrar apenas itens leiloáveis\n ou\nIntroduza outro URL de inventário para comparar',
          loginAll1: 'Login em todos os mundos',
          loginAll2: 'Carregue todos os seus mundos ativos em um clique',
          custom1: 'Personalizado',
          custom2: 'Sua lista de login persnalizada',
          edit: 'Editar',
          CT: {
            ColorWindowTitle: 'Set Color tchat',
            ColorWindowPreviewTxt: '*Clique na letra de uma mudança de cor',
            ColorWindowOkBtn: 'Aplicar',
            ColorWindowToDefaultBtn: 'Definido como padrão',
            ColorWindowThisTchatBtn: 'Definido para este',
            ColorWindowDefaultText: 'Selecione o tchat para repor as predefinições: ',
            ColorWindowBold: 'Em negrito',
            ColorWindowCaps: 'Capitalizados',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Incolor',
              'Insira um código de cor',
              'vermelho',
              'marrom',
              'roxo',
              'azul',
              'verde',
              'cor de rosa',
              'magenta',
              'gradiente violeta',
              'gradiente azul escuro',
              'gradiente verde',
              'gradiente vermelho',
              'gradiente de luz azul',
              'Pink Gradient',
              'gradiente luz verde',
              'rosa Gradiente',
              'gradiente claro vermelho'
            ],
            ColorLoadTitle: 'Clique para carregar outro código de cor<br>O código de cores atual é: ',
            ColorSaveEmpty: '[vazio]',
            CustomReady: 'Código válido',
            CustomNotReady: 'Inválido',
          },
          QIS: {
            adventure: '*Aventuras',
            work: '*Buffs Trabalho',
            duel: '*Buffs Duelo',
            energy: '*Buffs Energia',
            skill: '*Buffs Habilidade',
            fk: '*Buffs Batalha',
            speed: '*Buffs Velocidade',
            lp: '*Buffs Saúde',
            luckNmoney: '*Sorte & Dinheiro',
            workmoti: '*Motivação trabalho',
            duelmoti: '*Motivação duelo',
            experience: '*Experiência',
            special: '*Prêmio/especial',
            events: '*Eventos',
            chests: '*Abrir e desempacotar',
            equipment: '-Equipamento',
            products: '-Produtos',
            questitems: '-Items de aventura',
            craftitems: '-Ofício',
            recipes: '-Receitas',
            NAMED: 'NAMED',
            nothingFound: 'Nenhum item deste tipo encontrado!',
          },
          NPC: {
            loading: 'Atualizar empregadores atuais',
            title: 'Localizador de empregadores',
            chooseNpc: 'Selecionar empregador',
            yourposition: 'Minha posição',
            questgiver: 'Empregador',
            reload: 'Atualizar todos os empregadores',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Classificação é dada!',
            error: 'Ocorreu um erro',
            showPlayerOnMap: 'Mostra jogador no mapa',
            showTown: 'Mostrar visualização da cidade',
            showAlly: 'Mostra alliança',
            showFort: 'Mostrar vista geral do forte',
            showBattle: 'Mostrar campo de batalha',
            atFort: 'No forte',
            nearFort: 'Perto do forte',
            notFort: 'Não está no forte',
            evaluated: 'Avaliar jogador',
            started: 'A batalha está a decorrer agora',
            remindAlly: 'Relembre os membros da aliança, que ainda não participaram',
            where: 'Onde',
            when: 'Quando',
            att: 'Atacantes',
            def: 'Defensores',
            getData: 'A carregar informações de classificação',
            appointTo: 'Promover a %1',
            degradeTo: 'Nomear como %1',
            astraitor: 'Marcar como %1',
            youcant: 'Não é possível dar patente a jogadores<br>com patente igual ou superior.',
            position: 'Posição',
            notown: 'No town',
            noally: 'Nome da Aliança',
            damage: 'Dano',
            flag: 'Bandiera',
            inside: 'Dentro da forte',
            sectors: {
              undef: 'Não há posição de partida',
              0: 'sector superior esquerdo',
              1: 'sector centro esquerda',
              2: 'sector inferior esquerdo',
              3: 'sector inferior central',
              4: 'sector inferior direito',
              5: 'sector centro direita',
              6: 'sector superior direito',
              7: 'torre dos Aventureiros',
              8: 'torre dos Pistoleiros ',
              9: 'torre dos soldados',
              10: 'torre dos Trabalhadores',
              11: 'Quartel ',
              12: 'Armazém',
              13: 'Quartel Geral ',
              14: 'Muro norte',
              15: 'Muro sul',
              16: 'Muro esquerdo',
              17: 'Muro direito',
              18: 'Portão',
              19: 'Bandeira',
            },
          },
        },
        it: {
          language: 'Italian (italiano)',
          ApiGui1: 'Questo script raccoglie molte funzionalità utili a semplificarti la vita in The West.<br>Ulteriori informazioni',
          ApiGui2: 'Apri la pagina dello script',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Aggiungi la scheda Mappa duelli nella finestra Duelli',
            MarkDaily: 'Evidenzia il bonus login del 5° giorno per non dimenticarlo',
            MarketMessage: 'Ricevi una notifica quando ci sono oggetti o soldi da ritirare al mercato della città dove ti trovi in quel momento',
            AchievHide: 'Nascondi i Successi completati nella rispettiva finestra di gioco',
            RecipeMarket: 'Migliora l\'organizzazione delle ricette al mercato',
            MoveJobs: 'Sposta la coda dei lavori leggermente più a sinistra',
            InstantQuest: 'Se tutti i requisiti sono soddisfatti, permetti di concludere le missioni istantaneamente',
            QuestWiki: 'Aggiungi un link alla wiki italiana (ove disponibile) nelle finestre delle missioni',
            CityTravel: 'Mostra la distanza verso le città nella lavagna',
            BetterSheriff: 'Aggiungi una nuova scheda nella finestra dello sceriffo per vedere tutte le possibili taglie',
            ChatProfessions: 'Mostra la professione a fianco del nome dei giocatori nella lista della chat',
            QuestBookSearch: 'Aggiungi una casella di ricerca nella scheda "Completate" del libro missioni',
            MarketRights: 'Mostra se le offerte del mercato sono pubbliche oppure per alleati\concittadini',
            EquipManagerPlus: 'Migliora la finestra "Gestione equipaggiamento" nell\'inventario',
            ShortPopups: 'Rendi i tooltip degli oggetti più corti',
            HideNotis: 'Aggiungi un pulsante per nascondere le notifiche dei lavori nella relativa barra',
            JobProducts: 'Nel tooltip dei prodotti mostra quanti se ne possiede in inventario',
            MapDistance: 'Mostra la distanza in miglia accanto al tempo di viaggio',
            TraderSell: 'Consenti di vendere oggetti in quantità multipla ai negozi\mercante ambulante',
            TouchControl: 'Abilità il controllo touch nel browser mobile',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Aggiungi sul lato destro dello schermo un pulsante disconnetti',
            Statusbar: 'Nascondi la barra degli incarichi',
            ChangeCity: 'Nel municipio, inverti il titolo e il nome del giocatore',
            BlinkEvents: 'Termina il lampeggiamento delle icone degli eventi e della fiera nella barra delle notifiche',
            FortTracker: 'Disattiva l\'icona di notifica della battaglia al forte',
            FriendsPop: 'Nascondi i pop-up "Amico online"',
          },
          settings1: 'Apri le impostazioni',
          settings2: 'Apri le impostazioni e la finestra di informazioni',
          ghosttown2: 'Apri la Città Fantasma',
          ghosttown3: 'Apri la Città Fantasma e centra la mappa',
          indiantown2: 'Apri il Villaggio Indiano',
          indiantown3: 'Apri il Villaggio Indiano e centra la mappa',
          openmarket: 'Apri il mercato',
          opentrader: 'Abrir Mercante',
          forum: 'Apri il forum città',
          newsets: 'Nuovi set sono stati aggiunti allo script',
          chooseItems: 'Scegli gli oggetti',
          remindHover: 'Ricevi una notifica quando un oggetto può essere di nuovo utilizzato. Scegli qui gli oggetti di interesse.',
          remindReady: 'Pronto per essere collezionato',
          skipHover: 'Salta i messaggi di conferma e risultato quando apri alcuni oggetti. Scegli qui gli oggetti di interesse',
          skipDone: 'Ottieni',
          info: 'Informazioni',
          contact: 'Contatti',
          chooseLang: 'Scegli lingua',
          features: 'Caratteristiche',
          name: 'Nome',
          save: 'Salva',
          saveMessage: 'Salvato con successo',
          saveMessage2: 'Impostazioni salvate. Aggiorna la pagina per renderle effettive.',
          setbonus2: 'Informazioni sui bonus set',
          bonussearch2: 'Find items by bonus',
          frame2: 'Pagine internet di aiuto',
          npclocator2: 'Find quest givers on the map',
          choose: 'Clicca sul cappello per iniziare',
          items: 'oggetti',
          parts: 'parti',
          showItems: 'Mostra i set oggetti nel tuo inventario',
          noItems: 'Nessun oggetto trovato nel tuo inventario. Cliccaci nuovamente tenendo premuto CTRL per mostrarlo su TW-Calc.',
          ownSets: 'Solo propri set',
          switchWeapon: 'Inverti armi da fuoco e da contusione',
          selectBonus: 'Scegli i bonus',
          resetB: 'Reset',
          body: 'Abiti',
          right_arm: 'Armi',
          animal: 'Cavallo e oggetto',
          other: 'Altro',
          buff: 'Buffs',
          refresh: 'Aggiorna',
          noFriends: 'Nessun amico',
          reward: 'Ricompensa',
          allprofessions: 'Tutte le professioni',
          market1: 'Oggetti al mercato',
          market2: 'Ci sono oggetti/soldi da ritirare in questo mercato. Vuoi farlo?',
          all: 'Tutto',
          onlyBids: 'Solo aste',
          nothing: 'Niente',
          worldwide: 'Mondiale',
          alliance: 'Alleanza',
          town: 'Città',
          level: 'Livello',
          duelLevel: 'Livello duello',
          exp: 'Esperienza',
          distance: 'Distanza',
          startduel: 'Inizia duello',
          centerMap: 'Centra mappa',
          popup: 'Abilità bonus dell\'avversario',
          damage: 'Danno',
          duelmap: 'Mappa duelli',
          duelradius: 'Raggio duelli',
          minutes: 'minuti',
          hour: '1 ora',
          hours: 'ore',
          searchOpp: 'Cerca avversari',
          amount: 'Morto',
          not_dead_amount: 'Vivo',
          duellevel: 'Liv',
          pStatus: 'Stato',
          sortBy: 'Ordina per',
          tooLow: 'Livello duello avversario troppo basso',
          tooHigh: 'Livello duello avversario troppo alto',
          ownTown: 'Membro della tua città',
          attackable: 'Mostra solo i giocatori duellabili',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Disconneti',
          accNfin: 'Accetta e completa missione',
          onWiki: 'Mostra la missione nella Wiki',
          longerName: 'Il nome deve essere più lungo di 2 caratteri',
          loading: 'Caricamento...',
          rename: 'Rinomina',
          newName: 'Scegli un nuovo nome set',
          used: 'Usato',
          renameWarning: 'Quando rinomini un set lo indosserai e svestirai di nuovo.<br>In questo processo potresti perdere dei punti vita!',
          sellItems: 'Vuoi vendere questi oggetti?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Nascondi tutte le notifiche dei lavori',
          compInv: 'Clicca su "cancella" per mostrare solo gli oggetti vendibili all\'asta\n oppure\nInserisci altro URL di inventari per confrontare',
          loginAll1: 'Fai login in tutti i mondi',
          loginAll2: 'Carica tutti i mondi in cui sei attivo con un clic',
          custom1: 'Personalizza',
          custom2: 'La tua lista login personalizzata',
          edit: 'Modifica',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Avventure',
            work: '*Bonus Lavoro',
            duel: '*Bonus Duello',
            energy: '*Bonus Energia',
            skill: '*Bonus Abilità',
            fk: '*Bonus Forte',
            speed: '*Bonus Velocità',
            lp: '*Bonus Punti Vita',
            luckNmoney: '*Luck & money',
            workmoti: '*Motivazione lavoro',
            duelmoti: '*Motivazione duello',
            experience: '*Experience',
            special: '*Premio/speciale',
            events: '*Eventi',
            chests: '*Aprire e decomprimere',
            equipment: '-Attrezzatura',
            products: '-Prodotti',
            questitems: '-Oggetti missione',
            craftitems: '-Produci',
            recipes: '-Ricette',
            NAMED: 'NAMED',
            nothingFound: 'Non è stato trovato nulla!',
          },
          NPC: {
            loading: 'Caricando gli attuali mandanti',
            title: 'Posizione dei mandanti missione',
            chooseNpc: 'Scegli mandante',
            yourposition: 'La tua posizione',
            questgiver: 'Mandante',
            reload: 'Ricarica tutti i mandanti missione',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Il rango è stato dato!',
            error: 'Si e\' verificato un errore',
            showPlayerOnMap: 'Centra nella mappa',
            showTown: 'Mostra riepilogo città',
            showAlly: 'Mostra alleanza',
            showFort: 'Mostra panoramica forte',
            showBattle: 'Spettacolo campo di battaglia',
            atFort: 'Al forte',
            nearFort: 'Vicino al forte',
            notFort: 'Non al forte',
            evaluated: 'Valuta giocatore',
            started: 'La battaglia è in pieno svolgimento',
            remindAlly: 'Ricordare i membri dell alleanza, che non hanno ancora partecipato',
            where: 'Dove',
            when: 'Quando',
            att: 'Attaccanti',
            def: 'Difensori',
            getData: 'Caricamento Informazioni rango',
            appointTo: 'Promuovi a %1',
            degradeTo: 'Nomina %1',
            astraitor: 'Contrassegna come %1',
            youcant: 'Non è possibile il reclutamento di giocatori<br>con rango uguale o superiore.',
            position: 'Posizione',
            notown: 'No town',
            noally: 'Nessuna alleanza',
            damage: 'Danno',
            flag: 'Bandiera',
            inside: 'All\'interno del forte',
            sectors: {
              undef: 'Nessuna posizione di partenza',
              0: ' -O1- Il settore superiore sinistro',
              1: ' -O2- Il settore centrale sinistro',
              2: ' -S1- Il settore in basso a sinistra',
              3: ' -S2- Il settore centrale',
              4: ' -S3- Il settore in basso a destra',
              5: ' -E2- Il settore centrale destro',
              6: ' -E1- Il settore superiore destro',
              7: 'Torre avventuriero',
              8: 'Torre duellante',
              9: 'Torre soldato',
              10: 'Torre lavoratore',
              11: 'Caserma',
              12: 'Magazzino',
              13: 'Quartier generale',
              14: 'Muro nord',
              15: 'Muro sud',
              16: 'Muro ovest',
              17: 'Muro est',
              18: 'Cancello',
              19: 'Bandiera',
            },
          },
        },
        fr: {
          language: 'French (français)',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Add a duel map to the duel window',
            MarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
            MarketMessage: 'Get a message when there are items or money to pick up on actual market',
            AchievHide: 'Hide completed achievements in achievements window',
            RecipeMarket: 'Improve the purchase of recipes on market',
            MoveJobs: 'Move the queued jobs a bit to the left',
            InstantQuest: 'Complete the quest instantly if all requirements are done',
            QuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
            CityTravel: 'Show the travel time to the towns in the blackboard',
            BetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
            ChatProfessions: 'Show the crafting profession of the players in the chat list',
            QuestBookSearch: 'Search for solved quests in the quest book',
            MarketRights: 'Show if market offers are public or only for alliance/town members',
            EquipManagerPlus: 'Improve the equipment manager in the inventory',
            ShortPopups: 'Make the item pop-ups shorter',
            HideNotis: 'Add a button to hide the job notifications on the left side',
            JobProducts: 'Show in the job pop-up how many products you already have in your inventory',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control on your mobile browser',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Add a logout button on the right side',
            Statusbar: 'Remove the taskbar',
            ChangeCity: 'Switch title and player name in the town hall',
            BlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
            FortTracker: 'Turn off fort battle reminder',
            FriendsPop: 'Hide "Friend online" pop-ups',
          },
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown2: 'Aller à la ville abandonné',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown2: 'Aller au village de Waupee',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Ouvrir le marché',
          opentrader: 'Ouvrir le marchand ambulant',
          forum: 'Ouvrir le forum',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Contact',
          chooseLang: 'Choisissez la langue',
          features: 'Features',
          name: 'Name',
          save: 'Sauvegarder',
          saveMessage: 'Enregistrer avec succès',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          bonussearch2: 'Find items by bonus',
          frame2: 'Helpful web pages',
          npclocator2: 'Find quest givers on the map',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          other: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duel map',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          CT: {
            ColorWindowTitle: 'Configurer Color tchat',
            ColorWindowPreviewTxt: '*Clickez sur la lettre à changer de couleur',
            ColorWindowOkBtn: 'Appliquer',
            ColorWindowToDefaultBtn: 'Par défaut',
            ColorWindowThisTchatBtn: 'Pour se tchat',
            ColorWindowDefaultText: 'Sélectionnez les tchat à Remettre par défaut:',
            ColorWindowBold: 'En gras',
            ColorWindowCaps: 'En majuscule',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Sans couleur',
              'Entrer des couleurs',
              'rouge',
              'marron',
              'violet',
              'bleu',
              'vert',
              'rose',
              'magenta',
              'dégradé violet',
              'dégradé bleu foncé',
              'dégradé vert',
              'dégradé rouge',
              'dégradé bleu clair',
              'dégradé rose',
              'dégradé vert clair',
              'dégradé rose clair',
              'dégradé rouge clair'
            ],
            ColorLoadTitle: 'Clickez pour charger un autre code couleur<br>Le code couleur actuel est: ',
            ColorSaveEmpty: '[vide]',
            CustomReady: 'Code valide',
            CustomNotReady: 'Non valide',
          },
          QIS: {
            adventure: '*Aventures',
            work: '*Travail',
            duel: '*Duels',
            energy: '*Bonus de repos',
            skill: '*Aptitudes',
            fk: '*Fort bataille',
            speed: '*Vitesse',
            lp: '*Points de vie bonus',
            luckNmoney: '*Luck & money',
            workmoti: '*Motivation travail',
            duelmoti: '*Motivation duel',
            experience: '*Experience',
            special: '*Prime/spéciale',
            events: '*Événements',
            chests: '*Ouvrir et déballer',
            equipment: '-Équipement',
            products: '-Produits',
            questitems: '-Objets de quête',
            craftitems: '-Artisanat',
            recipes: '-Recettes',
            NAMED: 'NAMED',
            nothingFound: 'Pas d\'objets de cette sorte trouvé!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Quest giver locator',
            chooseNpc: 'Select employer',
            yourposition: 'Your position',
            questgiver: 'Quest giver',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HÉROS',
            heroT: 'Taux du nombre de tirs ciblés (évités + reçus) par rapport aux PV de départ',
            rate: 'Taux',
            hitsTaken: 'Coups réçus',
            dodgedShots: 'Tirs esquivés',
            startHP: 'PV Début',
            survivor: 'SURVIVANT',
            survivorT: 'Celui qui finit avec le moins de pv',
            endHP: 'PV Fin',
            sniper: 'TIREUR D\'ÉLITE',
            sniperT: 'Pourcentage de tirs réussis par rapport aux total de tirs effectués',
            rateP: 'Taux(%)',
            hitCount: 'Coups réussis',
            missedShots: 'Tirs ratés',
            matrix: 'MATRIX',
            matrixT: 'Pourcentage de tirs évités par rapport aux total de tirs ciblés',
            terminator: 'TERMINATOR',
            terminatorT: 'Pourcentage du nombre de ko par rapport aux total des tirs touchés',
            KOs: 'Ko effectués',
            ranking: 'Classement',
            statsTitle: 'Statistiques de la bataille',
            designation: 'Désignation',
            attack: 'Attaque',
            defense: 'Défense',
            difference: 'Différence',
            statistics: 'Statistique',
            code: 'Code',
            goBack: 'Retour',
            starsTitle: 'Les Stars de la bataille',
            title: 'Titre',
            name: 'Nom',
            details: 'Détails',
            start: ' PV - Début: ',
            end: ' - Fin: ',
            damageTaken: ' - Dégâts reçus: ',
            avgHP: ' - Moy PV: ',
            total: 'Total ',
            average: 'Moyenne ',
            HP: 'PV',
            damage: 'Dégats',
            avgDamage: 'Dommages moyen',
            avgDamageMax: 'Dommages max moyen',
            avgWeaponDamage: 'Dommages arme moyen',
            avgWeaponDamageMax: 'Dommages arme max',
          },
          KoM: {
            success: 'Rank is given!',
            error: 'An error has occured',
            showPlayerOnMap: 'Show player on map',
            showTown: 'Show town overview',
            showAlly: 'Show alliance overview',
            showFort: 'Show fort overview',
            showBattle: 'Show battlefield',
            atFort: 'At the fort',
            nearFort: 'Nearby the fort',
            notFort: 'Not at the fort',
            evaluated: 'Number of evaluated players',
            started: 'The battle is taking place right now',
            remindAlly: 'Remind ally members, who haven\'t participated yet',
            where: 'Where',
            when: 'When',
            att: 'Attackers',
            def: 'Defenders',
            getData: 'Loading rank information',
            appointTo: 'Nommer %1',
            degradeTo: 'Nommer %1',
            astraitor: 'Marquer comme %1',
            youcant: 'Tu ne peux pas dégrader des combattants de<br>rang supérieur ou de même rang.',
            position: 'Position',
            notown: 'No town',
            noally: 'No alliance',
            damage: 'Damage',
            flag: 'Flag',
            inside: 'Inside the fort',
            sectors: {
              undef: 'No starting position',
              0: 'The upper-left sector',
              1: 'The lower-left sector',
              2: 'The central left sector',
              3: 'The lower central sector',
              4: 'The central right sector',
              5: 'The lower-right sector',
              6: 'The upper-right sector',
              7: 'Adventurer\'s tower',
              8: 'Dueller\'s tower',
              9: 'Soldier\'s tower',
              10: 'Worker\'s tower',
              11: 'Barracks',
              12: 'Resource stock',
              13: 'Headquarters',
              14: 'North wall',
              15: 'South wall',
              16: 'West wall',
              17: 'East wall',
              18: 'Gate',
              19: 'Flag',
            },
          },
        },
        cs: {
          language: 'Czech (čeština)',
          ApiGui1: 'Tento skript obsahuje mnoho funkcí pro zjednodušení vašeho každodenního života na The West. <br> Další informace',
          ApiGui2: 'Otevřít stránku skriptu',
          Feat: {
            ColorTchat: '%0 Přidá do chatu nové funkce. Barevný text, Emotikony 🐧🎉 a další.',
            QuickItemsSearch: '%0 Vyhledá doplňováky v inventáři',
            MarketBestBids: '%0 Vybarví aukce na základě ceny %1 Zelená %2 Nabídka je nižší než kupní cena %3 Černá %4 Nabídka se rovná kupní ceně %5 Modrá %6 Nabídka je medzi 100% a 200% kupní ceny %7 Červená %8 Nabídka je vyšší než 200%">',
            BattleStars: '%0 Ďalší statistiky v oznámení z bitvy o pevnost',
            KickoMatic: '%0 Užitečné pro rekrut hráčů v bitvě o pevnost',
            DuelMap: 'Přidá duelovou mapu do okna duelů',
            MarkDaily: 'Zvýraznit denní bonus za přihlásení, v pátý den, abyste ho nevynechali',
            MarketMessage: 'Zobrazit zprávu, když jsou věci nebo peníze, které lze vyzvednout na trhu ve měste, kde jse právě nácházíte',
            AchievHide: 'Skrýt dokončené úspěchy v okně úspěchů',
            RecipeMarket: 'Zlepšit nákup receptů na trhu',
            MoveJobs: 'Přesunout úlohy (práce) ve frontě o kousek doleva',
            InstantQuest: 'Pokud jsou splněny všechny požadavky, okamžitě dokončit úkol',
            QuestWiki: 'Přidat odkaz do okna úkolů pro zobrazení úkolu wiki',
            CityTravel: 'Na tabuli zobrazit čas cesty do měst',
            BetterSheriff: 'Přidat do okna šerifa novou kartu pro zobrazení všech dostupních zatykačů',
            ChatProfessions: 'Zobrazit řemeslo hráčů v seznamu chatu',
            QuestBookSearch: 'Přidat vyhledávaní v knize úkolů',
            MarketRights: 'Zobrazit zda jsou tržní nabídky veřejné nebo pouze pro členy aliance / města',
            EquipManagerPlus: 'Vylepšit "Sklad pro vybavení" v inventáři',
            ShortPopups: 'Kratší pop-upy předmětů',
            HideNotis: 'Přidat tlačítko pro skrytí oznámení z prací na levé straně',
            JobProducts: 'Zobrazit v pop-upe práce kolik produktů z dané práce vlastníte',
            MapDistance: 'Zobrazit počet mil vedle času cesty',
            TraderSell: 'Prodat obchodníkovi více položek najednou',
            TouchControl: 'V mobilním prohlížeči povolit dotykové ovládání',
            FbRankingChar: 'Zobrazit třídu postavy v žebříčku bitev o pevnost',
            DuelXpCalc: 'Zobrazit duelové zkušenosti v profile hráče',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Přidat tlačítko pro odhlášení na pravé straně',
            Statusbar: 'Odstranit taskbar',
            ChangeCity: 'Přehodit titul a jméno hráče v okně radnice',
            BlinkEvents: 'Zastavit blikání tlačítka cirkusu na levé straně',
            FortTracker: 'Vypnout připomínáni bitvy o pevnost',
            FriendsPop: 'Nezobrazovat "Přítel online" pop-up',
          },
          settings1: 'Otevřít nastavení',
          settings2: 'Otevřít nastavení a okno s informacemi',
          ghosttown2: 'Město Duchů',
          ghosttown3: 'Otevřít Město Duchů a zobrazit ho na mapě',
          indiantown2: 'Indiánská rezervace',
          indiantown3: 'Otevřít indiánskou rezervaci a zobrazit ji na mapě',
          openmarket: 'Otevřít trh',
          opentrader: 'Otevřít podomního obchodníka',
          forum: 'Otevřít fórum',
          newsets: 'Nově přidané sety',
          chooseItems: 'Vyberte itemy',
          remindHover: 'Obdržíte upozornění, když lze itemy znovu použít. Zde si můžete vybrat tyto itemy.',
          remindReady: 'Připravené na použití',
          skipHover: 'Při otevírání tašky přeskočit potvrzovací a výsledné zprávy. Zde si můžete vybrat tyto tašky.',
          skipDone: 'Dostali jste',
          info: 'Info',
          contact: 'Kontakt',
          chooseLang: 'Vyberte jazyk',
          features: 'Funkce',
          name: 'Jméno',
          save: 'Uložit',
          saveMessage: 'Úspěšně uloženo',
          saveMessage2: 'Nastavení uloženo. Některé změny vyžadují reload hry.',
          setbonus2: 'Informace o bonusech',
          bonussearch2: 'Vyhledat itemy podle bonusu',
          frame2: 'Užitečné stránky',
          npclocator2: 'Najít zadavate úkolů na mapě',
          choose: 'Začněte kliknutím na klobouk',
          items: 'předměty',
          parts: 'části',
          showItems: 'Zobrazit předměty ze setu v inventáři',
          noItems: 'Ve vašem inventáři nebyly nalezeny žádné předměty. Klikněte znovu s CTRL pro zobrazení na TW-Calc.',
          ownSets: 'Jenom vlastněné sety',
          switchWeapon: 'Přepínání mezi střelnou zbraní a zbraní na blízko',
          selectBonus: 'Vybrat bonusy',
          resetB: 'Reset',
          body: 'Oblečení',
          right_arm: 'Zbraně',
          animal: 'Kůň & Produkt',
          other: 'Ostatní',
          buff: 'Doplňováky',
          refresh: 'Obnovit',
          noFriends: 'Žádní přátelé',
          reward: 'Odměna',
          allprofessions: 'Všechny řemeslá',
          market1: 'Předměty na trhu',
          market2: 'Na tomto trhu jsou předměty / peníze. Co chcete vyzvednout?',
          all: 'Všechno',
          onlyBids: 'Jenom nabídky',
          nothing: 'Nic',
          worldwide: 'Světové',
          alliance: 'Aliance',
          town: 'Město',
          level: 'Level',
          duelLevel: 'Duelový level',
          exp: 'Xp',
          distance: 'Vzálenost',
          startduel: 'Začít Duel',
          centerMap: 'Centrovat pozici',
          popup: 'Bonusy soupeře',
          damage: 'Poškození',
          duelmap: 'Duelová mapa',
          duelradius: 'Okruh duelu',
          minutes: 'minuty',
          hour: '1 hodina',
          hours: 'hodiny',
          searchOpp: 'Hledat soupeře',
          amount: 'Mrtvý',
          not_dead_amount: 'Živý',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Seřadit podle',
          tooLow: 'Příliš nízká duelová úroveň soupeře',
          tooHigh: 'Příliš vysoká duelová úroveň soupeře',
          ownTown: 'Člen tvého města',
          attackable: 'Pouze dostupní soupeři',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Aktuální duelové zkušenosti',
          logout: 'Odhlásit',
          accNfin: 'Přijmout a dokončit úkol',
          onWiki: 'Zobrazit úkol na wiki',
          longerName: 'Název musí být delší než 2 znaky',
          loading: 'Načítám...',
          rename: 'Přejmenovat',
          newName: 'Nové jméno setu',
          used: 'Použito',
          renameWarning: 'Když přejmenujete sadu, budete ji muset svléknout a obléci znovu. <br> Během procesu můžete ztratit body zdraví!',
          sellItems: 'Prodat předměty obchodníkovi?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Skrýt všechna oznámení z prací',
          compInv: 'Kliknutím na tlačítko "zrušit" zobrazíte pouze dražitelné předměty\n nebo\nZadejte jinou adresu URL inventáře, který chcete porovnat',
          loginAll1: 'Přihlásit se do všech světů',
          loginAll2: 'Načíst všechny aktivní světy jedním kliknutím',
          custom1: 'Vlastní',
          custom2: 'Váš vlastní přihlašovací seznam',
          edit: 'Upravit',
          CT: {
            ColorWindowTitle: 'Color tchat nastavení',
            ColorWindowPreviewTxt: '*Kliknutím na písmena změníte barvu',
            ColorWindowOkBtn: 'Aplikovat',
            ColorWindowToDefaultBtn: 'Nastavit jako výchozí',
            ColorWindowThisTchatBtn: 'Nastavit tohle',
            ColorWindowDefaultText: 'Vyberte tchat pro reset na výchozí nastavení: ',
            ColorWindowBold: 'Tučné',
            ColorWindowCaps: 'Velká písmena',
            ColorWindowFlip: 'Překlopené',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Žádná barva',
              'Zadajte kód barvy',
              'červená',
              'hnědá',
              'fialová',
              'modrá',
              'zelená',
              'růžová',
              'purpurová',
              'fialový přechod',
              'degradovaná tmavě modrá',
              'zelený přechod',
              'degradovaná červená',
              'světle modrý přechod',
              'degradovaná růžová',
              'světle zelený přechod',
              'degradovaná růžová',
              'světle červený přechod'
            ],
            ColorLoadTitle: 'Klepnutím načtete jiný barevný kód<br>Aktuální barevný kód je: ',
            ColorSaveEmpty: '[prázdný]',
            CustomReady: 'Platný kód',
            CustomNotReady: 'Neplatný kód',
          },
          QIS: {
            adventure: '*Dobrodružství',
            work: '*Pracovní body',
            duel: '*Duely',
            energy: '*Energie',
            skill: '*Body schopností',
            fk: '*Bitvy',
            speed: '*Rychlost',
            lp: '*Body zdraví',
            luckNmoney: '*Štěstí & zárobek',
            workmoti: '*Pracovní motivace',
            duelmoti: '*Duelové motivace',
            experience: '*Zkušenosti',
            special: '*Prémium/špeciální',
            events: '*Eventy',
            chests: '*Něco k otevření',
            equipment: '-Vybavení',
            products: '-Produkty',
            questitems: '-Předměty k úkolu',
            craftitems: '-Předměty z remesel',
            recipes: '-Recepty',
            NAMED: 'NAMED',
            nothingFound: 'Nebyly nalezeny žádné položky tohoto typu!',
          },
          NPC: {
            loading: 'Načítání aktuálních zadávatelů',
            title: 'Vyhledávač zadávatelů',
            chooseNpc: 'vybrat zadavatele',
            yourposition: 'Vaše pozice',
            questgiver: 'Zadavatel ůkolů',
            reload: 'Znovu načíst všechny zadavatele',
          },
          BS: {
            hero: 'HRDINA',
            heroT: 'Počet zásahů (obdržené & vyhnuté) na každých 1000 HP',
            rate: 'Podíl',
            hitsTaken: 'Obdržené zásahy',
            dodgedShots: 'Vyhnuto zásahům',
            startHP: 'Zdraví na začátku',
            survivor: 'PŘEŽIVŠÍ',
            survivorT: 'Přežívší s nejnižším HP na konci bitvy',
            endHP: 'Zdraví na konci',
            sniper: 'SNIPER',
            sniperT: 'Počet úspěšných zásahů (v procentách) v porovnání ke všem výstřelům',
            rateP: 'Podíl(%)',
            hitCount: 'Úspěšné zásahy',
            missedShots: 'Neúspěšné zásahy',
            matrix: 'MATRIX',
            matrixT: 'Počet vyhnutých zásahů (v procentách) v porovnání ku všem zásahům (obdrženým & vyhnutým)',
            terminator: 'TERMINATOR',
            terminatorT: 'Počet KO (v procentách) v porovnaní ke všem úspěšným zásahům',
            KOs: 'KO',
            ranking: 'Žebríček',
            statsTitle: 'Bitevní štatistiky',
            designation: 'Designace',
            attack: 'Útok',
            defense: 'Obrana',
            difference: 'Rozdíl',
            statistics: 'Štatistiky',
            code: 'Kód',
            goBack: 'Zpět',
            starsTitle: 'Hvězdy téhle bitvy',
            title: 'Název',
            name: 'Jméno',
            details: 'Detaily',
            start: ' HP - Začátek: ',
            end: ' - Konec: ',
            damageTaken: ' - Obdržené poškození: ',
            avgHP: ' - HP na jednoho útočníka: ',
            total: 'Celkově ',
            average: 'Průměr ',
            HP: 'HP',
            damage: 'Poškození',
            avgDamage: 'Průměrné poškození',
            avgDamageMax: 'Průměrné max poškození',
            avgWeaponDamage: 'Průměrné poškození zbraně',
            avgWeaponDamageMax: 'Max poškození zbraně',
          },
          KoM: {
            success: 'Již má rekrut!',
            error: 'Došlo k chybě',
            showPlayerOnMap: 'Zobrazit polohu hráče',
            showTown: 'Zobrazit přehled města',
            showAlly: 'Zobrazit přehled aliance',
            showFort: 'Zobrazit přehled pevnosti',
            showBattle: 'Zobrazit bojiště',
            atFort: 'V pevnosti',
            nearFort: 'V blízkosti pevnosti',
            notFort: 'Mimo pevnosti',
            evaluated: 'Počet rekrutovaných hráčů',
            started: 'Bitva právě probíhá',
            remindAlly: 'Připomenout spojencům, kteří se ještě nepřidali',
            where: 'Kde',
            when: 'Kdy',
            att: 'Útočníci',
            def: 'Obránci',
            getData: 'Načítaní informací o rekrutu',
            appointTo: 'Povýšit na %1',
            degradeTo: 'Jmenovat za %1',
            astraitor: 'Označit za %1',
            youcant: 'Nemůžete degradovat bojovníky<br>stejné nebo vyšší hodnoti.',
            position: 'Počáteční pozice',
            notown: 'Bez města',
            noally: 'Bez aliance',
            damage: 'Poškození',
            flag: 'Vlajka',
            inside: 'V pevnosti',
            sectors: {
              undef: 'Bez počáteční pozice',
              0: 'Levý horní sektor',
              1: 'Levý dolní sektor',
              2: 'Střední levý sektor',
              3: 'Střední dolní sektor',
              4: 'Střední pravý sektor',
              5: 'Pravý dolní sektor',
              6: 'Pravý horní sektor',
              7: 'Věž dobrodruhů',
              8: 'Věž duelantů',
              9: 'Věž vojáků',
              10: 'Věž dělníků',
              11: 'Kasárny',
              12: 'Sklad',
              13: 'Hlavní budova',
              14: 'Severní hradba',
              15: 'Jižní hradba',
              16: 'Západní hradba',
              17: 'Východní hradba',
              18: 'Brána',
              19: 'Vlajka',
            },
          },
        },
        sk: {
          language: 'Slovak (slovenčina)',
          ApiGui1: 'Tento skript obsahuje mnoho funkcií pre zjednodušenie vášho každodenného života na The West. <br> Ďalšie informácie',
          ApiGui2: 'Otvoriť stránku skriptu',
          Feat: {
            ColorTchat: '%0 Pridá do chatu nové funkcie. Farebný text, Emotikony 🐧🎉 a ďalšie.',
            QuickItemsSearch: '%0 Vyhľadá doplňováky v inventári',
            MarketBestBids: '%0 Zafarbí aukcie na základe ceny %1 Zelená %2 Ponuka je nižšia než nákupná cena %3 Čierna %4 Pobuka je rovná nákupnej cene %5 Modrá %6 Ponuka je medzi 100% a 200% nákupnej ceny %7 Červená %8 Ponuka je väčšia o viac ako 200%">',
            BattleStars: '%0 Ďalšie štatistiky v oznámení z boja o pevnosť',
            KickoMatic: '%0 Užitočné pre rekrut hráčov v boji o pevnosť',
            DuelMap: 'Pridá duelovú mapu do okna duelov',
            MarkDaily: 'Zvýrazniť denný bonus za prihlásenie, v piaty deň, aby ste ho nevynechali',
            MarketMessage: 'Zobraziť správu, keď sú na trhu veci alebo peniaze, ktoré môžete vyzdvihnúť na trhu v meste, kde sa práve nachádzate',
            AchievHide: 'Schovať dokončené úspechy v okne úspechov',
            RecipeMarket: 'Vylepšiť nákup receptov na trhu',
            MoveJobs: 'Presunúť úlohy (práce) v poradí o kúsok doľava',
            InstantQuest: 'Ak sú splnené všetky požiadavky, okamžite dokončiť úlohu',
            QuestWiki: 'Pridať odkaz do okna úloh pre zobrazenie úlohy na wiki',
            CityTravel: 'Na tabuli zobraziť čas cesty do miest',
            BetterSheriff: 'Pridať do okna šerifa novú kartu pre zobrazenie všetkých dostupných zatykačov',
            ChatProfessions: 'Zobraziť remeslo hráčov v zozname chatu',
            QuestBookSearch: 'Pridať vyhľadávanie v knihe úloh',
            MarketRights: 'Zobraziť či sú ponuky na trhu verejné alebo iba pre členov aliancie / mesta',
            EquipManagerPlus: 'Vylepšiť "Sklad pre vybavenie" v inventári',
            ShortPopups: 'Kratšie pop-upy predmetov',
            HideNotis: 'Pridať tlačítko pre skrytie oznámenia z prác na ľavej strane',
            JobProducts: 'Zobraziť v pop-upe prác koľko produktov z danej práce vlastníte',
            MapDistance: 'Zobraziť počet míl vedľa času cesty',
            TraderSell: 'Predať obchodníkovi viac položiek naraz',
            TouchControl: 'V mobilnom prehliadači povoliť dotykové ovládanie',
            FbRankingChar: 'Zobraziť triedu postavy v rebríčku bojov o pevnosť',
            DuelXpCalc: 'Zobraziť duelové skúsenosti v profile hráča',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Pridať tlačítko pre odhlásenie na pravej strane',
            Statusbar: 'Odstrániť taskbar',
            ChangeCity: 'Prehodiť titul a meno hráča v okne radnice',
            BlinkEvents: 'Zastaviť blikanie tlačítka cirkusu na ľavej strane',
            FortTracker: 'Vypnúť pripomínanie boja o pevnosť',
            FriendsPop: 'Nezobrazovať "Priateľ online" pop-up',
          },
          settings1: 'Otvoriť nastavenie',
          settings2: 'Otvoriť nastavenie a okno s informáciami',
          ghosttown2: 'Mesto Duchov',
          ghosttown3: 'Otvoriť Mesto Duchov a centrovať ho na mape',
          indiantown2: 'Waupeeho indiánska dedina',
          indiantown3: 'Otvoriť Waupeeho indiánsku dedinu a centrovať ju na mape',
          openmarket: 'Otvoriť Trh',
          opentrader: 'Otvoriť Obchodníka',
          forum: 'Otvoriť fórum',
          newsets: 'Novo pridané sety',
          chooseItems: 'Vyberte itemy',
          remindHover: 'Dostanete upozornenie, keď je možné item znovu použiť. Tu si môžete vybrať tieto itemy.',
          remindReady: 'Pripravené na použitie',
          skipHover: 'Pri otváraní tašky preskočiť potvrdzovacie a výsledné správy. Tu si môžete vybrať tieto tašky.',
          skipDone: 'Dostanete',
          info: 'Info',
          contact: 'Kontakt',
          chooseLang: 'Vyberte jazyk',
          features: 'Funkcie',
          name: 'Meno',
          save: 'Uložiť',
          saveMessage: 'Úspešne uložené',
          saveMessage2: 'Nastavenie uložené. Niektoré zmeny vyžadajú reload hry.',
          setbonus2: 'Informácie o bonusoch',
          bonussearch2: 'Hľadať predmety podľa bonusu',
          frame2: 'Užitočné stránky',
          npclocator2: 'Nájsť zadávateľov úloh na mape',
          choose: 'Začnete kliknutím na klobúk',
          items: 'predmety',
          parts: 'časti',
          showItems: 'Zobraziť predmety zo setu v inventári',
          noItems: 'Vo vašom inventári neboli nájdené žiadne predmety. Kliknite znovu s CTRL pre zobrazenie na TW-Calc.',
          ownSets: 'Len vlastnené sety',
          switchWeapon: 'Prepínanie medzi strelnou zbraňou a zbraňou na blízko',
          selectBonus: 'Vybrat bonusy',
          resetB: 'Reset',
          body: 'Oblečení',
          right_arm: 'Zbrane',
          animal: 'Kôň & Produkt',
          other: 'Ostatné',
          buff: 'Doplňováky',
          refresh: 'Obnoviť',
          noFriends: 'Žiadny priatelia',
          reward: 'Odmena',
          allprofessions: 'Všetky remeslá',
          market1: 'Predmety na trhu',
          market2: 'Na tomtu trhu sú predmety / peniaze. Čo chcete vyzdvihnúť?',
          all: 'Všetko',
          onlyBids: 'Len ponuky',
          nothing: 'Nič',
          worldwide: 'Svetové',
          alliance: 'Aliancia',
          town: 'Mesto',
          level: 'Level',
          duelLevel: 'Duelový level',
          exp: 'Xp',
          distance: 'Vzdialenosť',
          startduel: 'Začať Duel',
          centerMap: 'Centrovať pozíciu',
          popup: 'Bonusy súpera',
          damage: 'Poškodenie',
          duelmap: 'Duelová mapa',
          duelradius: 'Okruh duelu',
          minutes: 'minúty',
          hour: '1 hodina',
          hours: 'hodiny',
          searchOpp: 'Hľadať súpera',
          amount: 'Mrtvý',
          not_dead_amount: 'Živý',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Zoradiť podľa',
          tooLow: 'Príliž nízka duelová úroveň súpera',
          tooHigh: 'Príliž vysoká duelová úroveň súpera',
          ownTown: 'Člen mesta',
          attackable: 'Len dostupní súperi',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Aktuálne duelové skúsenosti',
          logout: 'Odhlásiť',
          accNfin: 'Prijať a dokončiť úlohu',
          onWiki: 'Zobraziť úlohu na wiki',
          longerName: 'Názov musí byť dlhší ako 2 znaky',
          loading: 'Načítam...',
          rename: 'Premenovať',
          newName: 'Nové meno setu',
          used: 'Použité',
          renameWarning: 'Keď premenujete set, budete ho musieť vyzliecť a znovu obliecť. <br> Počas procesu môžete stratiť body zdravia!',
          sellItems: 'Predať predmety obchodníkovi?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Schovať všetky oznámenia z prác',
          compInv: 'Kliknutím na tlačítko "zrušiť" zobrazíte len dražiteľné predmety\n alebo\Zadajte inú adresu URL inventára, ktorý chcete porovnať',
          loginAll1: 'Prihlásiť sa do všetkých svetov',
          loginAll2: 'Načítať všetky svety jedným klikom',
          custom1: 'Vlastné',
          custom2: 'Váš vlastný prihlasovací zoznam',
          edit: 'Upraviť',
          CT: {
            ColorWindowTitle: 'Color tchat nastavenie',
            ColorWindowPreviewTxt: '*Kliknutím na písmená zmeníte farbu',
            ColorWindowOkBtn: 'Aplikovať',
            ColorWindowToDefaultBtn: 'Nastaviť ako predvolené',
            ColorWindowThisTchatBtn: 'Nastaviť toto',
            ColorWindowDefaultText: 'Vyberte tchat pre reset na predvolené nastavenie: ',
            ColorWindowBold: 'Tučné',
            ColorWindowCaps: 'Veľké písmená',
            ColorWindowFlip: 'Preklopené',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Žiadna farba',
              'Zadajte kód farby',
              'červená',
              'hnedá',
              'fialová',
              'modrá',
              'zelená',
              'ružová',
              'purpurová',
              'fialový prechod',
              'degradovaná tmavomodrá',
              'zelený prechod',
              'degradovaná červená',
              'svetlo modrý prechod',
              'degradovaná ružová',
              'svetlo zelený prechod',
              'degradovaná ružová',
              'svetlo červený prechod'
            ],
            ColorLoadTitle: 'Kliknutím načítate iný kód farby<br>Aktuálny kód farby je: ',
            ColorSaveEmpty: '[prázdny]',
            CustomReady: 'Platný kód',
            CustomNotReady: 'Neplatný kód',
          },
          QIS: {
            adventure: '*Dobrodružstvá',
            work: '*Práce',
            duel: '*Duely',
            energy: '*Energia',
            skill: '*Schopnosti',
            fk: '*Boje',
            speed: '*Rýchlosť',
            lp: '*Zdravie',
            luckNmoney: '*Šťastie & zárobok',
            workmoti: '*Pracovnej motivácia',
            duelmoti: '*Duelovej motivácia',
            experience: '*Skúsenosti',
            special: '*Prémium/špeciálne',
            events: '*Eventy',
            chests: '*Tašky a truhly',
            equipment: '-Výbava',
            products: '-Produkty',
            questitems: '-Predmety na úlohy',
            craftitems: '-Predmety z remesiel',
            recipes: '-Recepty',
            NAMED: 'NAMED',
            nothingFound: 'Neboli nájdené žiadne položky tohto typu!',
          },
          NPC: {
            loading: 'Načítanie aktuálnych zadávateľov',
            title: 'Vyhľadávač zadávateľov',
            chooseNpc: 'Vybrať zadávateľa',
            yourposition: 'Vaša pozícia',
            questgiver: 'Zadávateľ úloh',
            reload: 'Znovu načítať všetkých zadávateľov',
          },
          BS: {
            hero: 'HRDINA',
            heroT: 'Počet zásahov (obdržané a vyhnuté) na každých 1000 HP',
            rate: 'Podiel',
            hitsTaken: 'Obdržané zásahy',
            dodgedShots: 'Vyhnuté zásahy',
            startHP: 'Zdravie na začiatku',
            survivor: 'PREŽIVŠÍ',
            survivorT: 'Preživší s najnižším hp na konci boja',
            endHP: 'Zdravie na konci',
            sniper: 'SNIPER',
            sniperT: 'Počet úspešných zásahov (v percentách) v porovnaní ku všetkým výstrelom',
            rateP: 'Podiel(%)',
            hitCount: 'Úspešné zásahy',
            missedShots: 'Neúspešné zásahy',
            matrix: 'MATRIX',
            matrixT: 'Počet vyhnutých zásahov (v percentách) v porovnaní ku všetkým zásahom (obrdžaným & vyhnutým)',
            terminator: 'TERMINATOR',
            terminatorT: 'Počet KO (v percentách) v porovnaní ku všetkým úspešným hitom',
            KOs: 'KO',
            ranking: 'Rebríček',
            statsTitle: 'Štatistiky tohto boja',
            designation: 'Designácia',
            attack: 'Útok',
            defense: 'Obrana',
            difference: 'Rozdiel',
            statistics: 'Štatistiky',
            code: 'Kód',
            goBack: 'Naspäť',
            starsTitle: 'Hviezdy tohto boja',
            title: 'Názov',
            name: 'Meno',
            details: 'Detaily',
            start: ' HP - Začiatok: ',
            end: ' - Konec: ',
            damageTaken: ' - Obdržané poškodenie: ',
            avgHP: ' - HP na jedného útočníka: ',
            total: 'Celkové ',
            average: 'Priemer ',
            HP: 'HP',
            damage: 'Poškodenie',
            avgDamage: 'Priemerné poškodenie',
            avgDamageMax: 'Priemerné max poškodenie',
            avgWeaponDamage: 'Priemerné poškodenie zbrane',
            avgWeaponDamageMax: 'Max poškodenie zbrane',
          },
          KoM: {
            success: 'Hodnosti boli udelené!',
            error: 'Vyskytol sa problém',
            showPlayerOnMap: 'Ukázať hráča na mape',
            showTown: 'Zobraziť náhľad mesta',
            showAlly: 'Zobraziť náhľad aliancie',
            showFort: 'Zobraziť náhľad pevnosti',
            showBattle: 'Zobraziť bojisko',
            atFort: 'V pevnosti',
            nearFort: 'V blízkosti pevnosti',
            notFort: 'Mimo pevnosti',
            evaluated: 'Posúdenie hráča',
            started: 'Boj je v plnom prúde',
            remindAlly: 'Pripomenúť spojencom, ktorí sa ešte nepridali',
            where: 'Kde',
            when: 'Kedy',
            att: 'Útočníci',
            def: 'Obrancovia',
            getData: 'Načítavanie informácií',
            appointTo: 'Povýšiť na %1',
            degradeTo: 'Vymenovať za %1',
            astraitor: 'Označiť ako %1',
            youcant: 'Nemôžete degradovať bojovníkov s rovnakou<br>alebo vyššou hodnosťou.',
            position: 'Počiatočná pozícia',
            notown: 'Bez mesta',
            noally: 'Bez aliancie',
            damage: 'Poškodenie',
            flag: 'Vlajka',
            inside: 'V pevnosti',
            sectors: {
              undef: 'Bez počiatočnej pozície',
              0: 'Horný ľavý sektor',
              1: 'Spodný ľavý sektor',
              2: 'Stredný ľavý sektor',
              3: 'Stredný spodný sektor',
              4: 'Spodný pravý sektor',
              5: 'Dolný pravý sektor',
              6: 'Horný pravý sektor',
              7: 'Veža dobrodruhov',
              8: 'Veža duelantov',
              9: 'Veža vojakov',
              10: 'Veža pracovníkov',
              11: 'Kasárne',
              12: 'Sklad',
              13: 'Hlavná budova',
              14: 'Severná hradba',
              15: 'Južná hradba',
              16: 'Západná hradba',
              17: 'Východná hradba',
              18: 'Brána',
              19: 'Vlajka',
            },
          },
        },
        ru: {
          language: 'Russian (русский)',
          ApiGui1: 'This script contains many features to simplify your everyday life in The West.<br>More Informations',
          ApiGui2: 'Open script page',
          Feat: {
            ColorTchat: '%0 Adds new features to the chat. Colored text, Emojis 🐧🎉 etc.',
            QuickItemsSearch: '%0 Search for buff categories and sets in your inventory',
            MarketBestBids: '%0 Colors the auctions based on the price %1 Green %2 Bid is lower than the purchase price %3 Black %4 Bid is equal to the purchase price %5 Blue %6 Bid is between 100% and 200% of the purchase price %7 Red %8 Bid is more than 200%">',
            BattleStars: '%0 Additional stats in the fort battle report',
            KickoMatic: '%0 Helpful to rank players before a fort battle',
            DuelMap: 'Add a duel map to the duel window',
            MarkDaily: 'Highlight daily login bonus on day 5 to not miss it',
            MarketMessage: 'Get a message when there are items or money to pick up on actual market',
            AchievHide: 'Hide completed achievements in achievements window',
            RecipeMarket: 'Improve the purchase of recipes on market',
            MoveJobs: 'Move the queued jobs a bit to the left',
            InstantQuest: 'Complete the quest instantly if all requirements are done',
            QuestWiki: 'Add a link in the quest window to show the quest on the wiki page',
            CityTravel: 'Show the travel time to the towns in the blackboard',
            BetterSheriff: 'Add a new tab in the sheriff window to see all possible bounties',
            ChatProfessions: 'Show the crafting profession of the players in the chat list',
            QuestBookSearch: 'Search for solved quests in the quest book',
            MarketRights: 'Show if market offers are public or only for alliance/town members',
            EquipManagerPlus: 'Improve the equipment manager in the inventory',
            ShortPopups: 'Make the item pop-ups shorter',
            HideNotis: 'Add a button to hide the job notifications on the left side',
            JobProducts: 'Show in the job pop-up how many products you already have in your inventory',
            MapDistance: ' Show the number of miles next to the travel time',
            TraderSell: 'Sell multiple items at once to the trader',
            TouchControl: 'Enable touch control on your mobile browser',
            FbRankingChar: 'Show the character class in the fortbattle world ranking',
            DuelXpCalc: 'Show the duel experience in player profiles',
            ItemNew: 'Mark items on traders and market you do not own',
            Logout: 'Add a logout button on the right side',
            Statusbar: 'Remove the taskbar',
            ChangeCity: 'Switch title and player name in the town hall',
            BlinkEvents: 'Stop the blinking of the event, County Fair buttons on the left side',
            FortTracker: 'Turn off fort battle reminder',
            FriendsPop: 'Hide "Friend online" pop-ups',
          },
          settings1: 'Open settings',
          settings2: 'Open settings and information window',
          ghosttown2: 'Город Призрак',
          ghosttown3: 'Open ghost town and center it on map',
          indiantown2: 'Деревня Вупи',
          indiantown3: 'Open Indian village and center it on map',
          openmarket: 'Рынок',
          opentrader: 'Коммивояжёр',
          forum: 'Сплетни',
          newsets: 'New sets are added to the script',
          chooseItems: 'Choose the items',
          remindHover: 'You get a notification when an item can be used again. Here you can choose these items.',
          remindReady: 'Ready to collect',
          skipHover: 'Skip the confirmation and result messages when you open some bags. Here you can choose these bags',
          skipDone: 'You get',
          info: 'Info',
          contact: 'Контакты',
          chooseLang: 'Сменить язык',
          features: 'Features',
          name: 'Name',
          save: 'Экономить',
          saveMessage: 'Сохранить успешно',
          saveMessage2: 'Settings saved. Some changes need a refresh of the game window.',
          setbonus2: 'Informations about the set bonuses',
          bonussearch2: 'Find items by bonus',
          frame2: 'Helpful web pages',
          npclocator2: 'Find quest givers on the map',
          choose: 'Click on the hat to get started',
          items: 'items',
          parts: 'parts',
          showItems: 'Show the set items in your Bag',
          noItems: 'No items in your inventory found. Click again with CTRL to show it on TW-Calc.',
          ownSets: 'Only own sets',
          switchWeapon: 'Switch between firearm and melee weapon',
          selectBonus: 'Select bonuses',
          resetB: 'Reset',
          body: 'Clothing',
          right_arm: 'Weapons',
          animal: 'Horse & Yield',
          other: 'Other',
          buff: 'Buffs',
          refresh: 'Refresh',
          noFriends: 'No Friends',
          reward: 'Reward',
          allprofessions: 'All Professions',
          market1: 'Items on market',
          market2: 'There are items/money on this market. What do you want to pick up?',
          all: 'All',
          onlyBids: 'Only bids',
          nothing: 'Nothing',
          worldwide: 'Worldwide',
          alliance: 'Alliance',
          town: 'Town',
          level: 'Level',
          duelLevel: 'Duelling level',
          exp: 'Exp',
          distance: 'Distance',
          startduel: 'Start Duel',
          centerMap: 'Center map',
          popup: 'The opponent\'s skill bonus',
          damage: 'Damage',
          duelmap: 'Duel map',
          duelradius: 'Duel radius',
          minutes: 'minutes',
          hour: '1 hour',
          hours: 'hours',
          searchOpp: 'Search for opponents',
          amount: 'Dead',
          not_dead_amount: 'Alive',
          duellevel: 'Lvl',
          pStatus: 'Status',
          sortBy: 'Sort by',
          tooLow: 'Too low duelling level of opponent',
          tooHigh: 'Too high duelling level of opponent',
          ownTown: 'Member of your town',
          attackable: 'Show only attackable players',
          youKO: 'You have duel protection',
          attDl: 'Attackable duelling levels',
          duelxp: 'Current duel experience',
          logout: 'Logout',
          accNfin: 'Accept & complete quest',
          onWiki: 'Show the quest on the wiki',
          longerName: 'Name must be longer than 2 characters',
          loading: 'Loading...',
          rename: 'Rename',
          newName: 'Choose a new set name',
          used: 'Used',
          renameWarning: 'When you rename a set, you will wear it and undress it again.<br>You may loose health points during the process!',
          sellItems: 'Sell items to the trader?',
          sellOpt: 'Mark these as unsellable',
          sellOpts: {
            sets: 'set items',
            named: 'NAMED items',
            reps: 'clothing for repeatable quests',
            auct: 'non-auctionable items',
          },
          sellOptInfo: 'Additionally TW Clothcache marks best work items as unsellable. See script settings:',
          removeWorkNotis: 'Hide all job notifications',
          compInv: 'Click on "cancel" to just show only auctionable items\n or\nEnter other inventory URL to compare',
          loginAll1: 'Login all worlds',
          loginAll2: 'Load all your active worlds with one click',
          custom1: 'Custom',
          custom2: 'Your custom login list',
          edit: 'Edit',
          CT: {
            ColorWindowTitle: 'Color tchat setting',
            ColorWindowPreviewTxt: '*Click on the letters to change color',
            ColorWindowOkBtn: 'Apply',
            ColorWindowToDefaultBtn: 'Set to default',
            ColorWindowThisTchatBtn: 'Set to this',
            ColorWindowDefaultText: 'Select the tchat for reset to default: ',
            ColorWindowBold: 'Bold',
            ColorWindowCaps: 'Capitalized',
            ColorWindowFlip: 'Flip',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'No color',
              'Enter a color code',
              'red',
              'brown',
              'purple',
              'blue',
              'green',
              'pink',
              'magenta',
              'violet gradient',
              'degraded dark blue',
              'green gradient',
              'degraded red',
              'blue gradient light',
              'degraded pink',
              'light green gradient',
              'degraded pink',
              'red gradient light'
            ],
            ColorLoadTitle: 'Click to load another color code<br>The current color code is: ',
            ColorSaveEmpty: '[empty]',
            CustomReady: 'Valid Code',
            CustomNotReady: 'Invalid Code',
          },
          QIS: {
            adventure: '*Adventures',
            work: '*Work',
            duel: '*Duels',
            energy: '*Energy',
            skill: '*Skill points',
            fk: '*Fort battles',
            speed: '*Speed',
            lp: '*Health points',
            luckNmoney: '*Luck & money',
            workmoti: '*Work motivation',
            duelmoti: '*Duel motivation',
            experience: '*Experience',
            special: '*Premium/special',
            events: '*Events',
            chests: '*Open & unpack',
            equipment: '-Equipment',
            products: '-Products',
            questitems: '-Quest items',
            craftitems: '-Craft items',
            recipes: '-Recipes',
            NAMED: 'NAMED',
            nothingFound: 'No items of this type found!',
          },
          NPC: {
            loading: 'Loading current quest givers',
            title: 'Расположение работодателя',
            chooseNpc: 'Выбор работодателя',
            yourposition: 'Твоё местоположение',
            questgiver: 'Квестодатель',
            reload: 'Reload all quest givers',
          },
          BS: {
            hero: 'HERO',
            heroT: 'Number of shots (taken & dodged) per 1000 HPs',
            rate: 'Rate',
            hitsTaken: 'Hits taken',
            dodgedShots: 'Dodged shots',
            startHP: 'Start HP',
            survivor: 'SURVIVOR',
            survivorT: 'Survivor with the fewest HPs at the end of the fort battle',
            endHP: 'End HP',
            sniper: 'SNIPER',
            sniperT: 'Number of successful hits (percentage) in relation to all shots fired',
            rateP: 'Rate(%)',
            hitCount: 'Hit count',
            missedShots: 'Missed shots',
            matrix: 'MATRIX',
            matrixT: 'Number of doged shots (percentage) in relation to all shots (taken & dodged)',
            terminator: 'TERMINATOR',
            terminatorT: 'Number of KOs (percentage) in relation to the successful hits',
            KOs: 'KOs',
            ranking: 'Ranking',
            statsTitle: 'Fort battle statistics',
            designation: 'Designation',
            attack: 'Attack',
            defense: 'Defense',
            difference: 'Difference',
            statistics: 'Statistics',
            code: 'Code',
            goBack: 'Go back',
            starsTitle: 'The stars of the battle',
            title: 'Title',
            name: 'Name',
            details: 'Details',
            start: ' HP - Start: ',
            end: ' - End: ',
            damageTaken: ' - Damage taken: ',
            avgHP: ' - HP per fighter: ',
            total: 'Total ',
            average: 'Average ',
            HP: 'HP',
            damage: 'Damage',
            avgDamage: 'Average damage',
            avgDamageMax: 'Average max damage',
            avgWeaponDamage: 'Average weapon damage',
            avgWeaponDamageMax: 'Weapon damage max',
          },
          KoM: {
            success: 'Лычка дана!',
            error: 'Произошла ошибка',
            showPlayerOnMap: 'Показать игрока на карте',
            showTown: 'Посмотреть город',
            showAlly: 'Открыть окно альянс',
            showFort: 'Show fort overview',
            showBattle: 'Show battlefield',
            atFort: 'At the fort',
            nearFort: 'Nearby the fort',
            notFort: 'Not at the fort',
            evaluated: 'Already evaluated',
            started: 'The battle is taking place right now',
            remindAlly: 'Remind ally members, which haven\'t participated yet',
            where: 'Where',
            when: 'When',
            att: 'Attackers',
            def: 'Defenders',
            getData: 'Пытаемся загрузить данные о званиях',
            appointTo: 'Произвести в %1',
            degradeTo: 'Назначить %1',
            astraitor: 'Обвинить в %1',
            youcant: 'Ты не можешь понизить старшего<br>или равного по званию.',
            position: 'Позиция',
            notown: 'Нет города',
            noally: 'Без альянса',
            damage: 'Урон',
            flag: 'Флаг',
            inside: 'Внутри форта',
            sectors: {
              undef: 'Не назначена',
              0: 'Левый верхний сектор',
              1: 'Левый нижний сектор',
              2: 'Левый южный сектор',
              3: 'Центральный южный сектор',
              4: 'Правый южный сектор',
              5: 'Правый нижний сектор',
              6: 'Правый верхний сектор',
              7: 'Башня авантов',
              8: 'Башня дуэлянтов',
              9: 'Башня солдат',
              10: 'Башня трудяг',
              11: 'Казарма',
              12: 'Склад',
              13: 'Штаб',
              14: 'Северная стена',
              15: 'Южная стена',
              16: 'Западная стена',
              17: 'Восточная стена',
              18: 'Ворота',
              19: 'Флаг',
            },
          },
        },
        tr: {
          language: 'Turkish (Türkçe)',
          ApiGui1: 'Bu komut dosyası, The Westteki günlük hayatınızı kolaylaştıracak birçok özellik içeriyor.<br>Daha Fazla Bilgi',
          ApiGui2: 'Komut dosyası sayfasını aç',
          Feat: {
            ColorTchat: '%0 Sohbete yeni özellikler ekler. Renkli metin, Emojiler 🐧🎉 vb..',
            QuickItemsSearch: '%0 Envanterinde güçlendirme kategorilerini ve setlerini ara',
            MarketBestBids: '%0 Açık artırmaları fiyata göre renklendirir %1 Yeşil %2 Teklif, satın alma fiyatından daha düşük %3 Siyah %4 Teklif, satın alma fiyatına eşittir %5 Mavi %6 Teklif, satın alma fiyatının %100 ile %200 ü arasındadır %7 Ağ %8 Teklif %200 ün üzerinde">',
            BattleStars: '%0 Kale savaş raporundaki ek istatistikler',
            KickoMatic: '%0 Kale savaşından önce oyuncuları sıralamak için yararlıdır',
            DuelMap: 'Düello penceresine bir düello haritası ekle',
            MarkDaily: '5. günün günlük giriş bonusunu kaçırmamak için işaretleyin',
            MarketMessage: 'Gerçek pazarda alınacak ürünler veya para olduğunda bildirim al',
            AchievHide: 'Başarı penceresinde tamamlanan başarıları gizle',
            RecipeMarket: 'Marketteki yemek tariflerinin satın alınmasını kolaylaştırın',
            MoveJobs: 'Kuyrukta bekleyen işleri biraz sola kaydır',
            InstantQuest: 'Tüm şartlar yerine getirildiğinde görevi anında tamamla',
            QuestWiki: 'Görev penceresine, görevi wiki sayfasında göstermek için bir bağlantı ekleyin',
            CityTravel: 'Tahtaya kasabalara olan yolculuk sürelerini yaz',
            BetterSheriff: 'Şerif penceresine yeni bir sekme ekleyerek tüm olası ödülleri görüntüleyin',
            ChatProfessions: 'Sohbet listesinde oyuncuların zanaat mesleklerini göster',
            QuestBookSearch: 'Görev defterinde tamamlanmış görevleri ara',
            MarketRights: 'Pazar tekliflerinin herkese açık mı yoksa sadece ittifak/kasaba üyeleri için mi olduğunu göster',
            EquipManagerPlus: 'Envanterdeki ekipman yöneticisini iyileştirin',
            ShortPopups: 'Ürün açılır pencerelerini daha kısa tutun',
            HideNotis: 'Sol taraftaki iş bildirimlerini gizlemek için bir düğme ekleyin',
            JobProducts: 'İş açılır penceresinde, envanterinizde halihazırda kaç ürün bulunduğunu göster',
            MapDistance: ' Seyahat süresinin yanında kilometre sayısını göster',
            TraderSell: 'Tüccara aynı anda birden fazla eşya sat',
            TouchControl: 'Mobil tarayıcınızda dokunmatik kontrolü etkinleştirin',
            FbRankingChar: 'Fortbattle dünya sıralamasında karakter sınıfını göster',
            DuelXpCalc: 'Oyuncu profillerinde düello deneyimini göster',
            ItemNew: 'Sahip olmadığınız tüccar ve piyasalardaki öğeleri işaretleyin',
            Logout: 'Sağ tarafa bir çıkış düğmesi ekleyin',
            Statusbar: 'Görev çubuğunu kaldır',
            ChangeCity: 'Belediye binasında başlık ve oyuncu adını değiştir',
            BlinkEvents: 'Sol taraftaki "Etkinlik" ve "İl Fuarı" düğmelerinin yanıp sönmesini durdurun',
            FortTracker: 'Kale savaşı hatırlatıcısını kapat',
            FriendsPop: '"Arkadaş çevrimiçi" açılır pencerelerini gizle',
          },
          settings1: 'Ayarları aç',
          settings2: 'Ayarlar ve bilgi penceresini aç',
          ghosttown2: 'Hayalet Kasaba',
          ghosttown3: 'Hayalet kasabayı aç ve haritada ortala',
          indiantown2: 'Waupee\'nin Kızılderili Köyüne Git',
          indiantown3: 'Hint köyünü aç ve haritada ortala',
          openmarket: 'Pazarı Aç',
          opentrader: 'Gezici Tüccarı Aç',
          forum: 'Forumu Aç',
          newsets: 'Senaryoya yeni sahneler eklendi',
          chooseItems: 'Öğeleri seçin',
          remindHover: 'Bir öğe yeniden kullanılabilir hale geldiğinde bir bildirim alırsınız. Buradan bu öğeleri seçebilirsiniz.',
          remindReady: 'Teslim almaya hazır',
          skipHover: 'Bazı poşetleri açarken onay ve sonuç mesajlarını atlayın. Burada bu poşetleri seçebilirsiniz',
          skipDone: 'Şunları elde edersiniz',
          info: 'Bilgi',
          contact: 'İletişim',
          chooseLang: 'Dili değiştir',
          features: 'Özellikler',
          name: 'Ad',
          save: 'Kurtarmak',
          saveMessage: 'Başarıyla kaydet',
          saveMessage2: 'Ayarlar kaydedildi. Bazı değişiklikler için oyun penceresinin yenilenmesi gerekiyor.',
          setbonus2: 'Set bonusları hakkında bilgiler',
          bonussearch2: 'Bonuslara göre ürünleri bul',
          frame2: 'Yararlı web sayfaları',
          npclocator2: 'Haritada görev verenleri bul',
          choose: 'Başlamak için şapkaya tıklayın',
          items: 'ürünler',
          parts: 'parçalar',
          showItems: 'Çantandaki ürünleri göster',
          noItems: 'Envanterinizde hiçbir öğe bulunamadı. TW-Calc ta görüntülemek için CTRL tuşuna basarak tekrar tıklayın.',
          ownSets: 'Yalnızca kendi setleri',
          switchWeapon: 'Ateşli silah ile yakın dövüş silahı arasında geçiş yap',
          selectBonus: 'Bonusları seçin',
          resetB: 'Sıfırla',
          body: 'Giyim',
          right_arm: 'Silahlar',
          animal: 'At ve Verim',
          other: 'Diğer',
          buff: 'Güçlendirmeler',
          refresh: 'Yenile',
          noFriends: 'Arkadaş yok',
          reward: 'Ödül',
          allprofessions: 'Tüm Meslekler',
          market1: 'Piyasadaki ürünler',
          market2: 'Bu pazarda ürünler ve para var. Ne almak istersin?',
          all: 'Tümü',
          onlyBids: 'Sadece teklifler',
          nothing: 'Hiçbir şey',
          worldwide: 'Dünya çapında',
          alliance: 'İttifak',
          town: 'Kasaba',
          level: 'Seviye',
          duelLevel: 'Dövüş seviyesi',
          exp: 'Deney',
          distance: 'Mesafe',
          startduel: 'Düelloyu Başlat',
          centerMap: 'Merkez haritası',
          popup: 'Rakip\'becerisi bonusu',
          damage: 'Hasar',
          duelmap: 'Çift harita',
          duelradius: 'Dövüş yarıçapı',
          minutes: 'dakika',
          hour: '1 saat',
          hours: 'saat',
          searchOpp: 'Rakip ara',
          amount: 'Ölü',
          not_dead_amount: 'Hayatta',
          duellevel: 'Seviye',
          pStatus: 'Durum',
          sortBy: 'Şu kriterlere göre sırala',
          tooLow: 'Rakibin düello seviyesi çok düşük',
          tooHigh: 'Rakibin düello seviyesi çok yüksek',
          ownTown: 'Kasabanızın bir sakini',
          attackable: 'Sadece saldırılabilir oyuncuları göster',
          youKO: 'Çift koruma özelliğine sahipsiniz',
          attDl: 'Saldırıya açık düello seviyeleri',
          duelxp: 'Mevcut düello deneyimi',
          logout: 'Çıkış',
          accNfin: 'Görevi kabul et ve tamamla',
          onWiki: 'Görevi wiki de göster',
          longerName: 'Ad, en az 2 karakterden oluşmalıdır',
          loading: 'Yükleniyor...',
          rename: 'Adını değiştir',
          newName: 'Yeni bir set adı seçin',
          used: 'Kullanılmış',
          renameWarning: 'Bir kıyafet setinin adını değiştirdiğinizde, onu giyip tekrar çıkarmanız gerekecektir.<br>Bu işlem sırasında sağlık puanlarınız azalabilir!',
          sellItems: 'Tüccara eşya satmak mı?',
          sellOpt: 'Bunları satılamaz olarak işaretle',
          sellOpts: {
            sets: 'set öğeleri',
            named: 'ADLI ürünler',
            reps: 'tekrar edilebilir görevler için kıyafetler',
            auct: 'açık artırmaya çıkarılmayan ürünler',
          },
          sellOptInfo: 'Ayrıca TW Clothcache, en iyi iş öğelerini satılamaz olarak işaretler. Komut dosyası ayarlarına bakın:',
          removeWorkNotis: 'Tüm iş bildirimlerini gizle',
          compInv: 'Sadece açık artırmaya çıkarılabilecek öğeleri görmek için "iptal"e tıklayın\n veya\nKarşılaştırmak için başka bir envanter URL si girin',
          loginAll1: 'Tüm dünyalara giriş yap',
          loginAll2: 'Tek bir tıklamayla tüm aktif dünyalarınızı yükleyin',
          custom1: 'Özel',
          custom2: 'Kişiselleştirilmiş giriş listeniz',
          edit: 'Düzenle',
          CT: {
            ColorWindowTitle: 'Renkli sohbet ayarı',
            ColorWindowPreviewTxt: '*Rengi değiştirmek için harflerin üzerine tıklayın',
            ColorWindowOkBtn: 'Başvur',
            ColorWindowToDefaultBtn: 'Varsayılana ayarla',
            ColorWindowThisTchatBtn: 'Buna ayarla',
            ColorWindowDefaultText: 'Varsayılana sıfırlamak için ilgili seçeneği seçin: ',
            ColorWindowBold: 'Top',
            ColorWindowCaps: 'Büyük harfle yazılmış',
            ColorWindowFlip: 'Çevir',
            ColorBtnTitle: '',
            ColorLoadListName: [
              'Renk yok',
              'Bir renk kodu girin',
              'ağ',
              'kahverengi',
              'mor',
              'mavi',
              'yeşil',
              'pembe',
              'magenta',
              'menekşe rengi degrade',
              'soluk koyu mavi',
              'yeşil degrade',
              'soluk kırmızı',
              'mavi tonlamalı ışık',
              'soluk pembe',
              'açık yeşil degrade',
              'soluk pembe',
              'kırmızı gradyanlı ışık'
            ],
            ColorLoadTitle: 'Başka bir renk kodunu yüklemek için tıklayın<br>Mevcut renk kodu: ',
            ColorSaveEmpty: '[boş]',
            CustomReady: 'Geçerli Kod',
            CustomNotReady: 'Geçersiz Kod',
          },
          QIS: {
            adventure: '*Maceralar',
            work: '*İş',
            duel: '*Duel',
            energy: '*Enerji',
            skill: '*Yetenek puanları',
            fk: '*Kale savaşları',
            speed: '*Hız',
            lp: '*Sağlık puanları',
            luckNmoney: '*Şans ve para',
            workmoti: '*İş motivasyonu',
            duelmoti: '*Motivasyon düellosu',
            experience: '*Deneyim',
            special: '*Premium/özel',
            events: '*Etkinlikler',
            chests: '*Aç ve ambalajını çıkar',
            equipment: '-Ekipman',
            products: '-Ürünler',
            questitems: '-Görev öğeleri',
            craftitems: '-El yapımı ürünler',
            recipes: '-Tarifler',
            NAMED: 'AD',
            nothingFound: 'Bu türde hiçbir öğe bulunamadı!',
          },
          NPC: {
            loading: 'Geçerli görev vericiler Yükleniyor',
            title: 'Görev verici haritası',
            chooseNpc: 'İşverenin seçimi',
            yourposition: 'Bulunduğunuz yer',
            questgiver: 'Görevin bulunduğu yer',
            reload: 'Tüm görev vericileri güncelle',
          },
          BS: {
            hero: 'Kahraman',
            heroT: '1000 HP başına atılan ve kaçırılan atış sayısı',
            rate: 'Oy ver',
            hitsTaken: 'Alınan vuruşlar',
            dodgedShots: 'Kaçırılan şutlar',
            startHP: 'HP yi başlat',
            survivor: 'SURVIVOR',
            survivorT: 'Kale savaşının sonunda en az can puanı olan hayatta kalan',
            endHP: 'HP nin sonu',
            sniper: 'Keskin nişancı',
            sniperT: 'Atılan tüm atışlara göre isabetli atış sayısı (yüzde)',
            rateP: 'Oran (%)',
            hitCount: 'Ziyaret sayısı',
            missedShots: 'Kaçırılan atışlar',
            matrix: 'MATRIX',
            matrixT: 'Tüm atışlara (yapılan ve kaçırılan) göre kaçırılan atışların sayısı (yüzde)',
            terminator: 'Terminatör',
            terminatorT: 'İsabetli vuruşlara göre nakavt sayısı (yüzde)',
            KOs: 'Eleme Turları',
            ranking: 'Sıralama',
            statsTitle: 'Kale savaşı istatistikleri',
            designation: 'Tanım',
            attack: 'Saldırı',
            defense: 'Savunma',
            difference: 'Fark',
            statistics: 'İstatistikler',
            code: 'Kod',
            goBack: 'Geri dön',
            starsTitle: "Savaşın yıldızları",
            title: 'Title',
            name: 'Ad',
            details: 'Ayrıntılar',
            start: ' HP - Başlangıç: ',
            end: ' - Son: ',
            damageTaken: ' - Alınan hasar: ',
            avgHP: ' - Savaşçı başına HP: ',
            total: 'Toplam ',
            average: 'Ortalama ',
            HP: 'Cep telefonu',
            damage: 'Hasar',
            avgDamage: 'Ortalama hasar',
            avgDamageMax: 'Ortalama maksimum hasar',
            avgWeaponDamage: 'Ortalama silah hasarı',
            avgWeaponDamageMax: 'Silah hasarı (maks.)',
          },
          KoM: {
            success: 'Sıralama açıklandı!',
            error: 'Bir hata oluştu',
            showPlayerOnMap: 'Oyuncuyu haritada göster',
            showTown: 'Şehre genel bakış',
            showAlly: 'İttifak özetini göster',
            showFort: 'Kaleye genel bakış',
            showBattle: 'Savaş alanını göster',
            atFort: 'Kalede',
            nearFort: 'Kalenin yakınında',
            notFort: 'Kaleye değil',
            evaluated: 'Değerlendirilen oyuncu sayısı',
            started: 'Savaş şu anda devam ediyor',
            remindAlly: 'Henüz katılmamış müttefik üyelere hatırlatın',
            where: 'Nerede',
            when: 'Ne zaman',
            att: 'Saldırganlar',
            def: 'Defans oyuncuları',
            getData: 'Sıralama bilgilerini yükleniyor',
            appointTo: '%1 e yükselt',
            degradeTo: '%1 e düşür',
            astraitor: '%1 olarak işaretle',
            youcant: '<br>Aynı veya daha yüksek rütbeli savaşçıları rütbelerini düşüremezsiniz.',
            position: 'Konum',
            notown: 'Hiçbir kasaba',
            noally: 'İttifak yok',
            damage: 'Hasar',
            flag: 'Bayrak',
            inside: 'Kalenin içinde',
            sectors: {
              undef: 'Başlangıç konumu yok',
              0: 'Sol üst köşe',
              1: 'Sol alt köşe',
              2: 'Merkez sol kesim',
              3: 'Alt orta bölüm',
              4: 'Merkez sağ kanat',
              5: 'Sağ alt bölüm',
              6: 'Sağ üst köşe',
              7: 'Maceracının kulesi',
              8: 'Düellocuların kulesi',
              9: 'Asker kulesi',
              10: 'İşçi kulesi',
              11: 'Kışla',
              12: 'Kaynak stoku',
              13: 'Merkez',
              14: 'Kuzey duvarı',
              15: 'Güney duvarı',
              16: 'Batı duvarı',
              17: 'Doğu duvarı',
              18: 'Kapı',
              19: 'Bayrak',
            },
          },
        },
      },
      url: '//tomrobert.safe-ws.de/',
      website: 'https://the-west-scripts.github.io/The-West-Essentials/',
      Images: function (img, file) {
        return this.url + img + (file ? '.jpg' : '.png');
      },
    };
    if (location.href.includes('game.php')) {
      var addTWX = {
        name: 'TW Essentials',
        author: 'Tom Robert',
        minGame: '2.0',
        maxGame: Game.version.toString(),
        SPEC: [
          'speed', 'luck', 'dollar', 'experience', 'regen', 'drop',
        ],
        list: null,
        currSetBonus: 0,
        currBonusSearch: '',
        lvlToggle: 0,
        setAbc: false,
        onlyOwnSets: false,
        chooseBonus: {
          subWeapon: 'hand'
        },
        Data: {},
        loaded: [],
        Features: {
          MarketBestBids: true,
          BattleStars: true,
          //Collections: true,
          KickoMatic: false,
          DuelMap: true,
          MarkDaily: true,
          MarketMessage: true,
          AchievHide: true,
          RecipeMarket: true,
          MoveJobs: true,
          InstantQuest: true,
          QuestWiki: true,
          CityTravel: true,
          BetterSheriff: true,
          ChatProfessions: true,
          QuestBookSearch: true,
          MarketRights: true,
          EquipManagerPlus: true,
          ShortPopups: true,
          HideNotis: true,
          JobProducts: true,
          MapDistance: true,
          TraderSell: true,
          TouchControl: true,
          FbRankingChar: true,
          DuelXpCalc: true,
          ItemNew: true,
          Statusbar: false,
          ChangeCity: false,
          Logout: false,
          BlinkEvents: false,
          FortTracker: false,
          FriendsPop: false,
        },
        CT: {},
        QIS: {},
        MBB: {},
        BS: {},
        KoM: {},
        cdown: {
          2482: [1],
          2484: [1],
          2485: [1],
          2557: [1, 0],
          2558: [1, 0],
          2665: [1, 4],
          2666: [1, 4],
          2698: [1, 1],
          50691: [1, 3],
          51482: [1, 2],
          51483: [1, 2],
          53042: [1, 3],
          53912: [1, 1],
        },
        cdownTimer: {},
        cdownSetTime: function (y, res, sec) {
          TWX.cdownTimer[y] = setTimeout(function () {
            var imgs = $('<span></span>');
            for (var z = 0; z < res.length; z++) {
              var itemDiv = new tw2widget.JobItem(res[z].obj).getMainDiv();
              imgs.append(itemDiv);
            }
            var cdownMsg = new west.gui.Dialog(TWXlang.remindReady, imgs, 'ok').addButton('ok', function () {
              Wear.open();
              Inventory.showSearchResult(res);
              cdownMsg.hide();
              TWX.cdownTimer[y] = 0;
            }).addButton('cancel').show();
          }, sec);
        },
        skipOpen: {
          1975: 1,
          2200: 1,
          2561: 0.5,
          2562: 0.5,
          2675: 0.5,
        },
        addStyle: function (css) {
          var style = document.createElement('style');
          style.type = 'text/css';
          style.innerHTML = css;
          document.body.appendChild(style);
        },
        replaceGaps: function (txt, arr) {
          return txt.replace(/%(\d)/g, function (f, p) {
            return arr[p] || p;
          });
        },
        updateLang: function () {
          let lgs = TWX.langs,
          lg = [localStorage.getItem('scriptsLang'), Game.locale.substr(0, 2)];
          TWX.lang = lgs[lg[0]] ? lg[0] : lgs[lg[1]] ? lg[1] : 'en';
          TWXlang = lgs[TWX.lang];
        },
      };
      Object.assign(TWX, addTWX);
      TWX.updateLang();
      TWX.Skript = {
        fmfb: function () {
          var fms = [['de', 'deutsches Forum'], ['net', 'English forum'], ['pl', 'forum polski'], ['es', 'foro español'], ['ru.com', 'Русский форум'], ['fr', 'forum français'], ['it', 'forum italiano'], ['net', 'beta forum', 'beta.']],
          add = '<h1>' + TWXlang.contact + '</h1><ul style="margin-left:15px;line-height:18px;"><li>Send a message to <a target=\'_blank\' href="//www.the-west.de/?ref=west_invite_linkrl&player_id=647936&world_id=13&hash=7dda">Tom Robert on German world Arizona</a></li><li>Message me on one of these The West Forum:<br>';
          for (var l of fms)
            add += '/ <a target=\'_blank\' href="//forum.' + (l[2] || '') + 'the-west.' + l[0] + '/index.php?conversations/add&to=Tom Robert">' + l[1] + '</a> ' + (l[0] == 'es' ? '<br>' : '');
          return add + '/<br>I will get an e-mail when you sent me the message <img src="images/chat/emoticons/smile.png"></li></ul>';
        },
        init: function () {
          TheWestApi.register('TWX', TWX.name, TWX.minGame, TWX.maxGame, TWX.author, TWX.website).setGui('<h1>' + TWXlang.info + '</h1><i>Language: </i>' + TWXlang.language + '<br><br>' + TWXlang.ApiGui1 + ': <a href="javascript:TWX.GUI.open(\'openFeatures\');TWX.GUI.makeList();">' + TWXlang.ApiGui2 + '</a><br><br><i>' + TWX.name + ' v' + TWX.version + '</i><br><br>' + this.fmfb());
          var menuContainer = $('<div class="menulink" onclick="TWX.GUI.openSelectbox();" title="' + TWX.name + '">').css('background-image', 'url(' + TWX.Images('LT_settings') + ')').css('background-position', '0px 0px').on('mouseenter', function () {
            $(this).css('background-position', '-25px 0px');
          }).on('mouseleave', function () {
            $(this).css('background-position', '0px 0px');
          });
          $('#ui_menubar').append($('<div id="TWX_menu" class="ui_menucontainer">').append(menuContainer).append('<div class="menucontainer_bottom">'));
          TWX.Skript.updateFeat();
          TWX.MinChat();
          TWX.SkipOpen();
        },
        updateFeat: function () {
          var saved = localStorage.getItem('TWLT');
          TWX.Data = saved && saved.indexOf('{') === 0 && JSON.parse(saved) || {};
          for (var k in TWX.Features) {
            if (TWX.Skript.getFeature(k) && !TWX.loaded.includes(k)) {
              try {
                TWX.loaded.push(k);
                TWX[k].init();
              } catch (e) {}
            }
          }
          TWX.CollectReminder();
        },
        getFeature: function (name) {
          return (TWX.Data[name] !== undefined) ? TWX.Data[name] : TWX.Features[name];
        },
      };
      GameMap.getLastQueuePosition = function () {
        var posx = Character.position.x;
        var posy = Character.position.y;
        if (TaskQueue.queue.length >= 1) {
          var data = TaskQueue.queue[TaskQueue.queue.length - 1].wayData;
          if (data.x) {
            posx = data.x;
            posy = data.y;
          }
        }
        return {
          x: posx,
          y: posy
        };
      };
      var EvName = Object.keys(Game.sesData)[0],
      sesEvs = ['Hearts', 'Easter', 'Independence', 'Octoberfest', 'DayOfDead'],
      set1 = west.storage.ItemSetManager._setList,
      perL = () => set1.instance_set_1.bonus[2][0].desc.match(/\(.*?\)/)[0],
      replUml = function (str) {
        return str.toUpperCase().replace(/"/g, '').replace(/[À-Ä]/g, 'A').replace(/[È-Ë]/g, 'E').replace(/[Ì-Ï]/g, 'I').replace(/[Ò-Ö]/g, 'O').replace(/[Ù-Ü]/g, 'U').replace(/Ś/g, 'S');
      },
      dLvlRange = function (dl) {
        return {
          min: Math.ceil(dl / 1.4 + 0.01),
          max: Math.min(450, Math.floor(dl * 1.4 - 0.01))
        };
      },
      emptyBoni = '{"attributes":[],"skills":[],"fortbattle":{"offense":0,"defense":0,"resistance":0},"fortbattlesector":{"defense":0,"offense":0,"damage":0},"item":[]}';
      if (EvName)
        var sendGift = Game.sesData[EvName].friendsbar;
      TWX.GUI = {
        openSelectbox: function () {
          TWX.GUI.makeList();
          var selectbox = new west.gui.Selectbox();
          $(selectbox.getMainDiv()).append('<div class="TWXselbox">');
          selectbox.setHeader(TWX.name);
          selectbox.setWidth(300);
          selectbox.addItem(0, TWXlang.settings1, TWXlang.settings2);
          selectbox.addItem(1, 'SetBonus', TWXlang.setbonus2);
          selectbox.addItem(2, 'BonusSearch', TWXlang.bonussearch2);
          selectbox.addItem(3, 'WebCenter', TWXlang.frame2);
          selectbox.addItem(4, 'NPC locator', TWXlang.npclocator2);
          //selectbox.addItem(5, 'Collections', '');
          selectbox.addItem(6, '<span src="images/quest/employer/ghosttown.png" style="display:inline-block;width:19px;height:19px;background:url(images/quest/employer/ghosttown.png) 0/19px;margin:-5px 0;"></span> ' + TWXlang.ghosttown2, TWXlang.ghosttown3);
          selectbox.addItem(7, '↪ ' + GameMap.calcWayTime(GameMap.getLastQueuePosition(), {
              x: 1728,
              y: 2081
            }).formatDuration());
          selectbox.addItem(8, '<span src="images/quest/employer/ghosttown.png" style="display:inline-block;width:19px;height:19px;background:url(images/quest/employer/indianvillage.png) 0/19px;margin:-5px 0;"></span> ' + TWXlang.indiantown2, TWXlang.indiantown3);
          selectbox.addItem(9, '↪ ' + GameMap.calcWayTime(GameMap.getLastQueuePosition(), {
              x: 28002,
              y: 16658
            }).formatDuration());
          selectbox.addItem(10, TWXlang.opentrader, TWXlang.opentrader);
          selectbox.addItem(11, TWXlang.openmarket, TWXlang.openmarket);
          selectbox.addItem(12, TWXlang.forum, TWXlang.forum);
          if (EvName) {
            selectbox.addItem(13, '<div style="text-overflow:ellipsis; white-space:nowrap; overflow:hidden;"><b>' + sendGift.label + '</b></div>', sendGift.label);
          }
          selectbox.addListener(function (e) {
            switch (e) {
            case 0:
              TWX.GUI.open('openFeatures');
              break;
            case 1:
              TWX.GUI.open('openBonusWindow', 0, 'SetBonus');
              break;
            case 2:
              TWX.GUI.open('openBonusWindow', 0, 'BonusSearch');
              break;
            case 3:
              TWX.GUI.open('openWebCenter');
              break;
            case 4:
              TWX.GUI.open('openNpcLocator');
              break;
            case 5:
              //TWX.GUI.open('openCollections');
              break;
            case 6:
              GameMap.center(1728, 2081);
              QuestEmployerWindow.showEmployer('ghosttown', '1728', '2081');
              break;
            case 7:
              QuestEmployerWindow.startWalk({
                key: 'ghosttown',
                x: 1728,
                y: 2081
              });
              break;
            case 8:
              GameMap.center(28002, 16658);
              QuestEmployerWindow.showEmployer('indianvillage', '28002', '16658');
              break;
            case 9:
              QuestEmployerWindow.startWalk({
                key: 'indianvillage',
                x: 28002,
                y: 16658
              });
              break;
            case 10:
              west.window.shop.open().showCategory('trader');
              break;
            case 11:
              MarketWindow.open(Character.homeTown.town_id);
              break;
            case 12:
              ForumWindow.open();
              break;
            case 13:
              TWX.GUI.open('openSender');
              break;
            }
          });
          var pos = $('div#TWX_menu').offset();
          pos = {
            clientX: pos.left,
            clientY: pos.top
          };
          selectbox.show(pos);
        },
        window: {},
        checkbox: {},
        open: function (tab, data, id) {
          TWX.GUI.window = wman.open('TWX', TWX.name, 'noreload').setMiniTitle(TWX.name).setMaxSize(1268, 838).addTab(TWXlang.features, 'TWXFeatures', TWX.GUI.openFeatures).addTab('Bonus/Sets', 'TWXBonusWindow', TWX.GUI.openBonusWindow).addTab('WebCenter', 'TWXWebCenter', TWX.GUI.openWebCenter).addTab('NPC locator', 'TWXLocator', TWX.GUI.openNpcLocator);
          if (EvName)
            TWX.GUI.window.addTab('Event', 'TWXSender', TWX.GUI.openSender);
          TWX.GUI[tab](data, id);
          $('.tw2gui_window_inset', TWX.GUI.window.getMainDiv()).css('background-image', 'url(' + TWX.Images('LT_backGr', 1) + ')');
        },
        getDefault: function (tab, bT, size, nClose, res) {
          bT = bT ? ['none', '-30px'] : ['', '0px'];
          res = res ? true : false;
          var TGw = TWX.GUI.window,
          wnd = TGw.getMainDiv();
          TGw.setResizeable(res).clearContentPane().activateTab(tab);
          if (!Array.isArray(size) && !['TWXWebCenter'].includes(tab))
            size = [748, 471];
          if (Array.isArray(size))
            TGw.setSize(size[0], size[1]);
          if (nClose)
            TGw.addClass('nocloseall').dontCloseAll = true;
          else
            TGw.removeClass('nocloseall').dontCloseAll = false;
          $('.textart_title', wnd).css('display', bT[0]);
          $(TGw.getContentPane()).css('margin-top', bT[1]);
        },
        openFeatures: function () {
          TWX.GUI.getDefault('TWXFeatures');
          TWX.GUI.window.setTitle(TWX.name + ' v' + TWX.version);
          var featScroll = new west.gui.Scrollpane().appendContent('<h2>' + TWXlang.chooseLang + '</h2>'),
          langBox = new west.gui.Combobox().appendTo(featScroll.getContentPane()),
          closeTxt = west.player.PremiumPurchase.prototype._l10n.buttons.close;
          for (var j in TWX.langs)
            langBox.addItem(j, TWX.langs[j].language);
          langBox.select(TWX.lang);
          TWX.cdTemp = TWX.Data.cooldown ? $.extend({}, TWX.Data.cooldown) : {};
          $('<span title="' + TWXlang.remindHover + '" style="background-image: url(images/items/yield/low_heart_container.png);cursor:pointer;position:absolute;height:73px;width:73px;right:0px;top:0px;">').appendTo(featScroll.getContentPane()).click(function () {
            var cont = $('<span>');
            for (var x in TWX.cdown) {
              var igc = ItemManager.getByBaseId(x);
              if (igc) {
                var productDiv = new tw2widget.JobItem(igc).getMainDiv();
                $(productDiv).css('opacity', TWX.cdTemp[x] || TWX.cdown[x][0]).attr('onclick', 'TWX.cdTemp[' + x + ']=$(this).css("opacity")==1?0.5:1;$(this).css("opacity",TWX.cdTemp[' + x + ']);');
                cont.append(productDiv);
              }
            }
            new west.gui.Dialog(TWXlang.chooseItems, cont).addButton(closeTxt).show();
          });
          TWX.skipTemp = TWX.Data.skipOpen ? $.extend({}, TWX.Data.skipOpen) : $.extend({}, TWX.skipOpen);
          var openSkipList = function () {
            var cont2 = $('<span></span>');
            for (var x in TWX.skipTemp) {
              var productDiv2 = new tw2widget.JobItem(ItemManager.getByBaseId(x)).getMainDiv(),
              productDel = new west.gui.Icon('abort ' + x).getMainDiv().click(function (e) {
                e.stopPropagation();
                e.target.parentElement.remove();
                delete TWX.skipTemp[e.target.classList[2]];
              });
              $(productDel).css({
                'display': 'inline-block',
                'position': 'absolute',
                'right': '0px'
              });
              $(productDiv2).css('opacity', TWX.skipTemp[x]).attr('onclick', 'TWX.skipTemp[' + x + ']=$(this).css("opacity")==1?0.5:1;$(this).css("opacity",TWX.skipTemp[' + x + ']);').append(productDel);
              cont2.append(productDiv2);
            }
            var itemPrew = $('<div id="TWX_add_chest_prew" style="height:73px;width:73px;border:1px solid;border-radius:10px;float:left"><br>');
            var textFP = new west.gui.Textfield('add_skipOpen_chest').maxlength(6).setPlaceholder('item_base_id').addKeyUpListener(function (e) {
              $('#TWX_add_chest_prew').empty();
              iconP.disable();
              var val = e.target.value;
              if (!isNaN(val) && val < forbid.maxID) {
                var item = ItemManager.getByBaseId(val);
                if (item) {
                  $('#TWX_add_chest_prew').append(new tw2widget.JobItem(item).getMainDiv());
                  if (item.action.endsWith(",'yield');") && !TWX.skipTemp[val])
                    iconP.enable();
                }
              }
            }),
            iconP = new west.gui.Iconbutton(new west.gui.Icon('plus'), function () {
              TWX.skipTemp[textFP.getValue()] = 1;
              skipList.hide();
              openSkipList();
            }).disable(),
            iconA = new west.gui.Icon('abort').getMainDiv().click(function () {
              textFP.setValue('');
              $('#TWX_add_chest_prew').empty();
              iconP.disable();
            });
            cont2.append(itemPrew, textFP.getMainDiv(), iconP.getMainDiv(), iconA);
            var skipList = new west.gui.Dialog(TWXlang.chooseItems, cont2).setBlockGame(false).setDraggable(true).addButton(closeTxt).show();
          };
          $('<span title="' + TWXlang.skipHover + '" style="background-image:url(images/items/yield/productchest_1.png);cursor:pointer;position:absolute;height:73px;width:73px;right:0px;top:73px;">').appendTo(featScroll.getContentPane()).click(openSkipList);
          featScroll.appendContent('<br><br><h2>' + TWXlang.features + '</h2>');
          var textGap = {
            ColorTchat: ['Color tchat:'],
            QuickItemsSearch: ['Quick items search:'],
            MarketBestBids: ['Market best bids:', '<img src="images/admin/admin_help.png" title="<span style=\'color:green;\'>', '</span>–', '<br>', '–', '<br><span style=\'color:blue;\'>', '</span>–', '<br><span style=\'color:red;\'>', '</span>–'],
            BattleStars: ['Battle Stars:'],
            KickoMatic: ['Kick-o-Matic:'],
          };
          for (var k in TWX.Features) {
            var label = textGap[k] ? TWX.replaceGaps(TWXlang.Feat[k], textGap[k]) : TWXlang.Feat[k];
            TWX.GUI.checkbox[k] = new west.gui.Checkbox().setLabel(label).setSelected(TWX.Skript.getFeature(k)).appendTo(featScroll.getContentPane());
            featScroll.appendContent('<br><div style="height:5px;">');
          }
          featScroll.appendContent('<br>');
          $(featScroll.getMainDiv()).css({
            'height': '330px',
            'margin-top': '10px'
          });
          var button = new west.gui.Button(TWXlang.save, function () {
            localStorage.setItem('scriptsLang', langBox.getValue());
            TWX.updateLang();
            for (var k in TWX.GUI.checkbox)
              TWX.Data[k] = TWX.GUI.checkbox[k].isSelected();
            TWX.Data.cooldown = TWX.cdTemp;
            TWX.Data.skipOpen = TWX.skipTemp;
            localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
            TWX.Skript.updateFeat();
            new UserMessage(TWXlang.saveMessage2, 'success').show();
          });
          $(TWX.GUI.window.getContentPane()).append(featScroll.getMainDiv()).append(button.getMainDiv());
        },
        getSlotsItems: function (sla) {
          var sa = TWX.setListAll[sla];
          slot = {
            2: ['animal', 'yield'],
            3: ['right_arm', 'left_arm'],
            6: ['body', 'pants', 'neck', 'head', 'foot', 'belt']
          },
          ims = sa.items,
          sil = ims.length,
          nims = [];
          sa.slots = slot[sil] && slot[sil].includes(ItemManager.getByBaseId(sa.items[0]).type) ? slot[sil][0] : 'other';
          var bon = {},
          oneType = [],
          c = 1;
          for (var o = 0; o < ims.length; o++) {
            var igt = Bag.getItemsByBaseItemId(ims[o])[0] || Wear.getByBaseId(ims[o]);
            if (igt) {
              nims.push(ims[o]);
              if (oneType.includes(igt.obj.type)) { //range-melee or irish set..
                --c;
                continue;
              }
              if (sa.bonus[o + c])
                bon[o + c] = sa.bonus[o + c];
              oneType.push(igt.obj.type);
            } else
              --c;
          }
          if (nims.length) {
            TWX.setListOwn[sla] = {
              items: nims,
              bonus: bon,
              name: sa.name,
              slots: sa.slots,
            };
          }
        },
        makeList: function () {
          if (!TWX.list) {
            $.getScript(TWX.website + 'files/newSets.js', function () {
              TWX.list = west.storage.ItemSetManager._setArray.slice(0);
              TWX.setListAll = {};
              TWX.setListOwn = {};
              TWX.itemListAll = {};
              TWX.itemListOwn = {};
              var i = TWX.list.length;
              while (i--) {
                var si = TWX.list[i];
                if (!forbid.sets.includes(si.key) && si.items[0] && !ItemManager.getByBaseId(si.items[0]).short.includes('friendset_') && !si.key.includes('friendship_set_'))
                  TWX.setListAll[si.key] = si;
                else
                  TWX.list.splice(i, 1);
              }
              TWX.setLength = Object.keys(TWX.setListAll).length;
              var aycount;
              for (var sla in TWX.setListAll) {
                var sa = TWX.setListAll[sla],
                ims = sa.items,
                sil = ims.length;
                //special case: 1 animal, 2 yield:
                if (sil == 3) {
                  aycount = {
                    animal: [],
                    yield: []
                  };
                  for (var sit = 0; sit < sil; sit++) {
                    var sis = ItemManager.getByBaseId(ims[sit]).type;
                    if (aycount[sis])
                      aycount[sis].push(sit);
                  }
                  var ay = aycount.yield;
                  if (aycount.animal.length == 1 && ay.length == 2) {
                    var sla2 = sla + '_twx2';
                    TWX.setListAll[sla2] = structuredClone(sa);
                    TWX.setListAll[sla2].twx_2_sets = ItemManager.getByBaseId(ims[ay[1]]).name;
                    TWX.setListAll[sla2].items.splice(ay[0], 1);
                    sa.twx_2_sets = ItemManager.getByBaseId(ims[ay[0]]).name;
                    ims.splice(ay[1], 1);
                    TWX.GUI.getSlotsItems(sla2);
                  }
                }
                //special case: gender animal set:
                else if (sil == 4) {}
                TWX.GUI.getSlotsItems(sla);
              }
              TWX.list.sort(function (a, b) {
                var a1 = replUml(a.name),
                b1 = replUml(b.name);
                return (a1 == b1) ? 0 : (a1 > b1) ? 1 : -1;
              });
              var collect = set1.collector_set.bonus[9], //pray
              pilg = set1.set_pilgrim_male.bonus[2], //build
              hero = set1.independance_event_set7.bonus[2], //drop
              delChar = function (typ, nam, brk) {
                var descr = nam ? west.item.BonusExtractor.prototype.getDesc({
                  type: typ,
                  name: nam,
                  isSector: brk,
                  value: ''
                }) : typ.desc;
                if (brk == -1)
                  descr = descr.replace(/\(.+?\)/, '');
                return descr.replace(/[0-9]|\+|\.|\%/g, '').trim();
              };
              TWX.searchObj = {
                offense: [delChar(collect[5], 0, -1), 'fort/battle/button_attack'],
                offensetrue: [delChar('fortbattle', 'offense', 1), 'fort/battle/help01'], //collection/item_51474
                defense: [delChar(hero[13], 0, -1), 'fort/battle/button_defend'],
                defensetrue: [delChar('fortbattle', 'defense', 1), 'fort/battle/help02'],
                resistance: [delChar('fortbattle', 'resistance'), 'fort/battle/resistance'],
                damagetrue: [delChar('fortbattle', 'damage', 1), 'items/collection/item_52801'],
                dmgfb: [delChar('fortbattle', 'damage', -1) + ' ' + Inventory.categoryDesc.left_arm, 'items/left_arm/item_53232'],
                dmgduel: [delChar('fortbattle', 'damage', -1) + ' ' + Inventory.categoryDesc.right_arm, 'items/right_arm/item_53228'],
                experience: [delChar(hero[10]), 'items/yield/xp_boost'],
                dollar: [delChar(hero[11]), 'items/yield/dollar_boost'],
                luck: [delChar(collect[2]), 'items/yield/luck_boost'],
                drop: [delChar(hero[9]), 'items/yield/product_boost'],
                joball: [delChar(collect[0]), 'window/job/jobstar_small_gold'],
                speed: [delChar(collect[1]), 'jobs/walk'],
                regen: [delChar(collect[3]), 'jobs/sleep'],
                pray: [delChar(collect[4]), 'jobs/pray'],
                job1000: [delChar(pilg[4]), 'jobs/build'],
              };
              for (var ca = 0; ca < CharacterSkills.allSkillKeys.length; ca++) {
                if (ca % 5 === 0) {
                  var attr = CharacterSkills.allAttrKeys[ca / 5];
                  TWX.searchObj[attr] = [CharacterSkills.keyNames[attr], 'window/skills/circle_' + attr, 'attr'];
                }
                var skill = CharacterSkills.allSkillKeys[ca];
                TWX.searchObj[skill] = [CharacterSkills.keyNames[skill], 'window/skills/skillicon_' + skill];
              }
              var getAvg = function (bvl) {
                bvl = bvl.match(/(\d+\.?\d*)-?(\d*)/);
                return bvl[2] ? (bvl[1] * 1 + bvl[2] * 1) / 2 : bvl[1];
              },
              addItems = function (obj, state) {
                var ob = obj.bonus,
                boni = {
                  1: []
                },
                slot = 'item';
                if (JSON.stringify(ob) != emptyBoni) {
                  boni[1] = ob.item.slice();
                  for (var cat in ob) {
                    var obc = ob[cat];
                    if (cat == 'item')
                      continue;
                    for (var type in obc) {
                      var ct = obc[type];
                      if (ct > 0) {
                        boni[1].push({
                          name: type,
                          value: ct,
                          isSector: cat == 'fortbattlesector'
                        });
                      }
                    }
                  }
                } else if (obj.usebonus) {
                  slot = 'buff';
                  for (var oub of obj.usebonus) {
                    if (!oub)
                      continue;
                    var desc = TWX.QIS.buffDesc(oub),
                    useb = TWX.QIS.useboni[desc];
                    if (TWX.searchObj[useb])
                      boni[1].push({
                        name: useb,
                        value: getAvg(oub),
                        key: oub.includes(perL())
                      });
                  }
                }
                if (obj.damage) {
                  boni[1].push({
                    name: obj.type == 'left_arm' ? 'dmgfb' : 'dmgduel',
                    value: getAvg(Object.values(obj.damage).join('-'))
                  });
                }
                if (boni[1].length)
                  TWX['itemList' + state][obj.item_base_id] = {
                    bonus: boni,
                    name: obj.name,
                    slots: slot,
                    item_level: obj.item_level,
                  };
              };
              var allItems = ItemManager.getAll();
              for (var k in allItems)
                if (k > 9 && k < forbid.maxID && !forbid.IDs.includes(k * 1) && !(allItems[k].set && !TWX.setListAll[allItems[k].set]))
                  addItems(allItems[k], 'All');
              for (var l in Bag.items_by_id)
                addItems(Bag.items_by_id[l].obj, 'Own');
              for (var m in Wear.wear)
                addItems(Wear.wear[m].obj, 'Own');
              /*if (!TWX.Data.fDate || Date.parse(forbid.date) > TWX.Data.fDate) {
              var setNames = '',
              nSets = forbid.unlock;
              for (var h of nSets)
              setNames += TWX.GUI.getSetOrItem(h, set1[h]) + '<br>';
              new west.gui.Dialog(TWX.name, '<span><b>' + forbid.date.toDateString() + '</b><br>' + TWXlang.newsets + ':<br><br>' + setNames + '</span>', west.gui.Dialog.SYS_OK).setBlockGame(false).setDraggable(true).addButton('ok').show();
              TWX.Data.fDate = Date.parse(forbid.date);
              localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
              }*/
            });
          }
        },
        itemsInInv: function (id) {
          var upgrade = isNaN(id) ? TWX.currList[id].items : [id],
          items = [];
          for (var g of upgrade) {
            for (var h = 0; h <= 5; h++) {
              items.push(g * 1000 + h);
            }
          }
          var invItems = Bag.getItemsByItemIds(items);
          if (invItems.length > 0 || Wear.item_ids.includes(items[0])) {
            Wear.open();
            Inventory.showCustomItems(invItems);
          } else
            new UserMessage(TWXlang.noItems, 'hint').show();
        },
        getSetOrItem: function (id, obj, nolink) {
          if (!obj)
            return id;
          var isItem = !isNaN(id),
          nNew = /*window.forbid && (isItem && id >= forbid.unlockID || !isItem && forbid.unlock.includes(id)) ? '<img src="' + TWX.Images('new') + '">' :*/ '',
          nLvl = obj.item_level ? '<img src="images/items/item_level.png"><span style="font-size: 11px;color:#ffffff;text-shadow:black -1px 0 1px,black 0 1px 1px,black 1px 0 1px,black 0 -1px 1px;">' + obj.item_level + '</span>' : '',
          options = {
            show_alreadyown: true
          };
          if (TWX.lvlToggle)
            options.character = {
              level: TWX.lvlToggle
            };
          var nPopup = 'data-setkey="' + id + '"',
          click = 'onclick="TWX.GUI.itemsInInv(\'' + id + '\')"',
          img = '';
          if (isItem) {
            var itemId = id + '00' + obj.item_level,
            item = ItemManager.get(itemId);
            nPopup = 'data-itemid="' + itemId + '" title="' + (new ItemPopup(item, options).getXHTML().escapeHTML()) + '"';
            img = '<img src="' + item.image + '" width="25">';
          } else if ($('.TWXabcSets').length)
            nPopup += 'title="' + TWXlang.showItems + '" style="color:#FFE7B1;"';
          else
            click = 'onclick="TWX.GUI.open(\'openBonusWindow\',\'' + id + '\',\'SetBonus\')"';
          if (nolink)
            click = '';
          return '<b><span class="linklike" ' + nPopup + click + '>' + nNew + img + nLvl + obj.name + '</span></b>';
        },
        newState: '',
        html: {},
        openBonusWindow: function (st, tab) {
          var size = 0,
          btns = ['SetBonus', 'BonusSearch'],
          newSet = false;
          tab = TWX.currTab = btns.includes(tab) && tab || TWX.currTab || btns[0];
          if (tab == btns[1])
            size = [1060, 471];
          TWX.GUI.getDefault('TWXBonusWindow', 0, size);
          TWX.GUI.window.setTitle(tab);
          if (typeof st === 'string') {
            newSet = true;
            TWX['curr' + tab] = st;
          }
          var scrollpane = new west.gui.Scrollpane('TWXBonusScroll');
          $(scrollpane.getMainDiv()).css({
            'margin-left': '105px',
            'margin-top': '10px',
            'width': '593px'
          });
          var types = {},
          lvlUp = function (level, value, ned) {
            var mupl = (value < 1 || ned) ? 10000 : 1,
            ret = !level ? 0 : Math.round(Math.max(1, value * level * 0.1 * mupl)) / mupl;
            return value + ret;
          },
          charLvl = Character.level,
          getBonImg = function (n, w) {
            var son = TWX.searchObj[n] || JobList.getJobById(n.slice(3));
            return '<img src="images/' + (son[1] || 'jobs/' + son.shortname) + '.png" width="' + w + '" title="' + (son[0] || son.name) + '">';
          },
          cdmg = '',
          wpntyp = {
            dmgfb: 'right_arm',
            dmgduel: 'left_arm'
          },
          compare = function (sets, id, list) {
            for (var i in sets) {
              var si = sets[i],
              itm;
              if (list) {
                itm = ItemManager.getByBaseId(i);
                if (itm.sub_type == id.subWeapon)
                  continue;
              }
              for (var k in si.bonus)
                for (var ID of si.bonus[k]) {
                  var ib = ID.bonus || ID,
                  NAM = (ib.name || ib.type) + (ib.job || ib.isSector || '');
                  if (id[NAM]) {
                    if (cdmg && list && NAM == 'damage' && itm.type == wpntyp[cdmg])
                      continue;
                    var spnm = TWX.SPEC.includes(NAM),
                    plbn = ID.key && !TWX.lvlToggle;
                    if (!types[i]) {
                      types[i] = {
                        desc: (spnm ? '% ' : ' ') + (plbn ? perL() : ''),
                        value: {},
                        values: {},
                        compVal: {
                          sum: 0
                        },
                        slots: si.slots,
                        name: si.name,
                        item_level: si.item_level,
                        items: si.items,
                        itmVal: 0,
                        twx_2_sets: si.twx_2_sets,
                      };
                    }
                    var tiv = types[i].value;
                    if (!tiv[NAM])
                      tiv[NAM] = 0;
                    tiv[NAM] += ib.value;
                    var NUM = tiv[NAM] * (spnm && types[i].slots != 'buff' ? 100 : 1),
                    lvl = TWX.lvlToggle || Character.level,
                    ned = wpntyp[NAM] && tiv.damage && !TWX.lvlToggle;
                    var VAL = NUM;
                    if (ID.key)
                      VAL = Math.ceil(lvl * VAL);
                    else if (ned)
                      NUM /= lvl;
                    VAL = lvlUp(si.item_level, VAL);
                    NUM = TWX.lvlToggle ? VAL : lvlUp(si.item_level, NUM, (plbn || ned));

                    if (!types[i].values[k])
                      types[i].values[k] = $.extend({
                        sum: 0
                      }, types[i].values[k - 1]);
                    types[i].values[k][NAM] = NUM * id[NAM];
                    types[i].compVal[NAM] = VAL * id[NAM];
                    types[i].parts = k;
                  }
                }
              if (types[i]) {
                for (var cv in types[i].compVal) {
                  types[i].compVal.sum += types[i].compVal[cv];
                  for (var nv in types[i].values)
                    types[i].values[nv].sum += types[i].values[nv][cv] || 0;
                }
                if (si.items) {
                  var oneType = []; //irish set (gender)..
                  for (var is of si.items) {
                    var imt = ItemManager.getByBaseId(is).type;
                    if (types[is] && !oneType.includes(imt)) {
                      types[i].compVal.sum += types[is].compVal.sum;
                      types[i].itmVal += types[is].values[1].sum;
                      oneType.push(imt);
                    }
                  }
                }
              }
            }
          },
          reloadLvl = 0,
          showbonus = {
            'SetBonus': function (id) {
              TWX.currSetBonus = id;
              scrollpane.contentPane.empty();
              types = {};
              var sets = TWX.currList[id];
              if (!sets)
                return;
              TWX.GUI.window.setTitle(TWX.GUI.getSetOrItem(id, sets));
              var spCont = '<span style="width:60%;position:absolute;">';
              for (var k in sets.bonus) {
                spCont += '<b>' + k + ' ' + TWXlang.items + ':</b><br>';
                for (var ID of sets.bonus[k]) {
                  var ib = ID.bonus || ID;
                  var NAM = (ib.name || ib.type) + (ib.job || ib.isSector || '');
                  if (!types[NAM]) {
                    var DESC = ID.desc && (TWX.lvlToggle && ID.key && ID.desc.replace(/[0-9]|\+|\.|\([^)]+\)$/g, '') || ID.desc.replace(/[0-9]|\+|\./g, '')) || CharacterSkills.keyNames[NAM];
                    types[NAM] = {
                      key: (ID.key || 0),
                      desc: DESC,
                      value: 0
                    };
                  }
                  types[NAM].value += ib.value;
                }
                for (var m in types) {
                  var n = types[m];
                  var NUM = n.value * (TWX.SPEC.includes(m) ? 100 : 1);
                  var VAL = TWX.lvlToggle && n.key ? Math.ceil(NUM * TWX.lvlToggle) : Math.round(NUM * 1000) / 1000;
                  spCont += getBonImg(m, 23) + ' + ' + VAL + ' ' + n.desc + '<br>';
                }
              }
              spCont += '</span><span style="width:40%;left:60%;position:absolute;">';
              for (var o of TWX.currList[id].items)
                spCont += TWX.GUI.getSetOrItem(o, TWX['itemList' + TWX.currState][o]) + '<br>';
              scrollpane.appendContent(spCont);
              setTimeout(function () {
                var cont = $('div.TWXBonusScroll div.tw2gui_scrollpane_clipper_contentpane > span');
                cont.parent().height(cont.height() + 10);
              }, 100);
            },
            'BonusSearch': function (idString) {
              var id = JSON.parse(idString);
              if (Object.keys(id).length > 2 && !TWX.lvlToggle) {
                TWX.currBonusSearch = idString;
                return lvlBox.select(charLvl);
              }
              scrollpane.contentPane.empty();
              types = {};
              var title = '';
              for (var oi in TWX.searchObj)
                if (id[oi])
                  title += getBonImg(oi, 35) + ' ';
              TWX.GUI.window.setTitle(title);
              var ns = '' + TWX.lvlToggle + TWX.onlyOwnSets;
              if (idString != TWX.currBonusSearch || ns != TWX.GUI.newState || reloadLvl) {
                TWX.currBonusSearch = idString;
                TWX.GUI.newState = ns;
                reloadLvl = 0;
                cdmg = (id.dmgfb ? 'dmgfb' : id.dmgduel ? 'dmgduel' : '');
                if (cdmg)
                  id.damage = id[cdmg];
                compare(TWX['itemList' + TWX.currState], id, 1);
                compare(TWX.currList, id);
                var types2 = Object.keys(types).sort(function (a, b) {
                  return types[b].compVal.sum / types[b].parts - types[a].compVal.sum / types[a].parts;
                }),
                icb = 0;
                ici = 0;
                TWX.GUI.html = {
                  body: '',
                  right_arm: '',
                  animal: '',
                  other: '',
                  item: '',
                  buff: '',
                };
                for (var type of types2) {
                  var n = types[type];
                  if (n.slots == 'item' && ici++ > 200 || n.slots == 'body' && icb++ > 100)
                    continue;
                  var setval = 0;
                  TWX.GUI.html[n.slots] += '<br>' + TWX.GUI.getSetOrItem(type, n) + (n.twx_2_sets ? ' <i>(' + n.twx_2_sets + ')</i>' : '') + '<br>';
                  for (var o in n.values) {
                    if (o == 'sum')
                      continue;
                    var pre = (['item', 'buff'].includes(n.slots) ? '' : o + ' ' + TWXlang.parts + ':');
                    TWX.GUI.html[n.slots] += pre + ' +' + (Math.round(n.values[o].sum * 1000) / 1000) + n.desc + '<br>';
                    setval = n.values[o].sum;
                  }
                  if (n.items) {
                    var vi = n.itmVal + setval;
                    if (`${vi}`.length > 15)
                      vi = Math.round(vi * 100) / 100;
                    TWX.GUI.html[n.slots] += `& ${TWXlang.items}: ${vi}<br>`;
                  }
                }
              }
              scrollpane.appendContent('<span class="TWXBonusS body" style="width:16%;position:absolute;"><h4>' + TWXlang.body + '</h4></span><span class="TWXBonusS right_arm" style="width:16%;left:17%;position:absolute;"><h4>' + TWXlang.right_arm + '</h4></span><span class="TWXBonusS animal" style="width:16%;left:34%;position:absolute;"><h4>' + TWXlang.animal + '</h4></span><span class="TWXBonusS other" style="width:16%;left:51%;position:absolute;"><h4>' + TWXlang.other + '</h4></span><span class="TWXBonusS item" style="width:16%;left:68%;position:absolute;"><h4>' + TWXlang.items + '</h4></span><span class="TWXBonusS buff" style="width:16%;right:0;position:absolute;"><h4>' + TWXlang.buff + '</h4></span>');
              for (var hs in TWX.GUI.html)
                $('.TWXBonusS.' + hs).append(TWX.GUI.html[hs]);
              setTimeout(function () {
                var maxHeight = 0;
                for (var h of $('div.TWXBonusScroll span.TWXBonusS'))
                  if (h.clientHeight > maxHeight)
                    maxHeight = h.clientHeight;
                $('div.TWXBonusScroll div.tw2gui_scrollpane_clipper_contentpane').height(maxHeight + 10);
              }, 200);
            },
          },
          loadResult = function () {
            if (TWX.setLength <= forbid.max || TWX.onlyOwnSets || newSet) {
              if (TWX['curr' + tab])
                showbonus[tab](TWX['curr' + tab]);
              newSet = false;
            }
          },
          selbox,
          loadSelbox = function () {
            TWX.currState = TWX.onlyOwnSets ? 'Own' : 'All';
            TWX.currList = TWX['setList' + TWX.currState];
            selbox = new west.gui.Selectbox().setWidth(250);
            TWX.GUI.window.setTitle(tab);
            scrollpane.contentPane.empty();
            if (TWX.setLength <= forbid.max || TWX.onlyOwnSets) {
              if (tab == 'SetBonus') {
                selbox.addListener(showbonus.SetBonus);
                var sbaI = function (j) {
                  var sj = TWX.currList[j];
                  selbox.addItem(j, '<img src=' + (/*forbid.unlock.includes(j) ? TWX.Images('new') :*/ ItemManager.getByBaseId(sj.items[0]).image) + ' height="20" width="20"><div style="padding-right:20px;text-overflow:ellipsis; white-space:nowrap;overflow:hidden;">' + sj.name + '</div>', sj.name);
                };
                if (TWX.setAbc) {
                  for (var h of TWX.list)
                    if (TWX.currList[h.key])
                      sbaI(h.key);
                } else
                  for (var i in TWX.currList)
                    sbaI(i);
              }
              scrollpane.appendContent('<h1>' + TWXlang.choose + '!</h1>');
            } else
              scrollpane.appendContent('<p style="color: #a31919;">ERROR: There are new sets added to the game.<br>Please contact me so I can add the sets to the script:</p>' + TWX.Skript.fmfb());
          },
          img = {
            SetBonus: 'dayofthedead_2014_hat3',
            BonusSearch: 'st_patrick_head',
            shot: 'goldensable',
            hand: 'golden_gun',
          },
          buttonLogic = function (ev, delta, butObj) {
            butObj = butObj || ev.data.obj;
            var val = 1;
            if ($(ev.currentTarget).hasClass('butPlus') || delta > 0) {
              if (butObj.current_value + 1 > butObj.max_value)
                return false;
            } else {
              if (butObj.current_value - 1 < butObj.min_value)
                return false;
              val = -1;
            }
            procVal(butObj, val);
          },
          inputLogic = function (ev, butObj) {
            var val = ev.currentTarget.value;
            procVal(butObj, ev.currentTarget.value - butObj.current_value);
          },
          procVal = function (butObj, val) {
            var id = butObj.id;
            butObj.current_value += val;
            if (CharacterSkills.skills[id]) {
              var attr = CharacterSkills.skills[id].attr_key;
              if (!TWX.chooseBonus[attr])
                TWX.chooseBonus[attr] = 0;
              TWX.chooseBonus[attr] += val;
              $('.chooseBonus #' + attr + ' input.displayValue').val(TWX.chooseBonus[attr]);
              if (TWX.chooseBonus[attr] === 0)
                delete TWX.chooseBonus[attr];
            } else if (id.startsWith('dmg')) {
              var othDmg = 'dmgfb' == id ? 'dmgduel' : 'dmgfb';
              $('.chooseBonus #' + othDmg + ' input.displayValue').val(0);
              delete TWX.chooseBonus[othDmg];
            }
            if (butObj.current_value === 0)
              delete TWX.chooseBonus[id];
            else
              TWX.chooseBonus[id] = butObj.current_value;
            $('.chooseBonus #' + id + ' input.displayValue').val(butObj.current_value);
            return true;
          },
          cont,
          getCB = function (id) {
            if (['experience', 'strength', 'dexterity'].includes(id))
              cont.append('<br>');
            var div = $('<div class="chooseBonus" style="display:inline-block;">' + getBonImg(id, 45)).appendTo(cont),
            maxMltplr = TWX.searchObj[id][2] == 'attr' ? 5 : 1;
            new west.gui.Plusminusfield(id, TWX.chooseBonus[id] || 0, -100 * maxMltplr, 100 * maxMltplr, 0, buttonLogic, buttonLogic, buttonLogic, inputLogic).setWidth(45).appendTo(div);
          },
          bonSrcTable,
          chooseWindow = function () {
            bonSrcTable && bonSrcTable.hide();
            cont = $('<span>').append('<div style="width:92px;display:inline-block;vertical-align:top;background-color:#A47F5B;border-radius:5px;">' +
                '<img id="switchWeapon" style="cursor:pointer;" src="//wiki.the-west.de/images/1/1a/Switch_weapons_icon.png" title="' + TWXlang.switchWeapon + '" width="45">' +
                '<img id="subWeapon" src="images/items/right_arm/' + img[TWX.chooseBonus.subWeapon] + '.png" width="45"></div>');
            for (var so in TWX.searchObj)
              getCB(so);
            bonSrcTable = new west.gui.Dialog(TWXlang.selectBonus, cont).setId('TWX_BonSrc').setBlockGame(false).setDraggable(true).addButton('ok', function () {
              if (Object.keys(TWX.chooseBonus).length > 1)
                showbonus.BonusSearch(JSON.stringify(TWX.chooseBonus));
              else {
                TWX.currBonusSearch = '';
                loadSelbox();
              }
            }).addButton(TWXlang.resetB, function () {
              TWX.chooseBonus = {
                subWeapon: 'hand'
              };
              chooseWindow();
            }).addButton('cancel').show();
            $('#switchWeapon').click(function () {
              TWX.chooseBonus.subWeapon = TWX.chooseBonus.subWeapon == 'shot' ? 'hand' : 'shot';
              $("#subWeapon").attr('src', 'images/items/right_arm/' + img[TWX.chooseBonus.subWeapon] + '.png');
            });
            $('div.chooseBonus .tw2gui_plusminus').width('auto');
            $('div.chooseBonus').css('margin-left', '2px');
          };
          var btn = tab == btns[0] ? 1 : 0,
          switchTab = new west.gui.Button('⮎ ' + btns[btn], function (e) {
            if (tab != e.data)
              TWX.GUI.openBonusWindow(0, e.data);
          }, '', btns[btn]);
          switchTab = switchTab.getMainDiv();
          $(switchTab).css({
            'margin-top': '-32px',
            'position': 'absolute',
          });
          setbutton = $('<div title="' + TWXlang.choose + '" style="background-image:url(images/items/head/' + img[tab] + '.png);cursor:pointer;height:73px;width:73px;margin:9px;">');
          setbutton.click(function () {
            if (tab == 'SetBonus') {
              var pos = $(setbutton).offset();
              selbox.setPosition(pos.left + 35, pos.top + 50);
              selbox.show();
            } else if (tab == 'BonusSearch' && (TWX.setLength <= forbid.max || TWX.onlyOwnSets))
              chooseWindow();
          });
          var content = $('<div>');
          content.css({
            'width': '95px',
            'position': 'absolute',
          });
          $(TWX.GUI.window.getContentPane()).append(switchTab, content, scrollpane.getMainDiv());
          var maxLvl = 250,
          setsSort = tab == 'SetBonus' ? new west.gui.Checkbox('ABC', 'TWXabcSets', function (state) {
            TWX.setAbc = state;
            loadSelbox();
          }).setSelected(TWX.setAbc, 1).getMainDiv() : '',
          lvlBox = new west.gui.Combobox().setWidth(60).addItem(0, '0').addItem(charLvl, '' + charLvl);
          if (charLvl != maxLvl)
            lvlBox.addItem(maxLvl, '' + maxLvl);
          lvlBox.select(TWX.lvlToggle).addListener(function (lvl) {
            TWX.lvlToggle = lvl;
            loadResult();
          });
          content.append(setbutton, setsSort, '<br><br><b>' + TWXlang.level + ':</b>', lvlBox.getMainDiv());
          new west.gui.Checkbox(TWXlang.ownSets, null, function (state) {
            TWX.onlyOwnSets = state;
            loadSelbox();
            loadResult();
          }).setSelected(TWX.onlyOwnSets).appendTo(content);
          if (tab == 'BonusSearch')
            $('div.tw2gui_window.TWX.active_tab_id_TWXBonusWindow div.tw2gui_scrollpane.TWXBonusScroll').width(915);
        },
        openWebCenter: function (iframe, size) {
          TWX.GUI.getDefault('TWXWebCenter', 1, size, 1, 1);
          var contPan = $(TWX.GUI.window.getContentPane()),
          buttons = {
            'QuakeNet Webchat': '//webchat.quakenet.org',
            'Wiki The-West': Game.helpURL.replace(/^http:/, ''),
            'TW-DB.info': '//tw-db.info'
          };
          for (var b in buttons)
            new west.gui.Button(b, function (e) {
              TWX.GUI.openWebCenter(e.data);
            }, '', buttons[b]).appendTo(contPan);
          if (typeof iframe === 'string')
            contPan.append($('<iframe src="' + iframe + '" style="width:100%; height:94%; border:0; margin-bottom:1px; ">'));
        },
        NPC: {
          loading: false,
          styles: null,
          inner: '',
          Images: {
            reload: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAALEgAACxIB0t1+/AAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xMkMEa+wAAAKaSURBVEhLjVW/i1NBEF5/NKKiCBaCIOTtxvMKKzuRE0UFr71wZ17CqdgfcqViGv+Bg1x1INgKFqKnHKJBk7cbf5DCUk08Kxs7QQvF+H37Nsnuy0twYMjLzDffzszO7opJUnogdsWJmo+1rJe1fB1r9RHfXXw38bt2JYkuzTXmdjv4f0hf7ADJctnIXmxUf5pikV65HVVd5GQpvS8cAOGTPJJpWtbq0fXW8f2OJpSUVHWGYKM+IaO7WOg+Knhp/xv1yyfM6DtyODontny5mQH+WTTqhEOkAhyyazj/Tw+bKjiIcWghkMnVLAgE9xb00T0OYiVuy4upT36PX80cQdzGWBy4LJg7C5KvAQCk1umJnRIjP9hgLW86s2ACQaxR23ZaqkZd9h1cpLJ1ci+DSo3ZfSBb4Xesizc83OPS87SfrAot+OL5+nFbzQt81AOjI6Ig4CGy/xub6Cyy/ObjUPIzBxNxIlcCn1brLCXxjRUdSYKXWoVTI7v84WOG2lZniF1syci3k5MZfx4Z5e9aTewkmH0c2SfqLWLtVCF2aMcJZbndEdAjNmp1ZM9XYG4Ty5iAGMmSIGgFy7LEunjat+dqUjxPLNsX+mSLPV4PjNgIgilYdCvw+YrLaHAYQBRsHv7XMfS4wXwjRmdwMBb07CGAXgT+FNO81pGHU0zOuOFWzD0guB82GGQFWS0lxXMIvoMNrVWMvDDYBwpigwNCruF1ipLHjzTIs0faF/qIGY9zR9oKx2X8EmLJ2wCuVt/MFJkltfxWFeyByJaf4p8GlxAle22OK8cpGKmsdpYbxw46ulBIzlVzgqZrW25OJB2KbQueJjw7uSSeosc929Ns+dOEO8sHExWsQZtoQxckfEUSO/sYU16lDp4RIf4Bo1TrJPOKTCMAAAAASUVORK5CYII=',
          },
          load: function () {
            if (!this.loading) {
              this.loading = true;
              new UserMessage(TWXlang.NPC.loading, 'hint').show();
              Ajax.get('map', 'get_minimap', {}, function (json) {
                if (json.error)
                  return new UserMessage(json.msg).show();
                var locs = [
                ];
                var ql = json.quest_locations;
                for (var loc in ql)
                  if (ql.hasOwnProperty(loc))
                    locs.push([parseInt(ql[loc][0][0] / GameMap.tileSize),
                        parseInt(ql[loc][0][1] / GameMap.tileSize)]);
                Ajax.get('map', 'get_complete_data', {
                  tiles: JSON.stringify(locs)
                }).done(function (res) {
                  var ne = TWX.GUI.NPC.employers = {};
                  var rq = res.quests;
                  for (var g = 0; g < locs.length; g++) {
                    var em = rq[locs[g][0]][locs[g][1]][0][1];
                    for (var h = 0; h < em.employer.length; h++)
                      if (!ne[em.employer[h].name])
                        ne[em.employer[h].name] = em.x + ';' + em.y;
                      else
                        ne[em.employer[h].name] += '|' + em.x + ';' + em.y;
                  }
                  var ne2 = Object.keys(ne).sort(function (a, b) {
                    a = a.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ł/g, 'l').replace(/ś/g, 's');
                    b = b.toLowerCase().replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ł/g, 'l').replace(/ś/g, 's');
                    return (a > b) ? 1 : -1;
                  });
                  for (var j = 0; j < ne2.length; j++)
                    TWX.GUI.NPC.inner += '<option value="' + ne[ne2[j]] + '">' + ne2[j] + '</option>';
                  TWX.GUI.NPC.open();
                  TWX.GUI.NPC.loading = false;
                });
              });
              if (!this.styles) {
                TWX.addStyle('#njk_minimap span.adv_pointer, #njk_minimap #char_pointer {position:absolute;height:16px;width:16px;cursor:pointer;}\n' +
                  '#njk_minimap span.npcHelper {display:block;text-indent:20px;line-height:16px;}\n' +
                  '.tw2gui_win2.active_tab_id_TWXLocator .tw2gui_window_inset {background-image:url(images/crafting/background.jpg)!important;}');
                this.styles = 1;
              }
            }
          },
          open: function () {
            TWX.GUI.getDefault('TWXLocator');
            var wnd = TWX.GUI.window;
            wnd.setTitle(TWXlang.NPC.title);
            var mm_mapdiv = $('<div id="njk_minimap_map" style="position:relative;height:220px;background:no-repeat url(images/map/minimap/worldmap_500.jpg);">'),
            CharX = Character.position.x,
            CharY = Character.position.y,
            x = 685 * CharX / 182 / 256 - 6,
            y = 302 * CharY / 80 / 256 - 6;
            x *= 0.727;
            y *= 0.727;
            this.charPoint = '<span title="' + TWXlang.NPC.yourposition + '" id="char_pointer" onClick="GameMap.center(' + CharX + ',' + CharY + ')" style="left:' + x + 'px;top:' + y + 'px;background-image:url(images/map/minimap/icons/miniicon_pos.png);">';
            mm_mapdiv.append(this.charPoint);
            wnd.appendToContentPane($('<div id="njk_minimap" style="margin:20px 93px;width:500px">').append(mm_mapdiv));
            this.drawSelect();
          },
          drawSelect: function () {
            var selectDiv = document.createElement('div');
            selectDiv.style.cssText = 'font-size:11px;';
            selectDiv.style.height = '40px';
            selectDiv.style.textAlign = 'right';
            selectDiv.innerHTML = '<img src="' + this.Images.reload + '" onclick="TWX.GUI.NPC.load()" style="margin:-6px 4px 0;cursor:pointer;" title="' + TWXlang.NPC.reload + '"><select style="background-color:#e8dab3;font-size:14px;width:200px;cursor:pointer" onchange="TWX.GUI.NPC.questPoint(this);" size="1">' +
              '<option selected disabled>-' + TWXlang.NPC.chooseNpc + '</option>' + this.inner +
              '</select><div style="float:left;text-align:left;color:black;"><span class="npcHelper" style="background:no-repeat url(images/map/minimap/icons/miniicon_pos.png);">' + TWXlang.NPC.yourposition + '</span><span class="npcHelper" style="background:no-repeat url(images/map/minimap/icons/miniicon_quests.png);">' + TWXlang.NPC.questgiver + '</span></div>';
            var mm2 = document.getElementById('njk_minimap');
            mm2.insertBefore(selectDiv, mm2.firstChild);
          },
          questPoint: function (place) {
            var dp = $('#njk_minimap_map'),
            positions = place.value,
            arrPos = positions.split('|');
            dp.find('.adv_pointer').remove();
            for (var i = 0; i < arrPos.length; i++) {
              var xy = arrPos[i].split(';'),
              x = 685 * xy[0] / 182 / 256 - 6,
              y = 302 * xy[1] / 80 / 256 - 6;
              x = x * 0.727;
              y = y * 0.727;
              dp.append('<span class="adv_pointer" onClick="GameMap.center(' + xy[0] + ',' + xy[1] + ')" id="mapPos' + i + '" px="' + xy[0] + '" py="' + xy[1] + '" style="left:' + x + 'px; top:' + y + 'px;background-image:url(images/map/minimap/icons/miniicon_quests.png);">');
            }
          },
        },
        openNpcLocator: function () {
          if (!TWX.GUI.NPC.employers)
            TWX.GUI.NPC.load();
          else if (TWX.GUI.NPC.loading === false)
            TWX.GUI.NPC.open();
        },
        openSender: function () {
          TWX.GUI.getDefault('TWXSender');
          var EvImg = EvName == 'Octoberfest' ? 'window/events/octoberfest/pretzels_icon' : 'interface/friendsbar/events/' + EvName;
          TWX.GUI.window.setTitle(sendGift.label + '    <img src="images/' + EvImg + '.png">');
          if (!isDefined(WestUi.FriendsBar.friendsBarUi))
            WestUi.FriendsBar.toggle();
          setTimeout((function () {
              var e = [],
              t = Chat.Friendslist.getFriends(),
              WFfe = WestUi.FriendsBar.friendsBarUi.friendsBar.eventActivations,
              i,
              s,
              u,
              a;
              for (s = 0; s < t.length; s++) {
                i = typeof WFfe[t[s].playerId] != 'undefined' && WFfe[t[s].playerId][EvName] != 'undefined' ? WFfe[t[s].playerId][EvName] : 0;
                e.push({
                  n: t[s].pname,
                  i: t[s].playerId,
                  t: i
                });
              }
              e.sort(Sort.create('asc', function (e) {
                  return e.t;
                }));
              i = $('<table align="center" border="1" cellpadding="2px" border="1">');
              for (s = 0; s < e.length; s++) {
                u = e[s].t + parseInt(sendGift.cooldown, 10) - new ServerDate().getTime() / 1000;
                if (u > 0) {
                  a = $('<td>(' + u.formatDurationBuffWay() + ')</td>');
                } else {
                  a = $('<td><a href="#">' + sendGift.label + '</a></td>').click(e[s].i, function (e) {
                    $(this).parent().remove();
                    Ajax.remoteCall('friendsbar', 'event', {
                      player_id: e.handleObj.data,
                      event: EvName
                    }, function (t) {
                      if (t.error)
                        return MessageError(t.msg).show();
                      MessageSuccess(t.msg).show();
                      var n = e.handleObj.data;
                      WFfe[n] = WFfe[n] || {};
                      WFfe[n][EvName] = t.activationTime;
                    });
                  });
                }
                i.append($('<tr>)').append($('<td>' + e[s].n + '</td>'), a));
              }
              var scrollpane = new west.gui.Scrollpane();
              $(scrollpane.getMainDiv()).css({
                'margin-top': '10px',
                'width': '340px',
                'position': 'absolute',
              });
              scrollpane.appendContent(i);
              if (t.length === 0)
                scrollpane.appendContent('<h2 style="text-align:center;color:#a31919;margin-top:50px;">' + TWXlang.noFriends + '</h2>');
              var scrollP = new west.gui.Scrollpane();
              $(scrollP.getMainDiv()).css({
                'margin-top': '10px',
                'margin-left': '345px',
                'width': '353px', //698-345
              });
              if (EvName == 'Hearts' || EvName == 'DayOfDead') {
                var name = '',
                weMmd = west.events.Manager.model._data.events;
                if (EvName == 'Hearts')
                  name = weMmd.valentine.model._data.name;
                else
                  name = weMmd.DayOfDead.model._l10n.ui.mouseover + ' ' + new Date().getFullYear();
                scrollP.appendContent('<h3>' + name + '</h3>');
                //west.events.Manager.getRunningEvents()
                var rew = Game.sesData[EvName].rewards;
                for (var r in rew) {
                  var div = $('<div>');
                  div.append('<img src="images/' + EvImg + '.png">  <b>' + r + '</b><br>' + rew[r].desc + '<br>');
                  var id = rew[r].id;
                  if (isNaN(id))
                    div.append('<i>' + TWXlang.reward + ': ' + id + '</i><br><br>');
                  else {
                    var invItem = new tw2widget.JobItem(ItemManager.get(id));
                    div.append(invItem.getMainDiv()).append('<br><br><br><br><br>');
                  }
                  scrollP.appendContent(div);
                }
              }
              $(TWX.GUI.window.getContentPane()).append(scrollpane.getMainDiv(), scrollP.getMainDiv());
            }), 500);
        },
      };
      TWX.RecipeMarket = {
        init: function () {
          var inject = function (category, data) {
            $('#TWXRecipeMarket').remove();
            if (category == 'recipe') {
              var gLS4P = Game.InfoHandler.getLocalString4ProfessionId,
              prof = ['cook', 'quack', 'smith', 'sattle'],
              buttons_recipe = '<div id="TWXRecipeMarket"><a href="javascript:TWX.RecipeMarket.filterRecipe(0);"><img title="' + TWXlang.allprofessions + '" src="' + TWX.Images('LT_recipes') + '" ></a>';
              for (var b = 1; b < 5; b++)
                buttons_recipe += '<a href="javascript:TWX.RecipeMarket.filterRecipe(' + b + ');"><img title="' + gLS4P(b) + '" style="width:30px;" src="images/items/recipe/recipe_' + prof[b - 1] + '.png"></a>';
              $('.searchbox').before($(buttons_recipe + '</div>'));
              $('.searchbox').css('margin-bottom', '0');
              data.sort(function (a, b) {
                return ItemManager.get(a).min_level - ItemManager.get(b).min_level;
              });
              TWX.RecipeMarket.Recipe = data;
            } else
              $('.searchbox').css('margin-bottom', '18px');
            return data;
          };
          MarketWindow.Buy.updateCategory_twx = MarketWindow.Buy.updateCategory_twx || MarketWindow.Buy.updateCategory;
          MarketWindow.Buy.updateCategory = function (category, data) {
            data = inject(category, data);
            MarketWindow.Buy.updateCategory_twx.call(this, category, data);
          };
          /*MarketWindow.getClearName_twx = MarketWindow.getClearName;
          MarketWindow.getClearName = function (obj) {
          var name = obj.name;
          if (obj.type == 'recipe')
          name = ItemManager.get(obj.craftitem).name;
          return name;
          };*/
        },
        filterRecipe: function (pid) {
          var data = $('#mpb_recipe_content p');
          data.show();
          if (pid === 0)
            return;
          for (var i = 0; i < TWX.RecipeMarket.Recipe.length; i++)
            if (pid != ItemManager.get(TWX.RecipeMarket.Recipe[i]).profession_id)
              $(data[i]).hide();
        }
      };
      TWX.AchievHide = {
        init: function () {
          var setVal10 = setInterval(function () {
            if (!window.Character)
              return;
            clearInterval(setVal10);
            var pCp = '.playerachievement-' + Character.playerId,
            hideAchv = function () {
              $(pCp + ' .achievement > div:first-child:not(.achievement_unachieved)').parent().hide();
            },
            folder,
            ready = function () {
              return $(pCp + ' .tw2gui_window_pane .loader')[0].style.display == 'none';
            },
            checkFolder = function (e) {
              var cTc = e.currentTarget.parentElement.classList[0],
              cTft = e.currentTarget.textContent;
              if (cTc + cTft == folder || ['overall', 'heroics'].includes(cTc))
                folder = 1;
              else {
                folder = cTc + cTft;
                var wait2 = setInterval(function () {
                  if (ready()) {
                    clearInterval(wait2);
                    hideAchv();
                  }
                }, 100);
              }
            },
            AW = AchievementWindow;
            AW.showTab_twx = AW.showTab_twx || AW.showTab;
            AW.showTab = function (id) {
              AW.showTab_twx.apply(this, arguments);
              if (id == 'explorer')
                var wait1 = setInterval(function () {
                  if (ready()) {
                    clearInterval(wait1);
                    var atb = $(pCp + ' .achievement-menu li > .tw2gui_button');
                    atb.click(checkFolder);
                    folder = 'general' + atb[1].textContent;
                    hideAchv();
                  }
                }, 100);
            };
          }, 2000);
        }
      };
      TWX.MarketMessage = {
        Towns: {},
        init: function () {
          Ajax.get('map', 'get_minimap', {}, function (json) {
            if (json.error)
              return new UserMessage(json.msg).show();
            TWX.MarketMessage.Towns = json.towns;
            EventHandler.listen('position_change', function () {
              check();
            });
            var setVal2 = setInterval(function () {
              if (Character.position.x) {
                clearInterval(setVal2);
                check();
              }
            }, 300);
          });
          var town_id,
          aucts,
          fetch = function (action) {
            Ajax.remoteCall('building_market', action, {}, function (resp) {
              if (resp.error)
                return new UserMessage(resp.msg).show();
              Character.setDeposit(resp.deposit);
              Character.setMoney(resp.cash);
              EventHandler.signal('inventory_changed');
              return new MessageSuccess(resp.msg).show();
            });
          },
          fetchAll = function (all1) {
            if (all1 && aucts.offers)
              fetch('fetch_town_offers');
            if (!all1 || aucts.bids)
              fetch('fetch_town_bids');
          },
          showDialog = function () {
            new west.gui.Dialog(TWXlang.market1, TWXlang.market2, west.gui.Dialog.SYS_QUESTION).addButton(TWXlang.all, function () {
              fetchAll(1);
            }).addButton(TWXlang.onlyBids, function () {
              fetchAll();
            }).addButton(TWXlang.nothing).show();
          },
          checkItems = function (resl, auct) {
            for (var bgs of resl)
              if (bgs.market_town_id == town_id && (bgs.auction_ends_in < 0 || bgs.max_price && bgs.current_bid == bgs.max_price)) {
                aucts[auct] = 1;
                break;
              }
          },
          get_aucts = function (auct) {
            Ajax.remoteCall('building_market', 'fetch_' + auct, {
              page: 0
            }, function (json) {
              checkItems(json.msg.search_result, auct);
              if (auct == 'offers')
                get_aucts('bids');
              else if (aucts.bids || aucts.offers)
                showDialog();
            });
          },
          check = function () {
            var towns = TWX.MarketMessage.Towns;
            for (var k in towns)
              if (towns[k].x == Character.position.x && towns[k].y == Character.position.y) {
                town_id = towns[k].town_id;
                aucts = {};
                var wait = Character.health < 6 ? Character.playerId.toString().substr(-4) : 1;
                setTimeout(function () {
                  get_aucts('offers');
                }, wait);
                break;
              }
          };
        },
      };
      TWX.MarkDaily = {
        init: function () {
          var addBorder = function () {
            var rows = $('.reward-row');
            var row = $(rows[4]);
            if (row.hasClass('today'))
              row.css('border', '20px solid red');
          };
          var wpLp = west.player.LoginBonus.prototype;
          wpLp.show_twx = wpLp.show;
          wpLp.show = function () {
            var tmp = wpLp.show_twx.call(this);
            if (tmp !== undefined)
              return tmp;
            addBorder();
          };
        }
      };
      TWX.DuelMap = {
        init: function () {
          var generateNpcPopup = function (data) {
            var weapon = ItemManager.get(data.weaponId),
            damage = weapon.getDamage(data),
            npcData = data.bonus;
            return '<table class="dln_npcskill_popup"><tr><td colspan="5" class="text_bold">' + TWXlang.popup + '<br>&nbsp;</td></tr><tr><td><img src="images/window/duels/npcskill_shot.jpg"></td><td><img src="images/window/duels/npcskill_punch.jpg"></td><td><img src="images/window/duels/npcskill_aim.jpg"></td><td><img src="images/window/duels/npcskill_appearance.jpg"></td><td></td></tr><tr><td class="text_bold">' + (npcData.shot || 0) + '</td><td class="text_bold">' + (npcData.punch || 0) + '</td>' + '<td class="text_bold">' + (npcData.aim || 0) + '</td><td class="text_bold">' + (npcData.appearance || 0) + '</td><td></td></tr>' + '<tr><td><img src="images/window/duels/npcskill_tactic.jpg"></td><td><img src="images/window/duels/npcskill_reflex.jpg"></td><td><img src="images/window/duels/npcskill_dodge.jpg"></td><td><img src="images/window/duels/npcskill_tough.jpg"></td><td><img src="images/window/duels/npcskill_health.jpg"></td></tr><tr><td class="text_bold">' + (npcData.tactic || 0) + '</td><td class="text_bold">' + (npcData.reflex || 0) + '</td><td class="text_bold">' + (npcData.dodge || 0) + '</td><td class="text_bold">' + (npcData.tough || 0) + '</td><td class="text_bold">' + (npcData.health || 0) + '</td></tr><tr><td colspan="2" class="text_bold"><img src="' + weapon.image + '"></td><td colspan="3" class="text_bold"><br>' + weapon.name + '<br>(' + TWXlang.damage + ': ' + damage.min + ' - ' + damage.max + ')</td></tr></table>';
          };
          var progB = new west.gui.Progressbar(0, 100);
          progB.setTextOnly(true);
          $(progB.getMainDiv()).css('width', '772px');
          var fillPage = function () {
            $('#TWXDuelMapTable').empty();
            $('#TWXDuelMapPlayers').empty();
            $('#TWXDuelMapTable').append('<tr><th>' + TWXlang.name + '</th><th>' + TWXlang.town + '</th><th>' + TWXlang.level + '</th><th>' + TWXlang.duelLevel + '</th><th>' + TWXlang.exp + '</th><th>' + TWXlang.distance + '</th><th>' + TWXlang.startduel + '</th><th>' + TWXlang.centerMap + '</th></tr>');
            for (var k in TWX.DuelMap.Player) {
              var data = TWX.DuelMap.Player[k];
              var content = $('<tr></tr>');
              content.append('<td><a href="javascript:void(PlayerProfileWindow.open(' + data.player_id + '));" title="' + (Character.charClass == 'duelist' ? generateNpcPopup(data).escapeHTML() : '') + '">' + data.player_name + '</a></td>',
                '<td><a href="javascript:void(TownWindow.open(' + data.town_x + ',' + data.town_y + '));">' + data.town_name + '</a></td>',
                '<td>' + data.level + '</td>',
                '<td>' + data.duellevel + '</td>',
                '<td>' + Math.round((7 * data.duellevel - 5 * Character.duelLevel + 5) * Character.duelMotivation) + '</td>',
                '<td>' + window.GameMap.calcWayTime(GameMap.getLastQueuePosition(), {
                  x: data.character_x,
                  y: data.character_y
                }).formatDuration() + '</td>',
                '<td><a href="#" onclick="SaloonWindow.startDuel(' + data.player_id + ', ' + data.alliance_id + ', false, DuelsWindow);">' + TWXlang.startduel + '</a></td>',
                '<td><a href="#" onclick="GameMap.center(' + data.character_x + ', ' + data.character_y + ');">' + TWXlang.centerMap + '</a></td>');
              $('#TWXDuelMapTable').append(content);
              content = $('<div style="position:absolute;border:1px solid black;background:#FF0000;width:4px;height:4px;left:' + (data.character_x / 46592 * 770 - 2) + 'px;top:' + (data.character_y / 20480 * 338 - 2) + 'px;">');
              eval('content.click(function () { SaloonWindow.startDuel(' + data.player_id + ', ' + data.alliance_id + ', false, DuelsWindow); });');
              content.addMousePopup('<b>' + data.player_name + '</b> ' + window.GameMap.calcWayTime(GameMap.getLastQueuePosition(), {
                  x: data.character_x,
                  y: data.character_y
                }).formatDuration());
              $('#TWXDuelMapPlayers').append(content);
            }
            $('<div style="position:absolute;border:1px solid black;background:#00CCFF;width:4px;height:4px;left:' + (Character.position.x / 46592 * 770 - 2) + 'px;top:' + (Character.position.y / 20480 * 338 - 2) + 'px;">').addMousePopup('Deine Position').appendTo('#TWXDuelMapPlayers');
          };
          var getPlayer = function (i, distance) {
            if (i == -1) {
              progB.setValue(0);
              TWX.DuelMap.Player = {};
              i++;
            }
            Ajax.remoteCall('duel', 'search_op', {
              next: true,
              order_by: 'ASC',
              sort: 'range',
              page: i,
              distance: distance * 60
            }, function (json) {
              var l = json.oplist.pclist.length;
              for (var j = 0; j < l; j++) {
                var plyr = json.oplist.pclist[j].player_name;
                if (!TWX.DuelMap.Player[plyr]) {
                  TWX.DuelMap.Player[plyr] = json.oplist.pclist[j];
                  progB.increase(1);
                }
              }
              if (json.oplist.next && i < 40) {
                getPlayer(++i, distance);
                return;
              }
              TWX.DuelMap.progBVal = progB.getValue();
              fillPage();
            });
          };
          TWX.addStyle('.tw2gui_win2.active_tab_id_TWXDuelMap .tw2gui_window_inset {background-image:url(' + TWX.Images('LT_backGr', 1) + ');}');
          var showTab = function (win, id) {
            var wnd = DuelsWindow.window;
            wnd.setSize(815, 655).addClass('nocloseall noreload');
            wnd.dontCloseAll = true;
            wnd.activateTab(id).$('div.tw2gui_window_content_pane > *').each(function (i, e) {
              if ($(e).hasClass('duels-' + id)) {
                $(e).children().fadeIn();
                $(e).show();
              } else {
                $(e).children().fadeOut();
                $(e).hide();
              }
            });
            wnd.setTitle(TWXlang.duelmap);
            if (Object.keys(TWX.DuelMap.Player).length === 0) {
              TWX.DuelMap.progBVal = 0;
              getPlayer(-1, 15);
            } else
              progB.setValue(TWX.DuelMap.progBVal);
          };
          var initDuelMap = function () {
            DuelsWindow.window.addTab(TWXlang.duelmap, 'TWXDuelMap', showTab);
            TWX.DuelMap.Player = {};
            var area = $('<div class="duels-TWXDuelMap" style="display:none;">').appendTo(DuelsWindow.window.getContentPane()),
            content = $('<div style="height:350px;top:10px;position:relative">'),
            left = 0,
            top = 0;
            for (var i = 1; i <= 15; i++) {
              var img = $('<img style="position:absolute;border:1px solid #000;width:110px;height:169px;left:' + left + 'px;top:' + top + 'px;" src="images/map/minimap/county_' + i + '.jpg">');
              left += 110;
              if (i === 7) {
                left = 0;
                top = 169;
              }
              if (i === 4 || i === 11) {
                img.css('height', '114px');
              }
              if (i === 11) {
                img.css('top', top + 55 + 'px');
              }
              if (i === 15) {
                img.css({
                  height: '110px',
                  left: '330px',
                  top: '114px'
                });
              }
              content.append(img);
            }
            content.append('<div id="TWXDuelMapPlayers">');
            content.appendTo(area);
            area.append(progB.getMainDiv());
            var scrollpane = new west.gui.Scrollpane().appendTo(area);
            $(scrollpane.getMainDiv()).css('height', '185px');
            scrollpane.appendContent(TWXlang.duelradius + '    ');
            var combobox = new west.gui.Combobox().setWidth(120).addItem('15', '15 ' + TWXlang.minutes).addItem('30', '30 ' + TWXlang.minutes).addItem('60', TWXlang.hour).addItem('120', '2 ' + TWXlang.hours).addItem('240', '4 ' + TWXlang.hours).addItem('360', '6 ' + TWXlang.hours).select('15').appendTo(scrollpane.getContentPane());
            new west.gui.Button(TWXlang.searchOpp).appendTo(scrollpane.getContentPane()).click(function () {
              getPlayer(-1, combobox.getValue());
            });
            scrollpane.appendContent('<table border="1" id="TWXDuelMapTable"></table>');
          };
          DuelsWindow.open_twx = DuelsWindow.open;
          DuelsWindow.open = function () {
            var tmp = DuelsWindow.open_twx.call(this);
            if (tmp)
              return tmp;
            initDuelMap();
          };
          DuelsWindow.showTab_twx = DuelsWindow.showTab;
          DuelsWindow.showTab = function (id) {
            var tmp = DuelsWindow.showTab_twx.call(this, id);
            if (tmp)
              return tmp;
            DuelsWindow.window.removeClass('noreload').setSize(748, 472);
          };
        }
      };
      TWX.MoveJobs = {
        init: function () {
          var st = $('.menulink.lscript')[0].title;
          $('div#ui_bottomright').css('right', '35px');
          $('div.ui_menucontainer').css('margin-bottom', '7px');
          $('div#ui_scripts').remove();
          EscapeWindow.open_twx = EscapeWindow.open_twx || EscapeWindow.open;
          EscapeWindow.open = function () {
            EscapeWindow.open_twx.apply(this, arguments);
            wman.getById('escape').setSize(240, 326);
            $('div.tw2gui_win2.escape div.content div.tw2gui_button')[3].after(new west.gui.Button(st, function () {
                TheWestApi.open();
                wman.getById('escape').destroy();
              }).setMinWidth(175).getMainDiv());
          };
        }
      };
      TWX.InstantQuest = {
        init: function () {
          var setVal1 = setInterval(function () {
            if (QuestEmployerView.showQuest) {
              clearInterval(setVal1);
              QuestEmployerView.showQuest_twx = QuestEmployerView.showQuest;
              QuestEmployerView.showQuest = function (e) {
                QuestEmployerView.showQuest_twx(e);
                if (e.accepted === false && !e.questRewardsOptions) {
                  var req = e.requirements,
                  solvCnt = 0;
                  for (var f = 0; f < req.length; f++)
                    if (req[f].solved === true)
                      solvCnt += 1;
                  if (req.length == solvCnt)
                    $('div.quest_button_area_' + e.id + '').empty().append(new west.gui.Button(TWXlang.accNfin, function () {
                        QuestWindow.acceptQuest(e.id);
                        var stop = 0,
                        siVal = setInterval(function () {
                          if (QuestLog.quests[e.id]) {
                            clearInterval(siVal);
                            QuestWindow.finishQuest(e.id);
                          } else if (++stop == 20)
                            clearInterval(siVal);
                        }, 200);
                      }).getMainDiv());
                }
              };
            }
          }, 2000);
        }
      };
      TWX.QuestWiki = {
        init: function () {
          var doGroups = function (json) {
            QuestLog.solvedGroups = {};
            for (var sg in json.solved)
              QuestLog.solvedGroups[sg] = json.solved[sg].title;
            QuestLog.addSolvedQuestGroup_twx = QuestLog.addSolvedQuestGroup;
            QuestLog.addSolvedQuestGroup = function (groupId, questGroup) {
              QuestLog.addSolvedQuestGroup_twx.apply(this, arguments);
              QuestLog.solvedGroups[groupId] = questGroup.title;
            };
            var lng = Game.locale,
            lang = lng.substr(0, 2),
            lastQl = {
              de_DE: 323,
              fr_FR: 323,
              hu_HU: 293,
              it_IT: 293,
              pt_PT: 302,
              ru_RU: 199,
              en_DK: 303,
              tr_TR: 294,
              es_ES: 293,
              cs_CZ: 293,
              ro_RO: 264,
            }, //none:br,el,nl,se,da,sk,pl(not anymore)
            repText = {
              de: ' (Wiederholbare Feiertagsquestreihe)',
              hu: ' (Ismételhető)',
              it: ' (Ripetibile)',
              pt: ' repetível',
              ru: ' - Снова праздник',
              ro: ' (repeatable)',
            };
            Quest.render_twx = Quest.render;
            Quest.render = function () {
              Quest.render_twx.apply(this, arguments);
              var qurl = '//';
              if (!lastQl[lng] || this.group > lastQl[lng]) {
                qurl += 'support.innogames.com/kb/TheWest/' + lng + '?query=' + this.groupTitle;
              } else {
                var wiki = 'wiki.the' + Game.masterURL.match(/the(.*)/)[1] + '/wiki/',
                gid = TWX.repGroups[this.id],
                qGroup = QuestLog.solvedGroups[gid] || lang == 'de' && isNaN(gid) && gid,
                groupName = [69, 34].includes(this.group) && qGroup ? qGroup + (repText[lang] || '') : 62 == this.group && qGroup ? qGroup + ' (Wiederholbare Quests)' : this.groupTitle,
                questName = encodeURIComponent((lang == 'pl' ? 'Zadania: ' : '') + groupName),
                qHash = '#' + (lang == 'de' ? this.id : this.soloTitle);
                qurl += wiki + questName + qHash;
              }
              this.el.find('.quest_description_container .strong').append('<a class="questWiki" style="float:right;" title="' + TWXlang.onWiki + '" href="' + qurl + '" target="_blank"><img src="' + TWX.Images('wiki') + '"></a>');
            };
          },
          getSolved = function () {
            setTimeout(function () {
              $.ajax({
                url: 'game.php?window=building_quest&mode=get_solved_groups',
                type: 'POST',
                dataType: 'json',
                success: function (jn) {
                  doGroups(jn);
                },
                error: function () {
                  getSolved();
                },
              });
            }, 1500);
          };
          $.getScript(TWX.website + 'files/repGroups.js', function () {
            getSolved();
          });
        }
      };
      TWX.CityTravel = {
        init: function () {
          var setVal3 = setInterval(function () {
            if (west.window.Blackboard.cities.show) {
              clearInterval(setVal3);
              var wwBc = west.window.Blackboard.cities;
              wwBc.show_twx = wwBc.show;
              wwBc.show = function () {
                for (var c = 0; c < this.cities_.length; c++)
                  this.cities_[c].member += '<br>' +
                  GameMap.calcWayTime(GameMap.getLastQueuePosition(), {
                    x: this.cities_[c].x,
                    y: this.cities_[c].y
                  }).formatDuration();
                wwBc.show_twx.apply(this, arguments);
                $('.cities .city.inlineblock .popup-title').css('margin-top', '-10px');
              };
            }
          }, 2000);
        }
      };
      TWX.BetterSheriff = {
        onlyAttackable: false,
        loadedIDs: {},
        init: function () {
          var that = this,
          columns = [
            'name" style="width:100px;',
            'distance" style="width:70px;',
            'amount" style="width:70px;',
            'not_dead_amount" style="width:70px;',
            'duellevel" style="width:50px;',
            'pStatus" style="width:192px;'
          ], //max 552px
          wanted = [
            'Gesucht', 'Wanted', 'Poszukiwany', 'Gezocht', 'Efterlyst', 'Căutat', 'Procurado', 'Hledán', 'Buscado', 'В розыске', 'Aranıyor', 'Körözött', 'Καταζητείται', 'Eftersøgt', 'Odmena za ulovenie', 'Recherché', 'Ricercato',
          ],
          sortByObj,
          myPos,
          lvl,
          players,
          counter,
          maxCount,
          updateTable = function (data) {
            that.table.clearBody();
            var tmpCells = {};
            for (var i = 0; i < data.length; i++) {
              var rd = data[i];
              if (that.onlyAttackable && !rd.pStatus.includes('.startDuel'))
                continue;
              tmpCells[columns[0]] = '<a title="' + SheriffWindow.createWantedTooltip(rd).escapeHTML() + '" href="javascript:void(PlayerProfileWindow.open(' + rd.player_id + '));"> ' + rd.name + '</a>';
              tmpCells[columns[1]] = rd.distance.formatDuration();
              tmpCells[columns[2]] = format_number(rd.amount);
              tmpCells[columns[3]] = format_number(rd.not_dead_amount);
              tmpCells[columns[4]] = rd.duellevel;
              tmpCells[columns[5]] = '<span title=\'' + rd.pStatus + '\'>' + rd.pStatus + '</span>';
              that.table.buildRow('" style="padding-left:5px;', tmpCells);
            }
          },
          startSortDispatcher = function (ev) {
            var sortBy = ev && (ev.target.tagName == 'SPAN' && ev.target.parentElement.classList[2] || ev.target.classList[2]) || 'distance';
            if (sortByObj == sortBy)
              players.reverse();
            else {
              sortByObj = sortBy;
              switch (sortBy) {
              case 'name':
              case 'pStatus':
                players.sort(function (a, b) {
                  return replUml(a[sortBy]).replace(/\(.*?\)/, '') > replUml(b[sortBy]).replace(/\(.*?\)/, '') ? 1 : -1;
                });
                break;
              case 'distance':
                players.sort(function (a, b) {
                  return a[sortBy] - b[sortBy];
                });
                break;
              default:
                players.sort(function (a, b) {
                  return b[sortBy] - a[sortBy];
                });
                break;
              }
            }
            updateTable(players);
          },
          setStatus = function (player, string, dontSave) {
            if (player) {
              player.pStatus = string;
              players.push(player);
              if (!dontSave)
                that.loadedIDs[player.player_id] = string;
            }
            counter++;
            that.progB.increase(1);
            if (counter == maxCount) {
              startSortDispatcher();
              $('div.sheriff-TWXSheriff .fancytable .row_head').css('cursor', 'pointer').click(startSortDispatcher);
              $('div.sheriff-TWXSheriff', SheriffWindow.DOM).append(that.checkB.getMainDiv());
            }
          },
          windowOpened = function () {
            return $('.tw2gui_window.sheriff').length;
          },
          loadPlayer = function (arr) {
            if (!windowOpened())
              return;
            if (that.loadedIDs[arr.player_id])
              setStatus(arr, that.loadedIDs[arr.player_id], 1);
            else
              Ajax.remoteCallMode('profile', 'init', {
                playerId: arr.player_id
              }, function (resp) {
                if (resp.error)
                  return new UserMessage(resp.message).show();
                if (!wanted.includes(resp.status))
                  setStatus(arr, resp.status);
                else if (resp.town) {
                  if (resp.town.town_id == Character.homeTown.town_id)
                    setStatus(arr, TWXlang.ownTown);
                  else
                    Ajax.remoteCallMode('building_saloon', 'get_data', {
                      town_id: resp.town.town_id
                    }, function (data) {
                      if (data.error)
                        return new UserMessage(data.msg).show();
                      for (var l = 0; l < data.players.length; l++)
                        that.loadedIDs[data.players[l].player_id] = SaloonWindow.playerStat(data.players[l]);
                      setStatus(arr, that.loadedIDs[arr.player_id], 1);
                    });
                } else if (!Character.isDuelProtected())
                  Ajax.remoteCall('task', 'add', {
                    'tasks': {
                      '0': {
                        'player_id': arr.player_id,
                        'taskType': 'duel'
                      }
                    }
                  }, function (data) {
                    if (data.tasks[0].error)
                      setStatus(arr, data.tasks[0].msg);
                    else {
                      setStatus(arr, SaloonWindow.playerStat({
                          player_id: arr.player_id,
                          holiday_duel: true,
                        }));
                      Ajax.remoteCall('task', 'cancel', {
                        'tasks': {
                          '0': {
                            'queueId': data.tasks[0].task.queue_id,
                            'type': 'duel'
                          }
                        }
                      });
                    }
                  });
                else
                  setStatus(arr, TWXlang.youKO);
              });
          },
          initData = function (pg) {
            if (!windowOpened())
              return;
            Ajax.remoteCall('building_sheriff', 'load_page', {
              page: pg,
            }, function (json) {
              if (json.error) {
                new UserMessage(json.msg).show();
                return null;
              }
              if (pg === 0) {
                maxCount = json.count * 10;
                that.progB.setMaxValue(maxCount);
              }
              for (var j = 0; j < 10; j++) {
                if (json.result[j]) {
                  var res = json.result[j];
                  res.distance = GameMap.calcWayTime(myPos, {
                    x: res.x,
                    y: res.y
                  });
                  res.not_dead_amount = res.not_dead_amount || 0;
                  if (lvl.min > res.duellevel)
                    setStatus(res, TWXlang.tooLow, 1);
                  else if (lvl.max < res.duellevel)
                    setStatus(res, TWXlang.tooHigh, 1);
                  else
                    loadPlayer(res);
                } else {
                  setStatus();
                }
              }
              if (pg < json.count - 1)
                initData(++pg);
            });
          },
          tabclick = function (win, id) {
            if (!SheriffWindow.window)
              return;
            SheriffWindow.window.activateTab(id).addClass('nocloseall noreload').setTitle('BetterSheriff').$('div.tw2gui_window_content_pane > *', SheriffWindow.DOM).each(function (i, e) {
              if ($(e).hasClass('sheriff-' + id)) {
                $(e).children().fadeIn();
                $(e).show();
              } else {
                $(e).children().fadeOut();
                $(e).hide();
              }
            });
            if (TWX.loadedSheriff)
              return;
            TWX.loadedSheriff = true;
            SheriffWindow.window.dontCloseAll = true;
            myPos = GameMap.getLastQueuePosition();
            lvl = dLvlRange(Character.duelLevel);
            players = [];
            counter = 0;
            sortByObj = '';
            initData(0);
          },
          initBetterSheriff = function () {
            TWX.loadedSheriff = false;
            SheriffWindow.window.addTab('BetterSheriff', 'TWXSheriff', tabclick).appendToContentPane($('<div class="sheriff-TWXSheriff" style="display:none;width:590px;position:relative;left:50px;">'));
            that.table = new west.gui.Table().removeFooter();
            for (var k = 0; k < columns.length; k++)
              that.table.addColumn(columns[k]).appendToThCell('head', columns[k], TWXlang.sortBy + ' ' + TWXlang[columns[k].split('"')[0]], TWXlang[columns[k].split('"')[0]]);
            that.progB = new west.gui.Progressbar(0, null);
            $(that.progB.getMainDiv()).css('width', '587px');
            that.checkB = new west.gui.Checkbox().setLabel('<img src="images/window/dailyactivity/tasks_icon.png">').setTooltip(TWXlang.attackable).setCallback(function (state) {
              that.onlyAttackable = state;
              updateTable(players);
            }).setSelected(that.onlyAttackable, 1);
            $(that.checkB.getMainDiv()).css({
              'position': 'absolute',
              'top': '35px',
              'right': '-65px'
            });
            $('div.sheriff-TWXSheriff', SheriffWindow.DOM).empty().append(that.table.getMainDiv()).append(that.progB.getMainDiv());
            $('div.sheriff-TWXSheriff .fancytable .tw2gui_scrollpane').css('height', '293px');
            Ajax.remoteCallMode('building_saloon', 'get_data', {
              town_id: Character.homeTown.town_id
            }, function (data) {
              if (data.error)
                return new UserMessage(data.msg).show();
              SaloonWindow.self = data.self;
            });
          };
          SheriffWindow.open_twx = SheriffWindow.open;
          SheriffWindow.open = function (townId, tabId, wanted) {
            SheriffWindow.open_twx.call(this, townId, tabId, wanted);
            if (townId === Character.homeTown.town_id) {
              initBetterSheriff();
            }
          };
        }
      };
      TWX.ChatProfessions = {
        init: function () {
          Chat.Formatter.formatContactClient_twx = Chat.Formatter.formatContactClient;
          Chat.Formatter.formatContactClient = function (client, room) {
            var cClient = Chat.Formatter.formatContactClient_twx.call(this, client, room);
            if (client.professionId > -1)
              $(cClient[0].lastChild).prepend($(Chat.Formatter.getProfessionImage(client.professionId)).css('background-color', '#D5C6A2')[0]);
            return cClient;
          };
        }
      };
      TWX.QuestBookSearch = {
        init: function () {
          QuestWindowView.clearSearch = function () {
            $('.window-quest_solved .employer_description .questlog_entrie').show();
            $('.window-quest_solved .solved_container .tw2gui_scrollpane_clipper_contentpane').empty();
          };
          QuestWindowView.searchQuest = function (txt) {
            if (txt) {
              txt = txt.toLowerCase();
              var questGroup = new QuestGroup('searchResult', {});
              for (var q in QuestLog.solved_group) {
                var Qq = QuestLog.solved_group[q];
                if (Qq.title.toLowerCase().includes(txt))
                  $('#solved_questgroup_' + q).show();
                else
                  $('#solved_questgroup_' + q).hide();
                for (var r in Qq.quests)
                  if (Qq.quests.hasOwnProperty(r)) {
                    var Qr = Qq.quests[r],
                    idMatch = r == txt;
                    if (Qr.toLowerCase().includes(txt) || idMatch)
                      questGroup.el.append($('<div>').prop({
                          id: 'solved_questgroup_quest_' + r,
                          className: 'questlog_entrie finish'
                        }).append($('<a>').attr({
                            href: '#',
                            className: 'shorten',
                            onclick: s('QuestGroupWindow.open(%1, %2);', q, r)
                          }).text((idMatch ? '#ID ' : '') + Qr)));
                  }
              }
              QuestWindowView.showSolvedGroup(questGroup);
            } else
              QuestWindowView.clearSearch();
          };
          QuestWindowView.renderGroupSolved_twx = QuestWindowView.renderGroupSolved;
          QuestWindowView.renderGroupSolved = function () {
            QuestWindowView.renderGroupSolved_twx.apply(this, arguments);
            var textF = new west.gui.Textfield('questbook_search').addListener(QuestWindowView.searchQuest),
            iconB = new west.gui.Iconbutton(new west.gui.Icon('search'), function () {
              QuestWindowView.searchQuest(textF.getValue());
            }),
            icon = new west.gui.Icon('abort').getMainDiv().click(function () {
              textF.setValue('');
              QuestWindowView.clearSearch();
            });
            $('.window-quest_solved .employer_description .quest_splitter').after($('<div id=QuestBookSearch>').append(textF.getMainDiv(), iconB.getMainDiv(), icon));
          };
        }
      };
      TWX.MarketRights = {
        init: function () {
          MarketWindow.sellRights = [{
              i: 'town_new',
              t: TWXlang.town
            }, {
              i: 'friends',
              t: TWXlang.alliance
            }, {
              i: 'welt',
              t: TWXlang.worldwide
            }
          ];
          var getRights = function (page) {
            Ajax.remoteCall('building_market', 'search', {
              page: page,
              sort: 'distance',
              visibility: 0
            }, function (json) {
              for (var i = 0; i < json.msg.search_result.length; i++) {
                var jsr = json.msg.search_result[i];
                if (jsr.seller_name == Character.name)
                  $('.marketSellsData_' + jsr.market_offer_id + ' .mps_pickup').prepend('<img src="images/icons/' + MarketWindow.sellRights[jsr.sell_rights].i + '.png" title="' + MarketWindow.sellRights[jsr.sell_rights].t + '">');
              }
              if (page == 1 && json.msg.next)
                getRights(2);
            });
          };
          MarketWindow.Sell.updateTable_twx = MarketWindow.Sell.updateTable_twx || MarketWindow.Sell.updateTable;
          MarketWindow.Sell.updateTable = function () {
            MarketWindow.Sell.updateTable_twx.apply(this, arguments);
            if (Character.homeTown.town_id)
              getRights(1);
          };
          MarketWindow.Buy.updateTable_twx = MarketWindow.Buy.updateTable;
          MarketWindow.Buy.updateTable = function (data) {
            MarketWindow.Buy.updateTable_twx.call(this, data);
            if (Character.homeTown.town_id)
              for (var i = 0; i < data.length; i++)
                $('#mpb_vendor_' + data[i].market_offer_id).before('<img src="images/icons/' + MarketWindow.sellRights[data[i].sell_rights].i + '.png" title="' + MarketWindow.sellRights[data[i].sell_rights].t + '">');
          };
        }
      };
      TWX.EquipManagerPlus = {
        init: function () {
          var current = {},
          change = {},
          diff = [],
          load = 0,
          changeSlot = function (slot) {
            var ds = diff[slot - 1],
            cds = current[ds];
            if (slot == 0) {
              $('#equip_manager_list').html(EquipManager.buildEquipList());
              new UserMessage(TWXlang.saveMessage, 'success').show();
              load = 0;
            } else if (cds)
              Ajax.remoteCall('inventory', 'carry', {
                item_id: cds.obj.item_id,
                last_inv_id: Bag.getLastInvId()
              }, function () {
                changeSlot(--slot);
              });
            else
              Ajax.remoteCall('inventory', 'uncarry', {
                last_inv_id: Bag.getLastInvId(),
                type: ds
              }, function () {
                changeSlot(--slot);
              });
          },
          process = function (equipId, nr, name) {
            Ajax.remoteCall('inventory', 'delete_equip', {
              id: equipId
            }, function () {
              EquipManager.list.splice(nr, 1);
              Ajax.remoteCall('inventory', 'save_equip', {
                name: name
              }, function (data) {
                if (data.error)
                  new UserMessage(data.msg).show();
                else
                  EquipManager.list.unshift(data.data);
                changeSlot(diff.length);
              });
            });
          },
          rename = function (equipId, nr, name) {
            if (name.length < 3 || name == EquipManager.list[nr].name)
              return new UserMessage(TWXlang.longerName).show();
            new UserMessage(TWXlang.loading, 'hint').show();
            if (load)
              return;
            load = 1;
            current = $.extend({}, Wear.wear);
            change = EquipManager.list[nr];
            var diff = Wear.slots.slice(),
            i = diff.length;
            while (i--) {
              var di = diff[i];
              if (change[di] == (current[di] && current[di].obj.item_id))
                diff.splice(i, 1);
            }
            if (diff.length)
              Ajax.remoteCall('inventory', 'switch_equip', {
                id: equipId,
                last_inv_id: Bag.getLastInvId()
              }, function () {
                process(equipId, nr, name);
              });
            else
              process(equipId, nr, name);
          };
          EquipManager.renameEquip = function (equipId, nr) {
            var cont = $('<span>');
            var textF = new west.gui.Textfield('equip_rename').maxlength(25).setValue(EquipManager.list[nr].name).getMainDiv();
            cont.append(TWXlang.newName + ': ', textF, '<p style="margin-top:10px;color:red;">' + TWXlang.renameWarning + '</p>');
            new west.gui.Dialog(TWXlang.rename + ': ' + EquipManager.list[nr].name, cont).addButton('ok', function () {
              rename(equipId, nr, $('#equip_rename').val());
            }).addButton('cancel').show();
          };
          EquipManager.showPopup_twx = EquipManager.showPopup;
          EquipManager.showPopup = function () {
            EquipManager.showPopup_twx.apply(this, arguments);
            setTimeout(function () {
              $('#max_equip_count').append(' | ' + TWXlang.used + ': <span id="equip_used">' + EquipManager.list.length);
            }, 100);
          };
          EquipManager.buildEquipList_twx = EquipManager.buildEquipList;
          EquipManager.buildEquipList = function () {
            if ($('#equip_used').length > 0)
              $('#equip_used')[0].innerHTML = EquipManager.list.length;
            EquipManager.list.sort(function (a, b) {
              var a1 = a.name.toUpperCase(),
              b1 = b.name.toUpperCase();
              return (a1 == b1) ? 0 : (a1 > b1) ? 1 : -1;
            });
            var html = EquipManager.buildEquipList_twx().replace(/60%/g, '40%').replace(/20%/g, '15%');
            for (var i = 0; EquipManager.list.length > i; i++) {
              var id = EquipManager.list[i].equip_manager_id;
              html = html.replace('deleteEquip(' + id + ')', 'renameEquip(' + id + ',' + i + ');\'>' + TWXlang.rename + '&emsp;</a></td><td width=\'15%\'><a href=\'javascript:EquipManager.deleteEquip(' + id + ')');
            }
            return html;
          };
          TWX.addStyle('#equip_manager_list tr:nth-of-type(2n+1) {background: #8f8f8f80;}\n #equip_manager_list tr:hover {background: #00000080; color: white}\n #equip_manager_list > table {border-spacing: 0 2px;}');
        }
      };
      TWX.ShortPopups = {
        init: function () {
          ItemPopup.getXHTML_twx = ItemPopup.getXHTML_twx || ItemPopup.getXHTML;
          ItemPopup.getXHTML = function () {
            var end = '';
            var html = ItemPopup.getXHTML_twx.call(this).replace(/<br><span class="inventory_popup_requirement_text(.*?)>$/, function (str) {
              end = str;
              return '';
            }).replace('<div class="invPopup_body">', '').replace('inventory_popup"', 'invPopup_body $& style="max-width:385px;"><table><td').replace(/bonus_attr tw_green"/g, '$& style="white-space:nowrap;"').replace('<br><br><div class="item_set_bonus">', end + '</td><td style="padding-left:5px;">');
            if (!html.includes(end))
              html += end;
            return html;
          };
        }
      };
      TWX.HideNotis = {
        init: function () {
          var setVal5 = setInterval(function () {
            var WNw = WestUi.NotiBar.work;
            if (WNw) {
              clearInterval(setVal5);
              WNw.setMaxSize(999);
              $('<div class="tw2gui_window_buttons_close" style="position:absolute;left:40px;z-index:2;" title="' + TWXlang.removeWorkNotis + '">').prependTo(WNw.element).click(function () {
                var l = WNw.list.length;
                while (l--)
                  if (WNw.list[l].tooltip.includes('job/danger.png'))
                    WNw.removeEntry(WNw.list[l]);
              });
            }
          }, 1000);
        }
      };
      TWX.JobProducts = {
        init: function () {
          GameMap.PopupHandler.getJobPopup_twx = GameMap.PopupHandler.getJobPopup_twx || GameMap.PopupHandler.getJobPopup;
          GameMap.PopupHandler.getJobPopup = function (d) {
            var html = GameMap.PopupHandler.getJobPopup_twx.apply(this, arguments);
            for (var i in d.yields) {
              var m = ItemManager.get(i);
              html = html.replace('<img src="' + Game.cdnURL + '/images/items/yield/' + m.short + '.', '<div class="item"><span class="count" style="display:block;top:29px;left:0px">' + Bag.getItemCount(i) + '</span></div>$&');
            }
            return html;
          };
        }
      };
      TWX.MapDistance = {
        init: function () {
          TWX.addStyle('div.job_way {left:61px;width:170px;}\n .mpb_distance, .wih_distance, .mpo_distance, .mpw_distance, .mps_distance {width:45px;}\n div.tw2gui_window.marketplace div.fancytable .row > div {text-overflow:unset;}');
          GameMap.calcWayTime_twx = GameMap.calcWayTime_twx || GameMap.calcWayTime;
          GameMap.calcWayTime = function () {
            var time = GameMap.calcWayTime_twx.apply(this, arguments);
            this.newDist = time / Game.travelSpeed / Character.speed;
            return time;
          };
          Number.prototype.formatDuration_twx = Number.prototype.formatDuration_twx || Number.prototype.formatDuration;
          Number.prototype.formatDuration = function () {
            var dist = '';
            if (GameMap.newDist)
              dist = ' <small>' + (Math.floor(GameMap.newDist) / 1000).toFixed(3) + 'mi</small>';
            GameMap.newDist = 0;
            return Number.prototype.formatDuration_twx.apply(this, arguments) + dist;
          };
          String.prototype.replaceAll = function () {
            return this.replace(/\D/g, '');
          };
        }
      };
      TWX.TraderSell = {
        init: function () {
          var setVal8 = setInterval(function () {
            var wws = west.window.shop;
            if (wws) {
              clearInterval(setVal8);
              var sellOptions = {
                sets: true,
                named: true,
                reps: true,
                auct: true
              };
              if (!TWX.Data.sellOpts)
                TWX.Data.sellOpts = sellOptions;
              TWX.addStyle('.focused_new_item_shop .sellIt, .focused_marketplace .auctIt {filter: grayscale(0.9)}\n .focused_tailor .not_sellable::after, .focused_gunsmith .not_sellable::after, .focused_general .not_sellable::after, .focused_marketplace .not_auctionable::after {content:"";position:absolute;width:28px;height:28px;right:0;background:url(images/window/shop/shop_icons_sprite.png)no-repeat -167px 0;} .focused_tailor .not_sellable, .focused_gunsmith .not_sellable, .focused_general .not_sellable, .focused_marketplace .not_auctionable {opacity:0.5}\n');
              var mt = -1,
              itemsToSell = [null, null],
              attr = ['sellable', 'auctionable'],
              className = ['sellIt', 'auctIt'],
              sellItem = function (item) {
                if (!item.obj[attr[mt]])
                  return this;
                var inv_id = item.inv_id;
                if (!itemsToSell[mt][inv_id]) {
                  itemsToSell[mt][inv_id] = item.count;
                  item.divMain[0].classList.add(className[mt]);
                } else {
                  delete itemsToSell[mt][inv_id];
                  item.divMain[0].classList.remove(className[mt]);
                }
              },
              setClickH = function () {
                Inventory.setClickHandler({
                  callback: mt ? MarketWindow.onInventoryClick : wws.handleInventoryClick,
                  context: mt ? MarketWindow : wws,
                  window: mt ? MarketWindow.window : wws.getWindow()
                });
              },
              exitSell = function (destroy) {
                if (mt)
                  MarketWindow.onInventoryClick = MarketWindow.onInventoryClick_twx || MarketWindow.onInventoryClick;
                else
                  wws.handleInventoryClick = wws.handleInventoryClick_twx || wws.handleInventoryClick;
                $.each(itemsToSell[mt], function (invId) {
                  var bgbi = Bag.getItemIdByInvId(invId);
                  if (!bgbi)
                    return delete itemsToSell[mt][invId];
                  Bag.getItemByItemId(bgbi).divMain[0].classList.remove(className[mt]);
                });
                itemsToSell[mt] = null;
                if (destroy)
                  return;
                setClickH();
                $(sellButton[mt]).css('filter', 'grayscale(0.9)');
              },
              repItems = [
                3, 17, 201, 202, 208, 235, 302, 303, 325, 329, 334, 342, 355, 405, 420, 432, 503, 506, 507, 525, 603, 802, 10003, 10005, 10012, 10015, 10075, 10149, 11003, 11014, 41171
              ],
              dontSellTxt = function (bgo) {
                var atxt = [];
                if (bgo.set)
                  atxt.push(TWXlang.sellOpts.sets);
                if (bgo.named)
                  atxt.push(TWXlang.sellOpts.named);
                if (repItems.includes(bgo.item_base_id))
                  atxt.push(TWXlang.sellOpts.reps);
                if (!bgo.auctionable)
                  atxt.push(TWXlang.sellOpts.auct);
                return atxt.length ? ' (' + atxt.join(', ') + '!)' : '';
              },
              initSell = function () {
                if (!itemsToSell[mt]) {
                  if (mt) {
                    MarketWindow.onInventoryClick_twx = MarketWindow.onInventoryClick_twx || MarketWindow.onInventoryClick;
                    MarketWindow.onInventoryClick = function (item) {
                      if (this.window.currentActiveTabId != 'sell')
                        return false;
                      sellItem(item);
                      return true;
                    };
                  } else {
                    wws.handleInventoryClick_twx = wws.handleInventoryClick_twx || wws.handleInventoryClick;
                    wws.handleInventoryClick = function (item) {
                      sellItem(item);
                      return true;
                    };
                  }
                  setClickH();
                  $(sellButton[mt]).css('filter', 'grayscale(0)');
                  itemsToSell[mt] = {};
                } else {
                  if (Object.keys(itemsToSell[mt]).length) {
                    var cont = '<div>',
                    money = 0;
                    $.each(itemsToSell[mt], function (invId, count) {
                      var bgbi = Bag.getItemIdByInvId(invId);
                      if (!bgbi)
                        return delete itemsToSell[mt][invId];
                      var bgo = Bag.getItemByItemId(bgbi).obj;
                      cont += count + 'x ' + TWX.GUI.getSetOrItem(bgo.item_base_id, bgo, true) + dontSellTxt(bgo) + '<br>';
                      money += bgo.sell_price * count;
                    });
                    cont += '<br><span class="invPopup_sellicon"></span>&nbsp;$' + money + '</div>';
                    var sellScroll = new west.gui.Scrollpane().appendContent(cont).getMainDiv();
                    $(sellScroll).css({
                      'height': '320px',
                      'width': '520px'
                    });
                    new west.gui.Dialog(TWXlang.sellItems, sellScroll).setDraggable(true).addButton('yes', function () {
                      $.each(itemsToSell[mt], function (inv_id, amount) {
                        if (mt) {
                          var item = Bag.getItemByInvId(inv_id).obj;
                          var params = MarketWindow.Offer.getOfferObject(item.item_id, 0, (item.sell_price || Math.round(item.price / 2)) * amount, amount, 1, 0, 3, '');
                          Ajax.remoteCall('building_market', 'putup', params, function (resp) {
                            if (resp.error)
                              return new UserMessage(resp.msg).show();
                            Character.setMoney(resp.msg.money);
                            Character.setDeposit(resp.msg.deposit);
                            new UserMessage(s('Die Ware wird zum Kauf angeboten, die Gebühr beträgt $ %1', resp.msg.costs), 'success').show();
                          }, MarketWindow);
                        } else
                          wws.requestSell({
                            inv_id: inv_id,
                            count: amount
                          });
                      });
                      itemsToSell[mt] = {};
                      if (mt) {
                        EventHandler.signal('inventory_changed');
                        MarketWindow.Sell.initData();
                      }
                      exitSell();
                    }).addButton('cancel').show();
                  } else
                    exitSell();
                }
              },
              openSellOptions = function () {
                var sOptCB = {},
                sOptCont = $('<span><div style="background:url(/images/window/shop/shop_icons_sprite.png) no-repeat -167px 0; width:28px; height:28px; position:absolute; right:0; opacity:0.7"></span>');
                for (var k in sellOptions) {
                  sOptCB[k] = new west.gui.Checkbox(TWXlang.sellOpts[k]).setSelected(TWX.Data.sellOpts[k]).appendTo(sOptCont);
                  sOptCont.append('<br><div style="height:5px;">');
                }
                if (window.TWDS)
                  sOptCont.append('<div style="margin-top:10px; font-size:12px">(' + TWXlang.sellOptInfo + ' "saleProtection")</div>');
                new west.gui.Dialog('&emsp;' + TWXlang.sellOpt + ':&emsp;', sOptCont).setDraggable(true).addButton(TWXlang.save, function () {
                  for (var k in sellOptions)
                    TWX.Data.sellOpts[k] = sOptCB[k].isSelected();
                  localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
                  new UserMessage(TWXlang.saveMessage2, 'success').show();
                }).addButton('cancel').show();
              },
              sellButton = [null, null],
              sellOptionsButton = null,
              icon = ['dollar', 'box'],
              addMtButton = function (winmt) {
                mt = winmt;
                if (!$('.TWX_' + attr[mt] + '_button').length) {
                  sellButton[mt] = new west.gui.Iconbutton(new west.gui.Icon(icon[mt]), initSell).addClass('TWX_' + attr[mt] + '_button').getMainDiv();
                  $(sellButton[mt]).css({
                    'left': '1px',
                    'z-index': 1,
                    'filter': 'grayscale(0.9)'
                  });
                  if (mt == 0) {
                    sellOptionsButton = new west.gui.Iconbutton(new west.gui.Icon('gear'), openSellOptions).addClass('TWX_sellOptions').getMainDiv();
                    $(sellOptionsButton).css({
                      'z-index': 1
                    });
                  }
                  Inventory.DOM.children('.actions').prepend(sellOptionsButton).prepend(sellButton[mt]);
                }
              };
              wws.openSellInventory_twx = wws.openSellInventory_twx || wws.openSellInventory;
              wws.openSellInventory = function () {
                exitSell(true);
                wws.openSellInventory_twx.apply(this, arguments);
                addMtButton(0);
              };
              /*MarketWindow.open_twx = MarketWindow.open_twx || MarketWindow.open;
              MarketWindow.open = function () {
              exitSell(true);
              MarketWindow.open_twx.apply(this, arguments);
              addMtButton(1);
              };*/
              Inventory.setClickHandler_twx = Inventory.setClickHandler_twx || Inventory.setClickHandler;
              Inventory.setClickHandler = function (h) {
                if (sellButton[mt])
                  $(sellButton[mt]).hide();
                if (sellOptionsButton)
                  $(sellOptionsButton).hide();
                var win = h && h.window.id,
                winmt = ['new_item_shop', 'marketplace'].indexOf(win);
                if (winmt > -1) {
                  mt = winmt;
                  h.callback = mt ? MarketWindow.onInventoryClick : wws.handleInventoryClick;
                  if (sellButton[mt])
                    $(sellButton[mt]).show();
                  if (sellOptionsButton)
                    $(sellOptionsButton).show();
                }
                Inventory.setClickHandler_twx.apply(this, arguments);
              };
              Inventory.undock_twx = Inventory.undock_twx || Inventory.undock;
              Inventory.undock = function () {
                if (itemsToSell[mt])
                  exitSell(true);
                if (sellButton[mt])
                  sellButton[mt].remove();
                if (sellOptionsButton)
                  sellOptionsButton.remove();
                return Inventory.undock_twx.apply(this, arguments);
              };
              var tIp = tw2widget.InventoryItem.prototype;
              tIp.initDisplay_twx = tIp.initDisplay_twx || tIp.initDisplay;
              tIp.initDisplay = function () {
                this.initDisplay_twx.apply(this, arguments);
                if (!this.obj.auctionable)
                  this.addClass('not_auctionable');
                if (TWX.Data.sellOpts.sets && this.obj.set || TWX.Data.sellOpts.named && this.obj.named || TWX.Data.sellOpts.reps && repItems.includes(this.obj.item_base_id) || TWX.Data.sellOpts.auct && !this.obj.auctionable)
                  this.addClass('not_sellable');
              };
              west.window.shop.trackBuyItem = function () {};
            }
          }, 1000);
        }
      };
      TWX.TouchControl = {
        init: function () {
          var fingers = 0,
          wgSbp = west.gui.Scrollbar.prototype;
          wgSbp.init_twx = wgSbp.init_twx || wgSbp.init;
          wgSbp.init = function () {
            this.init_twx.apply(this, arguments);
            var start,
            that = this;
            $(this.divMain).on('touchstart', function (e) {
              start = e.originalEvent.touches[0].clientY;
            }).on('touchmove', function (e) {
              e.stopPropagation();
              e.preventDefault();
              var move = e.originalEvent.changedTouches[0].clientY;
              that.move(move - start);
              start = move;
            });
          };
          var wgSpp = west.gui.Scrollpane.prototype;
          wgSpp.init_twx = wgSpp.init_twx || wgSpp.init;
          wgSpp.init = function () {
            this.init_twx.apply(this, arguments);
            var start,
            coP = this.contentPane,
            clP = this.clipPane,
            vB = this.verticalBar,
            ratio;
            $(this.divMain).on('touchstart', function (e) {
              fingers++;
              start = e.originalEvent.touches[0].clientY;
              ratio = (vB._divPullArea.height() - vB._divPulley.height()) / (clP.height() - coP.height());
            }).on('touchmove', function (e) {
              if (fingers != 1)
                return;
              e.preventDefault();
              var move = e.originalEvent.changedTouches[0].clientY,
              topPos = move - start;
              vB.move(ratio * topPos);
              start = move;
            }).on('touchend', function (e) {
              fingers = 0;
            });
          };
          var start,
          currZoom = 1;
          $('#ui_minimap').on('touchstart', function (e) {
            fingers++;
            start = e.originalEvent.touches[0].clientY;
          }).on('touchmove', function (e) {
            if (fingers != 1)
              return;
            e.preventDefault();
            var move = e.originalEvent.changedTouches[0].clientY,
            cZmb = currZoom + (move - start) / 100;
            if (cZmb >= 0.65 && cZmb <= 5)
              document.getElementById('map').style.zoom = cZmb;
          }).on('touchend', function (e) {
            fingers = 0;
            currZoom = $('#map').css('zoom') * 1;
            GameMap.resize();
          });
          GameMap.getCurrentMid_twx = GameMap.getCurrentMid_twx || GameMap.getCurrentMid;
          GameMap.getCurrentMid = function () {
            var xy = this.getCurrentMid_twx.apply(this, arguments);
            return {
              x: xy.x / currZoom,
              y: xy.y / currZoom
            };
          };
          GameMap.resize_twx = GameMap.resize_twx || GameMap.resize;
          GameMap.resize = function () {
            if (!GameMap.initialized)
              return;
            this.resize_twx.apply(this, arguments);
            this.width /= currZoom;
            this.height /= currZoom;
          };
          /*var start2;
          $('#map').on('touchstart', function (e) {
          fingers++;
          var eoEt = e.originalEvent.touches[0];
          start2 = [eoEt.clientX, eoEt.clientY];
          }).on('touchmove', function (e) {
          if (fingers != 1)
          return;
          e.preventDefault();
          var eoEcT = e.originalEvent.changedTouches[0],
          move = [eoEcT.clientX, eoEcT.clientY];
          GameMap.Drag.scrollby((start2[0] - move[0]) / currZoom, (start2[1] - move[1]) / currZoom);
          start2 = move;
          }).on('touchend', function (e) {
          fingers = 0;
          });*/
          var wgWp = west.gui.Window.prototype;
          wgWp.init_twx = wgWp.init_twx || wgWp.init;
          wgWp.init = function () {
            this.init_twx.apply(this, arguments);
            var start,
            that = this,
            tdM = that.divMain,
            currPos;
            $('div.tw2gui_inner_window_title', tdM).on('touchstart', function (e) {
              fingers++;
              var eoEt = e.originalEvent.touches[0];
              start = [eoEt.clientX, eoEt.clientY];
              that.bringToTop();
            }).on('touchmove', function (e) {
              if (fingers != 1)
                return;
              e.preventDefault();
              currPos = [tdM.offsetLeft, tdM.offsetTop];
              var eoEcT = e.originalEvent.changedTouches[0],
              move = [eoEcT.clientX, eoEcT.clientY],
              res = [currPos[0] + move[0] - start[0], currPos[1] + move[1] - start[1]];
              if (res[0] > -1) {
                tdM.style.left = res[0] + 'px';
                currPos[0] = res[0];
              }
              if (res[1] > -1) {
                tdM.style.top = res[1] + 'px';
                currPos[1] = res[1];
              }
              start = move;
            }).on('touchend', function (e) {
              fingers = 0;
            });
          };
          TWX.addStyle('img {-webkit-touch-callout:none;}');
          var timer,
          timer2,
          wph = west.popup.handler;
          $(document).on('touchstart', function (e) {
            timer = setTimeout(function () {
              wph.handleMouseMove.call(wph, e);
            }, 500);
            timer2 = setTimeout(function () {
              e.ctrlKey = 1;
              TWX.CalcTwdb.show(e);
            }, 2000);
          }).on('touchend', function (e) {
            clearTimeout(timer);
            clearTimeout(timer2);
          });
        }
      };
      TWX.ColorTchat = {
        init: function () {
          TWX.CT.DATA = new function () {
            this.Setting = {
              saves: {
                'save 1': '999',
                'save 2': '999',
                'save 3': '999',
                'save 4': '999',
                'save 5': '999'
              },
              Default: {
                Format: '%c',
                colorTag: '999'
              },
            };
            this.Load = function () {
              this.Setting = JSON.parse(localStorage.getItem('CT_save')) || this.Setting;
            };
            this.Load();
            this.Save = function () {
              localStorage.setItem('CT_save', JSON.stringify(this.Setting));
            };
          };
          TWX.CT.Tools = new function () {
            this.colorTagInv = function (e) {
              if (e === null || e === undefined)
                return '';
              if (e.length == 3)
                return '';
              var t = '';
              for (var n = 1; n < e.length / 3 - 1; n++) {
                t = e.substring(n * 3, n * 3 + 3) + t;
              }
              return t;
            };
            this.Degrader = function (e) {
              var t;
              if (e.length == 3)
                t = '#' + this.colorrgb(e);
              else {
                t = 'linear-gradient(to right, ';
                for (var n = 0; n < e.length / 3; n++) {
                  t += '#' + this.colorrgb(e.substring(n * 3, n * 3 + 3));
                  if (n !== e.length / 3 - 1)
                    t += ',';
                }
                t += ')';
              }
              return t;
            };
            this.colorrgb = function (e) {
              result = '';
              TransCode = {
                0: '0',
                1: '1',
                2: '3',
                3: '5',
                4: '6',
                5: '8',
                6: 'a',
                7: 'b',
                8: 'd',
                9: 'f'
              };
              for (var t = 0; t < e.length; t++) {
                result += TransCode[e.substring(t, t + 1)];
              }
              return result;
            };
            this.GuiSelectbox = west.gui.Selectbox;
            this.Guicheckbox = west.gui.Checkbox;
            this.Guitextfield = west.gui.Textfield;
            this.Guibutton = west.gui.Button;
            this.Guidialog = west.gui.Dialog;
          };
          TWX.CT.Chat = new function () {
            this.init = function () {
              if (!$('div.chat_room').length)
                return;
              clearInterval(TWX.CT.initInterval);
              this.Draw();
              TWX.CT.initInterval = setInterval(function () {
                TWX.CT.Chat.OnChanelChange();
              }, 500);
            };
            this.Draw = function () {
              if (isDefined(this.btncolor))
                return;
              var e;
              $('#colorTxtStyle').append('div.btnColor{cursor: pointer;position: absolute;right: 0px; width: 25px;height: 25px;}\n');
              $('#colorTxtStyle').append('div.btnColorBG{background-image: url(data:image/png;base64,' + border + ');background-position: 0px 3px;background-repeat: no-repeat;}\n.btnColorBG:hover{background-position: -25px 3px;}\n');
              $('#colorTxtStyle').append('div.btnColorImg{width: 11px; height: 11px; margin: 8px 0px 0px 5px; position: absolute; border-radius: 5px; background-image: url(data:image/png;base64,' + color + ');}\n');
              $('#colorTxtStyle').append('div.btnColorSmiley{border-top-right-radius: 10px;border-top-left-radius: 10px;border: 1px solid #646464;box-shadow: 0px 0px 1px 1px black;background-image: url(images/interface/wood_texture_dark.jpg);width: 425px;bottom: 18px;left: -400px;height: 208px;\t margin: 0px 0px 6px 0px; position: absolute;}\n');
              $('#colorTxtStyle').append('div.btnColorOneSmiley{display: inline-block; cursor: pointer; width: 17px; height: 13px; padding: 1px; text-align: center; vertical-align: middle;}\n');
              this.btncolor = $('<div class="btnColor btnColorBG">').append($('<div class="btnColorImg btnColorImgTag">').click(function () {
                    TWX.CT.Window.show();
                  })).append(e = $('<div class="btnColorSmiley">').hide()).on('mouseleave', function () {
                  $('div.btnColorSmiley:last-child', this).hide();
                }).on('mouseenter', function () {
                  $('div.btnColorSmiley:last-child', this).show();
                });
              for (var t in sm) {
                if (sm[t] !== '') {
                  e.append($('<div class="btnColorOneSmiley">').data('Tag', t).click(this.addSmToTxt).append(sm[t]));
                }
              }
            };
            this.addSmToTxt = function (e) {
              var inp = $(e.target).parentsUntil($('div.chat_main')).find('input');
              var n = $(e.currentTarget).data('Tag');
              var r = inp[0].selectionStart;
              var i = inp[0].selectionEnd;
              var s = inp.val();
              if (n == '[player][/player]') {
                s = s.substring(0, r) + '[player]' + s.substring(r, i) + '[/player]' + s.substring(i);
              } else if (n == '[item=]') {
                s = s.substring(0, r) + '[item=' + s.substring(r, i) + ']' + s.substring(i);
              } else {
                s = s.substring(0, r) + ' ' + n + s.substring(r);
              }
              inp.val(s);
            };
            this.appliquer_couleur = function (e, t) {
              if (e === '')
                return '';
              if (t == '999' && !TWX.CT.DATA.Setting.Default.Format.startsWith('/111* '))
                return e;
              if (e.toLowerCase().indexOf('[player]') === 0 && e.toLowerCase().indexOf('[/player]') !== -1)
                return e.substring(0, e.toLowerCase().indexOf('[/player]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/player]') + 10), t);
              if (e.toLowerCase().indexOf('[report=') === 0 && e.toLowerCase().indexOf('[/report]') !== -1)
                return e.substring(0, e.toLowerCase().indexOf('[/report]') + 10) + ' ' + this.appliquer_couleur(e.substring(e.toLowerCase().indexOf('[/report]') + 10), t);
              if (e.toLowerCase().indexOf('http') === 0)
                if (e.indexOf(' ') !== -1)
                  return e.substring(0, e.indexOf(' ') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(' ') + 1), t);
                else
                  return e;
              if (e.toLowerCase().indexOf('[item=') === 0 && e.indexOf(']') !== -1)
                return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
              if (e.toLowerCase().indexOf('[marker') === 0 && e.indexOf(']') !== -1)
                return e.substring(0, e.indexOf(']') + 1) + ' ' + this.appliquer_couleur(e.substring(e.indexOf(']') + 1), t);
              for (var n in sm) {
                if (e.indexOf(n) === 0)
                  return e.substring(0, n.length) + ' ' + this.appliquer_couleur(e.substring(n.length), t);
              }
              if (t.length == 3)
                return '/' + t + e;
              if (e.charAt(0) == ' ')
                return e.charAt(0) + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
              return '/' + t.substring(0, 3) + e.charAt(0) + ' ' + this.appliquer_couleur(e.substring(1), t.substring(3) + t.substring(0, 3));
            };
            this.fCharAt = function (str, idx) {
              str += '';
              var ret = '',
              end = str.length,
              surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
              while ((surrogatePairs.exec(str)) != null) {
                var li = surrogatePairs.lastIndex;
                if (li - 2 < idx)
                  idx++;
                else
                  break;
              }
              if (idx >= end || idx < 0)
                return '';
              ret += str.charAt(idx);
              if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1)))
                ret += str.charAt(idx + 1);
              return ret;
            };
            this.flipString = function (e) {
              if (e.length === 0)
                return '';
              var eO = this.fCharAt(e, 0);
              for (var p in fl)
                if (p == eO)
                  return this.flipString(e.substring(eO.length)) + fl[p];
                else if (fl[p] == eO)
                  return this.flipString(e.substring(eO.length)) + p;
              return this.flipString(e.substring(eO.length)) + eO;
            };
            this.OnPressKeyEnter = function (e) {
              var obj = $.extend({}, $(e.target).data('ColorTchat')),
              n = $(e.target).val(),
              r;
              if (n.charAt(0) == '/') {
                if (n.substring(0, 6) == '/tell ') {
                  if (n.indexOf(':') !== -1) {
                    r = n.substring(6, n.indexOf(':') + 1);
                    n = n.substring(n.indexOf(':') + 1);
                  }
                } else {
                  var i = [
                    '/topic',
                    '/clear',
                    '/logout',
                    '/ignorelist',
                    '/ignore',
                    '/unignore',
                    '/rights',
                    '/color',
                    '/me',
                    '/help',
                    '/?',
                    '/join',
                    '/items',
                    '/items.s',
                    '/items.add',
                  ];
                  for (var s = 0; s < i.length; s++) {
                    if (n.substring(0, i[s].length) == i[s]) {
                      return;
                    }
                  }
                }
              }
              if (/\/flip /.test(n.substring(0, 6))) {
                obj.Format = '%f';
                n = n.substring(6);
              }
              if (/\/[0-9]{3}/.test(n.substring(0, 5))) {
                obj.Format = '%n';
              }
              if (typeof r != 'undefined')
                obj.Format = '/tell %t:' + obj.Format;
              var cT = function () {
                var te = '',
                co = obj.colorTag;
                if (!co || co.length % 3 !== 0)
                  return '999';
                if (co.length !== 3) {
                  for (var n = 1; n < co.length / 3 - 1; n++)
                    te = co.substring(n * 3, n * 3 + 3) + te;
                  return co + te;
                } else
                  return co;
              }
              (),
              code = /%[C-n]/.exec(obj.Format)[0],
              newN;
              switch (code) {
              case '%c':
                newN = this.appliquer_couleur(n, cT);
                break;
              case '%C':
                newN = this.appliquer_couleur(n, cT).toUpperCase();
                break;
              case '%f':
                var u = this.flipString(n);
                newN = this.appliquer_couleur(u, cT);
                break;
              case '%F':
                var f = this.flipString(n.toUpperCase());
                newN = this.appliquer_couleur(f, cT);
                break;
              default: //%n
                newN = n;
                break;
              }
              $(e.target).val(obj.Format.replace(code, newN));
            };
            this.OnChanelChange = function () {
              if (!$('div.chat_room').length)
                return;
              clearInterval(TWX.CT.initInterval);
              $('div.chat_room').find('.chat_input').each(function (e) {
                if (!$(this).children().is('.btnColor')) {
                  $(this).append(TWX.CT.Chat.btncolor.clone(true));
                  $(this).find('input.message').on('keypress', function (e) {
                    if (e.keyCode == 13) {
                      TWX.CT.Chat.OnPressKeyEnter(e);
                      document.focusing = undefined;
                    }
                  }).data('ColorTchat', TWX.CT.DATA.Setting.Default);
                  TWX.CT.Chat.Change = true;
                }
              });
              this.ChangeColor();
              TWX.CT.initInterval = setInterval(function () {
                TWX.CT.Chat.OnChanelChange();
              }, 500);
            };
            this.ChangeColor = function () {
              if (this.Change === false)
                return;
              this.Change = false;
              var e = TWX.CT.DATA.Setting.Default.colorTag;
              if (pos[e])
                $('#colorTxtStyleTmp').text('div.btnColorImgTag{background-position: ' + pos[e] + '; z-index: 6}\n');
              else
                $('#colorTxtStyleTmp').text('div.btnColorImgTag{background: ' + TWX.CT.Tools.Degrader(e) + '}\n');
              $('div.chat_room').each(function (e) {
                $(this).find('input.message').data('ColorTchat', TWX.CT.DATA.Setting.Default);
              });
            };
            var fl = {
              a: 'ɐ',
              A: 'Ɐ',
              b: 'q',
              B: '𐐒',
              c: 'ɔ',
              C: 'Ɔ',
              d: 'p',
              D: 'ᗡ',
              e: 'ǝ',
              E: 'Ǝ',
              f: 'ɟ',
              F: 'Ⅎ',
              g: 'ƃ',
              G: '⅁',
              h: 'ɥ',
              i: 'ᴉ',
              j: 'ɾ',
              J: 'ſ',
              k: 'ʞ',
              K: 'ʞ',
              l: 'ן',
              L: '⅂',
              m: 'ɯ',
              M: 'W',
              n: 'u',
              N: 'N',
              P: 'Ԁ',
              Q: 'Ὁ',
              r: 'ɹ',
              R: 'ᴚ',
              t: 'ʇ',
              T: '⊥',
              U: '∩',
              v: 'ʌ',
              V: 'Ʌ',
              w: 'ʍ',
              y: 'ʎ',
              Y: '⅄',
              1: 'ɩ',
              2: 'ζ',
              3: 'Ɛ',
              4: 'ᔭ',
              5: 'ﻛ',
              6: '9',
              7: 'ㄥ',
              '.': '˙',
              '[': ']',
              '(': ')',
              '{': '}',
              '?': '¿',
              '!': '¡',
              '\'': ',',
              '<': '>',
              '_': '‾',
              ';': '؛',
              '&': '⅋',
              '"': '„',
              '‿': '⁀',
              '⁅': '⁆',
              '∴': '∵',
            },
            sm = {
              ':-)': '',
              ':)': '<img src ="images/chat/emoticons/smile.png">',
              ':-D': '',
              ':D': '<img src ="images/chat/emoticons/grin.png">',
              ':-(': '',
              ':(': '<img src ="images/chat/emoticons/frown.png">',
              ';-)': '',
              ';)': '<img src ="images/chat/emoticons/smirk.png">',
              ':-p': '',
              ':p': '',
              ':-P': '',
              ':P': '<img src ="images/chat/emoticons/tongue.png">',
              '-.-': '<img src ="images/chat/emoticons/nc.png">',
              '^_^': '',
              '^^': '<img src ="images/chat/emoticons/happy.png">',
              'O.o': '',
              'o.O': '',
              'O_o': '',
              'o_O': '<img src ="images/chat/emoticons/oo.png">',
              ':-/': '',
              ':/': '<img src="images/chat/emoticons/sore.png">',
              '=:)': '<img src="images/chat/emoticons/invader.png">',
              '>:(': '<img src="images/chat/emoticons/angry.png">',
              'T_T': '',
              'T.T': '',
              ':\'(': '<img src="images/chat/emoticons/cry.png">',
              ':-o': '',
              ':o': '',
              ':-O': '',
              ':O': '<img src="images/chat/emoticons/ohmy.png">',
              ':-x': '',
              ':x': '',
              ':-X': '',
              ':X': '<img src="images/chat/emoticons/muted.png">',
              ':-|': '',
              ':|': '<img src="images/chat/emoticons/silent.png">',
              '>_<': '',
              '>.<': '<img src="images/chat/emoticons/palm.png">',
              'X_X': '',
              'x_x': '',
              'X.X': '',
              'x.x': '<img src="images/chat/emoticons/xx.png">',
              'el pollo diablo!': '<img src ="images/chat/emoticons/elpollodiablo.png">',
              '!el pollo diablo': '<img src ="images/chat/emoticons/elpollodiablo_mirror.png">',
              'el pollo diablo?!': '<img src ="images/chat/emoticons/elpollodiablo_front.png">',
              'addme!': '<img src="images/chat/emoticons/sheep_rainbow.gif">',
              'addme': '<img src="images/chat/emoticons/sheep.gif">',
              '[player][/player]': '<div style="background-image: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-88px 20px; width: 21px; height: 20px">',
              '[item=]': '<img src="images/forum/icon/cowboy_boots.png" style="background: url(images/tw2gui/tw2gui_bbcodes.png); background-position:-22px 20px; width: 21px; height: 20px">',
            },
            em = [
              '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '🌟', '💫', '💦', '💧', '💤', '💨', '👍', '👎', '👌', '👊', '✌️', '👋', '👉', '👈', '🙌', '🙏', '👏', '💪', '🎩', '👑', '👒', '💼', '👜', '👓', '🌂', '💛', '💙', '💜', '💚', '❤️', '💔', '💗', '💓', '💕', '💘', '💌', '💋', '💍', '💎', '💬', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '☀️', '⛅️', '☁️', '⚡️', '☔️', '❄️', '⛄️', '🌁', '🌈', '🌊', '🎓', '🎃', '🎅', '🎄', '🎁', '🎉', '🎊', '🎈', '📱', '📞', '⏰', '🔒', '🚿', '🚽', '🚬', '💣', '🔫', '🔪', '💰', '✂️', '🎤', '🎧', '🎶', '🎻', '🎺', '🎷', '🎸', '🎮', '🏈', '🏀', '⚽️', '⚾️', '🎾', '🎳', '⛳️', '🏁', '🏆', '🎿', '🏂', '🏊', '🏄', '☕️', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍳', '🍩', '🍦', '🍨', '🍪', '🍫', '🍬', '🍭', '🍎', '🍇', '🍓', '🍌', '🍍', '🍅',
            ];
            for (var j of em)
              sm[j] = j;
            if (EvName == 'Easter')
              sm['easter!'] = '<div style="background-image: url(images/window/events/easter/easter_sprite.png); background-position:-20px 0px; width: 17px; height: 20px">';
            else if (EvName)
              sm[EvName.toLowerCase() + '!'] = '<img src="images/icons/' + EvName + '.png">';
            var color = 'iVBORw0KGgoAAAANSUhEUgAAAGAAAAAMCAYAAACdrrgZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAbDSURBVHja7JhLaBzZFYa/c6tf1a12Sy3Zssex/GLG8VtOsDMTDCFMCJ10IK9NZhGyCEMgRHgQCLLLLgjvBrwNIZBVCMoL4gweyGJs8DgeO57YHnvkka2XLcmtV6vV1V2tqpNFXbValmyPFtnlwEWl29/96697zj0qtfz0q7v1zpTH8FMPVeVQV5rjr7hozFA9m6Z2MgVA4oZH8kqVBCGqyoh7jD31YVJhDcUQAqohNUkykTjIfu8TUKicvCxsId7fs5ctRTy2JfzqL7cmf0t1S/yXt/C0BxTM7cdVbk5UWPYDqo2QGxMVbpc8KqdTVL+WIcg5BDkH7+tt1M5mEAURZfjBfa48Noz7aUQENGSiluTqlMP4xCjGwCbevw9cBGbtuGjnnhdb54WLCLN2vJQXuGhg1sCs/A/8CFyUSHtTfXP/aS3aQARVEBFuz3ssv54GWUunAPXTLkLITNUhmJxmmhjlaoMgXAFgZr5C2c1SH52g5DkYsy4D54EhhAKGPA55hAIwZD97NiwvBRyTxzF5jDyfF86jDFGnwDJ5KuSpUUA35wXOKwwtQ2Ee8vOQr0IhhCF5gR8DBQfyDuQNL/av6FCNaqHCQr7CYr6GV1DCdfoGiEpVFRFBW8tWlSg1gtokeOrwn3o7fwpW+PHYI+rBCo7j4MQcJObw1sgwQ40Gt+vbaBhnVakIDEQCQAmYAapWFAYss5FfrsHjhWgs1Z7PKwNUgTlg2urP23voel6gGMDAokXHgHF7vQQEMCCb+BFg0fJjQLlpf6MfJRiossg8T5hhjGlGmWcKjyWUsMmbfR0JAiAUIVAlBF7NJUlf9xAjYAREMUZI3qoxNie8MzrOaQ3Z2Z7js4rgh+AHykjVwQVOo7wzOsHEXPMEnWtu/hTwwI4pOyeWWYtziEDFh0cl+Hg8GqMlWPZXT+a5lnI+h293r2R1p+x1GWhYpkW/bvPzGHgEPAQm7VydjX7ESg0DV4EP7fVSs4rXeIFzPjXKzFJikilGmGaEEhOUmcOnjlg+drzbJes4PCjVEISDnUkO5l34YBkagnfGRQH3mof7UZV7NZc3vSegytN4gtlFj0rmNVBlvvwp0/E4VKu8uVzm17VuzkaeehFbjTPAZy19LQekAaW35YF7MRJV/ORCtPmr0ZmFbAoCXc+vADW7S6WWT9KADyTX9AV6faBiG/lkC74N6AAy0NvSC3odW/0PgX/ZTTfATqAdCFnv36eOxxJLzPKUcQQDCBlyNMiTxO0FiMWN4btdOzncmQMR7pkF7kqZIDAMX/kWdz74HiAcc/7Midhf2Lvd8N5Cjp6FOe5Xlzi8u52PHi2CKid62ql7sLS4yN+PHGd/pr6+K+ozPwHRdb9uaNSfO/QFa+TzLX0ZI3asbv7W7Km1sn5V7BSdnDJ5xN7kDToRTfJ7/QY39G3QEASur/yMkDZOJn/HP3fu4MlimSfbt/NGj8tv3/8EgLcLx3nid/CrkTE+PbiXo+VbLET3uYZSJA10ReWCANub1R8xa3GNUItkU7C7fW12d3tU/aFu5GMUSdkSXo02qx9br69wLQHFLNDZgueBLJCwTKt+CMUcsL8lEfvs7UI2+k+QLKbJkqWzuSJLnhRZ4iSafOyLmiNE7ZtQJHYk6OK2/gBMGJWo/YN8d+XbnJLfkNoV44/xA3ylpxtCj0w2ByiBxOnIGoaO7uX18jDOqjUYbCZgl3Ut0TlXt5mAwZYHGES1SCYB+7qitgOQTUImsfp+O9hSXoMkKJJtaTtAMyFxEGWwpdIHk1DssLfO2cmMbT9JNvpRm7BXgW5rf5tdo8/wCoMJUsU2OlGEDO2A4NJGlg4SpFDLm+ax0E3f2zdMBqGSrZX44YE0X8g0+HjWwRUfVxr8e8awK+Hxo9eybFtZIAiaCbgM9KH4pIEdtvqjzfeBPsts5DMpeKU9GpnU83lDH2l8Oqz+DlvSLj6GPm3hFS470JcFvxvYY0d3dAJ8h/X8qh8FfxvQY3mbb1838WNw+tLk/Dy76GYvO+ihg52kyfqCNPnYsClzLOxoHisB7juzHOWv3Ax/smZZhEOx9wAhRClNT9LoOsz1Gx/yi+98CQQu/O0GR7rPkJx7jBhjX16bcQG4hNKPcoa1Y/sucHeT1Fte+wn05bxyAeESKfqhRV835xUuGLiUgX6xvMI1hXf1BX5C6A95uf9IXy6lcPvBbfLP6svPz+7RYyvtHAii5jkSK3MnvkidODcbb3Fv5ZugyiHzD46aP5CK1RDblh56bVSWq5zoiv4R+7gUoy3jsj9ZJgxBVSifuPL/ryJe8FXEfwcAU73isuGF8swAAAAASUVORK5CYII=',
            border = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHpsAACAjgAA+FQAAIITAAB2OwAA9IEAADvkAAAbd5lS/4AAAAnFSURBVHjazJhLb5xHdoafU1XfrdmkSJOWLGs8tjQzgDTKxAGCBEjCyYIDZBtAy8CL8e/QWkj+RgBvo613TJBoEiABJlZGE3EiS45lXakmu8m+fZeqc7JotkRZciazywG6PzTQXU+dt+qct6rlr3/+UwN4PJgC8IPvbVIWOQ/3B9TzyNmNihiFg+MZ6oTNfsHhqCGaIhiD4XNCscl6LwNgPD3gb//+6w+AAzObA/zNp3/+VsZ/Px6QVHl3vSJG5cnhjF4eONPPeXo4Q1jEYPjstzLC+pkzACyfGJgaF7beoYstk0nNdN7iRShyx389fESMHWWxQVIhAXfuPeAPfnSJ9V5GTArwU+CfgEenx37JOIkPL5ylbRtm9YzhuKFfBYos8O93HtDrl0ixijMD4Is3GX8M/OuSEX59/8l8NOuq4eEjEPDSp8gDuTNmUdEYaZtI7AxMF4lipPQE1YRzFWeAL+894Ic/usTvXfoI/vGby8AXywn/+v6T4WjWbXy2+ysAcu/wziFiGIthFWMxZ8EwzAzBEBH05Dt3vvkVn+z8ZMn4EPjPJSNc2FrhAnDz/te8u1Ywjg0hRloVSu8whNWQQaEQFBQEwUTIi0CZFUid+GrUcvX76y/HBdzyw5IBkAdHHgRQSnGId4Qgi+S8Q8wQJ5g4uqi0XUcTlS4a81ZPM/xpRrh9775sbpxjsSGNnIgzoyo9PnNk3uEEgneIMxRwBiZG5pV+1mBlRZ2t8HgwZTB8BixEXEJu37vvtjbewwmUAj/cKlkpPL3SUxUFeeYpMyP3INFIImQO6nnL4TTwzUQZjjtGkng0mHLwFkbY2jjnBofPWXU5H2ysMZ11eJ/wCAG7JcpNRHYT3CXJFWAnYdcQt21mjFLH+LDhAOinxNbGOeDJa7WwtfGefzF8xkoRuPLBBn/x8Vmy3GEGInLLOW46s11RvRtTulLP251m1lwzddv96Hm36TTriRMRXgyfcXb97BuMYAgh32T17DG0Y1bLgmgOgc/AbjhhzzCSAsrthN3G+Byx65r4ZDV3nDvXJw3nWH6GC1v9xeoar4OyTcowoApQBaOXecz4TMVuJNW9pAlNSkrxtmG3LfjPi2TXWfWfZGXmtszTPj4mz9d5f72vTkBPMZxg2epK4HB/xDQaYAS45bEbHtlTBU2Q1IgGqJASezHajaaxW8djYzgxxm1BL895NJgiiAB8+rOryw5anul5iiqw0gvUbcOknt6a1vMb00m9Nzmec3RUcziaMTyqOZ621E23F01voHari8ZwPGXamFbB6ePRDMG514QCEWeJMi/RoiRpxGE3gb1lJ7GXBW6ogHgQk72kdnPe2ra1xmh8xPn31hAqwAQgqp60dA0JoWuNw8MJz3uOMvc3nZM9OVFW1YiLVSdFiGp0Ke3Vrd6c1nE7RVgJ3kVMc8A5Q1VOJWKGCUicYpNAUyge2fWytBXBWLRHOWmPIot+EWC3q0CbhjL0UAt4AxxKgmQ4Fg/FouItdHjq5LBWd70I4sA5wYuQe4HgIAckkIBVk931pMzapPFwhuBIYuoC4qO9tiJgQlUF+quJWS0gdtdUEHeSzcvEF0mIBy+Ceu7GqVF3SkeHqQPMZGE3nNgEZmg0nJwobSgq/u7CtxY+IQgOW7zcwk0Eo1W92ybVrjWnJupNW0k4UmZq3cvt5RA4miUOp/BovyWIILgrJ9sck8WqCCDO8H4hmnNG5rmSV45eryQnZ5YSJiJiIk5EkppbCjGdJeeDiyuZ4SziLF0JYgSB3EEWjCwIWXB45xEX8C4QJFzxEpw5kCgc1SksmomJOyVxWIAS+1PH+rsOwxAnO4LcRljkI7ZYCeSlzCLgnNtZO7NCIRGr+ie6QsIMw7wXXaiFcw5cJmFlpWJ1rSLAjkdui4Bb1h3CchNgoAhO3E4SRRUkRBc8ToyoTnVZgrx0RhN6ldCTnGSGOK7h9bK4xYQ9QhDBy0nFqKKdXk6q1zKBOrZMJqMTjzoVr1ZVFcF3jiLz9BdmeK1X+cu9ylNVnqrMqMqMPM/wIYD3JJPLdbJrszoymScdNxEzFDEkYaaWXiYymnWIc1hsGNNSlY4isF3m7nqeyeW8EEK+sHNVpWsT8zpdnrZ6fd7adtvUxEkEiwtdTvX2uk0GMJq1zptSp4ZpA+tneqyvrWz3+9X1lV55uSwLihDIs0CeeYrgyYO7XGZyvfK2nUxAcUYGIs4JrtUkdooVnuwPMIN53VLFjC55IglvfILZR6Z6M6ntxqh3m06vNNF2OuUazm/3e47Bi5rzG2vEwwMeNwPi+quW+He/+I0BPN0/cGpoTHA0PHb3HmSs9XPyXD5xwkdmdtPMdhW7K8IVL+z44K95H7bLMmOtnZNUSU3N88GIGMV923RDPZ1Q9Pq0DdTB8/TpFBeNLDfUsZ2SbatBUkFNSTjEEk5hPplzrJ7x0YBx07G+2eP56FuWDpwwXDJjdaNHspr9g5ZJm2g72VZj23tHljnKXKhKT3CJwieq3NN6aE0Zt8q6wmB0cgQ/bYhFr1+vhrqkKBgft8yTkJpI39zCyR14bwQFEyETBRzzZMy9MG4bNK+IGlkNNW+Lotc/Wg31meN5ZP/FmD/6wSVmbcf8oGZWzxjXEcMIYoSTrhgI+CKQYkszc3Qe5m1kLX87I1y9eN4Gw2cMps+pO4+2CQmOqRSoGW0byXEQPFIITgSJxrzrKBplZsa0mbC1vkKvX7G18R7cHr4GuXrxvA6GzzAd8uio49/uPSe1LXleoEBRCE48rRrjtiN1iZAZpSWOjyPDWUurSpugt1Kx9c6bjDCadVUoNvnLP1lcJXVxAGM2mzA4OsbJKiv9Ak01asqLoxmbqxWFg6g1dx4e00yUq9+rWBR294Zao1m3EYpN/mrn1XVVBCbzYw6OJuTlFmUWsNhQNy2Tecs7Gz1EO+qtji+fHDOfKH/4443vZIQ/+8mHfHjxfQC+/urJsoWfvC8q6vH+IZr6zOqOjy+9T55n9Ff6qBnwS56PjNlkTq9f8ezF4WtnAYC3MRZxHnB0KfF8f0jUHlGVrbWSqirpVRXjaUMe7vxWRvj8H37B9+9f5MLW4mJU5h7vHON5ixNBDY7nLRpn+FDx5aOnxGT0QmQ4D0urYBxLXjw+Xhraa5eebzOqfPG7Sd3hRYhqHM8bTFucy/iPLx9RZoLGyDSGlzP+3xhiZojIReBnwKfAv7zpbN8ZJfBj4Je8OpVF4DfArpk9fOWNchH40xPGF78Do1r+wXCKkYBvgH9eMpaJ9IBzwMfAgzevRd8ZHrgAPDwFUWAMvDCz2alElozfB776HRnxW4koMDnNELP/63j/v+N/BgBXi5F3d3nGEQAAAABJRU5ErkJggg==',
            pos = {
              999: '0px 0px',
              308318328338348: '-24px -0px',
              106117128139: '-36px -0px',
              120130140150: '-48px -0px',
              400500600700800: '-60px -0px',
              199299399499599699: '-72px -0px',
              505606607709809: '-84px -0px'
            };
          };
          TWX.CT.Window = new function () {
            var saveB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAIAAAAv2XlzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH6SURBVHjaVM89a1RRFIXhtffZ9zOYTBKJYaKOiumiqdKKgmBhqUL+hI2VIFjYCZaChb9ABAtJIQbFIoJoQNSMEKLkC+IEZhLnzuTM3DP3nm2hhLjq9RYPRceOn5qeDUWcyw0jjUNjDBsTiEnikADbd13rbF7sbKwetLZkdPLs5Ru34cvv9ZXauNy6OlOrnZ6aOmmC+FN9KxQzd+HMs8Wv71caG6ufl54/EvW+28nyfr/V2hvh4KCb9W2XfP5rN3vwZCGJ5en9+Z7tZu3faZKaIBIiEKlhiqMgikMjwswKAJAgEBEAhskwoCVUBQBUiSGBRGEYCweGhPnE2PD8tdk4DCrDQ1nH2l6/KEsQBABB1StIfu5kr5c3zzcHE9udykhl5txEIPxicfnd8mpeStFzBAgBWcfud2xBYUH8diV7862tWldVKBQgIE3jsdGKVw9AitLvtTvMdGVuulYdJyLVvwQAIBAzrW3ufllrDJxT9VKW5X67e/3SxYd3bjKKvu2B6DCAahSFecn3Hi+8fLWuqjIoCmt7IsxMe812s9li5sO/934oTSar1TQJDqxVVfFenXO+LAGEYZikydFAVeM4BtHADVzuVFWIWFkUVBYuTZMwjvD/xLBqCZCyAZHkWUMa9Q9L7m573Xs9Kv7nJmLmj/XtQeuHd70/AwDj7v01yw6ZhAAAAABJRU5ErkJggg==',
            setB = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAACoUlEQVQ4T42Uy2sTURTGk1Zbq+ILUdyKG5uZSerQkPbeyYAYCZhlggurFUJN5xGUgiBushdBsQguFMGFC7EqLiyiCwWh0IL/QH3tFJcu1CKlft+duTqJieTA4Z7cOfeX755zZlLaarXaYBx2i9OMW63WQDI2ZDBniOCrKcMHo66/nfvKXNfdgkUlMo4Ppsrl8rCGYx2ybXtzZsIbN47W91vCuwLQhimDDQuekeFl5rUpKBQKIxpAMHwTY8IIN4QfmtL/Dv+WhKnY8S/qfGVJGA8nYXTDCU+YIvhhykbVFCHWBEwGz+1jtZ3MV0Y1vZTRGY8V64eh7BGgP+GPTeG/UjARvCkcr+5hjjKCkjXrBssVZ8YB+wJl96BmwZL+EtY1NOWZJb0VpLBkaX1WWS9lCib8j1knzANyC824b4jwIbr7EvFrQ/rXkJauVqsjXHnmv8rQiPem9GzsDVYqla2A3oayu1C8AOgTvY/0CMYNehz/C3P8IoC7jzinDtju3F7Aliw5exqTONABS2uOInfCTOF9yIjwBlT8QrzOeqEJKxFMWToJ45TEcReY9FbNyWAe11vnaKBmi+jmsiUaZ5CiAEkY66cbq14hvgGMc7Ixqq4JZX9hwSKV5SIYrSes7cqEYhyuA3S1TZkMlk1nZjrO6wnjlGCJVLLDrju9C4ffWSK4iQ6ucTQi2CxhtJ6w5FtGY7eGALgEwLw1ee4krngHvpp1GmfjnL5gek9d2RK+BPATavbWEmF9ojS1L37WF4yzrPdVMUulqW3o7sFD5eYwD6kHfcKSbxktnZUNAWUv8vnmjhjWt7IOmHrOL+9T1AxfDu+82o4BXOkEaBgByWtqGKdE76cwtBfgn61ic4y/4yTC9GwlYwXmH/ypWdRYPEulfgMLajrH8hIjewAAAABJRU5ErkJggg==',
            cList = [
              '999', 'custom', '700', '321', '409', '007', '031', '704', '608', '308318328338348', '106117128139', '120130140150', '400500600700800', '199299399499599699', '505606607709809', '696595494393292', '959949839829819', '900911922933944'
            ];
            this.showOn = function () {
              var e,
              i,
              format = TWX.CT.DATA.Setting.Default.Format;
              $((this.w = wman.open('CT', 'ColorTchat').setTitle(TWXlang.CT.ColorWindowTitle).setMiniTitle(TWX.CT.name).setSize(350, 400)).getContentPane()).css('text-align', 'center').append(i = $('<input type=hidden class="color" id="colorinput" value="66ff00">'));
              (this.ColorPicker = new jscolor.color(i[0], {
                  pickerOnfocus: false
                })).showPicker();
              this.tab1 = $('<div style="display:inline-block;width:290px;height:275px;position:relative;padding:4px12px4px4px;text-align:left">').appendTo(this.w.getContentPane()).append($(jscolor.picker.boxB).css({
                    position: 'relative',
                    display: 'inline-block',
                    'background-color': ''
                  })).append($('<div id="colorPanelDIV" style="display:inline-block;width:auto;height:123px;position:relative;margin-left:7px;border:' + this.ColorPicker.pickerBorder + 'px solid;border-color:' + this.ColorPicker.pickerBorderColor + '">').append($('<div id="colorWSetbtn" style="width:20px;height:20px;background-image:url(' + setB + ');margin:10px;cursor:pointer;">').click(function (e) {
                      TWX.CT.Window.SetPreviewColor(0);
                    })).append($('<div id="colorWLoadbtn" style="width:20px;height:20px;margin:10px;cursor:pointer;">').click(function (e) {
                      TWX.CT.Window.selectLoad.show(e);
                    })).append($('<div id="colorWSavebtnBg" style="width:20px;height:20px;background-image:url(' + saveB + ');background-size:100%100%;margin:10px;cursor:pointer;">').click(function (e) {
                      TWX.CT.Window.selectSave.show(e);
                    }))).append(e = $('<div id="PreviewDIV" class="chatwindow_background" style="display:inline-block;width:287px;height:60px;position:relative;zIndex:5;margin-top:5px;border:' + this.ColorPicker.pickerInset + 'px solid;border-color:' + this.ColorPicker.pickerInsetColor + ';color:white;background:#1D1C1C;opacity:' + $('.tw2gui_window_inset', '.chat').css('opacity') + '">')).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%">').append((this.Bold = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowBold).setSelected(/\*.*\*/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:auto">').append((this.Caps = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowCaps).setSelected(/%C|%F/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append($('<div style="display:inline-block;position:relative;padding:4px;width:45%">').append((this.Flip = new TWX.CT.Tools.Guicheckbox(TWXlang.CT.ColorWindowFlip).setSelected(/%f|%F/.test(format))).getMainDiv().click(function () {
                      TWX.CT.Window.updateFormat();
                      TWX.CT.Window.updatePreview();
                    }))).append((this.inputFormat = new TWX.CT.Tools.Guitextfield('bdfFormat').setValue(format).setSize(14).setReadonly(true)).getMainDiv());
              $((this.selectLoad = (new TWX.CT.Tools.GuiSelectbox('topleft-left')).setPosition(42, 10).addListener(function (e) {
                    TWX.CT.Window.LoadColor(e);
                    setTimeout(function () {
                      TWX.CT.Window.selectLoad.hide();
                    }, 0);
                  }).setWidth(200).setHeight(300)).elContent).css({
                'overflow-y': 'auto'
              });
              this.selectSave = (new TWX.CT.Tools.GuiSelectbox('topleft-left')).setPosition(42).addListener(function (e) {
                TWX.CT.Window.SaveColor(e);
                setTimeout(function () {
                  TWX.CT.Window.selectSave.hide();
                }, 0);
              }).setWidth(200);
              for (var s = 0; s < cList.length; s++)
                this.selectLoad.addItem(cList[s], $('<div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">').append($('<span style="display:inline-block;width:19px;height:19px;">').css('background', TWX.CT.Tools.Degrader(cList[s]))).append(TWXlang.CT.ColorLoadListName[s]), TWXlang.CT.ColorLoadListName[s]);
              for (s in TWX.CT.DATA.Setting.saves)
                this.selectLoad.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;">').css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[s]))).append(s + (TWX.CT.DATA.Setting.saves[s] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '')));
              for (s in TWX.CT.DATA.Setting.saves)
                this.selectSave.addItem(s, $('<div>').append($('<span style="display:inline-block;width:19px;height:19px;">').css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[s]))).append(s + (TWX.CT.DATA.Setting.saves[s] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '')));
              for (s = 1; s < TWXlang.CT.ColorWindowPreviewTxt.length; s++)
                $('<div id="idColorPreview_' + s + '"style="display:inline-block;cursor:pointer" onclick="javascript:TWX.CT.Window.SetPreviewColor(\'' + s + '\');">').appendTo(e);
              this.customTF = (new TWX.CT.Tools.Guitextfield).setSize(30);
              this.test = function () {
                TWX.CT.Window.customTest.html(TWXlang.CT.CustomNotReady).css('color', 'red');
                v = TWX.CT.Window.customTF.getValue();
                if (v.length % 3 == 0 && /[0-9]+/.exec(v) == v) {
                  TWX.CT.Window.customTest.html(TWXlang.CT.CustomReady).css('color', 'green');
                  TWX.CT.Window.customPrev.css('background', TWX.CT.Tools.Degrader(v));
                }
              };
              this.customTF.getField()[0].addEventListener('keyup', this.test);
              this.customPrev = $('<div style="float:left;margin-top:5px;width:19px;height:19px;">');
              this.customTest = $('<div style="height:12px;width:120px;">');
              this.customTF.divMain.append(this.customPrev, this.customTest);
              this.DefaultButton = (new TWX.CT.Tools.Guibutton(TWXlang.CT.ColorWindowToDefaultBtn, function () {
                  TWX.CT.Window.DefaultClick();
                })).appendTo(this.w.getContentPane());
              this.OkButton = (new TWX.CT.Tools.Guibutton(TWXlang.CT.ColorWindowThisTchatBtn, function () {
                  TWX.CT.Window.OkClick();
                })).appendTo(this.w.getContentPane());
              this.LoadColor(TWX.CT.DATA.Setting.Default.colorTag);
            };
            this.show = function () {
              if (window.jscolor)
                return TWX.CT.Window.showOn();
              $.getScript(TWX.website + 'files/jscolor.js', function () {
                TWX.CT.Window.showOn();
              });
            };
            this.OkClick = function () {
              TWX.CT.DATA.Setting.Default = {
                Format: $('#bdfFormat').val(),
                colorTag: this.ColorTag
              };
              TWX.CT.DATA.Save();
              TWX.CT.Chat.Change = true;
              TWX.CT.Chat.ChangeColor();
              new UserMessage(TWXlang.saveMessage, 'success').show();
            };
            this.DefaultClick = function () {
              TWX.CT.DATA.Setting.Default = {
                Format: '%c',
                colorTag: cList[0]
              };
              TWX.CT.DATA.Save();
              TWX.CT.Chat.Change = true;
              TWX.CT.Chat.ChangeColor();
              this.show();
            };
            this.SetPreviewColor = function (e) {
              if (e == 0) {
                this.ColorTag = this.colorwest(this.ColorPicker.toString());
              } else {
                e--;
                if (e > this.ColorTag.length / 3) {
                  this.ColorTag += this.colorwest(this.ColorPicker.toString());
                } else {
                  this.ColorTag = this.ColorTag.substring(0, e * 3) + this.colorwest(this.ColorPicker.toString()) + this.ColorTag.substring(e * 3 + 3);
                }
              }
              this.updatePreview();
            };
            this.updateFormat = function () {
              var e = this.Flip.isSelected() ? '%f' : '%c';
              if (this.Caps.isSelected())
                e = e.toUpperCase();
              if (this.Bold.isSelected())
                e = '/111* ' + e + ' /111*';
              $('#bdfFormat').val(e);
            };
            this.updatePreview = function () {
              var flip = this.Flip.isSelected();
              var e = flip ? '%f' : '%c';
              if (this.Bold.isSelected())
                e = e.bold();
              if (this.Caps.isSelected())
                e = e.toUpperCase();
              var n = this.ColorTag + TWX.CT.Tools.colorTagInv(this.ColorTag);
              var leng = TWXlang.CT.ColorWindowPreviewTxt.length;
              for (var r = 1; r < leng; r++) {
                var i = document.getElementById('idColorPreview_' + r);
                i.style.color = '#' + TWX.CT.Tools.colorrgb(n.substring(0, 3));
                var g = flip ? leng - r : r;
                var s = TWXlang.CT.ColorWindowPreviewTxt.charAt(g);
                if (s == ' ')
                  i.innerHTML = '&nbsp';
                else
                  i.innerHTML = e.replace('%c', s).replace('%C', s.toUpperCase()).replace('%f', TWX.CT.Chat.flipString(s)).replace('%F', TWX.CT.Chat.flipString(s.toUpperCase()));
                n = n.substring(3) + n.substring(0, 3);
              }
              $('#colorWLoadbtn').css('background', TWX.CT.Tools.Degrader(this.ColorTag));
              $('#colorWLoadbtn').attr('title', TWXlang.CT.ColorLoadTitle + this.ColorTag);
            };
            this.SaveColor = function (e) {
              TWX.CT.DATA.Setting.saves[e] = this.ColorTag;
              for (var i in this.selectLoad.items) {
                if (this.selectLoad.items[i].value == e) {
                  $(this.selectLoad.items[i].node[0].firstChild).css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[e]));
                  this.selectLoad.items[i].node[0].lastChild.textContent = e + (TWX.CT.DATA.Setting.saves[e] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '');
                }
                if (typeof this.selectSave.items[i] != 'undefined')
                  if (this.selectSave.items[i].value == e) {
                    $(this.selectSave.items[i].node[0].firstChild).css('background', TWX.CT.Tools.Degrader(TWX.CT.DATA.Setting.saves[e]));
                    this.selectSave.items[i].node[0].lastChild.textContent = e + (TWX.CT.DATA.Setting.saves[e] == cList[0] ? ' ' + TWXlang.CT.ColorSaveEmpty : '');
                  }
              }
              this.updateFormat();
              TWX.CT.DATA.Save();
            };
            this.LoadColor = function (e) {
              if (/save/.test(e)) {
                e = TWX.CT.DATA.Setting.saves[e];
              }
              if (e == 'custom') {
                this.customTF.setValue(this.ColorTag);
                this.test();
                (new TWX.CT.Tools.Guidialog(TWXlang.CT.ColorLoadListName[1], this.customTF.getMainDiv(), 'question')).addButton(TWXlang.CT.ColorWindowOkBtn, function () {
                  var e = TWX.CT.Window.customTF.getValue();
                  if (e.length % 3 == 0 && /[0-9]+/.exec(e) == e)
                    TWX.CT.Window.LoadColor(e);
                }).addButton('cancel').show();
                return;
              }
              this.ColorPicker.fromString('#' + TWX.CT.Tools.colorrgb(e.substring(0, 3)));
              this.ColorTag = e;
              this.updateFormat();
              this.updatePreview();
            };
            this.colorwest = function (e) {
              Wr = (parseInt(e.substring(0, 2), 16) / 255 * 9).toFixed();
              Wg = (parseInt(e.substring(2, 4), 16) / 255 * 9).toFixed();
              Wb = (parseInt(e.substring(4), 16) / 255 * 9).toFixed();
              return Wr + Wg + Wb;
            };
          };
          $('head').append($('<style id=\'colorTxtStyle\'>'));
          $('head').append($('<style id=\'colorTxtStyleTmp\'>'));
          $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input div.cbg {right: 65px}\n');
          $('#colorTxtStyle').append('div.tw2gui_window.chat div.chat_room div.chat_input a.speak {right: 25px}\n');
          TWX.CT.initInterval = setInterval(function () {
            TWX.CT.Chat.init();
          }, 500);
        }
      };
      TWX.QuickItemsSearch = {
        init: function () {
          var skillsL = [];
          TWX.QIS = {
            buffDesc: function (umt) {
              return umt.replace(/\+|\d/g, '').replace(/:.+/, ':').trim().toLowerCase();
            },
            useboni: {},
            sets: [{
                name: 'adventure',
                img: 44053,
                bons: ['offense', 'defense']
              }, {
                name: 'work',
                img: 1879,
                bons: ['joball', 'drop', 'premiumAu', '-premiumSp']
              }, {
                name: 'duel',
                img: 842,
                bons: ['dmgduel', 'lpduelS', 'aim', 'dodge', 'punch', 'shot', 'reflex', 'tough', 'appearance'],
                itemsk: [2695, 51871, 53454]
              }, {
                name: 'energy',
                img: 1890,
                bons: ['energy', 'regen', 'premiumEP', '-premiumSp'],
                itemsk: [2483, 2486]
              }, {
                name: 'skill',
                img: 1977,
                bons: skillsL,
                itemsk: [1977, 1978, 1979]
              }, {
                name: 'fk',
                img: 758,
                bons: ['offense', 'defense', 'dmgfb', 'health', 'hide', 'pitfall', 'leadership', '-joball', '-workmoti', 'premiumCh', '-premiumAu']
              }, {
                name: 'speed',
                img: 605,
                bons: ['speed', 'shortway', 'premiumSp', '-premiumEP']
              }, {
                name: 'lp',
                img: 2117,
                bons: ['lp', 'health', 'regen'],
                itemsk: [2483, 2486]
              }, {
                name: 'luckNmoney',
                img: 2290,
                bons: ['luck', 'money', 'dollar', 'premiumIn', 'premiumSf', '-premiumSp']
              }, {
                name: 'duelmoti',
                img: 1939,
                bons: ['duelmoti']
              }, {
                name: 'workmoti',
                img: 1891,
                bons: ['workmoti']
              }, {
                name: 'experience',
                img: 2467,
                bons: ['experience', 'exp', 'levelUp']
              }, {
                name: 'special',
                img: 2482,
                bons: ['premiumCh', 'premiumEP', 'premiumAu', 'premiumIn', 'premiumSp', 'premiumSf', 'regen', 'avatar', 'levelUp'],
                itemsk: [2483, 2484, 2485]
              }, {
                name: 'events',
                img: 2564,
                bons: ['events'],
                itemsk: [55, 12700, 50090]
              }, {
                name: 'chests',
                img: 17002,
                bons: ['bag', 'box', 'collection', 'bonds', 'avatar', 'exp', 'levelUp', 'money', 'events'],
                itemsk: [2482, 2484, 2485]
              }, {
                name: 'equipment',
                img: 2188
              }, {
                name: 'products',
                img: 702,
                itemsk: [1828, 1829, 1830, 1975, 2000, 2003, 2006, 2009]
              }, {
                name: 'questitems',
                img: 17026,
                itemsk: [774, 2001, 2004, 2007, 2010, 51578, 51584, 51590, 51596]
              }, {
                name: 'craftitems',
                img: 1899,
                itemsk: [2000, 2003, 2006, 2009]
              }, {
                name: 'recipes',
                img: 20115
              }, {
                name: 'NAMED',
                img: 842
              }
            ],
            MenuButton: function (image, title, onclick) {
              var that = this;
              this.onClick = onclick;
              var clicked = function (e) {
                if (that.onClick) {
                  that.onClick(that, e);
                }
              },
              mouseIn = function () {
                that.obj.css('background-position', '-25px 0px');
              },
              mouseOut = function () {
                that.obj.css('background-position', '0px 0px');
              };
              this.obj = $('<div class="menulink" title="' + title + '">').css('background-image', 'url(' + image + ')');
              this.obj.on('mouseenter', mouseIn).on('mouseleave', mouseOut);
              this.obj.click(clicked);
              $('#TWX_menu').append(this.obj);
            },
            popup: function (button, e) {
              if (!TWX.QIS.popupMenu) {
                TWX.QIS.popupMenu = new west.gui.Selectbox().setWidth(250);
                TWX.QIS.popupMenu.addListener(TWX.QIS.findSet);
                var qs = TWX.QIS.sets,
                i = qs.length;
                while (i--) {
                  var si = qs[i];
                  si.name2 = TWXlang.QIS[si.name] || si.name;
                }
                qs.sort(function (a, b) {
                  var a1 = replUml(a.name2),
                  b1 = replUml(b.name2);
                  return (a1 == b1) ? 0 : (a1 > b1) ? 1 : -1;
                });
                for (var j = 0; j < qs.length; j++) {
                  var NAME = qs[j].name2;
                  TWX.QIS.popupMenu.addItem(j, '<img src="' + ItemManager.getByBaseId(qs[j].img).image + '" height="20" width="20"><div style="padding-right:20px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + NAME + '</div>', NAME);
                }
              }
              TWX.QIS.popupMenu.show(e);
            },
            findSet: function (id) {
              var invItems = [],
              kItems = [],
              seti = TWX.QIS.sets[id];
              if (seti.name == 'NAMED') {
                for (var biu in Bag.items_by_id) {
                  biu = Bag.items_by_id[biu];
                  if (biu.obj.named)
                    invItems.push(biu);
                }
              } else if (seti.name == 'recipes')
                invItems = Bag.getItemsByItemIds(Bag.items_by_type.recipe);
              else {
                for (var biy of Bag.items_by_type.yield) {
                  biy = Bag.getItemByItemId(biy);
                  var obj = biy.obj,
                  condition = 0;
                  if (obj.usebonus) {
                    if (seti.bons) {
                      for (var oub of obj.usebonus) {
                        var desc = TWX.QIS.buffDesc(oub);
                        if (!desc)
                          continue;
                        var qud = TWX.QIS.useboni[desc];
                        if (seti.name == 'special' && !qud && !desc.includes(TWX.QIS.useboni.joball))
                          condition = 1;
                        else if (seti.bons.includes('-' + qud)) {
                          condition = 0;
                          break;
                        } else if (seti.bons.includes(qud) || seti.name == 'work' && desc.includes(TWX.QIS.useboni.joball))
                          condition = 1;
                        if (['bag', 'collection'].includes(qud))
                          break;
                      }
                    } else if (seti.name == 'questitems')
                      condition = 1;
                  }
                  if (seti.name == 'products' && !obj.usebonus || seti.name == 'questitems' && !condition)
                    condition = obj.spec_type == 'mapdrop';
                  if (seti.name == 'equipment' || seti.name == 'questitems' && !condition)
                    condition = (obj.set || JSON.stringify(obj.bonus) != emptyBoni);
                  if (seti.name == 'craftitems' || seti.name == 'questitems' && !condition)
                    condition = obj.spec_type == 'crafting';
                  if (seti.name == 'questitems') {
                    if (!condition)
                      invItems.push(biy);
                  } else if (condition)
                    invItems.push(biy);
                }
              }
              if (seti.itemsk) {
                for (var ig of seti.itemsk)
                  kItems.push(ig * 1000);
                invItems = invItems.concat(Bag.getItemsByItemIds(kItems));
              }
              if (invItems.length > 0) {
                if (!wman.getById(Inventory.uid))
                  Inventory.open();
                Wear.open();
                if (seti.name == 'products')
                  invItems.sort((a, b) => a.count - b.count);
                else if (seti.name == 'recipes') {
                  invItems.sort((a, b) => a.obj.min_level - b.obj.min_level);
                  invItems.sort((a, b) => a.obj.profession == b.obj.profession ? 0 : a.obj.profession > b.obj.profession ? 1 : -1);
                } else if (seti.itemsk)
                  invItems.sort((a, b) => a.obj.item_id - b.obj.item_id);
                Inventory.showSearchResult(invItems);
              } else
                new UserMessage(TWXlang.QIS.nothingFound, 'hint').show();
            },
          };
          var descsL = {
            ammobelt: [2741, {
                'dmgfb': 0,
                'defense': 1,
                'offense': 2
              }
            ],
            smokedfish: [53503, {
                'joball': 1,
                'dollar': 2 /*'luck': 0*/
              }
            ],
            beanstew: [53504, {
                'luck': 0,
                'drop': 1,
                'speed': 2
              }
            ],
            leaderbag: [52502, {
                'shortway': 3 /*'defense': 0,'offense': 1*/
              }
            ],
            stagecoach: [51582, {
                'regen': 0 /*'drop': 1*/
              }
            ],
            beansoup: [50113, {
                'lp': 0,
                'energy': 1,
                'duelmoti': 2,
                'workmoti': 3,
                'experience': 4,
                'duration': 5
              }
            ],
            wisdompotion: [2196, {
                'exp': 0
              }
            ],
            levelUp: [53842, {
                'levelUp': 0
              }
            ],
            tax: [2201, {
                'money': 0
              }
            ],
            dollar: [2559, {
                'money': 0
              }
            ],
            steak: [53508, {
                'dmgduel': 0
              }
            ],
            testament: [50136, {
                'dmgduel': 1, //(per level)
                'lpduelS': 2,
                'uses': 3 /*'duelmoti':0*/
              }
            ],
            longtimer: [53598, {
                'premiumCh': 0,
                'premiumEP': 2,
                'premiumAu': 4,
                'premiumIn': 6,
                'premiumSp': 8
              }
            ],
            insurance: [2472, {
                'premiumSf': 0,
              }
            ],
            commonbag: [1975, {
                'bag': 0
              }
            ],
            energybox: [50301, {
                'box': 0
              }
            ],
            liquor: [1868, {
                'collection': 0
              }
            ],
            bonds: [2136, {
                'bonds': 0
              }
            ],
            hearts: [2561, {
                'events': 0
              }
            ],
            eggs: [2590, {
                'events': 0
              }
            ],
            fireworks: [2619, {
                'events': 0
              }
            ],
            pretzel: [371, {
                'events': 0
              }
            ],
            cempasuchil: [2675, {
                'events': 0
              }
            ],
            avatar: [50086, {
                'avatar': 0
              }
            ],
          },
          getBuff = function (itm, num) {
            return TWX.QIS.buffDesc(ItemManager.getByBaseId(itm).usebonus[num]);
          },
          misSpecs = {
            mapdrop: [1975],
            crafting: [52027, 52028, 52029, 52030, 52497, 52500, 52501, 52502, 52503, 52504, 52505, 52506, 52518, 52868, 52869, 52870, 52871, 53938, 53939, 53940, 53941],
            none: [738],
            jobdrop: [2000, 2009],
            named: [10, 14, 18, 237, 314, 322, 530, 541, 551, 571, 810, 42035, 42039, 42040, 42044, 42052, 42056, 42060, 42068, 42076, 42085, 42089, 42093, 42101, 42109, 42117, 42125, 42133, 42141, 42149, 42230, 53235, 53617, 53674, 53731, 41047, 41056, 41059, 41068, 41070, 41079, 41080, 41089, 41104, 41105, 41113, 41128, 41137, 41146, 41155, 41164, 41173, 41230, 53178, 53653, 53758, 53808, 399, 40076, 40079, 40080, 40090, 40091, 40099, 40107, 40111, 40115, 40123, 40127, 40135, 40143, 40151, 40159, 40167, 40175, 40183, 40235, 53204, 53626, 53683, 53740, 10227, 10235, 10243, 10251, 10259, 10330, 53213, 53635, 53701, 53767, 11087, 11101, 11215, 11223, 11231, 11239, 11247, 11255, 11263, 11271, 53187, 53644, 53692, 53749, 43011, 43015, 43023, 43027, 43031, 43039, 43047, 43055, 43063, 43071, 43075, 43083, 43087, 43095, 43103, 43111, 43119, 43127, 43135, 43143, 43230, 51069, 53222, 53710, 53776, 53817, 51, 56, 857, 862, 909, 913, 917, 921, 925, 45001, 45005, 45009, 45013, 45017, 53226, 53230, 53661, 53714, 53718, 53780, 53784, 134, 135, 139, 195, 199, 44003, 44007, 44011, 44015, 44019, 53234, 53657, 53722, 53788, 608]
          };
          var intvQIS = setInterval(function () {
            if (ItemManager.get(0)) {
              clearInterval(intvQIS);
              for (var deL in descsL) {
                deL = descsL[deL];
                for (var boDe in deL[1]) {
                  var boDev = deL[1][boDe];
                  TWX.QIS.useboni[getBuff(deL[0], boDev)] = boDe;
                }
              }
              TWX.QIS.useboni.joball = getBuff(descsL.smokedfish[0], 1);
              for (var kn in CharacterSkills.keyNames) {
                TWX.QIS.useboni[CharacterSkills.keyNames[kn].toLowerCase()] = kn;
                skillsL.push(kn);
              }
              for (var msp in misSpecs)
                for (var imsp of misSpecs[msp]) {
                  if (msp == 'named')
                    for (var h = 0; h <= 5; h++)
                      ItemManager.get(imsp * 1000 + h).named = true;
                  else
                    ItemManager.get(imsp * 1000).spec_type = msp;
                }
            }
          }, 500);
          new TWX.QIS.MenuButton('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QoTBiYArTu6FwAADftJREFUWMMl1tmz3mdBwPHv8zy/fXm3s+ecLE3aLG0a0sWQ2jKlRaotSFspm7JUOoIMoxfi6IXjyI0jN3ojDDoOiozgKFzIoBSxA21ppaG1LU1CkyY5Jyc9+3nPu/7e9/2tz+MF/8N3PvMVf/7Jd5jNjTat2Tu49PY1zHBE7Efk3piwivFrKZNS0IiaDLOMbr+HX5UMbE0TC0pDPWyw0xuxut2hnadgKaajGtUkY6Hhc+pEi82NlOn5BVbe3iAfj6g1WiSJJmpqLB906tGIA8ZjTdLro52UshBoryIqLJwgZK/dZ7s3ZG9cIF1JpFwsUzFTcxF/8cQd5thtd/AnX/o6m5VGlIAlKbVBGRtjbLRIsUxFhcRIg6MVuZC4JiBXPSQKoyu0kfiWR1FO2FeDP/3jp9h59XmUF3Dw5nt4/RcX2MkSjICqzHFFDAxIUwvb9am8hDKTWEZQWhlu1kR7FVQJwki0llRU2LaNEjkNN+bOk7ex8uqLqCMLtS/+4H9eZrmb4UUOYeDjC0kQGBpugOdMaNZdahhCz2I6dgktie0J/KDEd2zqUYAQFZawURIsDKPUUOY5jz14kpcvrPK9Z88xkjnKtzCuwDEaR1lkIseyNTXHIa9GxErSqnkYAZ4E6Wp8LwQDRTZBCg+MTZ5VpGnJ7nbCe371MBIE7dGAylF4BkJZYBmNU4FQGcpIhNHowMVyAkxlQCosNI4l8E2JzEZUhSY0HsiKWhNqLZtXLl7g0thBNVsk0md+qk7W7VFsj8iSlEk2phhmKK3Yau9ha49eb8jb631GewU7/Q79vTH5sKC3vctkXNKIHSQJJxo2TTvjyuY6V7ImljN/hMu9qyxNhQzHfea8GBMrkuEA2xGkRU7dCUiSCUrlYLlYjg1jg6DC2DYUJYdmY5Q0GBHj5wJNxXpbsLm5zqFDh3julRXSSY4bBmSjMcNhRZ63QTmE4xThSDoDg+/HoGFmtkWWZqTjEd2kj3F8lJJcX1vHtm0uTyqklsy26txYvoI1teRhWxrbzpgNQzoTTTUcUWs0GQwGuEHEBBs8SV6VuK7AkprpxXmMKVhZvUHoR2hhs9FuM11rMRVltIcps7OzeHsbdCcZnhagBbZUaMtldraO0QJMRX+Q4DgOtThkd2cX18DapW2EkQT1mIYfMkxHZFlGM46wLAdZGexcManeYjY+gjW4eJlpx2Y+CijKMfPhPK4STMqc/TMxWZpitKAWzTHJU8oqQ5QWppgQ1z3cmw4h8hzplHiySSAllRzSasAoLXngnad45uUrSCtj0tlEG0nsB3RurFGWBWWZE4VNkn6H2cZJWlHMJBmyuDgPlaG1sER7ZwvfCUiTCdlwgoo0kZchexkTE3B0/51YgSmIlUKVOc2gREYuZaFJB30ix4ayy77Dd9Hr9jhx8jRL+5dYW7lK9/qb5EUfY9eYCxRJmWHVQ2ZkhrJn2O2M0F6DnWyDRjMkSRXhQkit1sDxXHRZ0eu0aUwtYguboDnF+uoyp+6+h+mZfeysXWHjxjL5cAfyEfOLB9lMV2nONxmnJbbIqTU8KG12t7aR8dwchSyIQw/hxsg0Ya7pc+LgEi4ZtWaLrLfL0ZsP8vDD7+f880/z+Ec+jtagcLGlS6U0eqKRxgZHMh4WNFoN5uIBna3D9EwToSd4VUIkUqrhDna2x0zNwxMa24bJ1hUWZ6c4ecdZfv6//83Zh56gzDLyQZfAViSdbeLQxybDFTmRBVbLA9tQoLGqoIWxbYRMCdw66XjC6tXzRNNNfD9ACEGR9lm+9CrbW9cI6j5lMaaoUgLPRecdHGeWYNqhm45xvSnqQcowTRkNUrqjn9NaPIAdVsTzR0iLjBRFOxkTuyUtP6Y/nDAaCyJGfOebXyN0XbK8Iik1yjioSuMAeZ7iuR6ZNqRFDSlsdNaGPEdWOiWyFaFjY3CIp2NaczVCJ8BgoWyFHVo4ro0uBY9/6g95+ttfZVR0cAIDBhp1TaPmU+UV9bikFtr0Ol06vQEHDt1Of3ePfCwQSRunGBGTUlMFShu6uz30eISrC0SWIdOE93309/nhN/6WWE/wTIZlIBmMMHnBZDDEKsYInTFOurS3t3GEQt17vPHFV99sU1MWylOUuqQqBdpYjNMJRkiKQnPy7gf5yO99gfmlQxw8epqiKLi+eh2DoTU9TW84wPVDZmemyMocx6/j+SGnbznFTmfCC68s03IlpVYkmWZra8BwUJDlkExKhknBrfe8h0ef+iNas0ss3vIOVq6vs725w14nQUuXXmfEJKvYafdAObi+YengYY7fegtWM4wZjDN2xoKy02Xf4hyVMRTFiEZzlrvvu5/3PPIE2sDe1gZvnX+dpcOH+dCTX+Dh33qKZ773bVYvX6A7+iXL19f71KNfvtlOdwNHdjnWcNBSsbtXUe0OKYXGcx1CN0ZbLr/ywAO897EPIqVid2uDS6+9wfzBg3zs83/GaDDg+ae/y9rKdcZhn16nTVFp9joVtajB5iCjMymwxp0hRSWxLQ8TuKxvDzh95zu5/+EPcPy22xkOevzXt/+d18+/xs6NZXSZU2/EzC4scfrMu3j3Ix+i9tuf4covzvPSc8+wevkiw/Uu7f4my9sdHlw9yvrGMsZUZE6A7/uUacZ9D/06x+64k6MnT9Jr73Lu+Z9w7oUXaG9tkhUZQlfcftcZDt5ylPsf/TB+GPDGy+d47aWX2FhdpdPpsN41XLh6mamFGcST9x4w3zy3xpljC5w5825+47EPMj07x9sry3z9K19mc2sNoSEZJFiORFmSqspBC6JajDGS47ef4olP/i4Li/vZ293hG1/+G1575Rw7yYSHb7+V0B/wDz9Z5/4z+zl1+j7e+8hjtKZnePv6NX789H9wffkK7b094shDGIHj+pRVSTIaY9uKwPO55fgpPvDhTzK3b4mtjXW+952vc/Hcz7h0rcOvPXgb6tH33f7FH//fKo8/8pt84jOfY293h7//67/iP//1n/EjDykMji2YX5rHthWeY9GoRcSNBp5rE0U23d1dnnv6u2xurHP3Pffy+MefRCjFCz99kfe/7xgLJ2/mB89d4oMPP87vPPV5Ntc2+dbffZVv/dPXcK0QXSpmG3VsBJblY0sPo11mp+epByGy0vS6Pc49+ywr11Y4e9/9PPL4R8lHAy5evMDZu+7CCsIG026N+ZlpLAWtZsyTn/0cSIOUivEwYXphHlMZ8jwHNLbtIZVCCKjyFNuLkBKKosBSAozhwOIcC0HMgTmXt9cmzDQcjh/fhyUrDhyY4xOf/TSf+uynUcoiyyY0GlMUeY6UEm0qLNtFCIGuKoo8I4hqGGOoqhLXFkgBtxy9mUhJFuaaWKsXVzm8z+P8z76P6K0xsWr4oUUIDLWNKAYopw7KEApNv1REnqTEJStSKHImwqXpC2wnpKoyWnWfl376LMlgwOvLuww3JhzeP8ObL/6Y4fYORkOt0cQA2hgG/QGW62OqEtfzSDJNHLhoXWF0hWVZFNg4SmBZCiUlvu9y7eUfkltDLiy/hhXUbDbaA1JpuHHt+7SrkNmWR5UkdEpFy9UkKbhRiFdO6FYWdatA2w18XyLTEQPjMNfw6XQS6rWAxWlFXrm0pmJ6/YKbDh3ma8/8CDkwyDfWsLyAyHNIiwqlFIKSqszR0iL2XKQjybKKqiiotMZ1XGxXURQaYUAbTRxHHJyNmGtMMWz3sY7MN3AKw0yzydKhKdyNMTNzNUQrJBpWTLUcylJQGUXoaBqJpl53sKwYKEh6gsC4zM1PsTA/w2TUZzjcY3bhZk6eOMW01Wc6NtwUKo7cFmLLiNJk+I5LVmRIqQABxgEqhBRICWUlsJRPWVa4jk1VGSqtf5m0kdhOhdeAs7ceI4ok1nrmEdQjpoKYoB7S6t2gqQT9wjAV2sS2g2uV9EcJoRXjRaAoCZwJvcGEZuhSZBPUuI9lKTrdPlvtPqPJDqN0wqGlKVa6NlagiMKIQTejORVSFiVaFyglEMbguA4IxXCYIKXEdVzGyRCjBI5js7m1i3J8pNBEoc/Vt66zOd3EzQYsLTaxfvTiZa7sdFgbjJhrxaTdPmEtYjROcR2b4SBhaqpFb5DQiMfs7G4TRDGWkKAkCkGv3ycIA3zPQ4qK/TP7eHPlKlprDDsos8mV9pjshRWGgwTLslBKghSURcEkzXGUhefZOGGIrAzjfILQBikUveFbOI5Llmv80KVKMx46eYLO1hbnt9vsjA3Wo+86RL+7y/peCjqj2bLRpDRigRAlketRypTplkLrIQsLMVIYqAq0MhgtWAhCMBXaTJiZmsNYPpO0ZPGAz01Ls9x/4jS5eY3n37xB7EegK0pdkGclldYoaeH7DsnQMN7dxXUs8rzEIBFCYIzE1yVlaRjnI6SUxNMzvHL1DY7ddDOOZxD/9gf3mF1T50v/8kPaY5vDUwFDnVPzPIpBgfZhMhGEVolUkGcGjUQrBzvP0AL8WkBSTNBVRnugqRWaQ4dDHnjobpKLr3L2zAm0d4qv/OM3uZEZ6o6H6w/wdIjOM2yvSZHusZkZFmOP4ajARHWivAQnZ9DW2FMxjbrNymqbum24vJdx6uwiT56aY319FfGXHztjalJyeXubzaRkcX6OzjBjszsiGY0gH9GcmcYXmhoQ2eC4ilrgEjQVngOj1OC35hi3O7QHQ7TZ4733HcGperx+vUmRWNQtuN4ruLG7xb59i4xyw/pOh35Rkg06tDwfuxnRSgRzdYuRmrAQ+lihotZQCMAA0lqi117F3ulz0701qmiK1Rtr/D8jNuvkHjCe6wAAAABJRU5ErkJggg==', 'Quick items search', TWX.QIS.popup);
        },
      };
      TWX.MarketBestBids = {
        init: function () {
          TWX.MBB = {
            items: {},
          };
          var setVal9 = setInterval(function () {
            if (ItemManager.get(0)) {
              clearInterval(setVal9);
              var allItems = ItemManager.getAll();
              for (var i in allItems) {
                var item = allItems[i];
                if (!item.auctionable)
                  continue;
                var name = item.name;
                if (item.type == 'recipe') {
                  var n = name.split(':');
                  if (n.length == 2)
                    name = n[1];
                }
                TWX.MBB.items[name] = item.price;
              }
            }
          }, 1000);
          MarketWindow.open_twx = MarketWindow.open_twx || MarketWindow.open;
          MarketWindow.open = function () {
            MarketWindow.open_twx.apply(this, arguments);
            var mwl = new MutationObserver(mts => {
              mts.every(e => {
                var el = $(e.target);
                if (el.hasClass('tw2gui_scrollpane_clipper_contentpane')) {
                  el.children().each((ix, row) => {
                    var child = row.children,
                    name = child[1],
                    nameT = name.firstChild.getAttribute('title'),
                    qty = child[2].textContent,
                    purchase = child[3],
                    bid = child[4];
                    if ($('#mpb_recipe.accordion_opened').length) {
                      var n = nameT.split(':');
                      if (n.length == 2)
                        nameT = n[1];
                    }
                    var price_o = TWX.MBB.items[nameT];
                    if (purchase.textContent) {
                      var p = purchase.textContent.replace(/\$|\.|\,/g, ''),
                      price_p = p / qty;
                      if (price_p < price_o) {
                        purchase.style.color = 'green';
                        if (!bid.textContent)
                          name.style.color = 'green';
                      }
                      if ((price_p > price_o) && (price_p <= price_o * 2)) {
                        purchase.style.color = 'blue';
                        if (!bid.textContent)
                          name.style.color = 'blue';
                      }
                      if (price_p > price_o * 2) {
                        purchase.style.color = 'red';
                        if (!bid.textContent)
                          name.style.color = 'red';
                      }
                    }
                    if (bid.textContent) {
                      var b = bid.textContent.replace(/\$|\.|\,/g, ''),
                      price_b = b / qty;
                      if (price_b < price_o) {
                        bid.style.color = 'green';
                        name.style.color = 'green';
                      }
                      if ((price_b > price_o) && (price_b <= price_o * 2)) {
                        bid.style.color = 'blue';
                        name.style.color = 'blue';
                      }
                      if (price_b > price_o * 2) {
                        name.style.color = 'red';
                        bid.style.color = 'red';
                      }
                    }
                  });
                  return;
                }
              });
            });
            mwl.observe(document.querySelector('.marketplace .tw2gui_window_content_pane'), {
              subtree: true,
              childList: true,
            });
          };
        },
      };
      TWX.BattleStars = {
        init: function () {
          TWX.BS = {
            stars: [],
            attaquants: {},
            defenseurs: {},
            withMod: function (calc, val) {
              return function (row) {
                var wdth = Math.round((74) / (calc.header.length));
                $.each(calc.header, function (ind) {
                  $('.battle_cls' + ind, row).css('width', wdth + '%');
                });
                row.attr('title', val.townname + ' - ' + val.weaponname + ' (' + val.weaponmindmg + '-' + val.weaponmaxdmg + ')');
                return row;
              };
            },
            modifStarsRow: function (val) {
              return function (row) {
                $('.stat_til', row).attr('title', TWX.BS.getFormule(val.type).help).css({
                  'width': '90px',
                  'text-align': 'left'
                });
                $('.battle_nam', row).attr('title', val.obj.townname + ' - ' + val.obj.weaponname + ' (' + val.obj.weaponmindmg + '-' + val.obj.weaponmaxdmg + ')');
                $('.stat_dtl', row).attr('title', cellules.stat_dtl).css({
                  'width': '346px',
                  'text-align': 'left'
                });
                return row;
              };
            },
            initFormule: function () {
              try {
                this.formules = [];
                this.formules.push(new calcul('heros', TWXlang.BS.hero, TWXlang.BS.heroT, '(((val.takenhits + val.dodgecount) * 1000) / (val.starthp))', [TWXlang.BS.rate, TWXlang.BS.hitsTaken, TWXlang.BS.dodgedShots, TWXlang.BS.startHP], ['heros', 'takenhits', 'dodgecount', 'starthp'], 'val.starthp > 0', '0', '>', 0, false, false, true));
                /*this.formules.push(new calcul('roger', 'Roger Rabbit', 'val.takenhits + val.dodgecount', ['Tirs', 'Tirs reçus', 'Tir évité'], ['roger', 'takenhits', 'dodgecount'], ' val.takenhits + val.dodgecount > 0', '0', '>', 0, false, false, true));*/
                this.formules.push(new calcul('survivant', TWXlang.BS.survivor, TWXlang.BS.survivorT, 'val.finishedhp', [TWXlang.BS.endHP], ['finishedhp'], 'val.finishedhp > 0', '0', '<', 1, true, false, false));
                this.formules.push(new calcul('sniper', TWXlang.BS.sniper, TWXlang.BS.sniperT, '(val.hitcount / (val.hitcount + val.misscount))*100', [TWXlang.BS.rateP, TWXlang.BS.hitCount, TWXlang.BS.missedShots], ['sniper', 'hitcount', 'misscount'], '(val.hitcount + val.misscount) > 0', '0', '>', 0, false, false, true));
                this.formules.push(new calcul('matrix', TWXlang.BS.matrix, TWXlang.BS.matrixT, 'parseFloat((( val.dodgecount / (val.takenhits + val.dodgecount))*100))', [TWXlang.BS.rateP, TWXlang.BS.dodgedShots, TWXlang.BS.hitsTaken], ['matrix', 'dodgecount', 'takenhits'], '(val.takenhits + val.dodgecount) > 0 && val.dodgecount > 0', '0', '>', 0, false, false, true));
                this.formules.push(new calcul('headshot', TWXlang.BS.terminator, TWXlang.BS.terminatorT, '(val.ko_shots.length / val.hitcount)*100', [TWXlang.BS.rateP, TWXlang.BS.KOs, TWXlang.BS.hitCount], ['headshot', 'ko_shots.length', 'hitcount'], 'val.hitcount > 0', '0', '>', 0, false, false, true));
              } catch (e) {
                console.log('TWX', e);
              }
            },
            getFormule: function (type) {
              for (var s = 0; s < this.formules.length; s++) {
                calc = this.formules[s];
                if (type == calc.type)
                  return calc;
              }
              throw ('No formula for ' + type);
            },
            getAll: function (type) {
              $('#route', CemeteryWindow.DOM).text('details');
              var calc = this.getFormule(type);
              $('.info', CemeteryWindow.DOM).text('');
              $('.info', CemeteryWindow.DOM).append('<span>' + TWXlang.BS.ranking + ' ' + calc.libelle + '</span><span style="font-size:12px;"><br><i>' + calc.help + '</i></span>');
              this.stars = calc.sortArray(CemeteryWindow.currentStats);
              calc.getHeader();
              var shunt = 0;
              $.each(this.stars, function (ind, stat) {
                if (calc.shouldBePos && stat[type] <= 0)
                  shunt++;
                stat.ind = (ind + 1) - shunt;
                calc.getLigne(stat);
              });
            },
            getStatByPerso: function (name) {
              for (var s = 0; s < this.stars.length; s++) {
                val = this.stars[s];
                if (name == val.name)
                  return val;
              }
            },
            getLigne: function (stat, index) {
              if (!isDefined(stat))
                return '';
              var type = stat.type,
              nom = stat.name,
              val = stat.obj,
              calc = this.getFormule(type),
              css = 'tw_blue';
              if (val.battle_type == 'attacker')
                css = 'tw_red';
              cellules = {};
              cellules.stat_til = '<span onclick="javascript:TWX.BS.getAll(\'' + type + '\')" style="cursor:pointer;">' + calc.libelle + '</span>';
              cellules.battle_nam = nom;
              cellules.stat_dtl = calc.getShortLigne(val);
              this.table.buildRow('battlestat ' + css, cellules, this.modifStarsRow(stat));
            },
            openWindow: function () {
              var statWindow = wman.open('window_Stats', TWXlang.BS.statsTitle).setSize(700, 400);
              $('.window_Stats').css('left', '10px').css('top', '25px');
              var table_window = new west.gui.Table();
              table_window.appendTo($('<div class="window_inside"></div>').appendTo(statWindow.getContentPane())).addColumns(['cell_stat',
                  'cell_att',
                  'cell_def',
                  'cell_dif']).appendToCell('head', 'cell_stat', TWXlang.BS.designation).appendToCell('head', 'cell_att', TWXlang.BS.attack).appendToCell('head', 'cell_def', TWXlang.BS.defense).appendToCell('head', 'cell_dif', TWXlang.BS.difference).appendRow();
              var verif = '<form><textarea style=\'height:250px;width:650px;\'>[code]' + TWXlang.BS.statistics + '\t\t\t' + TWXlang.BS.attack + '\t\t' + TWXlang.BS.defense + '\t\t' + TWXlang.BS.difference + '\n--------------------------------------------------------------------------\n';
              $.each(this.results, function (ind, val) {
                try {
                  var cssStr = '',
                  dif = 0,
                  att = parseFloat(val.attack),
                  def = parseFloat(val.defend);
                  if (att > val.defend) {
                    cssStr = '#8A0000';
                    dif = (att - def).toFixed(2);
                  } else {
                    cssStr = '#00008A';
                    dif = (def - att).toFixed(2);
                  }
                  verif += val.titre + att + '\t\t' + def + '\t\t' + dif + '\n';
                  table_window.appendToCell( - 1, 'cell_stat', val.titre.trim()).appendToCell( - 1, 'cell_att', '<div>' + att + '</div>').appendToCell( - 1, 'cell_def', '<div>' + def + '</div>').appendToCell( - 1, 'cell_dif', '<div style="color:' + cssStr + ';">' + dif + '</div>').appendRow();
                } catch (e) {
                  console.log('TWX', val, e);
                }
              });
              verif += '[/code]</textarea></form>';
              var affButton = new west.gui.Button(TWXlang.BS.code, function () {
                var cur = $('.window_inside').html();
                if (cur.indexOf('[code]') > -1)
                  TWX.BS.openWindow();
                else {
                  $('.window_inside').html(verif);
                  affButton.setCaption(TWXlang.BS.goBack);
                }
              });
              $('<div class="window_footer"></div>').appendTo(statWindow.getContentPane()).append(affButton.getMainDiv());
            },
            createStarsTable: function () {
              $('.info', CemeteryWindow.DOM).text(TWXlang.BS.starsTitle);
              this.table = new west.gui.Table(false).setId('battle_stat').createEmptyMessage('BattleStars').addColumn('stat_til').addColumn('battle_nam').addColumn('stat_dtl').appendToThCell('head', 'stat_til', TWXlang.BS.title, TWXlang.BS.title).appendToThCell('head', 'battle_nam', TWXlang.BS.name, TWXlang.BS.name).appendToThCell('head', 'stat_dtl', TWXlang.BS.details, TWXlang.BS.details);
              this.table.getCell('head', 'stat_til').css({
                'width': '90px',
                'text-align': 'left'
              });
              this.table.getCell('head', 'stat_dtl').css({
                'width': '346px',
                'text-align': 'left'
              });
              $('#route', CemeteryWindow.DOM).remove();
              $('.cemetery-content', CemeteryWindow.DOM).append('<div id="route" style="display:none">global</div>').append(this.table.getMainDiv());
              $('.footer', CemeteryWindow.DOM).empty();
              var bo = this.original;
              var titleAtt = TWXlang.BS.attack + TWXlang.BS.start +
                bo.startAttPV +
                TWXlang.BS.end +
                bo.finishedAttPV +
                TWXlang.BS.damageTaken +
                (bo.startAttPV - bo.finishedAttPV) + TWXlang.BS.avgHP + bo.moyatt.toFixed(2);
              var titleDef = TWXlang.BS.defense + TWXlang.BS.start +
                bo.startDefPV +
                TWXlang.BS.end +
                bo.finishedDefPV +
                TWXlang.BS.damageTaken +
                (bo.startDefPV - bo.finishedDefPV) + TWXlang.BS.avgHP + bo.moydef.toFixed(2);
              $('.footer', CemeteryWindow.DOM).append('<span title="' + titleAtt + '" class="tw_red text_bold">' + titleAtt + '</span>');
              $('.footer', CemeteryWindow.DOM).append('<br><span title="' + titleDef + '" class="tw_blue text_bold">' + titleDef + '</span>');
              $('.footer', CemeteryWindow.DOM).addClass('zone');
              $('.cemetery-content', CemeteryWindow.DOM).addClass('zone');
            },
            calculStars: function () {
              this.results = [];
              this.attaquants = {};
              this.defenseurs = {};
              var attaquer = {},
              defenseurs = {},
              bo = this.original = {
                countAtt: 0,
                countDef: 0,
                startDefPV: 0,
                finishedDefPV: 0,
                startAttPV: 0,
                finishedAttPV: 0,
                degAtt: 0,
                degDef: 0,
                moyatt: 0,
                moydef: 0,
                att: {
                  dodgecount: 0,
                  hitcount: 0,
                  maxdamage: 0,
                  avg_damage: 0,
                  misscount: 0,
                  takenhits: 0,
                  weaponmaxdmg: 0,
                  weaponmindmg: 0,
                },
                def: {
                  dodgecount: 0,
                  hitcount: 0,
                  maxdamage: 0,
                  avg_damage: 0,
                  misscount: 0,
                  takenhits: 0,
                  weaponmaxdmg: 0,
                  weaponmindmg: 0,
                },
              };
              $.each(CemeteryWindow.currentStats, function (ind, val) {
                if (val.battle_type == 'attacker') {
                  bo.startAttPV += val.starthp;
                  bo.finishedAttPV += val.finishedhp;
                  bo.degAtt += val.totalcauseddamage;
                  bo.att.dodgecount += val.dodgecount;
                  bo.att.hitcount += val.hitcount;
                  bo.att.avg_damage += val.avg_damage;
                  bo.att.maxdamage += val.maxdamage;
                  bo.att.misscount += val.misscount;
                  bo.att.takenhits += val.takenhits;
                  bo.att.weaponmaxdmg += val.weaponmaxdmg;
                  bo.att.weaponmindmg += val.weaponmindmg;
                  bo.countAtt++;
                } else {
                  bo.startDefPV += val.starthp;
                  bo.finishedDefPV += val.finishedhp;
                  bo.degDef += val.totalcauseddamage;
                  bo.countDef++;
                  bo.def.dodgecount += val.dodgecount;
                  bo.def.hitcount += val.hitcount;
                  bo.def.avg_damage += val.avg_damage;
                  bo.def.maxdamage += val.maxdamage;
                  bo.def.misscount += val.misscount;
                  bo.def.takenhits += val.takenhits;
                  bo.def.weaponmaxdmg += val.weaponmaxdmg;
                  bo.def.weaponmindmg += val.weaponmindmg;
                }
                $.each(TWX.BS.formules, function (indStac, calc) {
                  val[calc.type] = calc.getTaux(val);
                  if (!calc.shouldBePos || (calc.shouldBePos && val[calc.type] > 0)) {
                    if (val.battle_type == 'attacker') {
                      if (!isDefined(attaquer[calc.type]))
                        attaquer[calc.type] = calc.limite;
                      if (eval(val[calc.type] + calc.compare + attaquer[calc.type])) {
                        attaquer[calc.type] = val[calc.type];
                        TWX.BS.attaquants[calc.type] = {
                          'type': calc.type,
                          'name': val.name,
                          'obj': val
                        };
                      }
                    } else {
                      if (!isDefined(defenseurs[calc.type]))
                        defenseurs[calc.type] = calc.limite;
                      if (eval(val[calc.type] + calc.compare + defenseurs[calc.type])) {
                        defenseurs[calc.type] = val[calc.type];
                        TWX.BS.defenseurs[calc.type] = {
                          'type': calc.type,
                          'name': val.name,
                          'obj': val
                        };
                      }
                    }
                  }
                });
              });
              bo.moyatt = bo.startAttPV / bo.countAtt;
              bo.moydef = bo.startDefPV / bo.countDef;
              bo.degAtt = bo.degAtt / bo.countAtt;
              bo.degDef = bo.degDef / bo.countDef;
              this.results.push({
                titre: TWXlang.BS.total + TWXlang.BS.startHP + '\t\t\t',
                attack: bo.startAttPV,
                defend: bo.startDefPV
              });
              this.results.push({
                titre: TWXlang.BS.total + TWXlang.BS.endHP + '\t\t\t',
                attack: bo.finishedAttPV,
                defend: bo.finishedDefPV
              });
              this.results.push({
                titre: TWXlang.BS.HP + ' ' + TWXlang.BS.difference + '\t\t\t',
                attack: (bo.startAttPV - bo.finishedAttPV),
                defend: (bo.startDefPV - bo.finishedDefPV)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.HP + '\t\t\t',
                attack: bo.moyatt.toFixed(2),
                defend: bo.moydef.toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.damage + '\t\t\t',
                attack: bo.degAtt.toFixed(2),
                defend: bo.degDef.toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.dodgedShots + '\t\t\t',
                attack: (bo.att.dodgecount / bo.countAtt).toFixed(2),
                defend: (bo.def.dodgecount / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.hitCount + '\t\t\t',
                attack: (bo.att.hitcount / bo.countAtt).toFixed(2),
                defend: (bo.def.hitcount / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.missedShots + '\t\t\t',
                attack: (bo.att.misscount / bo.countAtt).toFixed(2),
                defend: (bo.def.misscount / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.average + TWXlang.BS.hitsTaken + '\t\t\t',
                attack: (bo.att.takenhits / bo.countAtt).toFixed(2),
                defend: (bo.def.takenhits / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.avgDamage + '\t\t\t',
                attack: (bo.att.avg_damage / bo.countAtt).toFixed(2),
                defend: (bo.def.avg_damage / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.avgDamageMax + '\t\t\t',
                attack: (bo.att.maxdamage / bo.countAtt).toFixed(2),
                defend: (bo.def.maxdamage / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.avgWeaponDamage + '\t\t\t',
                attack: ((bo.att.weaponmaxdmg + bo.att.weaponmindmg) / 2 / bo.countAtt).toFixed(2),
                defend: ((bo.def.weaponmaxdmg + bo.def.weaponmindmg) / 2 / bo.countDef).toFixed(2)
              });
              this.results.push({
                titre: TWXlang.BS.avgWeaponDamageMax + '\t\t\t',
                attack: (bo.att.weaponmaxdmg / bo.countAtt).toFixed(2),
                defend: (bo.def.weaponmaxdmg / bo.countDef).toFixed(2)
              });
            },
            inject: function () {
              this.initFormule();
              CemeteryWindow.showStatInitData_twx = CemeteryWindow.showStatInitData;
              CemeteryWindow.showStatInitData = function () {
                CemeteryWindow.showStatInitData_twx.apply(this, arguments);
                $('#BSButton').remove();
                $(this.window.getMainDiv()).find('div.tw2gui_window_content_pane').append('<span title="Battle Stars" onclick="TWX.BS.vasy()" id="BSButton"><img style="position:absolute;top:15px;right:11px;cursor:pointer;" src="images/icons/achv_points.png">');
              };
            },
            vasy: function () {
              var route = $('#route', CemeteryWindow.DOM);
              if (route.length === 0 || (route.text() != 'global')) {
                if (route.length === 0) {
                  this.original = {
                    saveTitle: $('.info', CemeteryWindow.DOM).text(),
                    saveFoot: $('.footer', CemeteryWindow.DOM).html(),
                  };
                  $('#battle_stat', CemeteryWindow.DOM).attr('id', 'battle_statOri');
                  $('#battle_statOri', CemeteryWindow.DOM).css('display', 'none');
                  this.calculStars();
                  this.openWindow();
                } else {
                  if (route.text() == 'original') {
                    $('#battle_stat', CemeteryWindow.DOM).attr('id', 'battle_statOri');
                    $('#battle_statOri', CemeteryWindow.DOM).css('display', 'none');
                    this.openWindow();
                  } else {
                    $('#battle_stat', CemeteryWindow.DOM).attr('id', 'battle_statDetail');
                    $('#battle_statDetail', CemeteryWindow.DOM).remove();
                  }
                }
                this.createStarsTable();
                $.each(this.defenseurs, function (ind, star) {
                  TWX.BS.getLigne(star, ind);
                });
                $.each(this.attaquants, function (ind, star) {
                  TWX.BS.getLigne(star, ind);
                });
              } else {
                route.text('original');
                $('.info', CemeteryWindow.DOM).text(this.original.saveTitle);
                $('.footer', CemeteryWindow.DOM).html(this.original.saveFoot);
                $('#battle_stat', CemeteryWindow.DOM).attr('id', 'battle_statStats');
                $('#battle_statStats', CemeteryWindow.DOM).remove();
                $('#battle_statOri', CemeteryWindow.DOM).attr('id', 'battle_stat');
                $('#battle_stat', CemeteryWindow.DOM).css('display', 'block');
              }
            },
          };
          function calcul(pType, pLibelle, pTexte, pForm, pHead, pVariables, pConstr, pTError, pCompare, pSort, pPos, pNull, pFloat) {
            this.globalHeader = ['#', TWXlang.BS.name];
            this.help = pTexte;
            this.type = pType;
            this.formule = pForm;
            this.header = pHead;
            this.libelle = pLibelle;
            this.variables = pVariables;
            this.sort = pSort;
            this.compare = pCompare;
            this.shouldBePos = pPos;
            this.shouldBeNull = pNull;
            this.contrainte = pConstr;
            this.isFloating = pFloat;
            this.testError = pTError;
            if (this.compare == '>')
              this.limite = '0';
            else
              this.limite = '9999999999';
          }
          calcul.prototype.init = function () {
            this.type = '';
            this.help = '';
            this.formule = '';
            this.header = '';
            this.libelle = '';
            this.variables = {};
            this.sort = 1;
            this.shouldBePos = false;
            this.shouldBeNull = true;
            this.contrainte = '';
          };
          calcul.prototype.getLigne = function (val) {
            var cellules = {};
            var css = 'tw_blue';
            if (val.battle_type == 'attacker')
              css = 'tw_red';
            if ((!this.shouldBePos) || (this.shouldBePos && val[this.type] > 0)) {
              cellules.battle_num = val.ind;
              cellules.battle_nam = val.name;
              $.each(this.variables, function (ind, td) {
                var det;
                if (td.indexOf('.') > 0) {
                  arTd = td.split('.');
                  var cible = val;
                  $.each(arTd, function (ind, value) {
                    cible = cible[value];
                  });
                  det = cible;
                } else
                  det = val[td];
                cellules['battle_cls' + ind] = det;
              });
              TWX.BS.tableClassement.buildRow('battlestat ' + css, cellules, TWX.BS.withMod(this, val));
            }
          };
          calcul.prototype.getShortLigne = function (val) {
            try {
              var header = this.header,
              lig = '';
              $.each(this.variables, function (ind, td) {
                var det;
                if (td.indexOf('.') > 0) {
                  arTd = td.split('.');
                  var cible = val;
                  $.each(arTd, function (ind, value) {
                    cible = cible[value];
                  });
                  det = cible; //val[arTd[0]][arTd[1]]
                } else {
                  det = val[td];
                }
                lig += header[ind] + ': ' + det + '|';
              });
              return lig;
            } catch (execption) {
              console.log('TWX', execption);
              return '';
            }
          };
          calcul.prototype.getHeader = function () {
            var header = this.globalHeader.concat(this.header),
            wdth = Math.round(74 / this.header.length);
            $('#battle_stat', CemeteryWindow.DOM).attr('id', 'battle_statStar');
            $('#battle_statStar', CemeteryWindow.DOM).remove();
            $('#battle_stat', CemeteryWindow.DOM).text('details');
            TWX.BS.tableClassement = new west.gui.Table(false).setId('battle_stat').createEmptyMessage('Battle Stars').addColumn('battle_num').addColumn('battle_nam').appendToThCell('head', 'battle_num', header[0], header[0]).appendToThCell('head', 'battle_nam', header[1], header[1]);
            $.each(this.header, function (ind, th) {
              TWX.BS.tableClassement.addColumn('battle_cls' + ind).appendToThCell('head', 'battle_cls' + ind, th, th);
              TWX.BS.tableClassement.getCell('head', 'battle_cls' + ind).css('width', wdth + '%');
            });
            $('div.cemetery-content', CemeteryWindow.DOM).append(TWX.BS.tableClassement.getMainDiv());
          };
          calcul.prototype.sortArray = function (arr) {
            var type = this.type;
            var sortable = this.sort;
            arr.sort(function (a, b) {
              var x = a[type];
              var y = b[type];
              if (sortable)
                return x - y;
              return y - x;
            });
            return arr;
          };
          calcul.prototype.getTaux = function (val) {
            if (eval(this.contrainte))
              taux = eval(this.formule);
            else
              taux = eval(this.testError);
            if (this.isFloating)
              taux = parseFloat(taux.toFixed(2));
            return taux; //.toFixed(2);
          };
          TWX.addStyle('.window_Stats .window_inside { width:630px;height:380 position:absolute;left:5px;top:2px;-webkit-user-select:text!important;-khtml-user-select:text!important;-moz-user-select:text!important; -ms-user-select:text!important;user-select:text!important;height:270px; }' +
            '.window_Stats .window_footer { text-align:right;} ' +
            '.window_Stats .cell_stat { width:200px;font-weight:800;text-shadow:1px 0 0 white; } ' +
            '.window_Stats .cell_att, .window_Stats .cell_def, .window_Stats .cell_dif { width:120px;text-align:center; } ' +
            '.window_Stats .tbody .cell_stat { padding-left:6px;text-align:left;width:200px;font-weight:800;text-shadow:1px 0 0 white; } .window_Stats .tbody .row { left:0px; }' +
            '.window_Stats .tbody .cell_att { text-align:center;color:#8A0000;width:120px;font-weight:800;text-shadow:1px 0 0 white; }' +
            '.window_Stats .tbody .cell_def { text-align:center;color:#00008A;width:120px;font-weight:800;text-shadow:1px 0 0 white; }' +
            '.window_Stats .tbody .cell_dif { text-align:center;width:120px;font-weight:800;text-shadow:1px 0 0 white; }' +
            '.zone {-webkit-user-select:text!important;-khtml-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important;height:270px; }');
          setTimeout(TWX.BS.inject.bind(TWX.BS), 5e3);
        },
      };
      TWX.Collections = {
        init: function () {
          TWX.Col = {};
        },
      };
      TWX.KickoMatic = {
        init: function () {
          TWX.KoM = {
            loading: false,
            inProgress: {},
            fortsCapacity: null,
            weapons: [],
            //coords[0-6]:attack,coords[7-19]:defense[small,medium,big]
            coords: [[0, 1, 2, 34, 35, 36, 68, 69, 70, 102, 103, 104, 136, 137, 138, 170, 171, 172, 204, 205, 206, 238, 239, 240, 272, 273, 274, 306, 307, 308, 340, 341, 342], [374, 375, 376, 408, 409, 410, 442, 443, 444, 476, 477, 478, 510, 511, 512, 544, 545, 546, 578, 579, 580, 612, 613, 614, 646, 647, 648, 680, 681, 682], [714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792], [725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803], [736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815], [405, 406, 407, 439, 440, 441, 473, 474, 475, 507, 508, 509, 541, 542, 543, 575, 576, 577, 609, 610, 611, 643, 644, 645, 677, 678, 679, 711, 712, 713], [31, 32, 33, 65, 66, 67, 99, 100, 101, 133, 134, 135, 167, 168, 169, 201, 202, 203, 235, 236, 237, 269, 270, 271, 303, 304, 305, 337, 338, 339, 371, 372, 373], [[178, 179, 180, 212, 213, 214, 246, 247, 248], [143, 144, 145, 177, 178, 179, 211, 212, 213], [108, 109, 110, 142, 143, 144, 176, 177, 178]], [[193, 194, 195, 227, 228, 229, 261, 262, 263], [160, 161, 162, 194, 195, 196, 228, 229, 230], [127, 128, 129, 161, 162, 163, 195, 196, 197]], [[450, 451, 452, 484, 485, 486, 518, 519, 520], [483, 484, 485, 517, 518, 519, 551, 552, 553], [516, 517, 518, 550, 551, 552, 584, 585, 586]], [[465, 466, 467, 499, 500, 501, 533, 534, 535], [500, 501, 502, 534, 535, 536, 568, 569, 570], [535, 536, 537, 569, 570, 571, 603, 604, 605]], [[291, 292, 293, 325, 326, 327], [326, 327, 328, 360, 361, 362], [395, 396, 429, 430, 463, 464]], [[318, 319, 352, 353, 386, 387], [250, 251, 284, 285, 318, 319], [258, 259, 292, 293, 326, 327]], [[393, 394, 395, 427, 428, 429], [385, 386, 387, 419, 420, 421], [384, 385, 386, 418, 419, 420]], [[215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226], [180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193], [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160]], [[487, 488, 489, 490, 491, 494, 495, 496, 497, 498], [520, 521, 522, 523, 524, 525, 528, 529, 530, 531, 532, 533], [553, 554, 555, 556, 557, 558, 559, 562, 563, 564, 565, 566, 567, 568]], [[281, 315, 349, 383, 417], [246, 280, 314, 348, 382, 416, 450], [211, 245, 279, 313, 347, 381, 415, 449, 483]], [[296, 330, 364, 398, 432], [263, 297, 331, 365, 399, 433, 467], [230, 264, 298, 332, 366, 400, 434, 468, 502]], [[492, 493], [526, 527], [560, 561]], [[287, 288, 289, 290, 321, 322, 323, 324, 355, 356, 357, 358, 389, 390, 391, 392], [287, 288, 289, 290, 321, 322, 323, 324, 355, 356, 357, 358, 389, 390, 391, 392], [287, 288, 289, 290, 321, 322, 323, 324, 355, 356, 357, 358, 389, 390, 391, 392]]],
            highlightedFortCells: {},
            currFortId: null,
            currPlayerPos: null,
            fort: {},
            fortSizeLoading: {},
            playersPosition: {},
            playerRank: {},
            playersData: {},
            allies: {},
            playersDataLoading: {},
            highlightFortCell: function () {
              var battle = $('#fort_battle_' + this.currFortId + '_battleground');
              if (this.currPlayerPos == -1 || !battle.length)
                return;
              var pos = $('.cell-' + this.currPlayerPos).position();
              $('.battleground_marker', battle).css(pos);
              TWX.KoM.highlightedFortCells[this.currFortId] = 1;
            },
            unhighlightFortCell: function (fortId) {
              $('.battleground_marker', $('#fort_battle_' + fortId + '_battleground')).css({
                top: '',
                left: ''
              });
              delete TWX.KoM.highlightedFortCells[fortId];
            },
            hidePopup: function () {
              TWX.KoM.mb.hide();
              for (var fortId in TWX.KoM.highlightedFortCells) {
                TWX.KoM.unhighlightFortCell(fortId);
              }
            },
            showPosition: function () {
              FortBattleWindow.open(this.currFortId);
              var setVal6 = setInterval(function () {
                if ($('#fort_battle_' + TWX.KoM.currFortId + '_battleground').length) {
                  clearInterval(setVal6);
                  TWX.KoM.highlightFortCell();
                }
              }, 100);
            },
            getAlliance: function (player_Id) {
              if (TWX.KoM.allies[player_Id])
                return;
              Ajax.remoteCallMode('profile', 'init', {
                playerId: player_Id
              }, function (resp) {
                if (resp.town && resp.town.alliance_id)
                  TWX.KoM.allies[resp.playerid] = [
                    resp.town.alliance_id,
                    resp.town.alliance_name
                  ];
                else
                  TWX.KoM.allies[resp.playerid] = [
                    null,
                    TWXlang.KoM.noally
                  ];
              });
            },
            pushChatSystemMessage: function (str) {
              Chat.pushSystemMessage(str);
            },
            updatePrivilege: function (fortId, westId, rank) {
              var list = {};
              list[westId] = rank;
              var data = {
                fort_id: fortId,
                privileges: list
              };
              Ajax.remoteCall('fort_battlepage', 'updatePrivileges', data, function (response) {
                if (response.hasOwnProperty('playerlist') && response.playerlist.length > 0) {
                  new UserMessage(TWXlang.KoM.success, {
                    type: 'success'
                  }).show();
                }
                TWX.KoM.setPlayerRank(fortId, westId, rank);
                TWX.KoM.hidePopup();
              });
            },
            makeRankRow: function (rank, westId, fortId, smaller) {
              var rankList = {
                '-2': 'traitor',
                '-1': 'reservist',
                '0': 'recruit',
                '1': 'private',
                '2': 'sergeant',
                '3': 'captain',
                '4': 'major_general',
                '5': 'general'
              },
              rrank = rankList[rank],
              rimg = $('<img>').attr('src', 'images/chat/servicegrade_' + rrank + '.png').attr('title', '<strong>' + Chat.rankTitles[rrank] + '</strong>'),
              rtxt = s(rank == -2 ? TWXlang.KoM.astraitor : smaller ? TWXlang.KoM.appointTo : TWXlang.KoM.degradeTo, rrank);
              return $('<a>').attr('onclick', 'TWX.KoM.updatePrivilege(' + fortId + ', ' + westId + ', ' + rank + ');').append(rimg, rtxt);
            },
            makeRankUpdateHtml: function (myRank, playerRank, westId, fortId) {
              var span = $('<span>');
              var div = $('<div>');
              function appendError(text) {
                var d = $('<div>').css({
                  //'width': '200px',
                  'padding': '4px',
                  'text-align': 'center'
                }).html(text);
                span.append(d);
              }
              if (myRank > 2)
                if (playerRank < myRank) {
                  for (var rank = myRank - 1; rank >= -2; rank--) {
                    if (rank == playerRank)
                      continue;
                    var row = TWX.KoM.makeRankRow(rank, westId, fortId, (rank < myRank));
                    div.append(row, $('<br>'));
                  }
                } else
                  appendError('<br>' + TWXlang.KoM.youcant);
              span.append(div);
              return span;
            },
            getPlayerFortPosition: function (fortId, westId) {
              return TWX.KoM.playersPosition.hasOwnProperty(fortId) && TWX.KoM.playersPosition[fortId].hasOwnProperty(westId) ? TWX.KoM.playersPosition[fortId][westId] : -1;
            },
            getPlayerClass: function (playerClass) {
              return playerClass + '.png" title="' + Game.InfoHandler.getLocalString4Charclass(playerClass);
            },
            setPlayerFortPosition: function (fortId, westId, pos) {
              if (!TWX.KoM.playersPosition.hasOwnProperty(fortId))
                TWX.KoM.playersPosition[fortId] = {};
              TWX.KoM.playersPosition[fortId][westId] = pos;
            },
            makeSmallTitle: function (playerName, westId, playerX, playerY) {
              var span = $('<span>').attr('onclick', 'PlayerProfileWindow.open(' + westId + ')').html(playerName).css('cursor', 'pointer');
              var st = $('<a>').attr('onclick', 'GameMap.center(' + playerX + ', ' + playerY + ')').attr('title', TWXlang.KoM.showPlayerOnMap).css({
                width: '15px',
                height: '15px',
                display: 'inline-block',
                background: 'url(images/tw2gui/window/window2_title_divider.jpg) no-repeat'
              });
              span.append('&nbsp;', st);
              return span;
            },
            getPlayerRank: function (fortId, westId) {
              if (TWX.KoM.playerRank[fortId] && TWX.KoM.playerRank[fortId].hasOwnProperty(westId))
                return TWX.KoM.playerRank[fortId][westId];
              return null;
            },
            getFortRanks: function (fortId) {
              return TWX.KoM.playerRank.hasOwnProperty(fortId) ? TWX.KoM.playerRank[fortId] : null;
            },
            setPlayerRank: function (fortId, westId, rank) {
              if (!TWX.KoM.playerRank.hasOwnProperty(fortId))
                TWX.KoM.playerRank[fortId] = {};
              TWX.KoM.playerRank[fortId][westId] = rank;
            },
            smallPopUp: function (e) {
              try {
                if (TWX.KoM.loading)
                  return;
                TWX.KoM.loading = true;
                var x = e.clientX || 500,
                y = e.clientY || 500,
                westId = TWX.KoM.westId,
                rooms = Chat.Resource.Manager.getRooms();
                for (var r in rooms) {
                  var room = Chat.Resource.Manager.getRoom(r);
                  if (!(room instanceof Chat.Resource.RoomFortBattle) || room.id != TWX.KoM.fortRoom)
                    continue;
                  var fortId = room.fortId;
                  if (TWX.KoM.started(fortId /*, true, westId*/))
                    continue;
                  var playerRank = TWX.KoM.getPlayerRank(fortId, westId),
                  myId = Chat.MyId.match(/[0-9]+/),
                  myRank = TWX.KoM.getPlayerRank(fortId, myId),
                  playerInfo = TWX.KoM.playersData[westId],
                  playerName = playerInfo.name,
                  playerXY = playerInfo.coords,
                  title = TWX.KoM.makeSmallTitle(playerName, westId, playerXY.x, playerXY.y);
                  TWX.KoM.mb = new west.gui.Dialog(title.outerHTML()).addButton('cancel').setId('KickoMaticPopUp').setModal(true, true).setText(TWX.KoM.makeRankUpdateHtml(myRank, playerRank, westId, fortId)).setX(x).setY(y - 50).show();
                  break;
                }
                TWX.KoM.loading = false;
              } catch (err) {
                TWX.KoM.loading = false;
                new UserMessage('<span>' + err + '</spawn>', 'error').show();
                console.log('TWX', err);
              }
            },
            makePopupHtml: function (fortId, distanceImage, playerPositionName, rankHtml, weaponName, weaponMinDamage, weaponMaxDamage, currentHp, maxHp, townName, townId, playerClass) {
              var capacityDiv = TWX.KoM.makeCapacityDiv(fortId);
              var fillPx = Math.floor(currentHp / maxHp * 194);
              return '<div class="txcenter"><div style="background:url(' + TWX.url + 'healthbar.png) right top;width:210px;height:14px;display:inline-block;padding:2px;margin:0;font-size:8pt; text-align:left;"><div style="background: url(&quot;images/character_bars/filler.png&quot;) repeat scroll 0% 0% transparent; width:' +
              fillPx + 'px; height: 14px; padding: 0pt; margin: 0pt; position: absolute;" id="recruit_healthbar"></div><div id="recruit_health" style="position:absolute;color:white;width:194px;text-align:center">' + currentHp + '/' + maxHp + '</div></div><br><div>' +
              weaponName + ' (' + weaponMinDamage + '-' + weaponMaxDamage + ' ' + TWXlang.KoM.damage + ')</div><span style="font-size:16px;text-align:center;"><div style="display:inline-block;"><img src="images/class_choose/class_' + playerClass +
              '"><a style="display:inline;padding:0;" class="profile_link_town_overview" title="' + TWXlang.KoM.showTown + '" href="javascript:TownWindow.open(' + townId + ')"> ' + townName +
              '</a>' + /*<br><a style="display:inline;padding:0;" class="open_alliance" title="' + TWXlang.KoM.showAlly + '" href="javascript:parent.AllianceWindow.open(' + ally[0] + ')"> ' + ally[1] +
              '</a>*/
              '</span><br><img src="images/fort/battle/divider.png"></div><br>' + distanceImage.outerHTML() + '&nbsp;<a title="' + TWXlang.KoM.showFort + '" href="javascript:FortWindow.open(' + fortId + ')">' + TWX.KoM.fort[fortId].name +
              '</a><p>' + capacityDiv + '</p><p><a title="' + TWXlang.KoM.showBattle + '" href="javascript:TWX.KoM.showPosition()">' +
              TWXlang.KoM.position + ': ' + playerPositionName + '</a></p><img src="images/fort/battle/divider.png"><br>' +
              rankHtml.outerHTML() + '</div>';
            },
            getPosName: function () {
              if (this.currPlayerPos == -1)
                return TWXlang.KoM.sectors.undef;
              var kfi = TWX.KoM.fort[this.currFortId];
              if (kfi.defense) {
                for (var i = 7; i <= 19; i++)
                  if (TWX.KoM.coords[i][kfi.type].includes(this.currPlayerPos))
                    return TWXlang.KoM.sectors[i];
              } else
                for (var j = 0; j <= 6; j++)
                  if (TWX.KoM.coords[j].includes(this.currPlayerPos))
                    return TWXlang.KoM.sectors[j];
              return TWXlang.KoM.inside;
            },
            makeDistanceImage: function (fortX, fortY, playerX, playerY) {
              var diffX = fortX - playerX,
              diffY = fortY - playerY,
              image = $('<img>');
              if (!diffX && !diffY)
                image.attr('src', 'images/town/cityhall/green.png').attr('title', TWXlang.KoM.atFort);
              else if (Math.abs(diffX) <= 500 && Math.abs(diffY) <= 500)
                image.attr('src', 'images/town/cityhall/yellow.png').attr('title', TWXlang.KoM.nearFort);
              else
                image.attr('src', 'images/town/cityhall/red.png').attr('title', TWXlang.KoM.notFort);
              return image;
            },
            popUp: function (e) {
              try {
                if (TWX.KoM.loading)
                  return;
                TWX.KoM.loading = true;
                var x = e.clientX || 500,
                y = e.clientY || 500,
                westId = TWX.KoM.westId,
                rooms = Chat.Resource.Manager.getRooms();
                for (var r in rooms) {
                  var room = Chat.Resource.Manager.getRoom(r);
                  if (!(room instanceof Chat.Resource.RoomFortBattle) || room.id != TWX.KoM.fortRoom) {
                    continue;
                  }
                  var fortId = TWX.KoM.currFortId = room.fortId;
                  if (TWX.KoM.started(fortId /*, true, westId*/))
                    continue;
                  TWX.KoM.currPlayerPos = TWX.KoM.getPlayerFortPosition(fortId, westId);
                  var fortCoords = TWX.KoM.fort[fortId],
                  playerRank = TWX.KoM.getPlayerRank(fortId, westId),
                  myId = Chat.MyId.match(/[0-9]+/),
                  myRank = TWX.KoM.getPlayerRank(fortId, myId),
                  playerInfo = TWX.KoM.playersData[westId],
                  playerName = playerInfo.name,
                  //playerLevel = playerInfo.level,
                  playerXY = playerInfo.coords,
                  playerClass = TWX.KoM.getPlayerClass(playerInfo.class),
                  currentHp = playerInfo.currhealth,
                  maxHp = playerInfo.maxhealth;
                  //var alliance = TWX.KoM.allies[westId];
                  TWX.KoM.highlightFortCell();
                  var positionName = TWX.KoM.getPosName(),
                  weaponMinDamage = playerInfo.weapon_damage.min,
                  weaponMaxDamage = playerInfo.weapon_damage.max,
                  weaponName = playerInfo.weapon,
                  //weaponImage = TWX.KoM.getWeaponImage(weaponName),
                  townId = playerInfo.town_id,
                  town = playerInfo.townname || TWXlang.KoM.notown;
                  /*townRights;
                  switch (playerInfo.town_rights) {
                  case 1:
                  townRights = 'norights';
                  break;
                  case 2:
                  townRights = 'councillor';
                  break;
                  case 3:
                  townRights = 'founder';
                  break;
                  default:
                  townRights = 'norights';
                  break;
                  }*/
                  var distanceImage = TWX.KoM.makeDistanceImage(fortCoords.x, fortCoords.y, playerXY.x, playerXY.y),
                  rankHtml = TWX.KoM.makeRankUpdateHtml(myRank, playerRank, westId, fortId),
                  text = TWX.KoM.makePopupHtml(fortId, distanceImage, positionName, rankHtml, weaponName, weaponMinDamage, weaponMaxDamage, currentHp, maxHp, town, townId, playerClass),
                  title = TWX.KoM.makeSmallTitle(playerName, westId, playerXY.x, playerXY.y);
                  TWX.KoM.mb = new west.gui.Dialog(title.outerHTML(), text).addButton('cancel').setId('KickoMaticPopUp').setModal(true, true).setX(x).setY(y - 50).show();
                  $('#KickoMaticPopUp').css('min-width', '0');
                  $('#KickoMaticPopUp .messagedialog_content').css('padding-bottom', '5px');
                  break;
                }
                TWX.KoM.loading = false;
              } catch (err) {
                console.log('TWX', err.stack);
                TWX.KoM.loading = false;
                new UserMessage('<span>' + err + '</spawn>', 'error').show();
              }
            },
            getWeapons: function () {
              if (TWX.KoM.weapons.length > 0)
                return;
              var itemId = 100,
              result = {};
              while (result) {
                result = ItemManager.getByBaseId(itemId++);
                TWX.KoM.weapons.push(result);
              }
            },
            getWeaponImage: function (weaponName) {
              TWX.KoM.getWeapons();
              for (var itemId in TWX.KoM.weapons) {
                var w = TWX.KoM.weapons[itemId];
                if (weaponName == w.name) {
                  return w.image;
                }
              }
            },
            getFortSize: function (room, xy) {
              var di = xy.split('-');
              Ajax.remoteCallMode('fort', 'display', {
                x: di[0],
                y: di[1]
              }, function (data) {
                var fD = TWX.KoM.fort[data.data.fortid] = data.data;
                fD.defense = room.battleData.defense;
                fD.capacity = TWX.KoM.fortsCapacity[fD.type][(fD.defense ? 1 : 0)];
                fD.startTime = new Date(new Date().getTime() + fD.battle.fortBattleStart * 1000).toDateTimeStringNice();
                TWX.KoM.fortSizeLoading[xy] = false;
              });
            },
            obtainFortSize: function (room) {
              var x = room.battleData.x,
              y = room.battleData.y,
              xy = x + '-' + y;
              if (!x || !y)
                return console.log('TWX, x or y is undefined');
              if (TWX.KoM.fortSizeLoading[xy] === true)
                return;
              TWX.KoM.fortSizeLoading[xy] = true;
              if (!TWX.KoM.fortsCapacity)
                Ajax.remoteCallMode('serverinfo', 'get_worldsettings', {}, function (result) {
                  var reg = result.worldsettings.replace(/\s|\n/g, '').match(/:(\d+)\/(\d+).+?:(\d+)\/(\d+).+?:(\d+)\/(\d+)/);
                  if (!reg)
                    return console.log('TWX, fortsCapacity is undefined');
                  TWX.KoM.fortsCapacity = [[reg[1], reg[2]], [reg[3], reg[4]], [reg[5], reg[6]]];
                  TWX.KoM.getFortSize(room, xy);
                });
              else
                TWX.KoM.getFortSize(room, xy);
            },
            getFortCoordinates: function (fortId) {
              return TWX.KoM.fortCoordinates[fortId] || null;
            },
            obtainPlayersData: function (fortId) {
              if (TWX.KoM.playersDataLoading[fortId] === true)
                return;
              TWX.KoM.playersDataLoading[fortId] = true;
              Ajax.remoteCall('fort_battlepage&fort_id=' + fortId, '', {}, function (data) {
                if (data.inProgress === false) {
                  var playerList = data.playerlist;
                  for (var i in playerList) {
                    if (playerList.hasOwnProperty(i)) {
                      var id = playerList[i].player_id;
                      //TWX.KoM.getAlliance(id);
                      TWX.KoM.setPlayerRank(fortId, id, playerList[i].privilege);
                      TWX.KoM.setPlayerFortPosition(fortId, id, playerList[i].idx);
                      TWX.KoM.playersData[id] = playerList[i];
                    }
                  }
                } else
                  TWX.KoM.inProgress[fortId] = true;
                TWX.KoM.playersDataLoading[fortId] = false;
              });
            },
            started: function (fi, a, id) {
              if (TWX.KoM.inProgress[fi]) {
                new UserMessage(TWXlang.KoM.started, 'error').show();
                return true;
              } else if ($.isEmptyObject(TWX.KoM.playersData) || a && !TWX.KoM.allies[id]) {
                new UserMessage(TWXlang.KoM.getData + '...', 'hint').show();
                return true;
              }
            },
            openMessage: function (fortId) {
              if (TWX.KoM.started(fortId))
                return;
              Ajax.remoteCall('messages', 'insert_alliance_members', {
                type: 'members'
              }, function (json) {
                if (json[0] === false)
                  new UserMessage(json[1], 'error').show();
                else {
                  TWX.KoM.allyMembers = json[1].split(';');
                  var done = 0;
                  for (var a in TWX.KoM.playersData) {
                    TWX.KoM.allyMembers[TWX.KoM.allyMembers.indexOf(TWX.KoM.playersData[a].name)] = null;
                    done++;
                    if (Object.keys(TWX.KoM.playersData).length == done) {
                      MessagesWindow.open('telegram', {
                        insert_to: TWX.KoM.allyMembers.toString().replace(/[,]+/g, ';')
                      });
                      var Kff = TWX.KoM.fort[fortId];
                      var defAtt = Kff.defense ? TWXlang.KoM.def : TWXlang.KoM.att;
                      setTimeout(function () {
                        MessagesWindow.Telegram.subjectInput.setValue(Kff.name + ' ' + Kff.startTime);
                        MessagesWindow.Telegram.masstelegramInput.setSelected(true);
                        MessagesWindow.Telegram.telegramInput.setContent('[b]' + TWXlang.KoM.where + ':[/b] [fort]' + Kff.name + '[/fort]\n[b]' + TWXlang.KoM.when + ':[/b] ' + Kff.startTime + '\n[b]' + Kff.typename + ':[/b] ' + Kff.capacity + ' ' + defAtt);
                      }, 1000);
                    }
                  }
                }
              });
            },
            interval: function () {
              TWX.KoM.bindClickFunctions();
              try {
                var rooms = Chat.Resource.Manager.getRooms();
                for (var r in rooms) {
                  var room = Chat.Resource.Manager.getRoom(r);
                  if (!room.hasOwnProperty('room') || room.room != 'fortbattle')
                    continue;
                  var fortId = room.fortId;
                  if (!TWX.KoM.fort.hasOwnProperty(fortId))
                    TWX.KoM.obtainFortSize(room);
                  if ($('.battleMessage' + fortId).length === 0)
                    $('#tab_title_' + r + ' .chat_icons').css('background-image', 'url(' + TWX.url + 'cicons.png)').append('<div class="battleMessage' + fortId + '">').attr('title', TWXlang.KoM.remindAlly).click(function () {
                      TWX.KoM.openMessage(fortId);
                    });
                }
              } catch (e) {
                console.log('TWX', e.stack);
              }
            },
            dataInterval: function () {
              var rooms = Chat.Resource.Manager.getRooms();
              for (var r in rooms) {
                var room = Chat.Resource.Manager.getRoom(r);
                if (!room.hasOwnProperty('room') || room.room != 'fortbattle')
                  continue;
                var fortId = room.fortId;
                TWX.KoM.obtainPlayersData(fortId);
              }
            },
            bindClickFunctions: function () {
              var fContacts = function (e) {
                TWX.KoM.westId = $(this).parent().attr('class').match(/[0-9]+/);
                var lastElement = $(this);
                for (var i = 0; i < 10; i++)
                  lastElement = lastElement.parent();
                var room = lastElement.attr('class').match(/(room_fortbattle_(att|def)_[0-9]+)/);
                TWX.KoM.fortRoom = room[1];
                if (e.ctrlKey)
                  TWX.KoM.smallPopUp(e);
                else
                  TWX.KoM.popUp(e);
              };
              var fMessages = function (e) {
                TWX.KoM.westId = $(this).parent().attr('class').match(/[0-9]+/);
                var lastElement = $(this);
                for (var i = 0; i < 12; i++)
                  lastElement = lastElement.parent();
                var room = lastElement.attr('class').match(/(room_fortbattle_(att|def)_[0-9]+)/);
                TWX.KoM.fortRoom = room[1];
                if (e.ctrlKey)
                  TWX.KoM.smallPopUp(e);
                else
                  TWX.KoM.popUp(e);
              };
              var ranks = ['general', 'major_general', 'captain', 'sergeant', 'private', 'recruit', 'reservist', 'traitor'];
              $.each(ranks, function (k, v) {
                $('.chat_contacts .chat_servicegrade_' + v).off('click').on('click', fContacts);
                $('.chat_messages .chat_servicegrade_' + v).off('click').on('click', fMessages);
              });
            },
            makeCapacityDiv: function (fortId) {
              var ranks = [1, 2, 3],
              fortCapacity = TWX.KoM.fort[fortId].capacity,
              count = TWX.KoM.countPlayersWithRanks(fortId, ranks),
              color = count < fortCapacity ? 'green' : count == fortCapacity ? 'yellow' : 'red';
              return '<span><span style="color:' + color + ';" id="fortCapacity' + fortId + '" title="' + TWXlang.KoM.evaluated + '">' + count + '/' + fortCapacity + '</span><p></p></span>';
            },
            countPlayersWithRanks: function (fortId, ranks) {
              var result = 0,
              fortRanks = TWX.KoM.getFortRanks(fortId);
              for (var westId in fortRanks)
                if (ranks.includes(fortRanks[westId]))
                  result++;
              return result;
            },
            thatWouldntHappendIfZetWasStillWorkingOnTheWest: function () {
              Chat.Resource.RoomFactory = function (data) {
                var room = null;
                if (data instanceof Chat.Resource.Client) {
                  room = new Chat.Resource.RoomClient(data);
                } else {
                  switch (data.room) {
                  case 'town':
                    room = new Chat.Resource.RoomTown(data.townid, data.x, data.y);
                    break;
                  case 'general':
                    room = new Chat.Resource.RoomGeneral(data.general_id);
                    break;
                  case 'maneuver':
                    room = new Chat.Resource.RoomManeuver(data.fortid, data.xy);
                    break;
                  case 'fortbattle':
                    room = new Chat.Resource.RoomFortBattle(data.fortid);
                    break;
                  default:
                    room = new Chat.Resource.Room();
                    break;
                  }
                }
                room.init();
                return room;
              };
            },
          };
          ChatWindow.Client.onClickOrigin = ChatWindow.Client.onClick;
          ChatWindow.Client.onClick = function (args, id) {
            if (args[0].target.className.indexOf('chat_servicegrade') !== 0) {
              ChatWindow.Client.onClickOrigin(args, id);
            }
          };
          $.fn.outerHTML = function () {
            return $('<div>').append(this.eq(0).clone()).html();
          };
          setInterval(TWX.KoM.interval, 1e3);
          TWX.KoM.dataInterval();
          setInterval(TWX.KoM.dataInterval, 1e4);
          TWX.KoM.thatWouldntHappendIfZetWasStillWorkingOnTheWest();
        },
      };
      TWX.FbRankingChar = {
        init: function () {
          if (!TWX.Data.playerChars)
            TWX.Data.playerChars = {};
          var loading,
          cell,
          data,
          cellH,
          pId,
          charClass = [null, 'greenhorn', 'duelist', 'adventurer', 'worker', 'soldier'],
          addCharClass = function () {
            var charC = charClass[TWX.Data.playerChars[pId]];
            $(cellH).prepend('<img src="images/class_choose/class_' + charC + '.png" title="' + Game.InfoHandler.getLocalString4Charclass(charC) + '"> ');
            if (++cell < data.length)
              nextCell();
            else
              loading = 0;
          },
          getCharClass = function () {
            Ajax.remoteCallMode('ranking', 'get_data', {
              tab: 'experience',
              entries_per_page: 9999
            }, function (json) {
              for (var jr of json.ranking)
                TWX.Data.playerChars[jr.player_id] = charClass.indexOf(jr.class);
              localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
              addCharClass();
            });
          },
          nextCell = function () {
            cellH = RankingWindow.FortBattles.Table.getCell(cell, 'forts_playername')[0];
            pId = cellH.innerHTML.match(/open\((\d+)/)[1];
            if (!TWX.Data.playerChars[pId])
              getCharClass();
            else
              addCharClass();
          };
          RankingWindow.FortBattles.updateTable_twx = RankingWindow.FortBattles.updateTable_twx || RankingWindow.FortBattles.updateTable;
          RankingWindow.FortBattles.updateTable = function (be_data) {
            RankingWindow.FortBattles.updateTable_twx.call(this, be_data);
            if (!loading) {
              loading = 1;
              data = be_data.ranking;
              cell = 0;
              nextCell();
            }
          };
        }
      };
      TWX.DuelXpCalc = {
        init: function () {
          PlayerProfileMain.setProfileInfo_twx = PlayerProfileMain.setProfileInfo_twx || PlayerProfileMain.setProfileInfo;
          PlayerProfileMain.setProfileInfo = function () {
            PlayerProfileMain.setProfileInfo_twx.apply(this, arguments);
            var clvl = this.resp.level,
            dlvl = this.resp.duelLevel,
            target = $('.playerprofile-' + this.playerid + ' .profileinfo-duellevel .profileinfo-value'),
            range = dLvlRange(dlvl),
            getXp = function (lvl) {
              return Math.ceil(Math.pow(lvl * 10, 1 / 0.6));
            },
            getLvl = function (xp, perc) {
              return clvl + Math.floor(Math.pow(xp * (perc || 1), 0.6) / 10);
            },
            minXp = getXp(dlvl - clvl),
            maxXp = dlvl == '450' ? '<b>∞</b>' : getXp(dlvl + 1 - clvl),
            minLvl = getLvl(minXp, 0.9),
            maxLvl = dlvl == '450' ? '450' : getLvl(maxXp, 0.9);
            target.append(' <div class="tw2gui-iconset tw2gui-icon-question-priority-4" title="<span>' + TWXlang.attDl + ': ' + range.min + ' - ' + range.max + '<br><br>' + TWXlang.duelxp + ': ' + minXp + ' - ' + maxXp + '<br> -10% ⇒ ' + TWXlang.duelLevel + ' ' + minLvl + (maxLvl > minLvl ? ' - ' + maxLvl : '') + '</span>" style="display:inline-block;vertical-align:top;cursor:pointer;"></div>');
          };
        }
      };
      TWX.ItemNew = {
        allBids: [],
        learnedRecps: [],
        stampedNames: new Set(),
        normalizeName: function (name) {
          return typeof name === 'string' ? name.trim().normalize('NFC') : '';
        },
        itemName: function (obj) {
          const base = obj.item_base_id && ItemManager.getByBaseId(obj.item_base_id);
          return this.normalizeName(base?.name || obj.name);
        },
        readStamps: function (response) {
          const achievements = response?.achievements;
          if (response?.error || !achievements) return;
          const entries = [...Object.values(achievements.progress || {}), ...Object.values(achievements.finished || {})];
          const template = document.createElement('template');
          for (const entry of entries) {
            const meta = entry?.meta;
            const fragments = typeof meta === 'string' ? [meta] : Object.values(meta || {})
              .flatMap(part => part && typeof part === 'object' ? Object.values(part) : [part]);
            for (const html of fragments) {
              if (typeof html !== 'string' || !html.includes('<img')) continue;
              template.innerHTML = html;
              for (const image of template.content.querySelectorAll('span img[alt]')) {
                let locked = false;
                for (let node = image; node && !locked; node = node.parentElement) {
                  locked = Array.from(node.classList).some(name => /(?:^|[-_])locked$/i.test(name));
                }
                const name = this.normalizeName(image.getAttribute('alt'));
                if (!locked && name) this.stampedNames.add(name);
              }
            }
          }
          for (const badge of document.querySelectorAll('.TWX_ItemNew[data-twx-item-name]')) {
            if (this.stampedNames.has(badge.dataset.twxItemName)) badge.remove();
          }
        },
        badge: function (obj, style) {
          if (!this.isNewItem(obj)) return '';
          return $('<img>').attr({
            src: this.iconNew,
            class: 'TWX_ItemNew',
            title: 'new Item',
            style,
            'data-twx-item-name': this.itemName(obj)
          }).prop('outerHTML');
        },
        isNewItem: function (obj) {
          if (!obj || this.stampedNames.has(this.itemName(obj))) return 0;
          var inv = Bag.getItemsIdsByBaseItemId(obj.item_base_id),
          wear = Wear.wear[obj.type],
          wear2 = wear && wear.obj.item_base_id == obj.item_base_id,
          bids = this.allBids.includes(obj.item_base_id),
          recps = obj.profession_id && !(Character.professionId == obj.profession_id && !this.learnedRecps.includes(obj.item_base_id));
          return (inv.length || wear2 || bids || recps) ? 0 : 1;
        },
        iconNew: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC/tJREFUeNp0WAlUFFcWvVXdTTc0NIuogLiAgsYtJm4kGk3UqMkYM3GiUXN0TDJGj6NRo7gko+JuTGLiEhN3x2VwGz1x1MQxQeNKiGCjAm4IAooI0ghN02vVvP+7quk2mTqnqKLr1//vv3vfe/eV8GKfvmgeHY7pk8bC6XRDEABRFMEOj0fiV1EUINNVliR+L7BBfocke5+x3/XBRpjzC6MijdrquJhm3uc0QJYbT7aISGdQkA6bdh5Cwa27SE1NhTYrKwvduyShT/f2qLPWQ6MRodVqwFZ3ujzMBPpNQxNKcHs8CNJq+RhmHP8jyHC7ZXru4b+bYhJ6lRYVr/ktJ/u1d5fMqrPZHXxT7GSGqBthl5BgA1asfgCz2YyKigqIQUFBfDEPLcZ2wE6Ph071XmKLecgQ5TlN6FYmV99hV5fLBV14tFCVlbs66UxGn7KHjyf9mpMHnU7Hx7B32OmiudR1yDSItLbX+yI4HmwyWfK6j/7wh95dKDgI4Dt6Gh7vOO8bQYZgmtg45dbqL/pbfsjA8NimqVsOHG/BFlHnYie7lxS4JAVa9RDZVBxLzglZ8b2ykDpI8E7o98g7XhaUCcnlMW2SS3fsXll15izcBGXSjZvNtA5H2uETpxFqDPHuXFC4SO+oG+fz+tYRoLhNUrAUfGawe3WsAK9nBHh/Y6ckk+sJHkOTWK01t2Bb4RdrwrTBIRAMelhy8/F2SNB7h06eHVhR+RgaMoaNVwNEUHjjf4jqjepCQXG9vw/UKGCTyWj0osxIGxJGTBdXXJ01p6+rzgrotDyyJOKKmHFe81p88/VfbT8YrqfI8QIqQKsROVSM8P7uFhvvGZn8/mUekPwGiizKtD6icPppdAiNbjXqxpLlqTXmqxBDCA56R2TQkVG1VdXompP7THSQbuPOf/8IU5gxcLMyfBz1GiP4k1H2EpLBo5ilhiPPNbLkcyMbERLT6tniLdu3lO1JhyY0lBtRTc/qTCYIzKBQIx5mX8Wrt26NleobtqUfzwhmaYNTQQ6wIxAm1VxfYvJ5RCB3ChxGrcY7ETkZwdHNYh+f+uVQwbKVJjEkGAKNk5wu2N9+A1Gj34RktUGgvMSelf98Ds+fPvt+eFVNxr6T57uXlj/iCc8boX7GyAp2Ag9B+IGkklkI5BB5RxceabLmFR/OnZHaTqK8IRB8DJ46um97PR9RKd1Rn9gKMiU8vghF06Mr12DauiulS+Hd8zlXbiw5ffm6yU7Gq9ne5xlRsVA9/agb6ElmiCki2FHy+IB58kcpbksN5Rc9NA4nbDRp2fhRyHVLKN99CM3nT4ccF0vkdnKva4KDYautQ83OdEPbo8cWGG4XZf18wTyu+olVCDDGW1vkgFCGIASkb58h5bUHciZ9NKS+pARagsBCu8t7rgtE4sKA5ASMSN+I+1GRqKeFwwf15d4ReZQSsSnCZCK55VoBsPbb9oknTu565/WBmSHG4I4eBqkvrP2znBJJ3BBOfw90EVEme0nVkZzxE4dZ7xYhyGgE7HbYB7yMQWuWoG7YYFz+8juguAwjp05El5d6o8WYt1AbHweJFlIjUKb7UKKFnbz2ZW6Ba+naLQ8abHZekjQ6qk0xzZpg3DvDeGYU0Fi1eXalSQzRzeOs+fe+z54w6RVbcTH0pjBYyRCLqEECXQ1lD9B1ynuoahmH/MxsSJWVEC5mo+Xg/vB06gTb6fNMAkCgBGkk/uQnJmD5I0veuZLy2TpRXNxgdzwcOnQotP6JjS0uKt6QPG5otEEIaR7/XNWps/tyZ8xJdlZXI5iwryFoyocMRnSXDniycy/qdu/Ho6t5eGHxfGDIK5Cp9p15byYsldWIpIyMmhpoqXZ5SFIciGzi2pR5dXeXdq1XXPjP1sLln2/G9z+ceSq0fdFDhrjJkOAwhMUljb6/Y3+GeeKUZHftE+gJmidkSPHgAejVNgEdb99Bsxd6UxYOhvNuMbJHf4Cyucugr65FyjdfwnLZjMJN20DJBXVJiVgqaR58dyFn2sz3R07+5ejWwp49usJO5FcPLfxCmMNCXjLGttHBISwzT5895/7edIikO0hrQCJIPB2S8caH76LmTiFOfLMZho4d0Ilgc9RayZNalP9wCvW2BkTGtwTu36cMHYWCpLZYfrv0V4Ijdf/mFedGDBsEG41x1Nt+n/Q4RyU3gvQGmFo907HhZsnPmSNGzrm391/QUhbV0SK1lEMamkUj6l4JKmenIS6xNVJ2rUffMSMhmyJQOqg/ZOJeUFgobJevoCx9P4zhJmQkt8P0y3n745pHjzp3dOu5P78+AI+ra7j+eVqS8KTnoFxgiIqBsWnC1HubdlwkQ16yXL0ObXg4tLLMhZT1r6M5H2yWJ7AW3Ebe/JVI6dwBTqMWDym6WuiDEEnweRrs3N2hFEVH4uI8y8/lrHl7cL+J/z30bUlC6xZcTQZSw88Yg0Gv7dk75QX3nYqffhszbv21BYvCOWfII7zWEEcK9Xq0KbqHzn8ahOqhA9FAiU7Ov4lLw8chqX0iolYvREP7jhBLyqkmURogD+1s0tSx4dzlRbMnjZ2357sVdSxCbWSoSgv/zOszJqFNq+iE5lEbz3w6b2D9+QvQEVSSluoGhS2TifXvjEDn7V+htE1LXNyyF8l/GwPt2BEkH92wF5Xg2tRP0KPbc+hAxlp+yoChVTy2RzZp+OeF7PlL5k5e8VnadJfd4SDp6g6AxSPJT0kVQGO3O63HTp0+ni1qPRFdO3Zua9AbBIJCUopBC8K2U9+eSJkwCrr4eOiowLXu1wt5+behvVcKkRapOHYSTy5dQmiLWOyJbmbfdT77k1WLpn89Z9oE1FLBZBleoo0xgcUMYoHC9IyBoN13+EfcKSoFyzOikxbr06tb2aqF0+ccs9T1/4fdc+hR7+4IJfIJxKW66wXImjwXxZlXEErG6c0FaBlmwisbVgDTJvPMKVOSM1EOIY64d5zPXrJywbS1c2d+4OWHKgsFf3EgeA2DEKhnZKWnGTa4H35KX5c7/M1XRy6+UTzm+8TEYmNyIpcNblJwxbMXw1lVCXNhIY6O+hC6i2Z0cLhJKlhhJH5ltGqFdWey1qb+ffzn82ZNlOsp1NWFmbzwCX14xbkkyb+PJtUwK+2C3c6eMg5HtqzcZ7bZ+39jNB0P6dkNVN7QUFiE4rlL0WnAS4gYPRLmGfNQtHUbDBT2+RS+yzNz08e+NSSNOOJmhkgKIRgkslr4BPjE2x8SWC2OTM+wELZYapHYJh6HN68qiW3b+i+7TBGHTBTCAhU3J3GpcsN26I6egExV2kBRVkOZdVlB0aUenZJSN3+90Npgd/LeCIGK0gcL106Bzc4fyE5FLjCXOihFs+7x67SZDmNM0w8uJbW7ZmoSBYGysD3HjCfXqTmjaJPjYvBFje0+jf94z7fL7+tI97J3GQ5q06fKV05apQNhB5uftywBGlj1IFN6ijDljCfjbJT+F06bUHvdLU229unlElxuUv86LkUNVH0PmyJcl/JuL9y5YXEm8ybLI4KiuEW16ZPh68vYe0y3qJ5SZW6gMbxQy0pP5GW/RvDuhin68W8NuXhSp18f/mxHqk8OBNOObya0xqZM845PZry/642hL6O2rt77/lPwcMEmeY3jHQhr5vwMeaqjVHbCc0Bjjva+IMBa34B+vbqhaXzcssIOSSVGgsIZH4t1RQ+uPd8pedmnsya6a0nVqS2wr0NVvONROk4Z/kJfaXGV6HrKM4KiZ1TpqQzkTRt4mR87fJDlioRF4a/2x0GIjpslD5ZsXD2/lLUeqijjHaOfY9iGJCXT8tZWUGHxNnIaMZDMWrU7MFK1lSmbuogXPJH5tbhu+i0xuQ1efrHHnoMXsj7eX3Dmxmf/mHqkd//ekAmeCJIQXqi9XFM9zaKTkZp9iWCphvNSUvIMjWEaWqN8heDGuFxOFNy4gwVL13KtqhjOB6vtCjNQr9fR1eNet/PgBHuD01lRUelZMH+Vb5xiTSMUsncOxju2oOD7WOCFj5UInU6D3Gs3+HAuKdLS0kgVkixQhM4ffPXw8YBFg5F2w3bNxqtftv7f4Z1LaGSG3Cj+1TaXzce8N3z4cPxPgAEA6JcjmcJQzpoAAAAASUVORK5CYII=",
        init: function () {
          var setVal11 = setInterval(function () {
            if (!window.MarketWindow || !Character.playerId)
              return;
            clearInterval(setVal11);
            // Cloth Calc draws the same NEW badge. This feature handles it in all shops and on the market.
            TWX.addStyle('.TWDBcollector { display: none !important; }');
            Ajax.remoteCall('achievement', 'get_list', { folder: 'collections', playerid: Character.playerId }, function (response) {
              TWX.ItemNew.readStamps(response);
            });
            Ajax.remoteCall('building_market', 'fetch_bids', {}, function (t) {
              if (t.error)
                return new UserMessage(t.msg, UserMessage.TYPE_ERROR).show();
              var n = t.msg.search_result;
              for (var r of n)
                TWX.ItemNew.allBids.push(r.item_id / 1000);
            });
            Ajax.remoteCall('crafting', '', {}, function (t) {
              var n = t.recipes_content;
              if (n)
                for (var r of n)
                  TWX.ItemNew.learnedRecps.push(r.item_id / 1000);
            });
            MarketWindow.getClearName_twx = MarketWindow.getClearName_twx || MarketWindow.getClearName;
            MarketWindow.getClearName = function (obj) {
              var itemNew = TWX.ItemNew.badge(obj, 'width:18px;');
              return itemNew + MarketWindow.getClearName_twx.call(this, obj);
            };
            tw2widget.TraderItem.prototype.getMainDiv_twx = tw2widget.TraderItem.prototype.getMainDiv_twx || tw2widget.TraderItem.prototype.getMainDiv;
            tw2widget.TraderItem.prototype.getMainDiv = function () {
              this.divMain = tw2widget.TraderItem.prototype.getMainDiv_twx.apply(this, arguments);
              this.divMain.find('.TWX_ItemNew').remove();
              this.divMain.append(TWX.ItemNew.badge(this.obj, 'position:absolute;top:-12px;left:-15px;'));
              return this.divMain;
            };
            west.game.shop.item.view.prototype.render_twx = west.game.shop.item.view.prototype.render_twx || west.game.shop.item.view.prototype.render;
            west.game.shop.item.view.prototype.render = function () {
              var that = this,
              $item = west.game.shop.item.view.prototype.render_twx.apply(this, arguments);
              $item.find('.TWX_ItemNew').remove();
              $item.append(TWX.ItemNew.badge(this.model._data.item_data, 'position:absolute;'));
              return $item;
            };
          }, 2000);
        }
      };
      TWX.Logout = {
        init: function () {
          var menu = $('<div class="menulink" onclick="TWX.Logout.logout();" title="' + TWXlang.logout + '">').css('background-image', 'url(' + TWX.Images('logout') + ')').css('background-position', '0px 0px').on('mouseenter', function () {
            $(this).css('background-position', '-25px 0px');
          }).on('mouseleave', function () {
            $(this).css('background-position', '0px 0px');
          });
          $('#TWX_menu').append(menu);
        },
        logout: function () {
          location.href = 'game.php?window=logout&action=logout&h=' + Player.h;
        },
      };
      TWX.ChangeCity = {
        init: function () {
          var swap = function (that) {
            var rows = $('.' + that.window.id + ' .row .cell.cell_2.name,.' + that.window.id + ' .row .cell.cell_2.name_foreign');
            rows.empty();
            for (var i = 0; i <= that.data.length; i++) {
              var player = that.data[i];
              $(rows[i]).append('<span>&nbsp;' + (player.title !== undefined ? player.title : '') + '</span><a href="#" onClick="PlayerProfileWindow.open(' + player.player_id + ')">' + player.name + '</a>');
            }
          };
          CityhallWindow.Residents.fillContent_twx = CityhallWindow.Residents.fillContent;
          CityhallWindow.Residents.fillContent = function () {
            var tmp = CityhallWindow.Residents.fillContent_twx.call(this);
            if (tmp !== undefined)
              return tmp;
            swap(this);
          };
        }
      };
      TWX.Statusbar = {
        init: function () {
          $('div#ui_windowbar').hide();
          $('div#ui_windowbar_state').hide();
        }
      };
      TWX.BlinkEvents = {
        init: function () {
          var setVal7 = setInterval(function () {
            if ($('.border.highlight').length) {
              clearInterval(setVal7);
              $('.border.highlight').remove();
              TWX.addStyle('.border.highlight {display:none;}');
            }
          }, 3000);
        }
      };
      TWX.FortTracker = {
        init: function () {
          TWX.addStyle('.fort_battle_notification {display:none!important;}');
        }
      };
      TWX.FriendsPop = {
        init: function () {
          west.notification.ToastOnlineNotification.prototype.show = function () {};
        }
      };
      TWX.MinChat = function () {
        TWX.addStyle('div#ui_bottomleft {width:auto; overflow:hidden;}\n div#ui_chat {margin-top:12px;}\n div#ui_chat div#TWX_toggleMinChat {position:absolute; top:-14px; left:5px; width:27px; display:block; background-size:108px 42px; border:0px solid rgba(0, 0, 0, 0); background-clip:content-box;}\n div#ui_chat.TWX_mchat div#TWX_toggleMinChat {background-position:0px 0px; border-width:0px 8px 34px 0px;}\n div#ui_chat.TWX_mchat div#servertime {display:none;}\n div#ui_chat.TWX_mchat > div.tabs div {display:none;}\n div#ui_chat.TWX_mchat div.container div.friend {display:none!important;}\n div#ui_chat.TWX_mchat div.container div.general {display:block!important;}\n div#ui_chat.TWX_mchat div.container div.vertical_divider {display:none;}\n div#ui_chat.TWX_mchat img.leave_channel {display:none!important;}\n div#ui_chat div.TWX_mchat_tabr {display:none;}\n div#ui_chat.TWX_mchat div.TWX_mchat_tabr {display:block; position:absolute; left:32px; top:0px; width:8px; height:34px; background:url("' + to_cdn("images/interface/chat/chat-top.png?1") + '") top right;}\n div#ui_chat.TWX_mchat {position:relative; left:-10px; top:4px; width:39px;}\n div#ui_chat.TWX_mchat > div.tabs {width:32px; background:url("' + to_cdn("images/interface/chat/chat-top.png?1") + '");}\n div#ui_chat.TWX_mchat div.chat_channel {width:24px;}\n div#ui_chat.TWX_mchat div.chat_channel .new_message {left:2px; top:0px;}\n div#ui_chat.TWX_mchat div.chat_channel div.online_count {background:none; position:absolute; right:0px; top:-1px; width:auto; height:auto; line-height:normal; padding:0px; font-size:8pt; font-weight:bold; text-align:right; text-shadow:-1px 1px 1px #FFF, 0px 0px 2px #FFF; cursor:default;}\n div#ui_chat.TWX_mchat div.container {width:40px; background-position-x:right;}\n div#ui_chat.TWX_mchat div.row_title {left:5px; width:32px; opacity:0;}\n div#ui_chat.TWX_mchat div.tw2gui_scrollpane {width:50px;}');
        $("div#ui_chat").append('<div class="TWX_mchat_tabr">').toggleClass("TWX_mchat", (TWX.Data.MinChat || false)).children(".tabs").first().append($('<div id="TWX_toggleMinChat" class="tw2gui_arrow_up_top">').on("click", function (e) {
            e.stopPropagation();
            TWX.Data.MinChat = $("div#ui_chat").toggleClass("TWX_mchat").hasClass("TWX_mchat");
            localStorage.setItem('TWLT', JSON.stringify(TWX.Data));
          }));
      };
      TWX.CalcTwdb = {
        show: function (e) {
          if (!e.ctrlKey && !e.altKey)
            return;
          var t = $(e.target).data();
          var tdi = t.itemId || t.itemid || t.setkey;
          if (!tdi)
            return;
          var add;
          if (e.altKey) {
            add = isNaN(tdi) ? 'supravy&set=' : 'item&id=';
            TWX.GUI.open('openWebCenter', '//tw-db.info/?strana=' + add + tdi, [1000, 630]);
            TWX.GUI.makeList();
          } else {
            add = isNaN(tdi) ? 'sets/' : 'item/';
            window.open('//tw-calc.net/' + add + tdi);
          }
        },
        init: function () {
          $(document).click(function (e) {
            TWX.CalcTwdb.show(e);
          });
          Inventory.clickHandler = function (item_id, e) {
            var item = Bag.getItemByItemId(item_id);
            if (e.shiftKey || e.ctrlKey || e.altKey)
              return;
            if (this.click && this.click.callback.apply(this.click.context, [item]))
              return;
            if (item.obj.action) {
              $.globalEval(item.obj.action);
              return;
            }
            if (wman.getById(Wear.uid)) {
              Wear.carry(item);
              return;
            }
            return;
          };
        }
        (),
      };
      TWX.CollectReminder = function () {
        var setVal4 = setInterval(function () {
          if (window.Bag && Bag.loaded) {
            clearInterval(setVal4);
            var nulls = [];
            for (var y in TWX.cdown) {
              var tcy = TWX.cdown[y],
              cdwn = TWX.Data.cooldown && TWX.Data.cooldown[y] || tcy[0],
              item = Bag.getItemsByBaseItemId(y)[0];
              if (cdwn == 1 && item && (tcy.length == 1 || sesEvs[tcy[1]] == EvName)) {
                var coold = BuffList.cooldowns[item.obj.item_id] && BuffList.cooldowns[item.obj.item_id].time || item.cooldown * 1000;
                var sec = coold - new ServerDate().getTime();
                if (!(sec > 0))
                  nulls.push(item);
                else if (!TWX.cdownTimer[y])
                  TWX.cdownSetTime(y, [item], sec);
              } else if (cdwn == 0.5 && TWX.cdownTimer[y]) {
                clearTimeout(TWX.cdownTimer[y]);
                TWX.cdownTimer[y] = 0;
              }
            }
            if (nulls.length)
              TWX.cdownSetTime(0, nulls, 0);
          }
        }, 2000);
      };
      TWX.SkipOpen = function () {
        ItemUse.use_twx = ItemUse.use;
        ItemUse.use = function (itemId) {
          var baseId = itemId / 1000,
          skips = TWX.Data.skipOpen && TWX.Data.skipOpen[baseId] || TWX.skipOpen[baseId];
          if (skips == 1)
            Ajax.remoteCall('itemuse', 'use_item', {
              item_id: itemId,
              lastInvId: Bag.getLastInvId()
            }, function (res) {
              if (res.error)
                return new UserMessage(res.msg).show();
              var widget = $('<div>');
              for (var m of res.msg.effects) {
                switch (m.type) {
                case 'experience':
                  widget.append(new tw2widget.reward.ExpReward(Math.ceil(m.experience)).toString());
                  break;
                case 'lottery':
                case 'content':
                  var cont = {};
                  m.items.each(function (mi) {
                    cont[mi.item_id] = mi.count;
                    widget.append(new tw2widget.Item(ItemManager.get(mi.item_id)).setCount(mi.count).getMainDiv());
                  });
                  $.get('//tw-calc.net/service/chest-export', {
                    chest: itemId,
                    count: 1,
                    content: cont,
                    version: Game.version
                  }, function () {}, 'jsonp');
                  if (ItemUse.twdb)
                    ItemUse.twdb(itemId, res);
                  break;
                case 'ses':
                  widget.append(' <img src="images/icons/' + m.event + '.png" title="' + m.name.escapeHTML() + '"> ' + m.amount);
                  break;
                default:
                  widget.append(JSON.stringify(m));
                  break;
                }
                var mess = $('<div>' + TWXlang.skipDone + ':<br></div>').append(widget);
                new UserMessage(mess, 'success').show();
                Bag.updateChanges(res.msg.changes);
                EventHandler.signal('item_used', [itemId]);
              }
            });
          else
            ItemUse.use_twx.apply(this, arguments);
        };
      };
      TWX.Skript.init();
    } else if (location.href.includes('?strana=invent&x=')) {
      let lg = TWX.langs,
      lang = /lang=([a-z]+)/.exec(document.cookie),
      TWXlang = lang && lg.hasOwnProperty(lang[1]) ? lg[lang[1]] : lg.en,
      done = false,
      i = document.getElementsByClassName('bag_empty'),
      wrld = document.getElementById('char_server').textContent,
      saveCounts = {},
      sameWorld = false,
      hide = function (it) {
        saveCounts = {};
        var sameItem = false;
        for (var j of i) {
          var m = j.children[1].innerHTML.match(/,\d,\d,\d,(\d),\d/),
          auct = m ? m[1] == 1 : true,
          id = j.id.slice(1),
          level = id.slice(-1) > 0;
          if (it)
            sameItem = sameWorld ? it[id] : !it[id];
          if (!auct || level || sameItem)
            j.style.display = 'none';
          else if (it && it[id]) {
            var count = j.firstChild.firstChild;
            if (count.textContent > it[id]) {
              saveCounts[j.id] = count.textContent;
              count.textContent = it[id];
            }
          }
        }
        $('.inputV2')[0].style.display = 'none';
      };
      TWX.compInv = function () {
        if (done) {
          done = false;
          for (var h of i) {
            h.style.display = 'inline-block';
            if (saveCounts[h.id])
              h.firstChild.firstChild.textContent = saveCounts[h.id];
          }
          $('.inputV2')[0].style.display = 'inline-block';
        } else {
          done = true;
          var url = prompt(TWXlang.compInv + ': ');
          if (url && url.includes('?strana=invent&x='))
            $.ajax({
              url: url
            }).done(function (data) {
              var regex = /<div id='i(\d+)' class='bag_empty'><span class="pocetx"><span class="pocet_cislox">(\d+)<\/span>/g,
              t,
              items = {},
              world = /id="char_server">(.*?)</.exec(data);
              if (!world) {
                alert('invalid inventory');
                done = false;
              }
              sameWorld = wrld == world[1];
              while (t = regex.exec(data)) {
                var u = sameWorld ? t[1].slice(0, -3) + '000' : t[1];
                items[u] = t[2];
              }
              hide(items);
            }).fail(function () {
              alert(arguments[1] + arguments[2]);
              done = false;
            });
          else {
            sameWorld = false;
            hide();
          }
        }
      };
      $('.inputV2').after('<img src="//westzz.innogamescdn.com/images/items/yield/pick.png" width="25" style="position:absolute;right:2px;cursor:pointer;border:2px solid #90601c;border-radius:5px;background:#e0ddd9;	box-shadow:0 0 4px inset;}" onclick="TWX.compInv();">');
    } else {
      if (location.hash.includes('loginWorld'))
        setTimeout(function () {
          $('#loginButton').click();
          var val = setInterval(function () {
            var u = Worlds.playerWorlds;
            if (Object.keys(u).length !== 0) {
              clearInterval(val);
              Auth.login(u[parseFloat(location.hash.replace(/\D/g, ''))]);
            }
          }, 500);
        }, 1000);
      else {
        var setVal = setInterval(function () {
          if (window.Worlds && Worlds.show) {
            clearInterval(setVal);
            let lg = TWX.langs,
            TWXlang = lg.hasOwnProperty(location.href.substr(21, 2)) ? lg[location.href.substr(21, 2)] : lg.en;
            Worlds.show = (function () {
              Worlds.show_twx = Worlds.show;
              return function () {
                Worlds.show_twx.apply(this, arguments);
                var first = true;
                var plyWrl = Worlds.playerWorlds,
                state = (JSON.parse(localStorage.getItem('TWLTcustom1')) || {}),
                t1 = [],
                t2 = [];
                for (var a in plyWrl) {
                  if (plyWrl[a][1] !== null) {
                    t1.push(a);
                    if (!state[a])
                      state[a] = false;
                    else if (state[a] === true)
                      t2.push(a);
                  }
                }
                var loginNow = function (t) {
                  for (var x = 0; x < t.length; x++) {
                    if (first)
                      Auth.login(plyWrl[t[x]]);
                    else
                      window.open(location.origin + '#loginWorld' + t[x], '_blank');
                    first = false;
                  }
                };
                $('#worldsWrapper').append('<div id="loginMore">');
                $('#loginMore').append('<a id="loginAll" title="' + TWXlang.loginAll2 + '" href="#">' + TWXlang.loginAll1 + '</a>').append('<a id="custom" title="' + TWXlang.custom2 + '" href="#">' + TWXlang.custom1 + '</a>').append('<img id="cust1" title="' + TWXlang.edit + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAFOSURBVDhPY6A6KKnL4j60a2Xf1jWz/6PjQ5unbIUqww3WLpr0Hx0/vXXq/9e39/5fPL4VzAdZAlVOGFw6s9t49sQGsAF/f30GGwLiQ6UJA5Dio7tW/X/z6AIYgwxaNKPr7/1rh6ShSnADkJ/banPB/r9z+QDYIBAfRE9oKf7f2Vz8BKoUE+ydEfj/5Orm/88vb/1fVxwHdjZI88p5zc0gevemRWBxqHJUANP86+Wu/9f3TPu/Y1Yh2NbCskQWkPyiOTmiIM0gw8AakAFI88FFVWCbQYasn5iBVeG0SWWeUCYCLKl1B9sG0gwyZFl73P+99d79UGn8AKQZZBtIM8iQ2XXh2J2IDYA0g2x7cGwZ2JDJpf7E2zwnwwxsG0gzyJCuXC/iNYMAsubGFDvSNIMAyEaQFxoiDf93Vgb3QIWJBwtb3NJANoNoqBAJgIEBAEbiFXTTZGcSAAAAAElFTkSuQmCC">');
                $('#selectWorldText').css('margin-bottom', '20px');
                $('#loginAll').css({
                  'background-image': 'url(' + TWX.Images('LT_login') + ')',
                  'height': '45px',
                  'width': '180px',
                  'line-height': '40px',
                  'font-weight': 'bold',
                  'font-size': '12px',
                  'margin-left': '10px',
                  'top': '35px',
                  'z-index': '1',
                  'position': 'absolute',
                  'cursor': 'pointer',
                }).on('mouseenter', function () {
                  $(this).css('background-position', '0px -45px');
                }).on('mouseleave', function () {
                  $(this).css('background-position', '0px 0px');
                }).click(function () {
                  loginNow(t1);
                });
                $('#custom').css({
                  'background-image': 'url(' + TWX.Images('LT_loginC') + ')',
                  'background-repeat': 'no-repeat',
                  'height': '36px',
                  'width': '144px',
                  'text-align': 'left',
                  'padding-left': '15px',
                  'line-height': '32px',
                  'font-weight': 'bold',
                  'font-size': '11px',
                  'margin-left': '45px',
                  'top': '70px',
                  'z-index': '1',
                  'position': 'absolute',
                  'cursor': 'pointer',
                }).on('mouseenter', function () {
                  $(this).css('background-position', '0px -36px');
                }).on('mouseleave', function () {
                  $(this).css('background-position', '0px 0px');
                }).click(function () {
                  loginNow(t2);
                });
                $('#cust1').css({
                  'margin-left': '160px',
                  'top': '78px',
                  'z-index': '2',
                  'position': 'absolute',
                  'cursor': 'pointer',
                }).click(function () {
                  var checkB = {},
                  checkD = {};
                  $('#loginMore').hide();
                  $('#allWorlds').empty();
                  $('#allWorlds').css('text-align', 'left');
                  for (var k = 0; k < t1.length; k++) {
                    checkB[t1[k]] = new west.gui.Checkbox().setLabel(Worlds.data[t1[k]].name).setSelected(state[t1[k]]).appendTo($('#allWorlds'));
                    $('#allWorlds').append('<br><div style="height:5px;">');
                  }
                  var butB = new west.gui.Button(TWXlang.save, function () {
                    for (var l in checkB) {
                      checkD[l] = checkB[l].isSelected();
                      localStorage.setItem('TWLTcustom1', JSON.stringify(checkD));
                    }
                    new UserMessage(TWXlang.saveMessage, 'success').show();
                  });
                  butB.appendTo($('#allWorlds'));
                });
              };
            })();
          }
        }, 100);
      }
    }
  }
});

  });
  // TW-Collections-SK Translation | 1.4.0 | Surge (updated by Tom Robert)
  start("TW-Collections-SK Translation", ["^https?://(?:[^./:@]+\\.)+the\\-west\\.[^/:@]+(?::\\d+)?/game\\.php.*$"], [], function () {
(function (e) {
  var t = document.createElement('script');
  t.type = 'application/javascript';
  t.textContent = '(' + e + ')();';
  document.body.appendChild(t);
  t.parentNode.removeChild(t)
})
(function () {
  if (window.location.href.indexOf('.the-west.') > 0) {
    TWT_ADDLANG = {
      translator: 'Surge',
      idscript: '7259',
      version: '1.4.0',
      short_name: 'sk',
      name: 'Slovenčina',
      translation: {
        description: '<center><BR /><bZTW-Collections</b><br>Tipy a hlásenie chýbajúcich predmetov do zbierok<br>Zoznam vecí potrebných do zbierok<br>Poplatky v banke<br>Rôzne skratky<br>Možnosť vymazať všetky oznámenia<br>Doplnkové filtre v inventári (duplicitné, použitelné, recepty, súpravy)<br>a omnoho viac...',
        Options: {
          tab: {
            setting: 'Nastavenia'
          },
          checkbox_text: {
            box: {
              title: 'Funkcie / Skratky',
              options: {
                goHome: 'Ísť do mesta',
                goToDaily1: 'Mesto duchov',
                goToDaily2: 'Waupeeho indiánska dedina',
                ownSaloon: 'Otvoriť Salón',
                openMarket: 'Otvoriť Trh',
                mobileTrader: 'Otvoriť Obchodníka',
                forum: 'Otvoriť fórum',
                listNeeded: 'Potrebné veci do zbierok'
              }
            },
            collection: {
              title: 'Zbierky',
              options: {
                gereNewItems: 'Spravovať nové predmety na základe hotových úspechov',
                patchsell: 'Označiť v inventári chýbajúce predmety',
                patchtrader: 'Označiť u Obchodníka chýbajúce predmety',
                patchmarket: 'Označiť na trhu chýbajúce predmety',
                showmiss: 'Okno so zoznamom chýbajúcich predmetov',
                filterMarket: 'Filter trhu: zobraziť iba chýbajúce predmety (do zbierok)'
              }
            },
            inventory: {
              title: 'Filtre v inventári',
              //doublons: 'Doplnkové filtre v inventári (duplicitné, použitelné, recepty, súpravy)',
              options: {
                doublons: 'Pridať tlačítka na hľadanie duplicitných predmetov',
                useables: 'Pridať tlačítko na hľadanie použiteľných produktov',
                recipe: 'Pridať tlačítko na hľadanie receptov',
                sets: 'Pridať tlačítko so zoznamom súprav',
                sum: 'Zobraziť pri hľadaní predajnú cenu na základe cien v obchode'
              }
            },
            miscellaneous: {
              title: 'Rôzne',
              options: {
                lang: 'Jazyk',
                logout: 'Pridať tlačítko na odhlásenie',
                deleteAllReports: 'Pridať možnosť zmazania všetkých oznámení',
                showFees: 'Zobrazovať v banke poplatky po prejdení myšou',
				popupTWT: 'Otvorte menu TW Collections na myši visenie'
              }
            },
			craft: {
                title: 'Craft',
                options: {
                  filterMarket: 'Icon for searching craft item in the market',
                  filterMiniMap: 'Icon for searching craft item job in the minimap'
                }
              },
            twdbadds: {
              title: 'Clothcalc doplnok',
              options: {
                filterBuyMarket: 'Filter trhu: zobraziť iba chýbajúce predmety <a target=\'_blanck\' href="http://tw-db.info/?strana=userscript">(twdb add)</a>',
                //addNewToShop: 'Označiť u obchodníka nové predmety'
              }
            }
          },
          message: {
            title: 'Informácie',
            message: 'Nastavenia boli zmenené.',
            reloadButton: 'Znovu načítaj túto stránku',
            gameButton: 'Späť do hry',
            indispo: 'Nastavenie je nedostupné (Zbierky už sú dokončené alebo nastala chyba scriptu)',
            more: 'Viac ?',
            moreTip: 'Otvoriť poďakovania prekladateľom'
          },
          update: {
            title: 'Aktualizácia TW Collections',
            upddaily: 'Každý deň',
            updweek: 'Každý týždeň',
            updnever: 'Nikdy',
            checknow: 'Skontrolovať dostupnosť aktualizácie',
            updok: 'Script TW-Collections je aktuálny',
            updlangmaj: 'Je k dispozícii aktualizácia jedného alebo viacerých jazykov pre TW Collections script.<BR>Otvor adresu nižšie pre aktualizáciu.',
            updscript: 'Je k dispozícii aktualizácia pre TW Collections<br/>Aktualizovať teraz?',
            upderror: 'Pri aktualizácii nastala chyba, skús nainštalovať script alebo jazyk manuálne'
          },
          saveButton: 'Uložiť'
        },
		Craft: {
            titleMarket: 'Search this item in the market',
            titleMinimap: 'Find corresponding job in the minimap'
          },
        ToolBox: {
          title: 'Funkcie',
          list: {
            openOptions: 'Nastavenia'
          }
        },
        Doublons: {
          tip: 'Zobraziť iba duplicitné',
          current: 'Aktuálny výber',
          noset: 'Okrem predmetov zo súprav',
          sellable: 'Predajné',
          auctionable: 'Vydražiteľné',
          tipuse: 'Zobraziť iba použiteľné',
          tiprecipe: 'Zobraziť iba recepty',
          tipsets: 'Zobraziť predmety súprav',
          sellGain: '$ od obchodníka'
        },
        Logout: {
          title: 'Odhlásiť sa'
        },
        AllReportsDelete: {
          button: 'Zmazať všetko',
          title: 'Zmazať všetky oznámenia',
          work: 'Práca',
          progress: 'Priebeh',
          userConfirm: 'Potvrdenie používateľa',
          loadPage: 'Načítať stránku',
          deleteReports: 'Zmazať oznámenia',
          confirmText: 'Zmazať všetky oznámenia, si si istý?',
          deleteYes: 'Áno, zmazať',
          deleteNo: 'Nie, zrušiť',
          status: {
            title: 'Status',
            wait: 'Čakaj',
            successful: 'Úspešné',
            fail: 'Chyba',
            error: 'Chyba'
          }
        },
        fees: {
          tipText: '%1% Poplatky: $%2'
        },
        twdbadds: {
          buyFilterTip: 'Zobraziť iba chýbajúce predmety',
          buyFilterLabel: 'Chýbajúce predmety'
        },
        collection: {
          miss: 'Chýba: ',
		  colTabTitle: 'Collections',
          setTabTitle: 'Sets',
          thText: '%1 chýbajúcich predmetov',
          thEncours: 'Na tento predmet máš ponuku',
          thFetch: 'Tento predmet si môžeš vyzdvihnúť v meste %1',
          allOpt: 'Všetko',
          collectionFilterTip: 'Zobraziť iba veci do zbierok',
          collectionFilterLabel: 'Iba zbierky',
          select: 'Zvoliť >>',
          listText: 'Predmety potrebné do zbierok',
		  listSetText: 'Set\'s items needed',
		  filters: 'Filter',
          atTrader: 'Predáva mobilné obchodníkom',
          atBid: 'Aktuálne ponuky',
          atCurBid: 'Skončil ponuky',
          atTraderTitle: 'Zobraziť položky v predaji v mobilnom obchodníka',
          atBidTitle: 'Zobraziť prúdy ponuky',
          atCurBidTitle: 'Zobraziť položky vyhľadateľné na trhu',
          searchMarket: 'Hľadanie na trhu',
          patchsell: {
            title: 'Začaté zbierky'
          }
        }
      },
      // DO NOT CHANGE BELOW THIS LIGNE
      init: function () {
        var that = this;
        if (typeof window.TWT == 'undefined'
		|| window.TWT == null) {
          EventHandler.listen('twt.init', function () {
            TWT.addPatchLang(that);
            return EventHandler.ONE_TIME_EVENT;
          });
        } else {
          EventHandler.signal('twt_lang_started_'
		  + that.short_name);
          TWT.addPatchLang(that);
        }
      }
    }.init();
  }
});

  });
})();
