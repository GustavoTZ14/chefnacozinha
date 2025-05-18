import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_CvPKI5nd.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/gustavotz/Repositorios/chefnacozinha/","cacheDir":"file:///home/gustavotz/Repositorios/chefnacozinha/node_modules/.astro/","outDir":"file:///home/gustavotz/Repositorios/chefnacozinha/dist/","srcDir":"file:///home/gustavotz/Repositorios/chefnacozinha/src/","publicDir":"file:///home/gustavotz/Repositorios/chefnacozinha/public/","buildClientDir":"file:///home/gustavotz/Repositorios/chefnacozinha/dist/","buildServerDir":"file:///home/gustavotz/Repositorios/chefnacozinha/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"API/tableComplete","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tablecomplete","isIndex":false,"type":"endpoint","pattern":"^\\/API\\/tableComplete\\/?$","segments":[[{"content":"API","dynamic":false,"spread":false}],[{"content":"tableComplete","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/API/tableComplete.ts","pathname":"/API/tableComplete","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"API/tableTitle","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tabletitle","isIndex":false,"type":"endpoint","pattern":"^\\/API\\/tableTitle\\/?$","segments":[[{"content":"API","dynamic":false,"spread":false}],[{"content":"tableTitle","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/API/tableTitle.ts","pathname":"/API/tableTitle","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/gustavotz/Repositorios/chefnacozinha/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}],["/home/gustavotz/Repositorios/chefnacozinha/src/pages/categorias/[...categoria].astro",{"propagation":"none","containsHead":true}],["/home/gustavotz/Repositorios/chefnacozinha/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/gustavotz/Repositorios/chefnacozinha/src/pages/search.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/API/tableComplete@_@ts":"pages/api/tablecomplete.astro.mjs","\u0000@astro-page:src/pages/API/tableTitle@_@ts":"pages/api/tabletitle.astro.mjs","\u0000@astro-page:src/pages/categorias/[...categoria]@_@astro":"pages/categorias/_---categoria_.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CagqIyeW.mjs","/home/gustavotz/Repositorios/chefnacozinha/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","\u0000virtual:astro:assets/fonts/internal":"chunks/internal_CK_otAB1.mjs","/home/gustavotz/Repositorios/chefnacozinha/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BTGyyq-I.mjs","/home/gustavotz/Repositorios/chefnacozinha/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.AdxF2t5b.js","/home/gustavotz/Repositorios/chefnacozinha/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.5JGI4hcc.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/gustavotz/Repositorios/chefnacozinha/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"form\");t?.addEventListener(\"submit\",n=>{n.preventDefault();const e=document.getElementById(\"inSearch\");e.value&&(window.location.href=`/search/?q=${encodeURIComponent(e.value)}`)});"]],"assets":["/_astro/_slug_.CYUbH_TS.css","/favicon.svg","/_astro/search.astro_astro_type_script_index_0_lang.AdxF2t5b.js","/_astro/fonts/aad6efc5ec240d2a.woff2","/API/tableComplete","/API/tableTitle","/search/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"WspQgi8zXaM9ODbC9o9K6KDVTszaIixf3ny9ETWDP5E=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/gustavotz/Repositorios/chefnacozinha/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
