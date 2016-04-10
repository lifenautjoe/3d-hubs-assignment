SystemJS.config({
  baseURL: "/",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "assets/": "assets/",
    "3d-hubs-assignment/": "app/"
  },
  bundles: {
    "storage/build.js": [
      "3d-hubs-assignment/main.ts",
      "npm:yui3-contextual-reset@1.0.5/cssreset-context.css!github:systemjs/plugin-css@0.1.20/css.js",
      "github:frankwallis/plugin-typescript@4.0.5.json",
      "3d-hubs-assignment/shared/index.ts",
      "3d-hubs-assignment/components/index.ts",
      "github:systemjs/plugin-css@0.1.20.json",
      "npm:yui3-contextual-reset@1.0.5.json",
      "3d-hubs-assignment/3dHubs.values.ts",
      "3d-hubs-assignment/3dHubs.config.ts",
      "3d-hubs-assignment/3dHubs.component.ts",
      "3d-hubs-assignment/3dHubs.module.ts",
      "3d-hubs-assignment/3dHubs.run.ts",
      "3d-hubs-assignment/shared/services/index.ts",
      "3d-hubs-assignment/shared/components/index.ts",
      "3d-hubs-assignment/components/home/index.ts",
      "3d-hubs-assignment/components/print/index.ts",
      "github:angular/bower-angular@1.5.3/angular.js",
      "github:thefabulousdev/ngComponentRouter@master/index.js",
      "npm:bluebird@3.3.4.json",
      "npm:bluebird@3.3.4/js/browser/bluebird.js",
      "3d-hubs-assignment/shared/services/event-dispatcher/index.ts",
      "3d-hubs-assignment/shared/components/header/index.ts",
      "3d-hubs-assignment/components/home/home.component.ts",
      "3d-hubs-assignment/components/print/print.component.ts",
      "github:angular/bower-angular@1.5.3.json",
      "3d-hubs-assignment/3dHubs.scss",
      "github:thefabulousdev/ngComponentRouter@master/angular_1_router.js",
      "github:thefabulousdev/ngComponentRouter@master.json",
      "3d-hubs-assignment/shared/services/event-dispatcher/event-dispatcher.service.ts",
      "github:mobilexag/plugin-sass@0.4.0.json",
      "3d-hubs-assignment/shared/components/header/header.component.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/lib/EventDispatcher.ts",
      "3d-hubs-assignment/shared/services/event-dispatcher/lib/EventCollection.ts"
    ]
  }
});