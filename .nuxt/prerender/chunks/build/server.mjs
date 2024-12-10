import { version, unref, inject, useSSRContext, hasInjectionContext, getCurrentInstance, defineComponent, ref, mergeProps, useModel, isRef, watch, withCtx, createVNode, createTextVNode, Transition, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, computed, mergeModels, createApp, effectScope, shallowReactive, reactive, getCurrentScope, toRef, provide, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, defineAsyncComponent, h, isReadonly, isShallow, isReactive, toRaw } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/ofetch/dist/node.mjs';
import { b as baseURL } from '../_/renderer.mjs';
import { createHooks } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1 } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/h3/dist/index.mjs';
import { hasProtocol, isScriptProtocol, joinURL, withQuery, isEqual, stringifyParsedURL, stringifyQuery, parseQuery } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/ufo/dist/index.mjs';
import { getActiveHead, CapoPlugin } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/@unhead/shared/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/radix3/dist/index.mjs';
import { defu } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/defu/dist/defu.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderList, ssrRenderDynamicModel, ssrRenderSuspense, ssrRenderVNode } from 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/devalue/index.js';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/@unhead/ssr/dist/index.mjs';
import '../routes/api/main-api.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/ohash/dist/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/development/kennrheym/kennrhey-miraflores-portfolio/node_modules/pathe/dist/index.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_CaKIoANnI2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          {
            const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
            if (routeRules.appMiddleware) {
              for (const key in routeRules.appMiddleware) {
                const guard = nuxtApp._middleware.named[key];
                if (!guard) {
                  return;
                }
                if (routeRules.appMiddleware[key]) {
                  middlewareEntries.add(guard);
                } else {
                  middlewareEntries.delete(guard);
                }
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  router_CaKIoANnI2,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const _imports_0$2 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20focusable='false'%20aria-hidden='true'%3e%3cpath%20d='M21%206H3V5h18v1zm0%205H3v1h18v-1zm0%206H3v1h18v-1z'%20fill='%23FFF'%3e%3c/path%3e%3c/svg%3e";
var ScreenEnum = /* @__PURE__ */ ((ScreenEnum2) => {
  ScreenEnum2[ScreenEnum2["MAIN_CONTENT"] = 0] = "MAIN_CONTENT";
  ScreenEnum2[ScreenEnum2["COMPONENT_SCREEN"] = 1] = "COMPONENT_SCREEN";
  return ScreenEnum2;
})(ScreenEnum || {});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "color-theme-toggle",
  __ssrInlineRender: true,
  setup(__props) {
    const isDarkTheme = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "theme-color-toggle-container",
        class: ["clickable", [unref(isDarkTheme) ? "dark-mode" : "light-mode"]]
      }, _attrs))} data-v-4632ffab><div class="ball-container" data-v-4632ffab><div class="ball" data-v-4632ffab></div></div></div>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/color-theme-toggle.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ColorThemeToggle = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4632ffab"]]);
const _imports_1 = "" + __buildAssetsURL("CSS3.0ananGdD.png");
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "menu-drawer",
  __ssrInlineRender: true,
  props: {
    "isOpen": {
      type: Boolean,
      default: false,
      required: true
    },
    "isOpenModifiers": {}
  },
  emits: ["update:isOpen"],
  setup(__props) {
    const isOpen = useModel(__props, "isOpen");
    ref(null);
    useState("activeScreen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fbbf7503><div class="${ssrRenderClass([{ "drawer--open": isOpen.value }, "drawer"])}" data-v-fbbf7503><div id="top-row" data-v-fbbf7503><div id="container--icon-menu" class="clickable" data-v-fbbf7503><img${ssrRenderAttr("src", _imports_0$2)} data-v-fbbf7503></div><div class="logo clickable" style="${ssrRenderStyle({ "margin-left": "6px" })}" data-v-fbbf7503>Home</div></div><div class="menu-option clickable" style="${ssrRenderStyle({ "position": "relative" })}" data-v-fbbf7503><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "height": "24px", "width": "24px", "margin-right": "10px" })}" data-v-fbbf7503> My components </div><div class="divider" data-v-fbbf7503></div></div>`);
      if (isOpen.value) {
        _push(`<div class="overlay" data-v-fbbf7503></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/menu-drawer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const MenuDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-fbbf7503"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "main-header",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    useState("activeScreen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "fixed--top",
        style: { "width": "100%" }
      }, _attrs))} data-v-e1dfd1bb><div class="header-container" style="${ssrRenderStyle({ "justify-content": "space-between", "padding-inline": "16px" })}" data-v-e1dfd1bb><div id="header--start" data-v-e1dfd1bb><div id="container--icon-menu" class="clickable" data-v-e1dfd1bb><img${ssrRenderAttr("src", _imports_0$2)} data-v-e1dfd1bb></div><div class="logo clickable" style="${ssrRenderStyle({ "margin-left": "6px" })}" data-v-e1dfd1bb> Home </div></div><div data-v-e1dfd1bb>`);
      _push(ssrRenderComponent(ColorThemeToggle, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(MenuDrawer, {
        "is-open": unref(isMenuOpen),
        "onUpdate:isOpen": ($event) => isRef(isMenuOpen) ? isMenuOpen.value = $event : null
      }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/main-header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const FixedMainHeader = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-e1dfd1bb"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "carrousel",
  __ssrInlineRender: true,
  props: {
    "activeCardIndex": {
      type: Number,
      default: 0,
      required: true
    },
    "activeCardIndexModifiers": {},
    "dataCount": {
      type: Number,
      default: 1,
      required: true
    },
    "dataCountModifiers": {},
    "cardTitle": {
      type: String,
      default: "",
      required: false
    },
    "cardTitleModifiers": {}
  },
  emits: ["update:activeCardIndex", "update:dataCount", "update:cardTitle"],
  setup(__props) {
    const activeCardIndex = useModel(__props, "activeCardIndex");
    const dataCount = useModel(__props, "dataCount");
    const cardTitle = useModel(__props, "cardTitle");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "carrousel-container" }, _attrs))} data-v-cc437453><div class="${ssrRenderClass([{ "arrow--inactive": activeCardIndex.value <= 0 }, "arrow-container clickable"])}" data-v-cc437453><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cc437453><polyline points="15 18 9 12 15 6" data-v-cc437453></polyline></svg></div><div id="carrousel-card-container" data-v-cc437453><div style="${ssrRenderStyle({ "margin-bottom": "6px", "font-size": "20px" })}" data-v-cc437453>${ssrInterpolate(cardTitle.value)}</div>`);
      ssrRenderSlot(_ctx.$slots, "card", {}, null, _push, _parent);
      _push(`<div id="card-position-circle-container" data-v-cc437453><!--[-->`);
      ssrRenderList(dataCount.value, (index) => {
        _push(`<div class="${ssrRenderClass([{ "active-card-circle": activeCardIndex.value == index - 1 }, "card-position-circle clickable"])}" data-v-cc437453></div>`);
      });
      _push(`<!--]--></div></div><div class="${ssrRenderClass([{ "arrow--inactive": activeCardIndex.value >= dataCount.value - 1 }, "arrow-container clickable"])}" data-v-cc437453><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cc437453><polyline points="9 6 15 12 9 18" data-v-cc437453></polyline></svg></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/carrousel/carrousel.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Carrousel = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-cc437453"]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2018'%20width='24'%20height='24'%20fill='none'%20stroke='%23fb9e9e'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M12%205l-7%207m7-7l7%207'/%3e%3c/svg%3e";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "modal",
  __ssrInlineRender: true,
  props: {
    "isModalVisible": {
      type: Boolean,
      default: false,
      required: true
    },
    "isModalVisibleModifiers": {}
  },
  emits: ["update:isModalVisible"],
  setup(__props) {
    const isModalVisible = useModel(__props, "isModalVisible");
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      if (isModalVisible.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-mask" }, _attrs))}><div class="modal-wrapper"><div class="modal-container">`);
        ssrRenderSlot(_ctx.$slots, "modal-content", {}, null, _push, _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/common/modal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "work-experience-card-modal",
  __ssrInlineRender: true,
  props: {
    "isCardModalVisible": {
      type: Boolean,
      default: false,
      required: true
    },
    "isCardModalVisibleModifiers": {},
    "cardData": {
      type: Object,
      default: {},
      required: true
    },
    "cardDataModifiers": {}
  },
  emits: ["update:isCardModalVisible", "update:cardData"],
  setup(__props) {
    const isCardModalVisible = useModel(__props, "isCardModalVisible");
    const cardData = useModel(__props, "cardData");
    const isContributionDetailsCollapsed = ref(false);
    const isTechDetailsCollapsed = ref(true);
    watch(isCardModalVisible, (newValue) => {
      if (!newValue) {
        isContributionDetailsCollapsed.value = false;
        isTechDetailsCollapsed.value = true;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isCardModalVisible.value) {
        _push(ssrRenderComponent(_sfc_main$c, mergeProps({
          "is-modal-visible": isCardModalVisible.value,
          "onUpdate:isModalVisible": ($event) => isCardModalVisible.value = $event
        }, _attrs), {
          "modal-content": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div style="${ssrRenderStyle({ "background-color": "#f7f2ff", "height": "fit-content", "width": "800px", "border-radius": "10px" })}" data-v-2dcf2d36${_scopeId}><div class="modal-content" style="${ssrRenderStyle({ "height": "fit-content", "width": "760px", "padding": "20px" })}" data-v-2dcf2d36${_scopeId}><div class="content-container" data-v-2dcf2d36${_scopeId}><div class="content-header" data-v-2dcf2d36${_scopeId}><div class="container--icon-arrow clickable" data-v-2dcf2d36${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="${ssrRenderClass({ "img--inverted": !unref(isContributionDetailsCollapsed) })}" data-v-2dcf2d36${_scopeId}></div> Contributions </div>`);
              if (!unref(isContributionDetailsCollapsed)) {
                _push2(`<div class="content-body" data-v-2dcf2d36${_scopeId}><!--[-->`);
                ssrRenderList(cardData.value.contribution, (contribution) => {
                  _push2(`<div style="${ssrRenderStyle({ "padding-left": "10px", "margin-bottom": "6px" })}" data-v-2dcf2d36${_scopeId}>${ssrInterpolate(contribution)}</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="content-container" data-v-2dcf2d36${_scopeId}><div class="content-header" data-v-2dcf2d36${_scopeId}><div class="container--icon-arrow clickable" data-v-2dcf2d36${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="${ssrRenderClass({ "img--inverted": !unref(isTechDetailsCollapsed) })}" data-v-2dcf2d36${_scopeId}></div> Tech Used </div>`);
              if (!unref(isTechDetailsCollapsed)) {
                _push2(`<div class="content-body" data-v-2dcf2d36${_scopeId}><!--[-->`);
                ssrRenderList(cardData.value.tech, (tech) => {
                  _push2(`<div style="${ssrRenderStyle({ "padding-left": "10px", "margin-bottom": "6px" })}" data-v-2dcf2d36${_scopeId}>${ssrInterpolate(tech)}</div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { style: { "background-color": "#f7f2ff", "height": "fit-content", "width": "800px", "border-radius": "10px" } }, [
                  createVNode("div", {
                    class: "modal-content",
                    style: { "height": "fit-content", "width": "760px", "padding": "20px" }
                  }, [
                    createVNode("div", { class: "content-container" }, [
                      createVNode("div", { class: "content-header" }, [
                        createVNode("div", {
                          class: "container--icon-arrow clickable",
                          onClick: ($event) => isContributionDetailsCollapsed.value = !unref(isContributionDetailsCollapsed)
                        }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            class: { "img--inverted": !unref(isContributionDetailsCollapsed) }
                          }, null, 2)
                        ], 8, ["onClick"]),
                        createTextVNode(" Contributions ")
                      ]),
                      createVNode(Transition, { name: "fade" }, {
                        default: withCtx(() => [
                          !unref(isContributionDetailsCollapsed) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "content-body"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(cardData.value.contribution, (contribution) => {
                              return openBlock(), createBlock("div", { style: { "padding-left": "10px", "margin-bottom": "6px" } }, toDisplayString(contribution), 1);
                            }), 256))
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "content-container" }, [
                      createVNode("div", { class: "content-header" }, [
                        createVNode("div", {
                          class: "container--icon-arrow clickable",
                          onClick: ($event) => isTechDetailsCollapsed.value = !unref(isTechDetailsCollapsed)
                        }, [
                          createVNode("img", {
                            src: _imports_0$1,
                            class: { "img--inverted": !unref(isTechDetailsCollapsed) }
                          }, null, 2)
                        ], 8, ["onClick"]),
                        createTextVNode(" Tech Used ")
                      ]),
                      createVNode(Transition, { name: "fade" }, {
                        default: withCtx(() => [
                          !unref(isTechDetailsCollapsed) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "content-body"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(cardData.value.tech, (tech) => {
                              return openBlock(), createBlock("div", { style: { "padding-left": "10px", "margin-bottom": "6px" } }, toDisplayString(tech), 1);
                            }), 256))
                          ])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/main-content/work-experience-card-modal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const WorkExperienceCardModal = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-2dcf2d36"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "main-content",
  __ssrInlineRender: true,
  setup(__props) {
    const activeCardIndex = ref(0);
    const cardTitle = ref("Professional Experience");
    const isCardModalVisible = ref(false);
    const cardData = ref([
      {
        title: "Full-stack Web Developer",
        company: "Daelibs Workforce Guidance (Australia - remote)",
        date: "(Nov. 2022 - Oct. 2024)",
        description: "Designed and implemented front and backend features/pages for IoT Web App",
        contribution: [
          "CSV and PDF Exports using ReportLab",
          "Implemented Maps Javascript API for Features",
          "Transition JQuery pages to Vue 3 + Typescript",
          "Created global components using Vue 3 + Typescript",
          "APIs for mobile app",
          "Wrote unit test and coverage for methods and APIs",
          "Wrote documentations for pages/features and components",
          "Created website for new clients",
          "Designed and implemented backend and database (procedures, triggers, etc.) for old/new features"
        ],
        tech: ["JQuery, Vue 3, Typescript", "Django, Python", "PostgreSQL", "ReportLab", "Maps for Javascript", "Figma", "Jira", "Gitlab"]
      },
      {
        title: "Full-stack Mobile Developer",
        company: "Acamp via Miller Development (Sweden - remote)",
        date: "(Jul. 2021 - Nov. 2022)",
        description: "Implemented features for Acamp and Stellplatz Android Apps",
        contribution: [
          "Custom advertisement feature",
          "Used firebase to monitor engagement metrics",
          "Implemented map features for kotlin-android app (Acamp)",
          "Fixes/transition features for transition mobile app (Stellplatz)",
          "App Review/Rating features",
          "Backend fixes for stellplatz app"
        ],
        tech: ["Kotlin", "PHP", "PostgreSQL", "Firebase", "Jira", "Figma", "Github"]
      },
      {
        title: "Junior Web Developer",
        company: "Pharmaceutical Product Development (US - remote)",
        date: "(Jan. 2020 - Jul. 2021)",
        description: "Developed features for internal web app",
        tech: ["JQuery, ReactJS", "PHP, Laravel", "MySQL", "Docker", "Github"],
        contribution: [
          "Database management, outliers fixes",
          "APIs for internal app",
          "Email editor for internal app",
          "Designed and implemented backend and database schema (procedures, triggers, etc.) for features"
        ]
      }
    ]);
    const carrouselDataCount = ref(cardData.value.length);
    const openCardModal = () => {
      isCardModalVisible.value = true;
    };
    const selectedWorkExperienceData = computed(() => {
      return cardData.value[activeCardIndex.value];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "main-content-container" }, _attrs))}><div style="${ssrRenderStyle({ "padding-bottom": "10px" })}"><div style="${ssrRenderStyle({ "font-size": "48px" })}"><div>Hi, my</div><div>name is <span style="${ssrRenderStyle({ "color": "#ace5cb" })}">Kennrhey</span></div></div><div style="${ssrRenderStyle({ "margin-top": "22px" })}"><div style="${ssrRenderStyle({ "font-size": "20px" })}"> I&#39;m a full-stack web developer </div><div style="${ssrRenderStyle({ "font-size": "13px", "margin-top": "5px" })}"><div> I&#39;m passionate with building front-end components </div><div> and implementing business logic </div></div></div></div><div>`);
      _push(ssrRenderComponent(Carrousel, {
        "active-card-index": unref(activeCardIndex),
        "onUpdate:activeCardIndex": ($event) => isRef(activeCardIndex) ? activeCardIndex.value = $event : null,
        "card-title": unref(cardTitle),
        "onUpdate:cardTitle": ($event) => isRef(cardTitle) ? cardTitle.value = $event : null,
        "data-count": unref(carrouselDataCount),
        "onUpdate:dataCount": ($event) => isRef(carrouselDataCount) ? carrouselDataCount.value = $event : null
      }, {
        card: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="carrousel-card clickable"${_scopeId}><div${_scopeId}>${ssrInterpolate(unref(cardData)[unref(activeCardIndex)].title)}</div><div${_scopeId}>${ssrInterpolate(unref(cardData)[unref(activeCardIndex)].company)}</div><div${_scopeId}>${ssrInterpolate(unref(cardData)[unref(activeCardIndex)].date)}</div><div class="details-icon" style="${ssrRenderStyle({ "margin-top": "14px" })}"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"${_scopeId}></rect><line x1="7" y1="9" x2="17" y2="9"${_scopeId}></line><line x1="7" y1="13" x2="17" y2="13"${_scopeId}></line><line x1="7" y1="17" x2="17" y2="17"${_scopeId}></line></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "carrousel-card clickable" }, [
                createVNode("div", null, toDisplayString(unref(cardData)[unref(activeCardIndex)].title), 1),
                createVNode("div", null, toDisplayString(unref(cardData)[unref(activeCardIndex)].company), 1),
                createVNode("div", null, toDisplayString(unref(cardData)[unref(activeCardIndex)].date), 1),
                createVNode("div", {
                  class: "details-icon",
                  style: { "margin-top": "14px" },
                  onClick: ($event) => openCardModal()
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    createVNode("rect", {
                      x: "3",
                      y: "3",
                      width: "18",
                      height: "18",
                      rx: "2",
                      ry: "2"
                    }),
                    createVNode("line", {
                      x1: "7",
                      y1: "9",
                      x2: "17",
                      y2: "9"
                    }),
                    createVNode("line", {
                      x1: "7",
                      y1: "13",
                      x2: "17",
                      y2: "13"
                    }),
                    createVNode("line", {
                      x1: "7",
                      y1: "17",
                      x2: "17",
                      y2: "17"
                    })
                  ]))
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WorkExperienceCardModal, {
        "is-card-modal-visible": unref(isCardModalVisible),
        "onUpdate:isCardModalVisible": ($event) => isRef(isCardModalVisible) ? isCardModalVisible.value = $event : null,
        "card-data": unref(selectedWorkExperienceData),
        "onUpdate:cardData": ($event) => isRef(selectedWorkExperienceData) ? selectedWorkExperienceData.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/main-content.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("HTML5.DDlchswO.png");
const _imports_2 = "" + __buildAssetsURL("Sass.DmzN2H0p.png");
const _imports_3 = "" + __buildAssetsURL("JavaScript.DJTE1fL7.png");
const _imports_4 = "" + __buildAssetsURL("jQuery.C2LIsams.png");
const _imports_5 = "" + __buildAssetsURL("React.CdrPibm4.png");
const _imports_6 = "" + __buildAssetsURL("Vue.js.DgkQqFWc.png");
const _imports_7 = "" + __buildAssetsURL("PHP.UFe6EMyZ.png");
const _imports_8 = "" + __buildAssetsURL("Laravel.CdgKIkwT.png");
const _imports_9 = "" + __buildAssetsURL("Python.Ddv6UdH5.png");
const _imports_10 = "" + __buildAssetsURL("Django.CmS7ARxX.png");
const _imports_11 = "" + __buildAssetsURL("Kotlin.CUL6Sce1.png");
const _imports_12 = "" + __buildAssetsURL("MySQL.D2b_KIHY.png");
const _imports_13 = "" + __buildAssetsURL("PostgresSQL.IlMO64UL.png");
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ style: {} }, _attrs))} data-v-1cd003cb><div data-v-1cd003cb><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "margin-left": "0" })}" data-v-1cd003cb><img${ssrRenderAttr("src", _imports_1)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_2)} data-v-1cd003cb><div class="icon-separator" data-v-1cd003cb></div><img${ssrRenderAttr("src", _imports_3)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_4)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_5)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_6)} data-v-1cd003cb><div class="icon-separator" data-v-1cd003cb></div><img${ssrRenderAttr("src", _imports_7)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_8)} data-v-1cd003cb><div class="icon-separator" data-v-1cd003cb></div><img${ssrRenderAttr("src", _imports_9)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_10)} data-v-1cd003cb><div class="icon-separator" data-v-1cd003cb></div><img${ssrRenderAttr("src", _imports_11)} data-v-1cd003cb><div class="icon-separator" data-v-1cd003cb></div><img${ssrRenderAttr("src", _imports_12)} data-v-1cd003cb><img${ssrRenderAttr("src", _imports_13)} style="${ssrRenderStyle({ "margin-right": "0" })}" data-v-1cd003cb></div></footer>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/main-footer.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const MainFooter = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1cd003cb"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    text: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: "contained"
      /* CONTAINED */
    }
  }, {
    "isDisabled": {
      type: Boolean,
      default: false,
      required: false
    },
    "isDisabledModifiers": {}
  }),
  emits: ["update:isDisabled"],
  setup(__props) {
    const props = __props;
    const isDisabled = useModel(__props, "isDisabled");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["button-container clickable", {
          "outlined": props.variant == "outlined",
          "contained": props.variant == "contained",
          "contained-disabled": isDisabled.value && props.variant == "contained",
          "outlined-disabled": isDisabled.value && props.variant == "outlined"
          /* OUTLINED */
        }]
      }, _attrs))} data-v-764bfdc8>${ssrInterpolate(__props.text)}</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/common/button.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-764bfdc8"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "button-group",
  __ssrInlineRender: true,
  setup(__props) {
    const buttonDisabled = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-group-container" }, _attrs))} data-v-5ef4548f><div class="title" data-v-5ef4548f> Buttons </div><div id="button-group" data-v-5ef4548f>`);
      _push(ssrRenderComponent(AppButton, { text: "CONTAINED" }, null, _parent));
      _push(ssrRenderComponent(AppButton, {
        text: "CONTAINED DISABLED",
        "is-disabled": unref(buttonDisabled),
        "onUpdate:isDisabled": ($event) => isRef(buttonDisabled) ? buttonDisabled.value = $event : null
      }, null, _parent));
      _push(ssrRenderComponent(AppButton, {
        text: "OUTLINED",
        variant: "outlined"
      }, null, _parent));
      _push(ssrRenderComponent(AppButton, {
        text: "OUTLINED DISABLED",
        variant: "outlined",
        "is-disabled": unref(buttonDisabled),
        "onUpdate:isDisabled": ($event) => isRef(buttonDisabled) ? buttonDisabled.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/my-components/button-group.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5ef4548f"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "text-input",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    title: {
      type: String,
      required: false,
      default: ""
    },
    textLimit: {
      type: Number,
      required: false,
      default: null
    },
    showVisibilityIcon: {
      type: Boolean,
      required: false,
      default: false
    }
  }, {
    "isTextVisible": {
      type: Boolean,
      default: true,
      required: false
    },
    "isTextVisibleModifiers": {},
    "inputText": {
      type: String,
      required: true
    },
    "inputTextModifiers": {}
  }),
  emits: ["update:isTextVisible", "update:inputText"],
  setup(__props) {
    const props = __props;
    const isTextVisible = useModel(__props, "isTextVisible");
    const inputText = useModel(__props, "inputText");
    const isInputFocused = ref(false);
    const placeholder = computed(() => {
      return isInputFocused.value ? "" : props.title;
    });
    const isInputActive = computed(() => {
      return isInputFocused.value || inputText.value.length;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "top-input-container",
        class: { "input--active": unref(isInputActive) }
      }, _attrs))} data-v-729db46f>`);
      if (props.title && unref(isInputActive)) {
        _push(`<div class="title" data-v-729db46f>${ssrInterpolate(__props.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.textLimit && unref(isInputActive)) {
        _push(`<div class="${ssrRenderClass([{ "text-counter--maxlength": inputText.value.length == __props.textLimit }, "text-counter"])}" data-v-729db46f>${ssrInterpolate(`${inputText.value.length}/${__props.textLimit}`)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="input-container" data-v-729db46f><input${ssrRenderAttr("type", __props.showVisibilityIcon && !isTextVisible.value ? "password" : "text")}${ssrRenderDynamicModel(__props.showVisibilityIcon && !isTextVisible.value ? "password" : "text", inputText.value, null)}${ssrRenderAttr("placeholder", unref(placeholder))}${ssrRenderAttr("maxlength", props.textLimit)} class="${ssrRenderClass({ "input--has-visibility-icon": __props.showVisibilityIcon })}" data-v-729db46f>`);
      if (__props.showVisibilityIcon) {
        _push(`<div class="visibility-icon-container clickable" data-v-729db46f>`);
        if (!isTextVisible.value) {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off" data-v-729db46f><path d="M17.94 17.94a10.94 10.94 0 0 1-5.94 2.06c-7 0-11-8-11-8a20.29 20.29 0 0 1 5.08-6.57" data-v-729db46f></path><path d="M1 1l22 22" data-v-729db46f></path><path d="M9.53 9.53a3 3 0 1 0 4.24 4.24" data-v-729db46f></path><path d="M12 4a10.94 10.94 0 0 1 5.57 1.5" data-v-729db46f></path></svg>`);
        } else {
          _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye" data-v-729db46f><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" data-v-729db46f></path><circle cx="12" cy="12" r="3" data-v-729db46f></circle></svg>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/custom/common/input/text-input.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-729db46f"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "input-group",
  __ssrInlineRender: true,
  setup(__props) {
    const textInput = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-group-container" }, _attrs))} data-v-89b2cf9d><div class="title" data-v-89b2cf9d> Text Input </div><div id="component-group" data-v-89b2cf9d><div style="${ssrRenderStyle({ "width": "300px" })}" data-v-89b2cf9d>`);
      _push(ssrRenderComponent(TextInput, {
        title: "Title",
        "show-visibility-icon": true,
        "input-text": unref(textInput),
        "onUpdate:inputText": ($event) => isRef(textInput) ? textInput.value = $event : null,
        "text-limit": 40
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/my-components/input-group.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-89b2cf9d"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "all-components",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "padding-top": "58px" } }, _attrs))} data-v-e2c134fb>`);
      _push(ssrRenderComponent(ButtonGroup, null, null, _parent));
      _push(ssrRenderComponent(InputGroup, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/my-components/all-components.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const AllComponents = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e2c134fb"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "my-component-screen",
  __ssrInlineRender: true,
  setup(__props) {
    const currentComponentScreen = ref(
      "all"
      /* All */
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "screen-container" }, _attrs))} data-v-507246ff><div id="component-selection-container" data-v-507246ff><div id="selection-title" class="clickable" data-v-507246ff> My Components </div><div class="component-label-container" data-v-507246ff> Button </div><div class="component-label-container" data-v-507246ff> Carrousel </div><div class="component-label-container" data-v-507246ff> Card </div><div class="component-label-container" data-v-507246ff> Divider </div><div class="component-label-container" data-v-507246ff> Drawer </div><div class="component-label-container" data-v-507246ff> Dropdown </div><div class="component-label-container" data-v-507246ff> Input </div><div class="component-label-container" data-v-507246ff> Loader </div><div class="component-label-container" data-v-507246ff> Navigation </div><div class="component-label-container" data-v-507246ff> Pop-up </div><div class="component-label-container" data-v-507246ff> Slider </div><div class="component-label-container" data-v-507246ff> Table </div><div class="component-label-container" data-v-507246ff> Toggle </div></div><div id="component-display-container" data-v-507246ff><div style="${ssrRenderStyle({ "height": "inherit", "overflow": "auto", "align-items": "flex-start" })}" data-v-507246ff>`);
      if (unref(currentComponentScreen) == "all") {
        _push(ssrRenderComponent(AllComponents, null, null, _parent));
      } else if (unref(currentComponentScreen) == "button") {
        _push(ssrRenderComponent(ButtonGroup, null, null, _parent));
      } else {
        _push(`<div data-v-507246ff></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/my-components/my-component-screen.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MyComponentScreen = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-507246ff"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const activeScreen = useState("activeScreen", () => ScreenEnum.MAIN_CONTENT);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-933be223>`);
      _push(ssrRenderComponent(FixedMainHeader, null, null, _parent));
      _push(`<main style="${ssrRenderStyle({ "justify-content": "center" })}" data-v-933be223>`);
      if (unref(activeScreen) == unref(ScreenEnum).COMPONENT_SCREEN) {
        _push(ssrRenderComponent(MyComponentScreen, null, null, _parent));
      } else {
        _push(`<div class="flex--all-centered" style="${ssrRenderStyle({ "margin-top": "56px" })}" data-v-933be223><div style="${ssrRenderStyle({ "padding-top": "20px" })}" data-v-933be223>`);
        _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(MainFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-933be223"]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CzcEqQ31.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-CU_Q4RS7.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, navigateTo as a, useNuxtApp as b, useRuntimeConfig as c, resolveUnrefHeadInput as d, entry$1 as default, injectHead as i, nuxtLinkDefaults as n, resolveRouteObject as r, useRouter as u };
//# sourceMappingURL=server.mjs.map
